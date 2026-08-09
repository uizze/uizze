#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateTemplate } from "./template-rules.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const result = await validateTemplate(root);
console.log(`template verified: ${result.requiredFiles} required files, ${result.evidenceFiles} evidence files`);
