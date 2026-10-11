import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleArt, ArticleCard } from "@/components/ArticleCard";
import { FinalCTA } from "@/components/SecondarySections";
import { site } from "@/data/site";
import { articles, formatArticleDate } from "../data";
import "../artikel.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

function getArticle(slug: string) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  const title = `${article.title} | ${site.companyName}`;
  return {
    title, description: article.excerpt,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: {
      type: "article", title, description: article.excerpt, url: `/artikel/${article.slug}`,
      siteName: site.companyName, locale: "id_ID", publishedTime: article.date,
      authors: [article.author], images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image", title, description: article.excerpt, images: ["/opengraph-image"] },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticle((await params).slug);
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <article className="editorial-detail shell" aria-labelledby="article-title">
          <header className="editorial-detail-heading">
            <Link className="text-link" href="/artikel"><span aria-hidden="true">&#8592;</span> Kembali ke artikel</Link>
            <span className="eyebrow">{article.category}</span>
            <h1 id="article-title">{article.title}</h1>
            <p className="editorial-lead">{article.excerpt}</p>
            <div className="editorial-byline">
              <span>{article.author}</span>
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              <span>{article.readMinutes} menit baca</span>
            </div>
          </header>
          <div className="editorial-cover"><ArticleArt article={article} /></div>
          <div className="editorial-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            <Link className="text-link editorial-back" href="/artikel"><span aria-hidden="true">&#8592;</span> Semua artikel</Link>
          </div>
        </article>
        <section className="editorial-related" aria-labelledby="related-title">
          <div className="shell">
            <span className="eyebrow">Lanjut membaca</span>
            <h2 id="related-title">Artikel lainnya<span className="period">.</span></h2>
            <div className="editorial-grid">
              {articles.filter((item) => item.slug !== article.slug).map((item) => <ArticleCard key={item.slug} article={item} headingLevel="h3" />)}
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
