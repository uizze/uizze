import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { lstat, readFile, readdir, realpath } from 'node:fs/promises';
import path from 'node:path';

const [project, indexURL] = process.argv.slice(2);
assert(project, 'Usage: node plugins/verify-installed-skills.mjs <project> [published-index-url]');
let root = await realpath(project);
const projectStat = await lstat(root);
assert(projectStat.isDirectory() && !projectStat.isSymbolicLink(), 'Native consumer project must be a regular directory');
for (const component of ['.agents', 'skills']) {
  root = path.join(root, component);
  const stat = await lstat(root);
  assert(stat.isDirectory() && !stat.isSymbolicLink(), `Native consumer directory must not be a symlink: ${component}`);
}
const mitGrantPattern = /Copyright[^\r\n]+[\s\S]*Permission is hereby granted[\s\S]*The above copyright notice and this permission notice[\s\S]*THE SOFTWARE IS PROVIDED[\s\S]*AS IS[\s\S]*WITHOUT WARRANTY OF ANY KIND[\s\S]*IN NO EVENT/;
const expected = indexURL
  ? ['anti-ui-slop', 'ui-design', 'ui-radar']
  : ['anti-ui-slop', 'image-to-ui', 'ui-design', 'ui-radar'];
const selected = (await readdir(root)).sort();
assert.deepEqual(selected, expected, 'The native consumer must install exactly the skills registered for its source');

const published = new Map();
if (indexURL) {
  const response = await fetch(indexURL, { redirect: 'error', signal: AbortSignal.timeout(30_000) });
  assert(response.ok, `Published discovery index returned HTTP ${response.status}`);
  const index = await response.json();
  assert(Array.isArray(index.skills), 'Published discovery index must contain skills');
  assert.deepEqual(index.skills.map((skill) => skill.name).sort(), expected, 'Published selection must match the registered domain skills');
  for (const skill of index.skills) {
    assert(Array.isArray(skill.files) && skill.files.includes('SKILL.md'), `Missing published file inventory for ${skill.name}`);
    assert.equal(new Set(skill.files).size, skill.files.length, `Duplicate published filename: ${skill.name}`);
    const bytesByFile = new Map();
    for (const file of skill.files) {
      assert(typeof file === 'string' && /^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(file)
        && file.split('/').every((part) => part && part !== '.' && part !== '..'), `Invalid published relative path: ${skill.name}`);
      const url = new URL(`${skill.name}/${file}`, indexURL);
      assert.equal(url.protocol, 'https:', 'Published files must use HTTPS');
      assert.equal(url.origin, new URL(indexURL).origin, 'Published files must stay on the publisher origin');
      const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30_000) });
      assert(response.ok, `Published file returned HTTP ${response.status}: ${skill.name}/${file}`);
      bytesByFile.set(file, Buffer.from(await response.arrayBuffer()));
    }
    const type = skill.files.length === 1 ? 'skill-md' : 'file-package';
    let producer;
    if (type === 'file-package') {
      assert(bytesByFile.has('CHECKSUMS.sha256'), `Missing published package checksums: ${skill.name}`);
      producer = {
        files: [...skill.files].sort(),
        entries: checksumRecords(bytesByFile.get('CHECKSUMS.sha256').toString('utf8'), skill.name),
      };
      assert.deepEqual(producer.entries.map((entry) => entry.relative).sort(), producer.files.filter((file) => file !== 'CHECKSUMS.sha256'), `Published checksums must cover the complete file inventory: ${skill.name}`);
      for (const entry of producer.entries) {
        assert.equal(createHash('sha256').update(bytesByFile.get(entry.relative)).digest('hex'), entry.digest, `Published checksum mismatch: ${skill.name}/${entry.relative}`);
      }
    }
    published.set(skill.name, {
      type,
      digest: `sha256:${createHash('sha256').update(bytesByFile.get('SKILL.md')).digest('hex')}`,
      producer,
    });
  }
}

function checksumRecords(text, name) {
  const entries = text.trim().split(/\r?\n/).map((line) => {
    const match = line.match(/^([a-f0-9]{64})  (.+)$/);
    assert(match, `Invalid checksum record: ${name}`);
    return { digest: match[1], relative: match[2] };
  });
  assert.equal(new Set(entries.map((entry) => entry.relative)).size, entries.length, `Duplicate checksum path: ${name}`);
  return entries.sort((left, right) => left.relative.localeCompare(right.relative));
}

async function filesWithin(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    const absolute = path.join(directory, entry.name);
    const stat = await lstat(absolute);
    assert(!stat.isSymbolicLink(), `Installed support file must not be a symlink: ${relative}`);
    if (stat.isDirectory()) files.push(...await filesWithin(absolute, relative));
    else {
      assert(stat.isFile(), `Installed support path must be a regular file: ${relative}`);
      files.push(relative);
    }
  }
  return files.sort();
}

function inside(directory, relative) {
  const absolute = path.resolve(directory, relative);
  assert(absolute.startsWith(`${directory}${path.sep}`), `Installed support path escapes its skill: ${relative}`);
  return absolute;
}

