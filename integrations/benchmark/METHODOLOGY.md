# Methodology

## Question

Given an identical product brief and identical starter state, how completely
does a coding workflow turn a functional shell into a product-specific,
responsive interface?

This benchmark does not measure model intelligence, conversion lift, or user
preference. It measures ten observable finish-gate checks for each of three UI
tasks.

## Controlled run

For a valid comparison, hold these variables constant:

- benchmark tag and commit SHA;
- task fingerprint printed by `npm run verify`;
- prompt text and starter directory;
- time limit;
- available tools, network access, and prior conversation;
- browser and desktop/mobile viewport sizes;
- evaluator rubric and scoring rule.

Recommended viewports are 1440×900 and 390×844. If a different viewport is
used, record it for every candidate.

Run each candidate in a new directory and a new conversation. Do not disclose
another candidate's output. Save the implementation commit SHA before judging.

## Scoring

Every rubric item is binary:

- `1`: the observable requirement is present at both required viewports where applicable;
- `0`: it is absent, broken, ambiguous, or not inspectable.

Each item requires a short evidence note. The verifier multiplies the binary
value by the checked-in weight and calculates the total. It will reject a
submitted total that does not match its calculation.

A human evaluator still decides whether evidence satisfies a criterion. For
reliability, use two evaluators who work independently, then publish both
submissions or resolve disagreements with an explicit note.

## Artifacts

A publishable result should include:

- completed submission JSON;
- implementation source or commit SHA;
- desktop and mobile screenshots captured from the implementation;
- browser/version and viewport sizes;
- any deviations from the controlled run.

This repository intentionally ships no claimed tool results. It also ships no
generated screenshots. Result authors are responsible for the accuracy and
rights of their own artifacts.

## Limitations

- Binary criteria improve consistency but compress nuance.
- The three tasks do not represent every product category.
- Evaluators can still disagree on product specificity and hierarchy.
- Static review does not replace usability testing with real users.
- Tool behavior changes over time, so candidate versions and dates matter.

## Versioning

Fixes that change spelling or tooling without changing task content may use a
patch release. Any prompt, starter, rubric, or scoring change requires at least
a minor release and new fingerprints. Results from different fingerprints must
not be combined into one ranking.
