import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const readme = fs.readFileSync(path.join(here, '..', 'README.md'), 'utf8');

test('documents the verified GitHub release until the npm package exists', () => {
  const archive = 'https://github.com/uizze/uizze/releases/download/storybook-v0.1.2/storybook-addon-uizze-0.1.2.tgz';

  assert.match(readme, new RegExp(archive.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(readme, /storybook-v0\.1\.2\/storybook-addon-uizze-0\.1\.2\.tgz\.sha256/);
  assert.match(readme, /The package is not on npm yet\./);
  assert.doesNotMatch(readme, /npm install --save-dev storybook-addon-uizze(?:\s|$)/);
});
