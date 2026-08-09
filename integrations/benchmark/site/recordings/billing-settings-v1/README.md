# One recorded billing-settings comparison

This is a deliberately small, inspectable case—not a benchmark result, a
leaderboard entry, or a promise that one tool will make every UI better.

Two fresh Codex sessions received the same Ledgerly billing-settings seed and
the same task. The treatment additionally had the UIZZE skill and hosted MCP
workflow. Both sessions used the same `gpt-5.6-terra` client settings, low
reasoning effort, 20-minute cap, and 1440×1000 capture path.

| Condition | Blinded rubric score | Elapsed | Changed files |
| --- | ---: | ---: | --- |
| Baseline | 96/100 | 150.8 seconds | `app.js`, `index.html`, `styles.css` |
| UIZZE treatment | 98/100 | 140.3 seconds | `app.js`, `styles.css` |

The two-point difference is all this recording establishes. Agent output
varies; it is not a general quality, speed, or causal claim.

## Inspect the record

- [Protocol and result metadata](./run-manifest.json)
- [Fixed blinded evaluation](./outputs/blind-evaluation.json)
- [Scope reconciliation](./outputs/scope-reconciliation.json)
- [Clean seed](./seed/)
- [Baseline diff and verifier output](./outputs/baseline/)
- [Treatment diff and verifier output](./outputs/treatment/)
- [Baseline screenshots and raw flow](./assets/baseline/)
- [Treatment screenshots and raw flow](./assets/treatment/)

The original runner preflighted the authenticated MCP before either prompt,
recorded both runs, and used a disposable identity labelled `test`. That
identity and its token were deleted when the pair ended. No customer data,
credentials, paid content, or generated comparison imagery is included here.

## What to do with this

Use the [free UIZZE finish gate](https://benchmark.uizze.com/#quick-start) on
your own screen first. If the screen needs real visual references and a
contract/audit workflow inside the agent, [connect UIZZE](https://uizze.com).
