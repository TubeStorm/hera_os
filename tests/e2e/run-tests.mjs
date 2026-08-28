#!/usr/bin/env node
/**
 * Master E2E Test Suite Runner for HERA OS Minimal Early-Access Funnel
 * 
 * Executes the 4-tier opaque-box test plan:
 * - Tier 1: Feature Coverage (F1 to F10, ≥50 tests)
 * - Tier 2: Boundary & Corner Cases (≥50 tests)
 * - Tier 3: Cross-Feature Combinations (≥10 tests)
 * - Tier 4: Real-World Application Scenarios (≥5 tests)
 * 
 * Usage: node tests/e2e/run-tests.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TestRunner } from './harness.mjs';
import { registerTier1Tests } from './tier1-features.mjs';
import { registerTier2Tests } from './tier2-boundary.mjs';
import { registerTier3Tests } from './tier3-combinations.mjs';
import { registerTier4Tests } from './tier4-scenarios.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log('\n' + '='.repeat(80));
  console.log('  HERA OS — EARLY ACCESS FUNNEL E2E AUTOMATED TEST SUITE');
  console.log('  Specification: ORIGINAL_REQUEST.md (R1-R6) | Architecture: PROJECT.md');
  console.log('='.repeat(80) + '\n');

  const runner = new TestRunner('HERA Early Access E2E Test Suite');

  // Register all tiers
  registerTier1Tests(runner);
  registerTier2Tests(runner);
  registerTier3Tests(runner);
  registerTier4Tests(runner);

  console.log(`[Test Runner] Initialized ${runner.suites.length} test suites with 4-tier coverage plan.`);
  console.log('[Test Runner] Executing test plan...\n');

  const summary = await runner.run();

  // Print Suite-by-Suite Breakdown
  console.log('-'.repeat(80));
  console.log(
    ' Suite Name'.padEnd(52) +
    'Tests'.padStart(8) +
    'Pass'.padStart(8) +
    'Fail'.padStart(8) +
    'Time'.padStart(8)
  );
  console.log('-'.repeat(80));

  for (const s of summary.suites) {
    const statusMark = s.failed === 0 ? '✓' : '✗';
    const name = ` ${statusMark} ${s.name}`;
    const truncatedName = name.length > 50 ? name.slice(0, 47) + '...' : name;
    console.log(
      truncatedName.padEnd(52) +
      String(s.total).padStart(8) +
      String(s.passed).padStart(8) +
      String(s.failed).padStart(8) +
      `${s.duration}ms`.padStart(8)
    );
  }
  console.log('-'.repeat(80));

  // Print Tier Aggregation Matrix
  const tier1Suites = summary.suites.filter((s) => s.name.startsWith('Tier 1'));
  const tier2Suites = summary.suites.filter((s) => s.name.startsWith('Tier 2'));
  const tier3Suites = summary.suites.filter((s) => s.name.startsWith('Tier 3'));
  const tier4Suites = summary.suites.filter((s) => s.name.startsWith('Tier 4'));

  const countTier = (suites) => ({
    total: suites.reduce((acc, s) => acc + s.total, 0),
    passed: suites.reduce((acc, s) => acc + s.passed, 0),
    failed: suites.reduce((acc, s) => acc + s.failed, 0),
  });

  const t1 = countTier(tier1Suites);
  const t2 = countTier(tier2Suites);
  const t3 = countTier(tier3Suites);
  const t4 = countTier(tier4Suites);

  console.log('\n  COVERAGE MATRIX SUMMARY:');
  console.log(`  Tier 1 (Feature Coverage F1-F10):    ${t1.passed}/${t1.total} Passed (Target: ≥50) ${t1.passed >= 50 && t1.failed === 0 ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  Tier 2 (Boundary & Corner Cases):    ${t2.passed}/${t2.total} Passed (Target: ≥50) ${t2.passed >= 50 && t2.failed === 0 ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  Tier 3 (Cross-Feature Combinations): ${t3.passed}/${t3.total} Passed (Target: ≥10) ${t3.passed >= 10 && t3.failed === 0 ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  Tier 4 (Real-World User Journeys):   ${t4.passed}/${t4.total} Passed (Target: ≥5)  ${t4.passed >= 5 && t4.failed === 0 ? '✓ PASS' : '✗ FAIL'}`);
  console.log(`  -------------------------------------------------------------`);
  console.log(`  TOTAL TEST CASES EXECUTED:           ${summary.passed}/${summary.total} Passed in ${summary.duration}ms\n`);

  // Write Results JSON
  const resultsPath = path.join(__dirname, 'results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(summary, null, 2), 'utf8');
  console.log(`[Test Runner] Structured JSON test results saved to: ${resultsPath}`);

  if (summary.failed > 0) {
    console.error('\n' + '!'.repeat(80));
    console.error(`  FAILURES DETECTED: ${summary.failed} test(s) failed.`);
    console.error('!'.repeat(80));
    for (const f of summary.failures) {
      console.error(`\n[FAIL] ${f.suite} > ${f.test}`);
      console.error(`  Error: ${f.error.message}`);
      if (f.error.stack) {
        console.error(`  ${f.error.stack.split('\n')[1] || ''}`);
      }
    }
    process.exit(1);
  } else {
    console.log('='.repeat(80));
    console.log('  STATUS: 100% PASS — ALL 4 TIERS SATISFIED WITH EXIT CODE 0');
    console.log('='.repeat(80) + '\n');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('[Test Runner] Fatal Unhandled Exception:', err);
  process.exit(1);
});
