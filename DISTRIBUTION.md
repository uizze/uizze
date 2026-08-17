# UIZZE distribution copy

Use this page as the source for directory submissions, marketplace profiles, launch posts, and partner pages.

## Positioning

UIZZE is the anti-UI-slop system for coding agents. The free `anti-ui-slop` skill and UI Slop Gate help Codex, Claude Code, Cursor, Copilot, and other coding agents stop generic UI before it ships. Full UIZZE adds live search across 800,000+ real web and iOS screens, product-specific design contracts, required states, implementation validation, audits, and rendered critique.

## Short description

STOP UI SLOP with a free anti-ui-slop skill and UI Slop Gate. Full UIZZE adds 800,000+ real web and iOS screens, live search, design contracts, validation, audits, and rendered critique for coding agents.

## Medium description

UIZZE gives coding agents a free anti-ui-slop workflow plus an optional hosted MCP. Ground UI work in 800,000+ real web and iOS screens, product-specific design contracts, required states, implementation validation, audits, and rendered critique before shipping.

## Canonical links

- Product: https://uizze.com
- Public repository: https://github.com/uizze/uizze
- Free skill: https://uizze.com/ai-ui-slop
- Free preview MCP: https://uizze.com/mcp/preview
- Full MCP: https://uizze.com/mcp
- UI Slop Score: https://uizze.com/tools/ui-slop-score
- Public design contract: https://github.com/uizze/uizze/blob/main/DESIGN.md
- GitHub Action: https://github.com/uizze/uizze/tree/main/integrations/github-action
- GitHub Action major tag: https://github.com/uizze/uizze/tree/v1/integrations/github-action (currently aligned with v1.2.11)
- Official MCP Registry: https://github.com/mcp/uizze/uizze

## Install language

```bash
npx skills add https://uizze.com --skill anti-ui-slop
```

The free skill runs locally without an account. Connect the free preview MCP for deterministic `check_ui_slop` checks. Use the full UIZZE MCP when live reference search, design contracts, audits, or rendered critique will materially improve the work.

## Canonical repository rule

Use `https://github.com/uizze/uizze` for every new listing. Treat `uizze/uizze-mcp`, `aislon/uizze-mcp`, and `samuelbushi/uizze-mcp` as retired distribution URLs. The personal archive at `samuelbushi/uizze-mcp` is now archived with a repository-level redirect and deprecation README. Update or remove those entries instead of creating another duplicate.

## Claim rule

Use “800,000+ real web and iOS screens” in public copy. Keep the free anti-ui-slop skill and UI Slop Gate distinct from the optional full UIZZE MCP.

## Directory queue

Update existing entries first:

- Tons of Skills: https://github.com/uizze/uizze/issues/38 (catalogue validator intake; the public anti-ui-slop Skill now has the required Overview, Prerequisites, Output, Error Handling, and Resources sections, and the live domain-backed copy is verified byte-for-byte against this repository)
- iFlytek SkillHub: https://github.com/iflytek/skillhub/issues/719 (4,872-star self-hosted Agent Skill registry; starter-collection proposal uses the canonical MIT Skill source and preserves UIZZE's public version/license metadata)
- Claude Plugins registry: https://github.com/Kamalnrf/claude-plugins/issues/124 (532-star registry with 63,000+ indexed Agent Skills; direct indexing request for the canonical anti-ui-slop Skill after the public index returned no UIZZE match)
- HeyClaude / awesome-claude: https://github.com/JSONbored/awesome-claude/pull/5792 (291-star GitHub-native Claude workflow registry; focused source-backed Skill PR with current v1.2.11 metadata, free install path, safety/privacy notes, and the 800,000+ product distinction)
- Glama connector: https://glama.ai/mcp/connectors/io.github.uizze/uizze (canonical hosted record is now verified, has a healthy `glama.json`, points to `https://uizze.com/mcp/preview`, and reports 4.3/5 across one tool; the separate server record at https://glama.ai/mcp/servers/uizze/uizze-mcp still points to retired `uizze/uizze-mcp` and has no score)
- Glama source-server submission: https://glama.ai/mcp/servers (use **Add Server** → **Server** and submit `https://github.com/uizze/uizze`; the current `/api/mcp/servers/submit` endpoint redirects unauthenticated visitors to sign-up, so the canonical source-server listing and score remain externally gated; do not restore the retired repository)
- PulseMCP: https://www.pulsemcp.com/servers/uizze
- MCP Market: https://mcpmarket.com/server/uizze-1
- MCPServers.org: https://mcpservers.org/servers/uizze-com (live listing verified with the current 800,000+ positioning and uizze.com link)
- Cline official MCP Marketplace: https://github.com/cline/mcp-marketplace/issues/2082 (submission body refreshed to the canonical repository and free preview)
- PulseMCP refresh intake: https://github.com/pulsemcp/mcp-servers/issues/669 (updated to the official `io.github.uizze/uizze` v1.2.11 record)

