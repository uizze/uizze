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

## GitHub repository metadata

The canonical repository uses GitHub's full 20-topic limit. The current set keeps the core agent, UI, MCP, Action, and anti-ui-slop topics, and includes the plain `skills` topic for direct Agent Skill discovery. On 2026-08-17, `skills` replaced the broader `vibe-coding` topic; do not add unrelated broad terms.

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

- Tons of Skills: https://github.com/uizze/uizze/issues/38 (2,600+ star Claude Code marketplace; the public anti-ui-slop Skill gained the required Overview, Prerequisites, Output, Error Handling, and Resources sections, and the domain-backed copy is verified byte-for-byte against this repository; the Path B source was accepted in merged PR #1127, while sync PR #1223 currently conflicts before the marketplace mirror can become live)
- iFlytek SkillHub: https://github.com/iflytek/skillhub/issues/719 (4,872-star self-hosted Agent Skill registry; starter-collection proposal uses the canonical MIT Skill source and preserves UIZZE's public version/license metadata)
- Claude Plugins registry: https://github.com/Kamalnrf/claude-plugins/issues/124 (532-star registry with 63,000+ indexed Agent Skills; direct indexing request for the canonical anti-ui-slop Skill after the public index returned no UIZZE match)
- SkillsHub: https://github.com/ComeOnOliver/skillshub/issues/81 (active open registry with 5,900+ indexed skills; import request identifies the canonical `anti-ui-slop` and `ui-slop-score` paths and asks the indexer to avoid duplicate platform copies)
- Claude Skills Registry: https://github.com/majiayu000/claude-skill-registry-core/pull/281 (565-star daily registry with a public search site and CLI; source PR adds the canonical `anti-ui-slop` Skill under `design`, follows intake issue #280, and is currently open and mergeable)
- Intellectronica Awesome Skills: https://github.com/intellectronica/awesome-skills (118-star registry is archived and read-only; its live UIZZE record still points at retired `aislon/uizze-mcp` metadata, while canonical repair commit `8ad258c` is prepared in the fork and cannot become an upstream PR until the repository is reopened)
- Awesome Design: https://github.com/gztchan/awesome-design/pull/229 (17,000+ star design-resource directory; adds UIZZE to Toolkit with the free MIT Skill separated from optional hosted tools and the current 800,000+ real-screen scope)
- liyupi/ai-guide: https://github.com/liyupi/ai-guide/pull/73 (18,000+ star Chinese AI and Vibe Coding guide; adds UIZZE alongside frontend-design with the no-account install path and a clear free Skill/full workflow distinction)
- Awesome Front-End Learning Resource: https://github.com/helloqingfeng/Awsome-Front-End-learning-resource/pull/30 (10,000+ star Chinese frontend-resource index; adds UIZZE to the main list with the free Skill install path and current 800,000+ real web/iOS scope)
- Skills Manager: https://github.com/xingkongliang/skills-manager/pull/382 (3,800+ star desktop skill manager; fixes installation of website-synced skills such as `https://www.skills.sh/site/uizze.com/ui-radar` instead of misclassifying the source as a GitHub repository; PR workflow is waiting for maintainer approval)
- HeyClaude / awesome-claude: https://github.com/JSONbored/awesome-claude/pull/5792 (291-star GitHub-native Claude workflow registry; focused source-backed Skill PR with current v1.2.11 metadata, free install path, safety/privacy notes, and the 800,000+ product distinction; repository checks are green and current verification is recorded at https://github.com/JSONbored/awesome-claude/pull/5792#issuecomment-5320744708)
- Build with Claude: https://github.com/davepoon/buildwithclaude (3,298-star Claude discovery hub; merged PR #249 adds the anti-ui-slop Skill and follow-up PR #251 aligns its public copy with UIZZE)
- Awesome QA Skills: https://github.com/naodeng/awesome-qa-skills/issues/3 (167-star bilingual QA Skill library; proposes the anti-ui-slop Skill as a directly relevant UX quality and pre-ship testing workflow, not a generic product listing)
- Glama connector: https://glama.ai/mcp/connectors/io.github.uizze/uizze (canonical hosted record is now verified, has a healthy `glama.json`, points to `https://uizze.com/mcp/preview`, and reports 4.3/5 across one tool; the separate server record at https://glama.ai/mcp/servers/uizze/uizze-mcp still points to retired `uizze/uizze-mcp` and has no score)
- Glama source-server submission: https://glama.ai/mcp/servers (use **Add Server** → **Server** and submit `https://github.com/uizze/uizze`; the current `/api/mcp/servers/submit` endpoint redirects unauthenticated visitors to sign-up, so the canonical source-server listing and score remain externally gated; do not restore the retired repository)
- MCP Servers Live Index: https://github.com/linny006/mcp-servers-live/pull/5 (15-minute GitHub Search tracker; the current table already lists canonical `uizze/uizze`, while this PR fixes generated stale detail pages for retired repository names so they cannot compete in search)
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
- Awesome MCP Servers: https://github.com/punkpeye/awesome-mcp-servers (92,000+ stars; PR #10946 is the single maintained UIZZE submission, with the canonical repository, free preview, 800,000+ scope, and Glama connector quality evidence; no duplicate PR is being maintained)
- mctrinh Awesome MCP Servers: https://github.com/mctrinh/awesome-mcp-servers (PR #82 repairs an open listing that still referenced retired `uizze/uizze-mcp`; the branch now uses `uizze/uizze` and the free preview, with maintainer review pending)
- TensorBlock MCP Index: https://github.com/TensorBlock/awesome-mcp-servers ([PR #1777](https://github.com/TensorBlock/awesome-mcp-servers/pull/1777) merged and deployed; live profile is https://tensorblock.co/mcp/servers/github-uizze-uizze-2a597cfa with canonical `uizze/uizze` metadata)
- appcypher Awesome MCP Servers: https://github.com/appcypher/awesome-mcp-servers (archived/read-only upstream; a prepared fork cannot become a live directory PR)
- YuzeHao2023 Awesome MCP Servers: https://github.com/YuzeHao2023/Awesome-MCP-Servers (PR #369 adds the canonical UIZZE entry to the active Community Servers list; issue #420 is the original intake request)
- adw0rd Awesome MCP Servers: https://github.com/adw0rd/awesome-mcp-servers/issues/16 (canonical-source correction posted; original issue body still needs maintainer-side replacement)
- libukai Awesome Agent Skills: https://github.com/libukai/awesome-agent-skills (current UIZZE intake is tracked in https://github.com/libukai/awesome-agent-skills/pull/107 and issue #128 for the curated programming/design section; PR copy refreshed to the canonical free-first workflow and v1.2.11 source)
- junminhong Awesome Agent Skills: https://github.com/junminhong/awesome-agent-skills/pull/23 (organization-source correction for the bilingual listing; changes requested)
- Ezeafk Awesome Agent Skills: https://github.com/Ezeafk/awesome-agent-skills/pull/9 (anti-ui-slop Skill in Design and Frontend; review pending)
- Kodustech Awesome Agent Skills: https://github.com/kodustech/awesome-agent-skills/pull/59 (frontend anti-ui-slop Skill; review pending)
- Agentic Awesome Skills: https://github.com/sickn33/agentic-awesome-skills/pull/1176 (45,000+ star Agent Skills catalog; repairs all three mirrored UIZZE Skill metadata records from retired `aislon/uizze-mcp` to the canonical `uizze/uizze` source; generated artifacts are intentionally left to maintainer sync)
- Awesome Skills 中文: https://github.com/lingxling/awesome-skills-cn/pull/10 (253-star Chinese-language Skill directory; repairs all three mirrored UIZZE Skill copies, the Official Sources section, generated index, and catalog to the canonical `uizze/uizze` source with the free catalog and preview separated from full UIZZE's 800,000+ real-screen scope)
- OpenCode Skills Collection: https://github.com/FrancoStino/opencode-skills-collection/issues/113 (64-star OpenCode plugin with 1,595+ nightly-synced skills; source-update request targets generated UIZZE metadata that still points to retired `aislon/uizze-mcp` and tracks the upstream canonical-source repair)
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills/pull/919 (30,000+ star maintained Agent Skills directory; adds the canonical anti-ui-slop Skill to Community Skills → Development and Testing with a concise, source-backed description; the open PR is mergeable)
- Skillmatic Awesome Agent Skills: https://github.com/skillmatic-ai/awesome-agent-skills/pull/154 (656-star Agent Skills reference with a direct contribution path; adds the canonical MIT anti-ui-slop Skill to its Popular Collections section; the open PR is mergeable)
- Awesome AI Coding Techniques: https://github.com/inmve/awesome-ai-coding-techniques/issues/46 (347-star multilingual, technique-focused directory; proposes a concrete design-contract and hard-finish-gate workflow, following its request for practical, experience-backed techniques rather than a generic product listing)
- HOL Awesome AI Plugins: https://github.com/hashgraph-online/awesome-ai-plugins/pull/99 (98-star cross-platform AI extension directory; refreshes the existing UIZZE entry to separate the free MIT anti-ui-slop Skill and no-account preview from full UIZZE's 800,000+ real web and iOS screen scope; contribution checks pass)
- NextLevelBuilder SkillX: https://github.com/nextlevelbuilder/skillx/pull/20 (manual SkillX seed registry entry; review pending)
- futantan Agent Skills Explorer: https://github.com/futantan/agent-skills.md (issue #24 requests indexing the canonical anti-ui-slop Skill)
- Awesome Claude Plugins: https://github.com/composio-community/awesome-claude-plugins (PR #422 adds UIZZE to Frontend & Design)
- JackyST0 Awesome Agent Skills: https://github.com/JackyST0/awesome-agent-skills (PR #78 adds bilingual UIZZE entries to Design / 设计相关)
- Awesome OpenClaw: https://github.com/Anil-matcha/awesome-openclaw (PR #201 adds the portable UIZZE Skill to Notable Skills)
- Awesome Harness Engineering: https://github.com/ai-boost/awesome-harness-engineering (PR #200 adds the UIZZE Action and MCP workflow to Verification & CI Integration)
- Awesome LLM Resources: https://github.com/WangRongsheng/awesome-LLM-resources (PR #194 adds the canonical anti-ui-slop Skill to 技能 Skills)
- Awesome LLM Apps: https://github.com/Shubhamsaboo/awesome-llm-apps (PR #1105 adds a self-contained runnable anti-ui-slop Skill; commit `769a54f` now installs from the canonical `uizze/uizze` source instead of the forked directory copy; maintainer review is pending)
- E2B Awesome AI Agents: https://github.com/e2b-dev/awesome-ai-agents/pull/1410 (29,000+ star AI-agent directory; adds UIZZE after UFO as a coding/GUI-agent UI quality workflow with the free Skill, preview MCP, and accurate full-product scope; first-party disclosure included)
- Awesome AI Agents: https://github.com/jim-schwoebel/awesome_ai_agents (PR #448 adds UIZZE to the Tools section; the entry uses the free Skill/no-account preview and accurately separates the full 800,000+ product scope; maintainer review is pending)
- Awesome AI Agents 2026: https://github.com/caramaschiHG/awesome-ai-agents-2026/pull/512 (1,500+ star monthly-maintained directory; adds UIZZE to 3D and Design with the free `anti-ui-slop` Skill, full 800,000+ workflow, and Free / Paid scope)
- jakubkrehel Interface Skills: https://github.com/jakubkrehel/skills (PR #14 proposes a focused anti-ui-slop finish gate alongside its interface-quality skills; maintainer review is pending)
- Vercel Agent Skills: https://github.com/vercel-labs/agent-skills (PR #321 proposes a focused anti-ui-slop review skill in the Design group, complementary to Vercel’s Web Interface Guidelines; current validation and the fork-preview authorization prerequisite are recorded at https://github.com/vercel-labs/agent-skills/pull/321#issuecomment-5313043110)
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
- Official Cursor plugins: https://github.com/cursor/plugins (PR #217 adds the UIZZE Cursor plugin; its branch now includes Cursor `main` through conflict-resolution commit `8aef74e`, the marketplace JSON parses, and Cursor Bugbot passed; maintainer review remains pending)
- Awesome Cursor Skills: https://github.com/spencerpauly/awesome-cursor-skills (697-star Cursor-specific directory; PR #49 adds the free-first anti-ui-slop Skill under Frontend & UI and is clean and mergeable)
- Docker MCP Registry: https://github.com/docker/mcp-registry (PR #4473 now points at the canonical `uizze/uizze` repository and uses the current 800,000+ real web and iOS screens copy; Docker maintainer review is pending)
- Cline marketplace: https://github.com/cline/marketplace (PR #17 adds the free anti-ui-slop Skill; commit `8116320` now separates its free workflow from the optional full UIZZE MCP and repository validation passes with 203 entries; PR #18 adds the no-account preview MCP; both remain open for maintainer review)
- Cline plugins: https://github.com/cline/plugins (PR #224 adds the portable anti-ui-slop plugin; maintainer review is pending)
- UI Skills registry: https://github.com/ibelick/ui-skills (PR #36 adds the canonical domain-hosted anti-ui-slop Skill; current verification comment confirms the live v1.2.11 source and free install path: https://github.com/ibelick/ui-skills/pull/36#issuecomment-5313001709)
- Brad Traversy Design Resources: https://github.com/bradtraversy/design-resources-for-developers (PR #1649 adds UIZZE to Design Inspiration; checks are clean)
- Claude Code Templates: https://github.com/davila7/claude-code-templates (PR #747 adds the free Skill and optional MCP component; catalog review is pending)
- Awesome Cursor Rules: https://github.com/PatrickJS/awesome-cursorrules
- Awesome Claude Skills: https://github.com/ComposioHQ/awesome-claude-skills
- TravisVN Awesome Claude Skills: https://github.com/travisvn/awesome-claude-skills (PR #1123 adds UIZZE to the community skills table)
- Awesome LLM Skills: https://github.com/Prat011/awesome-llm-skills (1,400+ star maintained LLM and Agent Skills directory; PR #181 adds the canonical free-first UIZZE entry)
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
- Awesome Frontend Skills: https://github.com/finfin/awesome-frontend-skills (178-star maintained frontend Agent Skills index; existing PR #3 adds the canonical `anti-ui-slop` Skill to Design and now separates the free workflow from full UIZZE’s 800,000+ live reference/search scope)
- JingwenTian Awesome Frontend: https://github.com/JingwenTian/awesome-frontend/pull/26 (1,700+ star frontend resource index; adds the free anti-ui-slop Skill with the canonical install source and accurate full 800,000+ distinction)
- Requestly Awesome Frontend Resources: https://github.com/requestly/awesome-frontend-resources (PR #33 adds the free-first UIZZE Skill and deterministic preview)
- Awesome AI Tools for UI: https://github.com/maxbogo/awesome-ai-tools-for-ui/pull/34 (823-star UI-specific catalogue; PR adds the free anti-ui-slop Skill to its Skills section with the live source, install path, and 800,000+ distinction)
- EUDK Awesome AI Tools: https://github.com/eudk/awesome-ai-tools/pull/538 (570-star directory updated in 2026; adds a concise free-first UIZZE entry to AI-Related Tools with the canonical product and GitHub links; maintainer review pending)
- Developer Roadmap: https://github.com/nilbuild/developer-roadmap/pull/10238 (364,000+ star developer education repository; maintainer closed the unsolicited resource PR as personal promotion, so do not resubmit without an invited contribution path)
- Claude Code Best Practice: https://github.com/shanraisshan/claude-code-best-practice/pull/187 (64,000+ star Claude Code guide; one-line UIZZE anti-ui-slop workflow entry in its development-workflow resources, with the canonical GitHub install, free MIT Skill source, and accurate 800,000+ full-workflow distinction)
- Datawhale Easy-Vibe: https://github.com/datawhalechina/easy-vibe/issues/71#issuecomment-5312518381 (18,968-star Chinese AI-native product-building course; recommendation in its open content-suggestions thread for the frontend UI, AI design, and Claude Code/Skills curriculum)
- Awesome Design: https://github.com/gztchan/awesome-design/issues/228 (17,000+ star design-resource directory; Toolkit recommendation for the free anti-ui-slop Skill as an AI-assisted UI quality workflow, with an own-project disclosure)
- Google Labs DESIGN.md: https://github.com/google-labs-code/design.md/pull/170 (27,000+ star design-contract format repo; format-native UIZZE example with local lint at 0 errors and 0 warnings; Google CLA check remains an external prerequisite)
- Garden Skills: https://github.com/ConardLi/garden-skills/issues/30 (10,000+ star MIT Agent Skills collection; proposal places UIZZE beside its Design / Frontend skills as a complementary quality and finish-gate workflow)
- Awesome Web Design: https://github.com/nicolesaidy/awesome-web-design/pull/73 (2,700+ star curated digital-design list; concise UIZZE Guidelines entry with canonical repo, free Skill, and accurate 800,000+ full-workflow scope)
- Vibe Coding CN: https://github.com/2025Emma/vibe-coding-cn/pull/10 (22,000+ star Chinese Vibe Coding guide; PR adds the official Skill to its local Skills resource index and links the open new-tools intake)
- Datawhale Vibe Vibe UI best practices: https://github.com/datawhalechina/vibe-vibe/issues/106#issuecomment-5312596681 (5,900+ star Chinese Vibe Coding course; focused open discussion about design tokens, AI constraints, design-code validation, and a practical UI SOP)
- GitHubDaily: https://github.com/GitHubDaily/GitHubDaily/issues/1030 (47,000+ star Chinese developer-discovery repository; Chinese-language recommendation for the free Skill, preview MCP, GitHub Action, and accurate 800,000+ distinction)
- 程序员鱼皮 AI Guide: https://github.com/liyupi/ai-guide/issues/71 (18,650-star Chinese AI/Vibe Coding resource hub; recommendation for the free anti-ui-slop Skill, preview MCP, and full 800,000+ workflow distinction)
- Chinese Front-End Learning Resources: https://github.com/helloqingfeng/Awsome-Front-End-learning-resource/issues/29 (10,000+ star Chinese front-end resource hub; focused recommendation for UIZZE as an AI UI-reference and quality workflow alongside front-end checklists)
- Web Development Resources: https://github.com/markodenic/web-development-resources
- Trend Micro Awesome Frontend: https://github.com/trendmicro-frontend/awesome (issue #7 suggests UIZZE for the maintained AI/frontend resources list)
- Wshobson Agentic Plugin Marketplace: https://github.com/wshobson/agents
- OpenClaw Skills: https://github.com/VoltAgent/awesome-openclaw-skills (52,000+ star directory; it accepts ClawHub links only, so UIZZE must publish the Skill to ClawHub before this GitHub route can accept a listing)
- ClawHub: https://github.com/openclaw/clawhub (9,300+ star registry and CLI; the publisher path is available, but this environment has no authenticated ClawHub account)
- GitHub Marketplace: https://github.com/marketplace?type=actions&query=uizze

