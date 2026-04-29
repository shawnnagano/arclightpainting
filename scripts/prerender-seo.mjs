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

function routeSeoRuntime(routes) {
  const payload = JSON.stringify(
    Object.fromEntries(routes.map((route) => [route.path, {
      title: route.title,
      description: route.description,
      canonical: route.canonical,
      image: route.image,
      type: route.type === "article" ? "article" : "website",
    }]))
  ).replaceAll("<", "\\u003c");

  return `
    <!-- route-seo-runtime:start -->
    <script>
      (() => {
        const routes = ${payload};
        const normalizedPath = window.location.pathname.replace(/\\/+$/, "") || "/";
        const route = routes[normalizedPath] || routes["/"];
        if (!route) return;
        const setMeta = (selector, attrs) => {
          let el = document.head.querySelector(selector);
          if (!el) {
            el = document.createElement(attrs.property ? "meta" : attrs.rel ? "link" : "meta");
            document.head.appendChild(el);
          }
          Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
        };
        document.title = route.title;
        setMeta('meta[name="description"]', { name: "description", content: route.description });
        setMeta('link[rel="canonical"]', { rel: "canonical", href: route.canonical });
        setMeta('meta[property="og:title"]', { property: "og:title", content: route.title });
        setMeta('meta[property="og:description"]', { property: "og:description", content: route.description });
        setMeta('meta[property="og:type"]', { property: "og:type", content: route.type });
        setMeta('meta[property="og:image"]', { property: "og:image", content: route.image });
        setMeta('meta[property="og:url"]', { property: "og:url", content: route.canonical });
        setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: route.title });
        setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: route.description });
        setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: route.image });
      })();
    </script>
    <!-- route-seo-runtime:end -->`;
}

function injectRuntimeSeo(html, routes) {
  const cleaned = html
    .replace(/\n\s*<!-- route-seo:start -->[\s\S]*?<!-- route-seo:end -->/g, "")
    .replace(/\n\s*<!-- route-seo-runtime:start -->[\s\S]*?<!-- route-seo-runtime:end -->/g, "");
  return cleaned.replace("</head>", `${routeSeoRuntime(routes)}\n  </head>`);
}

function outputPath(routePath) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, routePath.replace(/^\//, ""));
}

function directoryOutputPath(routePath) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

function flatOutputPath(routePath) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, `${routePath.replace(/^\//, "")}.html`);
}

const routes = getSeoRoutes();
fs.writeFileSync(templatePath, injectRuntimeSeo(baseHtml, routes));

for (const route of routes) {
  const filePath = outputPath(route.path);
  if (filePath === templatePath) continue;
  if (filePath !== templatePath && fs.existsSync(path.join(publicDir, route.path.replace(/^\//, "")))) continue;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const html = injectSeo(baseHtml, route);
  fs.writeFileSync(filePath, html);

  const directoryPath = directoryOutputPath(route.path);
  if (directoryPath !== filePath) {
    fs.mkdirSync(path.dirname(directoryPath), { recursive: true });
    fs.writeFileSync(directoryPath, html);
  }

  const flatPath = flatOutputPath(route.path);
  if (flatPath !== filePath) {
    fs.mkdirSync(path.dirname(flatPath), { recursive: true });
    fs.writeFileSync(flatPath, html);
  }
}

console.log(`Prerendered SEO metadata for ${routes.length} routes.`);
