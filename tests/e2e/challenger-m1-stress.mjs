/**
 * Empirical Adversarial Challenger Stress Suite (Milestone 1)
 * 
 * Validates the actual implementation code from `src/components/EarlyAccessSurface.astro`
 * against high-stress edge cases, boundary conditions, and failure scenarios.
 */

import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

// Parse the actual Astro component to extract HTML template and client script
const componentPath = path.resolve('src/components/EarlyAccessSurface.astro');
const componentSource = fs.readFileSync(componentPath, 'utf8');

// Extract template HTML (before <script>)
const scriptTagIndex = componentSource.indexOf('<script>');
const htmlTemplate = componentSource.slice(0, scriptTagIndex).replace(/---[\s\S]*?---/, '').trim();

// Extract client script (inside <script>...</script>)
const rawScriptContent = componentSource
  .slice(componentSource.indexOf('<script>') + '<script>'.length, componentSource.lastIndexOf('</script>'));

// Use official TypeScript compiler to transpile TypeScript code to pristine JavaScript
const transpileResult = ts.transpileModule(rawScriptContent, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    removeComments: false,
  }
});

const scriptContent = transpileResult.outputText;

console.log('Component source extracted and transpiled:');
console.log(`- HTML Template size: ${htmlTemplate.length} bytes`);
console.log(`- Transpiled Script size: ${scriptContent.length} bytes`);

// ============================================================================
// Robust DOM & Browser Environment Simulator
// ============================================================================

class DOMTokenListSim {
  constructor(element) {
    this.element = element;
    this._tokens = new Set();
  }

  add(...tokens) {
    for (const t of tokens) {
      if (t) {
        this._tokens.add(t);
      }
    }
    this._sync();
  }

  remove(...tokens) {
    for (const t of tokens) {
      this._tokens.delete(t);
    }
    this._sync();
  }

  contains(token) {
    return this._tokens.has(token);
  }

  toggle(token, force) {
    if (force === true) {
      this.add(token);
      return true;
    } else if (force === false) {
      this.remove(token);
      return false;
    }
    if (this.contains(token)) {
      this.remove(token);
      return false;
    } else {
      this.add(token);
      return true;
    }
  }

  _sync() {
    this.element.attributes['class'] = Array.from(this._tokens).join(' ');
  }

  _parse(classStr = '') {
    this._tokens.clear();
    classStr.split(/\s+/).filter(Boolean).forEach(t => this._tokens.add(t));
  }
}

class DOMElementSim {
  constructor(tagName, id = '', classStr = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.attributes = {};
    this.classList = new DOMTokenListSim(this);
    if (classStr) {
      this.classList._parse(classStr);
    }
    this.children = [];
    this.parentNode = null;
    this.listeners = {};
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.textContent = '';
  }

  get offsetParent() {
    let curr = this;
    while (curr && typeof curr.getAttribute === 'function') {
      if (curr.classList.contains('hidden')) return null;
      curr = curr.parentNode;
    }
    return { tagName: 'BODY' };
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
    if (name === 'class') {
      this.classList._parse(String(value));
    }
  }

  getAttribute(name) {
    if (name === 'class') return Array.from(this.classList._tokens).join(' ');
    return this.attributes[name] !== undefined ? this.attributes[name] : null;
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'class') this.classList._tokens.clear();
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  contains(other) {
    if (!other) return false;
    if (other === this) return true;
    for (const child of this.children) {
      if (child.contains(other)) return true;
    }
    return false;
  }

  closest(selector) {
    if (selector.startsWith('[') && selector.endsWith(']')) {
      const attr = selector.slice(1, -1);
      let curr = this;
      while (curr && typeof curr.getAttribute === 'function') {
        if (curr.getAttribute(attr) !== null || (curr.attributes && curr.attributes[attr] !== undefined)) {
          return curr;
        }
        curr = curr.parentNode;
      }
    }
    return null;
  }

