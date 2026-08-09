import { lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";

export const REQUIRED_FILES = [
  ".agents/skills/anti-ui-slop/SKILL.md",
  ".claude/skills/anti-ui-slop/SKILL.md",
  ".cursor/rules/uizze-ui-finish-gate.mdc",
  ".github/copilot-instructions.md",
  ".github/uizze-ui-evidence.json",
  ".github/workflows/uizze-ui-review.yml",
  ".uizze/design-contract.md",
  "AGENTS.md",
  "CLAUDE.md",
  "app/error.tsx",
  "app/loading.tsx",
  "app/not-found.tsx",
  "components/ReleaseDesk.tsx",
  "docs/finish-gate.md",
  "docs/mcp.md",
];

const CONTRACT_HEADINGS = [
  "## Screen job",
  "## User and moment",
  "## Primary action",
  "## Product evidence",
  "## Content hierarchy",
  "## Allowed components and tokens",
  "## Required states",
  "## Responsive decisions",
  "## Accessibility contract",
  "## Forbidden generic patterns",
  "## Finish criteria",
];

export function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function validateWorkflowText(workflow) {
  assert(workflow.includes("workflow_call:"), "UI review workflow must be reusable with workflow_call");
  assert(
    workflow.includes("uses: uizze/uizze@v1"),
    "UI review workflow must pin the immutable UIZZE gate v1.0.9 commit",
  );
  assert(workflow.includes("manifest: .github/uizze-ui-evidence.json"), "UI review workflow must use checked-in state evidence");
  assert(workflow.includes("fail-on: error"), "UI review workflow must fail on error findings");
  assert(/permissions:\n\s+contents: read/.test(workflow), "UI review workflow must keep read-only contents permission");
}

export function validateContractText(contract) {
  for (const heading of CONTRACT_HEADINGS) {
    assert(contract.includes(heading), `Design contract is missing ${heading}`);
  }
  for (const state of ["Loading", "Empty", "Error", "Success", "Validation", "Interaction"]) {
    assert(contract.includes(`- ${state}:`), `Design contract is missing ${state} state`);
  }
}

async function regularFile(root, relative) {
  const resolved = path.resolve(root, relative);
  assert(resolved.startsWith(`${path.resolve(root)}${path.sep}`), `Required path escapes repository: ${relative}`);
  const stat = await lstat(resolved);
  assert(stat.isFile() && !stat.isSymbolicLink(), `Required path must be a regular file: ${relative}`);
}

async function textFiles(directory) {
  const collected = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", ".next", "node_modules"].includes(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) collected.push(...await textFiles(absolute));
    if (entry.isFile() && /\.(?:md|mdc|json|ya?ml|tsx?|jsx?|css|mjs|example)$/.test(entry.name)) collected.push(absolute);
  }
  return collected;
}

export async function validateTemplate(root) {
  for (const file of REQUIRED_FILES) await regularFile(root, file);

  const codexSkill = await readFile(path.join(root, ".agents/skills/anti-ui-slop/SKILL.md"), "utf8");
  const claudeSkill = await readFile(path.join(root, ".claude/skills/anti-ui-slop/SKILL.md"), "utf8");
  assert(codexSkill === claudeSkill, "Codex and Claude skill copies must remain identical");
  assert(codexSkill.includes("Use this workflow for free"), "Bundled skill must preserve the free workflow");

  const contract = await readFile(path.join(root, ".uizze/design-contract.md"), "utf8");
  validateContractText(contract);

  const workflow = await readFile(path.join(root, ".github/workflows/uizze-ui-review.yml"), "utf8");
  validateWorkflowText(workflow);

  const evidence = JSON.parse(await readFile(path.join(root, ".github/uizze-ui-evidence.json"), "utf8"));
  assert(Array.isArray(evidence.files) && evidence.files.includes("components/ReleaseDesk.tsx"), "Evidence manifest must inspect the example UI");
  assert(["loading", "empty", "error", "success"].every((state) => evidence.evidence["components/ReleaseDesk.tsx"].states.includes(state)), "Example UI evidence must include four explicit states");

  const env = await readFile(path.join(root, ".env.example"), "utf8");
  const tokenKey = ["UIZZE", "MCP", "TOKEN"].join("_");
  assert(new RegExp(`^${tokenKey}=\\s*$`, "m").test(env), "MCP token placeholder must be empty");
  assert(env.includes("UIZZE_MCP_URL=https://uizze.com/mcp"), "MCP endpoint placeholder is missing");

  const tokenAssignment = new RegExp(`${tokenKey}=[^\\s\"'}]+`);
  for (const file of await textFiles(root)) {
    const contents = await readFile(file, "utf8");
    assert(!/[?&](?:utm_[a-z]+|ref)=/i.test(contents), `Tracking parameter found in ${path.relative(root, file)}`);
    assert(!tokenAssignment.test(contents), `Non-empty MCP token found in ${path.relative(root, file)}`);
  }

  return { requiredFiles: REQUIRED_FILES.length, evidenceFiles: evidence.files.length };
}
