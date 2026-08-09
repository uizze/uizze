import { fileURLToPath } from 'node:url';

/**
 * to load the built addon in this test Storybook
 */
export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(new URL('../dist/manager.js', import.meta.url))];
}

// Built by `pnpm build` before Storybook loads this local fixture.
// @ts-expect-error The generated preset is intentionally absent during source-only typecheck.
export * from '../dist/preset.js';
