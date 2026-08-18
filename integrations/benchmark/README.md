> **Stop AI coding agents from shipping generic UI.**

# Stop Making UI Slop

Build product-specific UI with the free, reproducible UI finish gate. Optional full UIZZE adds 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

## UIZZE UI Slop Benchmark

**If the interface looks generated, the product already feels replaceable.**

This is a small, reproducible benchmark for the part most UI demos skip: the
last 20% that makes an interface specific, legible, responsive, and ready to
ship.

It contains three bounded product tasks:

| Task | Product moment | What it tests |
| --- | --- | --- |
| Onboarding | Set up a new team workspace | hierarchy, progressive disclosure, completion states |
| Finance workflow | Review and approve an invoice | dense data, risk communication, decision clarity |
| Developer dashboard | Diagnose a failing deployment | observability, prioritization, responsive information design |

There are no published winners or made-up scores here. Every comparison must
use the exact same prompt and starter files, record the benchmark version, and
include evidence for every awarded point.

## Run it for free

You need Node.js 20+ and any coding workflow you want to evaluate. You do not
need a UIZZE account.

Run it locally from the canonical UIZZE repository:

```bash
git clone https://github.com/uizze/uizze.git
cd uizze/integrations/benchmark
npm test
npm run verify
```

For each candidate:

1. Start from a fresh copy of one task's `starter/` directory.
2. Give the candidate only that task's `prompt.md` and starter files.
3. Do not add follow-up hints unless every candidate receives the same hint.
4. Evaluate the result against `rubric.json` at desktop and mobile widths.
5. Copy `submission-template.json`, add evidence and binary scores, then run:

```bash
npm run score -- path/to/submission.json
```

The verifier rejects unknown criteria, missing evidence, changed task files,
non-binary scores, and arithmetic mismatches. It prints the task fingerprint
that must be recorded with the result.

## Publish a verifiable result

The benchmark deliberately has no self-reported winners. When you have run one
task under the fixed protocol, open a [benchmark-result intake](https://github.com/uizze/uizze/issues/new) with the completed submission JSON, exact task fingerprint, public implementation evidence, and desktop/mobile checks. A maintainer must verify the evidence before publishing a result; an intake is not a ranking or endorsement.

## What the score means

Each task has ten observable criteria worth ten points each. An evaluator awards
either `0` or `1` for a criterion and supplies a concrete evidence note. The
verifier calculates the total; it does not pretend to judge taste.

- `90–100`: strong finish-gate pass
- `70–80`: credible direction with visible gaps
- `50–60`: functional but generic or under-resolved
- `0–40`: not ready to ship

These bands describe this rubric, not product outcomes. A score is only
comparable when benchmark version, task fingerprint, viewport checks, and
evaluation rules match.

## Reproducibility contract

- Use the checked-in prompt verbatim.
- Use a clean copy of the checked-in starter state.
- Keep the implementation window and permitted tools identical.
- Disable network access unless every candidate gets the same network access.
- Record candidate name/version, date, elapsed time, evaluator, and commit SHA.
- Do not count a criterion without an evidence note that another person can inspect.
- Treat prompt, starter, or rubric changes as a new benchmark version.

See [METHODOLOGY.md](METHODOLOGY.md) for the full protocol.

## Why UIZZE made this

The free benchmark is useful on its own. If you want to make the workflow more
powerful, [UIZZE](https://uizze.com) gives coding agents access to a large
catalogue of real web and iOS product patterns through its MCP workflow.

## License

MIT
