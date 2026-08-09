# Design contract example: Release Desk

## Screen job

Let a reviewer verify release-specific UI evidence and make one explicit merge decision.

## User and moment

A frontend reviewer is checking a pull request before merge. They know the
product but need a fast, auditable view of changed screens and unresolved states.

## Primary action

Approve the UI after every required finish-gate check is recorded.

## Product evidence

- A review queue keeps changed screens and their status visible in one ordered list.
- A persistent contract panel keeps evidence checks next to the merge decision.

## Content hierarchy

1. Release identity and unresolved review state.
2. Changed screens and the active specimen.
3. Required checks, review note, and merge decision.

## Allowed components and tokens

- Native buttons, inputs, ordered lists, definition lists, and fieldsets.
- Semantic CSS custom properties from `app/globals.css`.
- One bordered specimen surface; no generic metric-card grid.

## Required states

- Loading: preserve release context and name the evidence being loaded.
- Empty: explain that no frontend changes were found and offer the example review.
- Error: preserve current work and provide a non-destructive retry.
- Success: confirm the release and what was recorded.
- Validation: block approval until every required check is selected.
- Interaction: announce selection, copy, retry, request-change, and approval outcomes.

## Responsive decisions

- Narrow: queue precedes contract; controls stack; metadata wraps without page overflow.
- Wide: review evidence and contract remain adjacent inside a bounded reading width.

## Accessibility contract

- Visible focus, logical DOM order, native labels, status announcements, and 42px controls.
- State and progress do not rely on color alone.

## Forbidden generic patterns

- Interchangeable cards, filler metrics, decorative gradients, fake activity,
  inert controls, hidden error states, or a second competing primary action.

## Finish criteria

- [x] The primary job and action are unmistakable.
- [x] Every required state is inspectable.
- [x] Narrow and wide layouts are defined.
- [x] Keyboard and focus paths are explicit.
- [x] Controls have explicit outcomes and failure behavior.
