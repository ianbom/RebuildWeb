import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { resolveServiceCategory } from "@/data/services";
import { site, whatsappUrl } from "@/data/site";
import "./layanan.css";

const title = "Layanan & Harga Jasa Pembuatan Website | TemuWeb";
const description = "Temukan layanan pembuatan website profesional dari TemuWeb. Landing page, company profile, toko online, hingga aplikasi web custom dengan pilihan paket sesuai kebutuhan bisnis.";

export const metadata: Metadata = {
  title, description,
  keywords: ["Jasa Pembuatan Website", "Jasa Website Profesional", "Jasa Landing Page", "Jasa Website Company Profile", "Jasa Pembuatan Toko Online", "Jasa Website Surabaya"],
  alternates: { canonical: "/layanan" },
  openGraph: { type: "website", title, description, url: "/layanan", siteName: site.companyName, locale: "id_ID", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default async function ServicesPage({ searchParams }: { searchParams: Promise<{ kategori?: string | string[] }> }) {
  const category = resolveServiceCategory((await searchParams).kategori);
  return (
    <>
      <div id="top" />
      <Header />
      <main className="svc-page">
        
        <ServicesExplorer initialCategory={category} />
   
        <section id="contact" className="svc-final-cta" aria-labelledby="consultation-title">
          <div className="shell">
            <span className="eyebrow">Mulai dari obrolan</span>
            <h2 id="consultation-title">Punya ide website?<br />Mari wujudkan bersama<span>.</span></h2>
            <p>Ceritakan kebutuhan bisnis Anda, dan kami bantu menemukan solusi digital yang tepat.</p>
            <div className="svc-final-actions">
              <a className="svc-button svc-button-white" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Konsultasi Gratis <span aria-hidden="true">&#8599;</span></a>
              <Link className="text-link" href="/portofolio">Lihat Portofolio <span aria-hidden="true">&#8599;</span></Link>
            </div>
            {site.whatsappIsDemo && <p className="svc-final-note" role="note">Nomor WhatsApp ini masih demo; pesan belum akan sampai. Hubungi via <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
