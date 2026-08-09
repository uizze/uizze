# Optional authenticated UIZZE MCP

The starter works without MCP. Use the bundled free skill and design contract
first. Connect MCP only when automated catalogue search, contract generation, or
visual critique would materially improve the work.

1. Obtain access from https://uizze.com.
2. Copy `.env.example` to a local ignored environment file.
3. Set `UIZZE_MCP_TOKEN` locally. Never commit it.
4. Configure your MCP client to use the HTTP endpoint in `UIZZE_MCP_URL` and an
   `Authorization: Bearer ${UIZZE_MCP_TOKEN}` header.

The checked-in `.mcp.json.example` is a placeholder for clients that support
environment-variable interpolation. If your client does not, use its secure
secret or environment configuration instead of writing the token into this repo.

For Codex clients that support `bearer_token_env_var`, the equivalent user-level
configuration is:

```toml
[mcp_servers.uizze]
url = "https://uizze.com/mcp"
bearer_token_env_var = "UIZZE_MCP_TOKEN"
```

After setup, verify that the client lists UIZZE tools before telling an agent to
use them. Never claim MCP is connected based only on the presence of a config file.
