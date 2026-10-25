// Run after npm run build: node scripts/test-services-seo.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
for (const route of ["layanan", "en/layanan"]) {
  const html = fs.readFileSync(path.join(root, ".next/server/app", route + ".html"), "utf8");
  const heading = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/g)];
  assert.equal(heading.length, 1);
  assert.ok(!/noindex/.test(html));
  assert.equal((html.match(/class="logistics-info-card"/g) || []).length, 5, "Five services retained");
  assert.ok(html.includes('id="cakupan-rute"'), "Route coverage retained");
  assert.ok(html.includes(`${route.startsWith("en/") ? "/en" : ""}/layanan/jakarta-merauke`), "Route landing page is linked internally");
  if (route === "layanan") {
    assert.ok(html.includes("<title>Jasa Angkutan Barang Merauke | PT. SCMU</title>"));
    assert.equal(heading[0][1], "Jasa Angkutan Barang dari Merauke.");
    assert.ok(html.includes("PT. SCMU melayani jasa angkutan barang"));
    const seaCard = html.match(/<article\b[^>]*id="pengiriman-laut"[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(seaCard && seaCard.includes("Pengiriman barang antarpulau melalui jalur laut"), "Inter-island keyword appears in visible sea-service copy");
  } else {
    assert.equal(heading[0][1], "Cargo transport services from Merauke.");
  }
}

for (const route of ["layanan/jakarta-merauke", "en/layanan/jakarta-merauke"]) {
  const html = fs.readFileSync(path.join(root, ".next/server/app", route + ".html"), "utf8");
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route} has one H1`);
  assert.ok(html.includes('rel="canonical"'), `${route} has a canonical URL`);
  assert.ok(html.includes('hrefLang="id"') && html.includes('hrefLang="en"'), `${route} has language alternates`);
  assert.ok(html.includes('application/ld+json'), `${route} includes structured data`);
  assert.ok(html.includes("activity-05.jpg"), `${route} uses an existing SCMU documentation photo`);
  assert.ok(html.includes(route.startsWith("en/") ? "Jakarta–Merauke Freight Shipping" : "Pengiriman Barang Jakarta–Merauke"));
}

const sitemap = fs.readFileSync(path.join(root, ".next/server/app/sitemap.xml.body"), "utf8");
assert.ok(sitemap.includes("/layanan</loc>"), "Existing public page remains in the sitemap");
assert.ok(sitemap.includes("/layanan/jakarta-merauke</loc>"), "Indonesian route page is in the sitemap");
assert.ok(sitemap.includes("/en/layanan/jakarta-merauke</loc>"), "English route page is in the sitemap");
console.log("PASS: Services, route coverage, localized Jakarta–Merauke pages, metadata, documentation photo, and sitemap.");
