import assert from "node:assert/strict";
import test from "node:test";
import {
  scoreSubmission,
  validateRubric,
} from "../scripts/benchmark-lib.mjs";

const benchmark = {
  version: "1.0.0",
  requiredViewports: [{ name: "desktop" }, { name: "mobile" }],
};
const task = { slug: "onboarding" };
const rubric = {
  task: "onboarding",
  criteria: Array.from({ length: 10 }, (_, index) => ({
    id: `criterion-${index}`,
    requirement: `Observable requirement number ${index} is visibly satisfied.`,
    weight: 10,
  })),
};

function submission(overrides = {}) {
  return {
    benchmarkVersion: "1.0.0",
    task: "onboarding",
    taskFingerprint: "abc123",
    candidate: { name: "Example", version: "1.0" },
    run: {
      date: "2026-07-22",
      elapsedMinutes: 30,
      implementationCommit: "deadbeef",
      networkAccess: false,
    },
    evaluation: {
      evaluator: "Reviewer",
      viewportsChecked: ["desktop", "mobile"],
      scores: Object.fromEntries(rubric.criteria.map((item) => [
        item.id,
        { value: 1, evidence: "Visible in the rendered implementation." },
      ])),
      claimedTotal: 100,
    },
    ...overrides,
  };
}

test("the rubric contains ten unique 10-point criteria", () => {
  assert.equal(validateRubric("onboarding", rubric).size, 10);
});

test("a complete evidence submission scores deterministically", () => {
  assert.equal(scoreSubmission(submission(), benchmark, task, rubric, "abc123"), 100);
});

test("a non-binary score is rejected", () => {
  const invalid = submission();
  invalid.evaluation.scores["criterion-0"].value = 0.5;
  assert.throws(
    () => scoreSubmission(invalid, benchmark, task, rubric, "abc123"),
    /value must be 0 or 1/,
  );
});

test("a changed task fingerprint is rejected", () => {
  assert.throws(
    () => scoreSubmission(submission(), benchmark, task, rubric, "different"),
    /taskFingerprint does not match/,
  );
});
