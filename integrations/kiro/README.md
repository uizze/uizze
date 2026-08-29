> **Stop AI coding agents from shipping generic UI.**

# UIZZE UI Design for Kiro

Build product-specific UI from the local product system, with focused UIZZE
references only when they answer a concrete question.

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

This is a Kiro Power for rendered web and iOS UI work. The workflow itself is
free and works without an MCP connection.

## Install

In Kiro, open **Powers** → **Add Custom Power** → **Import power from GitHub**, then enter:

```text
https://github.com/uizze/uizze
```

Kiro loads `POWER.md` on relevant UI work. To add focused references and hosted
materials, connect the authenticated MCP separately using the normal
[UIZZE setup instructions](https://uizze.com/docs).

## What it does

- Starts with the product's actual UI system before choosing a layout.
- Uses `find_ui_references` or `find_ui_materials` only for a concrete need.
- Treats an empty result as a no-op instead of retrying or inventing advice.
- Inspects the rendered result once when the environment supports it.

The power never copies another product's visual identity, text, imagery, or exact layout. It does not make accessibility, security, correctness, or conversion guarantees.

## Support

- Product: https://uizze.com
- Privacy: https://uizze.com/privacy
- Terms: https://uizze.com/terms
- Support: business@uizze.com
