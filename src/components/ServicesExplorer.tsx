"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  services, resolveServiceCategory, formatServicePrice, serviceFeatureText,
  servicePackageWhatsapp, type Service, type ServiceCategory, type ServicePackage,
} from "@/data/services";
import { site } from "@/data/site";

const categoryVisuals: Record<ServiceCategory, { icon: string; summary: string }> = {
  "landing-page": { icon: "M3 4h18v16H3z M3 9h18 M7 6.5h.01 M10 6.5h.01 M7 13h10 M7 16h6", summary: "Promosi & kampanye" },
  "company-profile": { icon: "M5 21V3h14v18 M3 21h18 M9 7h2 M13 7h2 M9 11h2 M13 11h2 M10 21v-6h4v6", summary: "Identitas perusahaan" },
  ecommerce: { icon: "M3 3h2l3 12h11l2-8H6 M10 20h.01 M18 20h.01 M8 15l-1 3h13", summary: "Penjualan online" },
  "katalog-produk": { icon: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z", summary: "Etalase produk" },
  booking: { icon: "M4 5h16v16H4z M8 3v4 M16 3v4 M4 10h16 M8 15l3 3 5-5", summary: "Pemesanan layanan" },
  "custom-web-app": { icon: "M8 6l-6 6 6 6 M16 6l6 6-6 6 M14 4l-4 16", summary: "Sistem sesuai bisnis" },
  maintenance: { icon: "M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z M8 12l3 3 5-6", summary: "Perawatan website" },
};

function PricingCard({ service, selectedPackage }: { service: Service; selectedPackage: ServicePackage }) {
  const starting = service.packages.length === 1;
  return (
    <article className={`svc-price-card${selectedPackage.recommended ? " svc-price-recommended" : ""}${starting ? " svc-price-panel" : ""}`} data-package={selectedPackage.name}>
      {selectedPackage.recommended && <span className="svc-popular">PALING POPULER</span>}
      <div className="svc-price-intro">
        <span className="svc-package-category">{service.name}</span>
        <h3>{starting ? "Mulai dari kebutuhan Anda" : selectedPackage.name}</h3>
        <p>{selectedPackage.audience}</p>
        {starting && <span className="svc-starting-label">Mulai dari</span>}
        <strong className="svc-package-price">{formatServicePrice(selectedPackage.price)}</strong>
        <span className="svc-price-period">{selectedPackage.price.period === "month" ? "Layanan bulanan" : "Biaya pengembangan sekali bayar"}</span>
      </div>
      <div className="svc-package-inclusions">
        {starting && <h4>Contoh ruang lingkup awal</h4>}
        <ul>{selectedPackage.features.map((feature) => <li key={feature.id} data-feature={feature.id}><span aria-hidden="true">&#10003;</span>{serviceFeatureText(feature)}</li>)}</ul>
        {selectedPackage.note && <p className="svc-package-note">{selectedPackage.note}</p>}
      </div>
      <a className={`svc-button ${selectedPackage.recommended || starting ? "svc-button-primary" : "svc-button-outline"}`} href={servicePackageWhatsapp(service, selectedPackage)} target="_blank" rel="noopener noreferrer">
        {service.id === "custom-web-app" ? "Diskusikan Proyek Anda" : starting ? "Konsultasi Layanan" : "Pilih Paket"}<span aria-hidden="true">&#8599;</span>
        <span className="svc-sr-only">{service.name}, {selectedPackage.name}{site.whatsappIsDemo ? ", nomor WhatsApp demo" : ""}</span>
      </a>
    </article>
  );
}

function PricingComparison({ service }: { service: Service }) {
  if (service.packages.length !== 3) return null;
  const rows = [...new Map(service.packages.flatMap((selectedPackage) => selectedPackage.features.map((feature) => [feature.id, feature] as const))).values()];
  return (
    <section id="perbandingan-layanan" className="svc-comparison shell" aria-label="Perbandingan fitur paket">
      <details key={service.id}>
        <summary>Bandingkan Semua Fitur<span aria-hidden="true">+</span></summary>
        <p className="svc-scroll-hint">Geser tabel ke samping pada layar kecil untuk melihat seluruh paket.</p>
        <div className="svc-table-scroll" tabIndex={0} role="region" aria-label={`Tabel perbandingan ${service.name}`}>
          <table>
            <caption className="svc-sr-only">Perbandingan fitur paket {service.name}. Tanda garis berarti fitur tidak tercantum dalam paket.</caption>
            <thead><tr><th scope="col">Fitur</th>{service.packages.map((selectedPackage) => <th scope="col" key={selectedPackage.name} className={selectedPackage.recommended ? "svc-table-recommended" : undefined}>{selectedPackage.name}{selectedPackage.recommended && <small>Rekomendasi</small>}</th>)}</tr></thead>
            <tbody>{rows.map((feature) => <tr key={feature.id} data-comparison-feature={feature.id}>
              <th scope="row">{feature.label}</th>
              {service.packages.map((selectedPackage) => {
                const item = selectedPackage.features.find((entry) => entry.id === feature.id);
                return <td key={selectedPackage.name} className={selectedPackage.recommended ? "svc-table-recommended" : undefined}>
                  {item?.value === true ? <><span className="svc-table-check" aria-hidden="true">&#10003;</span><span className="svc-sr-only">Termasuk</span></> : item ? item.value : <><span aria-hidden="true">&#8212;</span><span className="svc-sr-only">Tidak tercantum dalam paket</span></>}
                </td>;
              })}
            </tr>)}</tbody>
          </table>
        </div>
      </details>
    </section>
  );
}

export function ServicesExplorer({ initialCategory }: { initialCategory: ServiceCategory | "semua" }) {
  const [category, setCategory] = useState(initialCategory);
  useEffect(() => setCategory(initialCategory), [initialCategory]);
  useEffect(() => {
    const onPopState = () => {
      const values = new URL(window.location.href).searchParams.getAll("kategori");
      setCategory(resolveServiceCategory(values.length === 1 ? values[0] : undefined));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>('.svc-pricing-tabs button[aria-pressed="true"]');
    const group = button?.parentElement;
    if (!button || !group) return;
    const buttonBounds = button.getBoundingClientRect();
    const groupBounds = group.getBoundingClientRect();
    if (buttonBounds.left < groupBounds.left || buttonBounds.right > groupBounds.right) {
      group.scrollTo({ left: group.scrollLeft + buttonBounds.left - groupBounds.left, behavior: "auto" });
    }
  }, [category]);

  function chooseCategory(nextCategory: ServiceCategory) {
    const url = new URL(window.location.href);
    url.searchParams.set("kategori", nextCategory);
    if (url.href !== window.location.href) window.history.pushState(null, "", url);
    setCategory(nextCategory);
  }

  const selectedService = services.find((service) => service.id === category) ?? services[0];

  return (
    <>
      <section id="paket-layanan" className="svc-pricing" aria-labelledby="pricing-title" data-pricing-category={selectedService.id}>
        <div className="shell">
          <div className="svc-pricing-heading">
            <div>
            <span className="eyebrow">Harga transparan</span>
            <h1 id="pricing-title" tabIndex={-1}>Pilih paket yang sesuai<br /><em>dengan bisnis Anda</em><span className="period">.</span></h1>
            </div>
            <p>Setiap bisnis memiliki kebutuhan berbeda. Temukan paket yang tepat atau konsultasikan kebutuhan khusus Anda bersama tim TemuWeb.</p>
          </div>
          <div className="svc-category-label"><h2>Pilih layanan Anda</h2><span>{services.length} layanan digital</span></div>
          <div className="svc-pricing-tabs" role="group" aria-label="Kategori paket">
            {services.map((service) => <button key={service.id} type="button" data-pricing-tab={service.id} aria-label={service.tab} aria-describedby={`category-summary-${service.id}`} aria-pressed={selectedService.id === service.id} onClick={() => chooseCategory(service.id)}>
              <span className="svc-category-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={categoryVisuals[service.id].icon} /></svg></span>
              <span className="svc-category-name">{service.tab}</span>
              <span className="svc-category-summary" id={`category-summary-${service.id}`}>{categoryVisuals[service.id].summary}</span>
              <span className="svc-category-state" aria-hidden="true">{selectedService.id === service.id ? "Dipilih" : "Lihat paket"}</span>
            </button>)}
          </div>
          <div className="svc-selected-service">
            <div><span className="eyebrow">Layanan pilihan</span><h2>{selectedService.name}</h2><p>{selectedService.description}</p></div>
            <div className="svc-selected-price"><span>Mulai dari</span><strong>{formatServicePrice(selectedService.packages[0].price)}</strong><small>{selectedService.packages[0].price.period === "month" ? "Layanan bulanan" : "Sekali bayar per proyek"}</small></div>
          </div>
          <div className="svc-offer-note"><span aria-hidden="true">i</span><p>Paket pada halaman ini terpisah dari <Link href="/#pricing">paket ringkas di beranda</Link>. Bandingkan ruang lingkup sebelum memilih. Domain dan hosting tidak termasuk kecuali dicantumkan dalam proposal tertulis.</p></div>
          <div className={`svc-pricing-grid${selectedService.packages.length === 1 ? " svc-pricing-single" : ""}`}>
            {selectedService.packages.map((selectedPackage) => <PricingCard key={`${selectedService.id}-${selectedPackage.name}`} service={selectedService} selectedPackage={selectedPackage} />)}
          </div>
          {selectedService.disclaimer && <p className="svc-pricing-disclaimer">{selectedService.disclaimer}</p>}
          {site.whatsappIsDemo && <p className="svc-demo-note" role="note">Nomor WhatsApp ini masih demo; pesan belum akan sampai. Hubungi melalui <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
        </div>
      </section>
      <PricingComparison service={selectedService} />
    </>
  );
}
