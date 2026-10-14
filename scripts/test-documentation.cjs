// Data, markup, and keyboard checks; not a browser playback/layout test.
// Run: node scripts/test-documentation.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
let activeIndex = null;
let effect;
const reactForTest = {
  ...React,
  useState: () => [activeIndex, (value) => { activeIndex = typeof value === "function" ? value(activeIndex) : value; }],
  useRef: (initial) => ({ current: initial }),
  useEffect: (callback) => { effect = callback; },
};
const cache = new Map();
function load(relative) {
  if (cache.has(relative)) return cache.get(relative);
  const filename = path.join(root, relative);
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  function localRequire(name) {
    if (name === "react") return reactForTest;
    if (name === "next/image") return { default: ({ fill, priority, ...props }) => {
      assert.ok(!props.src.endsWith(".mp4"), "Videos must not enter the image optimizer");
      return React.createElement("img", props);
    } };
    if (name.startsWith("@/")) {
      const base = "src/" + name.slice(2);
      return load(base + (fs.existsSync(path.join(root, base + ".ts")) ? ".ts" : ".tsx"));
    }
    return require(name);
  }
  vm.runInThisContext("(function(require,module,exports) {" + compiled + "\n})", { filename })(localRequire, module, module.exports);
  cache.set(relative, module.exports);
  return module.exports;
}
const { documentation, documentationEn } = load("src/data/documentation.ts");
const { DocumentationGallery } = load("src/components/documentation/DocumentationGallery.tsx");
assert.equal(documentation.length, 54);
assert.equal(documentationEn.length, documentation.length);
assert.equal(new Set(documentation.map((item) => item.src)).size, documentation.length);
for (const item of [...documentation, ...documentationEn]) {
  assert.ok(fs.existsSync(path.join(root, "public", item.src)), "Asset exists: " + item.src);
  assert.ok(item.label && item.alt);
  if (item.kind === "video") {
    assert.ok(item.poster && fs.existsSync(path.join(root, "public", item.poster)), "Video has a real thumbnail asset");
  }
  assert.notEqual(item.label, "PT. SCMU operational documentation", "Every item has an English caption");
}
const videoIndex = documentation.findIndex((item) => item.kind === "video");
for (const locale of ["id", "en"]) {
  activeIndex = null;
  const gallery = renderToStaticMarkup(DocumentationGallery({ locale }));
  assert.equal((gallery.match(/class="documentation-card"/g) || []).length, 54);
  assert.ok(gallery.includes(locale === "id" ? "Buka video:" : "Open video:"));
  assert.ok(gallery.includes('src="' + documentation[videoIndex].poster + '"'), "Video card displays its thumbnail");
  assert.ok(!gallery.includes("<video"), "Gallery does not load the video before opening");
  const preview = renderToStaticMarkup(DocumentationGallery({ locale, variant: "preview", limit: 5 }));
  assert.equal((preview.match(/class="documentation-card"/g) || []).length, 5);
  activeIndex = videoIndex;
  const viewer = renderToStaticMarkup(DocumentationGallery({ locale }));
  assert.ok(viewer.includes("<video") && viewer.includes('preload="metadata"'));
  assert.ok(viewer.includes("controls=") && viewer.includes("playsInline="));
  assert.ok(!/autoplay/i.test(viewer));
  assert.ok(viewer.includes('type="video/mp4"'));
  assert.ok(viewer.includes('poster="' + documentation[videoIndex].poster + '"'), "Video player shares the thumbnail");
  activeIndex = 0;
  const photo = renderToStaticMarkup(DocumentationGallery({ locale }));
  assert.ok(!photo.includes("<video"), "Switching to a photo unmounts the video");
}
let keyDown;
global.HTMLVideoElement = class {};
global.document = {
  body: { style: { overflow: "auto" } },
  addEventListener: (_name, callback) => { keyDown = callback; },
  removeEventListener: () => { keyDown = undefined; },
};
global.window = { requestAnimationFrame: (callback) => callback() };
activeIndex = videoIndex;
DocumentationGallery({});
const cleanup = effect();
assert.equal(document.body.style.overflow, "hidden");
let prevented = false;
keyDown({ key: "ArrowRight", target: new HTMLVideoElement(), preventDefault: () => { prevented = true; } });
assert.equal(activeIndex, videoIndex, "Video arrow keys remain available for seeking");
assert.equal(prevented, false);
keyDown({ key: "ArrowRight", target: {}, preventDefault: () => {} });
assert.equal(activeIndex, 0, "Next wraps from the last item to the first");
keyDown({ key: "Escape", target: {}, preventDefault: () => {} });
assert.equal(activeIndex, null);
cleanup();
assert.equal(document.body.style.overflow, "auto");
assert.equal(keyDown, undefined);
console.log("PASS: 54 documentation items, ID/EN captions, asset paths, preview, video/photo markup, and viewer keyboard cleanup.");
