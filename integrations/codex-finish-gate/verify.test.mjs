import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { states, verify } from './verify.mjs';

test('the verifier matches the published challenge contract', async () => {
  const verifier = await readFile(new URL('verify.mjs', import.meta.url));
  assert.equal(createHash('sha256').update(verifier).digest('hex'), '306aedf651a1d08890c923ec7d200024c82707095d0fecfd442502f12b35bb23');
});

test('the challenge seed fails closed', async () => {
  const seed = await readFile(new URL('app.js', import.meta.url), 'utf8');
  await assert.rejects(verify(seed), /default must render its exact data-ui-state marker/);
});

test('the verifier exercises five distinct states and billing behaviors', async () => {
  const valid = `
    const app = document.querySelector('#app');
    const state = new URLSearchParams(window.location.search).get('state') || 'default';
    const common = '<section style="color:var(--text)"><p data-billing-capability="current-plan">Current plan</p><button data-billing-capability="payment-method">Replace payment method</button><table data-billing-capability="invoices"><tr data-invoice-id="INV-1"><td><time datetime="2026-07-14">July 14</time></td></tr></table><a data-billing-capability="receipt-download" href="receipt.pdf">Download receipt</a></section>';
    const views = { default: common, loading: '<p role="status">Loading</p>', empty: '<p data-empty-invoices>No invoices</p>', failed: '<button data-billing-action="retry-payment">Retry</button>', success: '<p role="status">Payment succeeded</p>' + common };
    app.innerHTML = '<main data-ui-state="' + state + '">' + views[state] + '</main>';
  `;
  await verify(valid);
  assert.deepEqual(states, ['default', 'loading', 'empty', 'failed', 'success']);
});
