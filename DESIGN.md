# UIZZE design contract

UIZZE is a practical, editorial tool for coding agents. Its interface should feel
clear, light, direct, and a little playful. The product helps agents make better
UI decisions, so the product UI must model that discipline: visible hierarchy,
specific nouns, real states, and no decorative interface that has no job.

This is the public, agent-readable design contract for UIZZE. It describes the
current product source of truth. When implementation and this file disagree,
prefer the existing components and semantic tokens, then update this file with
the same change.

## Product voice

- Say what the tool does in plain language: stop generic UI before it ships.
- Keep labels and helper text short. Name the actual object, state, or action.
- Prefer useful verbs: `Search`, `Review`, `Check`, `Install`, `Save`, `Copy`.
- Do not use empty marketing filler, fake metrics, or vague labels such as
  `Magic`, `Insights`, or `Optimize` without a concrete explanation.
- Keep the free anti-UI-slop skill, deterministic preview, and full UIZZE MCP
  distinct. Never imply that the free local skill requires an account or token.

## Visual direction

- Flat, light, and playful. Use contrast, typography, spacing, and occasional
  deliberate button depth to create hierarchy.
- Do not add gradients, glows, glassmorphism, floating dashboard chrome, or
  decorative dots unless a specific product job requires them.
- Use the product's own visual language instead of copying a referenced site's
  branding, text, imagery, or exact layout.
- Let real screens, design references, and review results carry the visual
  interest. The surrounding UI should stay calm enough to support comparison.

## Color tokens

Use semantic tokens in components. Do not hardcode Tailwind `white`, `gray`,
`slate`, or `black` colors for ordinary UI surfaces.

| Token | Light source | Role |
| --- | --- | --- |
| `background` | `oklch(0.985 0 0)` | Page background |
| `foreground` | `oklch(0.1 0 0)` | Primary text and strong controls |
| `card` | `oklch(1 0 0)` | Raised content surface |
| `muted` | `oklch(0.96 0 0)` | Quiet surface and secondary controls |
| `muted-foreground` | `oklch(0.45 0 0)` | Supporting text |
| `border` | `oklch(0.92 0 0)` | Dividers and input borders |
| `primary` | `oklch(0.1 0 0)` | Primary action |
| `secondary` | `oklch(0.96 0 0)` | Secondary action |
| `brand-blue` | `#3476d8` | Playful CTA accent |
| `brand-yellow` | `#f8c808` | Deliberate CTA depth |
| `brand-green` | `#087868` | Positive or connected state |
| `brand-red` | `#b91c1c` | Destructive state |

Dark mode keeps the same semantic roles. The dark background is `#141414`,
the dark card is `#222222`, and the dark border is `#2e2e2e`. Reference the
semantic token, not the raw value, in UI code.

## Typography

- Use the bundled variable Figtree font through `font-sans`.
- Use Geist Mono through `font-mono` for commands, paths, code, and structured
  output.
- Use bold or black weights for short headings and action labels. Use regular or
  medium weights for explanations and metadata.
- Keep headings tight and readable. Use tracking restraint; emphasis should come
  from hierarchy and copy, not oversized type everywhere.
- Long explanatory paragraphs belong below the primary action, not inside every
  card or control.

## Shape and spacing

- Inputs and small controls: `rounded-lg`.
- Cards and web screenshots: `rounded-xl` (12px).
- Featured areas and iOS screenshots: `rounded-[24px]`.
- Pills and avatars: `rounded-full`.
- Screenshot radius is platform-aware and must use
  `getScreenshotRadius(platform)`. Do not change screenshot radius at a
  breakpoint.
- Mobile page padding: `px-4` or `px-6`.
- Desktop page padding: `px-12`.
- Standard content: `container mx-auto px-6 md:px-12`.
- Prefer generous spacing and a small number of clear regions over nested cards.

## Components and interaction

- Buttons use `btn-interactive` and have a real outcome.
- Mobile controls are at least 44 by 44 pixels.
- Primary actions may use the blue and yellow brand pairing, with deliberate
  depth rather than a gradient. Keep one primary action visually dominant.
- Secondary actions use semantic borders or muted surfaces and should not compete
  with the primary action.
- Default transitions are 150 to 200ms. Respect `prefers-reduced-motion`.
- Focus states must remain visible. Hover, pressed, disabled, loading, success,
  error, empty, permission, and responsive states must be intentional.
- Loading states should explain what is being resolved. Empty states should say
  what is missing and what the user can do next.
- Never ship an inert link, fake button, dead tab, decorative form field, or
  control whose result is not visible.

## Reference and review surfaces

UIZZE is a UI-reference product, not a template marketplace. When an agent uses
references:

1. Identify the screen's job, user decision, primary action, product nouns, and
   required states.
2. Use references to extract decisions about hierarchy, density, typography,
   color, shape, and interaction.
3. Build in the target product's own design language. Do not reproduce another
   product's branding, proprietary copy, imagery, or exact layout.
4. Review the rendered result before handoff. A source-only review is not a
   finish gate.

The free preview exposes deterministic `check_ui_slop` checks for rendered HTML
and CSS. The full UIZZE MCP adds live search across 800,000+ real web and iOS
screens, design contracts, audits, and rendered critique when those capabilities
materially improve the work.

## Finish gate

Before shipping a rendered UI, verify:

- The screen's job and primary action are obvious.
- Copy, objects, and controls belong specifically to the product.
- Every visible control has a real, reachable outcome.
- Required loading, empty, error, success, permission, and responsive states
  exist and are reachable.
- The implementation uses the existing semantic tokens and component patterns.
- The rendered result works at mobile and desktop widths.
- The interface is not interchangeable with a generic agent-generated default.

## Source links

- Product: https://uizze.com
- Public source: https://github.com/uizze/uizze
- Existing implementation rules: https://github.com/uizze/uizze/blob/main/DESIGN_SYSTEM.md
- Free anti-UI-slop skill: https://uizze.com/ai-ui-slop
- Free deterministic preview: https://uizze.com/mcp/preview
- Full UIZZE MCP: https://uizze.com/mcp
