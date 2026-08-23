# UIZZE MCP

The hosted MCP gives coding agents focused access to full-screen UI references
and UIZZE-hosted design materials. It is intentionally small and may return no
results when weak evidence would be worse than no evidence.

## Connect

Create an agent token at [uizze.com](https://uizze.com), then store it in your
client's secret or environment configuration. Never commit it.

```bash
export UIZZE_AGENT_TOKEN="uizze_at_your_token"
codex mcp add uizze --url https://uizze.com/mcp --bearer-token-env-var UIZZE_AGENT_TOKEN
```

The server exposes exactly two tools:

- `find_ui_references` — find or inspect up to three active full-screen references.
- `find_ui_materials` — find up to three hosted fonts, icons, animated icons,
  or explicitly requested packs.

Use the product and its existing design system first. Retrieve evidence only
for a concrete unresolved question, and do not retry an empty result.

## Install the free skill

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

The skill works without the MCP.

## Metadata and documentation

- [Official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=uizze)
- [Live MCP manifest](https://uizze.com/.well-known/mcp.json)
- [Live server card](https://uizze.com/.well-known/mcp/server-card.json)
- [Setup documentation](https://uizze.com/docs)
- [Privacy](https://uizze.com/privacy)
- [Terms](https://uizze.com/terms)
