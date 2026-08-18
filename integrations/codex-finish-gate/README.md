> **Stop AI coding agents from shipping generic UI.**

# Stop Making UI Slop

Build product-specific UI with the free Codex finish gate. Optional full UIZZE adds 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

## STOP UI SLOP: Codex Finish Gate

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/uizze/uizze/badge)](https://scorecard.dev/viewer/?uri=github.com/uizze/uizze)

**A working UI is not finished if it only survives the happy path.**

This dependency-free challenge forces Codex past the generic first draft and gives “finished” a concrete, testable meaning. It supplies:

- durable `AGENTS.md` instructions for UI changes;
- a five-state billing-settings task instead of a happy-path mockup;
- semantic design tokens and an existing product shell;
- a deterministic behavioral verification command;
- a finish-gate checklist for visual review, accessibility, and product specificity.

It does one thing: makes “finished” testable. The verifier catches skipped product states; the rendered finish gate still decides whether the UI deserves to ship.

## Try it with Codex

```bash
git clone https://github.com/uizze/uizze.git
cd uizze/integrations/codex-finish-gate
npm run verify
npm run dev
codex
```

The first verification run is expected to fail: the challenge seed intentionally omits the required billing workflow. After the agent finishes the task, the same command must pass. `npm test` separately proves that the unchanged verifier rejects the seed, exercises all five query states, and accepts a complete fixture.

The local server prints its URL. Open each state directly, for example `http://127.0.0.1:4173/?state=failed`. The starter uses only Node’s standard library and browser HTML, CSS, and JavaScript.

Then give Codex this task:

```text
Read AGENTS.md and TASK.md. Implement the billing-settings workflow, exercise every declared state, run npm run verify, inspect the rendered UI at desktop and narrow widths, and report the finish-gate evidence. Do not stop at the default state.
```

For a review-only run after implementation:

```text
Read AGENTS.md, TASK.md, UI_CONTRACT.md, and RUN_LOG.md. Do not change code yet. Run the verifier, inspect and interact with every declared state at desktop and narrow widths, then fill RUN_LOG.md with evidence, concrete defects, and the smallest required fixes. Never infer visual quality from source alone.
```

Codex automatically reads repository `AGENTS.md` guidance. The same task can be used with another coding agent by explicitly asking it to read `AGENTS.md` and `TASK.md`.

## What “done” means

The implementation must make these URLs independently useful:

- `?state=default`
- `?state=loading`
- `?state=empty`
- `?state=failed`
- `?state=success`

It must also expose a current plan, payment-method replacement, failed-payment retry, invoice inspection, and receipt download. `npm run verify` executes the candidate app in a constrained local VM once per query state and checks state-specific billing markers and semantics. It does not judge visual quality; the agent must still render, interact with, and visually inspect the result.

Before implementation, fill [UI_CONTRACT.md](UI_CONTRACT.md). After verification, fill [RUN_LOG.md](RUN_LOG.md). Keeping the contract separate from the run log makes it harder to rewrite success criteria after seeing the output.

## Suggested run log

Record the following in your issue or pull request:

```md
## UI finish gate

- [ ] `npm run verify` passes
- [ ] default, loading, empty, failed, and success states inspected
- [ ] desktop and narrow viewport screenshots reviewed
- [ ] keyboard focus and status semantics checked
- [ ] no console or page errors
- [ ] product-specific copy and actions survive the noun-swap test poorly

Evidence:
- screenshots:
- commands:
- remaining limitations:
```

## Optional: add real interface context

This starter is useful on its own. If you want Codex to work from real interface references and a documented contract → evidence → manifest validation → audit → critique workflow, [connect UIZZE](https://uizze.com).

For a separate review of the finished interface, run the free [UIZZE UI Specificity Check](https://uizze.com/tools/ui-specificity-check). It checks the implementation evidence for missing states and generic UI patterns, then produces a local report without uploading the project.

Disclosure: this starter is prepared and published by UIZZE. The optional links above are UIZZE product links.

## Repository topics

`codex`, `agents-md`, `frontend`, `ui-testing`, `visual-testing`, `playwright`, `mcp`, `accessibility`

## Contributing and security

Useful bug reports and focused improvements are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md). Do not report vulnerabilities in public issues; follow [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
