# UIZZE installation for Cline

Install the free UIZZE preview first. It requires no account, API key, token, or placeholder credential.

```bash
cline mcp install uizze-preview --transport http https://uizze.com/mcp/preview --yes
```

The preview exposes one tool: `check_ui_slop`. Use it after the interface is implemented. Supply only the rendered HTML and/or CSS that the user explicitly authorizes for review. Ask it to find concrete UI-slop risks, missing states, inert controls, fake product content, and weak specificity, then fix the findings before calling the UI finished.

Do not invent a token, add an Authorization header, or configure the full server during this free setup.

If the user explicitly wants live reference search across 800,000+ real web and iOS screens, design contracts, implementation validation, audits, or visual critique, direct them to https://uizze.com to connect the full UIZZE MCP with their own agent token. Store that token only in the MCP client's secret or environment configuration; never paste it into a repository, chat response, or log.
