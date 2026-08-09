'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { eventRange, isFrontendFile, validRevision } = require('../src/lib/changed-files');

test('frontend file filtering excludes generated and dependency folders', () => {
  assert.equal(isFrontendFile('src/App.tsx'), true);
  assert.equal(isFrontendFile('styles/main.css'), true);
  assert.equal(isFrontendFile('dist/App.js'), false);
  assert.equal(isFrontendFile('node_modules/pkg/index.js'), false);
  assert.equal(isFrontendFile('README.md'), false);
});

test('eventRange only returns safe git revisions', () => {
  const base = 'a'.repeat(40);
  const head = 'b'.repeat(40);
  assert.deepEqual(eventRange({ pull_request: { base: { sha: base }, head: { sha: head } } }), [base, head]);
  assert.equal(eventRange({ before: 'HEAD~1', after: head }), null);
  assert.equal(validRevision('0'.repeat(40)), false);
});
