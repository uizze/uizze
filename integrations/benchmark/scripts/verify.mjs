#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  EXPECTED_TASKS,
  assert,
  readJson,
  scoreSubmission,
  taskFingerprint,
  validateRubric,
} from "./benchmark-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const benchmark = await readJson(path.join(root, "benchmark.json"));

assert(benchmark.version === "1.0.0", "Unexpected benchmark version");
assert(JSON.stringify(benchmark.tasks) === JSON.stringify(EXPECTED_TASKS), "Benchmark must contain the three fixed tasks in order");

const loaded = new Map();
for (const slug of EXPECTED_TASKS) {
  const taskDir = path.join(root, "tasks", slug);
  const task = await readJson(path.join(taskDir, "task.json"));
  const rubric = await readJson(path.join(taskDir, "rubric.json"));
  assert(task.slug === slug, `${slug}: task slug does not match directory`);
  assert(task.benchmarkVersion === benchmark.version, `${slug}: benchmark version does not match`);
  assert(task.prompt === "prompt.md", `${slug}: prompt must be prompt.md`);
  assert(Array.isArray(task.artifacts) && task.artifacts.includes("prompt.md"), `${slug}: prompt must be fingerprinted`);
  validateRubric(slug, rubric);
  const fingerprint = await taskFingerprint(taskDir, task, rubric);
  loaded.set(slug, { task, rubric, fingerprint });
  console.log(`${slug}: ${fingerprint}`);
}

const submissionPath = process.argv[2];
if (submissionPath) {
  const submission = await readJson(path.resolve(submissionPath));
  const selected = loaded.get(submission.task);
  assert(selected, `Unknown submission task: ${submission.task}`);
  const total = scoreSubmission(
    submission,
    benchmark,
    selected.task,
    selected.rubric,
    selected.fingerprint,
  );
  console.log(`verified score: ${total}/100`);
} else {
  console.log("benchmark pack verified");
}
