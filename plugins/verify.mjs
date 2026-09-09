import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => readFileSync(resolve(root, p), 'utf8');
const json = p => JSON.parse(read(p));
const listing = json('plugins/listing.json');
const hash = p => createHash('sha256').update(readFileSync(p)).digest('hex');
function files(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(resolve(path, e.name)) : [resolve(path, e.name)]);
}
for (const path of ['.codex-plugin/plugin.json', '.claude-plugin/plugin.json', '.cursor-plugin/plugin.json', 'plugin.json', '.github/plugin/plugin.json', 'plugins/claude-directory/.claude-plugin/plugin.json', 'plugins/cursor-agent/.cursor-plugin/plugin.json', 'plugins/cursor-agent/plugin.json', 'plugins/openai-directory/uizze/.codex-plugin/plugin.json']) {
  const manifest = json(path);
  assert.equal(manifest.author.name, listing.developerName, path);
  assert.equal(manifest.description, listing.shortDescription, path);
  if (manifest.displayName) assert.equal(manifest.displayName, listing.displayName, path);
  if (manifest.interface) {
    assert.equal(manifest.interface.displayName, listing.displayName, path);
    assert.deepEqual(manifest.interface.defaultPrompt, listing.defaultPrompt, path);
    assert.equal(manifest.interface.longDescription, listing.longDescription, path);
  }
}
for (const path of ['plugins/claude-directory', 'plugins/cursor-agent', 'plugins/gemini-cli']) {
  const markdown = read(`${path}/README.md`);
  assert(markdown.startsWith(`# ${listing.displayName}\n`), path);
  for (const prompt of listing.defaultPrompt) assert(markdown.includes(prompt), path);
  assert(!/UIZZE|mcp\/preview|review_ui/.test(markdown), path);
  const canonical = resolve(root, 'skills/anti-ui-slop');
  const bundled = resolve(root, path, 'skills/anti-ui-slop');
  assert.deepEqual(files(bundled).map(f => relative(bundled, f)).sort(), files(canonical).map(f => relative(canonical, f)).sort());
  for (const file of files(canonical)) assert.equal(hash(file), hash(resolve(bundled, relative(canonical, file))), file);
}
const configs = [json('plugins/claude-directory/.mcp.json').mcpServers.uizze, json('plugins/cursor-agent/mcp.json').mcpServers.uizze, json('plugins/gemini-cli/gemini-extension.json').mcpServers.uizze];
for (const config of configs) {
  assert.equal(config.url ?? config.httpUrl, listing.mcpURL);
  assert.equal(config.headers, undefined, 'No embedded bearer credentials');
  assert.equal(config.command, undefined, 'Use the native remote connection');
}
assert.equal(hash(resolve(root, listing.logo)), hash(resolve(root, 'plugins/gemini-cli/assets/uizze-logo.png')));
assert.equal(json('plugins/gemini-cli/gemini-extension.json').description, listing.shortDescription);
console.log('Plugin branding, prompts, complete skill bundles, logo parity, and native MCP configurations passed.');
