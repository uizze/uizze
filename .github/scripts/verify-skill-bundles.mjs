import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative, resolve } from 'node:path';

const repositoryRoot = resolve(import.meta.dirname, '..', '..');
const packageRoots = [
  'skills/anti-ui-slop',
  'plugins/claude-directory/skills/anti-ui-slop',
  'plugins/openai-directory/uizze/skills/anti-ui-slop',
  'plugins/cursor-agent/skills/anti-ui-slop',
];
const requiredHelpers = [
  'scripts/context.mjs',
  'scripts/detect.mjs',
  'scripts/critique-storage.mjs',
  'scripts/live-server.mjs',
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function filesUnder(root) {
  const files = [];
  for (const entry of readdirSync(root)) {
    const path = join(root, entry);
    if (statSync(path).isDirectory()) files.push(...filesUnder(path));
    else files.push(path);
  }
  return files;
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

for (const packageRoot of packageRoots) {
  const root = join(repositoryRoot, packageRoot);
  const skillPath = join(root, 'SKILL.md');
  const manifestPath = join(root, 'MANIFEST.json');
  const checksumsPath = join(root, 'CHECKSUMS.sha256');

  for (const required of ['SKILL.md', 'MANIFEST.json', 'CHECKSUMS.sha256', ...requiredHelpers]) {
    const path = join(root, required);
    if (!existsSync(path) || statSync(path).size === 0) {
      fail(`${packageRoot}: missing required bundle file ${required}`);
    }
  }

  if (!existsSync(skillPath)) continue;
  const markdownFiles = existsSync(root)
    ? filesUnder(root).filter((path) => path.endsWith('.md'))
    : [];
  for (const markdownPath of markdownFiles) {
    const markdown = readFileSync(markdownPath, 'utf8');
    const scriptReferences = [...markdown.matchAll(/(?:<skill-base-dir>\/)?(scripts\/[A-Za-z0-9_./-]+\.(?:mjs|js|json))/g)]
      .map((match) => match[1]);
    for (const scriptReference of new Set(scriptReferences)) {
      if (!existsSync(join(root, scriptReference))) {
        fail(`${packageRoot}: ${relative(root, markdownPath)} references missing ${scriptReference}`);
      }
    }
    const markdownReferences = [...markdown.matchAll(/\]\(([^)#]+\.md)(?:#[^)]+)?\)/g)]
      .map((match) => match[1])
      .filter((reference) => !reference.includes('://'));
    for (const markdownReference of new Set(markdownReferences)) {
      const target = resolve(join(markdownPath, '..'), markdownReference);
      if (!existsSync(target)) {
        fail(`${packageRoot}: ${relative(root, markdownPath)} links to missing ${markdownReference}`);
      }
    }
  }

  if (!existsSync(manifestPath) || !existsSync(checksumsPath)) continue;
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  for (const included of manifest.designStack?.included ?? []) {
    if (!existsSync(join(root, included))) {
      fail(`${packageRoot}: manifest references missing ${included}`);
    }
  }

  for (const line of readFileSync(checksumsPath, 'utf8').trim().split('\n')) {
    const match = /^([a-f0-9]{64})  (.+)$/.exec(line);
    if (!match) {
      fail(`${packageRoot}: malformed checksum line ${line}`);
      continue;
    }
    const [, expected, file] = match;
    const path = join(root, file);
    if (!existsSync(path)) {
      fail(`${packageRoot}: checksum references missing ${file}`);
    } else if (sha256(path) !== expected) {
      fail(`${packageRoot}: checksum mismatch for ${file}`);
    }
  }
}

const smokeRoot = mkdtempSync(join(tmpdir(), 'uizze-public-skill-'));
try {
  const fixture = join(smokeRoot, 'fixture.html');
  writeFileSync(fixture, '<main><button>Save</button></main>\n');
  const detector = join(repositoryRoot, packageRoots[0], 'scripts/detect.mjs');
  const result = spawnSync(process.execPath, [detector, '--json', fixture], {
    cwd: smokeRoot,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    fail(`canonical bundle detector failed: ${result.stderr.trim()}`);
  } else {
    try {
      JSON.parse(result.stdout);
    } catch {
      fail('canonical bundle detector did not return JSON');
    }
  }
} finally {
  rmSync(smokeRoot, { recursive: true, force: true });
}

if (!process.exitCode) {
  console.log(`Verified complete anti-ui-slop bundles in ${packageRoots.length} package roots.`);
}
