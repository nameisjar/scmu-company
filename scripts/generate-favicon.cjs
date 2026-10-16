// Deterministic export of the existing SCMU icon; no new image or dependency.
// Run: node scripts/generate-favicon.cjs
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const root = path.resolve(__dirname, "..");
  const source = fs.readFileSync(path.join(root, "public/icon.svg"));
  await sharp(source, { density: 108 })
    .resize(96, 96)
    .flatten({ background: "#000000" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "public/favicon-96x96.png"));
  console.log("Generated public/favicon-96x96.png: 96x96, original logo, square black backdrop.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
