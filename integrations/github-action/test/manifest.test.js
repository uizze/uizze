'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { manifestInsideWorkspace, parseFileInput, readManifest } = require('../src/lib/manifest');

test('parseFileInput handles comma and newline separated paths without duplicates', () => {
  assert.deepEqual(parseFileInput('src/a.tsx, src/b.css\nsrc/a.tsx'), ['src/a.tsx', 'src/b.css']);
});

test('readManifest accepts string and object file entries with evidence', () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'uizze-manifest-'));
  fs.writeFileSync(path.join(workspace, 'ui.json'), JSON.stringify({
    files: ['src/a.tsx', { path: 'src/b.tsx' }],
    evidence: { 'src/a.tsx': { states: ['loading'] } },
  }));
  assert.deepEqual(readManifest('ui.json', workspace), {
    files: ['src/a.tsx', 'src/b.tsx'],
    evidence: { 'src/a.tsx': { states: ['loading'] } },
  });
});

test('manifest path cannot traverse or follow a symlink outside the workspace', () => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'uizze-manifest-workspace-'));
  const outside = fs.mkdtempSync(path.join(os.tmpdir(), 'uizze-manifest-outside-'));
  fs.writeFileSync(path.join(outside, 'ui.json'), JSON.stringify({ files: [] }));
  const traversal = path.relative(workspace, path.join(outside, 'ui.json'));
  assert.throws(() => manifestInsideWorkspace(traversal, workspace), /inside GITHUB_WORKSPACE/);
  fs.symlinkSync(outside, path.join(workspace, 'outside'));
  assert.throws(() => readManifest('outside/ui.json', workspace), /inside GITHUB_WORKSPACE/);
});
