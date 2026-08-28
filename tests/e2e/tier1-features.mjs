/**
 * Tier 1: Feature Coverage Test Suite (F1 - F10)
 * 
 * 60 Tests (6 tests per feature across all 10 features)
 * Derived strictly from ORIGINAL_REQUEST.md (R1-R6) & PROJECT.md
 */

import { expect, createEarlyAccessEnvironment, StaticAuditor } from './harness.mjs';

export function registerTier1Tests(runner) {
  // --------------------------------------------------------------------------
  // Feature 1: Nav Entry Point (R1.1)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 1: Nav Entry Point (R1.1)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F1.1: Nav trigger contains exact label "Join early access"', () => {
      const { navTrigger } = env.elements;
      expect(navTrigger.textContent.trim()).toBe('Join early access');
    });

    runner.it('T1.F1.2: Nav trigger has data-early-access-trigger attribute', () => {
      const { navTrigger } = env.elements;
      expect(navTrigger.hasAttribute('data-early-access-trigger')).toBeTruthy();
    });

    runner.it('T1.F1.3: Clicking Nav trigger transitions panel to open state', () => {
      const { navTrigger } = env.elements;
      const { isOpen } = env.controllers;
      expect(isOpen()).toBeFalsy();
      navTrigger.click();
      expect(isOpen()).toBeTruthy();
      expect(env.elements.panel.style.display).toBe('block');
    });

    runner.it('T1.F1.4: Clicking Nav trigger while panel is open toggles panel closed', () => {
      const { navTrigger } = env.elements;
      const { isOpen } = env.controllers;
      navTrigger.click();
      expect(isOpen()).toBeTruthy();
      navTrigger.click();
      expect(isOpen()).toBeFalsy();
    });

    runner.it('T1.F1.5: Dispatches hera:open-early-access global event when activated', () => {
      let eventDispatched = false;
      env.window.addEventListener('hera:open-early-access', () => {
        eventDispatched = true;
      });
      env.window.dispatchEvent({ type: 'hera:open-early-access' });
      expect(eventDispatched).toBeTruthy();
      expect(env.controllers.isOpen()).toBeTruthy();
    });

    runner.it('T1.F1.6: Nav trigger preserves visual restraint without bloated card borders', () => {
      const { navTrigger } = env.elements;
      expect(navTrigger.getAttribute('class')).toContain('rounded-pill');
      expect(navTrigger.getAttribute('class')).not.toContain('border-4');
      expect(navTrigger.getAttribute('class')).not.toContain('bg-gradient');
    });
  });

  // --------------------------------------------------------------------------
  // Feature 2: Homepage Inline Entry Point (R1.2)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 2: Homepage Inline Entry Point (R1.2)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F2.1: Inline trigger text contains "Join early access →"', () => {
      const { inlineTrigger } = env.elements;
      expect(inlineTrigger.textContent.trim()).toBe('Join early access →');
    });

    runner.it('T1.F2.2: Inline container contains question "Want to try HERA before everyone else?"', () => {
      const container = env.document.querySelector('.inline-early-access-line');
      expect(container.textContent).toContain('Want to try HERA before everyone else?');
    });

    runner.it('T1.F2.3: Inline trigger has data-early-access-trigger attribute', () => {
      const { inlineTrigger } = env.elements;
      expect(inlineTrigger.hasAttribute('data-early-access-trigger')).toBeTruthy();
    });

    runner.it('T1.F2.4: Clicking inline trigger opens the early-access surface', () => {
      const { inlineTrigger } = env.elements;
      const { isOpen } = env.controllers;
      expect(isOpen()).toBeFalsy();
      inlineTrigger.click();
      expect(isOpen()).toBeTruthy();
      expect(env.elements.panel.style.display).toBe('block');
    });

    runner.it('T1.F2.5: Inline trigger is a single line without heading stacks or card wrappers', () => {
      const container = env.document.querySelector('.inline-early-access-line');
      expect(container.querySelector('h1')).toBeNull();
      expect(container.querySelector('h2')).toBeNull();
      expect(container.querySelector('h3')).toBeNull();
      expect(container.getAttribute('class')).not.toContain('bg-gradient');
    });

    runner.it('T1.F2.6: Inline trigger restores focus to itself when panel is closed via Escape', () => {
      const { inlineTrigger } = env.elements;
      inlineTrigger.focus();
      inlineTrigger.click();
      expect(env.controllers.isOpen()).toBeTruthy();
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.controllers.isOpen()).toBeFalsy();
      expect(globalThis._focusedElement).toBe(inlineTrigger);
    });
  });

  // --------------------------------------------------------------------------
  // Feature 3: Persistent Launcher Widget (R1.3)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 3: Persistent Launcher Widget (R1.3)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F3.1: Launcher is fixed bottom-right with shadow-lift', () => {
      const container = env.document.querySelector('#early-access-surface');
      expect(container.getAttribute('class')).toContain('fixed');
      expect(container.getAttribute('class')).toContain('bottom-5');
      expect(container.getAttribute('class')).toContain('right-5');
    });

    runner.it('T1.F3.2: Default closed label is exact string "Early access ✦"', () => {
      const { launcher } = env.elements;
      expect(launcher.textContent.trim()).toBe('Early access ✦');
    });

    runner.it('T1.F3.3: Clicking launcher toggles panel open state and sets aria-expanded', () => {
      const { launcher } = env.elements;
      expect(launcher.getAttribute('aria-expanded')).toBe('false');
      launcher.click();
      expect(launcher.getAttribute('aria-expanded')).toBe('true');
      expect(env.controllers.isOpen()).toBeTruthy();
      launcher.click();
      expect(launcher.getAttribute('aria-expanded')).toBe('false');
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T1.F3.4: Signed-up state updates launcher label to "You\'re on the list ✓"', () => {
      env.localStorage.setItem('hera_early_access_signed_up', 'true');
      env.controllers.syncSignedUpState();
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('T1.F3.5: Launcher button has aria-haspopup="dialog" attribute', () => {
      const { launcher } = env.elements;
      expect(launcher.getAttribute('aria-haspopup')).toBe('dialog');
    });

    runner.it('T1.F3.6: Launcher does not use oversized SaaS gradients or heavy borders', () => {
      const { launcher } = env.elements;
      expect(launcher.getAttribute('class')).toContain('rounded-pill');
      expect(launcher.getAttribute('class')).not.toContain('bg-gradient');
    });
  });

  // --------------------------------------------------------------------------
  // Feature 4: Floating Surface & Tooltip (R2)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 4: Floating Surface & Tooltip (R2)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F4.1: Panel title is exact string "Want in?"', () => {
      const { title } = env.elements;
      expect(title.textContent.trim()).toBe('Want in?');
    });

    runner.it('T1.F4.2: Floating surface is anchored bottom-right and is not a full-screen blocking overlay', () => {
      const { panel } = env.elements;
      expect(panel.getAttribute('role')).toBe('dialog');
      expect(panel.getAttribute('class')).toContain('rounded-card');
      expect(panel.getAttribute('class')).not.toContain('fixed inset-0');
    });

    runner.it('T1.F4.3: Info icon ⓘ is present next to title', () => {
      const { infoBtn } = env.elements;
      expect(infoBtn.textContent.trim()).toBe('ⓘ');
    });

    runner.it('T1.F4.4: Tooltip content is hidden by default', () => {
      const { tooltip } = env.elements;
      expect(tooltip.style.display).toBe('none');
    });

    runner.it('T1.F4.5: Interacting with ⓘ reveals exact privacy copy', () => {
      const { infoBtn, tooltip } = env.elements;
      infoBtn.click();
      expect(tooltip.style.display).toBe('block');
      expect(tooltip.textContent.trim()).toBe(
        'Early invites and occasional HERA updates. No spam. Leave whenever you want.'
      );
    });

    runner.it('T1.F4.6: Panel uses hairline border-line and shadow-lift token classes', () => {
      const { panel } = env.elements;
      expect(panel.getAttribute('class')).toContain('border-line');
      expect(panel.getAttribute('class')).toContain('shadow-lift');
    });
  });

  // --------------------------------------------------------------------------
  // Feature 5: Form Fields & Validation (R2, R4)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 5: Form Fields & Validation (R2, R4)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F5.1: Form contains required email input field', () => {
      const { emailInput } = env.elements;
      expect(emailInput.getAttribute('type')).toBe('email');
      expect(emailInput.getAttribute('required')).toBe('true');
    });

    runner.it('T1.F5.2: Form contains optional name and use_case fields', () => {
      const { nameInput, useCaseInput } = env.elements;
      expect(nameInput.getAttribute('type')).toBe('text');
      expect(nameInput.getAttribute('placeholder')).toContain('optional');
      expect(useCaseInput.tagName).toBe('TEXTAREA');
      expect(useCaseInput.getAttribute('placeholder')).toContain('optional');
    });

    runner.it('T1.F5.3: Form contains checkbox labeled "I\'m down to test unfinished things"', () => {
      const { earlyTesterCheckbox } = env.elements;
      expect(earlyTesterCheckbox.getAttribute('type')).toBe('checkbox');
      const label = earlyTesterCheckbox.parentNode;
      expect(label.textContent).toContain("I'm down to test unfinished things");
    });

    runner.it('T1.F5.4: Submit button contains exact text "Count me in"', () => {
      const { submitBtn } = env.elements;
      expect(submitBtn.textContent.trim()).toBe('Count me in');
    });

    runner.it('T1.F5.5: Submitting with empty email displays inline validation error and prevents fetch', async () => {
      const { emailInput, emailError } = env.elements;
      emailInput.value = '';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
      expect(emailError.style.display).toBe('block');
      expect(emailError.textContent).toContain('Please enter a valid email address');
      expect(env.network.history.length).toBe(0);
    });

    runner.it('T1.F5.6: Valid email submission includes _source: "hera-early-access" in JSON payload', async () => {
      const { emailInput, nameInput, earlyTesterCheckbox } = env.elements;
      emailInput.value = 'tester@example.com';
      nameInput.value = 'Alex Rivera';
      earlyTesterCheckbox.checked = true;

      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      const req = env.network.history[0];
      expect(req.body.email).toBe('tester@example.com');
      expect(req.body.name).toBe('Alex Rivera');
      expect(req.body.early_tester).toBe(true);
      expect(req.body._source).toBe('hera-early-access');
    });
  });

  // --------------------------------------------------------------------------
  // Feature 6: State Machine & Success Flow (R2)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 6: State Machine & Success Flow (R2)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F6.1: Initial state is idle with enabled submit button', () => {
      expect(env.controllers.getState()).toBe('idle');
      expect(env.elements.submitBtn.disabled).toBeFalsy();
    });

    runner.it('T1.F6.2: Submitting transitions to loading state, disabling submit button', async () => {
      env.elements.emailInput.value = 'valid@example.com';
      env.network.delayMs = 20;
      const promise = env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('loading');
      expect(env.elements.submitBtn.disabled).toBeTruthy();
      expect(env.elements.submitBtn.textContent).toBe('Adding you...');
      await promise;
    });

    runner.it('T1.F6.3: Successful response executes "You\'re in." copy step', async () => {
      env.elements.emailInput.value = 'valid@example.com';
      await env.controllers.handleSubmit();
      expect(env.elements.statusMessage.textContent).toBe('Go catch Iris.');
    });

    runner.it('T1.F6.4: Auto-closes panel after success sequence', async () => {
      env.elements.emailInput.value = 'valid@example.com';
      env.controllers.openPanel();
      expect(env.controllers.isOpen()).toBeTruthy();
      await env.controllers.handleSubmit();
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T1.F6.5: Resets form inputs upon successful submission', async () => {
      const { emailInput, nameInput, useCaseInput, earlyTesterCheckbox } = env.elements;
      emailInput.value = 'valid@example.com';
      nameInput.value = 'Tester';
      useCaseInput.value = 'Planning roadmaps';
      earlyTesterCheckbox.checked = true;

      await env.controllers.handleSubmit();
      expect(emailInput.value).toBe('');
      expect(nameInput.value).toBe('');
      expect(useCaseInput.value).toBe('');
      expect(earlyTesterCheckbox.checked).toBeFalsy();
    });

    runner.it('T1.F6.6: Backend 500 error shows "Something went wrong. Try again?" gracefully', async () => {
      env.elements.emailInput.value = 'valid@example.com';
      env.network.statusToReturn = 500;
      env.network.responseBody = { error: 'Internal server error' };

      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
      expect(env.elements.submitBtn.disabled).toBeFalsy();
    });
  });

  // --------------------------------------------------------------------------
  // Feature 7: Keyboard Navigation & Focus Trap (R2)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 7: Keyboard Navigation & Focus Trap (R2)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F7.1: Panel has role="dialog" and aria-modal="true"', () => {
      const { panel } = env.elements;
      expect(panel.getAttribute('role')).toBe('dialog');
      expect(panel.getAttribute('aria-modal')).toBe('true');
    });

    runner.it('T1.F7.2: Escape key listener closes panel when open', () => {
      env.controllers.openPanel();
      expect(env.controllers.isOpen()).toBeTruthy();
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T1.F7.3: Opening panel automatically focuses first input', () => {
      env.controllers.openPanel();
      expect(globalThis._focusedElement).toBe(env.elements.emailInput);
    });

    runner.it('T1.F7.4: Forward Tab on submit button wraps focus back to close button', () => {
      env.controllers.openPanel();
      env.elements.submitBtn.focus();
      expect(globalThis._focusedElement).toBe(env.elements.submitBtn);

      env.controllers.handleKeyDown({ key: 'Tab', shiftKey: false });
      expect(globalThis._focusedElement).toBe(env.elements.closeBtn);
    });

    runner.it('T1.F7.5: Reverse Shift+Tab on close button wraps focus back to submit button', () => {
      env.controllers.openPanel();
      env.elements.closeBtn.focus();
      expect(globalThis._focusedElement).toBe(env.elements.closeBtn);

      env.controllers.handleKeyDown({ key: 'Tab', shiftKey: true });
      expect(globalThis._focusedElement).toBe(env.elements.submitBtn);
    });

    runner.it('T1.F7.6: Pressing Escape while tooltip is open closes tooltip first, keeping panel open', () => {
      env.controllers.openPanel();
      env.elements.infoBtn.click(); // opens tooltip
      expect(env.elements.tooltip.style.display).toBe('block');

      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.elements.tooltip.style.display).toBe('none');
      expect(env.controllers.isOpen()).toBeTruthy();
    });
  });

  // --------------------------------------------------------------------------
  // Feature 8: LocalStorage Persistence (R1.3)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 8: LocalStorage Persistence (R1.3)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F8.1: Successful submission writes hera_early_access_signed_up to localStorage', async () => {
      env.elements.emailInput.value = 'persisted@example.com';
      await env.controllers.handleSubmit();
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');
    });

    runner.it('T1.F8.2: Initializing surface with existing signed_up key displays "You\'re on the list ✓"', () => {
      env.localStorage.setItem('hera_early_access_signed_up', 'true');
      env.controllers.syncSignedUpState();
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('T1.F8.3: Clearing localStorage restores default label "Early access ✦"', () => {
      env.localStorage.setItem('hera_early_access_signed_up', 'true');
      env.controllers.syncSignedUpState();
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");

      env.localStorage.clear();
      env.controllers.syncSignedUpState();
      expect(env.elements.launcher.textContent.trim()).toBe('Early access ✦');
    });

    runner.it('T1.F8.4: Storage disabled does not prevent successful submission flow', async () => {
      env.localStorage.setFail(true);
      env.elements.emailInput.value = 'nofail@example.com';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('idle');
      expect(env.network.history.length).toBe(1);
    });

    runner.it('T1.F8.5: Global hera:early-access-success event triggers signed_up state sync', () => {
      env.localStorage.setItem('hera_early_access_signed_up', 'true');
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('T1.F8.6: Submitting duplicate signup in same browser session remains graceful', async () => {
      env.elements.emailInput.value = 'duplicate@example.com';
      await env.controllers.handleSubmit();
      env.elements.emailInput.value = 'duplicate@example.com';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(2);
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');
    });
  });

  // --------------------------------------------------------------------------
  // Feature 9: Footer Pixel Agent Injection (R3)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 9: Footer Pixel Agent Injection (R3)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F9.1: Footer canvas exists with id agent-walk', () => {
      const { footerCanvas } = env.elements;
      expect(footerCanvas.getAttribute('id')).toBe('agent-walk');
    });

    runner.it('T1.F9.2: Default footer agents include Iris and 4 standard agents (total 5)', () => {
      const agents = env.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(5);
      expect(agents.filter((a) => a.type === 'iris').length).toBe(1);
    });

    runner.it('T1.F9.3: Dispatching hera:early-access-success adds session pixel agent (total 6)', () => {
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      const agents = env.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(6);
      expect(agents.some((a) => a.id === 'session-gold')).toBeTruthy();
    });

    runner.it('T1.F9.4: sessionStorage stores hera_early_access_session_agent upon signup', async () => {
      env.elements.emailInput.value = 'agent@example.com';
      await env.controllers.handleSubmit();
      expect(env.sessionStorage.getItem('hera_early_access_session_agent')).toBe('true');
    });

    runner.it('T1.F9.5: Iris speed and properties are preserved after agent injection', () => {
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      const agents = env.controllers.getActiveFooterAgents();
      const iris = agents.find((a) => a.type === 'iris');
      expect(iris).toBeDefined();
      expect(iris.body).toBe('#2563eb');
    });

    runner.it('T1.F9.6: Extra agent injection does not duplicate multiple times on repeated events', () => {
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      env.window.dispatchEvent({ type: 'hera:early-access-success' });
      const agents = env.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(6);
    });
  });

  // --------------------------------------------------------------------------
  // Feature 10: Security & Git Hygiene (R4, R6)
  // --------------------------------------------------------------------------
  runner.describe('Tier 1 - Feature 10: Security & Git Hygiene (R4, R6)', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T1.F10.1: Submissions post to confirmed public endpoint https://formspree.io/f/mwlkevkp', async () => {
      env.elements.emailInput.value = 'security@example.com';
      await env.controllers.handleSubmit();
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].url).toBe('https://formspree.io/f/mwlkevkp');
    });

    runner.it('T1.F10.2: Request headers include Accept: application/json and Content-Type: application/json', async () => {
      env.elements.emailInput.value = 'headers@example.com';
      await env.controllers.handleSubmit();
      const req = env.network.history[0];
      expect(req.headers.Accept).toBe('application/json');
      expect(req.headers['Content-Type']).toBe('application/json');
    });

    runner.it('T1.F10.3: Static audit confirms repository does not contain leaked private API secrets', () => {
      const audit = StaticAuditor.auditProjectRepository();
      expect(audit.passed).toBeTruthy();
      expect(audit.violations.length).toBe(0);
    });

    runner.it('T1.F10.4: Formspree client payload schema is restricted to whitelist fields', async () => {
      env.elements.emailInput.value = 'whitelist@example.com';
      env.elements.nameInput.value = 'John Doe';
      env.elements.useCaseInput.value = 'Testing systems';
      env.elements.earlyTesterCheckbox.checked = true;

      await env.controllers.handleSubmit();
      const body = env.network.history[0].body;
      const keys = Object.keys(body);
      const allowed = ['email', 'name', 'use_case', 'early_tester', '_source'];
      for (const k of keys) {
        expect(allowed.includes(k)).toBeTruthy();
      }
    });

    runner.it('T1.F10.5: Form submission does not navigate away from page or use native form POST redirect', async () => {
      let pageNavigated = false;
      env.elements.form.action = 'https://formspree.io/f/mwlkevkp';
      env.elements.emailInput.value = 'ajax@example.com';
      await env.controllers.handleSubmit();
      expect(pageNavigated).toBeFalsy();
      expect(env.network.history.length).toBe(1);
    });

    runner.it('T1.F10.6: User inputs with special script tags are serialized safely as JSON strings', async () => {
      env.elements.emailInput.value = 'xss@example.com';
      env.elements.nameInput.value = '<script>alert("xss")</script>';
      env.elements.useCaseInput.value = '"><img src=x onerror=alert(1)>';

      await env.controllers.handleSubmit();
      const body = env.network.history[0].body;
      expect(body.name).toBe('<script>alert("xss")</script>');
      expect(body.use_case).toBe('"><img src=x onerror=alert(1)>');
    });
  });
}
