import { site } from "@/data/site";

export function Company() {
  return <section id="company" className="section company-section"><div className="shell"><span className="eyebrow">Tentang TemuWeb</span><div className="company-statement"><h2>Teknologi yang baik bukan cuma berjalan.<br />{" "}<span>Ia membantu bisnis bekerja lebih baik.</span></h2><div className="company-copy"><p>Kami memadukan pemahaman produk, desain, dan pengembangan perangkat lunak untuk membuat solusi digital yang enak dipakai dan benar-benar berguna bagi bisnis.</p><p>Kami menemani Anda dari mencari tahu kebutuhan, merancang, dan membangun, sampai produk rilis dan terus dirawat.</p><a className="text-link" href="#contact">Kenali cara kami bekerja <span aria-hidden="true">↗</span></a></div></div><div className="stats-row">{site.statistics.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></section>;
}

export function Capabilities() {
  return <section className="section capabilities-section"><div className="shell"><div className="section-split-heading"><span className="eyebrow">Pendekatan Kami</span><h2>Produk yang baik<br />{" "}dibangun bersama.</h2></div><div className="capability-list">{site.capabilities.map((item, index) => <div key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p></div>)}</div></div></section>;
}

export function Technology() {
  return <section className="technology-section"><div className="shell technology-layout"><div><span className="eyebrow">Teknologi yang Kami Pakai</span><h2>Teknologi yang pas<br />{" "}untuk kebutuhan nyata.</h2><p>Kami memilih teknologi sesuai kebutuhan produk Anda, bukan sekadar mengikuti tren.</p></div><div className="technology-list">{site.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>;
}

export function Process() {
  return <section id="process" className="section process-section"><div className="shell"><div className="section-split-heading"><span className="eyebrow">Cara Kami Bekerja</span><h2>Dari percakapan awal<br />{" "}hingga terus berkembang.</h2></div><div className="process-list">{site.process.map((step, index) => <div key={step.name}><span className="process-number">0{index + 1}</span><h3>{step.name}</h3><p>{step.description}</p></div>)}</div></div></section>;
}

export function Industries() {
  return <section className="industries-section"><div className="shell"><span className="eyebrow">Bidang yang Kami Kenal</span><div className="industries-layout"><h2>Beda bidang,<br />{" "}sama-sama ingin maju.</h2><div>{site.industries.map((industry, index) => <div key={industry}><span>{String(index + 1).padStart(2, "0")}</span>{industry}</div>)}</div></div></div></section>;
}

export function Insights() {
  return <section id="insights" className="section insights-section"><div className="shell"><div className="dark-heading"><span className="eyebrow">Cerita dari Studio</span><h2>Artikel<span className="period">.</span></h2></div><div className="article-list">{site.articles.map((article, index) => <article key={article.title} className="article-row"><div className={`article-art ${article.theme}`} aria-hidden="true"><span className="article-art-index">T / 0{index + 1}</span>{index === 0 ? <><span className="article-currency">Rp</span><strong>Apa yang<br />layak dibuat?</strong></> : index === 1 ? <><span className="article-code">{`{ }`}</span><strong>BANGUN<br />LEBIH BAIK.</strong></> : <><span className="article-rings" /><strong>CARI CARA<br />BARU.</strong></>}</div><div className="article-copy"><span>{article.category}</span><h3>{article.title}</h3><div>{article.date} <span aria-hidden="true">·</span> {article.read}</div></div></article>)}</div></div></section>;
}

export function FAQ() {
  return <section className="section faq-section"><div className="shell faq-layout"><div><span className="eyebrow">Pertanyaan Umum</span><h2>Tanya Jawab</h2></div><div className="faq-list">{site.faq.map((item) => <details key={item.question} name="faq"><summary>{item.question}<span className="disclosure-icon" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
