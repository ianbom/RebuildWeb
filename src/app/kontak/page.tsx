import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import "./kontak.css";

const title = "Kontak | TemuWeb";
const description = "Hubungi TemuWeb untuk membicarakan kebutuhan website dan solusi digital Anda. Lihat lokasi kami dan siapkan pesan melalui WhatsApp.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/kontak" },
  openGraph: { type: "website", title, description, url: "/kontak", siteName: site.companyName, locale: "id_ID", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function ContactPage() {
  const mapsUrl = new URL("https://www.google.com/maps");
  mapsUrl.searchParams.set("q", site.address);
  const embedUrl = new URL(mapsUrl);
  embedUrl.searchParams.set("output", "embed");

  return (
    <>
      <div id="top" />
      <Header />
      <main className="contact-page">
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="shell">
            <span className="eyebrow">Kontak TemuWeb</span>
            <h1 id="contact-title">Mari bicarakan<br /><em>kebutuhan Anda</em><span className="period">.</span></h1>
            <p>Punya ide, pertanyaan, atau kebutuhan website? Ceritakan kepada kami.</p>
          </div>
        </section>
        <section className="contact-content shell" aria-label="Informasi kontak dan form pesan">
          <div className="contact-location">
            <span className="eyebrow">Temukan kami</span>
            <h2>Terhubung dari<br />mana saja<span className="period">.</span></h2>
            <dl className="contact-details">
              <div><dt>Alamat</dt><dd><address>{site.address}</address></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>WhatsApp</dt><dd>{site.whatsapp}{site.whatsappIsDemo && <small>Nomor demo</small>}</dd></div>
            </dl>
            <div className="contact-map">
              <iframe src={embedUrl.toString()} title={`Google Maps: area ${site.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="contact-map-caption">
              <p>Peta menampilkan area Surabaya, bukan titik kantor.</p>
              <a href={mapsUrl.toString()} target="_blank" rel="noreferrer">Buka Google Maps <span aria-hidden="true">&#8599;</span><span className="sr-only"> (tab baru)</span></a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