Submit the canonical repository next:

- Anthropic Agent Skills: https://github.com/anthropics/skills (PR #1595 proposes a link-only UIZZE partner listing in the official Agent Skills repository, which has 170,000+ stars)
- OpenAI Plugins: https://github.com/openai/plugins (official Codex plugin examples repository with 5,000+ stars; no public issue, pull-request, or contributor intake is available, so no unsolicited submission has been opened; revisit through the documented official plugin path)
- Anthropic Claude plugin marketplaces: https://github.com/anthropics/claude-plugins-official (33,000+ stars, Anthropic-maintained plugins) and https://github.com/anthropics/claude-plugins-community (read-only community mirror; 351 stars). Third-party submissions use https://clau.de/plugin-directory-submission; direct pull requests to the community mirror close automatically. UIZZE is not listed yet.
- Smithery: https://smithery.ai/servers?q=uizze
- MCP.so: https://mcp.so/submit?type=server (GitHub intake issue #3117 now leads with the free `check_ui_slop` preview, canonical `uizze/uizze` source, and current anti-UI-slop copy)
- Wong2 Awesome MCP Servers: https://github.com/wong2/awesome-mcp-servers (4,265 stars; the repository does not accept PRs, so submissions use https://mcpservers.org/submit)
- Awesome Remote MCP Servers: https://github.com/jaw9c/awesome-remote-mcp-servers (PR #627 refreshes the existing UIZZE row to the free, no-account `https://uizze.com/mcp/preview` endpoint; broken PR #502 was closed after GitHub renamed its fork)
- Hosted & Managed MCP Servers: https://github.com/sylviangth/awesome-remote-mcp-servers (separate 65-star directory; PR #64 now uses the free preview and canonical UIZZE copy, with maintainer review pending)
- Awesome MCP Servers: https://github.com/punkpeye/awesome-mcp-servers (PR #10946 is open; live preview endpoint and canonical Glama connector evidence were posted, but the maintainer still requires a Glama source-server quality score)
- mctrinh Awesome MCP Servers: https://github.com/mctrinh/awesome-mcp-servers (PR #82 repairs an open listing that still referenced retired `uizze/uizze-mcp`; the branch now uses `uizze/uizze` and the free preview, with maintainer review pending)
- TensorBlock MCP Index: https://github.com/TensorBlock/awesome-mcp-servers ([PR #1777](https://github.com/TensorBlock/awesome-mcp-servers/pull/1777) merged and deployed; live profile is https://tensorblock.co/mcp/servers/github-uizze-uizze-2a597cfa with canonical `uizze/uizze` metadata)
- appcypher Awesome MCP Servers: https://github.com/appcypher/awesome-mcp-servers (archived/read-only upstream; a prepared fork cannot become a live directory PR)
- YuzeHao2023 Awesome MCP Servers: https://github.com/YuzeHao2023/Awesome-MCP-Servers (PR #369 adds the canonical UIZZE entry to the active Community Servers list; issue #420 is the original intake request)
- adw0rd Awesome MCP Servers: https://github.com/adw0rd/awesome-mcp-servers/issues/16 (canonical-source correction posted; original issue body still needs maintainer-side replacement)
- libukai Awesome Agent Skills: https://github.com/libukai/awesome-agent-skills (canonical UIZZE intake is tracked in https://github.com/libukai/awesome-agent-skills/pull/107 and issue #128 for the curated programming/design section)
- junminhong Awesome Agent Skills: https://github.com/junminhong/awesome-agent-skills/pull/23 (organization-source correction for the bilingual listing; changes requested)
- Ezeafk Awesome Agent Skills: https://github.com/Ezeafk/awesome-agent-skills/pull/9 (anti-ui-slop Skill in Design and Frontend; review pending)
- Kodustech Awesome Agent Skills: https://github.com/kodustech/awesome-agent-skills/pull/59 (frontend anti-ui-slop Skill; review pending)
- NextLevelBuilder SkillX: https://github.com/nextlevelbuilder/skillx/pull/20 (manual SkillX seed registry entry; review pending)
- futantan Agent Skills Explorer: https://github.com/futantan/agent-skills.md (issue #24 requests indexing the canonical anti-ui-slop Skill)
- Awesome Claude Plugins: https://github.com/composio-community/awesome-claude-plugins (PR #422 adds UIZZE to Frontend & Design)
- JackyST0 Awesome Agent Skills: https://github.com/JackyST0/awesome-agent-skills (PR #78 adds bilingual UIZZE entries to Design / 设计相关)
- Awesome OpenClaw: https://github.com/Anil-matcha/awesome-openclaw (PR #201 adds the portable UIZZE Skill to Notable Skills)
- Awesome Harness Engineering: https://github.com/ai-boost/awesome-harness-engineering (PR #200 adds the UIZZE Action and MCP workflow to Verification & CI Integration)
- Awesome LLM Resources: https://github.com/WangRongsheng/awesome-LLM-resources (PR #194 adds the canonical anti-ui-slop Skill to 技能 Skills)
- Awesome LLM Apps: https://github.com/Shubhamsaboo/awesome-llm-apps (PR #1105 adds a self-contained runnable anti-ui-slop Skill; maintainer review is pending)
- jakubkrehel Interface Skills: https://github.com/jakubkrehel/skills (PR #14 proposes a focused anti-ui-slop finish gate alongside its interface-quality skills; maintainer review is pending)
- Vercel Agent Skills: https://github.com/vercel-labs/agent-skills (PR #321 proposes a focused anti-ui-slop review skill in the Design group, complementary to Vercel’s Web Interface Guidelines; maintainer review is pending)
- Anthony Fu Skills: https://github.com/antfu/skills (PR #36 adds the canonical UIZZE anti-ui-slop Skill as a maintained vendored source for the Vite, Nuxt, and Vue audience; maintainer review is pending)
- Alirezarezvani Claude Skills: https://github.com/alirezarezvani/claude-skills (issue #962 proposes a focused anti-ui-slop quality-gate Skill distinct from its existing design-system toolkit)
- VoltAgent Awesome DESIGN.md: https://github.com/VoltAgent/awesome-design-md (issue #459 now has the public UIZZE DESIGN.md artifact and canonical source for indexing)
- Bergside Awesome Design Skills: https://github.com/bergside/awesome-design-skills (issue #16 proposes UIZZE for the separate Related QA tooling section, alongside design-skill quality gates)
- E2B Awesome SDKs for AI Agents: https://github.com/e2b-dev/awesome-ai-sdks (PR #335 adds UIZZE as a UI quality tool; maintainer CLA is pending)
- Awesome Design Systems: https://github.com/alexpate/awesome-design-systems (PR #356 adds the public UIZZE DESIGN.md under Voice & Tone and Source code)
- Awesome Claude Code Skills: https://github.com/helloianneo/awesome-claude-code-skills (PR #72 adds UIZZE to the design/UI skills section)
- jqueryscript Awesome Claude Code: https://github.com/jqueryscript/awesome-claude-code (PR #598 adds UIZZE to the Agent Skills section)
- GetBindu Awesome Claude Skills: https://github.com/GetBindu/awesome-claude-code-and-skills (PR #156 adds UIZZE to Core Development Skills)
- BehiSecc Awesome Claude Skills: https://github.com/BehiSecc/awesome-claude-skills (PR #579 adds UIZZE to Development & Code Tools)
- Official Cursor plugins: https://github.com/cursor/plugins (PR #217 adds the UIZZE Cursor plugin; Cursor Bugbot passed and maintainer review is pending)
- Docker MCP Registry: https://github.com/docker/mcp-registry (PR #4473 now points at the canonical `uizze/uizze` repository and uses the current 800,000+ real web and iOS screens copy; Docker maintainer review is pending)
- Cline marketplace: https://github.com/cline/marketplace (PR #17 adds the free anti-ui-slop Skill and PR #18 adds the no-account preview MCP; both are open for maintainer review)
- Cline plugins: https://github.com/cline/plugins (PR #224 adds the portable anti-ui-slop plugin; maintainer review is pending)
- UI Skills registry: https://github.com/ibelick/ui-skills (PR #36 adds the canonical domain-hosted anti-ui-slop Skill; checks are clean)
- Brad Traversy Design Resources: https://github.com/bradtraversy/design-resources-for-developers (PR #1649 adds UIZZE to Design Inspiration; checks are clean)
- Claude Code Templates: https://github.com/davila7/claude-code-templates (PR #747 adds the free Skill and optional MCP component; catalog review is pending)
- Awesome Cursor Rules: https://github.com/PatrickJS/awesome-cursorrules
- Awesome Claude Skills: https://github.com/ComposioHQ/awesome-claude-skills
- TravisVN Awesome Claude Skills: https://github.com/travisvn/awesome-claude-skills (PR #1123 adds UIZZE to the community skills table)
- Awesome Codex Skills: https://github.com/composio-community/awesome-codex-skills
- Awesome Codex CLI: https://github.com/milisp/awesome-codex-cli/pull/72 (hosted UIZZE MCP entry; maintainer requested usage evidence)
- Awesome Vibe Coding Tools: https://github.com/jiji262/awesome-vibe-coding-tools/pull/35 (Skill and MCP entry; review pending)
- Awesome Skills: https://github.com/gmh5225/awesome-skills/pull/39 (anti-ui-slop Skill; review pending)
- AgenticX Agent Skills: https://github.com/DemonDamon/AgenticX-AgentSkills/pull/3 (portable Skill and marketplace seed entry; review pending)
- Frontend Design Resources: https://github.com/megh-bari/frontend-design-resources/pull/4 (Design Inspiration entry; review pending)
- Tastemaker: https://github.com/codeswithroh/tastemaker/pull/1 (optional UI-reference research integration; review pending)
- Software Engineer Affiliate Program Hub: https://github.com/digital-marketing-engineer/software-engineer-affiliate-program-hub/pull/17 (affiliate directory entry; review pending)
- Cline Rules: https://github.com/cline/clinerules/pull/3 (portable STOP UI SLOP rule; review pending)
- Awesome Codex Subagents: https://github.com/VoltAgent/awesome-codex-subagents
- Addy Osmani Agent Skills: https://github.com/addyosmani/agent-skills (PR #496 adds reference-led UI finish checks; maintainer review is pending)
- Awesome Frontend Skills: https://github.com/finfin/awesome-frontend-skills
- Requestly Awesome Frontend Resources: https://github.com/requestly/awesome-frontend-resources (PR #33 adds the free-first UIZZE Skill and deterministic preview)
- Web Development Resources: https://github.com/markodenic/web-development-resources
- Trend Micro Awesome Frontend: https://github.com/trendmicro-frontend/awesome (issue #7 suggests UIZZE for the maintained AI/frontend resources list)
- Wshobson Agentic Plugin Marketplace: https://github.com/wshobson/agents
- GitHub Marketplace: https://github.com/marketplace?type=actions&query=uizze

