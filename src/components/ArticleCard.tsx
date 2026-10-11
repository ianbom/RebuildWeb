import Link from "next/link";
import { type Article, formatArticleDate } from "@/app/artikel/data";

export function ArticleArt({ article }: { article: Article }) {
  return (
    <div className={`editorial-art editorial-${article.theme}`} aria-hidden="true">
      <span className="editorial-art-label">TEMUWEB / {article.category}</span>
      <span className="editorial-art-symbol">
        {article.theme === "article-business" ? "Rp" : article.theme === "article-engineering" ? "{ }" : "+"}
      </span>
      <strong>{article.theme === "article-business" ? "Rencanakan biayanya." : article.theme === "article-engineering" ? "Pilih alat yang tepat." : "Mulai dari prosesnya."}</strong>
    </div>
  );
}

export function ArticleCard({ article, headingLevel = "h2" }: { article: Article; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="editorial-card">
      <Link className="editorial-card-art" href={`/artikel/${article.slug}`} aria-label={`Baca artikel ${article.title}`}>
        <ArticleArt article={article} />
      </Link>
      <div className="editorial-card-meta">
        <span>{article.category}</span>
        <span>{article.readMinutes} menit baca</span>
      </div>
      <Heading><Link href={`/artikel/${article.slug}`}>{article.title}</Link></Heading>
      <p>{article.excerpt}</p>
      <div className="editorial-card-bottom">
        <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
        <Link className="text-link" href={`/artikel/${article.slug}`} aria-label={`Baca selengkapnya: ${article.title}`}>
          Baca artikel <span aria-hidden="true">&#8599;</span>
        </Link>
      </div>
    </article>
  );
}
