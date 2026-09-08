# UIZZE UI Slop Gate

**Catch unfinished UI in pull requests.** Find placeholder controls, missing
state markers, color drift, and generic dashboard cues before the next review.
Free, dependency-free, and local to your GitHub runner.

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

[**Inspect the live example →**](https://github.com/uizze/uizze/actions/workflows/ui-slop-gate-example.yml) · [Add it to your repository](#usage) · [Work through the findings](../../examples/agent-workflows.md)

## What it catches

Your tests can pass while the UI still looks generated. This free GitHub Action catches concrete finish risks in changed frontend code before they ship. It runs entirely inside the job: no source, screenshots, or scan results leave the runner.

It checks changed JS, TS, JSX, TSX, CSS, HTML, Vue, and Svelte files for conservative signals:

| Source signal | Example | Default severity |
| --- | --- | --- |
| Explicitly unfinished control | `href="#"` or an empty click handler | Error |
| Missing state markers | A query-backed screen without loading, empty, or error markers | Warning |
| Color drift | Hardcoded colors that may bypass the product's semantic tokens | Warning |
| Generic dashboard cues | Several dashboard, card-grid, and placeholder-metric cues together | Warning |

Findings appear as workflow annotations and in the job summary. It is a focused source check, not a visual, accessibility, correctness, or security audit.

## Usage

Create `.github/workflows/ui-finish-gate.yml` in your repository. Start with
`fail-on: never` to inspect findings while your existing checks keep working:

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
      - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          fetch-depth: 2
          persist-credentials: false
      - uses: uizze/uizze@638ab4583b5db6593b0c5cc5304d6b03932ec46d # v1.2.15
        with:
          fail-on: never
```

The workflow pins [v1.2.15](https://github.com/uizze/uizze/releases/tag/v1.2.15)
to its immutable commit. Use `uizze/uizze@v1` if you prefer updates within the
maintained major version. The Action itself needs no token, account, API key,
write permission, or network access.

After the first run, open its **Summary** to review findings and source
locations. Change `fail-on` to `error` to block explicitly unfinished controls,
or `warning` to block all configured findings. `never` reports every finding
as a warning annotation and keeps the Action step successful.

## Inputs

| Input | Default | Purpose |
| --- | --- | --- |
| `files` | changed frontend files | Optional comma- or newline-separated local paths. |
| `manifest` | none | Optional path to local evidence JSON. |
| `fail-on` | `error` | Fail on `error`, `warning`, or `never`. |
| `show-uizze-link` | `true` | Link to free agent workflows and optional reference search after scan results. Set `false` to omit links. |
| `max-files` | `200` | Scan cap, limited internally to 1–1000. |

Each file is capped at 1 MiB. Generated, dependency, build, and vendor folders are ignored. Explicit paths are also constrained to the checked-out workspace.

## See what the Action finds

[Open the live example workflow](https://github.com/uizze/uizze/actions/workflows/ui-slop-gate-example.yml)
to compare two jobs: the original snippet produces four findings; the revised
snippet produces none. Both run the published Action with the same read-only
permissions as the installation above. The example checks its expected output
so the demonstration cannot silently drift.

[Inspect the source and reproduce both results](../../examples/pull-request-check.md).
These are source-check examples, not a rendered application or a visual-quality
score. For your next UI task, try the [free agent workflows](../../examples/agent-workflows.md)
for billing settings, permission screens, or data tables.

Need product-specific reference screens while fixing a finding? Optional UIZZE
reference search is available separately at [uizze.com](https://uizze.com/?utm_source=github&utm_medium=repository&utm_campaign=discovery&utm_content=action_readme).

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
