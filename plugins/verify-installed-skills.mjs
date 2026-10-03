import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
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
const expected = ['anti-ui-slop', 'ui-design', 'ui-radar'];
const selected = (await readdir(root)).sort();
assert.deepEqual(selected, expected, 'The native consumer must install exactly the three registered skills');

const published = new Map();
if (indexURL) {
  const response = await fetch(indexURL, { redirect: 'error', signal: AbortSignal.timeout(30_000) });
  assert(response.ok, `Published discovery index returned HTTP ${response.status}`);
  const index = await response.json();
  assert(Array.isArray(index.skills), 'Published discovery index must contain skills');
  assert.deepEqual(index.skills.map((skill) => skill.name).sort(), expected, 'Published selection must contain exactly the three registered skills');
  for (const skill of index.skills) {
    assert(['archive', 'skill-md'].includes(skill.type), `Unsupported published artifact type for ${skill.name}`);
    assert.match(skill.digest, /^sha256:[a-f0-9]{64}$/, `Missing published artifact digest for ${skill.name}`);
    const url = new URL(skill.url, indexURL);
    assert.equal(url.protocol, 'https:', 'Published artifacts must use HTTPS');
    assert.equal(url.origin, new URL(indexURL).origin, 'Published artifacts must stay on the publisher origin');
    const artifact = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30_000) });
    assert(artifact.ok, `Published artifact returned HTTP ${artifact.status}: ${skill.name}`);
    const bytes = Buffer.from(await artifact.arrayBuffer());
    assert.equal(`sha256:${createHash('sha256').update(bytes).digest('hex')}`, skill.digest, `Published artifact digest mismatch: ${skill.name}`);
    let producer;
    if (skill.type === 'archive') {
      const zip = spawnSync('python3', ['-c', [
        'import io, json, sys, zipfile',
        'with zipfile.ZipFile(io.BytesIO(sys.stdin.buffer.read())) as archive:',
        '    names = [entry.filename for entry in archive.infolist() if not entry.is_dir()]',
        '    assert len(names) == len(set(names)), \"Duplicate published ZIP filename\"',
        '    print(json.dumps({\"files\": names, \"checksums\": archive.read(\"CHECKSUMS.sha256\").decode(\"utf-8\")}))',
      ].join('\n')], { input: bytes, encoding: 'utf8', maxBuffer: 1024 * 1024 });
      assert.equal(zip.status, 0, `Cannot read digest-verified published ZIP checksums: ${skill.name}: ${zip.stderr}`);
      producer = JSON.parse(zip.stdout);
      producer.entries = checksumRecords(producer.checksums, skill.name);
      assert.deepEqual(producer.entries.map((entry) => entry.relative).sort(), producer.files.filter((file) => file !== 'CHECKSUMS.sha256').sort(), `Published checksum records must cover its complete ZIP filename set: ${skill.name}`);
    }
    published.set(skill.name, { ...skill, producer });
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
  }
  let checksumCount = 0;
  if (kind === 'archive' || files.includes('MANIFEST.json')) assert(files.includes('CHECKSUMS.sha256'), `Missing installed package checksums: ${name}`);
  if (files.includes('CHECKSUMS.sha256')) {
    const entries = checksumRecords(await readFile(path.join(directory, 'CHECKSUMS.sha256'), 'utf8'), name);
    const names = entries.map((entry) => entry.relative);
    assert.equal(new Set(names).size, names.length, `Duplicate installed checksum path: ${name}`);
    assert.deepEqual(names.sort(), files.filter((file) => file !== 'CHECKSUMS.sha256'), `Checksums must cover every installed package file: ${name}`);
    if (kind === 'archive') {
      const producer = published.get(name).producer;
      assert.deepEqual(entries, producer.entries, `Installed producer-checksum mismatch against current published ZIP: ${name}`);
      assert.deepEqual(files, producer.files.sort(), `Installed filename coverage mismatch against current published ZIP: ${name}`);
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
