# Uizze plugins

**UI design that stands out**

The [ChatGPT plugin](https://chatgpt.com/plugins/plugin_asdk_app_6a844531edb881918d6aefb456134f4b) supplies the display name, developer name, logo, and three starter prompts in [listing.json](listing.json). The subtitle “UI design that stands out” matches the user-approved OpenAI 1.0.1 draft; that OpenAI draft is not yet published.

- [Claude Code](claude-directory/): one complete anti-ui-slop skill and a native OAuth MCP connection.
- [Cursor](cursor-agent/): the same skill and service, using Cursor/Agent Plugins configuration.
- [Gemini CLI](gemini-cli/): the same skill and service, released from [uizze/gemini-extension](https://github.com/uizze/gemini-extension).
- [Antigravity](antigravity/): the same skill and service as a custom plugin; store placement remains unverified.
- [VS Code, Windsurf / Cascade, and Zed setup](../integrations/mcp/): native remote connections with OAuth.
- [OpenAI package source](openai-directory/uizze/): source packaging; updates here do not change the approved marketplace snapshot.

Run `node plugins/verify.mjs` from the repository root to verify names, prompts, complete skill contents, logo bytes, and connection URLs.

## Platform differences

Public display names are **Uizze**. Machine identifiers such as `uizze`, established plugin IDs, and existing environment-variable names stay stable. Platforms require different manifest keys and category identifiers. Each package uses the current complete canonical skill with its licenses and playbooks.

The approved OpenAI description still mentions a retired preview and hosted review. The common description preserves the supported wording and omits those removed capabilities. The third starter prompt remains unchanged: the finish gate is performed through the skill and agent's local rendering tools, not a hosted MCP review tool.

The approved logo file is reused without modification. Keep existing before/after media labeled as a Uizze demonstration unless the recording's client and run conditions are documented. A package being downloadable does not establish marketplace approval or search visibility.
