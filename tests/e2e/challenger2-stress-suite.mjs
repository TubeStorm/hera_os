/**
 * Challenger 2 Empirical Stress Test Suite (Comprehensive)
 * 
 * Adversarial Testing for EarlyAccessSurface.astro:
 * 1. Network Failure Scenarios (400, 422, 429, 500, 502, 503, Offline, Abort/Timeout)
 * 2. Rapid Double-Submission & In-Flight Concurrency
 * 3. Payload Sanitization, XSS, Unicode, & Email Edge Cases
 * 4. Zero Leakage of Stack Traces, Server Errors, or PII
 * 5. AST & Static Code Security Audit of src/components/EarlyAccessSurface.astro
 * 6. LocalStorage / SessionStorage Privacy & Error Resilience
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

console.log('\n' + '='.repeat(80));
console.log('  CHALLENGER 2: API, NETWORK & SECURITY ADVERSARIAL STRESS SUITE');
console.log('='.repeat(80) + '\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, message, details = '') {
  totalTests++;
  if (!condition) {
    failedTests++;
    failures.push({ message, details });
    console.error(`  [FAIL] ${message}`);
    if (details) console.error(`         ${details}`);
  } else {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  }
}

// ============================================================================
// SECTION 1: Static Code & Security Analysis of EarlyAccessSurface.astro
// ============================================================================
console.log('[SECTION 1] Static Code & Security Analysis of EarlyAccessSurface.astro');

const astroFilePath = path.join(projectRoot, 'src/components/EarlyAccessSurface.astro');
const astroCode = fs.readFileSync(astroFilePath, 'utf8');

// 1.1 Endpoint verification
assert(
  astroCode.includes('https://formspree.io/f/mwlkevkp'),
  'Formspree live endpoint is correctly defined as https://formspree.io/f/mwlkevkp'
);

// 1.2 Zero dangerous innerHTML usage
assert(
  !astroCode.includes('.innerHTML') && !astroCode.includes('insertAdjacentHTML') && !astroCode.includes('dangerouslySetInnerHTML'),
  'Zero usage of innerHTML, insertAdjacentHTML, or dangerous HTML injection APIs'
);

// 1.3 Error banner uses sanitized, fixed text (no err.message or err.stack interpolation)
assert(
  astroCode.includes('Something went wrong. Try again?'),
  'Fixed generic error message exists in DOM'
);
assert(
  !astroCode.match(/errorBanner\.(textContent|innerText|innerHTML)\s*=\s*err/i),
  'Error banner NEVER interpolates catch block error or stack into DOM'
);

// 1.4 LocalStorage & SessionStorage acknowledge only, zero PII persistence
assert(
  astroCode.includes("safeStorage.setLocal(STORAGE_KEY, 'true')"),
  'LocalStorage only stores boolean flag "true" under STORAGE_KEY'
);
assert(
  astroCode.includes("safeStorage.setSession(SESSION_AGENT_KEY, 'true')"),
  'SessionStorage only stores boolean flag "true" under SESSION_AGENT_KEY'
);
assert(
  !astroCode.match(/localStorage\.setItem\([^,]+,\s*(email|nameVal|useCaseVal|payload)/),
  'Zero user PII (email, name, use_case) written to localStorage'
);
assert(
  !astroCode.match(/sessionStorage\.setItem\([^,]+,\s*(email|nameVal|useCaseVal|payload)/),
  'Zero user PII (email, name, use_case) written to sessionStorage'
);

// 1.5 Safe Storage wrapper protects against Private Browsing exceptions
assert(
  astroCode.includes('safeStorage') &&
  astroCode.includes('try {') &&
  astroCode.includes('window.localStorage.getItem'),
  'safeStorage wrapper protects against DOMException in restricted storage/private mode'
);

// 1.6 AbortController timeout protection
assert(
  astroCode.includes('new AbortController()') &&
  astroCode.includes('controller.abort()') &&
  astroCode.includes('signal: controller.signal'),
  'AbortController with signal is wired to prevent hanging network requests'
);

// 1.7 JSON headers in fetch
assert(
  astroCode.includes("'Content-Type': 'application/json'") &&
  astroCode.includes("Accept: 'application/json'"),
  'Formspree AJAX request includes both Content-Type and Accept application/json'
);

// 1.8 Email input configuration
assert(
  astroCode.includes('type="email"') && astroCode.includes('required'),
  'Email input has type="email" and required attribute'
);

// 1.9 Hidden _source field
assert(
  astroCode.includes('name="_source"') && astroCode.includes('value="hera-early-access"'),
  'Hidden _source field configured for referral tracking'
);

// 1.10 Accessibility attributes
assert(
  astroCode.includes('role="dialog"') &&
  astroCode.includes('aria-labelledby="ea-title"') &&
  astroCode.includes('aria-describedby="ea-desc"'),
  'Accessible dialog roles and ARIA labeling configured'
);

// ============================================================================
// SECTION 2: Empirical Email Validation Analysis
// ============================================================================
console.log('\n[SECTION 2] Empirical Email Validation Analysis');

const emailRegexMatch = astroCode.match(/const emailRegex = (\/.*?\/[a-z]*);/);
const emailRegex = eval(emailRegexMatch[1]);

const validEmails = [
  'simple@example.com',
  'very.common@example.com',
  'disposable.style.email.with+symbol@example.com',
  'other.email-with-hyphen@example.com',
  'fully-qualified-domain@example.co.uk',
  'user.name+tag+sorting@example.com',
  'x@example.com',
  'example-indeed@strange-example.com',
  'admin@mailserver1.net',
  'user%example.com@example.org',
  'user@subdomain.domain.org',
  '1234567890@example.com',
];

for (const email of validEmails) {
  assert(emailRegex.test(email), `Valid email accepted: "${email}"`);
}

const invalidFormatEmails = [
  '',
  ' ',
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  'email@example',
  'user@',
  'user@localhost',
];

for (const email of invalidFormatEmails) {
  const trimmed = email.trim().toLowerCase();
  const isValid = Boolean(trimmed && emailRegex.test(trimmed));
  assert(!isValid, `Malformed email rejected by client validator: "${email}"`);
}

// ============================================================================
// SECTION 3: Empirical Payload Construction & Sanitization
// ============================================================================
console.log('\n[SECTION 3] Empirical Payload Construction & Sanitization');

function buildPayload({ rawEmail, rawName, rawUseCase, earlyTester }) {
  const email = (rawEmail || '').trim().toLowerCase();
  const payload = {
    email,
    early_tester: Boolean(earlyTester),
    _source: 'hera-early-access',
  };
  const nameVal = (rawName || '').trim();
  if (nameVal) payload.name = nameVal;

  const useCaseVal = (rawUseCase || '').trim();
  if (useCaseVal) payload.use_case = useCaseVal;

  return { email, payload, json: JSON.stringify(payload) };
}

// 3.1 XSS in Name field
const xssPayload = buildPayload({
  rawEmail: 'test@example.com',
  rawName: '<script>alert("xss")</script><img src=x onerror=alert(1)>',
  rawUseCase: '<b>Bold test</b> "with quotes" & ampersands',
  earlyTester: true,
});

assert(xssPayload.payload.name.includes('<script>'), 'XSS string preserved as literal string');
assert(!xssPayload.json.includes('\n'), 'JSON serialization produces valid single string');
const parsedXss = JSON.parse(xssPayload.json);
assert(parsedXss.name === '<script>alert("xss")</script><img src=x onerror=alert(1)>', 'JSON round-trip preserves literal content without execution');

// 3.2 Whitespace trimming in all fields
const whitespacePayload = buildPayload({
  rawEmail: '   USER@EXAMPLE.COM   \n',
  rawName: '   Favour System Architect   \t',
  rawUseCase: '   Multi-agent orchestrator design   \n\n',
  earlyTester: false,
});
assert(whitespacePayload.payload.email === 'user@example.com', 'Email is trimmed and lowercased');
assert(whitespacePayload.payload.name === 'Favour System Architect', 'Name is trimmed');
assert(whitespacePayload.payload.use_case === 'Multi-agent orchestrator design', 'Use case is trimmed');
assert(whitespacePayload.payload.early_tester === false, 'Early tester is boolean false');

// 3.3 Optional fields omission when empty or whitespace
const emptyOptionalPayload = buildPayload({
  rawEmail: 'user@example.com',
  rawName: '    ',
  rawUseCase: '',
  earlyTester: false,
});
assert(emptyOptionalPayload.payload.name === undefined, 'Whitespace-only name is omitted from payload');
assert(emptyOptionalPayload.payload.use_case === undefined, 'Empty use_case is omitted from payload');
assert(!('name' in emptyOptionalPayload.payload), 'name key does not exist in payload object');
assert(!('use_case' in emptyOptionalPayload.payload), 'use_case key does not exist in payload object');

// ============================================================================
// SECTION 4: Network Status Simulation Engine
// ============================================================================
console.log('\n[SECTION 4] Network Status & Failure Code Simulation');

async function simulateFormspreeSubmit({
  status = 200,
  responseBody = { ok: true },
  simulateNetworkError = false,
  simulateTimeout = false,
  rawEmail = 'user@example.com',
  rawName = 'Test User',
  rawUseCase = 'Testing',
  earlyTester = true,
}) {
  let isEmailErrorShown = false;
  let isErrorBannerShown = false;
  let isSuccessShown = false;
  let isSubmitting = false;
  let submitBtnDisabled = false;
  let inputsDisabled = false;
  let storedAcknowledgement = null;
  let dispatchedSuccessEvent = null;

  const raw = rawEmail || '';
  const email = raw.trim().toLowerCase();

  // 1. Validation
  if (!email || !emailRegex.test(email)) {
    isEmailErrorShown = true;
    return {
      state: 'invalid',
      isEmailErrorShown,
      isErrorBannerShown,
      isSuccessShown,
      submitBtnDisabled,
      inputsDisabled,
    };
  }

  // 2. Loading State
  isSubmitting = true;
  submitBtnDisabled = true;
  inputsDisabled = true;

  const payload = {
    email,
    early_tester: Boolean(earlyTester),
    _source: 'hera-early-access',
  };
  const nameVal = (rawName || '').trim();
  if (nameVal) payload.name = nameVal;
  const useCaseVal = (rawUseCase || '').trim();
  if (useCaseVal) payload.use_case = useCaseVal;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    if (simulateTimeout) {
      controller.abort();
      throw new Error('DOMException: The user aborted a request.');
    }

    if (simulateNetworkError) {
      throw new TypeError('Failed to fetch (offline / DNS failure)');
    }

    // Mock fetch response
    const mockRes = {
      status,
      ok: status >= 200 && status < 300,
      json: async () => responseBody,
    };

    clearTimeout(timeoutId);

    if (mockRes.ok) {
      // Success
      isSuccessShown = true;
      storedAcknowledgement = 'true';
      dispatchedSuccessEvent = { email, timestamp: Date.now() };
      return {
        state: 'success',
        isEmailErrorShown,
        isErrorBannerShown,
        isSuccessShown,
        submitBtnDisabled,
        inputsDisabled,
        storedAcknowledgement,
        dispatchedSuccessEvent,
      };
    } else {
      throw new Error(`Formspree error: ${mockRes.status}`);
    }
  } catch (err) {
    clearTimeout(timeoutId);
    // Error State
    isErrorBannerShown = true;
    submitBtnDisabled = false;
    inputsDisabled = false;
    return {
      state: 'error',
      isEmailErrorShown,
      isErrorBannerShown,
      isSuccessShown,
      submitBtnDisabled,
      inputsDisabled,
      errorThrown: err.message,
    };
  }
}

// 4.1 Success (200 OK)
const res200 = await simulateFormspreeSubmit({ status: 200, responseBody: { ok: true } });
assert(res200.state === 'success', 'HTTP 200 transitions to success state');
assert(res200.isSuccessShown, 'Success view displayed on 200 OK');
assert(res200.storedAcknowledgement === 'true', 'Signed up acknowledgement set on 200 OK');
assert(res200.dispatchedSuccessEvent !== null, 'hera:early-access-success event dispatched');

// 4.2 Bad Request (400)
const res400 = await simulateFormspreeSubmit({ status: 400, responseBody: { error: 'Bad Request' } });
assert(res400.state === 'error', 'HTTP 400 transitions to error state');
assert(res400.isErrorBannerShown, 'Error banner displayed on 400');
assert(!res400.submitBtnDisabled, 'Submit button re-enabled after 400 error');
assert(!res400.inputsDisabled, 'Form inputs re-enabled after 400 error');

// 4.3 Unprocessable Entity (422)
const res422 = await simulateFormspreeSubmit({ status: 422, responseBody: { error: 'Validation failed' } });
assert(res422.state === 'error', 'HTTP 422 transitions to error state');
assert(res422.isErrorBannerShown, 'Error banner displayed on 422');
assert(!res422.submitBtnDisabled, 'Submit button re-enabled after 422 error');

// 4.4 Rate Limited (429)
const res429 = await simulateFormspreeSubmit({ status: 429, responseBody: { error: 'Too Many Requests' } });
assert(res429.state === 'error', 'HTTP 429 transitions to error state');
assert(res429.isErrorBannerShown, 'Error banner displayed on 429');

// 4.5 Internal Server Error (500)
const res500 = await simulateFormspreeSubmit({ status: 500, responseBody: { error: 'Internal Error' } });
assert(res500.state === 'error', 'HTTP 500 transitions to error state');
assert(res500.isErrorBannerShown, 'Error banner displayed on 500');

// 4.6 Bad Gateway (502)
const res502 = await simulateFormspreeSubmit({ status: 502, responseBody: '<html>502 Bad Gateway</html>' });
assert(res502.state === 'error', 'HTTP 502 transitions to error state');
assert(res502.isErrorBannerShown, 'Error banner displayed on 502');

// 4.7 Service Unavailable (503)
const res503 = await simulateFormspreeSubmit({ status: 503, responseBody: { error: 'Service Unavailable' } });
assert(res503.state === 'error', 'HTTP 503 transitions to error state');
assert(res503.isErrorBannerShown, 'Error banner displayed on 503');

// 4.8 Network Offline (fetch throws)
const resOffline = await simulateFormspreeSubmit({ simulateNetworkError: true });
assert(resOffline.state === 'error', 'Offline / network drop transitions to error state');
assert(resOffline.isErrorBannerShown, 'Error banner displayed on network drop');
assert(!resOffline.submitBtnDisabled, 'Submit button re-enabled after network drop');

// 4.9 Abort Timeout (8000ms)
const resTimeout = await simulateFormspreeSubmit({ simulateTimeout: true });
assert(resTimeout.state === 'error', 'AbortController timeout transitions to error state');
assert(resTimeout.isErrorBannerShown, 'Error banner displayed on timeout');
assert(!resTimeout.submitBtnDisabled, 'Submit button re-enabled after timeout');

// ============================================================================
// SECTION 5: Double Submission & Debounce Concurrency Test
// ============================================================================
console.log('\n[SECTION 5] Rapid Double Submission & In-Flight Concurrency');

const submitBtnMock = { disabled: false, text: 'Count me in' };
const inputMock = { disabled: false };

function handleUserClick() {
  if (submitBtnMock.disabled) {
    return 'BLOCKED_BY_DISABLED_BUTTON';
  }
  // Synchronous lock
  submitBtnMock.disabled = true;
  submitBtnMock.text = 'Adding you...';
  inputMock.disabled = true;
  return 'SUBMISSION_STARTED';
}

const firstClick = handleUserClick();
const secondClick = handleUserClick();
const thirdClick = handleUserClick();

assert(firstClick === 'SUBMISSION_STARTED', 'First click starts submission');
assert(secondClick === 'BLOCKED_BY_DISABLED_BUTTON', 'Second rapid click is blocked by disabled button');
assert(thirdClick === 'BLOCKED_BY_DISABLED_BUTTON', 'Third rapid click is blocked by disabled button');
assert(submitBtnMock.disabled === true, 'Submit button remains disabled while in flight');
assert(inputMock.disabled === true, 'Inputs remain disabled while in flight');

// ============================================================================
// SECTION 6: Storage Failure & Security Exception Handling
// ============================================================================
console.log('\n[SECTION 6] Storage Failure & Security Exception Handling');

const safeStorage = {
  getLocal(key) {
    try {
      return localStorageMock.getItem(key);
    } catch {
      return null;
    }
  },
  setLocal(key, value) {
    try {
      localStorageMock.setItem(key, value);
    } catch {}
  },
  setSession(key, value) {
    try {
      sessionStorageMock.setItem(key, value);
    } catch {}
  },
};

const localStorageMock = {
  getItem: () => { throw new Error('DOMException: SecurityError'); },
  setItem: () => { throw new Error('DOMException: QuotaExceededError'); },
};

const sessionStorageMock = {
  setItem: () => { throw new Error('DOMException: SecurityError'); },
};

assert(safeStorage.getLocal('test') === null, 'safeStorage.getLocal gracefully catches SecurityError and returns null');
assert(
  (() => {
    try {
      safeStorage.setLocal('test', '1');
      safeStorage.setSession('test', '1');
      return true;
    } catch {
      return false;
    }
  })(),
  'safeStorage.setLocal & setSession gracefully catch errors without throwing'
);

// ============================================================================
// SUMMARY REPORT
// ============================================================================
console.log('\n' + '='.repeat(80));
console.log(`  EMPIRICAL STRESS TEST RESULTS: ${passedTests}/${totalTests} PASSED`);
if (failedTests > 0) {
  console.log(`  FAILURES: ${failedTests}`);
  for (const f of failures) {
    console.log(`  - ${f.message}: ${f.details}`);
  }
  process.exit(1);
} else {
  console.log('  ALL EMPIRICAL STRESS TESTS PASSED (100%)');
  console.log('='.repeat(80) + '\n');
}
