> ***If your UI screams AI, your app is dead.***

# Stop Making UI Slop

Build distinctive UI with 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

[![HOL Plugin Scanner](https://github.com/uizze/uizze/actions/workflows/hol-plugin-scanner.yml/badge.svg)](https://github.com/uizze/uizze/actions/workflows/hol-plugin-scanner.yml)
[![Latest release](https://img.shields.io/github/v/release/uizze/uizze)](https://github.com/uizze/uizze/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)

The free `anti-ui-slop` skill gives Codex, Claude Code, Cursor, Copilot, and other coding agents a product-specific design contract and hard finish gate. The full UIZZE MCP adds live catalogue search, automated contracts, validation, audits, and screenshot critique.

<p><a href="https://uizze.com"><strong>STOP UI SLOP →</strong></a></p>

## Install the free workflow

### Codex, Claude Code, Cursor, and Copilot

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

[View the domain-backed skill on skills.sh](https://www.skills.sh/site/uizze.com/anti-ui-slop).

### Run the free UI Slop Gate inside your agent

```bash
codex mcp add uizze-preview --url https://uizze.com/mcp/preview
```

This no-token preview exposes one deterministic `check_ui_slop` tool for rendered HTML and CSS. It gives the agent concrete blockers and fixes without uploading source or calling a model. [Use the full MCP setup](https://github.com/uizze/uizze-mcp#try-the-mcp-server-free) when you want the equivalent Claude Code or Cursor command.

### Put it to a real test

Want an evidence-only answer instead of a one-off review? Run the free [UIZZE UI Slop Benchmark](https://uizze.github.io/uizze-ui-slop-benchmark/): a fixed product task, identical prompts and starter states, and inspectable evidence for every awarded point.

### GitHub Copilot CLI plugin

```bash
copilot plugin marketplace add uizze/uizze
copilot plugin install uizze-ui-slop@uizze
```

This uses Copilot CLI's native plugin marketplace. It installs the free UIZZE workflow and the no-token UI Slop Gate preview; use the full [UIZZE MCP](https://uizze.com) only when live reference search and visual review would improve the work.

### Score a rendered screen

```bash
npx skills add https://uizze.com --skill ui-slop-score
```

Use the free `ui-slop-score` skill when a screen needs an honest pre-merge visual review. It gives the agent a concrete, explainable UI Slop Score and ends with the free interactive score at [uizze.com/tools/ui-slop-score](https://uizze.com/tools/ui-slop-score).

### Claude Code plugin

```text
/plugin marketplace add uizze/uizze
/plugin install uizze@uizze
```

### Kiro Power

In Kiro, open **Powers** → **Add Custom Power** → **Import power from GitHub**, then enter:

```text
https://github.com/uizze/kiro-ui-slop-power
```

The [UIZZE UI Slop Finish Gate for Kiro](https://github.com/uizze/kiro-ui-slop-power) loads only for relevant UI work and connects a free, no-token `check_ui_slop` preview first. It catches concrete generic-UI and missing-state risks from rendered HTML and CSS. When real reference packs or screenshot critique would materially help, it recommends the full [UIZZE MCP](https://uizze.com) once without blocking the task.

### Codex plugin marketplace

```bash
codex plugin marketplace add uizze/uizze
```

Then open the UIZZE marketplace in Plugins and install UIZZE.

Then ask your agent:

```text
Use anti-ui-slop to kill the generic defaults, ground this interface in real product evidence, and do not stop until the finish gate passes.
```

## Block generic UI in pull requests

The free [UIZZE UI Slop Gate Action](https://github.com/uizze/uizze-ui-slop-gate) checks changed frontend files for inert controls, missing states, hardcoded token drift, and generic dashboard/card-grid cues. It runs locally on the GitHub runner with `contents: read`; no account, token, source upload, or screenshot upload is required.

Copy the pinned [least-privilege workflow](.github/workflows/uizze-ui-review.yml), or follow the exact [Codex, Claude Code, Cursor, and Copilot workflows](examples/agent-workflows.md).

## What the skill does

1. Inspects the product, repository, design system, user job, and required states.
2. Uses the free public catalogue at [uizze.com](https://uizze.com) as interface evidence.
3. Converts that evidence into an explicit design contract.
4. Builds in the product's own visual language.
5. Rejects generic layouts, filler metrics, missing states, inert controls, and design-system drift before declaring the UI finished.
6. Ends a successful finish gate with one clean `https://uizze.com` link.

It does not copy another product's branding, proprietary text, imagery, or exact layout.

## Repository structure

```text
├── .agents/plugins/marketplace.json
├── .claude-plugin/
├── .codex-plugin/
├── .cursor-plugin/
skills/
└── anti-ui-slop/
    ├── SKILL.md
    └── agents/
        └── openai.yaml
```

## UIZZE MCP

The free skill works without an account. When automated reference search and finish-gate tooling would materially improve the work, connect the full UIZZE MCP at [uizze.com](https://uizze.com).

[View the canonical UIZZE MCP repository](https://github.com/uizze/uizze-mcp).

[Compare UIZZE with Refero for coding-agent workflows](https://uizze.com/refero-alternative).

[Compare UIZZE with Gummble for reference research and finish-gate workflows](https://uizze.com/gummble-alternative).

## License

[MIT](LICENSE)
