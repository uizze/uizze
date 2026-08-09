'use strict';

const fs = require('node:fs');
const path = require('node:path');

function parseFileInput(value) {
  if (!value) return [];
  return [...new Set(String(value).split(/[\n,]/).map((item) => item.trim()).filter(Boolean))];
}

function manifestInsideWorkspace(manifestPath, workspace) {
  const root = fs.realpathSync(workspace);
  const absolute = path.resolve(root, manifestPath);
  const relative = path.relative(root, absolute);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Manifest must be a file inside GITHUB_WORKSPACE.');
  }
  const real = fs.realpathSync(absolute);
  const realRelative = path.relative(root, real);
  if (realRelative.startsWith('..') || path.isAbsolute(realRelative)) {
    throw new Error('Manifest must be a file inside GITHUB_WORKSPACE.');
  }
  return real;
}

function readManifest(manifestPath, workspace) {
  if (!manifestPath) return { files: [], evidence: {} };
  const absolute = manifestInsideWorkspace(manifestPath, workspace);
  const parsed = JSON.parse(fs.readFileSync(absolute, 'utf8'));
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Manifest must be a JSON object.');
  }
  const files = Array.isArray(parsed.files)
    ? parsed.files.map((entry) => typeof entry === 'string' ? entry : entry?.path).filter(Boolean)
    : [];
  const evidence = parsed.evidence && typeof parsed.evidence === 'object' && !Array.isArray(parsed.evidence)
    ? parsed.evidence
    : {};
  return { files: [...new Set(files)], evidence };
}

module.exports = { manifestInsideWorkspace, parseFileInput, readManifest };
