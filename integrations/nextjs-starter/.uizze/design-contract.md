# Design contract

Fill this in before implementation. Replace every `<placeholder>` relevant to
the task and delete sections that genuinely do not apply.

## Screen job

<One sentence describing what the user must accomplish on this screen.>

## User and moment

<Who is using this, what do they already know, and what pressure are they under?>

## Primary action

<One action that should dominate the screen.>

## Product evidence

- <Link or note for pattern 1 and the decision it supports.>
- <Link or note for pattern 2 and the decision it supports.>

Do not copy another product's brand, proprietary text, imagery, or exact layout.

## Content hierarchy

1. <First thing the user must understand.>
2. <Second thing the user must understand.>
3. <Supporting context.>

## Allowed components and tokens

- <Existing components to reuse.>
- <Semantic tokens to use.>
- <New primitive only if the existing system cannot express the job.>

## Required states

- Loading: <what remains stable and what communicates progress>
- Empty: <why it is empty and the useful next action>
- Error: <what failed, what remains safe, and how to recover>
- Success: <what completed and what happens next>
- Validation: <field and form failure behavior>
- Interaction: <busy, confirmation, cancellation, and completion behavior>

## Responsive decisions

- Narrow: <content order, navigation, actions, and overflow behavior>
- Wide: <density, max width, and supporting context>

## Accessibility contract

- <Keyboard order and visible focus expectations.>
- <Labels, announcements, landmarks, contrast, and touch targets.>

## Forbidden generic patterns

- Interchangeable card grids or dashboard filler.
- Decorative gradients, glow, glass, or motion.
- Placeholder metrics, fake activity, or vague product copy.
- Inert controls, missing states, and one-off visual values.
- <Product-specific anti-pattern.>

## Finish criteria

- [ ] The primary job and action are unmistakable.
- [ ] Every required state is inspectable.
- [ ] Narrow and wide layouts were rendered and checked.
- [ ] Keyboard and focus paths were checked.
- [ ] Controls have explicit outcomes and failure behavior.
- [ ] `npm run validate` passes.
