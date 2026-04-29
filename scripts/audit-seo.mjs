import { getSeoRoutes } from "./seo-routes.mjs";

const routes = getSeoRoutes();
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const routePaths = new Set(routes.map((route) => route.path));
const legacyRedirects = new Map([
  ["/home.html", "/"],
  ["/services-new", "/"],
  ["/interior-painting-bothell-wa", "/services/interior-painting"],
]);

for (const route of routes) {
  if (!route.title || route.title.length > 115) errors.push(`${route.path}: title missing or too long (${route.title?.length || 0})`);
  if (!route.description || route.description.length < 120 || route.description.length > 205) errors.push(`${route.path}: description length ${route.description?.length || 0}`);
  if (!route.canonical || route.canonical !== `https://arclightpainting.com${route.path === "/" ? "" : route.path}`) errors.push(`${route.path}: canonical mismatch (${route.canonical || "missing"})`);
  if (/noindex/i.test(`${route.title} ${route.description}`)) errors.push(`${route.path}: possible accidental noindex text in route metadata`);
  if (legacyRedirects.has(route.path)) errors.push(`${route.path}: legacy redirect URL must not be indexable or included in sitemap routes`);
  if (seenTitles.has(route.title)) errors.push(`${route.path}: duplicate title with ${seenTitles.get(route.title)}`);
  if (seenDescriptions.has(route.description)) errors.push(`${route.path}: duplicate description with ${seenDescriptions.get(route.description)}`);
  seenTitles.set(route.title, route.path);
  seenDescriptions.set(route.description, route.path);
}

for (const [from, to] of legacyRedirects) {
  if (routePaths.has(from)) errors.push(`${from}: legacy redirect is incorrectly present as an SEO route`);
  if (!routePaths.has(to)) errors.push(`${from}: redirect target ${to} is not an indexable SEO route`);
}

if (routePaths.has("/services")) errors.push("/services: should remain out of the indexable sitemap unless a real services page is restored");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`SEO audit passed for ${routes.length} routes: unique titles, unique descriptions, and crawler-ready description lengths.`);
