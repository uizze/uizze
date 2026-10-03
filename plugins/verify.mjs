import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => readFileSync(resolve(root, p), 'utf8');
const json = p => JSON.parse(read(p));
const copilotManifest = json('plugin.json');
const copilotMarketplace = json('.github/plugin/marketplace.json');
const copilotEntry = copilotMarketplace.plugins.find(plugin => plugin.name === copilotManifest.name);
assert(copilotEntry, 'Copilot marketplace must include the installable plugin');
assert.equal(copilotEntry.version, copilotManifest.version, 'Copilot marketplace must advertise the current plugin version');
assert.equal(copilotMarketplace.metadata.version, copilotManifest.version, 'Copilot catalog version must match its package');
assert.equal(json('.github/plugin/plugin.json').version, copilotManifest.version, 'Copilot manifests must agree on version');
const configs = [json('plugins/antigravity/mcp_config.json').mcpServers.uizze, json('plugins/claude-directory/.mcp.json').mcpServers.uizze, json('plugins/cursor-agent/mcp.json').mcpServers.uizze, json('plugins/gemini-cli/gemini-extension.json').mcpServers.uizze];
for (const config of configs) {
  assert.equal(config.headers, undefined, 'No embedded bearer credentials');
  assert.equal(config.command, undefined, 'Use the native remote connection');
}
console.log('Copilot catalog version contracts and native MCP credential/command constraints passed.');
