import { site } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return <footer className="footer" id="contact"><div className="shell">
    <div className="footer-intro"><span className="eyebrow">Ada proyek yang ingin dibangun?</span><h2>Punya ide yang ingin<br />diwujudkan<span className="period">.</span></h2><p>Ceritakan kebutuhan bisnis Anda. Kami bantu mengubahnya menjadi produk digital yang tepat.</p><a className="footer-email" href={`mailto:${site.email}`}>Mulai ngobrol <span aria-hidden="true">↗</span></a></div>
    <a className="footer-wordmark" href="#top" aria-label="TemuWeb, kembali ke atas"><span>temu</span><span>web</span><span>.</span></a>
    <div className="footer-grid"><div><span className="footer-label">Jelajahi</span>{site.navigation.map((item) => <Link key={item.label} href={`/${item.href}`}>{item.label}</Link>)}<Link href="/#contact">Kontak</Link></div><div><span className="footer-label">Layanan</span>{site.services.map((item) => <Link key={item.name} href="/#services">{item.name}</Link>)}</div><div><span className="footer-label">Hubungi Kami</span><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.whatsappUrl} target="_blank" rel="noreferrer">{site.whatsapp}</a><span className="footer-label office-label">Kantor</span><p>{site.address.split(", ").map((line) => <span key={line}>{line}<br /></span>)}</p></div><div><span className="footer-label">Ikuti</span>{site.social.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a>)}</div></div>
    <div className="footer-bottom"><span>© 2026 {site.legalName}</span><div><Link href="/privacy">Kebijakan Privasi</Link><Link href="/terms">Ketentuan</Link></div><a href="#top">Kembali ke atas ↑</a></div>
  </div></footer>;
}
