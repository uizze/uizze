# UIZZE public distribution

Hosted production is the source of truth for the domain packages and MCP. Directory copy for those surfaces must match these endpoints:

- Skills: https://uizze.com/.well-known/agent-skills/index.json
- MCP manifest: https://uizze.com/.well-known/mcp.json
- MCP server card: https://uizze.com/.well-known/mcp/server-card.json
- Documentation: https://uizze.com/docs

## Current product facts

- Production publishes exactly three free skills: `anti-ui-slop`, `ui-design`,
  and `ui-radar`.
- The skills work without an account or MCP connection.
- GitHub mirrors those three packages under `skills/`; production remains the
  canonical source.
- `image-to-ui` is a separate GitHub-native skill maintained in this repository,
  not a fourth skill advertised by the hosted production discovery index.
- The hosted MCP is authenticated at `https://uizze.com/mcp`.
- The MCP exposes `find_ui_references` and `find_ui_materials` only.
- Empty retrieval is an intentional no-op.
- The retired preview, older MCP-only source check, contracts, manifests,
  audits, and hosted critique are not current MCP surfaces and must not appear
  in listings.

## GitHub-native Image to UI

The canonical source is [`skills/image-to-ui`](skills/image-to-ui). Install it
with `npx skills add uizze/uizze --skill image-to-ui`.

The package contains only `SKILL.md` and the complete MIT license. Its detail
copy uses the existing UIZZE banner and describes faithful image-to-interface
implementation without requiring an account, MCP connection, executable,
dependency, or additional playbook.

The expected directory route is
`https://skills.sh/uizze/uizze/image-to-ui`. Skills.sh indexing, audits, and
detail-page rendering are external states; a published GitHub package does
not establish that its directory page is already available.

## Source-only 1.3.1 patch

The `1.3.1` source patch aligns existing native package/catalog versions and read-only skill metadata, records per-playbook immutable provenance, and includes the complete existing MIT license in `skills/ui-radar/LICENSE`. The `anti-ui-slop` and `ui-design` packages retain their Apache-2.0 licenses, mixed third-party notices, relative playbooks and checksums. The original ehmo iOS content revision remains explicitly unknown; see the [license map and upstream provenance question](LICENSING.md).

Source-only metadata and legal packaging may be ahead of hosted deployment. Production remains the authority for listing capability claims: the two current MCP tools and three website skills described above. A source tag or package release does not establish that its new bytes are live on the hosted domain.

The native-consumer workflow uses independent projects for the current published skills and current checkout source packages. It checks published artifact digests and installed checksum, relative-file and license contracts without comparing production to future source bytes. Advertised standalone Markdown is reported separately from self-contained archives; it is not presented as a complete bundled-license/checksum package. Complete producer-to-consumer byte parity is separate observed installation-smoke evidence, not a permanent source-copy golden.

This patch preserves the existing `1.3.0` tag, features, branding, pricing, GitHub Action pin and native MCP configuration. It does not deploy production, update the separately reviewed OpenAI published `1.0.1` or draft `1.0.2` snapshots, or establish native-client or marketplace acceptance.

## Maintained listings

| Surface | URL |
| --- | --- |
| GitHub | https://github.com/uizze/uizze |
| GitHub MCP Registry | https://github.com/mcp/uizze/uizze |
| GitHub Awesome Copilot | https://github.com/github/awesome-copilot/tree/main/plugins/uizze |
| Agentic Awesome Skills | https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/anti-ui-slop |
| Build with Claude | https://github.com/davepoon/buildwithclaude/tree/main/plugins/all-skills/skills/anti-ui-slop |
| Tons of Skills | https://github.com/jeremylongshore/tons-of-skills-marketplace/tree/main/plugins/design/uizze |
| Official MCP Registry | https://registry.modelcontextprotocol.io/v0/servers?search=uizze |
| Glama | https://glama.ai/mcp/connectors/io.github.uizze/uizze |
| MCP Market | https://mcpmarket.com/server/uizze-1 |
| MCPServers.org | https://mcpservers.org/servers/uizze-com |

Do not track star counts, submission queues, failed pitches, or copied listing
text here. Use the production metadata above whenever a directory needs a
refresh.

For redistribution and catalog license fields, see [the license map](LICENSING.md).
