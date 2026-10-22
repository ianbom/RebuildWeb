import base64
import os
import tempfile
import time
from pathlib import Path

origin = os.environ.get("SITE_URL", "http://localhost:3013")
categories = ["landing-page", "company-profile", "ecommerce", "katalog-produk", "booking", "custom-web-app", "maintenance"]
labels = ["Landing Page", "Company Profile", "E-Commerce", "Katalog Produk", "Booking & Reservasi", "Custom Web App", "Maintenance"]
prices = [[1500000, 2800000, 4500000], [3000000, 5500000, 9500000], [6500000, 12500000, 22000000], [3500000], [5000000], [15000000], [350000]]
folder = Path(tempfile.gettempdir()) / "temuweb-services-qa"
folder.mkdir(exist_ok=True)
target = new_tab(origin + "/layanan")
wait_for_load()
session = cdp("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]
cdp("Runtime.enable", session_id=session)
cdp("Log.enable", session_id=session)

def wait(expression, message="Condition timed out"):
    for attempt in range(100):
        if js(expression, target_id=target):
            return
        time.sleep(.1)
    raise AssertionError(message)

def navigate(path):
    cdp("Page.navigate", session_id=session, url=origin + path)
    wait("document.readyState === 'complete' && !!document.querySelector('main')", f"Load failed: {path}")
    time.sleep(.3)

def node(role, name, exact=True):
    nodes = cdp("Accessibility.getFullAXTree", session_id=session)["nodes"]
    return next(item for item in nodes if (item.get("role", {}).get("value") == role or role == "DisclosureTriangle" and item.get("role", {}).get("value") == "DisclosureTriangleGrouped") and ((item.get("name", {}).get("value") == name) if exact else name in item.get("name", {}).get("value", "")))

def click(item):
    cdp("DOM.scrollIntoViewIfNeeded", session_id=session, backendNodeId=item["backendDOMNodeId"])
    time.sleep(.2)
    box = cdp("DOM.getBoxModel", session_id=session, backendNodeId=item["backendDOMNodeId"])["model"]["content"]
    position = {"x": sum(box[0::2])/4, "y": sum(box[1::2])/4, "button": "left", "clickCount": 1}
    cdp("Input.dispatchMouseEvent", session_id=session, type="mousePressed", **position)
    cdp("Input.dispatchMouseEvent", session_id=session, type="mouseReleased", **position)

def screenshot(name, selector=None):
    if selector:
        root = cdp("DOM.getDocument", session_id=session)["root"]["nodeId"]
        selected = cdp("DOM.querySelector", session_id=session, nodeId=root, selector=selector)["nodeId"]
        cdp("DOM.scrollIntoViewIfNeeded", session_id=session, nodeId=selected)
        time.sleep(.25)
    data = cdp("Page.captureScreenshot", session_id=session, format="png")["data"]
    (folder / f"{name}.png").write_bytes(base64.b64decode(data))

for width in [320, 390, 430, 768, 1024, 1440]:
    cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=width, height=1000, deviceScaleFactor=1, mobile=width < 768)
    navigate("/layanan")
    js("document.fonts.ready", target_id=target)
    assert js("document.documentElement.scrollWidth <= innerWidth", target_id=target), f"Page overflow at {width}px"
    assert js("document.querySelectorAll('h1').length === 1", target_id=target)
    assert js("document.querySelectorAll('[data-service-card]').length === 7", target_id=target)
    assert js("[...document.querySelectorAll('.svc-price-card .svc-button')].every(button => button.getBoundingClientRect().height >= 44)", target_id=target)
    if width == 1440:
        assert js("new Set([...document.querySelectorAll('.svc-price-card')].map(card => Math.round(card.getBoundingClientRect().height))).size === 1", target_id=target)
    if width in [320, 390, 1440]:
        screenshot(f"hero-{width}")
        screenshot(f"catalog-{width}", ".svc-service-card")
        screenshot(f"pricing-{width}", ".svc-price-card")

wait("!!document.querySelector('[data-category]')")
navigation_start = js("performance.timeOrigin", target_id=target)
for slug, label, amounts in zip(categories, labels, prices):
    click(node("button", label))
    wait(f"document.querySelector('#paket-layanan').dataset.pricingCategory === '{slug}'")
    assert js(f"new URL(location.href).searchParams.get('kategori') === '{slug}' && performance.timeOrigin === {navigation_start}", target_id=target), "Category change reloaded page"
    assert js(f"document.querySelectorAll('[data-service-card]').length === 1 && document.querySelector('[data-service-card]').dataset.serviceCard === '{slug}'", target_id=target)
    assert js(f"document.querySelectorAll('[data-package]').length === {len(amounts)}", target_id=target)
    assert js("[...document.querySelectorAll('[data-package]')].every(card => { const url = new URL(card.querySelector('a').href); return url.hostname === 'wa.me' && url.pathname === '/6281200000000' && url.searchParams.get('text').includes(card.querySelector('.svc-package-price').textContent) && url.searchParams.get('text').includes(card.querySelector('.svc-package-category').textContent); })", target_id=target)
    if len(amounts) == 3:
        click(node("DisclosureTriangle", "Bandingkan Semua Fitur"))
        wait("document.querySelector('#perbandingan-layanan details').open")
        assert js("[...document.querySelectorAll('[data-comparison-feature]')].every(row => [...row.querySelectorAll('td')].every((cell,index) => { const feature = document.querySelectorAll('[data-package]')[index].querySelector('[data-feature=\"' + row.dataset.comparisonFeature + '\"]'); if (!feature) return cell.textContent.includes('Tidak tercantum'); const label = row.querySelector('th').textContent.trim(); const text = feature.textContent.replace(/^\\s*\u2713/, '').trim(); return cell.textContent.includes('Termasuk') ? text === label : text === label + ': ' + cell.textContent.trim(); }))", target_id=target), "Comparison disagrees with pricing card"
    if slug == "ecommerce":
        screenshot("ecommerce-desktop", ".svc-price-card")
    if slug == "maintenance":
        screenshot("maintenance-desktop", ".svc-price-panel")

