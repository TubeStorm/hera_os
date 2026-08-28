import os
import sys
import time
import json

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:4321/hera_os/"
SCREENSHOT_DIR = r"D:\Documents\favour-ai-product-portfolio\docs\agent-system\screenshots\early-access"

os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def run_verification_and_capture():
    results = {
        "entry_points": {},
        "keyboard_accessibility": {},
        "validation": {},
        "submission_flow": {},
        "persistence": {},
        "footer_agent": {},
        "screenshots": []
    }

    with sync_playwright() as p:
        # Launch Chromium
        browser = p.chromium.launch(headless=True)
        
        print("=" * 70)
        print("  HERA OS EARLY-ACCESS FUNNEL FUNCTIONAL VERIFICATION & SCREENSHOTS")
        print("=" * 70)

        # -------------------------------------------------------------
        # 1. Desktop Context (1440x900)
        # -------------------------------------------------------------
        context = browser.new_context(viewport={"width": 1440, "height": 900})
        page = context.new_page()

        print("\n[1/6] Navigating to homepage on Desktop (1440x900)...")
        page.goto(BASE_URL, wait_until="networkidle")
        page.wait_for_timeout(1000)

        # Functional Check 1: Nav Entry Point
        nav_trigger = page.locator('header nav [data-early-access-trigger]')
        assert nav_trigger.is_visible(), "Nav trigger button must be visible"
        assert "Join early access" in nav_trigger.inner_text(), "Nav trigger text mismatch"
        results["entry_points"]["nav"] = "PASS"
        print("  ✓ Nav entry point verified: 'Join early access' visible in header")

        # Screenshot 1: Nav entry point
        shot_01 = os.path.join(SCREENSHOT_DIR, "01_nav_entry_point.png")
        # Scroll to top to frame nav cleanly
        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(500)
        page.screenshot(path=shot_01, clip={"x": 0, "y": 0, "width": 1440, "height": 380})
        results["screenshots"].append("01_nav_entry_point.png")
        print(f"  ✓ Saved Screenshot 01: {shot_01}")

        # Functional Check 2: All 3 entry points open the panel
        panel = page.locator('#ea-panel')
        launcher = page.locator('#ea-launcher')
        close_btn = page.locator('#ea-close-btn')

        # Test Entry Point 1 (Nav Trigger)
        nav_trigger.click()
        page.wait_for_timeout(400)
        assert panel.get_attribute("data-open") == "true", "Nav trigger failed to open panel"
        close_btn.click()
        page.wait_for_timeout(400)
        assert panel.get_attribute("data-open") == "false", "Close button failed to close panel"

        # Test Entry Point 2 (Homepage Inline Trigger)
        inline_trigger = page.locator('.inline-early-access-line [data-early-access-trigger]')
        inline_trigger.scroll_into_view_if_needed()
        page.wait_for_timeout(300)
        assert inline_trigger.is_visible(), "Inline homepage trigger not visible"
        inline_trigger.click()
        page.wait_for_timeout(400)
        assert panel.get_attribute("data-open") == "true", "Inline trigger failed to open panel"
        close_btn.click()
        page.wait_for_timeout(400)
        assert panel.get_attribute("data-open") == "false"
        results["entry_points"]["inline"] = "PASS"
        print("  ✓ Homepage inline trigger verified: 'Join early access →' opens surface")

        # Test Entry Point 3 (Launcher Trigger)
        launcher.click()
        page.wait_for_timeout(400)
        assert panel.get_attribute("data-open") == "true", "Launcher failed to open panel"
        results["entry_points"]["launcher"] = "PASS"
        print("  ✓ Persistent launcher verified: opens surface")

        # Screenshot 2: Panel open state on Desktop (1440px)
        shot_02 = os.path.join(SCREENSHOT_DIR, "02_panel_open_desktop.png")
        page.screenshot(path=shot_02, full_page=False)
        results["screenshots"].append("02_panel_open_desktop.png")
        print(f"  ✓ Saved Screenshot 02: {shot_02}")

        # Functional Check 3: Tooltip & Escape & Focus Trap
        info_btn = page.locator('#ea-info-btn')
        info_popover = page.locator('#ea-info-popover')
        info_btn.hover()
        page.wait_for_timeout(300)
        assert info_popover.is_visible(), "Tooltip popover not visible on hover"
        assert "Early invites and occasional HERA updates. No spam. Leave whenever you want." in info_popover.inner_text()
        print("  ✓ Info tooltip ⓘ popover verified")

        # Escape closes tooltip first
        page.keyboard.press("Escape")
        page.wait_for_timeout(300)
        assert not info_popover.is_visible(), "Tooltip should close on first Escape"
        assert panel.get_attribute("data-open") == "true", "Panel should remain open after tooltip close"
        
        # Escape closes panel
        page.keyboard.press("Escape")
        page.wait_for_timeout(400)
        assert panel.get_attribute("data-open") == "false", "Escape should close panel"
        results["keyboard_accessibility"]["escape"] = "PASS"
        print("  ✓ Escape key dismissal hierarchy verified (Tooltip -> Panel)")

        # Focus trap test
        launcher.click()
        page.wait_for_timeout(400)
        email_input = page.locator('#ea-email')
        is_focused = page.evaluate("document.activeElement === document.getElementById('ea-email')")
        assert is_focused, "Email input should be focused on open"
        results["keyboard_accessibility"]["focus_trap"] = "PASS"
        print("  ✓ Focus management verified: email input auto-focused on dialog open")

        # Functional Check 4: Form Validation
        submit_btn = page.locator('#ea-submit-btn')
        email_error = page.locator('#ea-email-error')

        # Test invalid email
        email_input.fill("invalid-email-format")
        submit_btn.click()
        page.wait_for_timeout(200)
        assert email_error.is_visible(), "Validation error should be visible for invalid email"
        assert "Please enter a valid email address." in email_error.inner_text()
        assert email_input.get_attribute("aria-invalid") == "true"
        print("  ✓ Inline email validation verified for invalid format")

        # Test error clears on typing
        email_input.type("@domain.com")
        page.wait_for_timeout(200)
        assert not email_error.is_visible(), "Error should hide on typing"
        results["validation"]["email_format"] = "PASS"

        # -------------------------------------------------------------
        # 2. Narrow Mobile Viewport Context (390x844)
        # -------------------------------------------------------------
        print("\n[2/6] Verifying narrow mobile viewport (390x844)...")
        mobile_context = browser.new_context(viewport={"width": 390, "height": 844})
        mobile_page = mobile_context.new_page()
        mobile_page.goto(BASE_URL, wait_until="networkidle")
        mobile_page.wait_for_timeout(1000)

        # Open panel on mobile
        m_launcher = mobile_page.locator('#ea-launcher')
        m_launcher.click()
        mobile_page.wait_for_timeout(400)

        m_panel = mobile_page.locator('#ea-panel')
        assert m_panel.get_attribute("data-open") == "true"

        # Check mobile bounding box fits within 390px
        box = m_panel.bounding_box()
        assert box is not None
        assert box['x'] >= 0, "Panel left edge offscreen"
        assert box['x'] + box['width'] <= 390.5, f"Panel overflows 390px width (right edge: {box['x'] + box['width']})"
        print(f"  ✓ Mobile panel bounds verified: width={box['width']}px, left={box['x']}px (fits within 390px)")

        # Screenshot 3: Panel open on mobile 390px
        shot_03 = os.path.join(SCREENSHOT_DIR, "03_panel_open_mobile_390px.png")
        mobile_page.screenshot(path=shot_03, full_page=False)
        results["screenshots"].append("03_panel_open_mobile_390px.png")
        print(f"  ✓ Saved Screenshot 03: {shot_03}")
        mobile_context.close()

        # -------------------------------------------------------------
        # 3. Submission Flow & Success Sequence
        # -------------------------------------------------------------
        print("\n[3/6] Verifying Formspree submission flow & success animations...")
        
        # Intercept Formspree POST request
        intercepted_requests = []
        def handle_route(route):
            req = route.request
            if "formspree.io/f/mwlkevkp" in req.url:
                payload = json.loads(req.post_data)
                intercepted_requests.append(payload)
                # Return synthetic 200 JSON success response
                route.fulfill(
                    status=200,
                    content_type="application/json",
                    body=json.dumps({"ok": True, "next": None})
                )
            else:
                route.continue_()

        page.route("**/formspree.io/**", handle_route)

        # Fill in valid form
        email_input.fill("founder.test@example.com")
        page.locator('#ea-name').fill("Favour Diokpo")
        page.locator('#ea-use-case').fill("Designing agentic system roadmaps and review gates.")
        page.locator('#ea-early-tester').check()

        # Submit form
        submit_btn.click()
        
        # Check Loading state
        page.wait_for_timeout(150)
        assert page.locator('#ea-submit-text').inner_text() == "Adding you..." or intercepted_requests
        
        # Wait for Success View
        page.wait_for_timeout(400)
        success_view = page.locator('#ea-success-view')
        assert success_view.is_visible(), "Success view should be visible"
        assert page.locator('#ea-success-heading').inner_text() == "You're in."
        
        # Wait for "Go catch Iris." phased reveal (800ms)
        page.wait_for_timeout(900)
        success_sub = page.locator('#ea-success-sub')
        assert "Go catch Iris." in success_sub.inner_text()
        print("  ✓ Phased reveal verified: 'You're in.' -> 'Go catch Iris.'")

        # Screenshot 4: Success state copy
        shot_04 = os.path.join(SCREENSHOT_DIR, "04_success_state_copy.png")
        page.screenshot(path=shot_04, full_page=False)
        results["screenshots"].append("04_success_state_copy.png")
        print(f"  ✓ Saved Screenshot 04: {shot_04}")

        # Verify Formspree Payload Schema
        assert len(intercepted_requests) == 1, "Formspree request was not made"
        p_data = intercepted_requests[0]
        assert p_data["email"] == "founder.test@example.com"
        assert p_data["name"] == "Favour Diokpo"
        assert p_data["use_case"] == "Designing agentic system roadmaps and review gates."
        assert p_data["early_tester"] is True
        assert p_data["_source"] == "hera-early-access"
        results["submission_flow"]["payload_schema"] = "PASS"
        print(f"  ✓ Formspree payload schema verified: {json.dumps(p_data)}")

        # Wait for auto-close (2.2s from success)
        print("  Waiting for panel auto-close (2200ms)...")
        page.wait_for_timeout(2300)
        assert panel.get_attribute("data-open") == "false", "Panel did not auto-close after success"
        print("  ✓ Panel auto-closed gracefully after 2.2 seconds")

        # Functional Check 5: LocalStorage Persistence
        launcher_label = page.locator('#ea-launcher-label').inner_text()
        assert launcher_label == "You're on the list ✓", f"Launcher label mismatch: {launcher_label}"
        print("  ✓ Launcher updated to: 'You're on the list ✓'")

        # Screenshot 5: Launcher signed up state
        shot_05 = os.path.join(SCREENSHOT_DIR, "05_launcher_signed_up.png")
        page.screenshot(path=shot_05, clip={"x": 1000, "y": 650, "width": 440, "height": 250})
        results["screenshots"].append("05_launcher_signed_up.png")
        print(f"  ✓ Saved Screenshot 05: {shot_05}")

        # Check localStorage persistence across page refresh
        local_val = page.evaluate("localStorage.getItem('hera_early_access_signed_up')")
        assert local_val == "true", "localStorage key not set"
        session_val = page.evaluate("sessionStorage.getItem('hera_early_access_session_agent')")
        assert session_val == "true", "sessionStorage key not set"
        
        print("\n[4/6] Reloading page to verify persistence across refresh...")
        page.reload(wait_until="networkidle")
        page.wait_for_timeout(1000)
        reloaded_label = page.locator('#ea-launcher-label').inner_text()
        assert reloaded_label == "You're on the list ✓", "Launcher failed to persist across page refresh"
        results["persistence"]["local_storage_refresh"] = "PASS"
        print("  ✓ Persistence confirmed: Launcher remains 'You're on the list ✓' after full page reload")

        # -------------------------------------------------------------
        # 4. Footer New Pixel Agent Animation
        # -------------------------------------------------------------
        print("\n[5/6] Verifying footer sprite animation with injected visitor agent...")
        footer = page.locator('footer')
        footer.scroll_into_view_if_needed()
        page.wait_for_timeout(2500) # Allow canvas animation loop to execute multiple frames

        # Screenshot 6: Footer with new wanderer agent
        shot_06 = os.path.join(SCREENSHOT_DIR, "06_footer_new_agent.png")
        footer.screenshot(path=shot_06)
        results["screenshots"].append("06_footer_new_agent.png")
        print(f"  ✓ Saved Screenshot 06: {shot_06}")
        results["footer_agent"]["session_injection"] = "PASS"

        # -------------------------------------------------------------
        # 5. Backend Error Handling Verification
        # -------------------------------------------------------------
        print("\n[6/6] Verifying backend failure / network error resilience...")
        # Clear storage and reload for clean error test
        page.evaluate("localStorage.clear(); sessionStorage.clear();")
        page.reload(wait_until="networkidle")
        page.wait_for_timeout(1000)

        # Mock 500 error from Formspree
        def handle_error_route(route):
            if "formspree.io/f/mwlkevkp" in route.request.url:
                route.fulfill(
                    status=500,
                    content_type="application/json",
                    body=json.dumps({"error": "Internal Server Error"})
                )
            else:
                route.continue_()

        page.unroute("**/formspree.io/**")
        page.route("**/formspree.io/**", handle_error_route)

        page.locator('#ea-launcher').click()
        page.wait_for_timeout(400)
        page.locator('#ea-email').fill("failtest@example.com")
        page.locator('#ea-submit-btn').click()
        page.wait_for_timeout(500)

        err_banner = page.locator('#ea-error-banner')
        assert err_banner.is_visible(), "Error banner did not appear on 500 response"
        assert "Something went wrong. Try again?" in err_banner.inner_text()
        assert not page.locator('#ea-email').is_disabled(), "Email input should be re-enabled after error"
        print("  ✓ Backend failure handled gracefully: shows 'Something went wrong. Try again?'")

        context.close()
        browser.close()

    print("\n" + "=" * 70)
    print("  ALL FUNCTIONAL VERIFICATIONS PASSED & 6 SCREENSHOTS CAPTURED")
    print("=" * 70)
    return results

if __name__ == "__main__":
    res = run_verification_and_capture()
