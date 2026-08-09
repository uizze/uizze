'use strict';

function location(content, index) {
  const before = content.slice(0, index);
  const lines = before.split('\n');
  return { line: lines.length, column: lines.at(-1).length + 1 };
}

function finding(file, content, index, ruleId, severity, message) {
  return { file, ...location(content, Math.max(0, index)), ruleId, severity, message };
}

function statesEvidence(evidence) {
  const states = Array.isArray(evidence?.states) ? evidence.states : [];
  return new Set(states.map((state) => String(state).toLowerCase()));
}

function checkInertControls(file, content) {
  const findings = [];
  const patterns = [
    { regex: /href\s*=\s*["']#["']/g, message: 'Placeholder href="#" leaves this control without a destination.' },
    { regex: /(?:onClick|onSubmit)\s*=\s*\{\s*(?:undefined|null|\(\s*\)\s*=>\s*(?:\{\s*\}|undefined|null))\s*\}/g, message: 'This interaction handler is empty or undefined.' },
    { regex: /<(?:button|a)\b[^>]*>[^<]*(?:TODO|coming soon|not implemented)[^<]*<\//gi, message: 'This visible control is explicitly marked unfinished.' },
  ];
  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern.regex)) {
      findings.push(finding(file, content, match.index, 'inert-control', 'error', pattern.message));
    }
  }
  return findings;
}

function checkHardcodedColors(file, content) {
  const findings = [];
  const patterns = [
    /(?:color|backgroundColor|borderColor)\s*:\s*["'`]\s*(?:#[0-9a-f]{3,8}|rgba?\(|hsla?\()/gi,
    /\b(?:bg|text|border)-(?:white|black|(?:gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))\b/g,
  ];
  if (/\.(?:css|scss|sass)$/i.test(file)) {
    patterns.push(/\b(?:color|background|background-color|border-color)\s*:\s*(?:#[0-9a-f]{3,8}|rgba?\(|hsla?\()/gi);
  }
  for (const regex of patterns) {
    for (const match of content.matchAll(regex)) {
      findings.push(finding(
        file,
        content,
        match.index,
        'design-token-drift',
        'warning',
        `Hardcoded color "${match[0]}" may bypass the product design system; prefer an existing semantic token.`,
      ));
    }
  }
  return findings;
}

function checkMissingStates(file, content, evidence) {
  const looksDataDriven = /\b(?:fetch\s*\(|useQuery\s*\(|useSWR\s*\(|useLoaderData\s*\(|axios\.(?:get|post)\s*\()/m.test(content);
  const rendersUI = /<\w|return\s*\(/m.test(content);
  if (!looksDataDriven || !rendersUI) return [];

  const lower = content.toLowerCase();
  const covered = statesEvidence(evidence);
  const missing = [
    ['loading', /\b(?:loading|pending|skeleton)\b/],
    ['empty', /\b(?:empty|no results|no items|length\s*===?\s*0)\b/],
    ['error', /\b(?:error|failed|failure|catch\s*\()/],
  ].filter(([name, marker]) => !covered.has(name) && !marker.test(lower)).map(([name]) => name);

  if (!missing.length) return [];
  const index = content.search(/\b(?:fetch\s*\(|useQuery\s*\(|useSWR\s*\(|useLoaderData\s*\(|axios\.(?:get|post)\s*\()/m);
  return [finding(
    file,
    content,
    index,
    'missing-ui-states',
    'warning',
    `Data-driven UI has no visible ${missing.join(', ')} state marker. Add the state or record reviewed evidence in the manifest.`,
  )];
}

function checkGenericDashboard(file, content) {
  const lower = content.toLowerCase();
  const cues = [
    /\bdashboard\b/.test(lower),
    /\b(?:grid-cols-[34]|repeat\s*\(\s*[34]\s*,)/.test(lower),
    /\b(?:card|stat-card|metric-card)\b/.test(lower),
    /\b(?:total revenue|active users|conversion rate|overview)\b/.test(lower),
  ];
  if (cues.filter(Boolean).length < 3) return [];
  const index = lower.search(/dashboard|grid-cols-[34]|stat-card|metric-card|total revenue|active users|conversion rate|overview/);
  return [finding(
    file,
    content,
    index,
    'generic-dashboard-cues',
    'warning',
    'This screen combines several generic dashboard cues. Verify its hierarchy and metrics are specific to the product task.',
  )];
}

function inspectFile(file, content, evidence = {}) {
  return [
    ...checkInertControls(file, content),
    ...checkHardcodedColors(file, content),
    ...checkMissingStates(file, content, evidence),
    ...checkGenericDashboard(file, content),
  ];
}

module.exports = {
  checkGenericDashboard,
  checkHardcodedColors,
  checkInertControls,
  checkMissingStates,
  inspectFile,
  location,
};
