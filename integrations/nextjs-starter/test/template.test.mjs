import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  validateContractText,
  validateTemplate,
  validateWorkflowText,
} from "../scripts/template-rules.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("the checked-in starter contract is complete", async () => {
  const result = await validateTemplate(root);
  assert.equal(result.requiredFiles, 15);
  assert.equal(result.evidenceFiles, 5);
});

test("a workflow without the released action is rejected", () => {
  assert.throws(() => validateWorkflowText("workflow_call:\npermissions:\n  contents: read\n"), /immutable UIZZE gate/);
});

test("a contract without required states is rejected", () => {
  assert.throws(() => validateContractText("## Screen job"), /User and moment/);
});
