from pathlib import Path
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1260, "height": 1000}, device_scale_factor=2)
    errors = []
    pg.on("pageerror", lambda e: errors.append(str(e)))
    pg.goto(Path("report.html").resolve().as_uri(), wait_until="networkidle")
    pg.wait_for_timeout(800)
    pg.locator("#shot").screenshot(path="../../campaign-looker-report.png")
    print("errors:", errors, "| Roboto:", pg.evaluate("() => document.fonts.check('13px Roboto')"))
    b.close()
