'use strict';

const fs = require('node:fs');

function escapeCell(value) {
  return String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
}

function buildSummary({ files, findings, skipped, showUizzeLink }) {
  const errors = findings.filter((item) => item.severity === 'error').length;
  const warnings = findings.length - errors;
  const lines = [
    '## UIZZE UI Slop Gate',
    '',
    `Scanned **${files.length}** changed frontend file${files.length === 1 ? '' : 's'}: **${errors}** error${errors === 1 ? '' : 's'}, **${warnings}** warning${warnings === 1 ? '' : 's'}.`,
  ];
  if (skipped.length) lines.push('', `Skipped ${skipped.length} unreadable or oversized file${skipped.length === 1 ? '' : 's'}.`);
  if (findings.length) {
    lines.push('', '| Severity | Rule | Location | Finding |', '| --- | --- | --- | --- |');
    for (const item of findings.slice(0, 100)) {
      lines.push(`| ${item.severity} | ${escapeCell(item.ruleId)} | ${escapeCell(item.file)}:${item.line} | ${escapeCell(item.message)} |`);
    }
    if (findings.length > 100) lines.push('', `${findings.length - 100} additional findings were emitted as workflow annotations.`);
  } else if (files.length) {
    lines.push('', 'No configured concrete UI finish risks were found. This is a focused source check, not a visual or accessibility audit.');
  } else {
    lines.push('', 'No changed frontend files were available to inspect.');
  }
  if (showUizzeLink && files.length) {
    lines.push('', 'Use the [free UIZZE UI workflows](https://github.com/uizze/uizze/blob/main/examples/agent-workflows.md) to work through these findings with your coding agent. For focused reference search, [explore UIZZE](https://uizze.com/?utm_source=github&utm_medium=action&utm_campaign=discovery&utm_content=job_summary).');
  }
  return `${lines.join('\n')}\n`;
}

function writeSummary(summary, summaryPath = process.env.GITHUB_STEP_SUMMARY) {
  if (summaryPath) fs.appendFileSync(summaryPath, summary, 'utf8');
}

function shouldFail(findings, failOn) {
  if (failOn === 'never') return false;
  if (failOn === 'warning') return findings.length > 0;
  return findings.some((item) => item.severity === 'error');
}

module.exports = { buildSummary, shouldFail, writeSummary };
