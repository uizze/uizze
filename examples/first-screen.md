# Try UIZZE on one screen

Take a billing settings page from your project and give your coding agent one
specific task. You'll check the current plan, payment details, invoices, and
the states users encounter when something goes wrong.

[Watch the 30-second mobile comparison](https://github.com/uizze/uizze#watch-uizze-before-and-after)
to see UIZZE in use. This billing exercise is a separate walkthrough you can
run in your own project.

## Choose a starting point

Open your project in Claude Code, Cursor, or GitHub Copilot and identify the
billing route or component. Keep the existing design system and billing logic.

If you need a practice project, copy our small HTML/CSS/JavaScript seed:

```bash
git clone --depth 1 https://github.com/uizze/uizze.git uizze-examples
cp -R uizze-examples/integrations/benchmark/site/recordings/billing-settings-v1/seed uizze-first-screen
cd uizze-first-screen
```

The seed provides an unfinished billing page for a fictional product and has no dependencies to install.
Its interface lives in `index.html`, `styles.css`, and `app.js`. Use Node.js
to run its source check with `npm run verify`. The initial seed fails this check
because you haven't implemented the page yet. The check looks for required
terms and CSS variables; you'll inspect behavior in the browser too.

## Install in your agent

### Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add uizze/uizze
/plugin install uizze@uizze
```

Follow the install summary if Claude asks you to reload. Start the task with
`/uizze:anti-ui-slop`, then paste the brief below.

### Cursor

Run this command from your project terminal and select Cursor in the installer:

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

Open Agent in that project and ask it to use `anti-ui-slop` with the brief below.

### GitHub Copilot CLI

Install the [UIZZE plugin in Awesome Copilot](https://github.com/github/awesome-copilot/tree/main/plugins/uizze):

```bash
copilot plugin install uizze@awesome-copilot
```

Open Copilot in your project and ask it to use `anti-ui-slop` with the brief below.

## Give the agent this brief

Name your actual route or component before pasting this:

```text
Use anti-ui-slop to improve this billing settings page.

Read the existing components and design tokens first. Make the current plan,
renewal date, payment method, and invoice history easy to scan. Separate
routine edits from canceling the subscription. Preserve billing behavior.

Cover loading, no invoices, payment failure with retry, and a successful
update. Make the primary action clear at both desktop and mobile widths.
Use the product's own content and visual language.

Inspect the rendered result, fix clipping and inert controls, and tell me
which states you verified and anything you couldn't check.
```

For the practice seed, add: “Implement the unfinished billing page using fictional
example data. Only change `index.html`, `styles.css`, and `app.js`. Implement
`?state=default|loading|empty|failed|success` using the existing state parameter
and run `npm run verify` without changing the verifier.”

## Bring real product references into the task

The free skill works on its own. Connect the optional **paid UIZZE MCP** when
you want the agent to research a specific design question across **800,000+
real web and iOS screens**.

[Connect UIZZE in Claude Code or Cursor](../integrations/mcp#claude-code),
then add this to your brief:

```text
Before implementing, use UIZZE to find up to three relevant web references
for billing settings with invoice history. Explain the hierarchy, density,
and responsive table decisions worth adapting. Implement those decisions
with our components and brand. If no relevant references return, continue
from the project.
```

## Check the result

Run your project's normal development server. For the practice seed, run this
in a separate terminal from `uizze-first-screen`:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/index.html?state=default` and try each state value.
Check desktop and narrow mobile widths:

- Can you find the current plan, payment method, and next action at a glance?
- Can you recover from a failed operation and distinguish it from no invoices?
- Do the controls work, and can you reach them with a keyboard?
- Do long invoice labels and amounts fit without hiding useful information?

Keep a screenshot before and after, the prompt, and any remaining problems.
If you share the result, identify the agent and model you used and whether
you connected MCP.

[**Build your next screen with UIZZE →**](https://uizze.com/?utm_source=github&utm_medium=repository&utm_campaign=discovery&utm_content=first_screen)

[More tasks: tables, permissions, and native iOS](agent-workflows.md)
