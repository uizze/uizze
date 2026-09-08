# Build better UI with your coding agent

Use these prompts on a real file or route in your project. Replace the example page with yours and give the agent the product context it needs.

## Install once

```bash
npx skills add https://uizze.com --skill ui-design
```

For a focused review of generic UI, install `anti-ui-slop` instead. Both work without an account or MCP connection. GitHub installs also work: `npx skills add uizze/uizze --skill ui-design`.

## Billing settings that people can use

```text
Use ui-design on our billing settings route. Make the current plan, renewal
date, payment method, and invoice history easy to scan. Separate routine
edits from canceling the subscription. Use our existing components and
tokens. Handle loading, no invoices, payment failure, and read-only access.
Inspect desktop and mobile output and fix visible breakage.
```

Check that a user can identify their plan and find the right action without reading the whole page. Keep destructive actions distinct and explain any disabled controls.

## A data table beyond the happy path

```text
Use ui-design to improve our orders table. Preserve the data and behavior.
Prioritize order status, customer, amount, and the action users take next.
Keep filters and pagination usable on small screens. Implement loading,
no orders, no filter matches, and failed loading with retry. Reuse the
project's table, input, button, and status components.
```

Treat “no records yet” and “no matches for this filter” as different states. Confirm that users can recover from both.

## Permissions without guesswork

```text
Use ui-design on our team permissions screen. Make assigned and inherited
roles distinguishable. Explain why an action is restricted and what the
user can do next. Preserve our permission logic. Cover pending invites,
expired invites, read-only users, save failures, and narrow layouts.
```

If the authenticated UIZZE MCP is connected, add a specific reference request: “Find up to three relevant full-screen references for role inheritance and restricted actions. Explain the decisions worth adapting to our product.”

## A focused review of a generic first draft

```text
Use anti-ui-slop on this screen. Read the product brief and existing design
system. Identify the three changes that would make this interface more
specific to our users. Implement them, finish required states, and inspect
the rendered result. Keep behavior and brand conventions intact.
```

## Native iOS refinement

```text
Use ui-design to refine this iOS settings screen. Follow the app's existing
navigation, typography, controls, and spacing. Make account and notification
preferences easy to find. Check long labels, Dynamic Type, disabled states,
and the device sizes supported by the project.
```

## Choose your agent

| Agent | How to start |
| --- | --- |
| Codex | Install the skill, open the target project, and use one of the prompts above. |
| Claude Code | Install the skill, or add the plugin with `/plugin marketplace add uizze/uizze` followed by `/plugin install uizze@uizze`. Ask for `uizze:anti-ui-slop` when using the plugin. |
| Cursor | Install the skill and ask the agent to use `ui-design` or `anti-ui-slop` on a named file or route. |
| GitHub Copilot | Follow the [UIZZE plugin instructions in Awesome Copilot](https://github.com/github/awesome-copilot/tree/main/plugins/uizze), then ask for `anti-ui-slop`. |

## Add focused reference search

Connect the optional [paid MCP](../integrations/mcp) when a real visual question would benefit from examples in UIZZE's 800,000+ web and iOS screens. The server provides `find_ui_references` and `find_ui_materials`.

Name the problem: “invoice table on a narrow viewport” gives the agent a clearer research task than “find inspiration.” Adapt useful decisions to your product's components and content. If retrieval returns nothing, continue from the project.

[Explore UIZZE →](https://uizze.com/?utm_source=github&utm_medium=repository&utm_campaign=discovery&utm_content=workflow_examples)

For a local source check on pull requests, [inspect the Action example](pull-request-check.md).