const results = [];
for (const name of expected) {
  const directory = path.join(root, name);
  const directoryStat = await lstat(directory);
  assert(directoryStat.isDirectory() && !directoryStat.isSymbolicLink(), `Selected skill must be a regular directory: ${name}`);
  const files = await filesWithin(directory);
  assert(files.includes('SKILL.md'), `Missing installed entry point: ${name}`);
  const skill = await readFile(path.join(directory, 'SKILL.md'), 'utf8');
  const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
  assert(frontmatter, `Missing installed skill frontmatter: ${name}`);
  const field = (key) => frontmatter.match(new RegExp(`^${key}:\\s*(.*?)\\s*$`, 'm'))?.[1].replace(/^(["'])(.*)\1$/, '$2');
  assert.equal(field('name'), name, 'Installed skill name must match native selection');
  const declaredLicense = field('license') ?? null;
  const license = declaredLicense?.split(';', 1)[0].trim() ?? null;
  const inlineMITGrant = license === 'MIT' && mitGrantPattern.test(skill);
  const kind = published.get(name)?.type ?? 'source-package';
  const needsPackageLicense = kind !== 'skill-md';
  if (needsPackageLicense) assert(['Apache-2.0', 'MIT'].includes(license), `Installed package must declare a supported license identity: ${name}`);
  if (needsPackageLicense) assert(files.includes('LICENSE'), `Missing installed package license: ${name}`);
  if (files.includes('LICENSE')) {
    const licenseText = await readFile(path.join(directory, 'LICENSE'), 'utf8');
    if (license === 'Apache-2.0') {
      assert(/Apache License[\s\S]*Version 2\.0/.test(licenseText), `Declared Apache-2.0 license must accompany the installed package: ${name}`);
    }
    if (license === 'MIT') {
      assert(mitGrantPattern.test(licenseText), `Declared MIT grant must accompany the installed package: ${name}`);
    }
  }
  if (needsPackageLicense && license === 'Apache-2.0') {
    assert(files.includes('NOTICE'), `Missing installed Apache package notice: ${name}`);
    const notice = await readFile(path.join(directory, 'NOTICE'), 'utf8');
    assert(mitGrantPattern.test(notice), `Registered Apache design package must retain its third-party MIT copyright and permission notice: ${name}`);
  }
  let checksumCount = 0;
  if (kind === 'file-package' || files.includes('MANIFEST.json')) assert(files.includes('CHECKSUMS.sha256'), `Missing installed package checksums: ${name}`);
  if (files.includes('CHECKSUMS.sha256')) {
    const entries = checksumRecords(await readFile(path.join(directory, 'CHECKSUMS.sha256'), 'utf8'), name);
    const names = entries.map((entry) => entry.relative);
    assert.equal(new Set(names).size, names.length, `Duplicate installed checksum path: ${name}`);
    assert.deepEqual(names.sort(), files.filter((file) => file !== 'CHECKSUMS.sha256'), `Checksums must cover every installed package file: ${name}`);
    if (kind === 'file-package') {
      const producer = published.get(name).producer;
      assert.deepEqual(entries, producer.entries, `Installed producer-checksum mismatch against current published files: ${name}`);
      assert.deepEqual(files, producer.files, `Installed filename coverage mismatch against current published files: ${name}`);
    }
    for (const entry of entries) {
      const bytes = await readFile(inside(directory, entry.relative));
      assert.equal(createHash('sha256').update(bytes).digest('hex'), entry.digest, `Installed checksum mismatch: ${name}/${entry.relative}`);
    }
    checksumCount = entries.length;
  }
  let relativeLinks = 0;
  for (const file of files.filter((file) => file.endsWith('.md'))) {
    const text = await readFile(path.join(directory, file), 'utf8');
    for (const match of text.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g)) {
      const target = match[1].split(/[?#]/, 1)[0];
      if (!target || target.includes(':') || target.startsWith('/')) continue;
      const relative = path.join(path.dirname(file), decodeURIComponent(target));
      const support = await lstat(inside(directory, relative));
      assert(support.isFile() && !support.isSymbolicLink(), `Missing regular relative support file: ${name}/${file} -> ${target}`);
      relativeLinks++;
    }
  }
  if (kind === 'skill-md') {
    const digest = `sha256:${createHash('sha256').update(Buffer.from(skill)).digest('hex')}`;
    assert.equal(digest, published.get(name).digest, `Installed standalone Markdown must match its published integrity digest: ${name}`);
    if (license === 'MIT') assert(inlineMITGrant, `Declared standalone MIT skill must carry its copyright and permission grant inline: ${name}`);
  }
  results.push({ name, artifactType: kind, files: files.length, checksums: checksumCount, relativeLinks, declaredLicense: license, bundledLicense: files.includes('LICENSE'), bundledNotice: files.includes('NOTICE'), inlineMITGrant, legalFormat: kind === 'skill-md' ? 'advertised-standalone-markdown; no complete bundled-license/checksum package claim' : 'self-contained-package' });
}
console.log(JSON.stringify({ source: indexURL ?? 'current-checkout', packages: results }, null, 2));
