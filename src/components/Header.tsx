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
      <Link className="wordmark" href="/" aria-label={`${site.companyName} beranda`} onClick={() => setMenuOpen(false)}><span>temu</span><span className="wordmark-blue">web</span><span className="wordmark-dot">.</span></Link>
      <nav className="desktop-nav" aria-label="Navigasi utama">{site.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      <div className="header-actions"><a className="contact-pill" href="#contact" onClick={() => setMenuOpen(false)}>Mulai Proyek <span aria-hidden="true">↗</span></a><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></div>
    </div>
    <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navigasi mobile" inert={!menuOpen}>{site.navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Mulai Proyek<span aria-hidden="true">↗</span></a><div className="mobile-menu-bottom"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.whatsappUrl}>{site.phone}</a><p>{site.address}</p></div></nav>
  </header>;
}
