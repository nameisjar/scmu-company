// Run after npm run build: node scripts/test-homepage-description.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const expected = "PT. SCMU Merauke melayani jasa pengurusan transportasi, jasa pengiriman barang, dan jasa ekspedisi darat, laut, udara, sungai, serta multimoda.";
const html = fs.readFileSync(path.join(root, ".next/server/app/index.html"), "utf8");
const expectedTitle = "Jasa Pengurusan Transportasi & Ekspedisi Merauke | PT. SCMU";
const encodedTitle = expectedTitle.replaceAll("&", "&amp;");
const titles = html.match(/<title>[^<]*<\/title>/g) || [];
assert.deepEqual(titles, [`<title>${encodedTitle}</title>`], "Exact homepage title without duplicate brand suffix");
assert.ok(expectedTitle.length <= 65);
assert.ok(html.includes(`<meta property="og:title" content="${encodedTitle}"`));
const descriptions = html.match(/<meta name="description" content="[^"]*"\s*\/?\s*>/g) || [];
assert.equal(descriptions.length, 1, "Exactly one homepage meta description");
assert.ok(descriptions[0].includes(`content="${expected}"`));
assert.ok(expected.length <= 150);
for (const keyword of ["jasa pengurusan transportasi", "jasa pengiriman barang", "jasa ekspedisi"]) {
  assert.equal(expected.split(keyword).length - 1, 1, "Exact keyword appears once: " + keyword);
}
assert.ok(html.includes(`<meta property="og:description" content="${expected}"`));
for (const route of ["en", "layanan", "kontak", "tentang-kami", "faq", "dokumentasi"]) {
  const otherHtml = fs.readFileSync(path.join(root, ".next/server/app", route + ".html"), "utf8");
  assert.ok(!otherHtml.includes(`content="${expected}"`), "Other page metadata unchanged: " + route);
  assert.ok(!otherHtml.includes(`<title>${encodedTitle}</title>`), "Homepage title stays page-specific: " + route);
}
console.log(`PASS: Homepage title (${expectedTitle.length} characters), description (${expected.length} characters), Open Graph, and page-specific scope.`);