  querySelectorAll(selector) {
    const results = [];
    const subSelectors = selector.split(',').map(s => s.trim());

    function matchesAny(el) {
      for (const sel of subSelectors) {
        let isMatch = false;
        const tagMatch = sel.match(/^[a-z0-9]+/i);
        const tag = tagMatch ? tagMatch[0].toUpperCase() : '';

        if (!tag || el.tagName === tag) {
          if (sel.includes(':not([disabled])') && el.disabled) continue;
          if (sel.includes(':not([aria-hidden="true"])') && el.getAttribute('aria-hidden') === 'true') continue;
          if (sel.includes(':not([type="hidden"])') && el.getAttribute('type') === 'hidden') continue;
          if (sel.includes(':not([tabindex="-1"])') && el.getAttribute('tabindex') === '-1') continue;
          if (tag) isMatch = true;
          else if (sel.includes('[tabindex]') && el.getAttribute('tabindex') !== null) isMatch = true;
        }
        if (isMatch) return true;
      }
      return false;
    }

    function traverse(el) {
      for (const child of el.children) {
        if (matchesAny(child)) {
          results.push(child);
        }
        traverse(child);
      }
    }

    traverse(this);
    return results;
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length > 0 ? all[0] : null;
  }

  addEventListener(type, callback) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(callback);
  }

  removeEventListener(type, callback) {
    if (this.listeners[type]) {
      this.listeners[type] = this.listeners[type].filter(cb => cb !== callback);
    }
  }

  dispatchEvent(event) {
    if (!event.target) event.target = this;
    event.currentTarget = this;
    if (this.listeners[event.type]) {
      for (const cb of this.listeners[event.type]) {
        cb.call(this, event);
      }
    }
    if (event.bubbles && this.parentNode) {
      this.parentNode.dispatchEvent(event);
    }
    return !event.defaultPrevented;
  }

  focus() {
    globalThis.document.activeElement = this;
    this.dispatchEvent(new EventSim('focus'));
  }

  blur() {
    if (globalThis.document.activeElement === this) {
      globalThis.document.activeElement = globalThis.document.body;
    }
    this.dispatchEvent(new EventSim('blur'));
  }

  click() {
    this.dispatchEvent(new EventSim('click', { bubbles: true }));
  }

  getClientRects() {
    let curr = this;
    while (curr) {
      if (curr.classList.contains('hidden')) return [];
      curr = curr.parentNode;
    }
    return [{ top: 0, left: 0, width: 100, height: 100 }];
  }
}

class EventSim {
  constructor(type, init = {}) {
    this.type = type;
    this.bubbles = init.bubbles || false;
    this.cancelable = init.cancelable || false;
    this.defaultPrevented = false;
    this.target = null;
    this.currentTarget = null;
    Object.assign(this, init);
  }

  preventDefault() {
    this.defaultPrevented = true;
  }

  stopPropagation() {
    this.bubbles = false;
  }
}

class CustomEventSim extends EventSim {
  constructor(type, init = {}) {
    super(type, init);
    this.detail = init.detail || null;
  }
}

