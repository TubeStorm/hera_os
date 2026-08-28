/**
 * Tier 4: Real-World Application Scenarios Test Suite
 * 
 * 5 End-to-End Realistic User Workflow Journeys:
 * 1. Reddit Referral Signup & Persistence Journey
 * 2. Casual Homepage Explorer (Inline Discovery & Dismiss)
 * 3. Validation Typo Correction & Success Sequence
 * 4. Mobile Narrow-Viewport Minimal Signup
 * 5. Spotty Connection Offline Recovery Journey
 */

import { expect, createEarlyAccessEnvironment } from './harness.mjs';

export function registerTier4Tests(runner) {
  runner.describe('Tier 4 - Real-World Application Scenarios', () => {
    let env;
    runner.beforeEach(() => {
      env = createEarlyAccessEnvironment();
    });

    runner.it('Scenario 1: Visitor from Reddit clicks Nav "Join early access", completes full form, observes footer agent, and verifies persistence across page reload', async () => {
      // 1. Visitor arrives on landing page
      expect(env.elements.launcher.textContent.trim()).toBe('Early access ✦');
      expect(env.controllers.getActiveFooterAgents().length).toBe(5);

      // 2. Visitor clicks "Join early access" in the navigation bar
      env.elements.navTrigger.click();
      expect(env.controllers.isOpen()).toBeTruthy();
      expect(env.elements.panel.style.display).toBe('block');

      // 3. Visitor fills in all fields
      env.elements.emailInput.value = 'reddit.visitor@ycombinator.news';
      env.elements.nameInput.value = 'Sam Altman Fan';
      env.elements.useCaseInput.value = 'Replacing fragmented AI chat logs with living dependency graphs';
      env.elements.earlyTesterCheckbox.checked = true;

      // 4. Visitor submits
      await env.controllers.handleSubmit();

      // 5. Verification: Formspree request verified
      expect(env.network.history.length).toBe(1);
      const req = env.network.history[0];
      expect(req.url).toBe('https://formspree.io/f/mwlkevkp');
      expect(req.body.email).toBe('reddit.visitor@ycombinator.news');
      expect(req.body.name).toBe('Sam Altman Fan');
      expect(req.body.use_case).toContain('living dependency graphs');
      expect(req.body.early_tester).toBe(true);
      expect(req.body._source).toBe('hera-early-access');

      // 6. Verification: Panel automatically closed after success sequence
      expect(env.controllers.isOpen()).toBeFalsy();

      // 7. Verification: 6th agent spawned in footer canvas
      const agents = env.controllers.getActiveFooterAgents();
      expect(agents.length).toBe(6);
      expect(agents.some((a) => a.id === 'session-gold')).toBeTruthy();

      // 8. Verification: LocalStorage contains signed up flag
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");

      // 9. Verification: Simulated page reload
      const reloadedEnv = createEarlyAccessEnvironment();
      reloadedEnv.localStorage.setItem('hera_early_access_signed_up', 'true');
      reloadedEnv.sessionStorage.setItem('hera_early_access_session_agent', 'true');
      reloadedEnv.controllers.syncSignedUpState();
      reloadedEnv.window.dispatchEvent({ type: 'hera:early-access-success' });

      expect(reloadedEnv.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
      expect(reloadedEnv.controllers.getActiveFooterAgents().length).toBe(6);
    });

    runner.it('Scenario 2: Visitor on Homepage scrolls to inline trigger, opens panel, reads tooltip, and dismisses with Escape without submitting', () => {
      // 1. Visitor scrolls to inline trigger
      const { inlineTrigger, infoBtn, tooltip } = env.elements;
      inlineTrigger.focus();
      expect(globalThis._focusedElement).toBe(inlineTrigger);

      // 2. Visitor clicks inline trigger
      inlineTrigger.click();
      expect(env.controllers.isOpen()).toBeTruthy();

      // 3. Visitor inspects privacy policy by clicking ⓘ icon
      infoBtn.click();
      expect(tooltip.style.display).toBe('block');
      expect(tooltip.textContent).toContain('No spam. Leave whenever you want.');

      // 4. Visitor presses Escape to dismiss tooltip
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(tooltip.style.display).toBe('none');
      expect(env.controllers.isOpen()).toBeTruthy();

      // 5. Visitor presses Escape again to dismiss early access dialog
      env.controllers.handleKeyDown({ key: 'Escape' });
      expect(env.controllers.isOpen()).toBeFalsy();

      // 6. Focus returned smoothly to inline trigger
      expect(globalThis._focusedElement).toBe(inlineTrigger);

      // 7. No network requests made, launcher remains default
      expect(env.network.history.length).toBe(0);
      expect(env.elements.launcher.textContent.trim()).toBe('Early access ✦');
    });

    runner.it('Scenario 3: Visitor opens bottom launcher, inputs invalid email with typo, sees inline validation error, corrects email, submits, and views success sequence', async () => {
      // 1. Open from bottom launcher
      env.elements.launcher.click();
      expect(env.controllers.isOpen()).toBeTruthy();

      // 2. Enter typo email
      env.elements.emailInput.value = 'founder@bad-domain';
      await env.controllers.handleSubmit();

      // 3. Verify inline error and no network request
      expect(env.controllers.getState()).toBe('invalid');
      expect(env.elements.emailError.style.display).toBe('block');
      expect(env.elements.emailError.textContent).toBe('Please enter a valid email address');
      expect(env.network.history.length).toBe(0);

      // 4. Correct email and submit
      env.elements.emailInput.value = 'founder@good-domain.com';
      await env.controllers.handleSubmit();

      // 5. Verify successful submission and auto-close
      expect(env.network.history.length).toBe(1);
      expect(env.network.history[0].body.email).toBe('founder@good-domain.com');
      expect(env.controllers.isOpen()).toBeFalsy();
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });

    runner.it('Scenario 4: Visitor on narrow mobile viewport (390px) clicks launcher, submits minimal email-only form, and verifies responsive constraints', async () => {
      // 1. Check mobile layout classes
      const { panel, emailInput, nameInput, useCaseInput, earlyTesterCheckbox } = env.elements;
      expect(panel.getAttribute('class')).toContain('max-w-[calc(100vw-32px)]');

      // 2. Open panel on mobile
      env.elements.launcher.click();
      expect(env.controllers.isOpen()).toBeTruthy();

      // 3. Visitor enters ONLY required email
      emailInput.value = 'minimal.mobile@icloud.com';
      expect(nameInput.value).toBe('');
      expect(useCaseInput.value).toBe('');
      expect(earlyTesterCheckbox.checked).toBeFalsy();

      // 4. Submit
      await env.controllers.handleSubmit();

      // 5. Verify payload contains only email + early_tester: false + _source
      expect(env.network.history.length).toBe(1);
      const payload = env.network.history[0].body;
      expect(payload.email).toBe('minimal.mobile@icloud.com');
      expect(payload.name).toBeUndefined();
      expect(payload.use_case).toBeUndefined();
      expect(payload.early_tester).toBe(false);
      expect(payload._source).toBe('hera-early-access');
    });

    runner.it('Scenario 5: Spotty network error recovery: Server returns 503, user retries when connected, and achieves clean success state', async () => {
      // 1. Open panel and fill form
      env.elements.navTrigger.click();
      env.elements.emailInput.value = 'spotty.network@traveller.org';
      env.elements.nameInput.value = 'Mobile Wanderer';

      // 2. Submit while experiencing HTTP 503 Service Unavailable
      env.network.statusToReturn = 503;
      await env.controllers.handleSubmit();

      // 3. Verify graceful error state
      expect(env.controllers.getState()).toBe('error');
      expect(env.elements.statusMessage.textContent).toBe('Something went wrong. Try again?');
      expect(env.elements.statusMessage.style.display).toBe('block');
      expect(env.elements.submitBtn.disabled).toBeFalsy();
      expect(env.controllers.isOpen()).toBeTruthy();

      // 4. Connection is restored
      env.network.statusToReturn = 200;
      await env.controllers.handleSubmit();

      // 5. Submission succeeds and closes
      expect(env.controllers.getState()).toBe('idle');
      expect(env.controllers.isOpen()).toBeFalsy();
      expect(env.localStorage.getItem('hera_early_access_signed_up')).toBe('true');
      expect(env.elements.launcher.textContent.trim()).toBe("You're on the list ✓");
    });
  });
}
