/**
 * E2E Test Harness & Simulation Engine for HERA OS Minimal Early-Access Funnel
 * 
 * Provides:
 * 1. Self-contained Test Runner & Assertion Library (zero external dependencies)
 * 2. DOM & Event Simulation (EventTarget, CustomEvent, KeyboardEvent, MouseEvent, DOMTokenList)
 * 3. Mock Storage (LocalStorageMock, SessionStorageMock with failure simulation)
 * 4. Mock Network & Formspree API Interceptor (payload capture, status simulation)
 * 5. Mock Canvas 2D Context (agent sprite rendering verification)
 * 6. Reference Specification Surface Model (for contract and behavioral verification)
 * 7. Static Code & Security Hygiene Scanner
 */

import fs from 'node:fs';
import path from 'node:path';

// ============================================================================
// 1. Minimal Test Runner & Assertion Engine
// ============================================================================

export class TestRunner {
  constructor(name = 'HERA Early Access E2E Test Suite') {
    this.name = name;
    this.suites = [];
    this.currentSuite = null;
    this.startTime = 0;
    this.totalTests = 0;
    this.passed = 0;
    this.failed = 0;
    this.skipped = 0;
    this.failures = [];
  }

  describe(name, fn) {
    const suite = {
      name,
      tests: [],
      beforeEachHooks: [],
      afterEachHooks: [],
      startTime: 0,
      duration: 0,
    };
    this.suites.push(suite);
    const prevSuite = this.currentSuite;
    this.currentSuite = suite;
    fn();
    this.currentSuite = prevSuite;
  }

  beforeEach(fn) {
    if (this.currentSuite) {
      this.currentSuite.beforeEachHooks.push(fn);
    }
  }

  afterEach(fn) {
    if (this.currentSuite) {
      this.currentSuite.afterEachHooks.push(fn);
    }
  }

  it(name, fn) {
    if (!this.currentSuite) {
      this.describe('Default Suite', () => {});
    }
    this.currentSuite.tests.push({ name, fn });
  }

  async run() {
    this.startTime = Date.now();
    this.totalTests = 0;
    this.passed = 0;
    this.failed = 0;
    this.failures = [];

    for (const suite of this.suites) {
      suite.startTime = Date.now();
      for (const test of suite.tests) {
        this.totalTests++;
        try {
          for (const hook of suite.beforeEachHooks) {
            await hook();
          }
          await test.fn();
          for (const hook of suite.afterEachHooks) {
            await hook();
          }
          this.passed++;
          test.passed = true;
        } catch (err) {
          this.failed++;
          test.passed = false;
          test.error = err;
          this.failures.push({
            suite: suite.name,
            test: test.name,
            error: err,
          });
        }
      }
      suite.duration = Date.now() - suite.startTime;
    }

    this.duration = Date.now() - this.startTime;
    return this.getSummary();
  }

  getSummary() {
    return {
      name: this.name,
      total: this.totalTests,
      passed: this.passed,
      failed: this.failed,
      skipped: this.skipped,
      duration: this.duration,
      failures: this.failures,
      suites: this.suites.map((s) => ({
        name: s.name,
        total: s.tests.length,
        passed: s.tests.filter((t) => t.passed).length,
        failed: s.tests.filter((t) => !t.passed).length,
        duration: s.duration,
      })),
    };
  }
}

function safeStringify(val) {
  if (val === undefined) return 'undefined';
  if (val === null) return 'null';
  if (typeof val === 'object' && val.tagName) {
    return `<${val.tagName.toLowerCase()}${val.id ? ` id="${val.id}"` : ''}${val.classList?.length ? ` class="${val.getAttribute('class')}"` : ''}>`;
  }
  try {
    return JSON.stringify(val);
  } catch {
    return String(val);
  }
}

