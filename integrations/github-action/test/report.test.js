'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { annotation, commandValue } = require('../src/lib/github');
const { buildSummary, shouldFail } = require('../src/lib/report');

const warning = { file: 'src/A.tsx', line: 4, column: 2, ruleId: 'test-rule', severity: 'warning', message: 'Check: this, please' };
const error = { ...warning, severity: 'error' };

test('annotation escapes GitHub workflow command data', () => {
  const writes = [];
  annotation(warning, (line) => writes.push(line));
  assert.match(writes[0], /^::warning /);
  assert.match(writes[0], /Check%3A this%2C please/);
  assert.equal(commandValue('a%b\nc'), 'a%25b%0Ac');
});

test('annotation level can follow the configured failure threshold', () => {
  const writes = [];
  annotation(error, (line) => writes.push(line), 'warning');
  assert.match(writes[0], /^::warning /);
});

test('summary puts the optional free agent handoff after useful scan results', () => {
  const summary = buildSummary({ files: ['src/A.tsx'], findings: [warning], skipped: [], showUizzeLink: true });
  assert.ok(summary.indexOf('test-rule') < summary.indexOf('uizze-preview'));
  assert.ok(summary.indexOf('UI Slop Score') < summary.indexOf('uizze-preview'));
  assert.ok(summary.indexOf('recorded comparison') < summary.indexOf('uizze-preview'));
  assert.match(summary, /https:\/\/uizze\.com\/tools\/ui-slop-score/);
  assert.match(summary, /https:\/\/benchmark\.uizze\.com\/recordings\/billing-settings-v1\//);
  assert.match(summary, /not a benchmark or quality guarantee/);
  assert.match(summary, /PR-ready repair note/);
  assert.match(summary, /context-aware finish pass/);
  assert.match(summary, /codex mcp add uizze-preview --url https:\/\/uizze\.com\/mcp\/preview/);
  assert.match(summary, /never uploads checkout files/);
  assert.doesNotMatch(summary, /uizze\.com\?/);
  const empty = buildSummary({ files: [], findings: [], skipped: [], showUizzeLink: true });
  assert.doesNotMatch(empty, /uizze\.com/);
  assert.doesNotMatch(empty, /recorded comparison/);
});

test('failure threshold respects error, warning, and never', () => {
  assert.equal(shouldFail([warning], 'error'), false);
  assert.equal(shouldFail([warning], 'warning'), true);
  assert.equal(shouldFail([error], 'error'), true);
  assert.equal(shouldFail([error], 'never'), false);
});
