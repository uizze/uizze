# Changelog

## Unreleased — 2026-10-03

- Updated Next.js and its lint configuration to 16.3.6, addressing
  GHSA-vcvr-r3jv-pc5j, while retaining the intended React 19.3 and type updates.
- Retained TypeScript 6.0.3 and ESLint 9.39.5: the current TypeScript parser
  rejects TypeScript 7, and the React lint plugin does not support ESLint 10.
  Dependabot excludes those incompatible majors until the lint stack supports them.
- Verified the full starter validation and production browser interactions:
  review-note validation, error/retry, approval/reopen and narrow-screen empty state.
- Patched sharp to 0.35.4 and brace-expansion to 1.1.21/5.0.12 through scoped
  overrides for GHSA-rgj7-g3m4-5g8c and GHSA-q2hr-2g5m-vwhr.
- The remaining braces advisory GHSA-vfj7-8cjw-p6xm has no published patched
  release; it affects the development-only Next lint dependency chain, not a
  demonstrated starter runtime exploit. No incompatible Next downgrade or
  advisory suppression was applied.

## 1.0.2 — 2026-09-08

- Fixed fresh-install validation by pinning TypeScript 6.0.3 and ESLint 9.39.5,
  which are supported by the bundled lint plugins.
- Added CI for the complete starter validation, including the production build.
- Documented Node.js 24 and installation from the committed lockfile.

## 1.0.1 — 2026-07-22

- Pinned the UIZZE UI Slop Gate workflow to the immutable v1.0.2 release commit.

## 1.0.0 — 2026-07-22

- Added a functional Next.js release-review example with loading, empty, error,
  success, validation, and completion states.
- Added shared Codex, Claude Code, Cursor, and GitHub Copilot finish-gate rules.
- Bundled the free anti-ui-slop skill and an explicit design contract.
- Added the UIZZE UI Slop Gate workflow and deterministic template validation.
