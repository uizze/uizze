# UI contract

Fill this before implementation. Do not revise it merely because the output missed a requirement.

## User and decision

- User:
- Decision or job they must complete:
- Primary action:
- Recovery action:

## Required objects

- Current plan:
- Payment method:
- Invoice identity and attributes:

## Required states

- Default:
- Loading:
- Empty invoices:
- Failed payment:
- Payment-method success:

## Existing system evidence

- Shell/navigation to preserve:
- Semantic tokens to preserve:
- Existing interaction conventions:

## Forbidden generic patterns

- vague actions such as “Learn more” or “Action”;
- invented analytics, testimonials, or customer claims;
- decorative card repetition that obscures the billing scan path;
- gradients or a replacement theme;
- success/error decoration without a real state and recovery path.

## Done when

- all five states are independently reachable;
- every required billing job has a concrete control;
- verification passes without editing the verifier;
- rendered desktop and narrow views are inspected;
- keyboard focus, labels, status semantics, errors, and limitations are recorded.