click(node("button", "Semua Layanan"))
wait("document.querySelectorAll('[data-service-card]').length === 7")
assert js("!new URL(location.href).searchParams.has('kategori')", target_id=target)
click(node("button", "Booking"))
wait("document.querySelector('#paket-layanan').dataset.pricingCategory === 'booking'")
assert js("document.querySelectorAll('[data-service-card]').length === 1 && new URL(location.href).searchParams.get('kategori') === 'booking'", target_id=target), "Pricing tab did not update filter"
click(node("button", "Semua Layanan"))
wait("document.querySelectorAll('[data-service-card]').length === 7")
click(node("button", "Lihat Detail Paket E-Commerce"))
wait("document.querySelector('#paket-layanan').dataset.pricingCategory === 'ecommerce'")
time.sleep(1)
assert js("Math.abs(document.querySelector('#paket-layanan').getBoundingClientRect().top) < 170", target_id=target), "Package detail anchor failed"
assert js("document.activeElement.id === 'pricing-title'", target_id=target), "Package detail focus was not transferred"
click(node("button", "Landing Page"))
wait("document.querySelector('#paket-layanan').dataset.pricingCategory === 'landing-page'")
history = cdp("Page.getNavigationHistory", session_id=session)
cdp("Page.navigateToHistoryEntry", session_id=session, entryId=history["entries"][history["currentIndex"] - 1]["id"])
wait("document.querySelector('#paket-layanan').dataset.pricingCategory === 'ecommerce'")
cdp("Page.navigateToHistoryEntry", session_id=session, entryId=history["entries"][history["currentIndex"]]["id"])
wait("document.querySelector('#paket-layanan').dataset.pricingCategory === 'landing-page'")

for path, selected, count in [("/layanan?kategori=ecommerce", "ecommerce", 1), ("/layanan?kategori=invalid", "landing-page", 7), ("/layanan?kategori=booking&kategori=maintenance", "landing-page", 7)]:
    navigate(path)
    wait(f"document.querySelector('#paket-layanan').dataset.pricingCategory === '{selected}'")
    assert js(f"document.querySelectorAll('[data-service-card]').length === {count}", target_id=target)
    cdp("Page.reload", session_id=session)
    wait(f"document.readyState === 'complete' && document.querySelector('#paket-layanan')?.dataset.pricingCategory === '{selected}'")

navigate("/layanan")
click(node("DisclosureTriangle", "Apakah harga sudah termasuk domain dan hosting?"))
assert js("document.querySelector('#faq-layanan details').open", target_id=target)
click(node("DisclosureTriangle", "Berapa lama proses pembuatan website?"))
assert js("document.querySelectorAll('#faq-layanan details[open]').length === 1", target_id=target)
screenshot("faq-desktop", ".svc-faq-list")
screenshot("addons-desktop", ".svc-addon-grid")
screenshot("process-desktop", ".svc-process-list")
screenshot("consultation-desktop", ".svc-final-cta")
cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=390, height=1000, deviceScaleFactor=1, mobile=True)
navigate("/layanan?kategori=ecommerce")
click(node("DisclosureTriangle", "Bandingkan Semua Fitur"))
assert js("document.querySelector('.svc-table-scroll').scrollWidth > document.querySelector('.svc-table-scroll').clientWidth && document.documentElement.scrollWidth <= innerWidth", target_id=target)
screenshot("comparison-mobile", ".svc-table-scroll")
navigate("/layanan?kategori=ecommerce")
click(node("button", "Buka menu"))
time.sleep(.4)
assert js("document.querySelector('main').inert && document.querySelector('footer').inert", target_id=target)
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Escape", code="Escape", windowsVirtualKeyCode=27)
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Escape", code="Escape", windowsVirtualKeyCode=27)
time.sleep(.3)
assert js("document.activeElement === document.querySelector('.menu-toggle') && !document.querySelector('main').inert", target_id=target)
button = node("button", "Semua Layanan")
cdp("DOM.scrollIntoViewIfNeeded", session_id=session, backendNodeId=button["backendDOMNodeId"])
cdp("DOM.focus", session_id=session, backendNodeId=button["backendDOMNodeId"])
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Enter", code="Enter", windowsVirtualKeyCode=13, text="\r", unmodifiedText="\r")
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Enter", code="Enter", windowsVirtualKeyCode=13)
wait("document.querySelectorAll('[data-service-card]').length === 7")
assert js("document.activeElement.matches(':focus-visible')", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[{"name": "prefers-reduced-motion", "value": "reduce"}])
assert js("getComputedStyle(document.documentElement).scrollBehavior === 'auto' && parseFloat(getComputedStyle(document.querySelector('.svc-hero h1')).animationDuration) <= .01", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[])
navigate("/")
click(node("button", "Buka menu"))
time.sleep(.4)
click(node("link", "Layanan", exact=False))
wait("location.pathname === '/layanan' && !document.querySelector('main').inert")
print(f"Services browser checks passed: 6 viewports, filters, pricing, history, FAQs, keyboard, mobile menu, reduced motion. Screenshots: {folder}")
cdp("Target.closeTarget", targetId=target)
