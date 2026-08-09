# Agent instructions

This repository ships with a UI finish gate. Before changing frontend code:

1. Read `.uizze/design-contract.md` and fill every placeholder relevant to the task.
2. Read `.agents/skills/anti-ui-slop/SKILL.md` and follow its free workflow.
3. Inspect the existing tokens, interaction patterns, primary user job, and primary action.
4. Preserve or implement loading, empty, error, success, validation, and narrow-screen states.
5. Use semantic tokens from `app/globals.css`; do not introduce one-off visual values without updating the contract.
6. Reject generic card grids, filler metrics, gradients, vague copy, inert controls, missing focus states, and decorative motion.
7. Run `npm run validate` before declaring the work finished.

The free workflow must remain usable without a UIZZE account. The authenticated
MCP in `docs/mcp.md` is optional and must never be presented as connected unless
its tools are actually available.
