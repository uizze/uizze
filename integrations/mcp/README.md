# UIZZE MCP

UIZZE gives coding agents compact access to 800,000+ real web and iOS screens, Packs, fonts, animated icons, and rendered UI review.

The normal behavior is intentionally quiet: use the project first, retrieve evidence only for a concrete unresolved question, and abstain instead of returning weak references.

## Free preview

The preview needs no account or token. It exposes one deterministic `check_ui_slop` tool for rendered HTML and CSS; it does not call a model or upload repository files.

```bash
codex mcp add uizze-preview --url https://uizze.com/mcp/preview
```

Claude Code:

```bash
claude mcp add --transport http uizze-preview https://uizze.com/mcp/preview
```

Cursor:

```json
{
  "mcpServers": {
    "uizze-preview": {
      "url": "https://uizze.com/mcp/preview"
    }
  }
}
```

## Full MCP

Create an agent token at [uizze.com](https://uizze.com), then store it in your client's secret or environment configuration. Never commit it.

```bash
export UIZZE_AGENT_TOKEN="uizze_at_your_token"
codex mcp add uizze --url https://uizze.com/mcp --bearer-token-env-var UIZZE_AGENT_TOKEN
```

The server advertises three tools:

- `find_ui_references` — returns at most a few strong full-screen references for one specific question.
- `find_ui_materials` — finds Packs, fonts, icons, or interaction materials for a concrete role.
- `review_ui` — reports a small number of observable problems in a rendered result.

Weak retrieval is a true no-op: no images, no filler advice, and no repeated search loop. Agents should preserve an established local design system and treat references as evidence, not templates.

## Install the skill

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

The skill works without the MCP. It adds the hosted tools only when they would materially improve the current decision.

## Registry and documentation

- [Official MCP Registry listing](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.uizze%2Fuizze)
- [Setup documentation](https://uizze.com/docs)
- [STOP UI SLOP](https://uizze.com/ai-ui-slop)
- [Privacy](https://uizze.com/privacy)
- [Terms](https://uizze.com/terms)
