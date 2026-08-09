export interface UizzeReferenceInput {
  label?: unknown;
  url?: unknown;
  note?: unknown;
}

export interface UizzeParametersInput {
  disable?: unknown;
  screenJob?: unknown;
  primaryAction?: unknown;
  references?: unknown;
  requiredStates?: unknown;
  forbiddenPatterns?: unknown;
  acceptanceCriteria?: unknown;
}

export interface UizzeReference {
  label: string;
  url: string;
  note?: string;
}

export interface UizzeContract {
  disabled: boolean;
  screenJob: string;
  primaryAction: string;
  references: UizzeReference[];
  requiredStates: string[];
  forbiddenPatterns: string[];
  acceptanceCriteria: string[];
  invalidReferenceCount: number;
}

export interface ContractCheck {
  id: string;
  label: string;
  passed: boolean;
  detail: string;
}

export interface ContractEvaluation {
  passed: boolean;
  checks: ContractCheck[];
}
