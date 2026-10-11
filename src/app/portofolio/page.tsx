import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectGrid } from "@/components/ProjectGrid";
import { FinalCTA } from "@/components/SecondarySections";
import { site } from "@/data/site";
import "./portfolio.css";

const title = `Portofolio — Konsep Website & Aplikasi | ${site.companyName}`;
const description =
  "Jelajahi contoh konsep website, toko online, dan aplikasi web TemuWeb. Semua karya di halaman ini merupakan ilustrasi, bukan proyek klien.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portofolio" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/portofolio",
    siteName: site.companyName,
    locale: "id_ID",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function PortfolioPage() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <section className="portfolio-list section" aria-labelledby="portfolio-title">
          <div className="shell">
            <div className="portfolio-heading">
              <span className="eyebrow">
                Contoh konsep / Bukan proyek klien
              </span>
              <h1 id="portfolio-title">
                Portofolio
                <span className="period">
                  .
                </span>
              </h1>
              <div className="portfolio-intro">
                <p>
                  Dari website sampai sistem bisnis. Jelajahi ide dan pendekatan
                  yang bisa kami bangun bersama Anda.
                </p>
                <p className="portfolio-count">
                  {site.projects.length} konsep ilustrasi
                  <span>
                    Bukan hasil pekerjaan atau testimoni klien.
                  </span>
                </p>
              </div>
            </div>
            <ProjectGrid headingLevel="h2" />
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
