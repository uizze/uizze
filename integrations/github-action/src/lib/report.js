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
    lines.push('', 'Need a visual second opinion? Use the free [UI Slop Score](https://uizze.com/tools/ui-slop-score): add one rendered screen, get concrete evidence and a PR-ready repair note. No signup; the screenshot is processed transiently.');
    lines.push('', 'Want to inspect a real same-prompt case first? [Open the recorded comparison](https://benchmark.uizze.com/recordings/billing-settings-v1/): raw captures, diffs, and a narrow 96/100 to 98/100 result—not a benchmark or quality guarantee.');
    lines.push('', 'Need a context-aware finish pass? Add UIZZE\'s free agent preview:');
    lines.push('', '`codex mcp add uizze-preview --url https://uizze.com/mcp/preview`');
    lines.push('', 'Then ask it to run `check_ui_slop` on rendered HTML/CSS. This is optional; the GitHub Action itself never uploads checkout files.');
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
