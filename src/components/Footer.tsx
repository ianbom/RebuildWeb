import { site } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return <footer className="footer" id="contact"><div className="shell">
    <div className="footer-intro"><span className="eyebrow">Have a project in mind?</span><h2>Let&apos;s build<br />what&apos;s next<span className="period">.</span></h2><p>Ceritakan bisnis, masalah, atau produk yang ingin Anda bangun. Tim kami akan membantu menentukan pendekatan teknologi yang tepat.</p><a className="footer-email" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a></div>
    <div className="footer-grid"><div><span className="footer-label">Explore</span>{site.navigation.map((item) => <Link key={item.label} href={`/${item.href}`}>{item.label}</Link>)}<Link href="/#contact">Contact</Link></div><div><span className="footer-label">What we do</span>{site.services.map((item) => <Link key={item.name} href="/#services">{item.name}</Link>)}</div><div><span className="footer-label">Say hello</span><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.whatsappUrl} target="_blank" rel="noreferrer">{site.whatsapp}</a><span className="footer-label office-label">Office</span><p>{site.address.split(", ").map((line) => <span key={line}>{line}<br /></span>)}</p></div><div><span className="footer-label">Follow</span>{site.social.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>)}</div></div>
    <div className="footer-bottom"><span>© 2026 {site.legalName}</span><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link></div><a href="#top">Back to top ↑</a></div>
  </div></footer>;
}
