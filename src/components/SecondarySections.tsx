import { site } from "@/data/site";

export function Company() {
  return <section id="company" className="section company-section"><div className="shell"><span className="eyebrow">A better way to build</span><div className="company-statement"><h2>Teknologi yang baik bukan hanya bekerja.<br />{" "}<span>Ia membuat bisnis bekerja lebih baik.</span></h2><div className="company-copy"><p>Kami menggabungkan product thinking, desain, dan software engineering untuk membangun solusi digital yang tidak hanya terlihat baik, tetapi juga memberikan dampak nyata bagi bisnis.</p><p>Tim kami bekerja sebagai partner teknologi dari tahap discovery, design, development, hingga deployment dan maintenance.</p><a className="text-link" href="#contact">Get to know us <span aria-hidden="true">↗</span></a></div></div><div className="stats-row">{site.statistics.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></section>;
}

export function Capabilities() {
  return <section className="section capabilities-section"><div className="shell"><div className="section-split-heading"><span className="eyebrow">How we think</span><h2>Good products are<br />{" "}built together.</h2></div><div className="capability-list">{site.capabilities.map((item, index) => <div key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p></div>)}</div></div></section>;
}

export function Technology() {
  return <section className="technology-section"><div className="shell technology-layout"><div><span className="eyebrow">Our toolkit</span><h2>Technology built for<br />{" "}real-world products.</h2><p>Alat yang tepat untuk persoalan yang tepat. Kami memilih stack berdasarkan kebutuhan, bukan tren.</p></div><div className="technology-list">{site.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>;
}

export function Process() {
  return <section id="process" className="section process-section"><div className="shell"><div className="section-split-heading"><span className="eyebrow">Our process</span><h2>From the first question<br />{" "}to what comes next.</h2></div><div className="process-list">{site.process.map((step, index) => <div key={step.name}><span className="process-number">0{index + 1}</span><h3>{step.name}</h3><p>{step.description}</p></div>)}</div></div></section>;
}

export function Industries() {
  return <section className="industries-section"><div className="shell"><span className="eyebrow">Where we work</span><div className="industries-layout"><h2>Different industries.<br />{" "}Shared ambition.</h2><div>{site.industries.map((industry, index) => <div key={industry}><span>{String(index + 1).padStart(2, "0")}</span>{industry}</div>)}</div></div></div></section>;
}

export function Insights() {
  return <section id="insights" className="section insights-section"><div className="shell"><div className="dark-heading"><span className="eyebrow">Ideas from the studio</span><h2>Insights<span className="period">.</span></h2></div><div className="article-list">{site.articles.map((article, index) => <article key={article.title} className="article-row"><div className={`article-art ${article.theme}`} aria-hidden="true"><span className="article-art-index">N / 0{index + 1}</span>{index === 0 ? <><span className="article-currency">Rp</span><strong>What is<br />worth building?</strong></> : index === 1 ? <><span className="article-code">{`{ }`}</span><strong>BUILD<br />BETTER.</strong></> : <><span className="article-rings" /><strong>RETHINK<br />THE WAY.</strong></>}</div><div className="article-copy"><span>{article.category}</span><h3>{article.title}</h3><div>{article.date} <span aria-hidden="true">·</span> {article.read}</div></div></article>)}</div></div></section>;
}

export function FAQ() {
  return <section className="section faq-section"><div className="shell faq-layout"><div><span className="eyebrow">Good to know</span><h2>FAQ</h2></div><div className="faq-list">{site.faq.map((item) => <details key={item.question} name="faq"><summary>{item.question}<span className="disclosure-icon" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
