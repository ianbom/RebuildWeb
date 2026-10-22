import base64
import os
import tempfile
import time
from pathlib import Path
from urllib.parse import parse_qs, urlparse

origin = os.environ.get("SITE_URL", "http://localhost:3014")
target = new_tab(origin + "/kontak")
wait_for_load()
session = cdp("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]
folder = Path(tempfile.gettempdir()) / "temuweb-contact-qa"
folder.mkdir(exist_ok=True)

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

def fill(label, value):
    click(node("textbox", label))
    cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="a", code="KeyA", modifiers=2, windowsVirtualKeyCode=65)
    cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="a", code="KeyA", modifiers=2, windowsVirtualKeyCode=65)
    cdp("Input.insertText", session_id=session, text=value)

for width in [320, 390, 768, 1024, 1440]:
    cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=width, height=1000, deviceScaleFactor=1, mobile=width < 600)
    cdp("Page.navigate", session_id=session, url=origin + "/kontak")
    time.sleep(1)
    assert js("!!document.querySelector('#contact-name') && document.documentElement.scrollWidth <= innerWidth", target_id=target), f"Overflow/load at {width}px"
    assert js("document.querySelectorAll('h1').length === 1 && document.querySelector('iframe').title.includes('Surabaya')", target_id=target)
    assert js("document.querySelector('.contact-demo').textContent.includes('Pesan tidak sampai') && document.querySelector('.contact-map-caption').textContent.includes('bukan titik kantor')", target_id=target)
    assert js("[...document.querySelectorAll('.footer-grid>div:first-child a')].filter(link=>link.getAttribute('href')==='/kontak').length === 1", target_id=target)
    image = cdp("Page.captureScreenshot", session_id=session, format="png", captureBeyondViewport=True)["data"]
    (folder / f"contact-{width}.png").write_bytes(base64.b64decode(image))

js("window.__contactDestination = ''; navigation.addEventListener('navigate', event => { if (event.destination.url.startsWith('https://wa.me/')) { window.__contactDestination = event.destination.url; event.preventDefault(); } });", target_id=target)
click(node("button", "Kirim ke WhatsApp"))
assert js("document.activeElement.id === 'contact-name' && !window.__contactDestination", target_id=target)
fill("Nama (wajib)", "   ")
fill("Pesan (wajib)", "Halo")
click(node("button", "Kirim ke WhatsApp"))
assert js("document.querySelector('#contact-name').validity.customError && !window.__contactDestination", target_id=target)
fill("Nama (wajib)", "  Dwi & Putri ")
fill("Pesan (wajib)", "   ")
click(node("button", "Kirim ke WhatsApp"))
assert js("document.querySelector('#contact-message').validity.customError && !window.__contactDestination", target_id=target)
fill("Pesan (wajib)", "  Website untuk kafe\nHarga & katalog? 100% siap ☕  ")
button = node("button", "Kirim ke WhatsApp")
cdp("DOM.focus", session_id=session, backendNodeId=button["backendDOMNodeId"])
cdp("Input.dispatchKeyEvent", session_id=session, type="keyDown", key="Enter", code="Enter", windowsVirtualKeyCode=13, text="\r", unmodifiedText="\r")
cdp("Input.dispatchKeyEvent", session_id=session, type="keyUp", key="Enter", code="Enter", windowsVirtualKeyCode=13)
time.sleep(.3)
destination = urlparse(js("window.__contactDestination", target_id=target))
assert destination.netloc == "wa.me" and destination.path == "/6281200000000"
assert parse_qs(destination.query)["text"] == ["Halo TemuWeb, saya ingin menghubungi Anda.\n\nNama: Dwi & Putri\nPesan:\nWebsite untuk kafe\nHarga & katalog? 100% siap ☕"]
assert js("location.pathname === '/kontak'", target_id=target), "Test must not contact WhatsApp"

cdp("Emulation.setDeviceMetricsOverride", session_id=session, width=390, height=1000, deviceScaleFactor=1, mobile=True)
cdp("Page.navigate", session_id=session, url=origin + "/")
time.sleep(1)
click(node("button", "Buka menu"))
time.sleep(.4)
click(node("link", "Kontak"))
time.sleep(1)
assert js("location.pathname === '/kontak' && !document.querySelector('main').inert", target_id=target)
print("Contact QA passed: 5 viewport sizes, validation, keyboard submit, encoded WhatsApp template, mobile navigation. Screenshots:", folder)
