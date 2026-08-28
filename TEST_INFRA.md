# E2E Test Infra: HERA OS Minimal Early-Access Funnel

## Test Philosophy
- Opaque-box, requirement-driven. Derived strictly from `ORIGINAL_REQUEST.md` (R1-R6) and user-facing specifications.
- Methodology: Category-Partition + Boundary Value Analysis + Pairwise Combinatorial + Real-World Workload Testing.

## Feature Inventory
| # | Feature | Source (Requirement) | Tier 1 | Tier 2 | Tier 3 |
|---|---------|----------------------|:------:|:------:|:------:|
| 1 | Nav Entry Point | R1.1 | 5 | 5 | ✓ |
| 2 | Homepage Inline Entry Point | R1.2 | 5 | 5 | ✓ |
| 3 | Persistent Launcher Widget | R1.3 | 5 | 5 | ✓ |
| 4 | Floating Surface & Tooltip | R2 | 5 | 5 | ✓ |
| 5 | Form Validation & Payload | R2, R4 | 5 | 5 | ✓ |
| 6 | State Machine & Success Flow | R2 | 5 | 5 | ✓ |
| 7 | Keyboard Nav & Focus Trap | R2 | 5 | 5 | ✓ |
| 8 | LocalStorage Persistence | R1.3 | 5 | 5 | ✓ |
| 9 | Footer Pixel Agent Injection | R3 | 5 | 5 | ✓ |
| 10 | Security & Git Hygiene | R4, R6 | 5 | 5 | ✓ |

## Test Architecture
- Test Runner: Node.js / Playwright / automated browser test script (`tests/e2e/run-tests.mjs`).
- Pass/Fail Semantics: Exit code 0 indicates 100% pass; non-zero indicates test failures.
- Output Format: Structured JSON & human-readable test matrix summary.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Visitor from Reddit clicks Nav "Join early access", fills full form with tester checkbox, submits successfully, sees footer sprite, reloads page, verifies launcher remains "You're on the list ✓". | F1, F4, F5, F6, F8, F9 | High |
| 2 | Visitor on Homepage scrolls to inline trigger, opens panel, uses Escape key to dismiss without submitting. | F2, F4, F7 | Medium |
| 3 | Visitor opens bottom launcher, inputs invalid email (missing @ or domain), sees inline error, corrects email, submits, observes auto-close and success copy sequence. | F3, F4, F5, F6 | High |
| 4 | Visitor opens panel on narrow viewport (375px/390px), interacts with ⓘ tooltip popover, submits email-only minimal form, verifies responsive bounds. | F4, F5, F6, F7 | Medium |
| 5 | Visitor simulates offline/network error during submission, receives clean retry error state without crash, retries when connected. | F4, F5, F6 | High |

## Coverage Thresholds
- Tier 1 (Feature Coverage): ≥50 test cases (≥5 per feature across 10 features)
- Tier 2 (Boundary & Corner Cases): ≥50 test cases
- Tier 3 (Cross-Feature Combinations): ≥10 pairwise interaction tests
- Tier 4 (Real-World Scenarios): ≥5 realistic end-to-end user workflows
- **Total Minimum Target: ≥115 test cases**
