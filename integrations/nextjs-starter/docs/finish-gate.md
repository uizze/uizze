# UI finish gate

Run this after implementation, not as a substitute for the design contract.

## Product specificity

- Can a reviewer name the product job without reading repository context?
- Is there one dominant action with a clear consequence?
- Does the copy use real product nouns instead of generic SaaS language?
- Could the layout be moved to an unrelated product unchanged? If yes, revise it.

## States and behavior

- Render loading, empty, error, success, validation, busy, and cancellation paths.
- Verify every visible control does something specific or remove it.
- Preserve user work on recoverable failures.
- Put confirmation friction only on consequential actions.

## Responsive and accessible behavior

- Check a narrow phone width and a wide desktop width.
- Check zoom, long labels, content overflow, and keyboard order.
- Keep visible focus, native labels, useful announcements, and usable touch targets.
- Do not encode state or priority with color alone.

## Visual-language check

- Use semantic tokens and existing components.
- Remove filler metrics, decorative gradients, glow, glass, and gratuitous motion.
- Reject interchangeable card grids, weak hierarchy, and inconsistent density.
- If a new primitive is necessary, record it in the design contract.

## Automated check

Run `npm run validate`. The GitHub workflow runs the free source-level UIZZE UI
Slop Gate on changed frontend files. Treat it as one conservative check, then
complete the rendered review above.
