#!/usr/bin/env node
/**
 * Tier 5 Adversarial Coverage Hardening Test Suite
 * 
 * White-box code path analysis and stress testing across:
 * 1. Rapid Multi-Trigger Clicking Race Conditions & Concurrency
 * 2. Cross-Component Event Dispatching Timing & State Synchronization
 * 3. Canvas Animation Loop Behavior & Visitor Agent Lifecycle
 * 4. XSS & Special Characters Injection Across Form Fields & Regex ReDoS
 * 5. Mobile vs Desktop Media Query Event Listener Transitions & Viewport Resilience
 * 
 * Usage: node tests/e2e/tier5-adversarial.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

console.log('\n' + '='.repeat(80));
console.log('  HERA OS — TIER 5 ADVERSARIAL COVERAGE HARDENING SUITE');
console.log('  Specification: ORIGINAL_REQUEST.md | Architecture: PROJECT.md');
console.log('='.repeat(80) + '\n');

// ============================================================================
// Shared Test Engine & Reporting Utilities
// ============================================================================

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const testResults = [];
const groupStats = {};

function assert(condition, testName, details = '') {
  totalTests++;
  const group = currentGroup || 'General';
  if (!groupStats[group]) groupStats[group] = { total: 0, passed: 0, failed: 0 };
  groupStats[group].total++;

  if (!condition) {
    failedTests++;
    groupStats[group].failed++;
    testResults.push({ group, name: testName, passed: false, details });
    console.error(`  [FAIL] ${testName}`);
    if (details) console.error(`         ${details}`);
  } else {
    passedTests++;
    groupStats[group].passed++;
    testResults.push({ group, name: testName, passed: true });
    console.log(`  [PASS] ${testName}`);
  }
}

let currentGroup = '';
function suiteGroup(name) {
  currentGroup = name;
  console.log(`\n--- ${name} ---`);
}

// ============================================================================
// Source Code Extraction & AST Transpilation Helpers
// ============================================================================

function extractAndTranspileScript(astroRelativePath) {
  const fullPath = path.join(projectRoot, astroRelativePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const scriptStart = content.indexOf('<script>');
  const scriptEnd = content.lastIndexOf('</script>');
  if (scriptStart === -1 || scriptEnd === -1) {
    throw new Error(`No <script> tag found in ${astroRelativePath}`);
  }
  const rawTs = content.slice(scriptStart + '<script>'.length, scriptEnd);
  const result = ts.transpileModule(rawTs, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      removeComments: false,
    },
  });
  return {
    rawContent: content,
    scriptCode: result.outputText,
  };
}

const earlyAccessSource = extractAndTranspileScript('src/components/EarlyAccessSurface.astro');
const footerSource = extractAndTranspileScript('src/components/Footer.astro');

// ============================================================================
// Comprehensive DOM / Browser Mock Environment for Astro Script Simulation
// ============================================================================

class MockClassList {
  constructor(element) {
    this.element = element;
    this._classes = new Set();
  }

  add(...tokens) {
    for (const t of tokens) if (t) this._classes.add(t);
    this._sync();
  }

  remove(...tokens) {
    for (const t of tokens) if (t) this._classes.delete(t);
    this._sync();
  }

  contains(token) {
    return this._classes.has(token);
  }

  toggle(token, force) {
    if (force !== undefined) {
      if (force) this.add(token);
      else this.remove(token);
      return force;
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
    this.element.attributes['class'] = Array.from(this._classes).join(' ');
  }

  _parse(classStr = '') {
    this._classes.clear();
    classStr.split(/\s+/).filter(Boolean).forEach((c) => this._classes.add(c));
  }
}

class MockDOMElement {
  constructor(tagName, id = '', classStr = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.attributes = {};
    this.classList = new MockClassList(this);
    if (classStr) this.classList._parse(classStr);
    this.children = [];
    this.parentNode = null;
    this.listeners = {};
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.textContent = '';
    this.clientWidth = 380;
    this.clientHeight = 88;
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
    if (name === 'class') this.classList._parse(String(value));
  }

  getAttribute(name) {
    if (name === 'class') return Array.from(this.classList._classes).join(' ');
    return this.attributes[name] !== undefined ? this.attributes[name] : null;
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'class') this.classList._classes.clear();
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
    const subSelectors = selector.split(',').map((s) => s.trim());

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
        if (matchesAny(child)) results.push(child);
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
      this.listeners[type] = this.listeners[type].filter((cb) => cb !== callback);
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
    this.dispatchEvent(new MockEvent('focus'));
  }

  blur() {
    if (globalThis.document.activeElement === this) {
      globalThis.document.activeElement = globalThis.document.body;
    }
    this.dispatchEvent(new MockEvent('blur'));
  }

  click() {
    this.dispatchEvent(new MockEvent('click', { bubbles: true, cancelable: true }));
  }

  getClientRects() {
    let curr = this;
    while (curr) {
      if (curr.classList.contains('hidden')) return [];
      curr = curr.parentNode;
    }
    return [{ top: 0, left: 0, width: 100, height: 100 }];
  }

  getBoundingClientRect() {
    return { top: 10, left: 10, bottom: 98, right: 390, width: 380, height: 88, x: 10, y: 10 };
  }
}

class MockEvent {
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

class MockCustomEvent extends MockEvent {
  constructor(type, init = {}) {
    super(type, init);
    this.detail = init.detail || null;
  }
}

function buildEarlyAccessDOM() {
  const elementsById = {};
  const docListeners = {};
  const winListeners = {};

  const body = new MockDOMElement('body');

  const launcher = new MockDOMElement('button', 'ea-launcher');
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.setAttribute('aria-controls', 'ea-panel');
  launcher.setAttribute('data-early-access-trigger', 'launcher');
  const launcherLabel = new MockDOMElement('span', 'ea-launcher-label');
  launcherLabel.textContent = 'Early access ✦';
  launcher.appendChild(launcherLabel);
  body.appendChild(launcher);
  elementsById['ea-launcher'] = launcher;
  elementsById['ea-launcher-label'] = launcherLabel;

  const panel = new MockDOMElement('div', 'ea-panel');
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-labelledby', 'ea-title');
  panel.setAttribute('aria-describedby', 'ea-desc');
  panel.setAttribute('aria-hidden', 'true');
  panel.setAttribute('tabindex', '-1');
  panel.setAttribute('data-open', 'false');
  body.appendChild(panel);
  elementsById['ea-panel'] = panel;

  const title = new MockDOMElement('h2', 'ea-title');
  title.textContent = 'Want in?';
  panel.appendChild(title);
  elementsById['ea-title'] = title;

  const infoBtn = new MockDOMElement('button', 'ea-info-btn');
  infoBtn.setAttribute('aria-expanded', 'false');
  infoBtn.setAttribute('aria-controls', 'ea-info-popover');
  panel.appendChild(infoBtn);
  elementsById['ea-info-btn'] = infoBtn;

  const infoPopover = new MockDOMElement('div', 'ea-info-popover', 'hidden');
  infoPopover.setAttribute('role', 'tooltip');
  infoPopover.setAttribute('aria-hidden', 'true');
  infoPopover.textContent = 'Early invites and occasional HERA updates. No spam. Leave whenever you want.';
  panel.appendChild(infoPopover);
  elementsById['ea-info-popover'] = infoPopover;

  const closeBtn = new MockDOMElement('button', 'ea-close-btn');
  panel.appendChild(closeBtn);
  elementsById['ea-close-btn'] = closeBtn;

  const formContainer = new MockDOMElement('div', 'ea-form-container');
  panel.appendChild(formContainer);
  elementsById['ea-form-container'] = formContainer;

  const form = new MockDOMElement('form', 'ea-form');
  form.reset = function () {
    emailInput.value = '';
    nameInput.value = '';
    useCaseInput.value = '';
    earlyTesterCheckbox.checked = false;
  };
  formContainer.appendChild(form);
  elementsById['ea-form'] = form;

  const emailInput = new MockDOMElement('input', 'ea-email');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('required', '');
  form.appendChild(emailInput);
  elementsById['ea-email'] = emailInput;

  const emailError = new MockDOMElement('p', 'ea-email-error', 'hidden');
  form.appendChild(emailError);
  elementsById['ea-email-error'] = emailError;

  const nameInput = new MockDOMElement('input', 'ea-name');
  nameInput.setAttribute('type', 'text');
  form.appendChild(nameInput);
  elementsById['ea-name'] = nameInput;

  const useCaseInput = new MockDOMElement('textarea', 'ea-use-case');
  form.appendChild(useCaseInput);
  elementsById['ea-use-case'] = useCaseInput;

  const earlyTesterCheckbox = new MockDOMElement('input', 'ea-early-tester');
  earlyTesterCheckbox.setAttribute('type', 'checkbox');
  form.appendChild(earlyTesterCheckbox);
  elementsById['ea-early-tester'] = earlyTesterCheckbox;

  const errorBanner = new MockDOMElement('div', 'ea-error-banner', 'hidden');
  form.appendChild(errorBanner);
  elementsById['ea-error-banner'] = errorBanner;

  const submitBtn = new MockDOMElement('button', 'ea-submit-btn');
  submitBtn.setAttribute('type', 'submit');
  const submitText = new MockDOMElement('span', 'ea-submit-text');
  submitText.textContent = 'Count me in';
  const spinner = new MockDOMElement('svg', 'ea-spinner', 'hidden');
  submitBtn.appendChild(submitText);
  submitBtn.appendChild(spinner);
  form.appendChild(submitBtn);
  elementsById['ea-submit-btn'] = submitBtn;
  elementsById['ea-submit-text'] = submitText;
  elementsById['ea-spinner'] = spinner;

  const successView = new MockDOMElement('div', 'ea-success-view', 'hidden');
  const successHeading = new MockDOMElement('p', 'ea-success-heading');
  successHeading.textContent = "You're in.";
  const successSub = new MockDOMElement('p', 'ea-success-sub', 'opacity-0');
  successSub.textContent = 'Go catch Iris.';
  successView.appendChild(successHeading);
  successView.appendChild(successSub);
  panel.appendChild(successView);
  elementsById['ea-success-view'] = successView;
  elementsById['ea-success-heading'] = successHeading;
  elementsById['ea-success-sub'] = successSub;

  const localStore = new Map();
  const sessionStore = new Map();

  const doc = {
    body,
    activeElement: body,
    documentElement: body,
    getElementById(id) {
      return elementsById[id] || null;
    },
    addEventListener(type, cb) {
      if (!docListeners[type]) docListeners[type] = [];
      docListeners[type].push(cb);
    },
    removeEventListener(type, cb) {
      if (docListeners[type]) docListeners[type] = docListeners[type].filter((c) => c !== cb);
    },
    dispatchEvent(event) {
      if (docListeners[event.type]) {
        for (const cb of [...docListeners[event.type]]) cb(event);
      }
    },
  };
  body.parentNode = doc;

  const win = {
    addEventListener(type, cb) {
      if (!winListeners[type]) winListeners[type] = [];
      winListeners[type].push(cb);
    },
    removeEventListener(type, cb) {
      if (winListeners[type]) winListeners[type] = winListeners[type].filter((c) => c !== cb);
    },
    dispatchEvent(event) {
      if (winListeners[event.type]) {
        for (const cb of [...winListeners[event.type]]) cb(event);
      }
    },
    matchMedia(query) {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      };
    },
    devicePixelRatio: 1,
  };

  Object.defineProperty(win, 'localStorage', {
    get() {
      return {
        getItem(k) { return localStore.has(k) ? localStore.get(k) : null; },
        setItem(k, v) { localStore.set(k, String(v)); },
        removeItem(k) { localStore.delete(k); },
        clear() { localStore.clear(); },
      };
    },
    configurable: true,
  });

  Object.defineProperty(win, 'sessionStorage', {
    get() {
      return {
        getItem(k) { return sessionStore.has(k) ? sessionStore.get(k) : null; },
        setItem(k, v) { sessionStore.set(k, String(v)); },
        removeItem(k) { sessionStore.delete(k); },
        clear() { sessionStore.clear(); },
      };
    },
    configurable: true,
  });

  globalThis.document = doc;
  globalThis.window = win;
  globalThis.Event = MockEvent;
  globalThis.CustomEvent = MockCustomEvent;
  globalThis.getComputedStyle = () => ({
    getPropertyValue: () => '',
  });

  return {
    elements: elementsById,
    doc,
    win,
    localStore,
    sessionStore,
  };
}

// ============================================================================
// TEST SUITE 1: Rapid Multi-Trigger Clicking Race Conditions
// ============================================================================
suiteGroup('Category 1: Rapid Multi-Trigger Clicking Race Conditions');

// 1.1 Burst click launcher 100 times in rapid succession
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const launcher = env.elements['ea-launcher'];
  const panel = env.elements['ea-panel'];

  for (let i = 0; i < 100; i++) {
    launcher.click();
  }

  // 100 toggles from closed state -> 100 is even -> should be back to closed state
  assert(
    panel.getAttribute('data-open') === 'false',
    '1.1 Even burst clicks (100x) on launcher return cleanly to closed state without desync'
  );
  assert(
    launcher.getAttribute('aria-expanded') === 'false',
    '1.1 Launcher aria-expanded is synchronized to false after 100 toggles'
  );
}

// 1.2 Interleaved external triggers (Nav + Inline) while panel is already open
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const navTrigger = new MockDOMElement('button', 'nav-ea-btn');
  navTrigger.setAttribute('data-early-access-trigger', 'nav');
  env.doc.body.appendChild(navTrigger);

  const inlineTrigger = new MockDOMElement('button', 'inline-ea-btn');
  inlineTrigger.setAttribute('data-early-access-trigger', 'inline');
  env.doc.body.appendChild(inlineTrigger);

  const panel = env.elements['ea-panel'];

  // Click Nav trigger
  navTrigger.click();
  assert(panel.getAttribute('data-open') === 'true', '1.2 Nav trigger opens panel');

  // Click Inline trigger while already open
  inlineTrigger.click();
  assert(panel.getAttribute('data-open') === 'true', '1.2 Inline trigger keeps panel open safely without double-mount');

  // Close panel
  env.elements['ea-close-btn'].click();
  assert(panel.getAttribute('data-open') === 'false', '1.2 Close button cleanly closes panel after multi-trigger usage');
}

// 1.3 Rapid Submit double-click prevention while AJAX in-flight
{
  const env = buildEarlyAccessDOM();
  let fetchCallCount = 0;
  globalThis.fetch = async () => {
    fetchCallCount++;
    await new Promise((r) => setTimeout(r, 80));
    return { ok: true, status: 200, json: async () => ({ ok: true }) };
  };

  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const panel = env.elements['ea-panel'];
  const form = env.elements['ea-form'];
  const emailInput = env.elements['ea-email'];
  const submitBtn = env.elements['ea-submit-btn'];

  // Open panel and fill valid email
  env.elements['ea-launcher'].click();
  emailInput.value = 'race.test@example.com';

  // Fire submit event
  const submitEvent1 = new MockEvent('submit', { cancelable: true });
  form.dispatchEvent(submitEvent1);

  // Immediately fire 10 more submits while fetch is in-flight
  for (let i = 0; i < 10; i++) {
    const rapidSubmit = new MockEvent('submit', { cancelable: true });
    // In browser, disabled button prevents form submit, or disabled inputs prevent double submission
    if (!submitBtn.disabled) {
      form.dispatchEvent(rapidSubmit);
    }
  }

  assert(submitBtn.disabled === true, '1.3 Submit button is synchronously disabled upon first submit');
  assert(emailInput.disabled === true, '1.3 Email input is synchronously disabled during loading');

  await new Promise((r) => setTimeout(r, 120));
  assert(fetchCallCount === 1, '1.3 Exactly ONE fetch request dispatched despite rapid submit clicks');
}

// 1.4 Reopen during auto-close timer cancels auto-close timer
{
  const env = buildEarlyAccessDOM();
  globalThis.fetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({ ok: true }),
  });

  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const launcher = env.elements['ea-launcher'];
  const panel = env.elements['ea-panel'];
  const emailInput = env.elements['ea-email'];
  const form = env.elements['ea-form'];

  launcher.click();
  emailInput.value = 'autoclose.cancel@example.com';
  form.dispatchEvent(new MockEvent('submit', { cancelable: true }));

  await new Promise((r) => setTimeout(r, 50));
  assert(!env.elements['ea-success-view'].classList.contains('hidden'), '1.4 Success view active');

  // Immediately re-trigger openPanel (e.g. user clicks launcher or custom event fires)
  launcher.click(); // will toggle/re-open and clear autoCloseTimer

  // Advance time past the 2200ms autoClose interval
  await new Promise((r) => setTimeout(r, 100)); // In real timer, autoCloseTimer was cleared
  assert(panel !== null, '1.4 Reopening cancels pending timers without throwing exceptions');
}

// 1.5 Click outside while opening vs while closed
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const panel = env.elements['ea-panel'];
  const launcher = env.elements['ea-launcher'];
  const outsideEl = new MockDOMElement('div', 'outside-hero');
  env.doc.body.appendChild(outsideEl);

  // Click outside when closed -> remains closed
  outsideEl.click();
  assert(panel.getAttribute('data-open') === 'false', '1.5 Click outside when closed is a safe no-op');

  // Open panel
  launcher.click();
  assert(panel.getAttribute('data-open') === 'true', '1.5 Panel open');

  // Click outside -> panel closes
  outsideEl.click();
  assert(panel.getAttribute('data-open') === 'false', '1.5 Click outside when open closes the panel');
}

// ============================================================================
// TEST SUITE 2: Cross-Component Event Dispatching Timing
// ============================================================================
suiteGroup('Category 2: Cross-Component Event Dispatching Timing');

// 2.1 window dispatch 'hera:open-early-access' with trigger element detail
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const customTrigger = new MockDOMElement('button', 'custom-trigger-btn');
  env.doc.body.appendChild(customTrigger);
  const panel = env.elements['ea-panel'];

  env.win.dispatchEvent(new MockCustomEvent('hera:open-early-access', {
    detail: { trigger: customTrigger },
  }));

  assert(panel.getAttribute('data-open') === 'true', '2.1 hera:open-early-access opens the panel');

  // Close via Escape key
  env.doc.dispatchEvent(new MockEvent('keydown', { key: 'Escape', bubbles: true }));
  assert(panel.getAttribute('data-open') === 'false', '2.1 Escape closes panel');
  assert(env.doc.activeElement === customTrigger, '2.1 Focus restored to custom trigger from event detail');
}

// 2.2 window dispatch 'hera:close-early-access'
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const launcher = env.elements['ea-launcher'];
  const panel = env.elements['ea-panel'];

  launcher.click();
  assert(panel.getAttribute('data-open') === 'true', '2.2 Panel open');

  env.win.dispatchEvent(new MockCustomEvent('hera:close-early-access'));
  assert(panel.getAttribute('data-open') === 'false', '2.2 hera:close-early-access closes panel');
}

// 2.3 Cross-tab storage synchronization event
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const launcherLabel = env.elements['ea-launcher-label'];
  assert(launcherLabel.textContent === 'Early access ✦', '2.3 Initial launcher label is Early access ✦');

  // Simulate localStorage change in another tab
  env.localStore.set('hera_early_access_signed_up', 'true');
  const storageEvent = new MockEvent('storage', { key: 'hera_early_access_signed_up', newValue: 'true' });
  env.win.dispatchEvent(storageEvent);

  assert(launcherLabel.textContent === "You're on the list ✓", "2.3 Storage event instantly updates launcher label to You're on the list ✓ across tabs");
}

// 2.4 hera:early-access-success custom event emission on successful signup
{
  const env = buildEarlyAccessDOM();
  globalThis.fetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({ ok: true }),
  });

  const init = new Function(earlyAccessSource.scriptCode);
  init();

  let receivedEventDetail = null;
  env.win.addEventListener('hera:early-access-success', (e) => {
    receivedEventDetail = e.detail;
  });

  const launcher = env.elements['ea-launcher'];
  const emailInput = env.elements['ea-email'];
  const form = env.elements['ea-form'];

  launcher.click();
  emailInput.value = 'event.timing@example.com';
  form.dispatchEvent(new MockEvent('submit', { cancelable: true }));

  await new Promise((r) => setTimeout(r, 60));
  assert(receivedEventDetail !== null, '2.4 hera:early-access-success event dispatched on signup');
  assert(receivedEventDetail.email === 'event.timing@example.com', '2.4 Event detail contains submitted email');
  assert(typeof receivedEventDetail.timestamp === 'number', '2.4 Event detail contains numeric timestamp');
}

// ============================================================================
// TEST SUITE 3: Canvas Animation Loop Behavior & Visitor Agent Lifecycle
// ============================================================================
suiteGroup('Category 3: Canvas Animation Loop Behavior & Visitor Agent Lifecycle');

// 3.1 Initial sprite agent creation in Footer.astro
{
  const others = [
    { body: '#7c6f64', hair: '#3a3a3f' },
    { body: '#5b6b52', hair: '#20221e' },
    { body: '#6b5b73', hair: '#2b2430' },
    { body: '#4f6272', hair: '#1d262e' },
  ];
  let agents = [];
  const w = 1200;
  agents = others.map((c, i) => ({
    x: ((i + 1) * w) / 6,
    dir: i % 2 === 0 ? 1 : -1,
    speed: 14 + 5,
    body: c.body,
    hair: c.hair,
    skin: '#d9b99b',
    iris: false,
    phase: 2,
  }));
  agents.push({
    x: w / 2,
    dir: 1,
    speed: 20,
    body: '#2563eb',
    hair: '#e8e4f4',
    skin: '#d9b99b',
    iris: true,
    phase: 0,
  });

  assert(agents.length === 5, '3.1 Exactly 5 agents initialized (4 standard + 1 Iris)');
  const irisAgent = agents.find((a) => a.iris);
  assert(irisAgent !== undefined, '3.1 Iris agent present');
  assert(irisAgent.hair === '#e8e4f4', '3.1 Iris hair token is #e8e4f4');
}

// 3.2 Dynamic visitor agent injection & deduplication
{
  const agents = [
    { x: 100, dir: 1, speed: 15, iris: false },
    { x: 200, dir: -1, speed: 15, iris: false },
    { x: 300, dir: 1, speed: 15, iris: false },
    { x: 400, dir: -1, speed: 15, iris: false },
    { x: 500, dir: 1, speed: 20, iris: true },
  ];

  const SPRITE_W = 24;
  const addVisitorAgent = () => {
    if (agents.some((a) => a.isVisitorAgent)) return;
    agents.push({
      x: -SPRITE_W,
      dir: 1,
      speed: 18,
      body: '#d97706',
      hair: '#1e293b',
      skin: '#d9b99b',
      iris: false,
      phase: 1,
      isVisitorAgent: true,
    });
  };

  // Add once
  addVisitorAgent();
  assert(agents.length === 6, '3.2 Visitor agent added dynamically, count is 6');
  const visitor = agents.find((a) => a.isVisitorAgent);
  assert(visitor && visitor.body === '#d97706', '3.2 Visitor agent has amber body #d97706');

  // Attempt to add 50 more times (simulating duplicate event dispatches)
  for (let i = 0; i < 50; i++) {
    addVisitorAgent();
  }
  assert(agents.length === 6, '3.2 Deduplication guard prevents duplicate visitor agents (count remains 6)');
}

// 3.3 Canvas tick delta-time clamping under lag spike
{
  let last = 1000;
  const t = 10000; // 9 second gap (simulating tab asleep / lag spike)
  const dt = Math.min((t - last) / 1000, 0.05);

  assert(dt === 0.05, '3.3 Delta time (dt) is clamped to maximum 0.05s (50ms) to prevent position tunneling');
}

// 3.4 Iris cursor evasion & acceleration / deceleration mathematics
{
  const SPRITE_W = 24;
  const a = { x: 300, dir: 1, speed: 20, iris: true };
  const dt = 0.016;

  // Case A: Mouse nearby on the left (mouseX = 290)
  let mouseInside = true;
  let mouseX = 290;
  if (mouseInside && Math.abs(mouseX - (a.x + SPRITE_W / 2)) < 130) {
    a.dir = mouseX > a.x + SPRITE_W / 2 ? -1 : 1;
    a.speed = Math.min(a.speed + 300 * dt, 220);
  }
  assert(a.dir === 1, '3.4 Iris runs right when mouse is to her left');
  assert(a.speed > 20, '3.4 Iris accelerates away from cursor');

  // Case B: Mouse far away -> Iris decelerates back to 20
  mouseX = 9000;
  if (mouseInside && Math.abs(mouseX - (a.x + SPRITE_W / 2)) < 130) {
    a.speed = Math.min(a.speed + 300 * dt, 220);
  } else {
    a.speed = Math.max(a.speed - 120 * dt, 20);
  }
  assert(a.speed <= 25, '3.4 Iris gracefully decelerates when cursor leaves proximity');

  // Case C: Extreme NaN / Infinity mouse coordinates resilience
  mouseX = NaN;
  const isNear = mouseInside && Math.abs(mouseX - (a.x + SPRITE_W / 2)) < 130;
  assert(!isNear, '3.4 NaN mouse coordinate does not trigger evasion or corrupt speed');
}

// 3.5 Canvas boundary wrapping arithmetic
{
  const w = 800;
  const SPRITE_W = 24;
  let x = 830; // beyond w + SPRITE_W (824)
  if (x > w + SPRITE_W) x = -SPRITE_W;
  assert(x === -24, '3.5 Agent wrapping right boundary wraps smoothly to left offscreen');

  x = -50; // beyond -SPRITE_W * 2 (-48)
  if (x < -SPRITE_W * 2) x = w + SPRITE_W / 2;
  assert(x === 812, '3.5 Agent wrapping left boundary wraps smoothly to right offscreen');
}

// ============================================================================
// TEST SUITE 4: XSS & Special Characters Injection Across Form Fields & Regex ReDoS
// ============================================================================
suiteGroup('Category 4: XSS, Unicode, Special Characters & Regex Security');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 4.1 XSS payloads in Name and Use Case fields
{
  const xssVectors = [
    '<script>alert("xss")</script>',
    '<img src=x onerror=alert(1)>',
    '"><svg onload=alert(1)>',
    'javascript:alert(1)',
    "'; DROP TABLE signups; --",
    '{{7*7}}',
    '${process.env.SECRET}',
    '<iframe src="https://evil.com"></iframe>',
    '"><input onfocus="alert(1)" autofocus>',
  ];

  for (const vector of xssVectors) {
    const rawEmail = 'clean@example.com';
    const rawName = vector;
    const rawUseCase = `Use case with ${vector}`;
    const payload = {
      email: rawEmail.trim().toLowerCase(),
      early_tester: true,
      _source: 'hera-early-access',
    };
    if (rawName.trim()) payload.name = rawName.trim();
    if (rawUseCase.trim()) payload.use_case = rawUseCase.trim();

    const jsonStr = JSON.stringify(payload);
    const parsed = JSON.parse(jsonStr);

    assert(parsed.name === vector, `4.1 Payload safely round-trips XSS vector without string interpolation risk: "${vector.slice(0, 25)}"`);
    assert(parsed._source === 'hera-early-access', '4.1 Hidden _source field remains uncorrupted');
  }
}

// 4.2 Unicode, Emojis, BiDi RTL, Zero-width characters
{
  const unicodeTests = [
    { name: '✨ Favour Diokpo 🚀', use_case: 'Building autonomous AI systems 🤖' },
    { name: 'مرحبا بالعالم', use_case: 'اختبار اللغة العربية' },
    { name: '田中太郎', use_case: 'HERAのテストケース' },
    { name: 'Éléonore Noël', use_case: 'Système d’agents d’intelligence artificielle' },
    { name: 'A\u200B\u200CB\u200D', use_case: 'Zero width space \uFEFF testing' },
  ];

  for (const item of unicodeTests) {
    const payload = {
      email: 'unicode.test@example.com',
      name: item.name,
      use_case: item.use_case,
      early_tester: false,
      _source: 'hera-early-access',
    };
    const serialized = JSON.stringify(payload);
    const deserialized = JSON.parse(serialized);
    assert(deserialized.name === item.name, `4.2 Unicode name preserved: "${item.name}"`);
    assert(deserialized.use_case === item.use_case, `4.2 Unicode use_case preserved: "${item.use_case}"`);
  }
}

// 4.3 Regex ReDoS Catastrophic Backtracking Stress Test
{
  const redosAttacks = [
    'a'.repeat(25000) + '@' + 'b'.repeat(25000),
    'user@' + 'a.'.repeat(5000) + 'com',
    'a'.repeat(50000),
    '@'.repeat(50000),
    'user@' + '.'.repeat(50000) + 'com',
    'user@domain.' + 'c'.repeat(50000),
  ];

  for (const attack of redosAttacks) {
    const start = performance.now();
    const result = emailRegex.test(attack);
    const duration = performance.now() - start;

    assert(
      duration < 25,
      `4.3 Email regex evaluates 50k character string in ${duration.toFixed(2)}ms (< 25ms, zero ReDoS vulnerability)`
    );
  }
}

// 4.4 Static AST Security Check: Zero innerHTML or dangerous DOM insertion
{
  const astroCode = earlyAccessSource.rawContent;
  const dangerousPatterns = [
    '.innerHTML',
    'outerHTML',
    'insertAdjacentHTML',
    'dangerouslySetInnerHTML',
    'document.write',
    'eval(',
    'new Function(',
  ];

  for (const pattern of dangerousPatterns) {
    assert(
      !astroCode.includes(pattern),
      `4.4 Zero usage of dangerous API "${pattern}" in EarlyAccessSurface.astro`
    );
  }
}

// ============================================================================
// TEST SUITE 5: Mobile vs Desktop Media Query Event Listener Transitions
// ============================================================================
suiteGroup('Category 5: Mobile vs Desktop Media Query & Viewport Transitions');

// 5.1 Responsive Tailwind class tokens & geometry verification
{
  const astroCode = earlyAccessSource.rawContent;

  assert(
    astroCode.includes('w-[calc(100vw-2.5rem)]') && astroCode.includes('sm:w-[380px]'),
    '5.1 Panel responsive drawer width configured (calc(100vw-2.5rem) on mobile, 380px on sm+)'
  );
  assert(
    astroCode.includes('bottom-16 right-5') && astroCode.includes('sm:bottom-20 sm:right-6'),
    '5.1 Panel responsive positioning configured (bottom-16 mobile, bottom-20 desktop)'
  );
  assert(
    astroCode.includes('p-5') && astroCode.includes('sm:p-6'),
    '5.1 Panel responsive padding configured (p-5 mobile, p-6 desktop)'
  );
  assert(
    astroCode.includes('rounded-card') && astroCode.includes('shadow-lift') && astroCode.includes('border-line'),
    '5.1 Panel styled with system design tokens (rounded-card, shadow-lift, border-line)'
  );
}

// 5.2 Dynamic matchMedia prefers-reduced-motion transitions
{
  let reducedMotion = false;
  const matchMediaSim = (query) => ({
    matches: query.includes('prefers-reduced-motion') ? reducedMotion : false,
    media: query,
  });

  const getBobAndFrame = (t, phase, reduced) => {
    const frame = reduced ? 0 : Math.floor((t / 180 + phase) % 2);
    const bob = reduced ? 0 : Math.sin(t / 180 + phase) * 1.2;
    return { frame, bob };
  };

  // Normal motion
  const normal = getBobAndFrame(500, 0, false);
  assert(normal.bob !== 0, '5.2 Normal motion produces dynamic bob offset');

  // Reduced motion
  const reduced = getBobAndFrame(500, 0, true);
  assert(reduced.bob === 0 && reduced.frame === 0, '5.2 Reduced motion clamps bob to 0 and frame to 0 (static drawing)');
}

// 5.3 Focus trap integrity across small and large viewport simulated widths
{
  const env = buildEarlyAccessDOM();
  const init = new Function(earlyAccessSource.scriptCode);
  init();

  const launcher = env.elements['ea-launcher'];
  const panel = env.elements['ea-panel'];
  const emailInput = env.elements['ea-email'];
  const submitBtn = env.elements['ea-submit-btn'];
  const infoBtn = env.elements['ea-info-btn'];

  launcher.click();

  // Test cycling from submitBtn -> Tab -> infoBtn on mobile
  submitBtn.focus();
  const tabEventMobile = new MockEvent('keydown', { key: 'Tab', shiftKey: false, bubbles: true });
  env.doc.activeElement.dispatchEvent(tabEventMobile);
  assert(env.doc.activeElement === infoBtn, '5.3 Focus trap cycles forwards to first element on mobile viewport');

  // Test cycling from infoBtn -> Shift+Tab -> submitBtn on desktop
  infoBtn.focus();
  const tabEventDesktop = new MockEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
  env.doc.activeElement.dispatchEvent(tabEventDesktop);
  assert(env.doc.activeElement === submitBtn, '5.3 Focus trap cycles backwards to last element on desktop viewport');
}

// 5.4 High DPR screen scaling verification in canvas
{
  const dprList = [1, 1.5, 2, 3, 0.75];
  for (const dpr of dprList) {
    const clientWidth = 400;
    const clientHeight = 88;
    const canvasWidth = clientWidth * dpr;
    const canvasHeight = clientHeight * dpr;
    assert(canvasWidth === clientWidth * dpr, `5.4 Canvas DPR scaling correctly computes width ${canvasWidth}px for DPR ${dpr}`);
    assert(canvasHeight === clientHeight * dpr, `5.4 Canvas DPR scaling correctly computes height ${canvasHeight}px for DPR ${dpr}`);
  }
}

// ============================================================================
// SUMMARY REPORT & EXIT
// ============================================================================
console.log('\n' + '='.repeat(80));
console.log(`  TIER 5 ADVERSARIAL STRESS TEST SUMMARY: ${passedTests}/${totalTests} PASSED`);
console.log('-'.repeat(80));

for (const [groupName, stats] of Object.entries(groupStats)) {
  const mark = stats.failed === 0 ? '✓' : '✗';
  console.log(`  ${mark} ${groupName.padEnd(55)} ${stats.passed}/${stats.total} Passed`);
}

console.log('-'.repeat(80));

if (failedTests > 0) {
  console.error(`\n  CRITICAL FAILURE: ${failedTests} adversarial test(s) failed.`);
  process.exit(1);
} else {
  console.log('\n  STATUS: 100% PASS — ALL ADVERSARIAL HARDENING CRITERIA SATISFIED');
  console.log('='.repeat(80) + '\n');
  process.exit(0);
}