export function expect(actual) {
  const matchers = (isNot = false) => ({
    toBe(expected) {
      const match = actual === expected;
      if (isNot ? match : !match) {
        throw new Error(
          isNot
            ? `Expected ${safeStringify(actual)} NOT to be ${safeStringify(expected)}`
            : `Expected ${safeStringify(expected)} but got ${safeStringify(actual)}`
        );
      }
    },
    toEqual(expected) {
      const aStr = safeStringify(actual);
      const eStr = safeStringify(expected);
      const match = aStr === eStr;
      if (isNot ? match : !match) {
        throw new Error(
          isNot
            ? `Expected values NOT to deeply equal: ${eStr}`
            : `Expected deep equality:\nExpected: ${eStr}\nActual:   ${aStr}`
        );
      }
    },
    toBeTruthy() {
      const match = Boolean(actual);
      if (isNot ? match : !match) {
        throw new Error(
          isNot
            ? `Expected ${safeStringify(actual)} to be falsy`
            : `Expected truthy value but got ${safeStringify(actual)}`
        );
      }
    },
    toBeFalsy() {
      const match = !actual;
      if (isNot ? match : !match) {
        throw new Error(
          isNot
            ? `Expected ${safeStringify(actual)} to be truthy`
            : `Expected falsy value but got ${safeStringify(actual)}`
        );
      }
    },
    toContain(expected) {
      let match = false;
      if (typeof actual === 'string') {
        match = actual.includes(expected);
      } else if (Array.isArray(actual)) {
        match = actual.includes(expected) || actual.some((item) => safeStringify(item) === safeStringify(expected));
      } else {
        throw new Error(`toContain called on non-string/non-array: ${typeof actual}`);
      }
      if (isNot ? match : !match) {
        throw new Error(
          isNot
            ? `Expected ${safeStringify(actual)} NOT to contain ${safeStringify(expected)}`
            : `Expected ${safeStringify(actual)} to contain ${safeStringify(expected)}`
        );
      }
    },
    toBeGreaterThan(expected) {
      const match = actual > expected;
      if (isNot ? match : !match) {
        throw new Error(`Expected ${actual} ${isNot ? 'NOT >' : '>'} ${expected}`);
      }
    },
    toBeGreaterThanOrEqual(expected) {
      const match = actual >= expected;
      if (isNot ? match : !match) {
        throw new Error(`Expected ${actual} ${isNot ? 'NOT >=' : '>='} ${expected}`);
      }
    },
    toBeLessThan(expected) {
      const match = actual < expected;
      if (isNot ? match : !match) {
        throw new Error(`Expected ${actual} ${isNot ? 'NOT <' : '<'} ${expected}`);
      }
    },
    toBeNull() {
      const match = actual === null;
      if (isNot ? match : !match) {
        throw new Error(`Expected ${isNot ? 'non-null' : 'null'} but got ${safeStringify(actual)}`);
      }
    },
    toBeDefined() {
      const match = actual !== undefined;
      if (isNot ? match : !match) {
        throw new Error(`Expected ${isNot ? 'undefined' : 'defined value'} but got ${safeStringify(actual)}`);
      }
    },
    toBeUndefined() {
      const match = actual === undefined;
      if (isNot ? match : !match) {
        throw new Error(`Expected undefined but got ${safeStringify(actual)}`);
      }
    },
    toThrow(expectedMessageRegex) {
      if (typeof actual !== 'function') {
        throw new Error(`expect(fn).toThrow() requires a function`);
      }
      let threw = false;
      let error = null;
      try {
        actual();
      } catch (e) {
        threw = true;
        error = e;
      }
      if (!threw) {
        throw new Error(`Expected function to throw, but it did not`);
      }
      if (expectedMessageRegex && !expectedMessageRegex.test(error.message)) {
        throw new Error(`Expected error matching ${expectedMessageRegex}, got: "${error.message}"`);
      }
    },
    toMatch(regex) {
      const match = regex.test(String(actual));
      if (isNot ? match : !match) {
        throw new Error(`Expected ${safeStringify(actual)} ${isNot ? 'NOT to match' : 'to match'} regex ${regex}`);
      }
    },
  });

  const api = matchers(false);
  api.not = matchers(true);
  return api;
}

// ============================================================================
// 2. DOM & Event Simulation Model
// ============================================================================

export class MockClassList {
  constructor(element) {
    this._element = element;
    this._classes = new Set();
  }

  _syncFromAttr(val) {
    this._classes.clear();
    if (val) {
      val.split(/\s+/).filter(Boolean).forEach((c) => this._classes.add(c));
    }
  }

  _syncToAttr() {
    this._element.attributes.set('class', Array.from(this._classes).join(' '));
  }

  add(...tokens) {
    for (const t of tokens) {
      if (t) this._classes.add(t);
    }
    this._syncToAttr();
  }

  remove(...tokens) {
    for (const t of tokens) {
      this._classes.delete(t);
    }
    this._syncToAttr();
  }

