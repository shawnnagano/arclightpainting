import fs from "node:fs";
import path from "node:path";
import { getSeoRoutes, SITE_URL } from "./seo-routes.mjs";

const routes = getSeoRoutes();
const escapeXml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const urls = routes.map((route) => {
  const loc = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
  // Only emit lastmod when the route has an authoritative, page-specific date.
  const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : "";
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmod}\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`;
}).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
console.log(`Generated sitemap.xml with ${routes.length} URLs.`);
