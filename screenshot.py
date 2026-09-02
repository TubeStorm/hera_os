import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # Desktop
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        urls = [
            ("http://localhost:4326/", "work-desktop.png"),
            ("http://localhost:4326/about/", "about-desktop.png"),
            ("http://localhost:4326/other-projects/", "other-projects-desktop.png"),
            ("http://localhost:4326/contact/", "contact-desktop.png")
        ]
        
        for url, output in urls:
            await page.goto(url)
            await asyncio.sleep(1)
            await page.screenshot(path=f"docs/closeout/screenshots/{output}", full_page=True)
            
        # Mobile
        page_mobile = await browser.new_page(viewport={"width": 390, "height": 844})
        urls_mobile = [
            ("http://localhost:4326/", "work-mobile.png"),
            ("http://localhost:4326/about/", "about-mobile.png"),
            ("http://localhost:4326/other-projects/", "other-projects-mobile.png"),
            ("http://localhost:4326/contact/", "contact-mobile.png")
        ]
        
        for url, output in urls_mobile:
            await page_mobile.goto(url)
            await asyncio.sleep(1)
            await page_mobile.screenshot(path=f"docs/closeout/screenshots/{output}", full_page=True)

        await browser.close()

asyncio.run(main())
