#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { discoverFiles } = require('./lib/changed-files');
const { annotation, setOutput } = require('./lib/github');
const { parseFileInput, readManifest } = require('./lib/manifest');
const { buildSummary, shouldFail, writeSummary } = require('./lib/report');
const { inspectFile } = require('./lib/rules');

const MAX_FILE_BYTES = 1024 * 1024;

function input(name, fallback = '') {
  const githubName = `INPUT_${name.toUpperCase().replaceAll(' ', '_')}`;
  const shellName = githubName.replaceAll('-', '_');
  return process.env[githubName] ?? process.env[shellName] ?? fallback;
}

function withinWorkspace(workspace, requestedPath) {
  const root = fs.realpathSync(workspace);
  const absolute = path.resolve(root, requestedPath);
  const relative = path.relative(root, absolute);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) return null;
  let real;
  if (fs.existsSync(absolute)) {
    real = fs.realpathSync(absolute);
  } else {
    try {
      real = path.join(fs.realpathSync(path.dirname(absolute)), path.basename(absolute));
    } catch {
      return null;
    }
  }
  const realRelative = path.relative(root, real);
  return !realRelative.startsWith('..') && !path.isAbsolute(realRelative) ? real : null;
}

function run() {
  const workspace = path.resolve(process.env.GITHUB_WORKSPACE || process.cwd());
  const maxFiles = Math.max(1, Math.min(1000, Number.parseInt(input('max-files', '200'), 10) || 200));
  const failOn = input('fail-on', 'error').toLowerCase();
  if (!['error', 'warning', 'never'].includes(failOn)) {
    throw new Error('fail-on must be error, warning, or never.');
  }
  const manifest = readManifest(input('manifest'), workspace);
  const discovered = discoverFiles({
    workspace,
    eventPath: process.env.GITHUB_EVENT_PATH,
    explicitFiles: parseFileInput(input('files')),
    manifestFiles: manifest.files,
  }).slice(0, maxFiles);

  const findings = [];
  const scanned = [];
  const skipped = [];
  for (const file of discovered) {
    const absolute = withinWorkspace(workspace, file);
    if (!absolute || !fs.existsSync(absolute) || !fs.statSync(absolute).isFile() || fs.statSync(absolute).size > MAX_FILE_BYTES) {
      skipped.push(file);
      continue;
    }
    const content = fs.readFileSync(absolute, 'utf8');
    scanned.push(file);
    findings.push(...inspectFile(file, content, manifest.evidence[file] || {}));
  }

  const annotationLevel = failOn === 'never' ? 'warning' : failOn === 'warning' ? 'error' : null;
  for (const item of findings) annotation(item, undefined, annotationLevel);
  const failed = shouldFail(findings, failOn);
  const summary = buildSummary({
    files: scanned,
    findings,
    skipped,
    showUizzeLink: input('show-uizze-link', 'true').toLowerCase() === 'true',
  });
  writeSummary(summary);
  setOutput('finding-count', findings.length);
  setOutput('scanned-files', scanned.length);
  setOutput('conclusion', failed ? 'fail' : 'pass');
  console.log(`UIZZE UI Slop Gate scanned ${scanned.length} file(s) and found ${findings.length} issue(s).`);
  if (failed) process.exitCode = 1;
  return { scanned, findings, skipped, failed, summary };
}

if (require.main === module) {
  try {
    run();
  } catch (error) {
    console.error(`::error title=UIZZE UI Slop Gate::${String(error.message).replaceAll('%', '%25').replaceAll('\n', '%0A')}`);
    process.exitCode = 1;
  }
}

module.exports = { input, run, withinWorkspace };