## GitHub-native discovery

Keep these surfaces aligned with the canonical copy above:

- Organization profile: https://github.com/uizze/.github/blob/main/profile/README.md
- Start-here discussion: https://github.com/uizze/uizze/discussions/15 (high-traffic entry point refreshed with canonical links, free preview, Action, DESIGN.md, and Registry paths)
- Launch discussion: https://github.com/uizze/uizze/discussions/44
- Latest distribution update: https://github.com/uizze/uizze/discussions/44#discussioncomment-18046566
- Latest distribution release: https://github.com/uizze/uizze/releases/latest
- Anthropic Skills partner listing PR: https://github.com/anthropics/skills/pull/1595 (link-only UIZZE entry for the official Agent Skills repository; maintainer review pending)
- Claude Code Frontend Design Toolkit PR: https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit/pull/5 (README source repaired to the canonical `uizze/uizze` repository; checks are clean)
- Awesome Vibe Coding documentation PR: https://github.com/filipecalegario/awesome-vibe-coding/pull/257 (visible entry now leads with the free Skill and deterministic preview, then distinguishes full UIZZE and its 800,000+ real web and iOS screens)
- GitHub Action directory PR: https://github.com/sdras/awesome-actions/pull/899 (visible entry now includes the 800,000+ provenance while keeping the Action itself a focused local source check)
- GitHub Action metadata PR: https://github.com/uizze/uizze/pull/144 (merged; root Action metadata now uses a concrete searchable description for generic UI, missing states, inert controls, and token drift)
- Claude Code plugins directory PR: https://github.com/ccplugins/awesome-claude-code-plugins/pull/350
- Agent Skills directory PR: https://github.com/VoltAgent/awesome-agent-skills/pull/911 (visible entry now identifies the free Skill and its 800,000+ real web and iOS screen grounding)
- Design tools directory PR: https://github.com/goabstract/Awesome-Design-Tools/pull/586
- Awesome Design Systems resource PR: https://github.com/klaufel/awesome-design-systems/pull/32
- Frontend Development Bookmarks PR: https://github.com/dypsilon/frontend-dev-bookmarks/pull/528
- Awesome Web Design inspiration PR: https://github.com/nicolesaidy/awesome-web-design/pull/71
- Nanobot well-known Skills compatibility PR: https://github.com/HKUDS/nanobot/pull/5186 (allows `uizze.com` discovery sources in search, trends, and installation; review pending)
- Meng To design skills PR: https://github.com/MengTo/Skills/pull/7
- Tech Leads Club Agent Skills intake issue: https://github.com/tech-leads-club/agent-skills/issues/167 (issue refreshed with v1.2.11, current free preview, 800,000+ evidence, and passing HOL Plugin Scanner status)
- Awesome Hermes Agent recommendation issue: https://github.com/0xNyk/awesome-hermes-agent/issues/325 (portable anti-UI-slop skill recommendation for the agentskills.io ecosystem)
- Awesome Hermes Skills: https://github.com/ZeroPointRepo/awesome-hermes-skills/pull/29 (merged UIZZE anti-ui-slop Skill listing in Creative & Media Generation)
- Agent Skill Index PR: https://github.com/heilcheng/awesome-agent-skills/pull/420
- Skillmatic Agent Skills PR: https://github.com/skillmatic-ai/awesome-agent-skills/pull/153
- SkillCreator Agent Skills PR: https://github.com/skillcreatorai/Awesome-Agent-Skills/pull/10
- Claude Code Toolkit PR: https://github.com/rohitg00/awesome-claude-code-toolkit/pull/730
- Awesome Cursor Rules PR: https://github.com/PatrickJS/awesome-cursorrules/pull/353
- Awesome Claude Skills PR: https://github.com/ComposioHQ/awesome-claude-skills/pull/1648
- Awesome Codex Skills PR: https://github.com/composio-community/awesome-codex-skills/pull/236
- HOL Awesome Codex Plugins PR: https://github.com/hashgraph-online/awesome-codex-plugins/pull/368 (refreshes the existing UIZZE entry to the canonical v1.2.11 source)
- E2B Awesome SDKs for AI Agents PR: https://github.com/e2b-dev/awesome-ai-sdks/pull/335 (UIZZE UI quality tool for agent workflows; maintainer CLA is pending)
- Awesome Claude Design PR: https://github.com/rohitg00/awesome-claude-design/pull/38 (catalogue-backed anti-slop finish gate in the Claude design directory)
- Awesome Product Design PR: https://github.com/ttt30ga/awesome-product-design/pull/40 (UIZZE UI inspiration and quality reference)
- Founders Kit PR: https://github.com/avinash201199/founders-kit/pull/18 (UIZZE product listing for founders and builders)
- iOSDevLinks PR: https://github.com/giftbott/iOSDevLinks/pull/21 (UIZZE design reference for iOS developers)
- Awesome Codex Subagents PR: https://github.com/VoltAgent/awesome-codex-subagents/pull/46
- Addy Osmani Agent Skills PR: https://github.com/addyosmani/agent-skills/pull/496
- Awesome Frontend Skills PR: https://github.com/finfin/awesome-frontend-skills/pull/3
- Requestly Awesome Frontend Resources PR: https://github.com/requestly/awesome-frontend-resources/pull/33 (free-first UIZZE entry in Some Awesome Projects)
- Web Development Resources PR: https://github.com/markodenic/web-development-resources/pull/813
- Awesome MCP Servers PR: https://github.com/punkpeye/awesome-mcp-servers/pull/10946
- Awesome Remote MCP Servers PR: https://github.com/jaw9c/awesome-remote-mcp-servers/pull/627 (refreshes the existing UIZZE row to the free preview and canonical repository; supersedes broken PR #502)
- Hosted & Managed MCP Servers PR: https://github.com/sylviangth/awesome-remote-mcp-servers/pull/64 (separate hosted-MCP directory submission with the free preview and canonical copy)
- mctrinh Awesome MCP Servers PR: https://github.com/mctrinh/awesome-mcp-servers/pull/82 (canonical-link repair for an open listing; retired `uizze/uizze-mcp` reference removed)
- Awesome Codex CLI PR: https://github.com/RoggeOhta/awesome-codex-cli/pull/207 (direct Codex CLI Specialized Skills listing with the free-first anti-UI-slop and preview paths; review pending)
- MobinX Awesome MCP List PR: https://github.com/MobinX/awesome-mcp-list/pull/387 (Developer Tools listing with the canonical source and current 800,000+ positioning; review pending)
- Cline official MCP Marketplace submission: https://github.com/cline/mcp-marketplace/issues/2082
- PulseMCP refresh issue: https://github.com/pulsemcp/mcp-servers/issues/669
- adw0rd Awesome MCP Servers submission: https://github.com/adw0rd/awesome-mcp-servers/issues/16 (correction comment posted; maintainer edit remains pending)
- YuzeHao2023 Awesome MCP Servers PR: https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/369
- Agentic Awesome Skills PR: https://github.com/sickn33/agentic-awesome-skills/pull/1166 (merged; the live directory entry now uses the canonical `uizze/uizze` source)
- Awesome LLM Apps PR: https://github.com/Shubhamsaboo/awesome-llm-apps/pull/1105 (self-contained runnable Skill; maintainer review pending)
- jakubkrehel Interface Skills PR: https://github.com/jakubkrehel/skills/pull/14 (focused anti-ui-slop finish gate; plugin validator passed; maintainer review pending)
- Vercel Agent Skills PR: https://github.com/vercel-labs/agent-skills/pull/321 (Design-group anti-ui-slop review skill; docs-only checks passed; maintainer review pending)
- Anthony Fu Skills PR: https://github.com/antfu/skills/pull/36 (canonical UIZZE anti-ui-slop Skill synced through the repository’s vendor workflow; lint and sync parity passed; maintainer review pending)
- Alirezarezvani Claude Skills proposal: https://github.com/alirezarezvani/claude-skills/issues/962 (new anti-ui-slop quality-gate proposal; maintainer review pending)
- Official Cursor plugins PR: https://github.com/cursor/plugins/pull/217 (manifest synchronized to v1.2.11 and current 800,000+ real web and iOS screens copy in commit `3175e48`; Cursor review is pending)
- Docker MCP Registry PR: https://github.com/docker/mcp-registry/pull/4473 (canonical source and current public copy corrected in commit `ceaad7ba`; Docker review is pending)
- Cline marketplace Skill PR: https://github.com/cline/marketplace/pull/17
- Cline marketplace MCP PR: https://github.com/cline/marketplace/pull/18
- Cline plugins PR: https://github.com/cline/plugins/pull/224
- UI Skills registry PR: https://github.com/ibelick/ui-skills/pull/36
- Brad Traversy Design Resources PR: https://github.com/bradtraversy/design-resources-for-developers/pull/1649
- Claude Code Templates PR: https://github.com/davila7/claude-code-templates/pull/747
- Cursor MDC rules PR: https://github.com/sanjeed5/awesome-cursor-rules-mdc/pull/58
- Wshobson Agentic Plugin Marketplace issue: https://github.com/wshobson/agents/issues/657
- Wshobson Agentic Plugin Marketplace PR: https://github.com/wshobson/agents/pull/658
- Awesome Claude Code recommendation: https://github.com/hesreallyhim/awesome-claude-code/issues/2548 (canonical Skills payload is public; maintainer validation labels are still pending)
- TravisVN Awesome Claude Skills PR: https://github.com/travisvn/awesome-claude-skills/pull/1123
- Awesome Claude Code Skills PR: https://github.com/helloianneo/awesome-claude-code-skills/pull/72
- jqueryscript Awesome Claude Code PR: https://github.com/jqueryscript/awesome-claude-code/pull/598
- GetBindu Awesome Claude Skills PR: https://github.com/GetBindu/awesome-claude-code-and-skills/pull/156
- BehiSecc Awesome Claude Skills PR: https://github.com/BehiSecc/awesome-claude-skills/pull/579
- Awesome LLM Apps Agent Skills PR: https://github.com/Shubhamsaboo/awesome-llm-apps/pull/1105 (self-contained runnable anti-ui-slop Skill; GitGuardian check passed; maintainer review pending)
- Awesome LLM Skills PR: https://github.com/Prat011/awesome-llm-skills/pull/181 (canonical UIZZE UI research Skill entry)
- Awesome AI DevTools PR: https://github.com/jamesmurdza/awesome-ai-devtools/pull/985 (canonical UIZZE UI context and verification tool entry; required PR-template check passed)
- Awesome AI Coding PR: https://github.com/wsxiaoys/awesome-ai-coding/pull/143 (UIZZE project entry)
- Awesome DevTools PR: https://github.com/devtoolsd/awesome-devtools/pull/364 (UIZZE UI quality gate entry in AI Coding Tools)
- Awesome Cheatsheets PR: https://github.com/LeCoupa/awesome-cheatsheets/pull/467 (UIZZE entry in the developer tools directory)
- Awesome Claude Plugins PR: https://github.com/composio-community/awesome-claude-plugins/pull/422 (UIZZE entry in Frontend & Design)
- JackyST0 Awesome Agent Skills PR: https://github.com/JackyST0/awesome-agent-skills/pull/78 (bilingual UIZZE entry in Design / 设计相关)
- Awesome OpenClaw PR: https://github.com/Anil-matcha/awesome-openclaw/pull/201 (portable UIZZE Skill in Notable Skills)
- Awesome Harness Engineering PR: https://github.com/ai-boost/awesome-harness-engineering/pull/200 (UIZZE Action and MCP workflow in Verification & CI Integration)
- Awesome LLM Resources PR: https://github.com/WangRongsheng/awesome-LLM-resources/pull/194 (canonical anti-ui-slop Skill in 技能 Skills)
- Awesome Design Systems PR: https://github.com/alexpate/awesome-design-systems/pull/356 (public UIZZE DESIGN.md under Voice & Tone and Source code)
- VoltAgent Awesome DESIGN.md request: https://github.com/VoltAgent/awesome-design-md/issues/459 (UIZZE DESIGN.md request for the AI Design + Build ecosystem)
- Bergside Awesome Design Skills request: https://github.com/bergside/awesome-design-skills/issues/16 (UIZZE proposed as related QA tooling, not as a copied registry skill)
- Awesome AI Coding Tools PR: https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/627 (visible entry now leads with the free Skill and deterministic preview, then distinguishes full UIZZE and its 800,000+ real web and iOS screens)
- Awesome AI Tools PR: https://github.com/mahseema/awesome-ai-tools/pull/1982 (UIZZE developer-tool entry with the 800,000+ claim and free paths)
- Awesome Generative AI PR: https://github.com/filipecalegario/awesome-generative-ai/pull/669 (UIZZE entry in Vibe Coding)
- Awesome Vibe Coding PR: https://github.com/awesome-vibe-coding/awesome-vibe-coding/pull/128 (UIZZE entry in Extensions & Plugins)
- Awesome OpenCode PR: https://github.com/awesome-opencode/awesome-opencode/pull/609 (UIZZE project entry for OpenCode's MCP workflow)
- Awesome MCP ZH PR: https://github.com/yzfly/Awesome-MCP-ZH/pull/463 (Chinese-language MCP directory entry for the free UI slop preview)
- Awesome ChatGPT Repositories PR: https://github.com/taishi-i/awesome-ChatGPT-repositories/pull/209 (UIZZE anti-UI-slop toolkit entry for coding agents)
- Claude Code Everything guide PR: https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know/pull/30 (adds UIZZE to the quality, review, and debugging skill table)
- LangGPT Awesome Claude Code PR: https://github.com/LangGPT/awesome-claude-code/pull/121
- Chinese Awesome Claude Skills PR: https://github.com/shishirui/awesome-claude-skills-zh/pull/10
- KaranB192 Awesome Claude Skills PR: https://github.com/karanb192/awesome-claude-skills/pull/162

