import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { FinalCTA } from "@/components/SecondarySections";
import { site } from "@/data/site";
import { articles } from "./data";
import "./artikel.css";

const title = `Artikel - Website, Teknologi & Bisnis | ${site.companyName}`;
const description = "Baca artikel TemuWeb tentang biaya website, pilihan teknologi, dan persiapan transformasi digital untuk bisnis Anda.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/artikel" },
  openGraph: { type: "website", title, description, url: "/artikel", siteName: site.companyName, locale: "id_ID", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function ArticlesPage() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <section className="editorial-list section" aria-labelledby="articles-title">
          <div className="shell">
            <div className="editorial-heading">
              <span className="eyebrow">Catatan dari TemuWeb</span>
              <h1 id="articles-title">Artikel<span className="period">.</span></h1>
              <p>Biaya website, pilihan teknologi, dan cara menyiapkan bisnis untuk beralih ke digital. Mulai dari hal yang perlu Anda tahu.</p>
            </div>
            <div className="editorial-grid">
              {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
