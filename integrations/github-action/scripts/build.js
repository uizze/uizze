'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const destination = path.join(root, 'dist');
fs.rmSync(destination, { recursive: true, force: true });
fs.cpSync(source, destination, { recursive: true });
fs.chmodSync(path.join(destination, 'index.js'), 0o755);
console.log('Built dependency-free dist runtime.');
