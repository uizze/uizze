> ***If your UI screams AI, your app is dead.***

# Stop Making UI Slop

Build distinctive UI with 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/uizze/uizze/badge)](https://scorecard.dev/viewer/?uri=github.com/uizze/uizze)

UIZZE gives Codex, Claude Code, Cursor, Copilot, and other coding agents live reference search, product-specific design contracts, validation, audits, and a hard finish gate.

**[STOP UI SLOP →](https://uizze.com)**

## Install the free UIZZE anti-slop skill

Give Codex, Claude Code, or Cursor a workflow grounded in 800,000+ real web and iOS screens, a design contract, and a hard finish gate:

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

The free skill works on its own. Connect the hosted UIZZE MCP when you want live search, reference packs, audits, and screenshot critique inside the agent. The repository also includes the focused `uizze-ui-research` and `ui-slop-review` skills.

→ [Read the anti-slop UI workflow](ANTI_SLOP_UI_WORKFLOW.md)

→ [Run the UI slop preflight checklist](AI_UI_SLOP_CHECKLIST.md)

→ [Copy an anti-slop UI research, contract, validation, and critique prompt](AI_UI_SLOP_PROMPT_PACK.md)

→ [Follow the UI reference cookbook for coding agents](UI_REFERENCE_COOKBOOK.md)

Use UIZZE to:

- Browse a public catalog of real web and iOS product UI references.
- Search screens, flows, and UI elements for visual context before building.
- Give supported coding agents a hosted MCP workflow with UI design contracts, implementation validation, audits, and critiques.

## Try the MCP server free

Not connecting an agent yet? [Score one finished screen free](https://uizze.com/tools/ui-slop-score): upload one web or iOS screenshot for a blunt UI-slop risk score, visible evidence, and concrete fixes—no signup.

Connect `https://uizze.com/mcp/preview` without an account or token. The free server gives your agent one focused tool: `check_ui_slop`. It checks rendered HTML and CSS for generic structure, fake content, inert controls, missing states, default agent palettes, weak product specificity, and other visible UI slop—then returns concrete fixes.

### Codex

```bash
codex mcp add uizze-preview --url https://uizze.com/mcp/preview
```

### Claude Code

```bash
claude mcp add --transport http uizze-preview https://uizze.com/mcp/preview
```

Or install the bundled Claude Code plugin from this repository. It adds the same free preview plus the `uizze-ui-research` and `ui-slop-review` skills:

```text
/plugin marketplace add https://github.com/uizze/uizze.git
/plugin install uizze@uizze
```

### Cline

```bash
cline mcp install uizze-preview --transport http https://uizze.com/mcp/preview --yes
```

See [llms-install.md](llms-install.md) for the exact free-first setup and safety boundaries Cline should follow.

### Cursor

```json
{
  "mcpServers": {
    "uizze-preview": {
      "url": "https://uizze.com/mcp/preview"
    }
  }
}
```

## Unlock full UIZZE

Full UIZZE connects the agent to 800,000+ real web and iOS screens, live reference search, reference packs, a visual reference gallery in MCP Apps-capable clients, product-specific design contracts, implementation validation, deterministic audits, and visual critique. Get an agent token from [uizze.com](https://uizze.com), then add it to the full MCP endpoint:

```text
URL: https://uizze.com/mcp
Authorization: Bearer <your UIZZE agent token>
```

Store the token in local agent configuration or an environment variable only. Do not commit it.

### Codex

```bash
export UIZZE_AGENT_TOKEN="uizze_at_your_token"
codex mcp add uizze --url https://uizze.com/mcp --bearer-token-env-var UIZZE_AGENT_TOKEN
```

### Claude Code

```bash
claude mcp add --transport http uizze https://uizze.com/mcp --header "Authorization: Bearer uizze_at_your_token"
```

### Cursor

```json
{
  "mcpServers": {
    "uizze": {
      "url": "https://uizze.com/mcp",
      "headers": {
        "Authorization": "Bearer uizze_at_your_token"
      }
    }
  }
}
```

## Codex plugin

This repository is also a valid Codex plugin package. Its manifest lives at `.codex-plugin/plugin.json` and combines the public UIZZE MCP preview with the focused `uizze-ui-research` and `ui-slop-review` skills.

## What the server provides

The free UIZZE MCP server returns a deterministic slop audit with evidence and fixes. Full UIZZE adds structured UI references, image URLs, OCR excerpts, ontology context, design contracts, implementation manifests, critique gates, and suggested follow-up calls.

With full UIZZE, start UI work by creating a design contract, inspect the relevant references, adapt the observed patterns to the existing design system, then validate and critique the implementation before calling it done. Do not clone brands, logos, proprietary copy, assets, or exact layouts.

## Links

- [Official MCP Registry listing](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.uizze%2Fuizze)
- [Connect UIZZE](https://uizze.com)
- [Setup documentation](https://uizze.com/docs)
- [STOP UI SLOP](https://uizze.com/ai-ui-slop)
- [UI research for coding agents](https://uizze.com/mobbin-alternative)
- [UIZZE vs. Refero for coding-agent workflows](https://uizze.com/refero-alternative)
- [UIZZE vs. Gummble for coding-agent workflows](https://uizze.com/gummble-alternative)
