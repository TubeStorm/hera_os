# Test Readiness & Coverage Matrix: HERA OS Early Access Funnel

> **Status:** ✅ TEST READY — All 4 Tiers Verified & Passing (127 / 127 Tests, Exit Code 0)  
> **Target Specification:** `ORIGINAL_REQUEST.md` (R1-R6)  
> **Architecture & Contracts:** `PROJECT.md` § Milestones & Interface Contracts  
> **Test Infra Definition:** `TEST_INFRA.md`  
> **Working Directory:** `D:\Documents\favour-ai-product-portfolio`  
> **Active Branch:** `portfolio-week1`  

---

## 1. Test Architecture & Execution

The HERA Early Access Funnel test suite is an automated, opaque-box, requirement-driven verification engine implemented in pure Node.js ESM (`node >=18.17.0`) with zero external test framework dependencies. It exercises the full 4-tier test plan across DOM lifecycle, event bubbling, state machines, Formspree API contracts, storage persistence, canvas animations, boundary condition fuzzing, keyboard accessibility, and real-world user journeys.

### Quick Run Commands

```bash
# Run the complete 4-tier E2E test suite (127 tests)
node tests/e2e/run-tests.mjs

# Expected observable output:
# Exit code: 0
# Coverage: 100% PASS (127/127 tests passing)
```

---

## 2. Test Coverage Matrix

| Tier | Category | Target Threshold | Tests Implemented | Pass / Fail | Pass Rate | Status |
|:---|:---|:---:|:---:|:---:|:---:|:---:|
| **Tier 1** | Feature Coverage (F1 to F10) | ≥50 tests (≥5/feat) | **60 tests** (6/feat) | 60 / 0 | 100% | ✅ PASS |
| **Tier 2** | Boundary & Corner Cases | ≥50 tests | **50 tests** | 50 / 0 | 100% | ✅ PASS |
| **Tier 3** | Cross-Feature Combinations | ≥10 tests | **12 tests** | 12 / 0 | 100% | ✅ PASS |
| **Tier 4** | Real-World User Journeys | ≥5 workflows | **5 scenarios** | 5 / 0 | 100% | ✅ PASS |
| **TOTAL** | **Full 4-Tier Test Suite** | **≥115 tests** | **127 tests** | **127 / 0** | **100%** | ✅ **READY** |

---

## 3. Tier 1: Feature Breakdown (F1 – F10)

| # | Feature | Requirement Source | Test Module | Test Cases | Status |
|:---|:---|:---:|:---|:---:|:---:|
| **F1** | Nav Entry Point | R1.1 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F1.1` - `T1.F1.6`) | ✅ PASS |
| **F2** | Homepage Inline Entry Point | R1.2 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F2.1` - `T1.F2.6`) | ✅ PASS |
| **F3** | Persistent Launcher Widget | R1.3 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F3.1` - `T1.F3.6`) | ✅ PASS |
| **F4** | Floating Surface & Tooltip `ⓘ` | R2 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F4.1` - `T1.F4.6`) | ✅ PASS |
| **F5** | Form Fields & Validation | R2, R4 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F5.1` - `T1.F5.6`) | ✅ PASS |
| **F6** | State Machine & Success Sequence | R2 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F6.1` - `T1.F6.6`) | ✅ PASS |
| **F7** | Keyboard Navigation & Focus Trap | R2 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F7.1` - `T1.F7.6`) | ✅ PASS |
| **F8** | LocalStorage Persistence | R1.3 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F8.1` - `T1.F8.6`) | ✅ PASS |
| **F9** | Footer Pixel Agent Injection | R3 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F9.1` - `T1.F9.6`) | ✅ PASS |
| **F10** | Security & Git Hygiene | R4, R6 | `tests/e2e/tier1-features.mjs` | 6 tests (`T1.F10.1` - `T1.F10.6`) | ✅ PASS |

---

## 4. Tier 2: Boundary & Corner Cases (50 Tests)

- **Email Format Fuzzing (`T2.1` – `T2.14`, 14 tests):** Empty string, whitespace-only, missing `@`, missing domain, missing TLD, multiple `@`, leading/trailing whitespace trimming, uppercase characters, plus-addressing (`user+tag@domain`), subdomains, RFC special characters, 254-character boundary limits, dots in local parts, hyphens in domain names.
- **Name Field Variations (`T2.15` – `T2.21`, 7 tests):** Optional omission from payload, whitespace-only normalization, extreme length (1000 characters), Unicode emojis (`Favour Diokpo 🚀✨`), quote escaping (`O'Connor "Founder" O`Reilly`), RTL Arabic script, accented European characters (`René Müller`).
- **Use Case Textarea (`T2.22` – `T2.28`, 7 tests):** Optional omission, whitespace trimming, multi-line CRLF preservation, extreme length (2500+ characters), raw JSON formatting payload encapsulation, SQL injection / format string safety, markdown formatting preservation.
- **Early Tester Checkbox (`T2.29` – `T2.32`, 4 tests):** Default unchecked (`false`), checked (`true`), rapid toggle state parity, reset to unchecked after successful submission.
- **Rapid Interaction & Concurrency (`T2.33` – `T2.37`, 5 tests):** Rapid double-click submit debouncing (1 request only), rapid launcher toggles, repeated Escape key presses, 25 consecutive open/close cycles without memory leak, validation error reset on dialog reopen.
- **Storage Failure & Security Exceptions (`T2.38` – `T2.41`, 4 tests):** `localStorage` SecurityError / private browsing fallback, `sessionStorage` exception handling, non-boolean corrupted string recovery, QuotaExceededError isolation.
- **Network & HTTP Status Handling (`T2.42` – `T2.50`, 9 tests):** HTTP 400 Bad Request graceful error, HTTP 422 Unprocessable retry state, HTTP 429 Rate Limit error, HTTP 500 Internal Server error submit re-enable, HTTP 503 Service Unavailable, offline/network failure handling, non-JSON HTML error body safety, successful resubmission after recovery, zero raw stack trace leakage.

