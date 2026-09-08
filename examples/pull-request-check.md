# Inspect a real UI Slop Gate result

This example runs the Action's source checker against its checked-in test fixture. You can reproduce it locally with Node.js 20 or newer. It demonstrates the source checks, not the visual quality of a finished interface.

[**Inspect the live GitHub run →**](https://github.com/uizze/uizze/actions/workflows/ui-slop-gate-example.yml)
The workflow runs both snippets with the published v1.2.15 Action and verifies
their expected finding counts. Open a run to see the annotations and job summaries.

## Input

```tsx
export function GenericDashboard() {
  const metrics = useQuery(['metrics']);

  return (
    <main className="dashboard grid grid-cols-3 bg-white">
      <a href="#">Overview</a>
      {metrics.data.map((metric) => (
        <article className="metric-card">Total Revenue: {metric.value}</article>
      ))}
    </main>
  );
}
```

## Actual output

## UIZZE UI Slop Gate

Scanned **1** changed frontend file: **1** error, **3** warnings.

| Severity | Rule | Location | Finding |
| --- | --- | --- | --- |
| error | inert-control | integrations/github-action/test/fixtures/problematic.tsx:6 | Placeholder href="#" leaves this control without a destination. |
| warning | design-token-drift | integrations/github-action/test/fixtures/problematic.tsx:5 | Hardcoded color "bg-white" may bypass the product design system; prefer an existing semantic token. |
| warning | missing-ui-states | integrations/github-action/test/fixtures/problematic.tsx:2 | Data-driven UI has no visible loading, empty, error state marker. Add the state or record reviewed evidence in the manifest. |
| warning | generic-dashboard-cues | integrations/github-action/test/fixtures/problematic.tsx:1 | This screen combines several generic dashboard cues. Verify its hierarchy and metrics are specific to the product task. |

The placeholder link is an error. The state, color, and dashboard findings are warnings for a reviewer to assess in the project's context. State markers can live outside this file; use the reviewed-state manifest when appropriate.

## Compare the revised source

The [revised fixture](../integrations/github-action/test/fixtures/finished.tsx)
uses a workspace-usage task, a destination path, an explicit empty-data branch,
loading and error messages, and a semantic surface class. Running the same
checker on it produces **0 findings**.

| Before | Revised source |
| --- | --- |
| `href="#"` | `/settings/usage` destination |
| Query data rendered immediately | Loading, error, and `length === 0` branches |
| `bg-white` | `bg-surface` semantic class |
| Generic dashboard metrics in cards | A workspace-usage list with labels from its data |

Both files are illustrative source fixtures. The query hook, destination route,
and semantic class must be supplied by the host product; these snippets are not
a standalone application. Zero findings means these configured source rules
found nothing. It does not verify the destination exists, the styles render
correctly, or the screen is accessible.

## Reproduce it

Run from the repository root:

```bash
INPUT_FILES=integrations/github-action/test/fixtures/problematic.tsx \
INPUT_FAIL_ON=never \
INPUT_SHOW_UIZZE_LINK=false \
node integrations/github-action/dist/index.js
```

The command prints GitHub workflow annotations. `fail-on: never` lets you inspect the findings without failing the process. In GitHub Actions, the runner also receives a Markdown job summary.

Then run the revised snippet with warnings treated as failures:

```bash
INPUT_FILES=integrations/github-action/test/fixtures/finished.tsx \
INPUT_FAIL_ON=warning \
INPUT_SHOW_UIZZE_LINK=false \
node integrations/github-action/dist/index.js
```

The process exits successfully with zero findings. The
[example workflow](../.github/workflows/ui-slop-gate-example.yml) checks both
the number of scanned files and the finding count for each snippet.

## Work through the findings

- Give the link a real destination or replace it with the correct control.
- Implement loading, empty, and error behavior, or record states already reviewed elsewhere in the product.
- Use an existing semantic color token when the hardcoded value bypasses the design system.
- Check that the metrics and hierarchy serve the actual product task. A dashboard is not a defect by itself.

[Copy the complete Action workflow](../integrations/github-action#usage) or [try a free UI workflow in your agent](agent-workflows.md).
