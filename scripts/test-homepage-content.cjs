// Check prerendered main content, excluding metadata, footer, scripts and closed FAQ answers.
// Run after npm run build: node scripts/test-homepage-content.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const keywords = [
  "jasa pengurusan transportasi",
  "jasa pengiriman barang",
  "jasa ekspedisi",
  "jasa logistik",
  "jasa angkutan barang",
  "pengiriman barang antarpulau",
  "jasa pengiriman multimoda",
  "jasa pengiriman laut",
  "jasa pengiriman darat",
  "jasa pengiriman udara",
  "jasa pengiriman sungai",
  "jasa distribusi barang",
  "jasa angkutan kontainer",
  "jasa pengiriman barang proyek",
  "perusahaan freight forwarding",
];
function readMain(route) {
  const html = fs.readFileSync(path.join(root, ".next/server/app", route + ".html"), "utf8");
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main, "Main content exists: " + route);
  return main;
}
const main = readMain("index");
const visibleMarkup = main
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
  .replace(/<div\b[^>]*class="faq-answer"[^>]*hidden=""[^>]*>[\s\S]*?<\/div>/gi, " ");
const text = visibleMarkup.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
const words = text.split(/\s+/).length;
assert.ok(words >= 250, "At least 250 visible words, not metadata or closed answers");
const counts = Object.fromEntries(keywords.map((keyword) => {
  const count = text.split(keyword).length - 1;
  // A shorter keyword also appears inside longer phrases (e.g. "... barang proyek").
  // Count those separately rather than treating them as extra standalone repetitions.
  const nestedCount = keywords.filter((other) => other !== keyword && other.includes(keyword))
    .reduce((total, other) => total + text.split(other).length - 1, 0);
  const standaloneCount = count - nestedCount;
  assert.ok(standaloneCount >= 2 && standaloneCount <= 3, `${keyword}: expected 2–3 standalone mentions, got ${standaloneCount}`);
  return [keyword, count];
}));
assert.equal((main.match(/<h1\b/g) || []).length, 1);
assert.ok(text.includes("pt. sarana cipta mandiri utama") && text.includes("merauke"));
assert.ok(main.includes("Dari Papua Selatan, Menghubungkan Indonesia."), "Hero slogan retained");
assert.equal((main.match(/class="home-service-card"/g) || []).length, 5, "All five service cards retained");
for (const keyword of keywords) {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert.ok(!new RegExp(`<(?:strong|b)\\b[^>]*>[^<]*${escaped}`, "i").test(main), "No bold keyword emphasis");
}
assert.ok(!text.includes("ke seluruh indonesia"), "No new universal coverage claim");
assert.ok(!main.includes("G98X+85P"), "Unconfirmed address not introduced");
const english = readMain("en");
assert.ok(english.includes("Shipping and Logistics Services"));
assert.ok(!keywords.some((keyword) => english.toLowerCase().includes(keyword)), "English copy remains translated");
assert.equal((english.match(/class="home-service-card"/g) || []).length, 5);
console.log(JSON.stringify({ passed: true, visibleMainWords: words, keywordCounts: counts }, null, 2));
