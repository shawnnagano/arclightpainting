import fs from "node:fs";
import path from "node:path";
import { getSeoRoutes, SITE_URL } from "./seo-routes.mjs";

const routes = getSeoRoutes();
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const routePaths = new Set(routes.map((route) => route.path));
const distDir = path.join(process.cwd(), "dist");
const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
const redirectsPath = path.join(process.cwd(), "public", "_redirects");
const distRedirectsPath = path.join(distDir, "_redirects");
const redirectMapPath = path.join(process.cwd(), "redirect-map.json");
const redirectEntries = fs.existsSync(redirectMapPath) ? JSON.parse(fs.readFileSync(redirectMapPath, "utf8")) : [];
const legacyRedirects = new Map(redirectEntries.map((entry) => [entry.source?.replace(/\/+$/, "") || "/", entry.destination?.replace(/\/+$/, "") || "/"]));
const CANONICAL_HOSTNAME = "arclightpainting.com";
const CANONICAL_PROTOCOL = "https:";

const expectedBodyText = new Map([
  ["/", ["Professional House Painters", "Bothell", "Get a TrueQuote"]],
  ["/blog", ["Painting", "Blog"]],
  ["/services/interior-painting", ["Interior", "Painting", "Bothell"]],
  ["/services/exterior-painting", ["Exterior", "Painting", "Bothell"]],
  ["/services/pressure-washing", ["Pressure", "Washing", "Bothell"]],
  ["/services/commercial-painting", ["Commercial", "Painting", "Bothell"]],
  ["/woodinville", ["Woodinville", "Painting"]],
  ["/kirkland", ["Kirkland", "Painting"]],
]);

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const htmlPathForRoute = (routePath) => routePath === "/"
  ? path.join(distDir, "index.html")
  : path.join(distDir, routePath.replace(/^\//, ""), "index.html");
const flatHtmlPathForRoute = (routePath) => routePath === "/"
  ? path.join(distDir, "index.html")
  : path.join(distDir, `${routePath.replace(/^\//, "")}.html`);
const stripTags = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const readIfExists = (filePath) => fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
const anchorRegex = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
const canonicalHrefRegex = /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/gi;

function countMatches(html, regex) {
  return [...html.matchAll(regex)].length;
}

function validateCanonicalHostname(canonical, context) {
  let url;
  try {
    url = new URL(canonical);
  } catch {
    errors.push(`${context}: canonical is not a valid absolute URL (${canonical})`);
    return;
  }

  if (url.protocol !== CANONICAL_PROTOCOL) {
    errors.push(`${context}: canonical must use https, found ${url.protocol}`);
  }
  if (url.hostname !== CANONICAL_HOSTNAME) {
    errors.push(`${context}: canonical hostname must be ${CANONICAL_HOSTNAME}, found ${url.hostname}`);
  }
  if (url.hostname.startsWith("www.")) {
    errors.push(`${context}: canonical must use root domain, not www`);
  }
  if (/lovable\.app|id-preview--|pages\.dev/i.test(canonical)) {
    errors.push(`${context}: canonical contains preview/staging hostname (${canonical})`);
  }
}

function auditGeneratedHtml(route) {
  if (!fs.existsSync(distDir)) return;

  const htmlPath = htmlPathForRoute(route.path);
  if (!fs.existsSync(htmlPath)) {
    errors.push(`${route.path}: missing generated HTML file at ${path.relative(process.cwd(), htmlPath)}`);
    return;
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const text = stripTags(html);
  const expectedCanonical = `${SITE_URL}${route.path === "/" ? "" : route.path}`;
  const titleRegex = new RegExp(`<title>\\s*${escapeRegex(route.title)}\\s*<\\/title>`, "i");
  const descriptionRegex = new RegExp(`<meta[^>]+name=["']description["'][^>]+content=["']${escapeRegex(route.description)}["'][^>]*>`, "i");
  const canonicalRegex = new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${escapeRegex(expectedCanonical)}["'][^>]*>`, "i");
  const canonicalMatches = [...html.matchAll(canonicalHrefRegex)];

  if (!titleRegex.test(html)) errors.push(`${route.path}: generated HTML missing exact <title>`);
  if (!descriptionRegex.test(html)) errors.push(`${route.path}: generated HTML missing exact meta description`);
  if (!canonicalRegex.test(html)) errors.push(`${route.path}: generated HTML missing exact self-referencing canonical`);
  if (countMatches(html, /<title>/gi) !== 1) errors.push(`${route.path}: generated HTML must contain exactly one <title>`);
  if (countMatches(html, /<meta[^>]+name=["']description["']/gi) !== 1) errors.push(`${route.path}: generated HTML must contain exactly one meta description`);
  if (canonicalMatches.length !== 1) errors.push(`${route.path}: generated HTML must contain exactly one canonical link`);
  for (const [, canonicalHref] of canonicalMatches) validateCanonicalHostname(canonicalHref, route.path);
  if (/lovable\.app|id-preview--|pages\.dev/i.test(html)) errors.push(`${route.path}: generated HTML contains preview/staging host text`);
  if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) errors.push(`${route.path}: generated HTML contains noindex`);
  if (/content=["'][^"']*noindex/i.test(html)) errors.push(`${route.path}: generated HTML contains noindex directive`);
  if (/<div id=["']root["']><\/div>/i.test(html)) errors.push(`${route.path}: generated HTML still has an empty CSR root`);
  if (!/<h1[\s>]/i.test(html)) errors.push(`${route.path}: generated HTML missing H1 content`);
  if (text.length < 750) errors.push(`${route.path}: generated HTML body content too short (${text.length} chars)`);

  for (const match of html.matchAll(anchorRegex)) {
    const [, href, labelHtml] = match;
    const label = stripTags(labelHtml);
    if (/get a truequote/i.test(label) && href !== "/schedule") {
      errors.push(`${route.path}: Get a TrueQuote CTA points to ${href} instead of /schedule`);
    }
  }

  for (const expected of expectedBodyText.get(route.path) || []) {
    if (!text.toLowerCase().includes(expected.toLowerCase())) {
      errors.push(`${route.path}: generated HTML missing expected body text "${expected}"`);
    }
  }

  const flatPath = flatHtmlPathForRoute(route.path);
  if (route.path !== "/" && !fs.existsSync(flatPath)) {
    errors.push(`${route.path}: missing flat HTML fallback at ${path.relative(process.cwd(), flatPath)}`);
  }
}

for (const route of routes) {
  const expectedCanonical = `${SITE_URL}${route.path === "/" ? "" : route.path}`;
  if (!route.title || route.title.length > 115) errors.push(`${route.path}: title missing or too long (${route.title?.length || 0})`);
  if (!route.description || route.description.length < 120 || route.description.length > 205) errors.push(`${route.path}: description length ${route.description?.length || 0}`);
  if (!route.canonical || route.canonical !== expectedCanonical) errors.push(`${route.path}: canonical mismatch (${route.canonical || "missing"})`);
  if (route.canonical) validateCanonicalHostname(route.canonical, `${route.path} route metadata`);
  if (route.path !== "/" && route.canonical === `${SITE_URL}`) errors.push(`${route.path}: deep page incorrectly canonicalizes to homepage`);
  if (/lovable\.app|id-preview--|pages\.dev/i.test(`${route.title} ${route.description} ${route.canonical}`)) errors.push(`${route.path}: route metadata contains preview/staging host text`);
  if (/noindex/i.test(`${route.title} ${route.description}`)) errors.push(`${route.path}: possible accidental noindex text in route metadata`);
  if (legacyRedirects.has(route.path)) errors.push(`${route.path}: legacy redirect URL must not be indexable or included in sitemap routes`);
  if (seenTitles.has(route.title)) errors.push(`${route.path}: duplicate title with ${seenTitles.get(route.title)}`);
  if (seenDescriptions.has(route.description)) errors.push(`${route.path}: duplicate description with ${seenDescriptions.get(route.description)}`);
  seenTitles.set(route.title, route.path);
  seenDescriptions.set(route.description, route.path);
  auditGeneratedHtml(route);
}

for (const [from, to] of legacyRedirects) {
  if (routePaths.has(from)) errors.push(`${from}: legacy redirect is incorrectly present as an SEO route`);
  if (!to.includes(":" ) && !routePaths.has(to)) errors.push(`${from}: redirect target ${to} is not an indexable SEO route`);
}

const generatedRedirects = readIfExists(redirectsPath);
if (!generatedRedirects.includes("Generated by scripts/generate-redirects.mjs")) {
  errors.push("public/_redirects must be generated from redirect-map.json and include the generated-file marker");
}
const deployedRedirects = readIfExists(distRedirectsPath);
if (fs.existsSync(distDir) && !deployedRedirects.includes("Generated by scripts/generate-redirects.mjs")) {
  errors.push("dist/_redirects must be generated from redirect-map.json before deployment");
}
for (const entry of redirectEntries) {
  if (!generatedRedirects.includes(`${entry.source}`) || !generatedRedirects.includes(`${entry.destination}`)) {
    errors.push(`${entry.source}: generated _redirects missing redirect-map entry`);
  }
  if (fs.existsSync(distDir) && (!deployedRedirects.includes(`${entry.source}`) || !deployedRedirects.includes(`${entry.destination}`))) {
    errors.push(`${entry.source}: deployed dist/_redirects missing redirect-map entry`);
  }
}

if (routePaths.has("/services")) errors.push("/services: should remain out of the indexable sitemap unless a real services page is restored");

const sitemap = readIfExists(sitemapPath);
if (sitemap) {
  for (const route of routes) {
    const loc = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    validateCanonicalHostname(loc, `${route.path} sitemap URL`);
    if (!sitemap.includes(`<loc>${loc}</loc>`)) errors.push(`${route.path}: sitemap missing ${loc}`);
  }
  for (const from of legacyRedirects.keys()) {
    if (sitemap.includes(`<loc>${SITE_URL}${from}</loc>`)) errors.push(`${from}: legacy redirect appears in sitemap`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (fs.existsSync(distDir)) {
  const llmsTxtPath = path.join(distDir, "llms.txt");
  if (!fs.existsSync(llmsTxtPath)) {
    console.error("llms.txt missing from dist/ — AI visibility protection failed");
    process.exit(1);
  }
  const llmsWordCount = fs.readFileSync(llmsTxtPath, "utf8").trim().split(/\s+/).length;
  if (llmsWordCount < 300) {
    console.error(`llms.txt below minimum word count (found ${llmsWordCount} words, minimum 300) — AI visibility protection failed`);
    process.exit(1);
  }
  console.log(`llms.txt present and verified (${llmsWordCount} words)`);
}

const buildOutputNote = fs.existsSync(distDir) ? " Generated HTML output was audited." : " Route metadata audited; dist/ not present, so generated HTML checks were skipped.";
console.log(`SEO audit passed for ${routes.length} routes: unique titles, unique descriptions, canonicals, canonical hostname, sitemap coverage, CTA paths, and crawler-ready output.${buildOutputNote}`);
