> ***If your UI screams AI, your app is dead.***

# Stop Making UI Slop

Build distinctive UI with 800,000+ real web and iOS screens via [UIZZE](https://uizze.com/github-action).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

## Catch UI Slop in Every Pull Request

Your tests can pass while the UI still looks generated. This free GitHub Action catches concrete finish risks in changed frontend code before they ship. It runs entirely inside the job: no source, screenshots, or scan results leave the runner.

It checks changed JS, TS, JSX, TSX, CSS, HTML, Vue, and Svelte files for conservative signals:

- explicitly inert or placeholder controls;
- data-driven UI with no visible loading, empty, or error-state markers;
- hardcoded color values that may bypass semantic design tokens; and
- combinations of generic dashboard, card-grid, and placeholder-metric cues.

Findings appear as workflow annotations and in the job summary. It is a focused source check, not a visual, accessibility, correctness, or security audit.

## Usage

Pin a released version rather than a branch:

```yaml
name: UI finish gate

on:
  pull_request:

permissions:
  contents: read

jobs:
  ui-slop-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2
      - uses: uizze/uizze@v1
        with:
          fail-on: error
```

The action needs no token, account, API key, write permission, or network access. For stronger supply-chain pinning, replace `@v1` with the release commit SHA.

## Inputs

| Input | Default | Purpose |
| --- | --- | --- |
| `files` | changed frontend files | Optional comma- or newline-separated local paths. |
| `manifest` | none | Optional path to local evidence JSON. |
| `fail-on` | `error` | Fail on `error`, `warning`, or `never`. |
| `show-uizze-link` | `true` | Offer optional free visual and agent follow-ups after useful results. |
| `max-files` | `200` | Scan cap, limited internally to 1–1000. |

Each file is capped at 1 MiB. Generated, dependency, build, and vendor folders are ignored. Explicit paths are also constrained to the checked-out workspace.

## Optional agent handoff

The Action is deliberately local: it never uploads checkout files, screenshots, or findings. If a finding needs a more contextual next pass, add UIZZE's free no-token preview to the coding agent you already use:

```bash
codex mcp add uizze-preview --url https://uizze.com/mcp/preview
```

Then ask the agent to run `check_ui_slop` on the rendered HTML and CSS. That optional MCP call receives only the rendered artifacts you explicitly provide. It returns concrete UI-slop findings and fixes; it does not replace visual, accessibility, correctness, or security review.

For Claude Code, Cursor, and other client setup, use the canonical [UIZZE MCP instructions](../mcp#try-the-mcp-server-free).

## Optional visual review

The local gate reads source. When a changed screen needs a visual second opinion, use the free [UI Slop Score](https://uizze.com/tools/ui-slop-score): drop one rendered web or iOS screenshot, get visible evidence and a PR-ready repair note, then share the diagnosis without sharing the screen. No signup; the screenshot is processed transiently. It reviews product specificity and common generic patterns—it does not claim to detect who made the UI.

Want to see the boundary of this workflow before trying it? [Inspect one recorded same-prompt case](https://benchmark.uizze.com/recordings/billing-settings-v1/): the seed, raw captures, diffs, and a narrow 96/100 to 98/100 result are public. It is one recorded case, not a benchmark result or quality guarantee.

## Optional review evidence

A manifest can name files and record product states that reviewers verified elsewhere. Evidence only affects the missing-state check; it does not silence other rules.

```json
{
  "files": ["src/app/orders/page.tsx"],
  "evidence": {
    "src/app/orders/page.tsx": {
      "states": ["loading", "empty", "error"]
    }
  }
}
```

```yaml
- uses: uizze/uizze@v1
  with:
    manifest: .github/uizze-ui-evidence.json
```

## Rule philosophy

The Action reports observable source signals, not subjective design scores. A single `Dashboard` heading does not trigger the generic-dashboard rule; multiple independent cues must appear together. Missing-state checks only run on files that both render UI and contain a data-driven marker. Start with `fail-on: error`, review warnings, and tune the source or evidence rather than blindly suppressing findings.

## Development

Node 20 or newer is enough for local development; GitHub runs the packaged Action on Node 24. There are no production or development dependencies.

```bash
npm test
npm run verify
```

`npm run build` copies the dependency-free source tree into `dist/`. Any release must include the rebuilt `dist/` because GitHub Actions does not run an install or build step for consumers.

Release verification lives in the canonical UIZZE repository so the Action and its tests are versioned together.

## Privacy and security

The runtime reads only local event metadata, Git history, explicitly selected source files, and an optional local manifest. It contains no HTTP client and performs no network transmission. See [SECURITY.md](SECURITY.md) for reporting and hardening guidance.

## License

MIT. See [LICENSE](LICENSE).