  toggle(token, force) {
    if (force !== undefined) {
      if (force) this.add(token);
      else this.remove(token);
      return force;
    }
    if (this._classes.has(token)) {
      this.remove(token);
      return false;
    } else {
      this.add(token);
      return true;
    }
  }

  contains(token) {
    return this._classes.has(token);
  }

  get length() {
    return this._classes.size;
  }

  values() {
    return this._classes.values();
  }

  [Symbol.iterator]() {
    return this._classes.values();
  }
}

export class MockEventTarget {
  constructor() {
    this._listeners = new Map();
  }

  addEventListener(type, listener, options = {}) {
    if (!this._listeners.has(type)) {
      this._listeners.set(type, []);
    }
    this._listeners.get(type).push({ listener, once: options.once || false });
  }

  removeEventListener(type, listener) {
    if (!this._listeners.has(type)) return;
    const list = this._listeners.get(type);
    const index = list.findIndex((l) => l.listener === listener);
    if (index !== -1) list.splice(index, 1);
  }

  dispatchEvent(event) {
    if (!event.target) event.target = this;
    event.currentTarget = this;
    const list = this._listeners.get(event.type) || [];
    const toRemove = [];
    for (const item of [...list]) {
      try {
        item.listener.call(this, event);
      } catch (err) {
        // Silently catch
      }
      if (item.once) toRemove.push(item);
    }
    for (const item of toRemove) {
      this.removeEventListener(event.type, item.listener);
    }
    return !event.defaultPrevented;
  }
}

export class MockDOMElement extends MockEventTarget {
  constructor(tagName = 'div', attributes = {}) {
    super();
    this.tagName = tagName.toUpperCase();
    this.attributes = new Map();
    this.classList = new MockClassList(this);
    this.children = [];
    this.parentNode = null;
    this.style = {};
    this._textContent = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.type = attributes.type || '';
    this.id = attributes.id || '';
    this._dataset = new Map();

    for (const [k, v] of Object.entries(attributes)) {
      this.setAttribute(k, v);
    }
  }

  get textContent() {
    if (this.children.length === 0) {
      return this._textContent;
    }
    return this._textContent + this.children.map((c) => c.textContent).join('');
  }

  set textContent(val) {
    this._textContent = String(val);
  }

  get dataset() {
    const obj = {};
    for (const [k, v] of this._dataset.entries()) {
      obj[k] = v;
    }
    return obj;
  }

  setAttribute(name, value) {
    const val = String(value);
    this.attributes.set(name, val);
    if (name === 'class') {
      this.classList._syncFromAttr(val);
    } else if (name === 'id') {
      this.id = val;
    } else if (name === 'value') {
      this.value = val;
    } else if (name.startsWith('data-')) {
      const camelKey = name.slice(5).replace(/-([a-z])/g, (_, g) => g.toUpperCase());
      this._dataset.set(camelKey, val);
    }
  }

  getAttribute(name) {
    if (name === 'class') return Array.from(this.classList).join(' ');
    if (name === 'id') return this.id;
    return this.attributes.get(name) ?? null;
  }

  hasAttribute(name) {
    if (name === 'class') return this.classList.length > 0;
    return this.attributes.has(name);
  }

