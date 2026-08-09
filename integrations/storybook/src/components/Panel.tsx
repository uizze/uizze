import React, { memo, useMemo, useState } from 'react';
import { useParameter } from 'storybook/manager-api';

import { contractToMarkdown, evaluateContract, normalizeContract } from '../contract';
import { PARAM_KEY } from '../constants';
import type { UizzeParametersInput } from '../types';

interface PanelProps {
  active?: boolean;
}

const shellStyle: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'grid',
  gap: 16,
  maxWidth: 920,
  padding: 20,
};

const cardStyle: React.CSSProperties = {
  border: '1px solid rgba(128, 128, 128, 0.28)',
  borderRadius: 8,
  display: 'grid',
  gap: 10,
  padding: 14,
};

const buttonStyle: React.CSSProperties = {
  background: '#111111',
  border: 0,
  borderRadius: 6,
  color: '#ffffff',
  cursor: 'pointer',
  font: 'inherit',
  fontWeight: 700,
  padding: '9px 12px',
};

export const Panel: React.FC<PanelProps> = memo(function UizzePanel(props: PanelProps) {
  const input = useParameter<UizzeParametersInput | undefined>(PARAM_KEY);
  const contract = useMemo(() => normalizeContract(input), [input]);
  const evaluation = useMemo(() => evaluateContract(contract), [contract]);
  const [copied, setCopied] = useState(false);

  if (!props.active) return null;

  if (contract.disabled) {
    return (
      <section style={shellStyle}>
        <strong>UIZZE Finish Gate is disabled for this story.</strong>
        <span>Remove `parameters.uizze.disable` or set it to `false` to restore the contract.</span>
      </section>
    );
  }

  const copyContract = async () => {
    if (!globalThis.navigator?.clipboard) return;
    await globalThis.navigator.clipboard.writeText(contractToMarkdown(contract));
    setCopied(true);
  };

  return (
    <section aria-label="UIZZE Finish Gate" style={shellStyle}>
      <header>
        <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.08em', margin: 0 }}>STOP UI SLOP</p>
        <h2 style={{ fontSize: 20, margin: '4px 0' }}>Finish the selected story before it ships.</h2>
        <p style={{ margin: 0 }}>
          This check runs inside Storybook. It sends no source, DOM, screenshots, args, or story metadata anywhere.
        </p>
      </header>

      <div style={{ ...cardStyle, borderColor: evaluation.passed ? '#16803c' : '#c4442d' }}>
        <strong>{evaluation.passed ? 'Contract complete' : 'Contract incomplete'}</strong>
        <span>
          {evaluation.passed
            ? 'The evidence, states, rejection rules, and observable finish criteria are documented.'
            : 'Do not call this story finished yet. Resolve every failed check below.'}
        </span>
      </div>

      <div style={cardStyle}>
        {evaluation.checks.map((check) => (
          <div key={check.id} style={{ display: 'grid', gap: 3, gridTemplateColumns: '24px 1fr' }}>
            <span aria-hidden="true">{check.passed ? '✓' : '×'}</span>
            <div>
              <strong>{check.label}</strong>
              <div style={{ marginTop: 2, opacity: 0.76 }}>{check.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {contract.references.length > 0 ? (
        <div style={cardStyle}>
          <strong>Reference evidence</strong>
          {contract.references.map((reference) => (
            <div key={reference.url}>
              <a href={reference.url} rel="noopener noreferrer" target="_blank">
                {reference.label}
              </a>
              {reference.note ? <span> — {reference.note}</span> : null}
            </div>
          ))}
        </div>
      ) : null}

      <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <button onClick={() => void copyContract()} style={buttonStyle} type="button">
          {copied ? 'Copied contract' : 'Copy contract as Markdown'}
        </button>
        <a href="https://uizze.com" rel="noopener noreferrer" target="_blank">
          Find real web and iOS references in UIZZE
        </a>
      </div>
    </section>
  );
});
