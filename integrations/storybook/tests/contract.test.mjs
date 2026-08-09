import assert from 'node:assert/strict';
import test from 'node:test';

import { contractToMarkdown, evaluateContract, normalizeContract } from '../dist/index.js';

const complete = {
  screenJob: 'Approve a release without losing risk context.',
  primaryAction: 'Approve release',
  references: [{ label: 'Evidence', url: 'https://uizze.com', note: 'Hierarchy only' }],
  requiredStates: ['ready', 'loading', 'empty', 'error'],
  forbiddenPatterns: ['Filler metrics'],
  acceptanceCriteria: ['The approval result remains visible.'],
};

test('a complete product-specific contract passes', () => {
  const contract = normalizeContract(complete);
  assert.equal(evaluateContract(contract).passed, true);
  assert.equal(contract.references[0].url, 'https://uizze.com/');
});

test('active and malformed URL schemes are rejected', () => {
  const contract = normalizeContract({
    ...complete,
    references: [
      { label: 'Active', url: 'javascript:alert(1)' },
      { label: 'Malformed', url: 'not a URL' },
      { label: 'Valid', url: 'https://uizze.com' },
    ],
  });

  assert.equal(contract.references.length, 1);
  assert.equal(contract.invalidReferenceCount, 2);
  assert.equal(evaluateContract(contract).passed, false);
});

test('default state coverage is enforced', () => {
  const evaluation = evaluateContract(normalizeContract({ ...complete, requiredStates: ['ready'] }));
  const stateCheck = evaluation.checks.find((check) => check.id === 'states');
  assert.equal(stateCheck.passed, false);
  assert.match(stateCheck.detail, /loading, empty, error/);
});

test('untrusted input is bounded before render or export', () => {
  const contract = normalizeContract({
    ...complete,
    screenJob: 'x'.repeat(500),
    forbiddenPatterns: Array.from({ length: 30 }, (_, index) => `Pattern ${index}`),
  });

  assert.equal(contract.screenJob.length, 240);
  assert.equal(contract.forbiddenPatterns.length, 12);
});

test('Markdown export contains the reviewed contract and safe reference', () => {
  const markdown = contractToMarkdown(normalizeContract(complete));
  assert.match(markdown, /^# UI finish contract/m);
  assert.match(markdown, /\[Evidence\]\(https:\/\/uizze\.com\/\)/);
  assert.match(markdown, /- Filler metrics/);
});
