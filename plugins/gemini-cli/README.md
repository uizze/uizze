# Uizze

**UI design that stands out**

![Uizze](assets/uizze-logo.png)

Uizze gives coding agents a free anti-ui-slop Skill and optional full MCP access to live UI references and license-clear materials. Use the skill to inspect the product and design system, write a design contract, cover required states, and run a bounded finish gate. The MCP answers one concrete unresolved UI question with strong full-screen references and finds license-clear materials for a concrete role.

## Get started

```bash
gemini extensions install https://github.com/uizze/gemini-extension
```

Restart Gemini CLI, then run `/mcp auth uizze` to connect your Uizze account. The extension bundles only the anti-ui-slop skill and the remote MCP configuration.

## Try it

> Help me ground a new interface in Uizze real screens.

> Find strong full-screen UI references for this unresolved interface question.

> Run the bounded UI finish gate on my rendered interface.

## Skill and MCP

The free skill includes its playbooks and licensing notices. It works without an account or MCP connection. The optional paid MCP uses the same Uizze account and service as the ChatGPT plugin. Complete the host’s native OAuth connection when prompted.

The MCP exposes `find_ui_references` and `find_ui_materials`. The skill’s finish gate uses the agent’s local inspection and rendering capabilities. No hosted review tool is included.

[Uizze](https://uizze.com/ai-ui-slop) · [Setup](https://uizze.com/docs) · [Support](https://uizze.com/contact) · [Privacy](https://uizze.com/privacy) · [Terms](https://uizze.com/terms)

## License

Maintained from [uizze/uizze](https://github.com/uizze/uizze/tree/main/plugins/gemini-cli).

Uizze’s entry point is MIT licensed. Included Apache-2.0 playbooks retain their LICENSE, NOTICE, and modification notices in the skill directory.
