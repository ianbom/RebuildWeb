import assert from "node:assert/strict";

const origin = process.env.SITE_URL ?? "http://localhost:3000";
const page = await fetch(origin);
assert.equal(page.status, 200);
const html = await page.text();
for (const anchor of ["services", "work", "company", "process", "insights", "contact"]) {
  assert.match(html, new RegExp(`id="${anchor}"`));
}
for (const name of ["Santara Commerce", "Arunika Finance", "LogistikKu", "EduSpace", "MedikaPlus", "AgriLink"]) {
  assert.ok(html.includes(name), `${name} is missing`);
}
for (const path of ["/privacy", "/terms", "/robots.txt", "/sitemap.xml", "/opengraph-image"]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
}
console.log("Homepage, six projects, and metadata routes respond correctly.");
