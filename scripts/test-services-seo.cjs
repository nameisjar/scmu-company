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
  if (route === "layanan") {
    assert.ok(html.includes("<title>Jasa Angkutan Barang Merauke | PT. SCMU</title>"));
    assert.equal(heading[0][1], "Jasa Angkutan Barang dari Merauke.");
    assert.ok(html.includes("PT. SCMU melayani jasa angkutan barang"));
  } else {
    assert.equal(heading[0][1], "Cargo transport services from Merauke.");
  }
}
const sitemap = fs.readFileSync(path.join(root, ".next/server/app/sitemap.xml.body"), "utf8");
assert.ok(sitemap.includes("/layanan</loc>"), "Existing public page remains in the sitemap");
console.log("PASS: Services page keyword in title, H1, description; five services, route coverage, ID/EN, and sitemap retained.");
