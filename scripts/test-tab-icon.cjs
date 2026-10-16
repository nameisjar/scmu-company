// Validate the code-native favicon composition using Next.js's installed sharp.
// Run: node scripts/test-tab-icon.cjs
const fs = require("node:fs");
const assert = require("node:assert/strict");
const sharp = require("sharp");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

async function main() {
  const svg = fs.readFileSync(path.join(root, "public/icon.svg"));
  const encoded = svg.toString().match(/base64,([^"]+)/)[1];
  assert.deepEqual(Buffer.from(encoded, "base64"), fs.readFileSync(path.join(root, "public/logo/scmu-tab-source.png")), "Uses the exact original logo");
  const pngPath = path.join(root, "public/favicon-96x96.png");
  const metadata = await sharp(pngPath).metadata();
  assert.equal(metadata.format, "png");
  const { data, info } = await sharp(pngPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  assert.equal(info.width, 96);
  assert.equal(info.height, 96);
  const expected = await sharp(svg, { density: 108 }).resize(96, 96).flatten({ background: "#000000" }).ensureAlpha().raw().toBuffer();
  assert.deepEqual(data, expected, "PNG preserves the existing icon composition exactly");
  for (const [x, y] of [[0, 0], [95, 0], [0, 95], [95, 95]]) {
    const offset = (y * 96 + x) * 4;
    assert.deepEqual([...data.subarray(offset, offset + 4)], [0, 0, 0, 255], "Corners are opaque black, not rounded");
  }
  let coloredPixels = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] + data[i + 1] + data[i + 2] > 30) coloredPixels++;
    assert.equal(data[i + 3], 255, "Entire favicon has an opaque backdrop");
  }
  assert.ok(coloredPixels > 400, "Logo is visible inside the square");
  assert.ok(!fs.existsSync(path.join(root, "src/app/icon.svg")), "Automatic SVG metadata must not override the PNG declaration");
  const layout = fs.readFileSync(path.join(root, "src/app/layout.tsx"), "utf8");
  assert.ok(layout.includes('url: "/favicon-96x96.png", type: "image/png", sizes: "96x96"'));
  if (process.argv.includes("--build")) {
    for (const route of ["index", "en", "kontak", "en/kontak", "layanan", "en/layanan"]) {
      const html = fs.readFileSync(path.join(root, ".next/server/app", route + ".html"), "utf8");
      const icons = html.match(/<link\b[^>]*rel="icon"[^>]*>/g) || [];
      assert.equal(icons.length, 1, route + " has one unambiguous favicon");
      assert.ok(icons[0].includes('href="/favicon-96x96.png"'));
      assert.ok(icons[0].includes('type="image/png"') && icons[0].includes('sizes="96x96"'));
    }
  }
  if (process.argv.includes("--preview")) {
    const png = fs.readFileSync(pngPath);
    console.log(JSON.stringify({ passed: true, width: info.width, height: info.height, coloredPixels, preview: png.toString("base64") }));
  } else {
    console.log("Favicon checks passed: unchanged logo, 96x96 PNG, opaque black square, stable metadata URL" + (process.argv.includes("--build") ? ", ID/EN built pages" : "") + ".");
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
