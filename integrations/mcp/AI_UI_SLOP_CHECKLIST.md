# STOP UI SLOP — Preflight Checklist

If the interface still looks like an agent's first draft, it is not finished. Use this checklist to force the product decisions, evidence, states, and implementation quality into the open before the UI ships.

## 1. Product intent

- [ ] The screen has one clear primary job.
- [ ] The intended user and their immediate goal are named.
- [ ] The primary action is visually and structurally obvious.
- [ ] Secondary actions do not compete with the primary action.
- [ ] The interface uses the product's existing components and visual language.

## 2. Reference evidence

- [ ] The agent inspected relevant real interfaces before implementation.
- [ ] Each reference was chosen for a specific decision, not just its overall appearance.
- [ ] The useful patterns were written as constraints for hierarchy, flow, density, states, or controls.
- [ ] References were adapted rather than copied.
- [ ] No external brand, logo, proprietary copy, asset, or exact layout was reproduced.

Browse the [UIZZE catalog](https://uizze.com/mobbin-alternative) when the agent needs real web or iOS reference context. UIZZE has no free plan.

## 3. Hierarchy and structure

- [ ] A user can identify the page, current state, and next action without reading every label.
- [ ] Sections reflect the workflow instead of filling space with interchangeable cards.
- [ ] Related information is grouped; unrelated information is separated.
- [ ] Navigation depth matches the task.
- [ ] Repeated visual treatments communicate repeated meaning.

## 4. Interaction and states

- [ ] Loading, empty, error, disabled, success, and destructive states are handled where relevant.
- [ ] Forms explain requirements and recovery paths near the affected control.
- [ ] Destructive actions require an appropriate confirmation or undo path.
- [ ] Interactive elements look interactive and have clear focus and selected states.
- [ ] Feedback appears close to the action that caused it.

## 5. Visual specificity

- [ ] Typography, spacing, color, radius, and elevation follow a coherent system.
- [ ] Decorative effects support the product direction instead of substituting for one.
- [ ] Cards, badges, icons, and metrics exist because the workflow needs them.
- [ ] Empty space, density, and emphasis match the user's task.
- [ ] Placeholder copy and generic dashboard content have been replaced with real product content.

## 6. Responsive and accessible behavior

- [ ] The layout has been checked at the product's supported viewport sizes.
- [ ] Content order remains understandable when columns collapse.
- [ ] Keyboard focus, labels, contrast, and target sizes have been checked.
- [ ] Long text, missing data, and realistic content do not break the layout.
- [ ] Motion respects reduced-motion preferences where relevant.

## 7. Final evidence

- [ ] The implementation was compared with the original product intent and constraints.
- [ ] The final interface was reviewed as a rendered screen, not only as source code.
- [ ] Any deviation from the design system is deliberate and documented.
- [ ] Blocking usability, state, responsive, and accessibility issues are resolved.
- [ ] The reviewer can explain why this interface fits this product instead of any generic SaaS.

If a relevant box is still unchecked, treat it as unfinished work rather than a polish item.

## Copy-paste agent review prompt

```text
Review this implemented interface for UI slop.

Start by restating the screen's user, primary job, primary action, and product constraints. Then inspect the rendered UI and implementation against the AI UI Slop Preflight Checklist. Separate blocking issues from optional refinements. For every issue, cite the visible or implementation evidence, explain why it conflicts with the product intent or design system, and propose the smallest specific correction. Do not recommend copying another product's brand, assets, copy, or exact layout. Do not pass the interface while a relevant checklist item remains unresolved.
```

## Install as an agent skill

```bash
npx skills add https://uizze.com --skill ui-slop-score
```

The standalone post-implementation review skill works without a UIZZE connection or token.

For a reference-first workflow, read [STOP UI SLOP Before It Ships](ANTI_SLOP_UI_WORKFLOW.md). With full access and a configured agent token, the [UIZZE Agent Connector](https://uizze.com) provides design contracts, implementation validation, audits, and critiques.
