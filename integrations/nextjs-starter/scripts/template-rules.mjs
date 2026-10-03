import { lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const REQUIRED_FILES = [
  ".agents/skills/anti-ui-slop/SKILL.md",
  ".claude/skills/anti-ui-slop/SKILL.md",
  ".cursor/rules/uizze-ui-finish-gate.mdc",
  ".github/copilot-instructions.md",
  ".github/uizze-ui-evidence.json",
  ".github/workflows/uizze-ui-review.yml",
  ".env.example",
  ".uizze/design-contract.md",
  "AGENTS.md",
  "CLAUDE.md",
  "app/error.tsx",
  "app/loading.tsx",
  "app/not-found.tsx",
  "docs/finish-gate.md",
  "docs/mcp.md",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function regularFile(root, relative) {
  const base = path.resolve(root);
  const resolved = path.resolve(base, relative);
  assert(resolved.startsWith(`${base}${path.sep}`), `Required path escapes repository: ${relative}`);
  let current = base;
  let stat;
  for (const component of path.relative(base, resolved).split(path.sep)) {
    current = path.join(current, component);
    stat = await lstat(current);
    assert(!stat.isSymbolicLink(), `Required path must not contain a symlink: ${relative}`);
  }
  assert(stat.isFile(), `Required path must be a regular file: ${relative}`);
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

  const evidence = JSON.parse(await readFile(path.join(root, ".github/uizze-ui-evidence.json"), "utf8"));
  assert(Array.isArray(evidence.files) && evidence.files.length > 0, "Evidence manifest must select regular files");
  assert(evidence.files.every((file) => typeof file === "string" && file.trim()), "Evidence file paths must be non-empty strings");
  assert(new Set(evidence.files).size === evidence.files.length, "Evidence file paths must be unique");
  for (const file of evidence.files) await regularFile(root, file);
  assert(evidence.evidence && typeof evidence.evidence === "object" && !Array.isArray(evidence.evidence), "State evidence must be an object");
  assert(Object.keys(evidence.evidence).length > 0, "State evidence must contain at least one selected-file record");
  for (const [file, record] of Object.entries(evidence.evidence)) {
    assert(evidence.files.includes(file), `State evidence must reference a selected file: ${file}`);
    assert(record && typeof record === "object" && !Array.isArray(record), `State evidence must be a record: ${file}`);
    assert(Array.isArray(record.states) && record.states.length > 0, `State evidence must contain states: ${file}`);
    assert(record.states.every((state) => typeof state === "string" && state.trim()), `State labels must be non-empty strings: ${file}`);
    assert(new Set(record.states).size === record.states.length, `State labels must be unique: ${file}`);
  }

  const env = await readFile(path.join(root, ".env.example"), "utf8");
  const tokenKey = ["UIZZE", "MCP", "TOKEN"].join("_");
  assert(new RegExp(`^${tokenKey}=\\s*$`, "m").test(env), "MCP token placeholder must be empty");

  const tokenAssignment = new RegExp(`${tokenKey}[\\t ]*=[\\t ]*(?:"([^"\\r\\n]*)"|'([^'\\r\\n]*)'|([^\\s"'\\x60{}]+))`, "g");
  for (const file of await textFiles(root)) {
    const contents = await readFile(file, "utf8");
    assert(!/[?&](?:utm_[a-z]+|ref)=/i.test(contents), `Tracking parameter found in ${path.relative(root, file)}`);
    for (const match of contents.matchAll(tokenAssignment)) {
      const value = match[1] ?? match[2] ?? match[3] ?? "";
      assert(!value.trim(), `Non-empty MCP token found in ${path.relative(root, file)}`);
    }
  }

  return { requiredFiles: REQUIRED_FILES.length, evidenceFiles: evidence.files.length };
}
