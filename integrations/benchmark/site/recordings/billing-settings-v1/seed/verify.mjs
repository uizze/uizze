import { readFile } from 'node:fs/promises';

const files = Object.fromEntries(await Promise.all(
  ['index.html', 'styles.css', 'app.js'].map(async (file) => [file, await readFile(new URL(file, import.meta.url), 'utf8')]),
));
const source = Object.values(files).join('\n').toLowerCase();
const required = [
  'default',
  'loading',
  'empty',
  'failed',
  'success',
  'current plan',
  'payment method',
  'retry',
  'invoice',
  'download',
];
const missing = required.filter((term) => !source.includes(term));

if (missing.length) {
  throw new Error(`Missing required implementation terms: ${missing.join(', ')}`);
}

if (!source.includes('var(--')) {
  throw new Error('Use the supplied semantic CSS variables.');
}

console.log('Seed contract verification passed.');
