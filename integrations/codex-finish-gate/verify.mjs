import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

export const states = ['default', 'loading', 'empty', 'failed', 'success'];
const capabilities = ['current-plan', 'payment-method', 'invoices', 'receipt-download'];
const tagWith = (html, tag, attribute, value) => new RegExp(`<${tag}\\b(?=[^>]*${attribute}=["']${value}["'])[^>]*>`, 'i').test(html);

export async function verify(source) {
  source ??= await readFile(new URL('app.js', import.meta.url), 'utf8');
  const rendered = new Map();
  for (const state of states) {
    const app = { innerHTML: '' };
    const sandbox = {
      document: { querySelector: (selector) => selector === '#app' ? app : null },
      window: { location: { search: `?state=${state}` } },
      URLSearchParams,
      console,
    };
    vm.runInNewContext(source, sandbox, { filename: 'app.js', timeout: 1_000 });
    assert.match(app.innerHTML, new RegExp(`data-ui-state=["']${state}["']`), `${state} must render its exact data-ui-state marker`);
    rendered.set(state, app.innerHTML);
  }
  assert.equal(new Set(rendered.values()).size, states.length, 'Every required query state must render distinct output');
  assert.match(rendered.get('loading'), /role=["']status["']/i, 'loading must expose status semantics');
  assert.match(rendered.get('empty'), /data-empty-invoices(?:=["'][^"']*["'])?/i, 'empty must identify the empty invoice state');
  assert.match(rendered.get('failed'), /data-billing-action=["']retry-payment["']/i, 'failed must expose retry-payment');
  assert.match(rendered.get('success'), /role=["']status["']/i, 'success must expose status semantics');
  const workflow = `${rendered.get('default')}\n${rendered.get('success')}`;
  for (const capability of capabilities) {
    assert.match(workflow, new RegExp(`data-billing-capability=["']${capability}["']`, 'i'), `billing workflow must expose ${capability}`);
  }
  assert.ok(tagWith(workflow, 'button', 'data-billing-capability', 'payment-method'), 'payment-method must be a button');
  assert.ok(tagWith(workflow, 'table', 'data-billing-capability', 'invoices'), 'invoices must be a table');
  assert.ok(tagWith(workflow, 'a', 'data-billing-capability', 'receipt-download'), 'receipt-download must be a link');
  assert.match(workflow, /data-billing-capability=["']receipt-download["'][^>]*href=["'][^"']+["']|href=["'][^"']+["'][^>]*data-billing-capability=["']receipt-download["']/i, 'receipt-download needs a destination');
  assert.ok(tagWith(rendered.get('failed'), 'button', 'data-billing-action', 'retry-payment'), 'retry-payment must be a button');
  assert.match(workflow, /data-invoice-id=["'][^"']+["']/i, 'invoice rows need a stable invoice identity');
  assert.match(workflow, /<time\b[^>]*datetime=["'][^"']+["']/i, 'invoice dates need machine-readable time semantics');
  assert.match(workflow, /var\(--/i, 'rendered UI must use a supplied semantic CSS variable');
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  await verify();
  console.log('UI finish-gate verification passed.');
}
