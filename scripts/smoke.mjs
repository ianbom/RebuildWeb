import assert from "node:assert/strict";

const origin = process.env.SITE_URL ?? "http://localhost:3000";
const page = await fetch(origin);
assert.equal(page.status, 200);
const html = await page.text();
assert.match(html, /TemuWeb/);
assert.match(html, /hello@temuweb\.id/);
assert.doesNotMatch(html, /Nexora/i);
for (const anchor of ["services", "work", "company", "process", "insights", "contact"]) {
  assert.match(html, new RegExp(`id="${anchor}"`));
}
for (const text of ["Portofolio", "Mulai Proyek", "Pembuatan Website", "Tanya Jawab", "Jelajahi pasar"]) {
  assert.ok(html.includes(text), `${text} is missing`);
}
assert.doesNotMatch(html, /What is|BUILD|RETHINK|View appointments|Main navigation/);
for (const name of ["Santara Commerce", "Arunika Finance", "LogistikKu", "EduSpace", "MedikaPlus", "AgriLink"]) {
  assert.ok(html.includes(name), `${name} is missing`);
}
for (const path of ["/privacy", "/terms", "/robots.txt", "/sitemap.xml", "/opengraph-image"]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  if (path === "/privacy") assert.match(await response.text(), /Kebijakan Privasi/);
  if (path === "/terms") assert.match(await response.text(), /Ketentuan/);
}
const missingPage = await fetch(new URL("/halaman-tidak-ada", origin));
assert.equal(missingPage.status, 404);
assert.match(await missingPage.text(), /Halaman tidak ditemukan/);
console.log("Homepage copy, six projects, legal pages, and metadata routes respond correctly.");
