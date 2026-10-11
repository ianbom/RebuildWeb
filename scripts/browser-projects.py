import os
import time

origin = os.environ.get("SITE_URL", "http://localhost:3001")
slugs = ["santara-commerce", "arunika-finance", "logistikku", "eduspace", "medikaplus", "agrilink"]

for path in ["/", "/portofolio", *[f"/portofolio/{slug}" for slug in slugs]]:
    target = new_tab(origin + path)
    wait_for_load()
    session = cdp("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]
    for width in [375, 390, 430, 768, 1024, 1280, 1440]:
        cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=width, height=844, deviceScaleFactor=1, mobile=width < 768)
        time.sleep(.15)
        assert js("document.documentElement.scrollWidth <= innerWidth", target_id=target), f"Overflow: {path} at {width}px"
        assert js("document.querySelectorAll('h1').length === 1", target_id=target), f"Invalid heading count: {path}"
        if path == "/portofolio":
            assert js("document.querySelectorAll('.project-card h2').length === 6", target_id=target)
        if path == "/":
            assert js("document.querySelector('.hero').getBoundingClientRect().height >= innerHeight", target_id=target), f"Hero too short at {width}px"
            assert js("document.querySelector('.hero').nextElementSibling.getBoundingClientRect().top >= innerHeight", target_id=target), f"Next section visible at {width}px"
            assert js("document.querySelector('.floating-contact svg') && document.querySelector('.floating-contact').textContent.trim() === ''", target_id=target)
            assert js("document.querySelector('.floating-contact').getBoundingClientRect().width >= 44 && document.querySelector('.floating-contact').getBoundingClientRect().height >= 44", target_id=target)
            assert js("document.querySelector('.floating-contact').getAttribute('aria-label') && document.querySelector('.floating-contact').title", target_id=target)
            assert js("Math.abs(document.querySelector('.hero-image').getBoundingClientRect().width / document.querySelector('.hero-image').getBoundingClientRect().height - 4/3) < .01", target_id=target)
            assert js("getComputedStyle(document.querySelector('.hero-image')).objectFit === 'contain'", target_id=target)
    if path == "/":
        for width in [375, 1440]:
            cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=width, height=500, deviceScaleFactor=1, mobile=width < 768)
            assert js("document.querySelector('.hero').getBoundingClientRect().height >= innerHeight && document.querySelector('.hero-image').getBoundingClientRect().bottom <= document.querySelector('.hero').getBoundingClientRect().bottom", target_id=target)
            assert js("document.documentElement.scrollWidth <= innerWidth", target_id=target)
    cdp("Emulation.clearDeviceMetricsOverride", session_id=session)
    cdp("Target.closeTarget", targetId=target)

target = new_tab(origin)
wait_for_load()
session = cdp("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]
cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=390, height=844, deviceScaleFactor=1, mobile=True)

def find_node(role, name):
    nodes = cdp("Accessibility.getFullAXTree", session_id=session)["nodes"]
    return next(node for node in nodes if node.get("role", {}).get("value") == role and name in node.get("name", {}).get("value", ""))

def click_node(node):
    js("document.documentElement.style.scrollBehavior='auto'", target_id=target)
    cdp("DOM.scrollIntoViewIfNeeded", session_id=session, backendNodeId=node["backendDOMNodeId"])
    time.sleep(.2)
    box = cdp("DOM.getBoxModel", session_id=session, backendNodeId=node["backendDOMNodeId"])["model"]["content"]
    position = {"x": sum(box[0::2])/4, "y": sum(box[1::2])/4, "button": "left", "clickCount": 1}
    cdp("Input.dispatchMouseEvent", session_id=session, type="mousePressed", **position)
    cdp("Input.dispatchMouseEvent", session_id=session, type="mouseReleased", **position)

def wait_location(path, fragment=""):
    for attempt in range(100):
        if js(f"location.pathname === '{path}' && location.hash === '{fragment}'", target_id=target):
            return
        time.sleep(.2)
    raise AssertionError(f"Navigation failed: {path}{fragment}")

click_node(find_node("link", "Lihat semua portofolio"))
wait_location("/portofolio")
assert js("document.querySelectorAll('.project-card').length === 6", target_id=target)
click_node(find_node("link", "Lihat konsep Santara Commerce"))
wait_location("/portofolio/santara-commerce")
cdp("Emulation.setEmulatedMedia", session_id=session, features=[{"name": "prefers-reduced-motion", "value": "reduce"}])
assert js("matchMedia('(prefers-reduced-motion: reduce)').matches && parseFloat(getComputedStyle(document.querySelector('.case-hero')).animationDuration) <= .01", target_id=target)
cdp("Emulation.setEmulatedMedia", session_id=session, features=[])
click_node(find_node("button", "Buka menu"))
time.sleep(.4)
assert js("document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true'", target_id=target)
assert js("document.querySelector('main').inert && document.querySelector('footer').inert", target_id=target)
assert js("getComputedStyle(document.querySelector('.floating-contact')).visibility === 'hidden'", target_id=target)
assert js("document.body.classList.contains('menu-open')", target_id=target)
mail = find_node("link", "hello@temuweb.id")
cdp("DOM.focus", session_id=session, backendNodeId=mail["backendDOMNodeId"])
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Escape", code="Escape", windowsVirtualKeyCode=27)
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Escape", code="Escape", windowsVirtualKeyCode=27)
time.sleep(.3)
assert js("document.activeElement === document.querySelector('.menu-toggle')", target_id=target)
assert js("!document.querySelector('main').inert && !document.body.classList.contains('menu-open')", target_id=target)
assert js("getComputedStyle(document.querySelector('.floating-contact')).visibility === 'visible'", target_id=target)
click_node(find_node("link", "Arunika Finance"))
wait_location("/portofolio/arunika-finance")
click_node(find_node("link", "Kembali ke portofolio"))
wait_location("/portofolio")
assert js("document.querySelectorAll('.project-card').length === 6", target_id=target)
cdp("Emulation.clearDeviceMetricsOverride", session_id=session)
cdp("Target.closeTarget", targetId=target)
print("PASS: 56 viewport checks, hero proportions, homepage/list/detail flow, reduced motion, mobile menu, Escape focus, and next project.")
