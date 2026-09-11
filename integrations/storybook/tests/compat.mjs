/* global console, navigator, process, URL */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, expect } from '@playwright/test';

const version = process.argv[2] || '10.6.0';
assert.match(version, /^(9|10)\.\d+\.\d+$/);
const root = fileURLToPath(new URL('..', import.meta.url));
const output = path.join(root, '.artifacts', `compat-${version}`);
await mkdir(output, { recursive: true });
const fixture = await mkdtemp(path.join(tmpdir(), 'uizze-storybook-'));
const { version: addonVersion } = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const checks = [];
let browser;
let server;

function run(command, args, cwd, log) {
  try {
    return execFileSync(command, args, { cwd, encoding: 'utf8', timeout: 180000, maxBuffer: 8 * 1024 * 1024 });
  } catch (error) {
    console.error(error.stdout?.toString(), error.stderr?.toString());
    throw new Error(`${log} failed`, { cause: error });
  }
}

try {
  await writeFile(path.join(output, 'pack.log'), run('pnpm', ['pack', '--pack-destination', output], root, 'Pack'));
  await mkdir(path.join(fixture, '.storybook'));
  await mkdir(path.join(fixture, 'stories'));
  await writeFile(
    path.join(fixture, 'package.json'),
    JSON.stringify({
      name: 'uizze-installed-addon-compatibility',
      private: true,
      type: 'module',
      scripts: { build: 'storybook build --disable-telemetry' },
      devDependencies: {
        storybook: version,
        '@storybook/react-vite': version,
        react: '19.2.8',
        'react-dom': '19.2.8',
        vite: '7.3.6',
        typescript: '5.9.3',
        'storybook-addon-uizze': `file:${path.join(output, `storybook-addon-uizze-${addonVersion}.tgz`)}`,
      },
    }),
  );
  await writeFile(
    path.join(fixture, '.storybook/main.js'),
    `export default {
    stories: ['../stories/*.stories.jsx'], framework: '@storybook/react-vite',
    addons: ['storybook-addon-uizze'], core: {disableTelemetry: true}
  };`,
  );
  await writeFile(
    path.join(fixture, 'stories/Contract.stories.jsx'),
    `import React from 'react';
    export default {title: 'Compatibility/Contract', render: () => <button>Approve release</button>};
    export const Complete = {parameters: {uizze: {
      screenJob: 'Review a release safely.', primaryAction: 'Approve release',
      references: [{label: 'Uizze reference', url: 'https://uizze.com'}],
      requiredStates: ['ready','loading','empty','error'], forbiddenPatterns: ['Filler metrics'],
      acceptanceCriteria: ['Primary action receives keyboard focus.']
    }}};
    export const Missing = {};
    export const Disabled = {parameters: {uizze: {disable: true}}};
    export const Unsafe = {parameters: {uizze: {references: [{label: 'Unsafe reference',url: 'javascript:alert(1)'}]}}};
  `,
  );
  await writeFile(
    path.join(output, 'install.log'),
    run('npm', ['install', '--no-audit', '--no-fund'], fixture, 'Install'),
  );
  await writeFile(path.join(output, 'build.log'), run('npm', ['run', 'build'], fixture, 'Storybook build'));
  checks.push('Clean packed-package install and production Storybook build');

  const staticDir = path.join(fixture, 'storybook-static');
  server = createServer(async (req, res) => {
    try {
      const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const file = path.resolve(staticDir, `.${name === '/' ? '/index.html' : name}`);
      if (!file.startsWith(`${staticDir}/`)) {
        res.writeHead(403).end();
        return;
      }
      const types = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.svg': 'image/svg+xml',
        '.woff2': 'font/woff2',
      };
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      res.end(await readFile(file));
    } catch {
      res.writeHead(404).end();
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write'],
    viewport: { width: 1280, height: 1000 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/?path=/story/compatibility-contract--complete`);
  await page.getByRole('tab', { name: 'UIZZE Finish Gate' }).click();
  await page.getByText('Contract complete', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Copy contract as Markdown' }).click();
  await page.getByRole('button', { name: 'Copied contract' }).waitFor();
  assert.match(await page.evaluate(() => navigator.clipboard.readText()), /Review a release safely/);
  checks.push('Native panel renders and copies the selected contract');
  await page.screenshot({ path: path.join(output, 'complete.png') });

  await page.getByRole('link', { name: 'Missing', exact: true }).click();
  await page.getByText('Contract incomplete', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Copy contract as Markdown' }).waitFor();
  checks.push('Switching stories resets copy feedback and shows missing contract checks');
  await page.getByRole('link', { name: 'Disabled', exact: true }).click();
  await page.getByText('UIZZE Finish Gate is disabled for this story.', { exact: true }).waitFor();
  checks.push('Per-story disabled state');
  await page.getByRole('link', { name: 'Unsafe', exact: true }).click();
  await page.getByText('Contract incomplete', { exact: true }).waitFor();
  assert.equal(await page.locator('a[href^="javascript:"]').count(), 0);
  checks.push('Unsafe reference links are excluded');

  await page.getByRole('link', { name: 'Complete', exact: true }).click();
  await page.getByText('Contract complete', { exact: true }).waitFor();
  await page.evaluate(() =>
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: () => Promise.reject(new Error('Denied by test')) },
    }),
  );
  await page.getByRole('button', { name: /Cop.*contract/ }).click();
  await page.getByRole('alert').waitFor();
  assert.match(await page.getByRole('textbox', { name: 'Contract Markdown' }).inputValue(), /Review a release safely/);
  await page.screenshot({ path: path.join(output, 'clipboard-recovery.png') });
  checks.push('Denied clipboard shows a readable manual-copy fallback');
  await page.evaluate(() => {
    delete navigator.clipboard;
  });
  await page.getByRole('button', { name: 'Copy contract as Markdown' }).click();
  await page.getByRole('button', { name: 'Copied contract' }).waitFor();
  assert.equal(await page.getByRole('alert').count(), 0);
  checks.push('Retry succeeds and clears the clipboard error');

  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined }));
  await page.getByRole('button', { name: 'Copied contract' }).click();
  await page.getByRole('alert').waitFor();
  checks.push('Unavailable clipboard has the same recovery path');
  await page.getByRole('link', { name: 'Missing', exact: true }).click();
  await page.getByText('Contract incomplete', { exact: true }).waitFor();
  assert.equal(await page.getByRole('alert').count(), 0);
  checks.push('Clipboard errors do not leak between stories');
  await page.evaluate(() => {
    globalThis.copyResolvers = [];
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: () => new Promise((resolve) => globalThis.copyResolvers.push(resolve)) },
    });
  });
  await page.getByRole('button', { name: 'Copy contract as Markdown' }).click();
  await page.getByRole('link', { name: 'Complete', exact: true }).click();
  await page.getByText('Contract complete', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Copy contract as Markdown' }).click();
  await page.evaluate(async () => {
    globalThis.copyResolvers[0]();
    await new Promise(globalThis.requestAnimationFrame);
    await new Promise(globalThis.requestAnimationFrame);
  });
  await expect(page.getByRole('button', { name: 'Copying contract…' })).toBeDisabled();
  await page.evaluate(() => globalThis.copyResolvers[1]());
  await page.getByRole('button', { name: 'Copied contract' }).waitFor();
  checks.push('A late clipboard result from another story cannot replace current copy feedback');
  assert.deepEqual(errors, []);
  checks.push('No browser runtime errors');
  await writeFile(
    path.join(output, 'results.json'),
    JSON.stringify({ version, addonVersion, passed: true, checks }, null, 2),
  );
  console.log(JSON.stringify({ version, addonVersion, passed: true, checks }, null, 2));
} finally {
  await browser?.close();
  if (server) await new Promise((resolve) => server.close(resolve));
  await rm(fixture, { recursive: true, force: true });
}
