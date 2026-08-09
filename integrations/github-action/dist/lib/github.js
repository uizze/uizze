'use strict';

const fs = require('node:fs');

function commandValue(value) {
  return String(value)
    .replaceAll('%', '%25')
    .replaceAll('\r', '%0D')
    .replaceAll('\n', '%0A')
    .replaceAll(':', '%3A')
    .replaceAll(',', '%2C');
}

function annotation(finding, write = console.log, forcedLevel = null) {
  const level = forcedLevel || (finding.severity === 'error' ? 'error' : 'warning');
  const props = [
    `file=${commandValue(finding.file)}`,
    `line=${finding.line}`,
    `col=${finding.column}`,
    `title=${commandValue(`UIZZE ${finding.ruleId}`)}`,
  ].join(',');
  write(`::${level} ${props}::${commandValue(finding.message)}`);
}

function setOutput(name, value, outputPath = process.env.GITHUB_OUTPUT) {
  if (!outputPath) return;
  fs.appendFileSync(outputPath, `${name}=${String(value)}\n`, 'utf8');
}

module.exports = { annotation, commandValue, setOutput };
