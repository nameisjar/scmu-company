// Markup, validation, and WhatsApp URL checks; does not send any messages.
// Run: node scripts/test-quotation-form.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
let pathname = "/";
let states = [];
let hookIndex = 0;
const opened = [];
const focused = [];
global.window = {
  open: (...args) => opened.push(args),
  requestAnimationFrame: (callback) => callback(),
};
const reactForTest = {
  ...React,
  useState: (initial) => {
    const index = hookIndex++;
    if (!(index in states)) states[index] = initial;
    return [states[index], (value) => { states[index] = typeof value === "function" ? value(states[index]) : value; }];
  },
  useRef: () => ({ current: { querySelector: (selector) => ({ focus: () => focused.push(selector) }) } }),
};
const cache = new Map();
function load(relative) {
  if (cache.has(relative)) return cache.get(relative);
  const filename = path.join(root, relative);
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  function localRequire(name) {
    if (name === "react") return reactForTest;
    if (name === "next/navigation") return { usePathname: () => pathname };
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
const { QuotationForm } = load("src/components/forms/QuotationForm.tsx");
const { createWhatsAppMessage, createWhatsAppUrl } = load("src/lib/whatsapp.ts");
function render() { hookIndex = 0; return QuotationForm(); }
function findFields(form) {
  const grid = React.Children.toArray(form.props.children).find((child) => child.props.className === "form-grid");
  return React.Children.toArray(grid.props.children).map((field) => field.props.children);
}
for (const locale of ["id", "en"]) {
  pathname = locale === "id" ? "/" : "/en";
  states = [];
  opened.length = 0;
  focused.length = 0;
  let form = render();
  const markup = renderToStaticMarkup(form);
  assert.equal((markup.match(/<input\b/g) || []).length, 1);
  assert.equal((markup.match(/<textarea\b/g) || []).length, 1);
  assert.ok(markup.includes('rows="4"'));
  assert.ok(!markup.includes('name="email"'));
  assert.ok(!markup.includes("<h3"));
  assert.ok(markup.includes(locale === "id" ? "Lanjut ke WhatsApp" : "Continue to WhatsApp"));
  form.props.onSubmit({ preventDefault() {} });
  assert.equal(opened.length, 0, "Empty form must not open WhatsApp");
  assert.equal(focused.at(-1), '[name="name"]');
  form = render();
  assert.ok(renderToStaticMarkup(form).includes('aria-invalid="true"'));
  findFields(form)[0].props.onChange({ target: { value: "Niko & Tim" } });
  form = render();
  form.props.onSubmit({ preventDefault() {} });
  assert.equal(opened.length, 0, "Shipment details are required");
  assert.equal(focused.at(-1), '[name="message"]');
  findFields(form)[1].props.onChange({ target: { value: "Material, 2 ton\nMerauke → Mappi" } });
  form = render();
  form.props.onSubmit({ preventDefault() {} });
  assert.equal(opened.length, 1);
  const [url, target, features] = opened[0];
  const parsed = new URL(url);
  assert.equal(parsed.hostname, "wa.me");
  const message = parsed.searchParams.get("text");
  assert.ok(message.includes("Niko & Tim") && message.includes("Merauke → Mappi"));
  assert.ok(!message.includes("Email:"));
  assert.ok(message.includes(locale === "id" ? "Detail pengiriman:" : "Shipment details:"));
  assert.equal(target, "_blank");
  assert.equal(features, "noopener,noreferrer");
}
const sample = { name: "A & B", message: "Barang #1\nAsal → Tujuan" };
for (const locale of ["id", "en"]) {
  const url = new URL(createWhatsAppUrl("6281248272727", sample, locale));
  assert.equal(url.searchParams.get("text"), createWhatsAppMessage(sample, locale));
}
console.log("PASS: Two-field ID/EN form, required-field errors/focus, and encoded WhatsApp messages without email.");
