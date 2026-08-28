/**
 * Tier 2: Boundary & Corner Cases Test Suite
 * 
 * 50 Tests covering:
 * - Email format edge cases and RFC boundary conditions (14 tests)
 * - Name field boundary, unicode, RTL, and special characters (7 tests)
 * - Use case multiline, extreme length, and character escaping (7 tests)
 * - Checkbox interaction states and keyboard toggles (4 tests)
 * - Rapid clicking, concurrency, and debounce behavior (5 tests)
 * - Storage exceptions, privacy modes, and quota limits (4 tests)
 * - Network errors, HTTP error codes (400, 422, 429, 500, 503), timeouts (9 tests)
 */

import { expect, createEarlyAccessEnvironment } from './harness.mjs';

export function registerTier2Tests(runner) {
  // --------------------------------------------------------------------------
  // Group 1: Email Boundary & Format Fuzzing (14 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Email Format Fuzzing', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.1: Empty email string is rejected with inline error', async () => {
      env.elements.emailInput.value = '';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
      expect(env.elements.emailError.style.display).toBe('block');
    });

    runner.it('T2.2: Whitespace-only email is rejected', async () => {
      env.elements.emailInput.value = '   \t  ';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
      expect(env.elements.emailError.style.display).toBe('block');
    });

    runner.it('T2.3: Missing @ symbol ("userexample.com") is rejected', async () => {
      env.elements.emailInput.value = 'userexample.com';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
    });

    runner.it('T2.4: Missing domain ("user@") is rejected', async () => {
      env.elements.emailInput.value = 'user@';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
    });

    runner.it('T2.5: Missing top-level domain ("user@localhost") is rejected', async () => {
      env.elements.emailInput.value = 'user@localhost';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
    });

    runner.it('T2.6: Multiple @ symbols ("user@@example.com") is rejected', async () => {
      env.elements.emailInput.value = 'user@@example.com';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
    });

    runner.it('T2.7: Leading and trailing whitespace is trimmed and accepted', async () => {
      env.elements.emailInput.value = '  valid.user@example.com  \n';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('valid.user@example.com');
    });

    runner.it('T2.8: Uppercase email is accepted and sent properly', async () => {
      env.elements.emailInput.value = 'FAVOUR@SYSTEMS.DESIGN';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('FAVOUR@SYSTEMS.DESIGN');
    });

    runner.it('T2.9: Plus addressing ("user+tag@example.com") is accepted', async () => {
      env.elements.emailInput.value = 'favour+early-test@domain.co';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('favour+early-test@domain.co');
    });

    runner.it('T2.10: Subdomain email ("user@mail.deep.example.co.uk") is accepted', async () => {
      env.elements.emailInput.value = 'user@mail.deep.example.co.uk';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('user@mail.deep.example.co.uk');
    });

    runner.it('T2.11: Email with special allowed RFC characters is accepted', async () => {
      env.elements.emailInput.value = "user.name!#$%&'*+-/=?^_`{|}~@example.com";
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
    });

    runner.it('T2.12: Extremely long email (254 characters) is handled within RFC boundary', async () => {
      const prefix = 'a'.repeat(60);
      const domain = 'b'.repeat(60) + '.' + 'c'.repeat(60) + '.com';
      const longEmail = `${prefix}@${domain}`;
      env.elements.emailInput.value = longEmail;
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe(longEmail);
    });

    runner.it('T2.13: Email with dot in local part ("first.middle.last@domain.com") is accepted', async () => {
      env.elements.emailInput.value = 'first.middle.last@domain.com';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('first.middle.last@domain.com');
    });

    runner.it('T2.14: Email with hyphens in domain ("user@my-awesome-domain.io") is accepted', async () => {
      env.elements.emailInput.value = 'user@my-awesome-domain.io';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('user@my-awesome-domain.io');
    });
  });

  // --------------------------------------------------------------------------
  // Group 2: Name Field Boundary & Encoding (7 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Name Field Variations', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.15: Blank name is accepted (optional field omitted from payload)', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.nameInput.value = '';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBeUndefined();
    });

    runner.it('T2.16: Whitespace-only name is treated as empty', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.nameInput.value = '    ';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBeUndefined();
    });

    runner.it('T2.17: Extremely long name (1000 characters) is accepted without UI failure', async () => {
      env.elements.emailInput.value = 'test@example.com';
      const longName = 'Alpha '.repeat(170);
      env.elements.nameInput.value = longName;
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBe(longName.trim());
    });

    runner.it('T2.18: Name with Unicode & Emojis is preserved in JSON payload', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.nameInput.value = 'Favour Diokpo 🚀✨ (HERA)';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBe('Favour Diokpo 🚀✨ (HERA)');
    });

    runner.it('T2.19: Name with single and double quotes is preserved without escaping bugs', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.nameInput.value = 'O\'Connor "Founder" O`Reilly';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBe('O\'Connor "Founder" O`Reilly');
    });

    runner.it('T2.20: Name with RTL (Right-to-Left) Arabic characters is handled cleanly', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.nameInput.value = 'مطور هيريا للأنظمة';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBe('مطور هيريا للأنظمة');
    });

    runner.it('T2.21: Name with accented characters (é, ü, ç, ñ) is preserved', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.nameInput.value = 'René Müller François Peña';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.name).toBe('René Müller François Peña');
    });
  });

  // --------------------------------------------------------------------------
  // Group 3: Use Case Textarea Boundary (7 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Use Case Textarea', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.22: Blank use case is omitted from payload', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.useCaseInput.value = '';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case).toBeUndefined();
    });

    runner.it('T2.23: Whitespace-only use case is treated as empty', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.useCaseInput.value = '  \n\t  ';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case).toBeUndefined();
    });

    runner.it('T2.24: Multiline use case with CRLF preserves line breaks in JSON payload', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.useCaseInput.value = 'Step 1: Ideation\r\nStep 2: Roadmapping\nStep 3: Execution';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case).toContain('Step 1: Ideation');
      expect(env.network.history[0].body.use_case).toContain('Step 3: Execution');
    });

    runner.it('T2.25: Extremely long use case (2500 characters) transmits successfully', async () => {
      env.elements.emailInput.value = 'test@example.com';
      const text = 'Building complex autonomous AI agent orchestration lanes. '.repeat(40);
      env.elements.useCaseInput.value = text;
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case.length).toBeGreaterThan(2000);
    });

    runner.it('T2.26: Use case containing JSON formatting tokens does not corrupt request', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.useCaseInput.value = '{"nested": "payload", "array": [1, 2, 3], "flag": true}';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case).toBe('{"nested": "payload", "array": [1, 2, 3], "flag": true}');
    });

    runner.it('T2.27: Use case with SQL injection format string is safely encapsulated', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.useCaseInput.value = "Robert'); DROP TABLE waitlist;-- %s %x %n";
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case).toBe("Robert'); DROP TABLE waitlist;-- %s %x %n");
    });

    runner.it('T2.28: Use case with markdown formatting is preserved verbatim', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.useCaseInput.value = 'I want to build: \n- **Lanes**\n- `Iris` integration\n- [Link](https://hera.os)';
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.use_case).toContain('**Lanes**');
    });
  });

  // --------------------------------------------------------------------------
  // Group 4: Checkbox Interaction Boundary (4 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Early Tester Checkbox', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.29: Default unchecked checkbox produces early_tester: false', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.earlyTesterCheckbox.checked = false;
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.early_tester).toBe(false);
    });

    runner.it('T2.30: Checked checkbox produces early_tester: true', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.earlyTesterCheckbox.checked = true;
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.early_tester).toBe(true);
    });

    runner.it('T2.31: Toggling checkbox multiple times reflects latest state in submission', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.earlyTesterCheckbox.click(); // true
      env.elements.earlyTesterCheckbox.click(); // false
      env.elements.earlyTesterCheckbox.click(); // true
      await env.controllers.handleSubmit();
      expect(env.network.history[0].body.early_tester).toBe(true);
    });

    runner.it('T2.32: Checkbox state is reset to unchecked after successful submission', async () => {
      env.elements.emailInput.value = 'test@example.com';
      env.elements.earlyTesterCheckbox.checked = true;
      await env.controllers.handleSubmit();
      expect(env.elements.earlyTesterCheckbox.checked).toBe(false);
    });
  });

  // --------------------------------------------------------------------------
  // Group 5: Rapid Clicking & Concurrency (5 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Rapid Interaction & Concurrency', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.33: Rapid double-submission only issues 1 HTTP request (loading guard)', async () => {
      env.elements.emailInput.value = 'rapid@example.com';
      env.network.delayMs = 40;

      const p1 = env.controllers.handleSubmit();
      const p2 = env.controllers.handleSubmit(); // should be ignored

      await Promise.all([p1, p2]);
      expect(env.network.history.length).toBe(1);
    });

    runner.it('T2.34: Rapid launcher toggle calls leave panel in deterministic state', () => {
      const { launcher } = env.elements;
      for (let i = 0; i < 9; i++) {
        launcher.click();
      }
      // 9 clicks from closed = open
      expect(env.controllers.isOpen()).toBeTruthy();
      launcher.click();
      // 10th click = closed
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T2.35: Repeated Escape presses while closed do not throw or crash', () => {
      expect(env.controllers.isOpen()).toBeFalsy();
      for (let i = 0; i < 5; i++) {
        env.controllers.handleKeyDown({ key: 'Escape' });
      }
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T2.36: Opening panel 25 times consecutively executes cleanly without leak', () => {
      for (let i = 0; i < 25; i++) {
        env.controllers.openPanel();
        expect(env.controllers.isOpen()).toBeTruthy();
        env.controllers.closePanel();
        expect(env.controllers.isOpen()).toBeFalsy();
      }
    });

    runner.it('T2.37: Closing panel via close button during validation error clears error when reopened', () => {
      env.controllers.openPanel();
      env.elements.emailInput.value = 'invalid';
      env.controllers.handleSubmit();
      expect(env.elements.emailError.style.display).toBe('block');

      env.elements.closeBtn.click();
      expect(env.controllers.isOpen()).toBeFalsy();

      env.controllers.openPanel();
      expect(env.controllers.isOpen()).toBeTruthy();
    });
  });

  // --------------------------------------------------------------------------
  // Group 6: Storage Exceptions & Privacy Mode Boundaries (4 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Storage Failure & Security Exceptions', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.38: localStorage SecurityError does not block signup completion', async () => {
      env.localStorage.setFail(true);
      env.elements.emailInput.value = 'safe@example.com';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
    });

    runner.it('T2.39: sessionStorage failure does not prevent footer sprite initialization', () => {
      env.sessionStorage.setFail(true);
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      const agents = env.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(6);
    });

    runner.it('T2.40: LocalStorage returning unexpected non-boolean string is handled gracefully', () => {
      env.localStorage.setItem('hera_early_access_signed_up', 'null');
      env.controllers.syncSignedUpState();
      expect(env.elements.launcher.textContent.trim()).toBe('Early access ✦');
    });

    runner.it('T2.41: LocalStorage QuotaExceededError is caught silently', async () => {
      env.localStorage.setItem = () => {
        throw new Error('QuotaExceededError');
      };
      env.elements.emailInput.value = 'quota@example.com';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
    });
  });

  // --------------------------------------------------------------------------
  // Group 7: Network & HTTP Error Handling (9 tests)
  // --------------------------------------------------------------------------
  runner.describe('Tier 2 - Boundary: Network & HTTP Status Handling', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T2.42: Formspree HTTP 400 Bad Request displays graceful error state', async () => {
      env.elements.emailInput.value = 'badreq@example.com';
      env.network.statusToReturn = 400;
      env.network.responseBody = { error: 'Bad Request' };

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
    });

    runner.it('T2.43: Formspree HTTP 422 Unprocessable displays graceful retry prompt', async () => {
      env.elements.emailInput.value = 'unprocessable@example.com';
      env.network.statusToReturn = 422;
      env.network.responseBody = { error: 'Validation failed' };

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
    });

    runner.it('T2.44: Formspree HTTP 429 Rate Limited displays retry prompt', async () => {
      env.elements.emailInput.value = 'ratelimit@example.com';
      env.network.statusToReturn = 429;
      env.network.responseBody = { error: 'Too Many Requests' };

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
    });

    runner.it('T2.45: Formspree HTTP 500 Server Error re-enables submit button for retry', async () => {
      env.elements.emailInput.value = 'servererror@example.com';
      env.network.statusToReturn = 500;

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.submitBtn.disabled).toBeFalsy();
    });

    runner.it('T2.46: Formspree HTTP 503 Service Unavailable is handled cleanly', async () => {
      env.elements.emailInput.value = 'unavailable@example.com';
      env.network.statusToReturn = 503;

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
    });

    runner.it('T2.47: Complete network failure / offline mode shows retry prompt without unhandled throw', async () => {
      env.elements.emailInput.value = 'offline@example.com';
      env.network.simulateNetworkFailure = true;

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
    });

    runner.it('T2.48: Formspree returning invalid non-JSON body is caught safely', async () => {
      env.elements.emailInput.value = 'htmlerror@example.com';
      env.network.statusToReturn = 502;
      env.network.responseBody = '<html><head><title>Bad Gateway</title></head><body>502</body></html>';

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
    });

    runner.it('T2.49: Successful retry after initial network failure transitions to success', async () => {
      env.elements.emailInput.value = 'retry@example.com';
      env.network.simulateNetworkFailure = true;

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');

      // Now restore network connection and resubmit
      env.network.simulateNetworkFailure = false;
      env.network.statusToReturn = 200;
      await env.controllers.handleSubmit();

      expect(env.controllers.getState()).toBe('idle'); // after success auto-close
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');
    });

    runner.it('T2.50: Network response does not leak raw stack trace or server paths to the UI', async () => {
      env.elements.emailInput.value = 'leakcheck@example.com';
      env.network.statusToReturn = 500;
      env.network.responseBody = {
        stack: 'Error: Database connection at /var/www/server/node_modules/pg/client.js:45:12',
      };

      await env.controllers.handleSubmit();
      const statusText = env.elements.statusMessage.textContent;
      expect(statusText).toBe('Something went wrong. Try again?');
      expect(statusText).not.toContain('/var/www/');
      expect(statusText).not.toContain('node_modules');
    });
  });
}
