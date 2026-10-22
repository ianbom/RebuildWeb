import assert from "node:assert/strict";

const origin = process.env.SITE_URL ?? "http://localhost:3000";
const expected = [
  ["landing-page", "Landing Page", [1500000, 2800000, 4500000]],
  ["company-profile", "Company Profile", [3000000, 5500000, 9500000]],
  ["ecommerce", "E-Commerce", [6500000, 12500000, 22000000]],
  ["katalog-produk", "Katalog Produk", [3500000]],
  ["booking", "Booking & Reservasi", [5000000]],
  ["custom-web-app", "Custom Web Application", [15000000]],
  ["maintenance", "Website Maintenance", [350000]],
];
async function page(path) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} should exist`);
  return (await response.text()).replaceAll("<!-- -->", "");
}
const html = await page("/layanan");
assert.match(html, /Layanan &amp; Harga Jasa Pembuatan Website/);
assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
assert.match(html, /Pilih paket yang sesuai/);
assert.match(html, /dengan bisnis Anda/);
assert.match(html, /rel="canonical" href="https:\/\/temuweb.id\/layanan"/);
assert.equal([...html.matchAll(/data-pricing-tab="/g)].length, 7);
for (const [slug, name, prices] of expected) {
  const selected = await page(`/layanan?kategori=${slug}`);
  assert.equal([...selected.matchAll(/data-pricing-tab="/g)].length, 7);
  assert.match(selected, new RegExp(`data-pricing-tab="${slug}"[^>]*aria-pressed="true"`));
  assert.ok(selected.includes('class="svc-selected-service"'));
  assert.ok(selected.includes(`data-pricing-category="${slug}"`));
  const cards = [...selected.matchAll(/<article[^>]*data-package="[^"]+"[\s\S]*?<\/article>/g)].map(([card]) => card);
  assert.equal(cards.length, prices.length, `${slug} package count`);
  for (const [index, amount] of prices.entries()) {
    const price = `Rp${new Intl.NumberFormat("id-ID").format(amount)}`;
    assert.ok(cards[index].includes(price), `${slug}: ${price} missing`);
    const href = cards[index].match(/href="(https:\/\/wa\.me\/[^"\s]+)"/)?.[1];
    assert.ok(href, `${slug}: WhatsApp link missing`);
    const url = new URL(href.replaceAll("&amp;", "&"));
    assert.equal(url.pathname, "/6281200000000");
    const text = url.searchParams.get("text");
    assert.ok(text.includes(name) && text.includes(price), `${slug}: incorrect consultation message`);
    if (slug === "maintenance") assert.ok(text.includes("/bulan"));
    if (prices.length === 3) {
      assert.ok(text.includes(["Starter", "Professional", "Premium"][index]));
      assert.match(selected, /Bandingkan Semua Fitur/);
      const features = [...cards[index].matchAll(/data-feature="([^"]+)"/g)].map((match) => match[1]);
      for (const feature of features) assert.ok(selected.includes(`data-comparison-feature="${feature}"`));
    }
  }
  if (prices.length === 3) assert.equal([...selected.matchAll(/class="svc-popular"/g)].length, 1);
  else assert.doesNotMatch(selected, /data-comparison-feature=/);
  assert.match(selected, /Nomor WhatsApp ini masih demo/);
}
for (const query of ["", "?kategori=tidak-ada", "?kategori=", "?kategori=%3Cscript%3E", "?kategori=semua"]) {
  const fallback = await page(`/layanan${query}`);
  assert.equal([...fallback.matchAll(/data-pricing-tab="/g)].length, 7);
  assert.ok(fallback.includes('data-pricing-category="landing-page"'));
}
const sections = ["paket-layanan", "perbandingan-layanan", "contact"];
let previous = -1;
for (const id of sections) {
  const position = html.indexOf(`id="${id}"`);
  assert.ok(position > previous, `${id}: incorrect section order`);
  previous = position;
}
for (const text of ["Domain dan hosting tidak termasuk", "paket ringkas di beranda", "Pilih layanan Anda", "Dipilih", "Lihat Portofolio"]) {
  assert.ok(html.includes(text), `${text} missing`);
}
assert.match(await page("/layanan?kategori=ecommerce"), /Biaya penyedia pembayaran, penyedia pengiriman, dan layanan eksternal tidak termasuk/);
assert.match(await page("/layanan?kategori=booking"), /ketersediaan real-time|ketersediaan langsung/);
assert.match(await page("/layanan?kategori=maintenance"), /desain ulang|pengembangan fitur baru/);
const home = await page("/");
assert.match(home, /href="\/layanan"/);
for (const price of ["Rp1.000.000", "Rp2.000.000", "Rp4.000.000"]) assert.ok(home.includes(price), "Legacy pricing changed");
assert.ok((await page("/sitemap.xml")).includes("<loc>https://temuweb.id/layanan</loc>"));
console.log("Services: routes, seven categories, 13 packages, prices, comparisons, consultation links, and legacy pricing passed.");
