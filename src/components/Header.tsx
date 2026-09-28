"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > 170 && current > previous + 3 && !menuOpen);
      setScrolled(current > 30);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const page = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (page) page.inert = menuOpen;
    if (footer) footer.inert = menuOpen;
    return () => {
      document.body.classList.remove("menu-open");
      if (page) page.inert = false;
      if (footer) footer.inert = false;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return <header className={`site-header${hidden ? " is-hidden" : ""}${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-active" : ""}`}>
    <div className="header-inner shell">
      <Link className="wordmark" href="/" aria-label={`${site.companyName} home`} onClick={() => setMenuOpen(false)}><span className="wordmark-symbol" aria-hidden="true">N</span><span className="wordmark-text">{site.companyName.toLowerCase()}</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{site.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      <div className="header-actions"><a className="contact-pill" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s Talk <span aria-hidden="true">↗</span></a><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></div>
    </div>
    <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" inert={!menuOpen}>{site.navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Contact<span aria-hidden="true">↗</span></a><div className="mobile-menu-bottom"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.whatsappUrl}>{site.phone}</a><p>{site.address}</p></div></nav>
  </header>;
}