Marketplace status: `v1.2.11` is the current release with valid root Action metadata and the aligned `v1` tag, but its GitHub Marketplace publish checkbox remains unsubmitted. Marketplace search still returns zero public results; an earlier category-save attempt returned a GitHub 500, and the authenticated release form still requires the final publish action. GitHub’s public REST and GraphQL APIs expose no supported Marketplace publish mutation, so this remains a release-form action.

Already listed:

- GitHub MCP Registry: https://github.com/mcp/uizze/uizze (official registry is active at `io.github.uizze/uizze`, latest `v1.2.11`, with the canonical repository URL; older retired-repository records are deprecated)
- GitHub Awesome Copilot skill: https://github.com/github/awesome-copilot/blob/main/skills/anti-ui-slop/SKILL.md
- GitHub Awesome Copilot follow-up PR: https://github.com/github/awesome-copilot/pull/2685 (documents the separate anonymous `check_ui_slop` preview; all automated checks pass, maintainer review pending)
- Awesome Copilot Agents PR: https://github.com/Code-and-Sorts/awesome-copilot-agents/pull/81 (links the maintained UIZZE anti-ui-slop skill in the Development Agent Skills list)
- skills.sh: https://www.skills.sh/site/uizze.com/anti-ui-slop
- Chat2AnyLLM source hub: https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/144 (plugin source entry merged and live); its downstream README now lists `uizze/uizze` as a healthy `.claude-plugin` marketplace source after https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/146 quarantined the malformed source that blocked generation (related maintainer issue: https://github.com/Chat2AnyLLM/awesome-claude-plugins/issues/50); MCP source follow-up: https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/145, with the missing review trigger tracked in https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/147
- HOL Awesome Codex Plugins: https://github.com/hashgraph-online/awesome-codex-plugins (UIZZE is already listed; PR #368 refreshes its public copy and triggers the generator to sync the current v1.2.11 canonical source, with all checks passing)
- Agentic Awesome Skills: https://github.com/sickn33/agentic-awesome-skills/pull/1166 (merged; live canonical entry)
