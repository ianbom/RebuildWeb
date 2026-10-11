import { site, whatsappUrl } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <a
        className="floating-contact"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        title={
          site.whatsappIsDemo
            ? "WhatsApp nomor demo, pesan tidak sampai ke TemuWeb"
            : "Konsultasi lewat WhatsApp"
        }
        aria-label={
          site.whatsappIsDemo
            ? "WhatsApp nomor demo, pesan tidak sampai ke TemuWeb"
            : "Konsultasi lewat WhatsApp"
        }
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.43 0 .05 5.38.05 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.16-1.62a11.94 11.94 0 0 0 5.88 1.5h.01c6.61 0 11.99-5.38 11.99-11.99a11.92 11.92 0 0 0-3.52-8.41ZM12.04 21.86a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.66.96.98-3.57-.24-.37a9.88 9.88 0 0 1-1.51-5.3c0-5.5 4.48-9.98 9.99-9.98a9.91 9.91 0 0 1 7.05 2.92 9.91 9.91 0 0 1 2.92 7.06c0 5.5-4.48 9.97-9.98 9.97Zm5.47-7.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.12 4.52.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
      <footer className="footer" id="footer">
        <div className="shell">
          <a
            className="footer-wordmark"
            href="#top"
            aria-label="TemuWeb, kembali ke atas"
          >
            <span>
              temu
            </span>
            <span>
              web
            </span>
            <span>
              .
            </span>
          </a>
          <div className="footer-grid">
            <div>
              <span className="footer-label">
                Jelajahi
              </span>
              {site.navigation.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/#contact">
                Kontak
              </Link>
            </div>
            <div>
              <span className="footer-label">
                Layanan
              </span>
              {site.services.map((item) => (
                <Link key={item.name} href="/#services">
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <span className="footer-label">
                Hubungi Kami
              </span>
              <a href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                WhatsApp{" "}
                <span>
                  {site.whatsapp}
                </span>
              </a>
              {site.whatsappIsDemo && (
                <small className="footer-demo-note">
                  Nomor demo — hubungi via email
                </small>
              )}
              <span className="footer-label office-label">
                Kantor
              </span>
              <p>
                {site.address}
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2026 {site.legalName}
            </span>
            <div>
              <Link href="/privacy">
                Kebijakan Privasi
              </Link>
              <Link href="/terms">
                Ketentuan
              </Link>
            </div>
            <a href="#top">
              Kembali ke atas ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
