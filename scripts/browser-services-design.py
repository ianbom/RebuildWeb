import base64
import os
import tempfile
import time
from pathlib import Path

origin = os.environ.get("SITE_URL", "http://localhost:3015")
target = new_tab(origin + "/layanan")
wait_for_load()
session = cdp("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]
folder = Path(tempfile.gettempdir()) / "temuweb-services-design-qa"
folder.mkdir(exist_ok=True)
categories = ["landing-page", "company-profile", "ecommerce", "katalog-produk", "booking", "custom-web-app", "maintenance"]
labels = ["Landing Page", "Company Profile", "E-Commerce", "Katalog Produk", "Booking", "Custom Web App", "Maintenance"]

def wait(expression):
    for attempt in range(100):
        if js(expression, target_id=target):
            return
        time.sleep(.1)
    raise AssertionError(expression)

def navigate(path):
    cdp("Page.navigate", session_id=session, url=origin + path)
    wait("document.readyState === 'complete' && !!document.querySelector('.svc-pricing-tabs')")
    time.sleep(.6)

def node(role, name):
    return next(item for item in cdp("Accessibility.getFullAXTree", session_id=session)["nodes"] if item.get("role", {}).get("value") == role and item.get("name", {}).get("value") == name)

def click(item):
    backend = item["backendDOMNodeId"]
    cdp("DOM.scrollIntoViewIfNeeded", session_id=session, backendNodeId=backend)
    time.sleep(.2)
    box = cdp("DOM.getBoxModel", session_id=session, backendNodeId=backend)["model"]["content"]
    position = {"x": sum(box[0::2])/4, "y": sum(box[1::2])/4, "button": "left", "clickCount": 1}
    cdp("Input.dispatchMouseEvent", session_id=session, type="mousePressed", **position)
    cdp("Input.dispatchMouseEvent", session_id=session, type="mouseReleased", **position)

def screenshot(name):
    image = cdp("Page.captureScreenshot", session_id=session, format="png", captureBeyondViewport=True)["data"]
    (folder / f"{name}.png").write_bytes(base64.b64decode(image))

def check_selected(category):
    wait(f"document.querySelector('#paket-layanan').dataset.pricingCategory === '{category}'")
    assert js(f"document.querySelector('.svc-pricing-tabs button[aria-pressed=true]').dataset.pricingTab === '{category}' && document.querySelectorAll('.svc-pricing-tabs button[aria-pressed=true]').length === 1", target_id=target)
    assert js("document.querySelector('.svc-selected-service h2').textContent === document.querySelector('.svc-package-category').textContent", target_id=target)
    assert js("[...document.querySelectorAll('[data-package]')].every(card => { const url = new URL(card.querySelector('a').href); const text = url.searchParams.get('text'); return url.hostname === 'wa.me' && text.includes(card.querySelector('.svc-package-price').textContent) && text.includes(card.querySelector('.svc-package-category').textContent); })", target_id=target)
    assert js("document.documentElement.scrollWidth <= innerWidth", target_id=target)

for width in [320, 390, 768, 1024, 1440]:
    cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=width, height=1100, deviceScaleFactor=1, mobile=width < 600)
    navigate("/layanan")
    assert js("document.querySelectorAll('h1').length === 1 && document.querySelectorAll('[data-pricing-tab] svg').length === 7", target_id=target)
    check_selected("landing-page")
    if width < 900:
        assert js("document.querySelector('.svc-pricing-tabs').scrollWidth > document.querySelector('.svc-pricing-tabs').clientWidth", target_id=target)
    else:
        expected = 7 if width >= 1200 else 4
        assert js(f"getComputedStyle(document.querySelector('.svc-pricing-tabs')).gridTemplateColumns.split(' ').length === {expected}", target_id=target)
        assert js("(() => { const bottoms=[...document.querySelectorAll('[data-package] > a')].map(button=>button.getBoundingClientRect().bottom); return Math.max(...bottoms)-Math.min(...bottoms) < 2; })()", target_id=target), "Desktop CTAs not aligned"
    assert js("document.querySelector('h1').getBoundingClientRect().top >= document.querySelector('header').getBoundingClientRect().bottom", target_id=target), "Heading overlaps navbar"
    screenshot(f"services-{width}")
    if width in [390, 1440]:
        for category, label in zip(categories, labels):
            click(node("button", label))
            check_selected(category)
            assert js(f"new URL(location.href).searchParams.get('kategori') === '{category}'", target_id=target)
        screenshot(f"maintenance-{width}")

cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=390, height=1100, deviceScaleFactor=1, mobile=True)
navigate("/layanan?kategori=maintenance&source=test")
check_selected("maintenance")
assert js("(() => { const group=document.querySelector('.svc-pricing-tabs').getBoundingClientRect(); const button=document.querySelector('[aria-pressed=true]').getBoundingClientRect(); return button.left >= group.left - 1 && button.right <= group.right + 1; })()", target_id=target), "Direct-link category not visible"
cdp("Page.reload", session_id=session)
time.sleep(.7)
check_selected("maintenance")
click(node("button", "E-Commerce"))
check_selected("ecommerce")
assert js("new URL(location.href).searchParams.get('source') === 'test'", target_id=target)
history = cdp("Page.getNavigationHistory", session_id=session)
current = history["currentIndex"]
cdp("Page.navigateToHistoryEntry", session_id=session, entryId=history["entries"][current - 1]["id"])
check_selected("maintenance")
cdp("Page.navigateToHistoryEntry", session_id=session, entryId=history["entries"][current]["id"])
check_selected("ecommerce")
screenshot("ecommerce-mobile")
disclosures = cdp("Accessibility.getFullAXTree", session_id=session)["nodes"]
comparison = next(item for item in disclosures if item.get("name", {}).get("value") == "Bandingkan Semua Fitur" and item.get("role", {}).get("value") in ["DisclosureTriangle", "DisclosureTriangleGrouped"])
click(comparison)
assert js("document.querySelector('.svc-comparison details').open && document.querySelector('.svc-table-scroll').scrollWidth > document.querySelector('.svc-table-scroll').clientWidth && document.documentElement.scrollWidth <= innerWidth", target_id=target)
button = node("button", "Company Profile")
cdp("DOM.scrollIntoViewIfNeeded", session_id=session, backendNodeId=button["backendDOMNodeId"])
cdp("DOM.focus", session_id=session, backendNodeId=button["backendDOMNodeId"])
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Enter", code="Enter", windowsVirtualKeyCode=13, text="\r", unmodifiedText="\r")
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Enter", code="Enter", windowsVirtualKeyCode=13)
check_selected("company-profile")
assert js("document.activeElement.dataset.pricingTab === 'company-profile' && document.activeElement.matches(':focus-visible')", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[{"name": "prefers-reduced-motion", "value": "reduce"}])
assert js("parseFloat(getComputedStyle(document.querySelector('[data-pricing-tab]')).transitionDuration) <= .01 && getComputedStyle(document.documentElement).scrollBehavior === 'auto'", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[])
for query in ["invalid", "ecommerce&kategori=maintenance"]:
    navigate("/layanan?kategori=" + query)
    check_selected("landing-page")
print("Services design QA passed: 5 widths, 7 categories, carousel, direct URLs, reload, history, keyboard, comparison, WhatsApp payloads, reduced motion. Screenshots:", folder)
