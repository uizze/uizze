import { createHash } from "node:crypto";
import { lstat, readFile, realpath } from "node:fs/promises";
import path from "node:path";

export const EXPECTED_TASKS = [
  "onboarding",
  "finance-workflow",
  "developer-dashboard",
];

export async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

export function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export async function safeFiles(root, entries) {
  const rootReal = await realpath(root);
  const files = [];

  for (const entry of entries) {
    assert(typeof entry === "string" && entry.length > 0, "Artifact paths must be non-empty strings");
    assert(!path.isAbsolute(entry), `Artifact path must be relative: ${entry}`);
    const resolved = path.resolve(rootReal, entry);
    assert(resolved.startsWith(`${rootReal}${path.sep}`), `Artifact escapes task directory: ${entry}`);
    const stat = await lstat(resolved);
    assert(stat.isFile() && !stat.isSymbolicLink(), `Artifact must be a regular file: ${entry}`);
    const resolvedReal = await realpath(resolved);
    assert(resolvedReal.startsWith(`${rootReal}${path.sep}`), `Artifact resolves outside task directory: ${entry}`);
    files.push(resolvedReal);
  }

  return files.sort();
}

export async function taskFingerprint(taskDir, task, rubric) {
  const artifactFiles = await safeFiles(taskDir, task.artifacts);
  const hash = createHash("sha256");
  hash.update(JSON.stringify(task));
  hash.update(JSON.stringify(rubric));
  for (const file of artifactFiles) {
    hash.update(path.relative(taskDir, file));
    hash.update(await readFile(file));
  }
  return hash.digest("hex");
}

export function validateRubric(taskSlug, rubric) {
  assert(rubric.task === taskSlug, `${taskSlug}: rubric task does not match`);
  assert(Array.isArray(rubric.criteria) && rubric.criteria.length === 10, `${taskSlug}: rubric must have 10 criteria`);
  const ids = new Set();
  let total = 0;
  for (const criterion of rubric.criteria) {
    assert(/^[a-z][a-z0-9-]+$/.test(criterion.id), `${taskSlug}: invalid criterion id`);
    assert(!ids.has(criterion.id), `${taskSlug}: duplicate criterion ${criterion.id}`);
    assert(typeof criterion.requirement === "string" && criterion.requirement.length >= 20, `${taskSlug}: criterion needs an observable requirement`);
    assert(criterion.weight === 10, `${taskSlug}: every criterion must weigh 10 points`);
    ids.add(criterion.id);
    total += criterion.weight;
  }
  assert(total === 100, `${taskSlug}: rubric weights must total 100`);
  return ids;
}

export function scoreSubmission(submission, benchmark, task, rubric, fingerprint) {
  assert(submission.benchmarkVersion === benchmark.version, "Submission benchmarkVersion does not match");
  assert(submission.task === task.slug, "Submission task does not match");
  assert(submission.taskFingerprint === fingerprint, "Submission taskFingerprint does not match checked-in task");
  assert(submission.candidate?.name && submission.candidate?.version, "Candidate name and version are required");
  assert(/^\d{4}-\d{2}-\d{2}$/.test(submission.run?.date ?? ""), "Run date must be YYYY-MM-DD");
  assert(Number.isFinite(submission.run?.elapsedMinutes) && submission.run.elapsedMinutes >= 0, "elapsedMinutes must be non-negative");
  assert(typeof submission.run?.networkAccess === "boolean", "networkAccess must be boolean");
  assert(typeof submission.run?.implementationCommit === "string" && submission.run.implementationCommit.length > 0, "implementationCommit is required");
  assert(submission.evaluation?.evaluator, "Evaluator is required");
  assert(Array.isArray(submission.evaluation?.viewportsChecked), "viewportsChecked is required");
  for (const viewport of benchmark.requiredViewports.map((item) => item.name)) {
    assert(submission.evaluation.viewportsChecked.includes(viewport), `Missing required viewport: ${viewport}`);
  }

  const entries = Object.entries(submission.evaluation.scores ?? {});
  assert(entries.length === rubric.criteria.length, "Submission must score every rubric criterion exactly once");
  const allowed = new Map(rubric.criteria.map((criterion) => [criterion.id, criterion]));
  let total = 0;
  for (const [id, result] of entries) {
    const criterion = allowed.get(id);
    assert(criterion, `Unknown rubric criterion: ${id}`);
    assert(result.value === 0 || result.value === 1, `${id}: value must be 0 or 1`);
    assert(typeof result.evidence === "string" && result.evidence.trim().length >= 10, `${id}: evidence must be at least 10 characters`);
    total += result.value * criterion.weight;
    allowed.delete(id);
  }
  assert(allowed.size === 0, `Missing rubric criteria: ${[...allowed.keys()].join(", ")}`);
  assert(submission.evaluation.claimedTotal === total, `claimedTotal ${submission.evaluation.claimedTotal} does not match calculated total ${total}`);
  return total;
}
