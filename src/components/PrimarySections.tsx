import { ProjectGrid } from "./ProjectGrid";
import Link from "next/link";
import { site } from "@/data/site";
import Image from "next/image";
import heroImage from "../../public/hero.png";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-layout">
        <div className="hero-top">
          <p className="hero-kicker">
            Studio digital · Surabaya
          </p>
          <h1 id="hero-title">
            Bangun bisnis dengan
            <br />
            {" "}
            <em>
              website profesional
            </em>
            <span className="period">
              .
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              Company profile, toko online, dan landing page untuk bisnis yang
              ingin tampil lebih meyakinkan.
            </p>
            <div className="hero-actions">
              <a className="contact-pill" href="#contact">
                Konsultasi Gratis{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="text-link" href="#work">
                Lihat Portofolio{" "}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <Image
            className="hero-image"
            src={heroImage}
            alt="Ilustrasi website, toko online, dan dashboard responsif"
            sizes="(max-width: 950px) 100vw, 45vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="shell services-layout">
        <div className="services-intro">
          <span className="eyebrow">
            Layanan Kami
          </span>
          <h2>
            Teknologi yang pas
            <br /> untuk bisnis Anda.
          </h2>
          <p>
            Strategi, desain, dan pengembangan dalam satu tim. Kami mengubah
            kebutuhan bisnis menjadi produk digital yang berguna, tangguh, dan
            siap berkembang.
          </p>
          <a className="text-link" href="#process">
            Cara Kami Bekerja{" "}
            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
        <div className="services-list">
          {site.services.map((service, index) => (
            <details
              name="services"
              key={service.name}
              open={index === 0 ? true : undefined}
            >
              <summary>
                <span className="service-number">
                  0{index + 1}
                </span>
                <span>
                  {service.name}
                </span>
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>
                {service.description}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="shell">
        <div className="work-heading">
          <span className="eyebrow">
            Contoh Konsep / Bukan Proyek Klien
          </span>
          <h2>
            Ide bertemu
            <br />
            solusi digital
            <span className="period">
              .
            </span>
          </h2>
          <p>
            {site.projects.length} konsep ilustrasi untuk menunjukkan jenis produk yang bisa kami
            bangun. Bukan hasil pekerjaan atau testimoni klien.
          </p>
        </div>
        <ProjectGrid />
        <Link className="text-link work-all-link" href="/portofolio">
          Lihat semua portofolio
          <span aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
