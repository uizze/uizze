# UIZZE public distribution

Production is the source of truth. Directory copy must match these endpoints:

- Skills: https://uizze.com/.well-known/agent-skills/index.json
- MCP manifest: https://uizze.com/.well-known/mcp.json
- MCP server card: https://uizze.com/.well-known/mcp/server-card.json
- Documentation: https://uizze.com/docs

## Current product facts

- The public skill works without an account or MCP connection.
- The hosted MCP is authenticated at `https://uizze.com/mcp`.
- The MCP exposes `find_ui_references` and `find_ui_materials` only.
- Empty retrieval is an intentional no-op.
- The retired preview, older MCP-only source check, contracts, manifests,
  audits, and hosted critique are not current MCP surfaces and must not appear
  in listings.

## Maintained listings

| Surface | URL |
| --- | --- |
| GitHub | https://github.com/uizze/uizze |
| Official MCP Registry | https://registry.modelcontextprotocol.io/v0/servers?search=uizze |
| skills.sh | https://www.skills.sh/site/uizze.com |
| Glama | https://glama.ai/mcp/connectors/io.github.uizze/uizze |
| MCP Market | https://mcpmarket.com/server/uizze-1 |
| MCPServers.org | https://mcpservers.org/servers/uizze-com |

Do not track star counts, submission queues, failed pitches, or copied listing
text here. Use the production metadata above whenever a directory needs a
refresh.