// Build DOM Environment
function setupEnvironment(storageOptions = {}) {
  const elementsById = {};
  const docListeners = {};
  const winListeners = {};

  const body = new DOMElementSim('body');
  
  // Create Launcher
  const launcher = new DOMElementSim('button', 'ea-launcher');
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-controls', 'ea-panel');
  launcher.setAttribute('data-early-access-trigger', 'launcher');
  const launcherLabel = new DOMElementSim('span', 'ea-launcher-label');
  launcherLabel.textContent = 'Early access ✦';
  launcher.appendChild(launcherLabel);
  body.appendChild(launcher);
  elementsById['ea-launcher'] = launcher;
  elementsById['ea-launcher-label'] = launcherLabel;

  // Create Panel
  const panel = new DOMElementSim('div', 'ea-panel');
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-labelledby', 'ea-title');
  panel.setAttribute('aria-describedby', 'ea-desc');
  panel.setAttribute('aria-hidden', 'true');
  panel.setAttribute('tabindex', '-1');
  panel.setAttribute('data-open', 'false');
  body.appendChild(panel);
  elementsById['ea-panel'] = panel;

  // Header
  const title = new DOMElementSim('h2', 'ea-title');
  title.textContent = 'Want in?';
  panel.appendChild(title);
  elementsById['ea-title'] = title;

  const infoBtn = new DOMElementSim('button', 'ea-info-btn');
  infoBtn.setAttribute('aria-expanded', 'false');
  infoBtn.setAttribute('aria-controls', 'ea-info-popover');
  panel.appendChild(infoBtn);
  elementsById['ea-info-btn'] = infoBtn;

  const infoPopover = new DOMElementSim('div', 'ea-info-popover', 'hidden');
  infoPopover.setAttribute('role', 'tooltip');
  infoPopover.setAttribute('aria-hidden', 'true');
  infoPopover.textContent = 'Early invites and occasional HERA updates.';
  panel.appendChild(infoPopover);
  elementsById['ea-info-popover'] = infoPopover;

  const closeBtn = new DOMElementSim('button', 'ea-close-btn');
  panel.appendChild(closeBtn);
  elementsById['ea-close-btn'] = closeBtn;

  // Form Container
  const formContainer = new DOMElementSim('div', 'ea-form-container');
  panel.appendChild(formContainer);
  elementsById['ea-form-container'] = formContainer;

  const form = new DOMElementSim('form', 'ea-form');
  form.reset = function() {
    emailInput.value = '';
    nameInput.value = '';
    useCaseInput.value = '';
    earlyTesterCheckbox.checked = false;
  };
  formContainer.appendChild(form);
  elementsById['ea-form'] = form;

  const emailInput = new DOMElementSim('input', 'ea-email');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('required', '');
  form.appendChild(emailInput);
  elementsById['ea-email'] = emailInput;

  const emailError = new DOMElementSim('p', 'ea-email-error', 'hidden');
  form.appendChild(emailError);
  elementsById['ea-email-error'] = emailError;

  const nameInput = new DOMElementSim('input', 'ea-name');
  nameInput.setAttribute('type', 'text');
  form.appendChild(nameInput);
  elementsById['ea-name'] = nameInput;

  const useCaseInput = new DOMElementSim('textarea', 'ea-use-case');
  form.appendChild(useCaseInput);
  elementsById['ea-use-case'] = useCaseInput;

  const earlyTesterCheckbox = new DOMElementSim('input', 'ea-early-tester');
  earlyTesterCheckbox.setAttribute('type', 'checkbox');
  form.appendChild(earlyTesterCheckbox);
  elementsById['ea-early-tester'] = earlyTesterCheckbox;

  const errorBanner = new DOMElementSim('div', 'ea-error-banner', 'hidden');
  form.appendChild(errorBanner);
  elementsById['ea-error-banner'] = errorBanner;

  const submitBtn = new DOMElementSim('button', 'ea-submit-btn');
  submitBtn.setAttribute('type', 'submit');
  const submitText = new DOMElementSim('span', 'ea-submit-text');
  submitText.textContent = 'Count me in';
  const spinner = new DOMElementSim('svg', 'ea-spinner', 'hidden');
  submitBtn.appendChild(submitText);
  submitBtn.appendChild(spinner);
  form.appendChild(submitBtn);
  elementsById['ea-submit-btn'] = submitBtn;
  elementsById['ea-submit-text'] = submitText;
  elementsById['ea-spinner'] = spinner;

  // Success view
  const successView = new DOMElementSim('div', 'ea-success-view', 'hidden');
  const successHeading = new DOMElementSim('p', 'ea-success-heading');
  successHeading.textContent = "You're in.";
  const successSub = new DOMElementSim('p', 'ea-success-sub', 'opacity-0');
  successSub.textContent = 'Go catch Iris.';
  successView.appendChild(successHeading);
  successView.appendChild(successSub);
  panel.appendChild(successView);
  elementsById['ea-success-view'] = successView;
  elementsById['ea-success-heading'] = successHeading;
  elementsById['ea-success-sub'] = successSub;

  // Mock Storage Setup with Fault Injection
  const localStore = new Map();
  const sessionStore = new Map();

  // Document mock
  const doc = {
    body,
    activeElement: body,
    getElementById(id) {
      return elementsById[id] || null;
    },
    addEventListener(type, cb) {
      if (!docListeners[type]) docListeners[type] = [];
      docListeners[type].push(cb);
    },
    removeEventListener(type, cb) {
      if (docListeners[type]) docListeners[type] = docListeners[type].filter(c => c !== cb);
    },
    dispatchEvent(event) {
      if (docListeners[event.type]) {
        for (const cb of docListeners[event.type]) cb(event);
      }
    }
  };

  body.parentNode = doc;

  // Window mock with dynamic getters for localStorage & sessionStorage
  const win = {
    addEventListener(type, cb) {
      if (!winListeners[type]) winListeners[type] = [];
      winListeners[type].push(cb);
    },
    removeEventListener(type, cb) {
      if (winListeners[type]) winListeners[type] = winListeners[type].filter(c => c !== cb);
    },
    dispatchEvent(event) {
      if (winListeners[event.type]) {
        for (const cb of winListeners[event.type]) cb(event);
      }
    }
  };

  Object.defineProperty(win, 'localStorage', {
    get() {
      if (storageOptions.localStorageThrowsAccess) {
        throw new Error('DOMException: SecurityError: The operation is insecure.');
      }
      return {
        getItem(k) {
          if (storageOptions.localStorageThrowsGet) throw new Error('SecurityError');
          return localStore.has(k) ? localStore.get(k) : null;
        },
        setItem(k, v) {
          if (storageOptions.localStorageThrowsSet) throw new Error('DOMException: QuotaExceededError');
          localStore.set(k, String(v));
        },
        removeItem(k) { localStore.delete(k); },
        clear() { localStore.clear(); }
      };
    },
    configurable: true,
  });

  Object.defineProperty(win, 'sessionStorage', {
    get() {
      if (storageOptions.sessionStorageThrowsAccess) {
        throw new Error('DOMException: SecurityError: The operation is insecure.');
      }
      return {
        getItem(k) {
          if (storageOptions.sessionStorageThrowsGet) throw new Error('SecurityError');
          return sessionStore.has(k) ? sessionStore.get(k) : null;
        },
        setItem(k, v) {
          if (storageOptions.sessionStorageThrowsSet) throw new Error('DOMException: QuotaExceededError');
          sessionStore.set(k, String(v));
        },
        removeItem(k) { sessionStore.delete(k); },
        clear() { sessionStore.clear(); }
      };
    },
    configurable: true,
  });

  globalThis.document = doc;
  globalThis.window = win;
  globalThis.Event = EventSim;
  globalThis.CustomEvent = CustomEventSim;

  return {
    elements: elementsById,
    localStore,
    sessionStore,
    doc,
    win,
  };
}

