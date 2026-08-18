> **Stop AI coding agents from shipping generic UI.**

# Stop Making UI Slop

Build product-specific UI with the free anti-ui-slop Skill and UI Slop Gate. Optional full UIZZE adds 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

## UIZZE Agent UI Starter

**STOP UI SLOP before it hits `main`.**

A small, real Next.js starter for teams building interfaces with Codex, Claude
Code, Cursor, or another coding agent. It gives every agent the same product
contract, the same required UI states, and the same finish gate.

No UIZZE account is required. The bundled skill, design-contract workflow, and
GitHub Action are free to use.

## Start in five minutes

Clone the canonical repository and copy the starter:

```bash
git clone https://github.com/uizze/uizze.git
cp -R uizze/integrations/nextjs-starter my-product
cd my-product
npm install
npm run dev
```

Then:

1. Replace the example in `app/` with your product.
2. Fill in `.uizze/design-contract.md` before asking an agent to build.
3. Keep `AGENTS.md`, `CLAUDE.md`, and `.cursor/rules/` aligned with the contract.
4. Run `npm run validate` before opening a pull request.
5. Let `.github/workflows/uizze-ui-review.yml` inspect changed frontend source.

## What is already wired

- a functional release-review screen instead of an empty dashboard shell;
- visible loading, empty, error, success, validation, and completion states;
- responsive behavior at desktop and mobile widths;
- a bundled free anti-ui-slop skill for Codex and Claude Code;
- workspace rules for Codex, Claude Code, Cursor, and GitHub Copilot;
- an explicit design-contract template and filled example;
- `uizze/uizze@v1` running locally inside GitHub Actions;
- deterministic checks that fail if the contract, skill, evidence, or workflow is removed.

The Action is a conservative source check. It does not upload source or claim to
replace visual review, accessibility testing, security review, or usability
testing.

## Useful commands

```bash
npm run dev
npm test
npm run type-check
npm run lint
npm run build
npm run validate
```

## The finish-gate loop

1. Define one screen job and one primary action.
2. Ground the design in real product patterns, not a generic component collage.
3. Write the hierarchy, states, responsive decisions, and forbidden patterns in
   `.uizze/design-contract.md`.
4. Build with semantic tokens and working interactions.
5. Test loading, empty, error, success, narrow, wide, keyboard, and failure paths.
6. Reject interchangeable card grids, decorative gradients, filler metrics,
   generic copy, inert controls, and missing states.

See [docs/finish-gate.md](docs/finish-gate.md) for the review checklist.

## Optional UIZZE MCP

The starter works without MCP. If automated catalogue search, design contracts,
and screenshot critique would materially help, see [docs/mcp.md](docs/mcp.md).
Keep the token in your environment; the repository contains placeholders only.

The full UIZZE workflow is available at [uizze.com](https://uizze.com).

## License

MIT
