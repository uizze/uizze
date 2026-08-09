'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const FRONTEND_EXTENSIONS = new Set([
  '.css', '.html', '.htm', '.js', '.jsx', '.mjs', '.scss', '.sass', '.svelte', '.ts', '.tsx', '.vue',
]);
const EXCLUDED_SEGMENTS = new Set(['node_modules', 'dist', 'build', 'vendor', '.next', 'coverage']);

function isFrontendFile(file) {
  const normalized = file.replaceAll('\\', '/');
  if (normalized.split('/').some((segment) => EXCLUDED_SEGMENTS.has(segment))) return false;
  return FRONTEND_EXTENSIONS.has(path.extname(normalized).toLowerCase());
}

function validRevision(value) {
  return typeof value === 'string' && /^[0-9a-f]{7,64}$/i.test(value) && !/^0+$/.test(value);
}

function eventRange(event) {
  const base = event?.pull_request?.base?.sha || event?.before;
  const head = event?.pull_request?.head?.sha || event?.after;
  return validRevision(base) && validRevision(head) ? [base, head] : null;
}

function gitFiles(workspace, range) {
  const args = range
    ? ['diff', '--name-only', '--diff-filter=ACMRT', '-z', range[0], range[1], '--']
    : ['ls-files', '-z'];
  return execFileSync('git', args, { cwd: workspace, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 })
    .split('\0')
    .filter(Boolean);
}

function discoverFiles({ workspace, eventPath, explicitFiles = [], manifestFiles = [] }) {
  const requested = [...new Set([...explicitFiles, ...manifestFiles])];
  if (requested.length) return requested.filter(isFrontendFile);

  let range = null;
  if (eventPath && fs.existsSync(eventPath)) {
    const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
    range = eventRange(event);
  }
  try {
    return [...new Set(gitFiles(workspace, range))].filter(isFrontendFile);
  } catch (error) {
    if (range) return [...new Set(gitFiles(workspace, null))].filter(isFrontendFile);
    throw error;
  }
}

module.exports = { discoverFiles, eventRange, isFrontendFile, validRevision };
