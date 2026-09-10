# Uizze MCP

The hosted MCP gives coding agents focused access to full-screen UI references
and Uizze-hosted design materials. It is intentionally small and may return no
results when weak evidence would be worse than no evidence.

## Connect

Choose your client below. The free skill works without an account; the remote
MCP requires a Uizze account with paid access.

[Claude Code](#claude-code) · [Cursor](#cursor) · [Gemini CLI](#gemini-cli) ·
[VS Code / Copilot](#vs-code--github-copilot) · [Antigravity](#antigravity) ·
[Windsurf / Cascade](#windsurf--cascade) · [Zed](#zed) · [v0](#v0)

### Codex with an agent token

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

From your project directory, add Uizze as a remote HTTP server:

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

## Gemini CLI

Install the complete Uizze extension, including the free skill and remote MCP:

```bash
gemini extensions install https://github.com/uizze/gemini-extension
```

Restart Gemini CLI, then run `/mcp auth uizze` to connect your Uizze account.
`gemini extensions list` should show `uizze`, the `anti-ui-slop` skill, and one
MCP server. [Package and starter prompts](../../plugins/gemini-cli/).

## VS Code / GitHub Copilot

Open Extensions and search `@mcp Uizze` with the MCP marketplace enabled.
The [GitHub catalog listing](https://github.com/mcp/uizze/uizze) points to the
same service. Review the publisher and connection before installing.

For a project connection, merge this into `.vscode/mcp.json`:

```json
{
  "servers": {
    "uizze": {
      "type": "http",
      "url": "https://uizze.com/mcp"
    }
  }
}
```

Run `MCP: List Servers`, select `uizze`, and start it. Complete the native
OAuth sign-in when prompted. Use a trusted project to run tools. Install the
[free skill](#install-the-free-skill) separately and select GitHub Copilot.

## Antigravity

The [Uizze custom plugin](../../plugins/antigravity/) includes the complete
skill and native MCP configuration. Follow that package's installation steps.
A custom installation does not require an MCP Store listing.

For MCP alone, merge this into `~/.gemini/config/mcp_config.json`:

```json
{
  "mcpServers": {
    "uizze": {
      "serverUrl": "https://uizze.com/mcp"
    }
  }
}
```

Open Settings → Customizations, refresh Installed MCP Servers, and authenticate
Uizze. Do not add the same server manually if you already installed the plugin.

## Windsurf / Cascade

In the Cascade panel, open MCP Servers and edit the raw configuration. Merge
this into `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "uizze": {
      "serverUrl": "https://uizze.com/mcp"
    }
  }
}
```

Refresh the server list and complete OAuth when prompted. Install the
[free skill](#install-the-free-skill) separately and select your agent.
These instructions apply to Cascade. Devin Local, the newer default agent in
Devin Desktop, uses its own CLI configuration; do not copy this into that file.

## Zed

Open Settings → AI → MCP Servers → Add Server → Add Remote Server. Use the
name `uizze` and URL `https://uizze.com/mcp`. The equivalent settings entry is:

```json
{
  "context_servers": {
    "uizze": {
      "url": "https://uizze.com/mcp"
    }
  }
}
```

With no Authorization header configured, Zed prompts for the MCP OAuth flow.
Complete sign-in and check that the server is active. This connects the paid
MCP; it does not install the free skill or establish a Zed marketplace listing.

## v0

Open [v0 Settings → Integrations](https://v0.app/settings/integrations). Under
MCP Connections, add `Uizze` with URL `https://uizze.com/mcp`, choose OAuth,
and complete Uizze sign-in. Reuse the existing entry if it is already connected.

Before sending your request, open the chat composer's **+ → MCPs** menu and
select **Uizze**. Confirm it appears under **Selected**. Saving the connection
in Settings alone does not mean it is selected for your chat.

Ask for the references you need, for example:

```text
Use Uizze to find two real iOS app onboarding screens. Show the screenshots
here and briefly explain what each reference is useful for. This is reference
research only: do not create files, build an app, or publish anything.
```

The screenshots appear as native attachments that you can expand inside the
chat. v0 Mini may also repeat them as broken inline previews; use the loaded
attachments above the answer. This display issue remains under investigation.
If v0 searches the web instead of calling Uizze, check that Uizze is selected
in the MCPs menu before sending another request.

This manual OAuth connection and native image delivery were tested September
10, 2026. They are separate from Vercel Marketplace listing availability.

## Try the connection

Confirm your client's Uizze entry shows the two tools listed above. Then ask:

```text
Use Uizze to find up to three web UI references for a billing settings page
with invoice history. Explain which hierarchy and table decisions would
help our page. Keep our components, content, and brand.
```

The MCP requires an account with paid access. If your client shows a sign-in
request, complete it first. If it reports an access or subscription problem,
check your [Uizze account](https://uizze.com/?utm_source=github&utm_medium=repository&utm_campaign=discovery&utm_content=mcp_connection).
A connected server can return no relevant references; continue from your
project in that case.

For a complete task, [try your first screen](../../examples/first-screen.md).
Client instructions reviewed September 9, 2026 against
[Claude Code](https://code.claude.com/docs/en/mcp),
[Cursor](https://cursor.com/docs/mcp),
[Gemini CLI](https://geminicli.com/docs/tools/mcp-server/),
[VS Code](https://code.visualstudio.com/docs/agent-customization/mcp-servers),
[Antigravity](https://antigravity.google/docs/mcp),
[Cascade](https://docs.devin.ai/desktop/cascade/mcp), and
[Zed](https://zed.dev/docs/ai/mcp) documentation.

Gemini CLI 0.59.0 installed the public v1.2.16 release and recognized its skill
and MCP configuration. The VS Code catalog returned Uizze by name. Those
checks do not establish authenticated retrieval in every client. Marketplace
availability and review status are separate from manual installation.

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
