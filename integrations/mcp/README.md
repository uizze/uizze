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

## Claude Code

From your project directory, add UIZZE as a remote HTTP server:

```bash
claude mcp add --transport http uizze https://uizze.com/mcp
```

Open Claude Code, run `/mcp`, select `uizze`, and complete the browser sign-in.
If you already configured a server named `uizze`, open its existing entry instead
of adding it again. This command uses Claude Code's default local scope for the
current project.

The free plugin installs separately:

```text
/plugin marketplace add uizze/uizze
/plugin install uizze@uizze
```

Follow the install summary if Claude asks you to reload plugins. Use
`/uizze:anti-ui-slop` for a focused UI task.

## Cursor

Add this entry to `mcpServers` in your project's `.cursor/mcp.json`, preserving
any servers already configured there:

```json
{
  "mcpServers": {
    "uizze": {
      "url": "https://uizze.com/mcp"
    }
  }
}
```

Open Cursor's MCP settings, enable `uizze`, and complete its OAuth sign-in when
prompted. For access across projects, Cursor also supports `~/.cursor/mcp.json`.

Install the free skill in your project with the command below, selecting Cursor
when the installer asks for an agent. The skill and MCP connection are separate.

## Try the connection

Confirm your client's UIZZE entry shows the two tools listed above. Then ask:

```text
Use UIZZE to find up to three web UI references for a billing settings page
with invoice history. Explain which hierarchy and table decisions would
help our page. Keep our components, content, and brand.
```

The MCP requires an account with paid access. If your client shows a sign-in
request, complete it first. If it reports an access or subscription problem,
check your [UIZZE account](https://uizze.com/?utm_source=github&utm_medium=repository&utm_campaign=discovery&utm_content=mcp_connection).
A connected server can return no relevant references; continue from your
project in that case.

For a complete task, [try your first screen](../../examples/first-screen.md).
Client configuration references: [Claude Code MCP](https://code.claude.com/docs/en/mcp)
and [Cursor MCP](https://cursor.com/docs/mcp).

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