  removeAttribute(name) {
    this.attributes.delete(name);
    if (name === 'class') this.classList._syncFromAttr('');
    if (name.startsWith('data-')) {
      const camelKey = name.slice(5).replace(/-([a-z])/g, (_, g) => g.toUpperCase());
      this._dataset.delete(camelKey);
    }
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      child.parentNode = null;
      this.children.splice(index, 1);
    }
    return child;
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length > 0 ? all[0] : null;
  }

  querySelectorAll(selector) {
    const results = [];
    const matchElement = (el) => {
      if (selector.includes(',')) {
        return selector.split(',').some((subSel) => el.matches(subSel.trim()));
      }
      return el.matches(selector);
    };

    const traverse = (node) => {
      for (const child of node.children) {
        if (matchElement(child)) {
          results.push(child);
        }
        traverse(child);
      }
    };
    traverse(this);
    return results;
  }

  matches(sel) {
    sel = sel.trim();
    if (sel.startsWith('#')) {
      return this.id === sel.slice(1);
    }
    if (sel.startsWith('.')) {
      return this.classList.contains(sel.slice(1));
    }
    if (sel.startsWith('[') && sel.endsWith(']')) {
      const inside = sel.slice(1, -1);
      if (inside.includes('=')) {
        const [attr, valRaw] = inside.split('=');
        const val = valRaw.replace(/^["']|["']$/g, '');
        return this.getAttribute(attr) === val;
      }
      return this.hasAttribute(inside);
    }
    if (/^[A-Za-z0-9_-]+$/.test(sel)) {
      return this.tagName === sel.toUpperCase();
    }
    return false;
  }

  focus() {
    if (this.disabled) return;
    if (globalThis._focusedElement && globalThis._focusedElement !== this) {
      globalThis._focusedElement.dispatchEvent({ type: 'blur' });
    }
    globalThis._focusedElement = this;
    this.dispatchEvent({ type: 'focus' });
  }

  blur() {
    if (globalThis._focusedElement === this) {
      globalThis._focusedElement = null;
      this.dispatchEvent({ type: 'blur' });
    }
  }

  click() {
    if (this.disabled) return;
    const event = {
      type: 'click',
      target: this,
      currentTarget: this,
      bubbles: true,
      cancelable: true,
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true;
      },
    };
    this.dispatchEvent(event);
    if (this.tagName === 'INPUT' && this.type === 'checkbox') {
      this.checked = !this.checked;
      this.dispatchEvent({ type: 'change', target: this });
    }
  }

  getBoundingClientRect() {
    return {
      top: 100,
      left: 100,
      bottom: 200,
      right: 300,
      width: 200,
      height: 100,
      x: 100,
      y: 100,
    };
  }
}

// ============================================================================
// 3. Storage Mocks
// ============================================================================

export class MockStorage {
  constructor(name = 'Storage') {
    this._data = new Map();
    this._failOnAccess = false;
  }

  setFail(fail = true) {
    this._failOnAccess = fail;
  }

  getItem(key) {
    if (this._failOnAccess) throw new Error('DOMException: SecurityError / Storage disabled');
    return this._data.has(key) ? this._data.get(key) : null;
  }

  setItem(key, value) {
    if (this._failOnAccess) throw new Error('DOMException: QuotaExceededError / Storage disabled');
    this._data.set(String(key), String(value));
  }

  removeItem(key) {
    if (this._failOnAccess) throw new Error('DOMException: SecurityError');
    this._data.delete(String(key));
  }

  clear() {
    if (this._failOnAccess) throw new Error('DOMException: SecurityError');
    this._data.clear();
  }

  get length() {
    return this._data.size;
  }

  key(index) {
    return Array.from(this._data.keys())[index] || null;
  }
}

// ============================================================================
// 4. Mock Network & Formspree Adapter
// ============================================================================

export class MockNetwork {
  constructor() {
    this.history = [];
    this.statusToReturn = 200;
    this.responseBody = { ok: true, next: 'https://formspree.io/thanks' };
    this.simulateNetworkFailure = false;
    this.delayMs = 0;
  }

  reset() {
    this.history = [];
    this.statusToReturn = 200;
    this.responseBody = { ok: true };
    this.simulateNetworkFailure = false;
    this.delayMs = 0;
  }

  async mockFetch(url, options = {}) {
    this.history.push({
      url,
      method: options.method || 'GET',
      headers: options.headers || {},
      body: options.body ? (typeof options.body === 'string' ? JSON.parse(options.body) : options.body) : null,
      timestamp: Date.now(),
    });

    if (this.delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, this.delayMs));
    }

    if (this.simulateNetworkFailure) {
      throw new TypeError('Failed to fetch (Network Error / Offline)');
    }

    const status = this.statusToReturn;
    const ok = status >= 200 && status < 300;
    const bodyObj = this.responseBody;

    return {
      status,
      ok,
      headers: {
        get: (h) => (h.toLowerCase() === 'content-type' ? 'application/json' : null),
      },
      json: async () => (typeof bodyObj === 'string' ? JSON.parse(bodyObj) : bodyObj),
      text: async () => (typeof bodyObj === 'string' ? bodyObj : JSON.stringify(bodyObj)),
    };
  }
}

// ============================================================================
// 5. Mock Canvas 2D Context
// ============================================================================

export class MockCanvasContext {
  constructor(canvas) {
    this.canvas = canvas;
    this.fillStyle = '#000000';
    this.fillRects = [];
    this.clearRects = [];
  }

