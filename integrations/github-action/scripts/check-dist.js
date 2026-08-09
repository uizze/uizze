'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const metadata = fs.readFileSync(path.join(root, 'action.yml'), 'utf8');
assert.match(metadata, /using:\s*node24/);
assert.match(metadata, /main:\s*dist\/index\.js/);
assert.ok(fs.existsSync(path.join(root, 'dist', 'index.js')), 'dist/index.js is missing');
assert.ok(fs.existsSync(path.join(root, 'dist', 'lib', 'rules.js')), 'dist/lib/rules.js is missing');
assert.equal(fs.readFileSync(path.join(root, 'src', 'index.js'), 'utf8'), fs.readFileSync(path.join(root, 'dist', 'index.js'), 'utf8'));
require(path.join(root, 'dist', 'index.js'));
console.log('Action metadata and packaged runtime are valid.');