## GitHub-native discovery

Keep these surfaces aligned with the canonical copy above:

- Organization profile: https://github.com/uizze/.github/blob/main/profile/README.md
- Start-here discussion: https://github.com/uizze/uizze/discussions/15 (high-traffic entry point refreshed with canonical links, free preview, Action, DESIGN.md, and Registry paths)
- Launch discussion: https://github.com/uizze/uizze/discussions/44
- Latest distribution update: https://github.com/uizze/uizze/discussions/44#discussioncomment-18059206
- Latest distribution release: https://github.com/uizze/uizze/releases/latest (v1.2.11 notes refreshed with the live skills.sh install route and current distribution pointer)
- Anthropic Skills partner listing PR: https://github.com/anthropics/skills/pull/1595 (link-only UIZZE entry for the official Agent Skills repository; maintainer review pending)
- Claude Code Frontend Design Toolkit PR: https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit/pull/5 (README source repaired to the canonical `uizze/uizze` repository; checks are clean)
- Awesome Vibe Coding documentation PR: https://github.com/filipecalegario/awesome-vibe-coding/pull/257 (visible entry now leads with the free Skill and deterministic preview, then distinguishes full UIZZE and its 800,000+ real web and iOS screens)
- GitHub Action directory PR: https://github.com/sdras/awesome-actions/pull/899 (28,000+ star directory; visible entry includes the 800,000+ provenance while keeping the Action itself a focused local source check; current v1.2.11 verification is recorded at https://github.com/sdras/awesome-actions/pull/899#issuecomment-5320804928)
- GitHub Action metadata PR: https://github.com/uizze/uizze/pull/144 (merged; root Action metadata now uses a concrete searchable description for generic UI, missing states, inert controls, and token drift)
- Claude Code plugins directory PR: https://github.com/ccplugins/awesome-claude-code-plugins/pull/350
- Agent Skills directory PR: https://github.com/VoltAgent/awesome-agent-skills/pull/911 (visible entry now identifies the free Skill and its 800,000+ real web and iOS screen grounding)
- Build with Claude Skill PRs: https://github.com/davepoon/buildwithclaude/pull/251 (merged; existing `plugins/all-skills/skills/anti-ui-slop/SKILL.md` listing refreshed from the canonical UIZZE workflow)
- Design tools directory PR: https://github.com/goabstract/Awesome-Design-Tools/pull/586
- Awesome Design Systems resource PR: https://github.com/klaufel/awesome-design-systems/pull/32
- Frontend Development Bookmarks PR: https://github.com/dypsilon/frontend-dev-bookmarks/pull/528 (commit `51ab891` clarifies the free anti-ui-slop Skill/no-account preview versus the full UIZZE product and its 800,000+ real web and iOS screens)
- Awesome Web Design inspiration PR: https://github.com/nicolesaidy/awesome-web-design/pull/71
- Nanobot well-known Skills compatibility PR: https://github.com/HKUDS/nanobot/pull/5186 (allows `uizze.com` discovery sources in search, trends, and installation; review pending)
- Meng To design skills PR: https://github.com/MengTo/Skills/pull/7
- Tech Leads Club Agent Skills intake issue: https://github.com/tech-leads-club/agent-skills/issues/167 (issue refreshed with v1.2.11, current free preview, 800,000+ evidence, and passing HOL Plugin Scanner status)
- Awesome Hermes Agent recommendation issue: https://github.com/0xNyk/awesome-hermes-agent/issues/325 (portable anti-UI-slop skill recommendation for the agentskills.io ecosystem)
- Awesome Hermes Skills: https://github.com/ZeroPointRepo/awesome-hermes-skills/pull/29 (merged UIZZE anti-ui-slop Skill listing in Creative & Media Generation); maintenance refresh: https://github.com/ZeroPointRepo/awesome-hermes-skills/pull/50 (419-star Hermes ecosystem directory; updates the existing copy with the MIT Skill, no-account preview, and accurate full 800,000+ scope; format check passes)
- Agent Skill Index PR: https://github.com/heilcheng/awesome-agent-skills/pull/420 (6,110-star Agent Skill directory; the existing UIZZE row now names the free MIT Skill, no-account preview checks, and the optional full workflow across 800,000+ real web and iOS screens; refreshed in commit `0eed872`, maintainer review pending)
- Skillmatic Agent Skills PR: https://github.com/skillmatic-ai/awesome-agent-skills/pull/153
- SkillCreator Agent Skills PR: https://github.com/skillcreatorai/Awesome-Agent-Skills/pull/10
- Claude Code Toolkit PR: https://github.com/rohitg00/awesome-claude-code-toolkit/pull/734 (2,524-star Claude Code toolkit; adds the free MIT anti-ui-slop Skill to Community Skills with the canonical install command and a separated optional 800,000+ workflow; clean and mergeable)
- Awesome Cursor Rules PR: https://github.com/PatrickJS/awesome-cursorrules/pull/353
- Awesome Claude Skills PR: https://github.com/ComposioHQ/awesome-claude-skills/pull/1648 (all validation and Socket checks pass; the entry leads with the free MIT Skill and separates the optional 800,000+ workflow)
- Awesome Codex Skills PR: https://github.com/composio-community/awesome-codex-skills/pull/236
- HOL Awesome Codex Plugins PR: https://github.com/hashgraph-online/awesome-codex-plugins/pull/368 (refreshes the existing UIZZE entry to the canonical v1.2.11 source)
- E2B Awesome SDKs for AI Agents PR: https://github.com/e2b-dev/awesome-ai-sdks/pull/335 (UIZZE UI quality tool for agent workflows; maintainer CLA is pending)
- Awesome Claude Design PR: https://github.com/rohitg00/awesome-claude-design/pull/38 (catalogue-backed anti-slop finish gate in the Claude design directory)
- Awesome Product Design PR: https://github.com/ttt30ga/awesome-product-design/pull/40 (UIZZE UI inspiration and quality reference)
- Founders Kit PR: https://github.com/avinash201199/founders-kit/pull/18 (UIZZE product listing for founders and builders)
- iOSDevLinks PR: https://github.com/giftbott/iOSDevLinks/pull/21 (UIZZE design reference for iOS developers)
- Awesome Codex Subagents PR: https://github.com/VoltAgent/awesome-codex-subagents/pull/46
- Addy Osmani Agent Skills PR: https://github.com/addyosmani/agent-skills/pull/496
- Awesome Frontend Skills PR: https://github.com/finfin/awesome-frontend-skills/pull/3 (existing UIZZE submission; corrected free/full product wording is pushed in commit `821d9f7`)
- JingwenTian Awesome Frontend PR: https://github.com/JingwenTian/awesome-frontend/pull/26 (free-first UI quality workflow entry; maintainer review pending)
- Requestly Awesome Frontend Resources PR: https://github.com/requestly/awesome-frontend-resources/pull/33 (free-first UIZZE entry in Some Awesome Projects)
- Awesome AI Tools for UI PR: https://github.com/maxbogo/awesome-ai-tools-for-ui/pull/34 (free anti-ui-slop Skill in the UI-specific Skills catalogue; live links verified HTTP 200)
- Developer Roadmap content PR: https://github.com/nilbuild/developer-roadmap/pull/10238 (closed by the maintainer as personal promotion; no resubmission without an invited contribution path)
- Claude Code Best Practice workflow PR: https://github.com/shanraisshan/claude-code-best-practice/pull/187 (one verified live Skill resource in the Claude Code development-workflow resources; 64,000+ star guide)
- Datawhale Easy-Vibe content suggestion: https://github.com/datawhalechina/easy-vibe/issues/71#issuecomment-5312518381 (Chinese-language recommendation for an 18,968-star AI-native product-building course; free Skill source and 800,000+ full-workflow distinction included)
- Awesome Design recommendation issue: https://github.com/gztchan/awesome-design/issues/228 (17,000+ star design-resource directory; Toolkit recommendation with the free Skill source, install path, and own-project disclosure)
- Google Labs DESIGN.md example PR: https://github.com/google-labs-code/design.md/pull/170 (format-native UIZZE design-system example; `check-changes` passed, local linter returned 0 errors and 0 warnings, Google CLA remains pending)
- Garden Skills proposal issue: https://github.com/ConardLi/garden-skills/issues/30 (Design / Frontend quality Skill proposal; official source, install path, compatibility, and free/full scope included)
- Awesome Web Design Guidelines PR: https://github.com/nicolesaidy/awesome-web-design/pull/73 (one concise design-guideline entry; canonical repo and free Skill links verified HTTP 200)
- Vibe Coding CN Skills PR: https://github.com/2025Emma/vibe-coding-cn/pull/10 (Chinese-language documentation route adding UIZZE to the local Skills resource index; linked from the open new-tools intake)
- Datawhale Vibe Vibe UI discussion: https://github.com/datawhalechina/vibe-vibe/issues/106#issuecomment-5312596681 (Chinese-language UI best-practices discussion; UIZZE added as a concrete design-token, validation, and finish-gate case study)
- GitHubDaily recommendation issue: https://github.com/GitHubDaily/GitHubDaily/issues/1030 (Chinese-language project recommendation with official source, MIT license, free install path, and separate preview/full-product scope)
- 程序员鱼皮 AI Guide recommendation issue: https://github.com/liyupi/ai-guide/issues/71 (Chinese-language recommendation for the AI tools and Vibe Coding resource sections; official source, MIT Skill, free install path, and separate preview/full-product scope)
- Chinese Front-End Learning Resources recommendation issue: https://github.com/helloqingfeng/Awsome-Front-End-learning-resource/issues/29 (Chinese-language front-end resource recommendation with the official Skill source, free install path, and 800,000+ evidence)
- Web Development Resources PR: https://github.com/markodenic/web-development-resources/pull/813
- Awesome MCP Servers PR: https://github.com/punkpeye/awesome-mcp-servers/pull/10946 (92,000+ star directory; single maintained UIZZE submission with canonical free-first copy and Glama quality evidence)
- Awesome Remote MCP Servers PR: https://github.com/jaw9c/awesome-remote-mcp-servers/pull/627 (refreshes the existing UIZZE row to the free preview and canonical repository; supersedes broken PR #502)
- Hosted & Managed MCP Servers PR: https://github.com/sylviangth/awesome-remote-mcp-servers/pull/64 (separate hosted-MCP directory submission with the free preview and canonical copy)
- mctrinh Awesome MCP Servers PR: https://github.com/mctrinh/awesome-mcp-servers/pull/82 (canonical-link repair for an open listing; retired `uizze/uizze-mcp` reference removed)
- Awesome Codex CLI PR: https://github.com/RoggeOhta/awesome-codex-cli/pull/207 (direct Codex CLI Specialized Skills listing with the free-first anti-UI-slop and preview paths; review pending)
- MobinX Awesome MCP List PR: https://github.com/MobinX/awesome-mcp-list/pull/387 (Developer Tools listing with the canonical source and current 800,000+ positioning; review pending)
- Cline official MCP Marketplace submission: https://github.com/cline/mcp-marketplace/issues/2082
- PulseMCP refresh issue: https://github.com/pulsemcp/mcp-servers/issues/669
- adw0rd Awesome MCP Servers submission: https://github.com/adw0rd/awesome-mcp-servers/issues/16 (correction comment posted; maintainer edit remains pending)
- YuzeHao2023 Awesome MCP Servers PR: https://github.com/YuzeHao2023/Awesome-MCP-Servers/pull/369
- Agentic Awesome Skills PR: https://github.com/sickn33/agentic-awesome-skills/pull/1166 (merged; the live directory entry exists, with follow-up source metadata repair in https://github.com/sickn33/agentic-awesome-skills/pull/1176)
- Awesome Skills 中文 PR: https://github.com/lingxling/awesome-skills-cn/pull/10 (canonical-source repair open; JSON validation and metadata-copy consistency checks pass)
- Awesome LLM Apps PR: https://github.com/Shubhamsaboo/awesome-llm-apps/pull/1105 (self-contained runnable Skill; maintainer review pending)
- jakubkrehel Interface Skills PR: https://github.com/jakubkrehel/skills/pull/14 (focused anti-ui-slop finish gate; plugin validator passed; maintainer review pending)
- Vercel Agent Skills PR: https://github.com/vercel-labs/agent-skills/pull/321 (Design-group anti-ui-slop review skill; content and security checks passed; only the fork-preview authorization prerequisite remains; maintainer review pending)
- Anthony Fu Skills PR: https://github.com/antfu/skills/pull/36 (canonical UIZZE anti-ui-slop Skill synced through the repository’s vendor workflow; lint and sync parity passed; maintainer review pending)
- Alirezarezvani Claude Skills proposal: https://github.com/alirezarezvani/claude-skills/issues/962 (new anti-ui-slop quality-gate proposal; maintainer review pending)
- Official Cursor plugins PR: https://github.com/cursor/plugins/pull/217 (manifest synchronized to v1.2.11 and current 800,000+ real web and iOS screens copy; conflict-resolution commit `8aef74e` preserves the upstream Juicebox update, marketplace JSON parses, and Cursor Bugbot passed; Cursor review is pending)
- Awesome Cursor Skills PR: https://github.com/spencerpauly/awesome-cursor-skills/pull/49 (697-star Cursor directory; README-only entry with the canonical install, no-account preview, and separated optional 800,000+ workflow; clean and mergeable)
- Docker MCP Registry PR: https://github.com/docker/mcp-registry/pull/4473 (canonical source and current public copy corrected in commit `ceaad7ba`; Docker review is pending)
- Cline marketplace Skill PR: https://github.com/cline/marketplace/pull/17 (scope clarification commit `8116320`; free Skill and optional full MCP are now described separately; validation passes with 203 entries; review pending)
- Cline marketplace MCP PR: https://github.com/cline/marketplace/pull/18
- Cline plugins PR: https://github.com/cline/plugins/pull/224
- UI Skills registry PR: https://github.com/ibelick/ui-skills/pull/36
- Brad Traversy Design Resources PR: https://github.com/bradtraversy/design-resources-for-developers/pull/1649
- Claude Code Templates PR: https://github.com/davila7/claude-code-templates/pull/747
- Cursor MDC rules PR: https://github.com/sanjeed5/awesome-cursor-rules-mdc/pull/58
- Wshobson Agentic Plugin Marketplace issue: https://github.com/wshobson/agents/issues/657
- Wshobson Agentic Plugin Marketplace PR: https://github.com/wshobson/agents/pull/658
- Awesome Claude Code recommendation: https://github.com/hesreallyhim/awesome-claude-code/issues/2548 (52,000+ star Claude Code directory; intake body refreshed on 2026-08-18 with the canonical GitHub install, v1.2.11 source, free install, anonymous preview, GitHub Action, and accurate free/full 800,000+ distinction; maintainer review pending)
- TravisVN Awesome Claude Skills PR: https://github.com/travisvn/awesome-claude-skills/pull/1123
- Awesome Claude Code Skills PR: https://github.com/helloianneo/awesome-claude-code-skills/pull/72
- jqueryscript Awesome Claude Code PR: https://github.com/jqueryscript/awesome-claude-code/pull/598
- GetBindu Awesome Claude Skills PR: https://github.com/GetBindu/awesome-claude-code-and-skills/pull/156
- BehiSecc Awesome Claude Skills PR: https://github.com/BehiSecc/awesome-claude-skills/pull/579
- Awesome LLM Apps Agent Skills PR: https://github.com/Shubhamsaboo/awesome-llm-apps/pull/1105 (self-contained runnable anti-ui-slop Skill; canonical install repair in commit `769a54f`; GitGuardian check passed; maintainer review pending)
- Awesome LLM Skills PR: https://github.com/Prat011/awesome-llm-skills/pull/181 (existing link-only entry now leads with the free MIT `anti-ui-slop` Skill and no-account preview, then separates full UIZZE's live search, validation, and audits across 800,000+ real web and iOS screens)
- Awesome AI Agents Tools PR: https://github.com/jim-schwoebel/awesome_ai_agents/pull/448 (adds UIZZE to a 1,900+ star AI-agent resource list; free-first public copy and canonical links; maintainer review pending)
- Awesome AI Agents 2026 PR: https://github.com/caramaschiHG/awesome-ai-agents-2026/pull/512 (adds UIZZE to the 1,500+ star directory’s 3D and Design section; monthly-maintained audience, concise factual copy, and Free / Paid scope)
- E2B Awesome AI Agents PR: https://github.com/e2b-dev/awesome-ai-agents/pull/1410 (adds UIZZE to the 29,000+ star open-source AI-agent directory after UFO; free Skill, no-account preview MCP, and full 800,000+ workflow are separated; first-party disclosure included)
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
- Awesome AI Coding Tools PR: https://github.com/ai-for-developers/awesome-ai-coding-tools/pull/627 (visible entry leads with the free MIT Skill, canonical install, and no-account preview, then separates the optional 800,000+ workflow)
- Awesome AI Tools PR: https://github.com/mahseema/awesome-ai-tools/pull/1982 (UIZZE developer-tool entry with the 800,000+ claim and free paths)
- EUDK Awesome AI Tools PR: https://github.com/eudk/awesome-ai-tools/pull/538 (first-party, disclosed submission; free Skill/no-account preview separated from the full 800,000+ product scope; maintainer review pending)
- Awesome Generative AI PR: https://github.com/filipecalegario/awesome-generative-ai/pull/669 (UIZZE entry in Vibe Coding)
- Awesome Vibe Coding PR: https://github.com/awesome-vibe-coding/awesome-vibe-coding/pull/128 (UIZZE entry in Extensions & Plugins)
- Awesome OpenCode PR: https://github.com/awesome-opencode/awesome-opencode/pull/609 (UIZZE project entry for OpenCode's MCP workflow)
- Awesome MCP ZH PR: https://github.com/yzfly/Awesome-MCP-ZH/pull/463 (Chinese-language MCP directory entry refreshed with the canonical free preview, deterministic `check_ui_slop` behavior, and the separate full 800,000+ workflow scope)
- Awesome ChatGPT Repositories PR: https://github.com/taishi-i/awesome-ChatGPT-repositories/pull/209 (UIZZE anti-UI-slop toolkit entry for coding agents)
- Claude Code Everything guide PR: https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know/pull/30 (adds UIZZE to the quality, review, and debugging skill table)
- LangGPT Awesome Claude Code PR: https://github.com/LangGPT/awesome-claude-code/pull/121
- Chinese Awesome Claude Skills PR: https://github.com/shishirui/awesome-claude-skills-zh/pull/10
- KaranB192 Awesome Claude Skills PR: https://github.com/karanb192/awesome-claude-skills/pull/162 (conflict-repaired and mergeable; the entry now uses free-first copy and separates the optional 800,000+ workflow)