  setTransform() {}
  fillRect(x, y, w, h) {
    this.fillRects.push({ x, y, w, h, fillStyle: this.fillStyle });
  }
  clearRect(x, y, w, h) {
    this.clearRects.push({ x, y, w, h });
  }
}

// ============================================================================
// 6. Complete Reference Specification Model for EarlyAccessSurface & Shell
// ============================================================================

export function createEarlyAccessEnvironment(initialState = {}) {
  const localStorage = new MockStorage('localStorage');
  const sessionStorage = new MockStorage('sessionStorage');
  const network = new MockNetwork();

  // Root container element
  const documentBody = new MockDOMElement('body');
  globalThis._focusedElement = null;

  // Window event emitter
  const windowTarget = new MockEventTarget();
  windowTarget.matchMedia = (query) => ({
    matches: query.includes('prefers-reduced-motion') && initialState.reducedMotion,
    addEventListener: () => {},
    removeEventListener: () => {},
  });

  // Nav Entry Point (R1.1)
  const navTrigger = new MockDOMElement('button', {
    class: 'rounded-pill px-3 py-1.5 text-sm transition-colors text-muted hover:text-ink',
    'data-early-access-trigger': '',
    'aria-label': 'Join early access',
  });
  navTrigger.textContent = 'Join early access';
  documentBody.appendChild(navTrigger);

  // Homepage Inline Entry Point (R1.2)
  const inlineContainer = new MockDOMElement('div', { class: 'inline-early-access-line my-8 text-sm' });
  const inlinePrompt = new MockDOMElement('span', { class: 'font-medium text-ink' });
  inlinePrompt.textContent = 'Want to try HERA before everyone else? ';
  const inlineTrigger = new MockDOMElement('button', {
    class: 'inline-trigger text-ink underline underline-offset-4',
    'data-early-access-trigger': '',
    'aria-label': 'Join early access',
  });
  inlineTrigger.textContent = 'Join early access →';
  inlineContainer.appendChild(inlinePrompt);
  inlineContainer.appendChild(inlineTrigger);
  documentBody.appendChild(inlineContainer);

  // Surface Component Elements (R1.3, R2, R4)
  const surfaceContainer = new MockDOMElement('div', {
    id: 'early-access-surface',
    class: 'fixed bottom-5 right-5 z-50 flex flex-col items-end',
  });

  // Persistent Launcher (R1.3)
  const launcher = new MockDOMElement('button', {
    id: 'early-access-launcher',
    class: 'rounded-pill border border-line bg-[color:var(--surface)] px-4 py-2 text-xs font-medium shadow-lift text-ink',
    'aria-haspopup': 'dialog',
    'aria-expanded': 'false',
    'aria-label': 'Early access sign up launcher',
  });
  launcher.textContent = 'Early access ✦';
  surfaceContainer.appendChild(launcher);

  // Floating Panel (R2)
  const panel = new MockDOMElement('div', {
    id: 'early-access-panel',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': 'Early access signup',
    class: 'hidden mb-3 w-[360px] max-w-[calc(100vw-32px)] rounded-card border border-line bg-[color:var(--surface)] p-6 shadow-lift',
  });
  panel.style.display = 'none';

  // Panel Header: Title + Info Tooltip Button + Close Button
  const header = new MockDOMElement('div', { class: 'flex items-center justify-between pb-3' });
  const titleGroup = new MockDOMElement('div', { class: 'flex items-center gap-2' });
  const title = new MockDOMElement('h3', { class: 'text-base font-semibold text-ink' });
  title.textContent = 'Want in?';
  const infoBtn = new MockDOMElement('button', {
    id: 'early-access-info-btn',
    class: 'text-xs text-muted hover:text-ink focus:outline-none',
    'aria-label': 'Privacy information',
    type: 'button',
  });
  infoBtn.textContent = 'ⓘ';

  const tooltip = new MockDOMElement('div', {
    id: 'early-access-tooltip',
    class: 'hidden absolute top-12 left-6 z-10 w-64 rounded-lg bg-ink p-2.5 text-[11px] leading-relaxed text-paper shadow-md',
  });
  tooltip.textContent = 'Early invites and occasional HERA updates. No spam. Leave whenever you want.';
  tooltip.style.display = 'none';

  titleGroup.appendChild(title);
  titleGroup.appendChild(infoBtn);
  titleGroup.appendChild(tooltip);

  const closeBtn = new MockDOMElement('button', {
    id: 'early-access-close-btn',
    class: 'text-muted hover:text-ink text-sm',
    'aria-label': 'Close early access panel',
    type: 'button',
  });
  closeBtn.textContent = '✕';

  header.appendChild(titleGroup);
  header.appendChild(closeBtn);
  panel.appendChild(header);

  // Status/Error Message Container
  const statusMessage = new MockDOMElement('div', {
    id: 'early-access-status',
    class: 'hidden py-2 text-xs font-medium',
    'aria-live': 'polite',
  });
  statusMessage.style.display = 'none';
  panel.appendChild(statusMessage);

  // Form (R2, R4)
  const form = new MockDOMElement('form', {
    id: 'early-access-form',
    class: 'flex flex-col gap-3',
  });

  // Email Field (Required)
  const emailGroup = new MockDOMElement('div', { class: 'flex flex-col gap-1' });
  const emailInput = new MockDOMElement('input', {
    id: 'early-access-email',
    name: 'email',
    type: 'email',
    required: 'true',
    placeholder: 'your@email.com',
    class: 'rounded-md border border-line bg-transparent px-3 py-2 text-sm text-ink',
  });
  const emailError = new MockDOMElement('span', {
    id: 'early-access-email-error',
    class: 'hidden text-[11px] text-red-500',
  });
  emailError.style.display = 'none';
  emailGroup.appendChild(emailInput);
  emailGroup.appendChild(emailError);
  form.appendChild(emailGroup);

  // Name Field (Optional)
  const nameInput = new MockDOMElement('input', {
    id: 'early-access-name',
    name: 'name',
    type: 'text',
    placeholder: 'Name (optional)',
    class: 'rounded-md border border-line bg-transparent px-3 py-2 text-sm text-ink',
  });
  form.appendChild(nameInput);

  // Use Case Field (Optional)
  const useCaseInput = new MockDOMElement('textarea', {
    id: 'early-access-usecase',
    name: 'use_case',
    rows: '2',
    placeholder: 'What would you use HERA for? (optional)',
    class: 'rounded-md border border-line bg-transparent px-3 py-2 text-sm text-ink',
  });
  form.appendChild(useCaseInput);

  // Early Tester Checkbox
  const checkboxGroup = new MockDOMElement('label', { class: 'flex items-center gap-2 text-xs text-muted' });
  const earlyTesterCheckbox = new MockDOMElement('input', {
    id: 'early-access-tester',
    name: 'early_tester',
    type: 'checkbox',
    class: 'rounded text-ink',
  });
  const checkboxLabel = new MockDOMElement('span');
  checkboxLabel.textContent = "I'm down to test unfinished things";
  checkboxGroup.appendChild(earlyTesterCheckbox);
  checkboxGroup.appendChild(checkboxLabel);
  form.appendChild(checkboxGroup);

  // Submit Button
  const submitBtn = new MockDOMElement('button', {
    id: 'early-access-submit',
    type: 'submit',
    class: 'mt-1 rounded-pill bg-ink py-2 text-xs font-semibold text-paper hover:opacity-90 disabled:opacity-50',
  });
  submitBtn.textContent = 'Count me in';
  form.appendChild(submitBtn);

  panel.appendChild(form);
  surfaceContainer.appendChild(panel);
  documentBody.appendChild(surfaceContainer);

  // Footer Canvas Mock (R3)
  const footerCanvas = new MockDOMElement('canvas', { id: 'agent-walk', class: 'block h-[88px] w-full' });
  const footerCtx = new MockCanvasContext(footerCanvas);
  footerCanvas.getContext = () => footerCtx;
  documentBody.appendChild(footerCanvas);

  // --------------------------------------------------------------------------
  // Component Logic & State Machine Controller
  // --------------------------------------------------------------------------
  let isOpen = false;
  let state = 'idle'; // idle | loading | success | error | invalid
  let lastFocusedTrigger = null;
  let activeFooterAgents = [
    { id: 1, type: 'other', body: '#7c6f64' },
    { id: 2, type: 'other', body: '#5b6b52' },
    { id: 3, type: 'other', body: '#6b5b73' },
    { id: 4, type: 'other', body: '#4f6272' },
    { id: 5, type: 'iris', body: '#2563eb', speed: 20 },
  ];

  const syncSignedUpState = () => {
    try {
      const signedUp = localStorage.getItem('hera_early_access_signed_up');
      if (signedUp === 'true') {
        launcher.textContent = "You're on the list ✓";
      } else {
        launcher.textContent = 'Early access ✦';
      }
    } catch {
      // Storage unavailable
    }
  };

  const syncFooterAgent = () => {
    try {
      const hasAgent = sessionStorage.getItem('hera_early_access_session_agent');
      if (hasAgent === 'true') {
        if (!activeFooterAgents.some((a) => a.id === 'session-gold')) {
          activeFooterAgents.push({
            id: 'session-gold',
            type: 'gold',
            body: '#ecd28d',
            speed: 16,
          });
        }
      }
    } catch {
      // Storage unavailable
    }
  };

  const openPanel = (triggerEl = null) => {
    isOpen = true;
    lastFocusedTrigger = triggerEl;
    launcher.setAttribute('aria-expanded', 'true');
    panel.style.display = 'block';
    panel.classList.remove('hidden');
    emailInput.focus();
  };

  const closePanel = () => {
    isOpen = false;
    launcher.setAttribute('aria-expanded', 'false');
    panel.style.display = 'none';
    panel.classList.add('hidden');
    tooltip.style.display = 'none';
    tooltip.classList.add('hidden');
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  const validateEmail = (email) => {
    if (!email || typeof email !== 'string') return false;
    const trimmed = email.trim();
    if (!trimmed) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(trimmed);
  };

  const handleSubmit = async () => {
    if (state === 'loading') return;

    emailError.style.display = 'none';
    emailError.classList.add('hidden');
    emailError.textContent = '';
    statusMessage.style.display = 'none';
    statusMessage.classList.add('hidden');

    const emailVal = emailInput.value.trim();
    if (!validateEmail(emailVal)) {
      state = 'invalid';
      emailError.textContent = 'Please enter a valid email address';
      emailError.style.display = 'block';
      emailError.classList.remove('hidden');
      emailInput.focus();
      return;
    }

    const payload = {
      email: emailVal,
      name: nameInput.value.trim() || undefined,
      use_case: useCaseInput.value.trim() || undefined,
      early_tester: earlyTesterCheckbox.checked,
      _source: 'hera-early-access',
    };

    state = 'loading';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Adding you...';

    try {
      const res = await network.mockFetch('https://formspree.io/f/mwlkevkp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      state = 'success';
      submitBtn.textContent = 'Count me in';
      submitBtn.disabled = false;

      try {
        localStorage.setItem('hera_early_access_signed_up', 'true');
        sessionStorage.setItem('hera_early_access_session_agent', 'true');
      } catch {
        // Storage restricted
      }
      syncSignedUpState();

      windowTarget.dispatchEvent({
        type: 'hera:early-access-success',
        detail: { email: emailVal },
      });

      if (!activeFooterAgents.some((a) => a.id === 'session-gold')) {
        activeFooterAgents.push({
          id: 'session-gold',
          type: 'gold',
          body: '#ecd28d',
          speed: 16,
        });
      }

      form.style.display = 'none';
      statusMessage.style.display = 'block';
      statusMessage.classList.remove('hidden');
      statusMessage.textContent = "You're in.";

      await new Promise((r) => setTimeout(r, 10));
      statusMessage.textContent = 'Go catch Iris.';

      await new Promise((r) => setTimeout(r, 10));
      closePanel();
      form.style.display = 'flex';
      statusMessage.style.display = 'none';
      statusMessage.classList.add('hidden');
      emailInput.value = '';
      nameInput.value = '';
      useCaseInput.value = '';
      earlyTesterCheckbox.checked = false;
      state = 'idle';
    } catch (err) {
      state = 'error';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Count me in';
      statusMessage.textContent = 'Something went wrong. Try again?';
      statusMessage.style.display = 'block';
      statusMessage.classList.remove('hidden');
    }
  };

  navTrigger.addEventListener('click', () => {
    if (isOpen) closePanel();
    else openPanel(navTrigger);
  });

  inlineTrigger.addEventListener('click', () => {
    if (isOpen) closePanel();
    else openPanel(inlineTrigger);
  });

  launcher.addEventListener('click', () => {
    if (isOpen) closePanel();
    else openPanel(launcher);
  });

  closeBtn.addEventListener('click', () => closePanel());

  let tooltipVisible = false;
  const toggleTooltip = () => {
    tooltipVisible = !tooltipVisible;
    if (tooltipVisible) {
      tooltip.style.display = 'block';
      tooltip.classList.remove('hidden');
    } else {
      tooltip.style.display = 'none';
      tooltip.classList.add('hidden');
    }
  };
  infoBtn.addEventListener('click', toggleTooltip);

  windowTarget.addEventListener('hera:open-early-access', (e) => {
    openPanel(e.detail?.trigger || null);
  });

  windowTarget.addEventListener('hera:close-early-access', () => {
    closePanel();
  });

  windowTarget.addEventListener('hera:early-access-success', () => {
    syncSignedUpState();
    try {
      if (!activeFooterAgents.some((a) => a.id === 'session-gold')) {
        activeFooterAgents.push({
          id: 'session-gold',
          type: 'gold',
          body: '#ecd28d',
          speed: 16,
        });
      }
    } catch {}
  });

  const interactiveElements = [closeBtn, infoBtn, emailInput, nameInput, useCaseInput, earlyTesterCheckbox, submitBtn];

  const handleKeyDown = (keyEvent) => {
    if (!isOpen) return;

    if (keyEvent.key === 'Escape') {
      keyEvent.preventDefault?.();
      if (tooltipVisible) {
        tooltipVisible = false;
        tooltip.style.display = 'none';
        tooltip.classList.add('hidden');
      } else {
        closePanel();
      }
      return;
    }

    if (keyEvent.key === 'Tab') {
      keyEvent.preventDefault?.();
      const current = globalThis._focusedElement;
      const visibleInteractive = interactiveElements.filter((el) => !el.disabled && el.style.display !== 'none');
      const idx = visibleInteractive.indexOf(current);

      if (keyEvent.shiftKey) {
        if (idx <= 0) {
          visibleInteractive[visibleInteractive.length - 1].focus();
        } else {
          visibleInteractive[idx - 1].focus();
        }
      } else {
        if (idx === -1 || idx >= visibleInteractive.length - 1) {
          visibleInteractive[0].focus();
        } else {
          visibleInteractive[idx + 1].focus();
        }
      }
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault?.();
    handleSubmit();
  });

  syncSignedUpState();
  syncFooterAgent();

  return {
    document: documentBody,
    window: windowTarget,
    localStorage,
    sessionStorage,
    network,
    elements: {
      navTrigger,
      inlineTrigger,
      launcher,
      panel,
      title,
      infoBtn,
      tooltip,
      closeBtn,
      form,
      emailInput,
      emailError,
      nameInput,
      useCaseInput,
      earlyTesterCheckbox,
      submitBtn,
      statusMessage,
      footerCanvas,
    },
    controllers: {
      openPanel,
      closePanel,
      handleSubmit,
      handleKeyDown,
      validateEmail,
      getState: () => state,
      isOpen: () => isOpen,
      getActiveFooterAgents: () => activeFooterAgents,
      syncSignedUpState,
    },
  };
}

// ============================================================================
// 7. Static Code & Security Hygiene Audit Engine
// ============================================================================

export class StaticAuditor {
  static auditProjectRepository(rootDir = process.cwd()) {
    const results = {
      violations: [],
      passed: true,
      scannedFiles: 0,
    };

    const filesToScan = [
      'PROJECT.md',
      'ORIGINAL_REQUEST.md',
      'TEST_INFRA.md',
      'src/components/Nav.astro',
      'src/components/Footer.astro',
      'src/pages/index.astro',
      'src/layouts/BaseLayout.astro',
      'src/data/site.ts',
    ];

    const secretKeyPattern = /(api[_-]?key|secret[_-]?key|private[_-]?key|access[_-]?token)\s*[:=]\s*['"][a-zA-Z0-9_]{16,}['"]/gi;

    for (const rel of filesToScan) {
      const fullPath = path.join(rootDir, rel);
      if (!fs.existsSync(fullPath)) continue;
      results.scannedFiles++;
      const content = fs.readFileSync(fullPath, 'utf8');

      const secrets = content.match(secretKeyPattern);
      if (secrets) {
        results.violations.push(`File ${rel} contains potential private secret key pattern`);
      }
    }

    results.passed = results.violations.length === 0;
    return results;
  }
}
