
import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path of the current working directory
        cwd = os.getcwd()

        # Dashboard
        page.goto(f"file://{cwd}/dashboard.html")
        page.screenshot(path="jules-scratch/verification/dashboard.png")

        # Files
        page.goto(f"file://{cwd}/files.html")
        page.screenshot(path="jules-scratch/verification/files.png")

        # Forms
        page.goto(f"file://{cwd}/forms.html")
        page.screenshot(path="jules-scratch/verification/forms.png")

        # Alerts
        page.goto(f"file://{cwd}/alerts.html")
        page.screenshot(path="jules-scratch/verification/alerts.png")

        # Users
        page.goto(f"file://{cwd}/users.html")
        page.screenshot(path="jules-scratch/verification/users.png")

        # Map
        page.goto(f"file://{cwd}/map.html")
        page.screenshot(path="jules-scratch/verification/map.png")

        browser.close()

if __name__ == "__main__":
    run()