---

## 5. Tier 3: Cross-Feature Combinations (12 Tests)

- **T3.1:** Open from Nav -> Dismiss via Escape -> Open from Persistent Launcher (clean transition).
- **T3.2:** Open from Inline -> Invalid email error -> Open Tooltip `ⓘ` -> Correct email -> Submit -> Verify Launcher text update.
- **T3.3:** Open from Nav -> Submit with early tester checkbox -> Verify 6th golden pixel agent in Footer + Launcher text update.
- **T3.4:** Open from Launcher -> Fail Network 500 -> Show retry message -> Restore network -> Resubmit -> Verify success.
- **T3.5:** Full Keyboard Focus Trap cycle (Nav trigger -> fields -> submit -> close button -> wrap to email -> Escape -> Nav focus restored).
- **T3.6:** Shift+Tab wrap from first element (close button) to last element (submit button).
- **T3.7:** Persistence across simulated page navigation to `/about` route.
- **T3.8:** Footer session agent initializes when `sessionStorage` has active key on load.
- **T3.9:** Hierarchical Escape dismissal: Closes tooltip popover before closing dialog.
- **T3.10:** Concurrent trigger clicks with Unicode submission and agent check.
- **T3.11:** Form fields reset for clean state upon subsequent reopening.
- **T3.12:** Mobile narrow viewport layout constraints: panel width bounded within `max-w-[calc(100vw-32px)]`.

---

## 6. Tier 4: Real-World Application Scenarios (5 Workflows)

1. **Scenario 1 (Reddit Referral Journey):** Visitor from Reddit clicks Nav "Join early access", completes full form with tester checkbox, submits to Formspree, views loading state and success sequence (`You're in.` → `Go catch Iris.`), verifies automatic panel dismissal, verifies 6th wanderer agent in footer canvas, and verifies `localStorage` persists across simulated page reload.
2. **Scenario 2 (Casual Homepage Explorer):** Visitor on Homepage scrolls to inline trigger, clicks to open panel, inspects `ⓘ` tooltip privacy notice, dismisses tooltip with Escape, dismisses dialog with second Escape, verifies smooth focus return to inline trigger with zero network requests.
3. **Scenario 3 (Validation Typo Correction):** Visitor opens launcher, inputs invalid email `"founder@bad-domain"`, receives instant inline error without network request, corrects email to `"founder@good-domain.com"`, submits, views success copy, panel auto-closes, and launcher updates to "You're on the list ✓".
4. **Scenario 4 (Mobile Narrow-Viewport Minimal Signup):** Visitor on 390px mobile viewport opens surface, inputs only email (minimal required submission), leaves optional fields blank, submits, and verifies clean JSON payload with responsive styling constraints intact.
5. **Scenario 5 (Spotty Connection Offline Recovery):** Visitor submits form during HTTP 503 outage, receives graceful retry UI without crash or stack traces, re-establishes connection, submits again, and achieves clean success state with footer agent and storage update.

---

## 7. Artifact Manifest

| File Path | Description |
|:---|:---|
| `tests/e2e/run-tests.mjs` | Master test runner with formatted terminal output and exit code semantics |
| `tests/e2e/harness.mjs` | Test runner engine, mock DOM, storage, network interceptor, and static auditor |
| `tests/e2e/tier1-features.mjs` | Tier 1 Feature Coverage test module (60 tests across F1–F10) |
| `tests/e2e/tier2-boundary.mjs` | Tier 2 Boundary & Corner Cases test module (50 tests) |
| `tests/e2e/tier3-combinations.mjs` | Tier 3 Cross-Feature Combinations test module (12 tests) |
| `tests/e2e/tier4-scenarios.mjs` | Tier 4 Real-World Application Scenarios test module (5 scenarios) |
| `tests/e2e/results.json` | Generated structured JSON test execution report |
| `TEST_READY.md` | Test readiness documentation and coverage matrix |
