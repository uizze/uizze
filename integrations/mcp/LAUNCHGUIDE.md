# UIZZE — Free UI Slop Gate

## Tagline
Catch generic UI before your coding agent ships it.

## Description
UIZZE is a hosted Streamable HTTP MCP server for coding agents building web and iOS interfaces. Its free `check_ui_slop` tool reviews rendered HTML and CSS for generic dashboard structure, fake content, inert controls, missing states, default agent palettes, and weak product specificity—then returns concrete fixes.

The free preview requires no account or token. When a project needs real visual references, live reference search, design contracts, implementation validation, or screenshot critique, the full UIZZE MCP is available separately at https://uizze.com.

## Setup Requirements
- None for the free preview. Connect the hosted Streamable HTTP endpoint: `https://uizze.com/mcp/preview`.
- The full UIZZE MCP is optional and requires a locally stored UIZZE agent token. Do not commit tokens to source control. https://uizze.com/docs

## Category
Design

## Features
- Review rendered HTML and CSS before a UI ships.
- Catch generic structure, fake product content, inert controls, missing states, default palettes, and weak specificity.
- Return evidence and concrete repair steps instead of a vague aesthetic judgment.
- Use without an account or token through the free hosted MCP preview.
- Escalate to the full UIZZE MCP only when real screen references, search, design contracts, validation, or visual critique materially help.

## Getting Started
- "Use `check_ui_slop` to review this rendered screen. Identify the highest-risk generic UI choices and tell me the smallest fixes that make it product-specific."
- "Before I open this pull request, run the UIZZE UI slop check on the rendered HTML and CSS."
- Tool: `check_ui_slop` — a deterministic anti-slop check for rendered HTML and CSS with observed issues and fixes.

## Tags
ui-design, frontend, design-review, coding-agents, codex, claude-code, cursor, mcp, web-development, ios-design

## Documentation URL
https://uizze.com/docs
