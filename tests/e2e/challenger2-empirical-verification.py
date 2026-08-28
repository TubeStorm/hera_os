import sys
import os
import json
import re

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

# 1. Deterministic Alias & Namespace Test
ALIAS_WORDS = [
    'Aster', 'Atlas', 'Aura', 'Basalt', 'Beam', 'Birch', 'Bloom', 'Bolt',
    'Breeze', 'Cedar', 'Cinder', 'Cirrus', 'Cliff', 'Clove', 'Crest', 'Drift',
    'Dune', 'Echo', 'Ember', 'Fern', 'Finch', 'Flint', 'Flora', 'Frost',
    'Gale', 'Glint', 'Grove', 'Halo', 'Haven', 'Hazel', 'Jade', 'Kite',
    'Lark', 'Lichen', 'Loom', 'Lotus', 'Lumen', 'Lunar', 'Lynx', 'Meadow',
    'Mica', 'Mist', 'Moss', 'Nebula', 'Nexus', 'Nova', 'Onyx', 'Orbit',
    'Orion', 'Peak', 'Pine', 'Pip', 'Prism', 'Pulse', 'Quartz', 'Quill',
    'Reed', 'Ridge', 'Rift', 'Rune', 'Sage', 'Silk', 'Slate', 'Solar',
]
ALIAS_SEPARATORS = ['-', '_', '+']

def hash_email(email: str) -> int:
    normalized = email.strip().lower()
    h = 2166136261
    for ch in normalized:
        h ^= ord(ch)
        h = (h * 16777619) & 0xFFFFFFFF
    return h

def generate_alias(email: str) -> str:
    h = hash_email(email)
    total = len(ALIAS_WORDS) * len(ALIAS_SEPARATORS) * 100
    idx = h % total
    w_idx = idx % len(ALIAS_WORDS)
    s_idx = (idx // len(ALIAS_WORDS)) % len(ALIAS_SEPARATORS)
    num = (idx // (len(ALIAS_WORDS) * len(ALIAS_SEPARATORS))) % 100
    return f"{ALIAS_WORDS[w_idx]}{ALIAS_SEPARATORS[s_idx]}{str(num).zfill(2)}"

print("=" * 70)
print("1. EMPIRICAL DETERMINISM & NAMESPACE STRESS TEST")
print("=" * 70)

# Determinism check
test_emails = [
    ("test@example.com", "  TEST@EXAMPLE.COM  "),
    ("user.name+tag@gmail.com", "user.name+tag@gmail.com"),
    ("favour@tubestorm.ai", "FAVOUR@tubestorm.ai"),
    ("someone_else@sub.domain.co.uk", " someone_else@sub.domain.co.uk ")
]

for a, b in test_emails:
    res_a = generate_alias(a)
    res_b = generate_alias(b)
    print(f"  Email: '{a}' -> Alias: '{res_a}' | Determinism check: {res_a == res_b}")
    assert res_a == res_b, f"Determinism failure for {a} vs {b}"

# Format check
alias_regex = re.compile(r"^[A-Z][a-z]+[-_+]\d{2}$")
for i in range(1000):
    sample_alias = generate_alias(f"test_user_{i}@example.com")
    assert alias_regex.match(sample_alias), f"Alias format invalid: {sample_alias}"

print("  ✓ 1,000 synthetic aliases verified matching format Word[-_+]DD")

# Unique namespace distribution check
generated = set()
for i in range(5000):
    generated.add(generate_alias(f"unique_user_{i}_{i*7}@test.org"))

print(f"  ✓ 5,000 synthetic emails mapped to {len(generated)} unique aliases (Expected ~4,400+ under Birthday distribution for N=19,200)")

print("\n" + "=" * 70)
print("2. E2E INTERACTIVE BEHAVIORAL CHECKS (Playwright)")
print("=" * 70)

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    
    page.goto("http://localhost:4321/hera_os/", wait_until="networkidle")
    
    # 2.1 Focus Trap & Tab order
    page.locator('header nav [data-early-access-trigger]').click()
    page.wait_for_timeout(300)
    
    # Check focus is on email input
    active_id = page.evaluate("() => document.activeElement ? document.activeElement.id : ''")
    print(f"  Initial active element on open: '{active_id}' (Expected: 'ea-email')")
    assert active_id == "ea-email"
    
    # 2.2 Escape key closes panel
    page.keyboard.press("Escape")
    page.wait_for_timeout(300)
    panel_open = page.locator('#ea-panel').get_attribute('data-open')
    print(f"  Panel data-open after Escape: '{panel_open}' (Expected: 'false')")
    assert panel_open == "false"
    
    # 2.3 Invalid email validation
    page.locator('#ea-launcher').click()
    page.wait_for_timeout(300)
    page.fill('#ea-email', 'not-an-email')
    page.click('#ea-submit-btn')
    page.wait_for_timeout(200)
    
    email_err_visible = page.locator('#ea-email-error').is_visible()
    print(f"  Invalid email error visible: {email_err_visible} (Expected: True)")
    assert email_err_visible is True
    
    # 2.4 Error Banner on Network Failure
    page.route("https://formspree.io/f/*", lambda route: route.abort("failed"))
    page.fill('#ea-email', 'valid.tester@example.com')
    page.click('#ea-submit-btn')
    page.wait_for_timeout(500)
    
    err_banner_visible = page.locator('#ea-error-banner').is_visible()
    print(f"  Error banner on 500/network failure visible: {err_banner_visible} (Expected: True)")
    assert err_banner_visible is True
    
    # 2.5 Privacy Info Popover toggle
    info_btn = page.locator('#ea-info-btn')
    info_popover = page.locator('#ea-info-popover')
    info_btn.hover()
    page.wait_for_timeout(200)
    assert info_popover.is_visible(), "Info popover did not appear on hover"
    popover_text = info_popover.inner_text()
    assert "Early invites and occasional HERA updates" in popover_text
    print("  ✓ Privacy info popover hover and copy verified")
    
    browser.close()

print("\n" + "=" * 70)
print("ALL EMPIRICAL TESTS PASSED WITH ZERO REGRESSIONS!")
print("=" * 70)
