# STOP UI SLOP — Prompt Pack

Copy-ready prompts that force coding agents past the generic first draft and into product-specific, evidence-backed UI.

Use the prompts in sequence when possible. They are deliberately evidence-first: do not copy another product's branded interface, assets, or proprietary copy.

## 1. Start with a reference question

Use this before implementation. With a configured UIZZE MCP connection, the agent can search real web and iOS references. Without one, treat it as a research brief and attach only references you are allowed to use.

```text
I am building [product / screen / user flow] for [audience] on [web / iOS].

Before proposing an interface, create a short UI research brief:
1. State the job the user is trying to complete and the constraints that matter.
2. Find 5–10 relevant real UI references using UIZZE, or explain what evidence is missing.
3. Extract reusable, non-branded patterns: hierarchy, information density, states,
   interaction cues, responsive behavior, and accessibility considerations.
4. Separate observed evidence from assumptions.
5. Do not copy logos, proprietary copy, assets, or exact layouts.

End with a compact recommendation for the design direction and the unanswered questions
that should be resolved before implementation.
```

## 2. Turn references into a design contract

Use this before writing UI code. It asks for a testable decision record, not a generic visual description.

```text
Create a design contract for [screen / flow] using the research brief above.

The contract must define:
- primary user goal and success condition;
- information hierarchy and required content;
- components, variants, states, empty/loading/error behavior, and edge cases;
- visual direction grounded in the evidence, without copying any reference;
- responsive behavior for [target breakpoints / devices];
- accessibility requirements that can be checked in the rendered result;
- explicit non-goals and assumptions.

For every decision, mark it as observed evidence, product requirement, or assumption.
Do not implement or edit the UI yet.
```

## 3. Implement against the contract

Use this when the design decisions are clear enough to build.

```text
Implement [screen / flow] from the approved design contract.

Keep the existing project architecture and design system intact. Build the required states,
including loading, empty, error, keyboard/focus, and narrow-screen behavior where relevant.

Before declaring it complete, provide:
1. the rendered routes or screenshots reviewed;
2. the contract requirements that were verified;
3. anything that remains unverified because evidence or runtime access was missing.

Do not claim visual parity with a reference product. Do not copy its branded assets, copy,
or exact layout.
```

## 4. Run the anti-slop preflight review

Use this after implementation. It works with the `ui-slop-review` skill or as a standalone review prompt.

```text
Review the rendered evidence for [screen / flow] against its design contract.

Look for blocking, important, and optional issues in:
- product-specific hierarchy and decisions versus generic AI defaults;
- missing, ambiguous, or inconsistent states;
- visual specificity, spacing, typography, and component coherence;
- responsive behavior and accessible interaction states;
- unsupported claims about what was tested or implemented.

For every finding, cite the rendered evidence or name it unverified. Do not make edits.
Return READY only when the evidence supports it; otherwise return NOT READY with the
smallest next checks or fixes needed.
```

## 5. Request a focused critique

Use this when you want feedback on an already rendered experience, without asking the agent to redesign it from scratch.

```text
Critique this rendered [screen / flow] for [target user and task].

Prioritize the three highest-impact issues that make the experience feel generic, unclear,
or untrustworthy. For each issue:
1. describe the observed evidence;
2. explain the likely user impact;
3. propose one product-specific direction, not a copied reference;
4. identify whether the recommendation is evidence-backed or an assumption.

Also list any missing states or responsive/accessibility evidence that prevent a complete
review. Do not edit the interface.
```

## Optional UIZZE setup

The free skill provides the anti-slop workflow. The full UIZZE MCP adds live catalogue search, Agent Connector workflows, design contracts, validation, audits, and critiques.

See the [connection instructions](README.md#connect-the-mcp-server), the [anti-slop workflow](ANTI_SLOP_UI_WORKFLOW.md), and the [STOP UI SLOP Preflight Checklist](AI_UI_SLOP_CHECKLIST.md).
