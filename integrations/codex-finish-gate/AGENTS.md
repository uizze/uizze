# UI implementation agreement

## Goal

Finish the requested product workflow, not just a polished default-state screenshot.

## Before coding

- Read `TASK.md` and the existing shell and semantic variables.
- Fill `UI_CONTRACT.md` with the workflow, required states, primary decision, evidence, and forbidden generic patterns before implementation.
- Preserve the supplied shell and dependency-free setup.

## Implementation rules

- Implement `default`, `loading`, `empty`, `failed`, and `success` query states.
- Put `data-ui-state="<state>"` on each state's rendered root. The verifier executes the app once per query state and requires five distinct results.
- Mark the billing workflow with `data-billing-capability="current-plan|payment-method|invoices|receipt-download"`, invoice rows with stable `data-invoice-id` values, the empty state with `data-empty-invoices`, and retry with `data-billing-action="retry-payment"`.
- Give loading and success feedback `role="status"`, and use `<time datetime="...">` for invoice dates.
- Use the supplied semantic CSS variables. Do not replace the theme or add gradients.
- Keep controls and copy specific to billing objects and outcomes.
- Use semantic headings, lists or tables, labels, keyboard focus, and live/status semantics where appropriate.
- Do not edit `verify.mjs`, `verify.test.mjs`, or `package.json`; add dependencies; call external services; or change files outside `index.html`, `styles.css`, and `app.js`.

## Finish gate

- Run `npm run verify`.
- Run `npm test` to confirm the verifier still fails closed and accepts a complete fixture.
- Render and interact with all five states.
- Inspect screenshots at 1440×1000 and a viewport at or below 760px.
- Check for clipping, overlap, console errors, vague actions, decorative card repetition, and missing recovery paths.
- Report commands, inspected states, screenshot paths, and remaining limitations. Do not claim visual success without inspecting rendered output.
- Record that evidence in `RUN_LOG.md`. Do not weaken the contract or verifier to make a run pass.
