from pathlib import Path
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 900, "height": 900}, device_scale_factor=2)
    pg.goto(Path("slack-report.html").resolve().as_uri(), wait_until="networkidle")
    pg.wait_for_timeout(500)
    pg.locator("#shot").screenshot(path="../../campaign-slack-report.png", omit_background=False)
    print(pg.evaluate("() => document.fonts.check('15px Lato')"))
    b.close()
