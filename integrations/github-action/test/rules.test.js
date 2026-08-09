'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  checkGenericDashboard,
  checkHardcodedColors,
  checkInertControls,
  checkMissingStates,
  inspectFile,
} = require('../src/lib/rules');

test('flags concrete inert control markers', () => {
  const findings = checkInertControls('src/A.tsx', '<a href="#">Open</a>\n<button onClick={() => {}}>Save</button>');
  assert.equal(findings.length, 2);
  assert.ok(findings.every((item) => item.ruleId === 'inert-control'));
  assert.equal(findings[1].line, 2);
});

test('flags hardcoded utility and inline colors but not semantic tokens', () => {
  const content = '<div className="bg-white text-foreground" style={{ color: "#fff" }} />';
  assert.equal(checkHardcodedColors('src/A.tsx', content).length, 2);
  assert.equal(checkHardcodedColors('src/theme.css', '.notice { background-color: #fff; }').length, 1);
});

test('does not treat a non-empty click handler as inert', () => {
  assert.equal(checkInertControls('src/A.tsx', '<button onClick={() => save()}>Save</button>').length, 0);
});

test('requires data-driven and rendered UI before checking states', () => {
  const content = 'export function List(){ const x = useQuery(key); return <ul>{x.data.map(v => <li>{v}</li>)}</ul> }';
  const finding = checkMissingStates('src/List.tsx', content, {});
  assert.equal(finding.length, 1);
  assert.match(finding[0].message, /loading, empty, error/);
  assert.equal(checkMissingStates('src/List.tsx', content, { states: ['loading', 'empty', 'error'] }).length, 0);
});

test('generic dashboard rule requires a combination of cues', () => {
  assert.equal(checkGenericDashboard('src/A.tsx', '<main><h1>Dashboard</h1></main>').length, 0);
  assert.equal(checkGenericDashboard('src/A.tsx', '<main class="dashboard grid grid-cols-3"><Card>Total Revenue</Card></main>').length, 1);
});

test('a product-specific static component remains clean', () => {
  assert.deepEqual(inspectFile('src/Receipt.tsx', '<article className="receipt"><h1>Order receipt</h1></article>'), []);
});
