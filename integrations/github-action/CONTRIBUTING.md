# Contributing

Contributions should keep the Action dependency-free, deterministic, local-only, and conservative.

1. Open an issue describing the concrete source signal and likely false positives.
2. Add focused fixtures or unit tests before changing a rule.
3. Run `npm run verify` with Node 20 or newer.
4. Confirm the rebuilt `dist/` is included and matches `src/`.
5. Keep pull requests narrow and document any privacy or permission impact.

New rules must identify an observable, actionable condition. Avoid aesthetic scoring, model calls, hidden telemetry, network requests, repository writes, and rules that primarily enforce personal taste. Do not weaken path, size, or revision validation.

By contributing, you agree that your contribution is licensed under the MIT License.
