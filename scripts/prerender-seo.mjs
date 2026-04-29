import fs from "node:fs";
import path from "node:path";
import { getSeoRoutes } from "./seo-routes.mjs";

const distDir = path.join(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");
const publicDir = path.join(process.cwd(), "public");

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html not found. Run the Vite build before prerendering SEO metadata.");
}

const baseHtml = fs.readFileSync(templatePath, "utf8");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function routeSeo(route) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = escapeHtml(route.canonical);
  const image = escapeHtml(route.image);
  const type = route.type === "article" ? "article" : "website";

  return `\n    <!-- route-seo:start -->\n    <title>${title}</title>\n    <meta name="description" content="${description}" />\n    <link rel="canonical" href="${canonical}" />\n    <meta property="og:title" content="${title}" />\n    <meta property="og:description" content="${description}" />\n    <meta property="og:type" content="${type}" />\n    <meta property="og:image" content="${image}" />\n    <meta property="og:url" content="${canonical}" />\n    <meta property="og:site_name" content="Arclight Painting" />\n    <meta property="og:locale" content="en_US" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${title}" />\n    <meta name="twitter:description" content="${description}" />\n    <meta name="twitter:image" content="${image}" />\n    <meta name="geo.region" content="US-WA" />\n    <meta name="geo.placename" content="Bothell" />\n    <!-- route-seo:end -->`;
}

function injectSeo(html, route) {
  const cleaned = html.replace(/\n\s*<!-- route-seo:start -->[\s\S]*?<!-- route-seo:end -->/g, "");
  return cleaned.replace("</head>", `${routeSeo(route)}\n  </head>`);
}

function outputPath(routePath) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

const routes = getSeoRoutes();
for (const route of routes) {
  const filePath = outputPath(route.path);
  if (filePath !== templatePath && fs.existsSync(path.join(publicDir, route.path.replace(/^\//, "")))) continue;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, injectSeo(baseHtml, route));
}

console.log(`Prerendered SEO metadata for ${routes.length} routes.`);