// ============================================================================
// Challenger Stress Test Runner
// ============================================================================

async function runChallengerStressTests() {
  console.log('\n================================================================');
  console.log('  EMPIRICAL CHALLENGER STRESS HARNESS — MILESTONE 1');
  console.log('================================================================\n');

  let passedCount = 0;
  let failedCount = 0;

  function assert(condition, message) {
    if (!condition) {
      throw new Error(`Assertion failed: ${message}`);
    }
  }

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  [PASS] ${name}`);
      passedCount++;
    } catch (err) {
      console.error(`  [FAIL] ${name}`);
      console.error(`         ${err.message}`);
      failedCount++;
    }
  }

  // --------------------------------------------------------------------------
  // TEST GROUP 1: FOCUS TRAP CYCLING (FORWARDS & BACKWARDS)
  // --------------------------------------------------------------------------
  console.log('--- TEST GROUP 1: Focus Trap Cycling ---');

  await test('1.1: Forward Tab wraps from last focusable element (#ea-submit-btn) to first focusable element (#ea-info-btn)', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    // Open panel
    launcher.click();
    await new Promise(r => setTimeout(r, 60)); // wait for auto-focus setTimeout (50ms)

    assert(panel.getAttribute('data-open') === 'true', 'Panel must be open');
    
    // Focus last element
    env.elements['ea-submit-btn'].focus();
    assert(env.doc.activeElement === env.elements['ea-submit-btn'], 'Active element should be submit button');

    // Simulate Tab key on active element (bubbles to panel)
    const tabEvent = new EventSim('keydown', { key: 'Tab', shiftKey: false, bubbles: true });
    env.doc.activeElement.dispatchEvent(tabEvent);

    assert(tabEvent.defaultPrevented === true, 'Tab event must be prevented from leaving modal');
    assert(env.doc.activeElement === env.elements['ea-info-btn'], 'Focus must wrap to #ea-info-btn (first element)');
  });

  await test('1.2: Backward Shift+Tab wraps from first focusable element (#ea-info-btn) to last focusable element (#ea-submit-btn)', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    // Focus first element
    env.elements['ea-info-btn'].focus();
    assert(env.doc.activeElement === env.elements['ea-info-btn'], 'Active element should be #ea-info-btn');

    // Simulate Shift+Tab key on active element (bubbles to panel)
    const shiftTabEvent = new EventSim('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
    env.doc.activeElement.dispatchEvent(shiftTabEvent);

    assert(shiftTabEvent.defaultPrevented === true, 'Shift+Tab event must be prevented');
    assert(env.doc.activeElement === env.elements['ea-submit-btn'], 'Focus must wrap backward to #ea-submit-btn');
  });

  await test('1.3: Focus trap adapts when inputs are disabled during loading state (only info-btn and close-btn remain)', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    // Simulate form loading state: disable all inputs and submit button
    env.elements['ea-email'].disabled = true;
    env.elements['ea-name'].disabled = true;
    env.elements['ea-use-case'].disabled = true;
    env.elements['ea-early-tester'].disabled = true;
    env.elements['ea-submit-btn'].disabled = true;

    // Last available element is now close-btn, first is info-btn
    env.elements['ea-close-btn'].focus();
    const tabEvent = new EventSim('keydown', { key: 'Tab', shiftKey: false, bubbles: true });
    env.doc.activeElement.dispatchEvent(tabEvent);

    assert(tabEvent.defaultPrevented === true, 'Tab must be intercepted');
    assert(env.doc.activeElement === env.elements['ea-info-btn'], 'Focus must wrap to #ea-info-btn when inputs are disabled');

    // Shift+Tab from info-btn wraps back to close-btn
    const shiftTabEvent = new EventSim('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
    env.doc.activeElement.dispatchEvent(shiftTabEvent);
    assert(env.doc.activeElement === env.elements['ea-close-btn'], 'Shift+Tab must wrap to #ea-close-btn when inputs are disabled');
  });

  await test('1.4: Focus trap ignores hidden elements when formContainer is hidden during success view', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    // Hide formContainer (simulating success state)
    env.elements['ea-form-container'].classList.add('hidden');

    env.elements['ea-close-btn'].focus();
    const tabEvent = new EventSim('keydown', { key: 'Tab', shiftKey: false, bubbles: true });
    env.doc.activeElement.dispatchEvent(tabEvent);

    assert(tabEvent.defaultPrevented === true, 'Tab prevented');
    assert(env.doc.activeElement === env.elements['ea-info-btn'], 'Focus wrapped across visible elements only');
  });

  // --------------------------------------------------------------------------
  // TEST GROUP 2: ESCAPE KEY HIERARCHY (TOOLTIP FIRST, THEN PANEL)
  // --------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 2: Escape Key Hierarchy ---');

  await test('2.1: Escape key closes tooltip popover first and leaves panel open, returning focus to #ea-info-btn', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    const infoBtn = env.elements['ea-info-btn'];
    const infoPopover = env.elements['ea-info-popover'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    assert(panel.getAttribute('data-open') === 'true', 'Panel is open');

    // Open tooltip via infoBtn click
    infoBtn.click();
    assert(!infoPopover.classList.contains('hidden'), 'Tooltip is open');
    assert(infoBtn.getAttribute('aria-expanded') === 'true', 'Info button aria-expanded=true');

    // Press Escape
    const escEvent1 = new EventSim('keydown', { key: 'Escape', bubbles: true });
    env.doc.dispatchEvent(escEvent1);

    // Verify tooltip closed
    assert(infoPopover.classList.contains('hidden'), 'Tooltip must be closed');
    assert(infoPopover.getAttribute('aria-hidden') === 'true', 'Tooltip aria-hidden=true');
    assert(infoBtn.getAttribute('aria-expanded') === 'false', 'Info button aria-expanded=false');
    // Verify panel is STILL open
    assert(panel.getAttribute('data-open') === 'true', 'Panel must remain OPEN');
    assert(env.doc.activeElement === infoBtn, 'Focus must return to #ea-info-btn');
  });

  await test('2.2: Second Escape keypress closes the panel and restores focus to launcher', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    // Press Escape
    const escEvent2 = new EventSim('keydown', { key: 'Escape', bubbles: true });
    env.doc.dispatchEvent(escEvent2);

    assert(panel.getAttribute('data-open') === 'false', 'Panel must be closed');
    assert(panel.getAttribute('aria-hidden') === 'true', 'Panel aria-hidden=true');
    assert(launcher.getAttribute('aria-expanded') === 'false', 'Launcher aria-expanded=false');
    assert(env.doc.activeElement === launcher, 'Focus must return to launcher trigger');
  });

  await test('2.3: Escape key when panel is closed is a safe no-op', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const panel = env.elements['ea-panel'];
    assert(panel.getAttribute('data-open') === 'false', 'Panel is initially closed');

    const escEvent = new EventSim('keydown', { key: 'Escape', bubbles: true });
    env.doc.dispatchEvent(escEvent);

    assert(panel.getAttribute('data-open') === 'false', 'Panel remains closed without error');
  });

  await test('2.4: Focus restoration to external trigger (e.g. Nav button) on panel close', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const panel = env.elements['ea-panel'];
    const navTrigger = new DOMElementSim('button', 'nav-early-access-trigger');
    navTrigger.setAttribute('data-early-access-trigger', 'nav');
    env.doc.body.appendChild(navTrigger);

    // Simulate clicking Nav trigger
    navTrigger.click();
    await new Promise(r => setTimeout(r, 60));

    assert(panel.getAttribute('data-open') === 'true', 'Panel opened via Nav trigger');

    // Close via Escape
    const escEvent = new EventSim('keydown', { key: 'Escape', bubbles: true });
    env.doc.dispatchEvent(escEvent);

    assert(panel.getAttribute('data-open') === 'false', 'Panel closed');
    assert(env.doc.activeElement === navTrigger, 'Focus correctly returned to nav trigger');
  });

  // --------------------------------------------------------------------------
  // TEST GROUP 3: LOCALSTORAGE & SESSIONSTORAGE IN RESTRICTED/DISABLED ENVIRONMENTS
  // --------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 3: Storage Resilience & Security Exceptions ---');

  await test('3.1: Survives SecurityError when localStorage getter throws on access (Safari Private Browsing / sandbox)', async () => {
    const env = setupEnvironment({ localStorageThrowsAccess: true });
    
    // Initial script load must not throw
    let loaded = false;
    try {
      const runner = new Function(scriptContent);
      runner();
      loaded = true;
    } catch (e) {
      throw new Error(`Component crashed on load with throwing localStorage: ${e.message}`);
    }
    assert(loaded, 'Component initialized smoothly in restricted storage environment');
    assert(env.elements['ea-launcher-label'].textContent === 'Early access ✦', 'Fallback label displayed');
  });

  await test('3.2: Survives QuotaExceededError when localStorage.setItem throws on form submission', async () => {
    const env = setupEnvironment({ localStorageThrowsSet: true });
    
    // Mock fetch to simulate successful Formspree submission
    globalThis.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ ok: true }),
    });

    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const emailInput = env.elements['ea-email'];
    const form = env.elements['ea-form'];
    const successView = env.elements['ea-success-view'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    emailInput.value = 'quota.test@example.com';
    
    let eventFired = false;
    env.win.addEventListener('hera:early-access-success', () => { eventFired = true; });

    // Submit form
    const submitEvent = new EventSim('submit', { cancelable: true });
    form.dispatchEvent(submitEvent);

    await new Promise(r => setTimeout(r, 50));

    assert(!successView.classList.contains('hidden'), 'Success view displayed despite storage quota exception');
    assert(eventFired === true, 'Success event dispatched');
  });

  await test('3.3: Survives SecurityError when sessionStorage getter throws on form submission', async () => {
    const env = setupEnvironment({ sessionStorageThrowsAccess: true });
    
    globalThis.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({ ok: true }),
    });

    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const emailInput = env.elements['ea-email'];
    const form = env.elements['ea-form'];
    const successView = env.elements['ea-success-view'];
    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    emailInput.value = 'session.test@example.com';
    const submitEvent = new EventSim('submit', { cancelable: true });
    form.dispatchEvent(submitEvent);

    await new Promise(r => setTimeout(r, 50));
    assert(!successView.classList.contains('hidden'), 'Success view displayed despite sessionStorage exception');
  });

  await test('3.4: Cross-tab storage synchronization updates launcher label when valid, ignores other keys', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    assert(env.elements['ea-launcher-label'].textContent === 'Early access ✦');

    // Simulate other key
    env.win.dispatchEvent(new CustomEventSim('storage', { key: 'other_key' }));
    assert(env.elements['ea-launcher-label'].textContent === 'Early access ✦');

    // Simulate hera key signed up in another tab
    env.localStore.set('hera_early_access_signed_up', 'true');
    env.win.dispatchEvent(new CustomEventSim('storage', { key: 'hera_early_access_signed_up' }));
    assert(env.elements['ea-launcher-label'].textContent === "You're on the list ✓");
  });

  // --------------------------------------------------------------------------
  // TEST GROUP 4: STATE MACHINE, LIFECYCLE & FORMSPREE SUBMISSION
  // --------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 4: State Machine & Submission Lifecycle ---');

  await test('4.1: Form rejects invalid email and shows inline error without submitting', async () => {
    const env = setupEnvironment();
    let fetchCalled = false;
    globalThis.fetch = async () => { fetchCalled = true; return { ok: true }; };

    const runner = new Function(scriptContent);
    runner();

    const emailInput = env.elements['ea-email'];
    const emailError = env.elements['ea-email-error'];
    const form = env.elements['ea-form'];
    emailInput.value = 'invalid-email-address';

    form.dispatchEvent(new EventSim('submit', { cancelable: true }));

    assert(fetchCalled === false, 'Fetch must not be called on invalid email');
    assert(!emailError.classList.contains('hidden'), 'Email error must be visible');
    assert(emailInput.getAttribute('aria-invalid') === 'true', 'Email input marked aria-invalid=true');
  });

  await test('4.2: Typing in email input clears validation error in real time', async () => {
    const env = setupEnvironment();
    const runner = new Function(scriptContent);
    runner();

    const emailInput = env.elements['ea-email'];
    const emailError = env.elements['ea-email-error'];
    const form = env.elements['ea-form'];
    emailInput.value = 'bad';
    form.dispatchEvent(new EventSim('submit', { cancelable: true }));
    assert(!emailError.classList.contains('hidden'), 'Error shown');

    // User types
    emailInput.dispatchEvent(new EventSim('input'));
    assert(emailError.classList.contains('hidden'), 'Error cleared on input');
    assert(emailInput.getAttribute('aria-invalid') === 'false', 'aria-invalid reset');
  });

  await test('4.3: Backend HTTP 500 error triggers error banner, restores submit button and focuses email', async () => {
    const env = setupEnvironment();
    globalThis.fetch = async () => ({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Internal Server Error' }),
    });

    const runner = new Function(scriptContent);
    runner();

    const emailInput = env.elements['ea-email'];
    const form = env.elements['ea-form'];
    const errorBanner = env.elements['ea-error-banner'];
    const submitBtn = env.elements['ea-submit-btn'];
    emailInput.value = 'server.error@example.com';

    form.dispatchEvent(new EventSim('submit', { cancelable: true }));
    await new Promise(r => setTimeout(r, 50));

    assert(!errorBanner.classList.contains('hidden'), 'Error banner must be visible');
    assert(submitBtn.disabled === false, 'Submit button must be re-enabled');
    assert(env.doc.activeElement === emailInput, 'Focus must return to email input');
  });

  await test('4.4: Full success lifecycle: payload matches Formspree contract, phased reveal, and auto-close sequence', async () => {
    const env = setupEnvironment();
    let sentPayload = null;
    let sentHeaders = null;

    globalThis.fetch = async (url, opts) => {
      sentPayload = JSON.parse(opts.body);
      sentHeaders = opts.headers;
      return { ok: true, status: 200, json: async () => ({ ok: true }) };
    };

    const runner = new Function(scriptContent);
    runner();

    const launcher = env.elements['ea-launcher'];
    const panel = env.elements['ea-panel'];
    const emailInput = env.elements['ea-email'];
    const nameInput = env.elements['ea-name'];
    const useCaseInput = env.elements['ea-use-case'];
    const earlyTesterCheckbox = env.elements['ea-early-tester'];
    const form = env.elements['ea-form'];
    const formContainer = env.elements['ea-form-container'];
    const successView = env.elements['ea-success-view'];
    const successHeading = env.elements['ea-success-heading'];
    const successSub = env.elements['ea-success-sub'];

    launcher.click();
    await new Promise(r => setTimeout(r, 60));

    emailInput.value = '  Favour.Fan@Example.Com  ';
    nameInput.value = '  Favour Challenger  ';
    useCaseInput.value = '  Adversarial Test Workflow  ';
    earlyTesterCheckbox.checked = true;

    form.dispatchEvent(new EventSim('submit', { cancelable: true }));
    await new Promise(r => setTimeout(r, 50));

    // Verify Payload Schema & Normalization
    assert(sentPayload.email === 'favour.fan@example.com', 'Email trimmed and lowercased');
    assert(sentPayload.name === 'Favour Challenger', 'Name trimmed');
    assert(sentPayload.use_case === 'Adversarial Test Workflow', 'Use case trimmed');
    assert(sentPayload.early_tester === true, 'early_tester boolean true');
    assert(sentPayload._source === 'hera-early-access', '_source parameter populated');
    assert(sentHeaders['Accept'] === 'application/json', 'Accept application/json header present');
    assert(sentHeaders['Content-Type'] === 'application/json', 'Content-Type application/json header present');

    // Verify Success View Transition
    assert(formContainer.classList.contains('hidden'), 'Form container hidden');
    assert(!successView.classList.contains('hidden'), 'Success view visible');
    assert(successHeading.textContent === "You're in.", "Heading reads 'You\\'re in.'");
    assert(successSub.classList.contains('opacity-0'), "Subheading initially hidden (opacity-0)");

    // Phased reveal of Iris phrase after 800ms
    await new Promise(r => setTimeout(r, 850));
    assert(!successSub.classList.contains('opacity-0'), "Subheading revealed ('Go catch Iris.') after delay");

    // Auto-close after 2200ms
    await new Promise(r => setTimeout(r, 1400));
    assert(panel.getAttribute('data-open') === 'false', 'Panel auto-closed after 2200ms');
    assert(env.elements['ea-launcher-label'].textContent === "You're on the list ✓", "Launcher updated to 'You\\'re on the list ✓'");
  });

  console.log('\n================================================================');
  console.log(`  SUMMARY: ${passedCount} passed, ${failedCount} failed`);
  console.log('================================================================\n');

  if (failedCount > 0) {
    process.exit(1);
  }
}

runChallengerStressTests().catch(err => {
  console.error('Fatal stress test runner exception:', err);
  process.exit(1);
});
