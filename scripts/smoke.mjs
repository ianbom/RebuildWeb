import assert from "node:assert/strict";

const origin = process.env.SITE_URL ?? "http://localhost:3000";
const page = await fetch(origin);
assert.equal(page.status, 200);
const html = (await page.text()).replaceAll("<!-- -->", "");
assert.match(html, /TemuWeb/);
const homepageServices = html.match(/<section id="services"[\s\S]*?<\/section>/)?.[0].replaceAll("&amp;", "&");
assert.ok(homepageServices, "Homepage services section is missing");
assert.equal([...homepageServices.matchAll(/<details /g)].length, 7);
let previousServiceIndex = -1;
for (const name of ["Landing Page", "Company Profile", "E-Commerce", "Katalog Produk", "Booking & Reservasi", "Custom Web Application", "Website Maintenance"]) {
  const serviceIndex = homepageServices.indexOf(`<span>${name}</span>`);
  assert.ok(serviceIndex > previousServiceIndex, `${name} is missing or out of order in homepage services`);
  previousServiceIndex = serviceIndex;
}
assert.match(html, /hello@temuweb\.id/);
assert.doesNotMatch(html, /Nexora/i);
assert.match(html, /Bangun bisnis dengan/);
assert.match(html, /<em>website profesional<\/em>/);
assert.match(html, /class="hero-image"/);
assert.match(html, /alt="Ilustrasi website, toko online, dan dashboard responsif"/);
assert.doesNotMatch(html, /hero-art-grid|hero-disc|hero-sphere/);
const heroSource = html.match(/src="([^"\s]*hero[^"\s]*)"/)?.[1];
assert.ok(heroSource, "Hero image source is missing");
assert.equal((await fetch(new URL(heroSource.replaceAll("&amp;", "&"), origin))).status, 200);
assert.doesNotMatch(html, /hero-microcopy|hero-conversion/);
assert.match(html, /class="final-cta-whatsapp" href="https:\/\/wa\.me\/6281200000000\?text=/);
assert.match(html, /Nomor WhatsApp ini masih demo; pesan belum akan sampai/);
assert.doesNotMatch(html, /ProjectBriefForm|brief-form|Kirim ringkasan proyek/);
for (const anchor of ["services", "work", "process", "pricing", "contact"]) {
  assert.match(html, new RegExp(`id="${anchor}"`));
}
for (const text of ["Portofolio", "Konsultasi Gratis", "Pembuatan Website", "Tanya Jawab", "Rp1.000.000", "Rp2.000.000", "Rp4.000.000", "Konsultasi lewat WhatsApp"]) {
  assert.ok(html.includes(text), `${text} is missing`);
}
const pricingMarkup = html.match(/<section id="pricing"[\s\S]*?<\/section>/)?.[0];
assert.ok(pricingMarkup, "Pricing section is missing");
const pricingCards = [...pricingMarkup.matchAll(/<article class="pricing-item[^"]*"[\s\S]*?<\/article>/g)].map(([card]) => card);
assert.equal(pricingCards.length, 4, "Expected three website packages and one custom package");
for (const feature of ["Hingga 3 laman website", "Domain .com gratis selama 1 tahun", "Hosting 1 GB dan SSL gratis selama 1 tahun", "1 banner website"]) {
  assert.ok(pricingCards[0].includes(feature), `${feature} is missing from the entry package`);
}
for (const feature of ["Hingga 7 laman website", "Dashboard untuk mengelola konten website", "3 email dengan domain bisnis selama 1 tahun", "3 artikel SEO"]) {
  assert.ok(pricingCards[1].includes(feature), `${feature} is missing from the business package`);
}
for (const feature of ["Bantuan upload hingga 10 produk pertama", "Dashboard untuk kelola produk dan pesanan", "Maintenance teknis gratis selama 1 tahun"]) {
  assert.ok(pricingCards[2].includes(feature), `${feature} is missing from the online store package`);
}
assert.doesNotMatch(pricingCards[0], /Dashboard untuk mengelola konten website|Bantuan upload/);
assert.match(html, /Biaya perpanjangan setelah tahun pertama tidak termasuk harga awal/);
assert.doesNotMatch(html, /What is|BUILD|RETHINK|View appointments|Main navigation/);
for (const name of ["Santara Commerce", "Arunika Finance", "LogistikKu"]) {
  assert.ok(html.includes(name), `${name} is missing`);
}
const homepagePaths = [...new Set([...html.matchAll(/href="(\/portofolio\/[^"#]+)"/g)].map((match) => match[1]))];
assert.equal(homepagePaths.length, 3, "Homepage must link to three concept detail pages");
const sitemap = await (await fetch(new URL("/sitemap.xml", origin))).text();
const portfolioResponse = await fetch(new URL("/portofolio", origin));
assert.equal(portfolioResponse.status, 200);
const portfolio = (await portfolioResponse.text()).replaceAll("<!-- -->", "");
assert.match(portfolio, /<h1[\s\S]*?Portofolio/);
assert.match(portfolio, /Contoh konsep \/ Bukan proyek klien/);
assert.equal([...portfolio.matchAll(/<article class="project-card/g)].length, 6);
const listingPaths = [...new Set([...portfolio.matchAll(/href="(\/portofolio\/[^"#]+)"/g)].map((match) => match[1]))];
assert.equal(listingPaths.length, 6);
assert.deepEqual(homepagePaths, listingPaths.slice(0, 3));
const projectPaths = listingPaths;
for (const name of ["Santara Commerce", "Arunika Finance", "LogistikKu", "EduSpace", "MedikaPlus", "AgriLink"]) {
  assert.ok(portfolio.includes(name), `${name} is missing from the portfolio listing`);
}
assert.match(portfolio, /rel="canonical" href="https:\/\/temuweb.id\/portofolio"/);
assert.match(portfolio, /Nomor WhatsApp ini masih demo/);
assert.ok(sitemap.includes("<loc>https://temuweb.id/portofolio</loc>"));
assert.match(html, /Lihat Semua Portofolio/);
assert.equal([...html.matchAll(/<article class="project-card/g)].length, 3);
assert.match(html, /href="\/layanan"[^>]*>Lihat Semua Layanan/);
for (const [index, path] of projectPaths.entries()) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} should exist`);
  const detail = (await response.text()).replaceAll("<!-- -->", "");
  for (const section of ["Contoh konsep", "Bukan proyek klien", "Gambaran proyek", "Masalah yang ingin dijawab", "Pendekatan solusi", "Fitur utama", "Konsep berikutnya"]) {
    assert.ok(detail.includes(section), `${section} missing on ${path}`);
  }
  assert.ok(detail.includes(`href="${projectPaths[(index + 1) % projectPaths.length]}"`), "Next project link is missing");
  assert.match(detail, /href="\/portofolio"/);
  assert.match(detail, /Nomor WhatsApp ini masih demo/);
  assert.ok(detail.includes(`rel="canonical" href="https://temuweb.id${path}"`));
  assert.ok(sitemap.includes(`https://temuweb.id${path}`));
}
assert.equal((await fetch(new URL("/portofolio/tidak-ada", origin))).status, 404);
for (const path of ["/privacy", "/terms", "/robots.txt", "/sitemap.xml", "/opengraph-image"]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  if (path === "/privacy") assert.match(await response.text(), /Kebijakan Privasi/);
  if (path === "/terms") assert.match(await response.text(), /Ketentuan/);
}
const missingPage = await fetch(new URL("/halaman-tidak-ada", origin));
assert.equal(missingPage.status, 404);
assert.match(await missingPage.text(), /Halaman tidak ditemukan/);
const articlesResponse = await fetch(new URL("/artikel", origin));
assert.equal(articlesResponse.status, 200, "Article listing should exist");
const articlesHtml = (await articlesResponse.text()).replaceAll("<!-- -->", "");
assert.match(articlesHtml, /<h1[\s\S]*?Artikel/);
assert.equal([...articlesHtml.matchAll(/<article class="editorial-card"/g)].length, 3);
assert.match(html, /href="\/artikel"/);
assert.match(articlesHtml, /rel="canonical" href="https:\/\/temuweb.id\/artikel"/);
assert.ok(sitemap.includes("<loc>https://temuweb.id/artikel</loc>"));
const articlePaths = [...new Set([...articlesHtml.matchAll(/href="(\/artikel\/[^"#]+)"/g)].map((match) => match[1]))];
assert.equal(articlePaths.length, 3);
for (const path of articlePaths) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} should exist`);
  const detail = (await response.text()).replaceAll("<!-- -->", "");
  assert.equal([...detail.matchAll(/<h1\b/g)].length, 1);
  assert.match(detail, /Tim TemuWeb/);
  assert.match(detail, /\d+ menit baca/);
  assert.match(detail, /<time dateTime="2026-09-\d{2}"/);
  assert.match(detail, /class="editorial-body"/);
  assert.match(detail, /Artikel lainnya/);
  assert.equal([...detail.matchAll(/<article class="editorial-card"/g)].length, 2);
  for (const other of articlePaths.filter((item) => item !== path)) {
    assert.ok(detail.includes(`href="${other}"`));
  }
  assert.match(detail, /href="\/artikel"/);
  assert.match(detail, /Nomor WhatsApp ini masih demo/);
  assert.ok(detail.includes(`rel="canonical" href="https://temuweb.id${path}"`));
  assert.ok(sitemap.includes(`<loc>https://temuweb.id${path}</loc>`));
}
assert.equal((await fetch(new URL("/artikel/tidak-ada", origin))).status, 404);
console.log("Homepage, portfolios, articles, legal pages, and metadata routes respond correctly.");
await import("./contact-smoke.mjs");
await import("./services-smoke.mjs");
