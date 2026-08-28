/**
 * Tier 3: Cross-Feature Combination Test Suite
 * 
 * 12 Complex Cross-Feature Interaction & Combinatorial Tests
 * Exercises pairwise permutations of:
 * - Triggers (Nav / Inline / Launcher)
 * - State machine transitions
 * - Keyboard focus trapping & Escape key hierarchy
 * - Tooltip popovers
 * - Network retry loops
 * - Storage persistence & multi-page simulation
 * - Footer pixel agent injection & canvas lifecycle
 */

import { expect, createEarlyAccessEnvironment } from './harness.mjs';

export function registerTier3Tests(runner) {
  runner.describe('Tier 3 - Cross-Feature Combinations', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('T3.1: Open from Nav -> Dismiss via Escape -> Open from Launcher (clean transition)', () => {
      // 1. Open via Nav trigger
      env.elements.navTrigger.click();
      expect(env.controllers.isOpen()).toBeTruthy();
      expect(globalThis._focusedElement).toBe(env.elements.emailInput);

      // 2. Dismiss with Escape
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.controllers.isOpen()).toBeFalsy();

      // 3. Open via Persistent Launcher
      env.elements.launcher.click();
      expect(env.controllers.isOpen()).toBeTruthy();
      expect(env.elements.launcher.getAttribute('aria-expanded')).toBe('true');
    });

    runner.it('T3.2: Open from Inline -> Invalid email -> Open Tooltip ⓘ -> Correct email -> Submit -> Verify Launcher text', async () => {
      // 1. Open from Inline Trigger
      env.elements.inlineTrigger.click();
      expect(env.controllers.isOpen()).toBeTruthy();

      // 2. Enter invalid email and submit
      env.elements.emailInput.value = 'invalid-email';
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('invalid');
      expect(env.elements.emailError.style.display).toBe('block');

      // 3. Click Info Tooltip ⓘ to inspect privacy notice while error is visible
      env.elements.infoBtn.click();
      expect(env.elements.tooltip.style.display).toBe('block');
      expect(env.elements.emailError.style.display).toBe('block');

      // 4. Correct email and submit
      env.elements.emailInput.value = 'corrected.founder@example.com';
      await env.controllers.handleSubmit();

      // 5. Verify auto-close and launcher updated
      expect(env.controllers.isOpen()).toBeFalsy();
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('T3.3: Open from Nav -> Submit with early_tester checkbox -> Verify Footer agent + Launcher update', async () => {
      // Check initial footer agent count (5)
      expect(env.controllers.getActiveFooterAgents().length).toBe(5);

      // Open from Nav
      env.elements.navTrigger.click();
      env.elements.emailInput.value = 'earlytester@hera.os';
      env.elements.nameInput.value = 'Beta Tester';
      env.elements.earlyTesterCheckbox.checked = true;

      await env.controllers.handleSubmit();

      // Verify payload
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.early_tester).toBe(true);

      // Verify Footer now has 6th agent
      const agents = env.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(6);
      expect(agents.some((a) => a.id === 'session-gold')).toBeTruthy();

      // Verify Launcher updated
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('T3.4: Open from Launcher -> Fail Network -> Show Error -> Restore Network -> Retry -> Success', async () => {
      env.elements.launcher.click();
      env.elements.emailInput.value = 'resilient@example.com';

      // 1. Simulate 500 Network failure
      env.network.statusToReturn = 500;
      await env.controllers.handleSubmit();
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
      expect(env.elements.submitBtn.disabled).toBeFalsy();

      // 2. Restore network 200 OK and retry
      env.network.statusToReturn = 200;
      await env.controllers.handleSubmit();

      // 3. Verify success and storage
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T3.5: Full Keyboard Focus Trap cycle (Nav trigger -> inputs -> closeBtn -> wrap to email -> Escape -> Nav restored)', () => {
      env.elements.navTrigger.focus();
      env.elements.navTrigger.click();
      expect(env.controllers.isOpen()).toBeTruthy();

      // Tab through fields to submit button
      env.elements.submitBtn.focus();
      expect(globalThis._focusedElement).toBe(env.elements.submitBtn);

      // Forward Tab wraps to close button
      env.controllers.handleKeyDown({ key: 'Tab', shiftKey: false });
      expect(globalThis._focusedElement).toBe(env.elements.closeBtn);

      // Forward Tab from close button wraps to info button
      env.controllers.handleKeyDown({ key: 'Tab', shiftKey: false });
      expect(globalThis._focusedElement).toBe(env.elements.infoBtn);

      // Escape restores focus to Nav trigger
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.controllers.isOpen()).toBeFalsy();
      expect(globalThis._focusedElement).toBe(env.elements.navTrigger);
    });

    runner.it('T3.6: Shift+Tab wrap from first element (close button) to last element (submit button)', () => {
      env.elements.inlineTrigger.focus();
      env.elements.inlineTrigger.click();

      env.elements.closeBtn.focus();
      env.controllers.handleKeyDown({ key: 'Tab', shiftKey: true });
      expect(globalThis._focusedElement).toBe(env.elements.submitBtn);

      // Close via close button click
      env.elements.closeBtn.click();
      expect(env.controllers.isOpen()).toBeFalsy();
      expect(globalThis._focusedElement).toBe(env.elements.inlineTrigger);
    });

    runner.it('T3.7: Persistence across simulated page navigation to /about route', async () => {
      // Submit on home page
      env.elements.emailInput.value = 'multipage@example.com';
      await env.controllers.handleSubmit();
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');

      // Simulate initializing /about page environment with existing localStorage
      const aboutEnv = createEarlyAccessEnvironment();
      aboutEnv.localStorage.setItem('hera_early_access_signed_up', 'true');
      aboutEnv.controllers.syncSignedUpState();

      expect(aboutEnv.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('T3.8: Footer session agent initializes when sessionStorage has active key on load', () => {
      // Simulate session storage pre-populated
      const newSessionEnv = createEarlyAccessEnvironment();
      newSessionEnv.sessionStorage.setItem('hera_early_access_session_agent', 'true');
      newSessionEnv.window.dispatchEvent({ type: 'hera:early-access-success' });

      const agents = newSessionEnv.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(6);
      expect(agents.find((a) => a.id === 'session-gold')).toBeDefined();
    });

    runner.it('T3.9: Tooltip hierarchical Escape dismissal: Closes tooltip before closing dialog', () => {
      env.controllers.openPanel();
      env.elements.infoBtn.click();
      expect(env.elements.tooltip.style.display).toBe('block');

      // 1st Escape closes tooltip only
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.elements.tooltip.style.display).toBe('none');
      expect(env.controllers.isOpen()).toBeTruthy();

      // 2nd Escape closes panel
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.controllers.isOpen()).toBeFalsy();
    });

    runner.it('T3.10: Concurrent trigger clicks with Unicode submission and agent check', async () => {
      // Rapid trigger sequence
      env.elements.navTrigger.click();
      env.elements.launcher.click(); // closes
      env.elements.inlineTrigger.click(); // reopens

      expect(env.controllers.isOpen()).toBeTruthy();

      env.elements.emailInput.value = 'founder@unicodë.org';
      env.elements.nameInput.value = '💡 AI Architect';
      env.elements.useCaseInput.value = 'Designing multi-lane dependency graphs with Iris ✨';
      env.elements.earlyTesterCheckbox.checked = true;

      await env.controllers.handleSubmit();

      expect(env.network.history[0].body.name).toBe('💡 AI Architect');
      expect(env.network.history[0].body.use_case).toContain('multi-lane dependency graphs');
      expect(env.controllers.getActiveFooterAgents().length).toBe(6);
    });

    runner.it('T3.11: Form fields are completely cleared for clean state after successful flow', async () => {
      env.controllers.openPanel();
      env.elements.emailInput.value = 'clean@example.com';
      env.elements.nameInput.value = 'Clean Name';
      env.elements.useCaseInput.value = 'Clean Case';
      env.elements.earlyTesterCheckbox.checked = true;

      await env.controllers.handleSubmit();

      // Reopen panel
      env.controllers.openPanel();
      expect(env.elements.emailInput.value).toBe('');
      expect(env.elements.nameInput.value).toBe('');
      expect(env.elements.useCaseInput.value).toBe('');
      expect(env.elements.earlyTesterCheckbox.checked).toBeFalsy();
    });

    runner.it('T3.12: Mobile narrow viewport layout constraints: panel width bounded within max-w-[calc(100vw-32px)]', () => {
      const { panel } = env.elements;
      const classList = panel.getAttribute('class');
      expect(classList).toContain('max-w-[calc(100vw-32px)]');
      expect(classList).toContain('w-[360px]');
    });
  });
}
