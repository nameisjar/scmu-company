// Lightweight markup and reveal lifecycle checks; not a browser layout test.
// Run: node scripts/test-service-cards.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
let effect;
let gridRef = { current: null };
const reactForTest = {
  ...React,
  useId: () => "service-test",
  useRef: () => gridRef,
  useEffect: (callback) => { effect = callback; },
};
const cache = new Map();
function load(relative) {
  if (cache.has(relative)) return cache.get(relative);
  const filename = path.join(root, relative);
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const module = { exports: {} };
  function localRequire(name) {
    if (name === "react") return reactForTest;
    if (name.startsWith("@/") || name.startsWith(".")) {
      const base = name.startsWith("@/") ? "src/" + name.slice(2) : path.join(path.dirname(relative), name);
      const extension = fs.existsSync(path.join(root, base + ".ts")) ? ".ts" : ".tsx";
      return load(base + extension);
    }
    return require(name);
  }
  vm.runInThisContext("(function(require,module,exports) {" + compiled + "\n})", { filename })(localRequire, module, module.exports);
  cache.set(relative, module.exports);
  return module.exports;
}
const { LogisticsCapabilities } = load("src/components/services/LogisticsCapabilities.tsx");
const { services, servicesEn } = load("src/data/services.ts");
for (const locale of ["id", "en"]) {
  const markup = renderToStaticMarkup(LogisticsCapabilities({ locale }));
  const data = locale === "id" ? services : servicesEn;
  assert.equal((markup.match(/<article /g) || []).length, 5);
  assert.equal((markup.match(/<h3 /g) || []).length, 5);
  assert.equal((markup.match(/<svg /g) || []).length, 5);
  assert.ok(markup.includes(locale === "id" ? "Layanan Pengiriman" : "Freight Services"));
  assert.ok(!/<(?:a|button|img)\b/.test(markup), "Cards are purely informational");
  assert.ok(!/\s(?:data-pending|hidden|tabindex)=|role="tab/.test(markup), "Content is visible without JavaScript");
  data.forEach((service, index) => {
    assert.ok(markup.includes('id="' + service.slug + '"'), "Existing service anchors remain available");
    assert.ok(markup.includes(service.title));
    assert.ok(markup.includes(service.description));
    assert.ok(markup.includes("--service-reveal-delay:" + index * 70 + "ms"));
  });
}
let observer;
class FakeObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.observed = new Set();
    this.unobserved = new Set();
    observer = this;
  }
  observe(card) { this.observed.add(card); }
  unobserve(card) { this.observed.delete(card); this.unobserved.add(card); }
  disconnect() { this.observed.clear(); this.disconnected = true; }
}
function setup(reducedMotion = false, supported = true) {
  const cards = Array.from({ length: 5 }, () => ({ dataset: {} }));
  const listeners = new Map();
  const preference = {
    matches: reducedMotion,
    addEventListener: (name, callback) => listeners.set(name, callback),
    removeEventListener: (name) => listeners.delete(name),
  };
  gridRef = { current: { querySelectorAll: () => cards } };
  global.window = { matchMedia: () => preference, IntersectionObserver: supported ? FakeObserver : undefined };
  observer = undefined;
  LogisticsCapabilities({ locale: "id" });
  return { cards, listeners, preference, cleanup: effect() };
}
let scenario = setup();
assert.equal(observer.observed.size, 5);
assert.equal(observer.options.threshold, 0.12);
assert.ok(scenario.cards.every((card) => card.dataset.pending === "true"));
observer.callback([{ target: scenario.cards[0], isIntersecting: false }]);
assert.equal(scenario.cards[0].dataset.pending, "true", "Offscreen cards wait for entry");
observer.callback([{ target: scenario.cards[0], isIntersecting: true }]);
assert.equal(scenario.cards[0].dataset.pending, undefined);
assert.equal(scenario.cards[0].dataset.revealed, "true");
assert.ok(observer.unobserved.has(scenario.cards[0]), "Revealed cards stop observing so animation runs once");
scenario.preference.matches = true;
scenario.listeners.get("change")();
assert.ok(observer.disconnected);
assert.ok(scenario.cards.every((card) => Object.keys(card.dataset).length === 0), "Preference change immediately reveals all cards");
scenario.cleanup();
assert.equal(scenario.listeners.size, 0, "Cleanup removes preference listener");
scenario = setup(true);
assert.equal(observer, undefined, "Reduced motion skips animation setup");
assert.ok(scenario.cards.every((card) => Object.keys(card.dataset).length === 0));
scenario = setup(false, false);
assert.equal(observer, undefined, "Browsers without IntersectionObserver keep visible content");
assert.ok(scenario.cards.every((card) => Object.keys(card.dataset).length === 0));
scenario = setup();
scenario.cleanup();
assert.ok(observer.disconnected);
assert.ok(scenario.cards.every((card) => Object.keys(card.dataset).length === 0));
delete global.window;
console.log("Service card checks passed: 5 informational cards, 2 locales, anchors, one-time reveal, reduced motion, and cleanup.");
