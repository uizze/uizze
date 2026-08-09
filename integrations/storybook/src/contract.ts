import { DEFAULT_REQUIRED_STATES } from './constants';
import type {
  ContractEvaluation,
  UizzeContract,
  UizzeParametersInput,
  UizzeReference,
  UizzeReferenceInput,
} from './types';

const MAX_ITEMS = 12;
const MAX_TEXT = 240;
const MAX_URL = 2048;

function boundedText(value: unknown, max = MAX_TEXT): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function boundedList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return Array.from(
    new Set(
      value
        .slice(0, MAX_ITEMS)
        .map((item) => boundedText(item))
        .filter(Boolean),
    ),
  );
}

function normalizeReference(value: unknown): UizzeReference | null {
  if (!value || typeof value !== 'object') return null;

  const input = value as UizzeReferenceInput;
  const label = boundedText(input.label, 100);
  const rawUrl = boundedText(input.url, MAX_URL);
  if (!label || !rawUrl) return null;

  try {
    const url = new URL(rawUrl);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

    const note = boundedText(input.note);
    return { label, url: url.toString(), ...(note ? { note } : {}) };
  } catch {
    return null;
  }
}

export function normalizeContract(value: unknown): UizzeContract {
  const input: UizzeParametersInput = value && typeof value === 'object' ? value : {};
  const rawReferences = Array.isArray(input.references) ? input.references.slice(0, MAX_ITEMS) : [];
  const references = rawReferences
    .map(normalizeReference)
    .filter((reference): reference is UizzeReference => reference !== null);
  const requiredStates = boundedList(input.requiredStates);

  return {
    disabled: input.disable === true,
    screenJob: boundedText(input.screenJob),
    primaryAction: boundedText(input.primaryAction),
    references,
    requiredStates: requiredStates.length ? requiredStates : [...DEFAULT_REQUIRED_STATES],
    forbiddenPatterns: boundedList(input.forbiddenPatterns),
    acceptanceCriteria: boundedList(input.acceptanceCriteria),
    invalidReferenceCount: rawReferences.length - references.length,
  };
}

export function evaluateContract(contract: UizzeContract): ContractEvaluation {
  const normalizedStates = new Set(contract.requiredStates.map((state) => state.toLowerCase()));
  const missingDefaultStates = DEFAULT_REQUIRED_STATES.filter((state) => !normalizedStates.has(state));
  const checks = [
    {
      id: 'screen-job',
      label: 'Screen job is explicit',
      passed: contract.screenJob.length > 0,
      detail: contract.screenJob || 'Add the user outcome this story must make possible.',
    },
    {
      id: 'primary-action',
      label: 'Primary action is explicit',
      passed: contract.primaryAction.length > 0,
      detail: contract.primaryAction || 'Name the single action the hierarchy must protect.',
    },
    {
      id: 'references',
      label: 'Real interface evidence is linked',
      passed: contract.references.length > 0 && contract.invalidReferenceCount === 0,
      detail:
        contract.references.length > 0
          ? `${contract.references.length} valid reference${contract.references.length === 1 ? '' : 's'}${contract.invalidReferenceCount ? `; ${contract.invalidReferenceCount} invalid` : ''}.`
          : 'Add at least one http(s) reference selected for a specific reason.',
    },
    {
      id: 'states',
      label: 'Ready, loading, empty, and error states are covered',
      passed: missingDefaultStates.length === 0,
      detail: missingDefaultStates.length
        ? `Missing: ${missingDefaultStates.join(', ')}.`
        : `${contract.requiredStates.length} required states documented.`,
    },
    {
      id: 'forbidden-patterns',
      label: 'Generic patterns to reject are named',
      passed: contract.forbiddenPatterns.length > 0,
      detail: contract.forbiddenPatterns.length
        ? `${contract.forbiddenPatterns.length} rejection rule${contract.forbiddenPatterns.length === 1 ? '' : 's'}.`
        : 'Name the card-grid, filler-metric, copy, or interaction pattern that must not ship.',
    },
    {
      id: 'acceptance-criteria',
      label: 'The finish gate is observable',
      passed: contract.acceptanceCriteria.length > 0,
      detail: contract.acceptanceCriteria.length
        ? `${contract.acceptanceCriteria.length} observable acceptance criterion${contract.acceptanceCriteria.length === 1 ? '' : 'a'}.`
        : 'Add at least one behavior or rendered result a reviewer can verify.',
    },
  ];

  return { passed: checks.every((check) => check.passed), checks };
}

function markdownList(items: string[]): string {
  return items.length ? items.map((item) => `- ${item}`).join('\n') : '- Not documented';
}

export function contractToMarkdown(contract: UizzeContract): string {
  const references = contract.references.length
    ? contract.references
        .map(
          (reference) =>
            `- [${reference.label.replaceAll('[', '\\[').replaceAll(']', '\\]')}](${reference.url})${reference.note ? ` — ${reference.note}` : ''}`,
        )
        .join('\n')
    : '- Not documented';

  return [
    '# UI finish contract',
    '',
    `**Screen job:** ${contract.screenJob || 'Not documented'}`,
    '',
    `**Primary action:** ${contract.primaryAction || 'Not documented'}`,
    '',
    '## Reference evidence',
    references,
    '',
    '## Required states',
    markdownList(contract.requiredStates),
    '',
    '## Forbidden patterns',
    markdownList(contract.forbiddenPatterns),
    '',
    '## Acceptance criteria',
    markdownList(contract.acceptanceCriteria),
  ].join('\n');
}