Marketplace status: `v1.2.11` is the current release with valid root Action metadata and the aligned `v1` tag. The authenticated release form was completed, but public Marketplace search still returns zero results, so GitHub-side indexing or publication visibility remains unresolved. An earlier category-save attempt returned a GitHub 500, and GitHub’s public REST and GraphQL APIs expose no supported Marketplace publish mutation.

Already listed:

- GitHub MCP Registry: https://github.com/mcp/uizze/uizze (official registry is active at `io.github.uizze/uizze`, latest `v1.2.11`, with the canonical repository URL; older retired-repository records are deprecated)
- Tons of Skills external source: https://github.com/jeremylongshore/claude-code-plugins-plus-skills/pull/1127 (accepted Path B source for the 2,600+ star Claude Code marketplace; its current sync PR #1223 contains the UIZZE mirror but is conflicting, so `plugins/design/uizze/` remains pending maintainer sync repair)
- GitHub Awesome Copilot skill: https://github.com/github/awesome-copilot/blob/main/skills/anti-ui-slop/SKILL.md
- GitHub Awesome Copilot follow-up PR: https://github.com/github/awesome-copilot/pull/2685 (merged; GitHub's official collection now documents the separate anonymous `check_ui_slop` preview)
- GitHub Awesome Copilot external plugin intake: https://github.com/github/awesome-copilot/issues/2690 (clean automated intake on immutable commit `718db3f8bd1bf38a319de1a7c3b44ed186154b43`; explicit `.github/plugin` path; Agent Plugins v1 spec, install smoke, `vally lint`, and version checks pass; `ready-for-review`, maintainer review pending)
- Awesome Copilot Agents PR: https://github.com/Code-and-Sorts/awesome-copilot-agents/pull/81 (links the maintained UIZZE anti-ui-slop skill in the Development Agent Skills list)
- skills.sh: https://www.skills.sh/site/uizze.com/anti-ui-slop (stable live free-install listing; the page reports 348.5K installs on 2026-08-18, a third-party directory metric rather than a UIZZE product-usage claim; the stale-snapshot reproduction was resolved and closed at https://github.com/vercel-labs/skills/issues/1781)
- Chat2AnyLLM source hub: https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/144 (plugin source entry merged and live); its downstream README now lists `uizze/uizze` as a healthy `.claude-plugin` marketplace source after https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/146 quarantined the malformed source that blocked generation (related maintainer issue: https://github.com/Chat2AnyLLM/awesome-claude-plugins/issues/50); MCP source follow-up: https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/145, with the missing review trigger tracked in https://github.com/Chat2AnyLLM/awesome-repo-configs/pull/147
- HOL Awesome Codex Plugins: https://github.com/hashgraph-online/awesome-codex-plugins (UIZZE is already listed; PR #368 refreshes its public copy and triggers the generator to sync the current v1.2.11 canonical source, with all checks passing)
- Agentic Awesome Skills: https://github.com/sickn33/agentic-awesome-skills/pull/1166 (merged; live entry) with source metadata repair pending in https://github.com/sickn33/agentic-awesome-skills/pull/1176
- Awesome Skills 中文: https://github.com/lingxling/awesome-skills-cn/pull/10 (open canonical-source repair for the Chinese mirror; active UIZZE metadata no longer points to the retired repository)
- OpenCode Skills Collection: https://github.com/FrancoStino/opencode-skills-collection/issues/113 (downstream source-update intake; its generated bundle follows `sickn33/agentic-awesome-skills` and will refresh after the upstream provenance repair)
- VoltAgent Awesome Agent Skills: https://github.com/VoltAgent/awesome-agent-skills/pull/919 (open and mergeable; the one-line entry links directly to `uizze/uizze/tree/main/skills/anti-ui-slop` and preserves the directory's short-description quality bar)
- Skillmatic Awesome Agent Skills: https://github.com/skillmatic-ai/awesome-agent-skills/pull/154 (open and mergeable; the concise entry links directly to the MIT `anti-ui-slop` Skill and preserves the directory's no-duplicate contribution policy)
- Awesome AI Coding Techniques: https://github.com/inmve/awesome-ai-coding-techniques/issues/46 (open technique proposal; documents the portable design contract, required UI states, and bounded finish-gate review as an actionable workflow)
- Agency Agents UI Finish-Gate Reviewer: https://github.com/msitarzewski/agency-agents/blob/main/design/design-ui-finish-gate-reviewer.md (existing UIZZE-related agent in the 145,000+ star directory, merged through PR #742; maintenance PR #792 links the canonical anti-ui-slop Skill and clarifies the free/full 800,000+ scope, with repository checks passing)
- Datawhale easy-vibe: https://github.com/datawhalechina/easy-vibe/pull/141 (18,000+ star bilingual AI-native product course; adds the canonical anti-ui-slop Skill to the English and Simplified Chinese frontend Skill chapters with the free install path and accurate full-product scope; the open PR is mergeable)
- HOL Awesome AI Plugins: https://github.com/hashgraph-online/awesome-ai-plugins/pull/99 (existing UIZZE entry refresh; the README copy now uses the canonical repository, free MIT Skill, no-account preview, and accurate full 800,000+ scope; all contribution checks pass while the directory maintainer reviews it)
- Developer Resources: https://github.com/marcelscruz/dev-resources/pull/1170 (merged UIZZE entry in a 1,327-star collaborative developer-resources list)
- ToolSDK MCP Registry: https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/398 (merged structured MCP registry entry; follow-up PR #458 repairs the lingering retired-repository URL and aligns the free Skill/no-account preview versus full hosted MCP copy; validation and Biome checks pass)
- Wundercorp Awesome MCP: https://github.com/wundercorp/awesome-mcp/pull/47 (follow-up to merged PR #24; repairs the existing design-directory entry to use canonical `uizze/uizze` and the current free/full scope; catalog validation passes)
- Awesome Vibe Coding Resources: https://github.com/acvnace/awesome-vibe-coding-resources/pull/45 (merged UIZZE anti-UI-slop workflow entry in the 267-star resource list); maintenance refresh: https://github.com/acvnace/awesome-vibe-coding-resources/pull/69 (updates the existing line with the free MIT Skill, design-contract/finish-gate workflow, and accurate full 800,000+ scope)
- Awesome Webdesign Tools: https://github.com/nafasebra/awesome-webdesign-tools/pull/59 (merged UIZZE design-tool entry in the 159-star website/CSS tools list)
- Awesome Agent Skills: https://github.com/JayLZhou/Awesome-Agent-Skills/pull/22 (merged UIZZE ecosystem resource in the 136-star Agent Skills list); maintenance refresh: https://github.com/JayLZhou/Awesome-Agent-Skills/pull/29 (updates the existing row with the free MIT Skill, no-account preview, and accurate full 800,000+ scope; clean and mergeable)
- Awesome Inspiration: https://github.com/shsfwork/awesome-inspiration/pull/13 (merged UIZZE entry in the 99-star design and developer inspiration list); maintenance refresh: https://github.com/shsfwork/awesome-inspiration/pull/16 (updates the UI & UX row with the free MIT Skill, design-contract/finish-gate workflow, and accurate full 800,000+ scope; clean and mergeable)
- Awesome Design Resources: https://github.com/darelova/Awesome-Design-Resources-List/pull/19 (merged UIZZE entry in the 64-star design resources list)
