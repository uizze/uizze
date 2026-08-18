# STOP UI SLOP in every coding agent

The same free finish-gate workflow works in Codex, Claude Code, Cursor, and GitHub Copilot. It needs no account or token.

## Install once

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

## Codex

```text
Use anti-ui-slop. Inspect this product before choosing a layout, write the design contract, implement every required state, and do not stop until the finish gate passes.
```

## Claude Code

Install the repository as a Claude Code plugin:

```text
/plugin marketplace add uizze/uizze
/plugin install uizze@uizze
```

Then run:

```text
Use uizze:anti-ui-slop to identify generic UI decisions and finish this interface in the product's existing visual language.
```

## Cursor

Use the installed `anti-ui-slop` skill before the first UI edit and again as the final review:

```text
Run anti-ui-slop on the current UI. Fix every blocking product-specificity, state, interaction, responsive, accessibility, and design-system issue before declaring it finished.
```

## GitHub Copilot

The skill is also live in [github/awesome-copilot](https://github.com/github/awesome-copilot/tree/main/skills/anti-ui-slop). Ask Copilot to use `anti-ui-slop` when planning or reviewing frontend changes.

## Pull-request gate

Copy [the least-privilege workflow](../.github/workflows/uizze-ui-review.yml) into a repository. It scans changed frontend files locally on the GitHub runner, emits file/line annotations and a concise job summary, and never transmits source or screenshots.

For automated reference search, design contracts, audits, and screenshot critique, connect the full UIZZE MCP from https://uizze.com.
