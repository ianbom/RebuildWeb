import { site, whatsappUrl } from "@/data/site";
import Link from "next/link";
import { articles, formatArticleDate } from "@/app/artikel/data";

export function Company() {
  return (
    <section id="company" className="section company-section">
      <div className="shell">
        <span className="eyebrow">
          Tentang TemuWeb
        </span>
        <div className="company-statement">
          <h2>
            Teknologi yang baik bukan cuma berjalan.
            <br />
            {" "}
            <span>
              Ia membantu bisnis bekerja lebih baik.
            </span>
          </h2>
          <div className="company-copy">
            <p>
              Kami memadukan pemahaman bisnis, desain, dan pengembangan untuk
              membuat produk digital yang enak dipakai dan benar-benar berguna.
            </p>
            <p>
              Kami terlibat dari obrolan awal sampai produk rilis—dan tetap ada
              saat Anda perlu mengembangkannya.
            </p>
            <a className="text-link" href="#contact">
              Kenali cara kami bekerja{" "}
              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Problems() {
  return (
    <section className="section problems-section">
      <div className="shell">
        <span className="eyebrow">
          Sering Terjadi di Bisnis
        </span>
        <div className="problems-layout">
          <h2>
            Masalah digital
            <br />
            tak harus rumit
            <span className="period">
              .
            </span>
          </h2>
          <div>
            <ul>
              {site.problems.map((problem, index) => (
                <li key={problem}>
                  <span>
                    0{index + 1}
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
            <p>
              TemuWeb membantu mengubah masalah itu menjadi solusi digital yang
              sederhana dan terukur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="shell">
        <div className="pricing-heading">
          <span className="eyebrow">
            Harga Awal
          </span>
          <h2>
            Investasi yang jelas
            <br />
            sejak awal
            <span className="period">
              .
            </span>
          </h2>
          <p>
            Setiap proyek punya kebutuhan berbeda. Ini gambaran harga awal,
            dengan ruang lingkup yang disepakati sebelum mulai.
          </p>
        </div>
        <div className="pricing-grid">
          {site.pricing.map((item, index) => (
            <article
              className={`pricing-item${index === 1 ? " is-popular" : ""}`}
              key={item.name}
            >
              {index === 1 && (
                <span className="pricing-badge">
                  Pilihan Populer{" "}
                  <i />
                </span>
              )}
              <span className="pricing-index">
                0{index + 1}
              </span>
              <h3>
                {item.name}
              </h3>
              <p>
                {item.audience}
              </p>
              <strong className="pricing-price">
                {item.price === null ? (
                  "Harga khusus"
                ) : (
                  <>
                    Mulai{" "}
                    <span>
                      Rp{new Intl.NumberFormat("id-ID").format(item.price)}
                    </span>
                  </>
                )}
              </strong>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#contact">
                Diskusikan proyek{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="section capabilities-section">
      <div className="shell">
        <div className="section-split-heading">
          <span className="eyebrow">
            Pendekatan Kami
          </span>
          <h2>
            Produk yang baik
            <br /> dibangun bersama.
          </h2>
        </div>
        <div className="capability-list">
          {site.capabilities.map((item, index) => (
            <div key={item.name}>
              <span>
                0{index + 1}
              </span>
              <h3>
                {item.name}
              </h3>
              <p>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <section className="technology-section">
      <div className="shell technology-layout">
        <div>
          <span className="eyebrow">
            Teknologi yang Kami Pakai
          </span>
          <h2>
            Teknologi yang pas
            <br /> untuk kebutuhan nyata.
          </h2>
          <p>
            Kami memilih teknologi sesuai kebutuhan produk Anda, bukan sekadar
            mengikuti tren.
          </p>
        </div>
        <div className="technology-list">
          {site.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="shell">
        <div className="section-split-heading">
          <span className="eyebrow">
            Cara Kami Bekerja
          </span>
          <h2>
            Dari percakapan awal
            <br /> hingga terus berkembang.
          </h2>
        </div>
        <div className="process-list">
          {site.process.map((step, index) => (
            <div key={step.name}>
              <span className="process-number">
                0{index + 1}
              </span>
              <h3>
                {step.name}
              </h3>
              <p>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="industries-section">
      <div className="shell">
        <span className="eyebrow">
          Bidang yang Kami Kenal
        </span>
        <div className="industries-layout">
          <h2>
            Beda bidang,
            <br /> sama-sama ingin maju.
          </h2>
          <div>
            {site.industries.map((industry, index) => (
              <div key={industry}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section id="insights" className="section insights-section">
      <div className="shell">
        <div className="dark-heading">
          <span className="eyebrow">
            Cerita dari Studio
          </span>
          <h2>
            Artikel
            <span className="period">
              .
            </span>
          </h2>
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <article key={article.title} className="article-row">
              <div
                className={`article-art ${article.theme}`}
                aria-hidden="true"
              >
                <span className="article-art-index">
                  T / 0{index + 1}
                </span>
                {index === 0 ? (
                  <>
                    <span className="article-currency">
                      Rp
                    </span>
                    <strong>
                      Apa yang
                      <br />
                      layak dibuat?
                    </strong>
                  </>
                ) : index === 1 ? (
                  <>
                    <span className="article-code">
                      {`{ }`}
                    </span>
                    <strong>
                      BANGUN
                      <br />
                      LEBIH BAIK.
                    </strong>
                  </>
                ) : (
                  <>
                    <span className="article-rings" />
                    <strong>
                      CARI CARA
                      <br />
                      BARU.
                    </strong>
                  </>
                )}
              </div>
              <div className="article-copy">
                <span>
                  {article.category}
                </span>
                <h3>
                  <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
                </h3>
                <div>
                  <time dateTime={article.date}>{formatArticleDate(article.date)}</time>{" "}
                  <span aria-hidden="true">
                    ·
                  </span>
                  {" "}
                  {article.readMinutes} menit baca
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="section faq-section">
      <div className="shell faq-layout">
        <div>
          <span className="eyebrow">
            Pertanyaan Umum
          </span>
          <h2>
            Tanya Jawab
          </h2>
        </div>
        <div className="faq-list">
          {site.faq.map((item) => (
            <details key={item.question} name="faq">
              <summary>
                {item.question}
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="final-cta">
      <div className="shell final-cta-layout">
        <div>
          <span className="eyebrow">
            Mulai dari obrolan
          </span>
          <h2>
            Punya ide yang ingin
            <br />
            dibangun
            <span className="period">
              ?
            </span>
          </h2>
          <p className="final-cta-description">
            Ceritakan kebutuhan bisnis Anda. Kita bahas solusi dan perkiraan
            biayanya bersama.
          </p>
          <a
            className="final-cta-whatsapp"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi lewat WhatsApp
            <span aria-hidden="true">
              ↗
            </span>
          </a>
          {site.whatsappIsDemo && (
            <p className="final-cta-note" role="note">
              Nomor WhatsApp ini masih demo; pesan belum akan sampai.
            </p>
          )}
          <a className="final-cta-link" href={`mailto:${site.email}`}>
            Atau kirim email ke {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
