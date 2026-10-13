// Lightweight component/state checks using the project's existing dependencies.
// Run: node scripts/test-route-network.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
let state = [];
let hookIndex = 0;
const reactForTest = {
  ...React,
  useId: () => "route-test",
  useState(initial) {
    const index = hookIndex++;
    if (!(index in state)) state[index] = initial;
    return [state[index], (value) => { state[index] = typeof value === "function" ? value(state[index]) : value; }];
  },
};
const cache = new Map();
function load(relative) {
  if (cache.has(relative)) return cache.get(relative);
  const filename = path.join(root, relative);
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const module = { exports: {} };
  const localRequire = (name) => {
    if (name === "react") return reactForTest;
    if (name.startsWith("@/")) return load("src/" + name.slice(2) + ".ts");
    return require(name);
  };
  vm.runInThisContext("(function(require,module,exports) {" + compiled + "\n})", { filename })(localRequire, module, module.exports);
  cache.set(relative, module.exports);
  return module.exports;
}
const { RouteNetwork } = load("src/components/services/RouteNetwork.tsx");
const { getRouteCoverage } = load("src/data/routes.ts");
const { projectRoutePlace, routeConnectionPath, routeMapPlaces } = load("src/data/route-map.ts");
const { routeMapGeography } = load("src/data/route-map-geography.ts");
function render(locale) {
  hookIndex = 0;
  return RouteNetwork({ locale });
}
function descendants(tree) {
  if (Array.isArray(tree)) return tree.flatMap(descendants);
  if (!React.isValidElement(tree)) return [];
  return [tree, ...descendants(tree.props.children)];
}
function buttons(tree, className) {
  return descendants(tree).find((node) => node.props.className === className).props.children;
}
let testedRoutes = 0;
for (const locale of ["id", "en"]) {
  state = [];
  const content = getRouteCoverage(locale);
  for (let groupIndex = 0; groupIndex < content.groups.length; groupIndex++) {
    let tree = render(locale);
    buttons(tree, "route-network__views")[groupIndex].props.onClick();
    tree = render(locale);
    const group = content.groups[groupIndex];
    assert.equal(state[1], group.cities[0], "Changing view resets the selected city");
    for (let cityIndex = 0; cityIndex < group.cities.length; cityIndex++) {
      buttons(tree, "route-network__cities")[cityIndex].props.onClick();
      tree = render(locale);
      const city = group.cities[cityIndex];
      const markup = renderToStaticMarkup(tree);
      const link = descendants(tree).find((node) => node.props.className === "button route-network__cta");
      const message = new URL(link.props.href).searchParams.get("text");
      const origin = group.direction === "inbound" ? city : "Merauke";
      const destination = group.direction === "inbound" ? "Merauke" : city;
      const arrow = group.direction === "bidirectional" ? "↔" : "→";
      assert.ok(message.includes(origin + " " + arrow + " " + destination), "WhatsApp follows selected route and direction");
      assert.ok(markup.includes('aria-live="polite"'));
      assert.equal(buttons(tree, "route-network__cities").filter((button) => button.props["aria-pressed"]).length, 1);
      const mapPoint = descendants(tree).find((node) => node.type === "button" && node.props["aria-label"]?.includes(origin + " " + arrow + " " + destination));
      mapPoint.props.onClick();
      tree = render(locale);
      assert.equal(state[1], city, "Map markers select the same route as list buttons");
      const regional = group.direction === "bidirectional";
      const point = projectRoutePlace(city, regional);
      const hub = projectRoutePlace("Merauke", regional);
      assert.ok(point.x > 22 && point.x < 878 && point.y > 22 && point.y < 448, "Marker is inside the map frame");
      const connection = routeConnectionPath(city, regional, group.direction === "inbound");
      assert.ok(connection.endsWith(group.direction === "inbound" ? hub.x + " " + hub.y : point.x + " " + point.y), "Arrow endpoint matches direction");
      testedRoutes++;
    }
    // Hover previews do not change the selected route or the WhatsApp message.
    const point = descendants(tree).find((node) => node.type === "button" && node.props.className?.startsWith("route-network__point") && !node.props.className.includes("is-hub"));
    const committedCity = state[1];
    point.props.onMouseEnter();
    assert.equal(state[1], committedCity);
    point.props.onMouseLeave();
    assert.equal(state[2], null);
  }
}
assert.equal(Object.keys(routeMapPlaces).length, 9);
assert.ok(routeMapGeography.some((country) => country.name === "IDN" && country.path.length > 1000));
assert.equal(testedRoutes, 22);
console.log("PASS: 22 localized routes, all three views, map/list selection, directional arrows, hover, bounds, and WhatsApp messages.");
