# Claude Code instructions

Treat `.uizze/design-contract.md` as the source of truth for UI work. Apply the
bundled `.claude/skills/anti-ui-slop/SKILL.md` before implementation.

- Keep one clear screen job and one primary action.
- Ground layout, density, states, and responsive behavior in real product evidence.
- Use existing semantic tokens and components before adding new primitives.
- Implement loading, empty, error, success, validation, keyboard, and mobile behavior.
- Do not ship generic card grids, filler metrics, gradients, vague copy, inert controls, or design-system drift.
- Run `npm run validate` and fix blocking findings before finishing.

UIZZE MCP is optional. Do not claim it is connected unless its tools are present.
