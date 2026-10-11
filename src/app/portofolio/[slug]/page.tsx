import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectArt } from "@/components/ProjectArt";
import { FinalCTA } from "@/components/SecondarySections";
import { site } from "@/data/site";
import "./project.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  const project = site.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  const title = `${project.name} — Konsep Produk Digital | ${site.companyName}`;
  const description = `Contoh konsep, bukan proyek klien. ${project.narrative}`;
  const url = `/portofolio/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: site.companyName,
      locale: "id_ID",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = getProject((await params).slug);
  const index = site.projects.findIndex((item) => item.slug === project.slug);
  const nextProject = site.projects[(index + 1) % site.projects.length];

  return (
    <>
      <div id="top" />
      <Header />
      <main className="case-page">
        <section className="case-hero shell" aria-labelledby="case-title">
          <Link className="case-back text-link" href="/portofolio">
            <span aria-hidden="true">
              ←
            </span>
            Kembali ke portofolio
          </Link>
          <p className="eyebrow case-label">
            Contoh konsep / Bukan proyek klien
          </p>
          <h1 id="case-title">
            {project.name}
            <span className="period">
              .
            </span>
          </h1>
          <div className="case-intro">
            <p>
              {project.headline}
            </p>
            <span className="case-industry">
              {project.industry} / {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </section>
        <div className="case-art shell">
          <ProjectArt project={project} />
        </div>
        <section className="case-overview shell" aria-labelledby="overview-title">
          <div>
            <span className="eyebrow">
              Tentang konsep ini
            </span>
            <h2 id="overview-title">
              Gambaran proyek
            </h2>
            <p>
              {project.narrative}
            </p>
            <p className="case-disclaimer">
              Ini contoh rancangan untuk menggambarkan pendekatan TemuWeb.
              Bukan produk klien yang sudah dirilis atau klaim hasil bisnis.
            </p>
          </div>
          <dl className="case-meta">
            <dt>
              Layanan dalam konsep
            </dt>
            <dd>
              <ul>
                {project.services.map((service) => (
                  <li key={service}>
                    {service}
                  </li>
                ))}
              </ul>
            </dd>
            <dt>
              Fokus rancangan
            </dt>
            <dd>
              {project.scope}
            </dd>
          </dl>
        </section>
        <section className="case-story" aria-label="Rancangan solusi">
          <div className="shell">
            <div className="case-row">
              <span className="case-number">
                01
              </span>
              <h2>
                Masalah yang ingin dijawab
              </h2>
              <p>
                {project.challenge}
              </p>
            </div>
            <div className="case-row">
              <span className="case-number">
                02
              </span>
              <h2>
                Pendekatan solusi
              </h2>
              <p>
                {project.solution}
              </p>
            </div>
            <div className="case-row">
              <span className="case-number">
                03
              </span>
              <h2>
                Fitur utama
              </h2>
              <ul className="case-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <nav className="case-next-section shell" aria-label="Jelajahi konsep lainnya">
          <span className="eyebrow">
            Konsep berikutnya
          </span>
          <Link className="case-next" href={`/portofolio/${nextProject.slug}`}>
            {nextProject.name}
            <span aria-hidden="true">
              ↗
            </span>
          </Link>
        </nav>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
