'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { annotation, commandValue } = require('../src/lib/github');
const { buildSummary, shouldFail } = require('../src/lib/report');

const warning = { file: 'src/A.tsx', line: 4, column: 2, ruleId: 'test-rule', severity: 'warning', message: 'Check: this, please' };
const error = { ...warning, severity: 'error' };

test('annotation keeps message punctuation readable and escapes command boundaries', () => {
  const writes = [];
  annotation({
    ...warning,
    file: 'src/A,B:C.tsx',
    message: 'Check: this, please\n50% complete\r\nNext',
  }, (line) => writes.push(line));
  assert.equal(writes[0], '::warning file=src/A%2CB%3AC.tsx,line=4,col=2,title=UIZZE test-rule::Check: this, please%0A50%25 complete%0D%0ANext');
  assert.equal(commandValue('a%b\nc'), 'a%25b%0Ac');
});

test('annotation level can follow the configured failure threshold', () => {
  const writes = [];
  annotation(error, (line) => writes.push(line), 'warning');
  assert.match(writes[0], /^::warning /);
});

test('summary puts optional current workflows after useful scan results and respects opt-out', () => {
  const summary = buildSummary({ files: ['src/A.tsx'], findings: [warning], skipped: [], showUizzeLink: true });
  assert.ok(summary.indexOf('test-rule') < summary.indexOf('free UIZZE UI workflows'));
  assert.match(summary, /https:\/\/github\.com\/uizze\/uizze\/blob\/main\/examples\/agent-workflows\.md/);
  assert.match(summary, /utm_medium=action/);
  assert.doesNotMatch(summary, /benchmark\.uizze\.com|96\/100|98\/100/);
  assert.equal(summary.includes(['/mcp', 'preview'].join('/')), false);
  assert.equal(summary.includes(['check', 'ui', 'slop'].join('_')), false);
  const disabled = buildSummary({ files: ['src/A.tsx'], findings: [warning], skipped: [], showUizzeLink: false });
  assert.match(disabled, /test-rule/);
  assert.doesNotMatch(disabled, /https:\/\//);
  const empty = buildSummary({ files: [], findings: [], skipped: [], showUizzeLink: true });
  assert.doesNotMatch(empty, /uizze\.com/);
  assert.doesNotMatch(empty, /free UIZZE UI workflows/);
});

test('failure threshold respects error, warning, and never', () => {
  assert.equal(shouldFail([warning], 'error'), false);
  assert.equal(shouldFail([warning], 'warning'), true);
  assert.equal(shouldFail([error], 'error'), true);
  assert.equal(shouldFail([error], 'never'), false);
});
