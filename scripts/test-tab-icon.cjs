// Validate the code-native favicon composition using Next.js's installed sharp.
// Run: node scripts/test-tab-icon.cjs
const fs = require("node:fs");
const assert = require("node:assert/strict");
const sharp = require("sharp");

async function main() {
  const svg = fs.readFileSync("src/app/icon.svg");
  const encoded = svg.toString().match(/base64,([^"]+)/)[1];
  assert.deepEqual(Buffer.from(encoded, "base64"), fs.readFileSync("public/logo/scmu-tab-source.png"), "Uses the exact original logo");
  const { data, info } = await sharp(svg).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  assert.equal(info.width, 64);
  assert.equal(info.height, 64);
  for (const [x, y] of [[0, 0], [63, 0], [0, 63], [63, 63]]) {
    const offset = (y * 64 + x) * 4;
    assert.deepEqual([...data.subarray(offset, offset + 4)], [0, 0, 0, 255], "Corners are opaque black, not rounded");
  }
  let coloredPixels = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] + data[i + 1] + data[i + 2] > 30) coloredPixels++;
    assert.equal(data[i + 3], 255, "Entire favicon has an opaque backdrop");
  }
  assert.ok(coloredPixels > 400, "Logo is visible inside the square");
  if (process.argv.includes("--preview")) {
    const png = await sharp(svg).png().toBuffer();
    console.log(JSON.stringify({ passed: true, width: info.width, height: info.height, coloredPixels, preview: png.toString("base64") }));
  } else {
    console.log("Favicon checks passed: unchanged logo, 64x64 square, opaque black backdrop.");
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
