import base64
import os
import tempfile
import time
from pathlib import Path

origin = os.environ.get("SITE_URL", "http://localhost:3012")
slugs = ["biaya-website-profesional", "laravel-atau-nextjs", "kesalahan-transformasi-digital"]
screenshots = Path(tempfile.gettempdir()) / "temuweb-article-qa"
screenshots.mkdir(exist_ok=True)

target = new_tab(origin + "/artikel")
wait_for_load()
session = cdp("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]

def navigate(path):
    cdp("Page.navigate", session_id=session, url=origin + path)
    for attempt in range(100):
        if js(f"location.pathname === '{path}' && document.readyState === 'complete'", target_id=target):
            return
        time.sleep(.2)
    raise AssertionError(f"Navigation failed: {path}")

def find_node(role, name):
    nodes = cdp("Accessibility.getFullAXTree", session_id=session)["nodes"]
    return next(node for node in nodes if node.get("role", {}).get("value") == role and name in node.get("name", {}).get("value", ""))

def click_node(node):
    cdp("DOM.scrollIntoViewIfNeeded", session_id=session, backendNodeId=node["backendDOMNodeId"])
    time.sleep(.2)
    box = cdp("DOM.getBoxModel", session_id=session, backendNodeId=node["backendDOMNodeId"])["model"]["content"]
    position = {"x": sum(box[0::2])/4, "y": sum(box[1::2])/4, "button": "left", "clickCount": 1}
    cdp("Input.dispatchMouseEvent", session_id=session, type="mousePressed", **position)
    cdp("Input.dispatchMouseEvent", session_id=session, type="mouseReleased", **position)

def wait_location(path):
    for attempt in range(100):
        if js(f"location.pathname === '{path}'", target_id=target):
            time.sleep(.3)
            return
        time.sleep(.2)
    raise AssertionError(f"Link navigation failed: {path}")

for path in ["/artikel", *[f"/artikel/{slug}" for slug in slugs]]:
    navigate(path)
    for width in [390, 768, 1440]:
        cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=width, height=900, deviceScaleFactor=1, mobile=width < 768)
        js("document.fonts.ready", target_id=target)
        time.sleep(.3)
        assert js("document.documentElement.scrollWidth <= innerWidth", target_id=target), f"Overflow: {path} at {width}px"
        assert js("document.querySelectorAll('h1').length === 1", target_id=target), f"Heading count: {path}"
        if path == "/artikel":
            expected_columns = 1 if width == 390 else 2 if width == 768 else 3
            assert js(f"getComputedStyle(document.querySelector('.editorial-grid')).gridTemplateColumns.split(' ').length === {expected_columns}", target_id=target)
            assert js("document.querySelectorAll('.editorial-card h2').length === 3", target_id=target)
        else:
            assert js("document.querySelector('.editorial-body').getBoundingClientRect().width <= 720", target_id=target)
            assert js("document.querySelectorAll('.editorial-related .editorial-card h3').length === 2", target_id=target)
        if width in [390, 1440] and path in ["/artikel", "/artikel/biaya-website-profesional"]:
            image = cdp("Page.captureScreenshot", session_id=session, format="png")["data"]
            name = "listing" if path == "/artikel" else "detail"
            (screenshots / f"{name}-{width}.png").write_bytes(base64.b64decode(image))

cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=390, height=900, deviceScaleFactor=1, mobile=True)
navigate("/artikel")
click_node(find_node("link", "Baca artikel Berapa biaya"))
wait_location("/artikel/biaya-website-profesional")
click_node(find_node("link", "Baca artikel Laravel"))
wait_location("/artikel/laravel-atau-nextjs")
click_node(find_node("link", "Kembali ke artikel"))
wait_location("/artikel")
click_node(find_node("button", "Buka menu"))
time.sleep(.4)
assert js("document.querySelector('main').inert && document.querySelector('footer').inert", target_id=target)
assert js("getComputedStyle(document.querySelector('.floating-contact')).visibility === 'hidden'", target_id=target)
cdp("DOM.focus", session_id=session, backendNodeId=find_node("link", "Artikel")["backendDOMNodeId"])
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Escape", code="Escape", windowsVirtualKeyCode=27)
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Escape", code="Escape", windowsVirtualKeyCode=27)
time.sleep(.3)
assert js("document.activeElement === document.querySelector('.menu-toggle') && !document.querySelector('main').inert", target_id=target)
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Tab", code="Tab", windowsVirtualKeyCode=9)
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Tab", code="Tab", windowsVirtualKeyCode=9)
assert js("document.activeElement.matches('main a') && document.activeElement.matches(':focus-visible')", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[{"name": "prefers-reduced-motion", "value": "reduce"}])
assert js("matchMedia('(prefers-reduced-motion: reduce)').matches && getComputedStyle(document.documentElement).scrollBehavior === 'auto'", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[])
navigate("/")
click_node(find_node("button", "Buka menu"))
time.sleep(.4)
click_node(find_node("link", "Artikel"))
wait_location("/artikel")
assert js("!document.querySelector('main').inert", target_id=target)
cdp("Emulation.clearDeviceMetricsOverride", session_id=session)
print(f"Articles browser checks passed. Screenshots: {screenshots}")
