# STOP UI SLOP Before It Ships

**If your UI looks AI-generated, you've already lost the first impression.**

A coding agent can produce a working interface quickly. The hard part is stopping its first generic guess from becoming your product. Give it enough real evidence to make deliberate decisions about hierarchy, navigation, interaction states, density, and feedback.

UIZZE helps agents inspect real web and iOS UI references before implementation, turn the useful patterns into explicit constraints, and validate the result against those constraints.

## The anti-slop workflow

### 1. Start with a real product decision

Name the screen, flow, or component being built and the decision it must support. Include the platform, user goal, and any existing design-system constraints.

### 2. Research a small set of relevant interfaces

Browse the [UIZZE catalog](https://uizze.com/mobbin-alternative) for real web and iOS references. Look for the smallest set of screens, flows, components, or elements that match the problem.

Focus on transferable patterns:

- information hierarchy and content density;
- navigation and progressive disclosure;
- interaction, loading, empty, error, and success states;
- spacing, grouping, and responsive behavior.

### 3. Turn observations into a design contract

Do not treat a reference as a visual template. Write the patterns down as explicit acceptance criteria for the target project, then apply the project’s own components, brand, content, and design system.

### 4. Implement with the project’s system

Use the contract to guide implementation. This is where a coding agent has a concrete standard to meet instead of relying on a vague prompt such as “make it look good.”

### 5. Validate before calling it done

With full access and a configured UIZZE agent token, the hosted MCP workflow provides design contracts, implementation validation, audits, and critiques. Use the available review workflow together with normal project testing before shipping.

## Use it with an agent

UIZZE has no free plan. For hosted MCP workflows, connect UIZZE at `https://uizze.com/mcp` with a paid account and valid UIZZE agent token. See the [setup documentation](https://uizze.com/docs) for supported clients and configuration.

For a tool-agnostic review before shipping, run the [AI UI Slop Preflight Checklist](AI_UI_SLOP_CHECKLIST.md).

You can also install the reusable research workflow:

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

## Keep references ethical

References are research context, not a license to copy. Do not reproduce another product’s brand, logos, proprietary copy, assets, or exact layout. Extract the underlying pattern, then implement it in the target project’s own visual language.

## Learn more

- [STOP UI SLOP before it ships](https://uizze.com/ai-ui-slop)
- [UI research for coding agents](https://uizze.com/mobbin-alternative)
- [Connect UIZZE](https://uizze.com)
