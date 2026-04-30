import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "@playwright/test";
import { getSeoRoutes } from "./seo-routes.mjs";

const distDir = path.join(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");
const port = Number(process.env.PRERENDER_PORT || 4174);
const host = "127.0.0.1";
const logDir = path.join(process.cwd(), "playwright-prerender-logs");
fs.mkdirSync(logDir, { recursive: true });
const playwrightLogPath = path.join(logDir, "prerender.log");
const logLines = [];
const recordLog = (line) => {
  logLines.push(line);
  fs.writeFileSync(playwrightLogPath, `${logLines.join("\n")}\n`);
};

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html not found. Run the Vite build before prerendering SEO HTML.");
}

const baseHtml = fs.readFileSync(templatePath, "utf8");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const normalizeRoutePath = (routePath) => routePath.replace(/\/+$/, "") || "/";

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
        const setTag = (selector, tagName, attrs) => {
          let el = document.head.querySelector(selector);
          if (!el) {
            el = document.createElement(tagName);
            document.head.appendChild(el);
          }
          Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
        };
        document.title = route.title;
        setTag('meta[name="description"]', "meta", { name: "description", content: route.description });
        setTag('link[rel="canonical"]', "link", { rel: "canonical", href: route.canonical });
        setTag('meta[property="og:title"]', "meta", { property: "og:title", content: route.title });
        setTag('meta[property="og:description"]', "meta", { property: "og:description", content: route.description });
        setTag('meta[property="og:type"]', "meta", { property: "og:type", content: route.type });
        setTag('meta[property="og:image"]', "meta", { property: "og:image", content: route.image });
        setTag('meta[property="og:url"]', "meta", { property: "og:url", content: route.canonical });
        setTag('meta[property="og:site_name"]', "meta", { property: "og:site_name", content: "Arclight Painting" });
        setTag('meta[property="og:locale"]', "meta", { property: "og:locale", content: "en_US" });
        setTag('meta[name="twitter:card"]', "meta", { name: "twitter:card", content: "summary_large_image" });
        setTag('meta[name="twitter:title"]', "meta", { name: "twitter:title", content: route.title });
        setTag('meta[name="twitter:description"]', "meta", { name: "twitter:description", content: route.description });
        setTag('meta[name="twitter:image"]', "meta", { name: "twitter:image", content: route.image });
        setTag('meta[name="geo.region"]', "meta", { name: "geo.region", content: "US-WA" });
        setTag('meta[name="geo.placename"]', "meta", { name: "geo.placename", content: "Bothell" });
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

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".html": "text/html; charset=utf-8",
  }[ext] || "application/octet-stream";
}

function safeFilePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^[/\\]+/, "");
  if (normalized.startsWith("..")) return null;
  return path.join(distDir, normalized);
}

function createServer(spaHtml) {
  return http.createServer((req, res) => {
    const filePath = safeFilePath(req.url || "/");
    if (!filePath) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    let target = filePath;
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      target = path.join(target, "index.html");
    }

    if (fs.existsSync(target) && fs.statSync(target).isFile()) {
      res.writeHead(200, { "Content-Type": contentType(target) });
      fs.createReadStream(target).pipe(res);
      return;
    }

    const requestPath = new URL(req.url || "/", `http://${host}:${port}`).pathname;
    if (path.extname(requestPath)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(spaHtml);
  });
}

function directoryOutputPath(routePath) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

function flatOutputPath(routePath) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, `${routePath.replace(/^\//, "")}.html`);
}

async function waitForRenderedContent(page) {
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => undefined);
  await page.waitForFunction(() => {
    const root = document.getElementById("root");
    return Boolean(root && root.innerText.trim().length > 250 && document.querySelector("h1"));
  }, { timeout: 15000 });
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage({ viewport: { width: 1365, height: 1600 } });
  page.on("console", (message) => {
    const line = `[prerender:${route.path}] browser ${message.type()}: ${message.text()}`;
    if (message.type() === "error") console.warn(line);
    recordLog(line);
  });
  page.on("pageerror", (error) => {
    const line = `[prerender:${route.path}] pageerror: ${error.message}`;
    console.warn(line);
    recordLog(line);
  });
  page.on("requestfailed", (request) => {
    const line = `[prerender:${route.path}] requestfailed: ${request.url()} ${request.failure()?.errorText || "unknown"}`;
    console.warn(line);
    recordLog(line);
  });

  try {
    const url = `http://${host}:${port}${route.path}`;
    recordLog(`[prerender:${route.path}] navigating ${url}`);
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    if (!response || !response.ok()) {
      throw new Error(`${route.path}: failed to load prerender route (${response?.status() || "no response"})`);
    }

    await waitForRenderedContent(page);
    await page.evaluate((expected) => {
      const ensure = (selector, tagName, attrs) => {
        let el = document.head.querySelector(selector);
        if (!el) {
          el = document.createElement(tagName);
          document.head.appendChild(el);
        }
        Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
      };
      document.title = expected.title;
      ensure('meta[name="description"]', "meta", { name: "description", content: expected.description });
      ensure('link[rel="canonical"]', "link", { rel: "canonical", href: expected.canonical });
      ensure('meta[property="og:title"]', "meta", { property: "og:title", content: expected.title });
      ensure('meta[property="og:description"]', "meta", { property: "og:description", content: expected.description });
      ensure('meta[property="og:url"]', "meta", { property: "og:url", content: expected.canonical });
    }, {
      title: route.title,
      description: route.description,
      canonical: route.canonical,
    });

    recordLog(`[prerender:${route.path}] rendered successfully`);
    return await page.content();
  } finally {
    await page.close();
  }
}

function writeRouteHtml(routePath, html) {
  const directoryPath = directoryOutputPath(routePath);
  fs.mkdirSync(path.dirname(directoryPath), { recursive: true });
  fs.writeFileSync(directoryPath, html);

  const flatPath = flatOutputPath(routePath);
  if (flatPath !== directoryPath) {
    fs.mkdirSync(path.dirname(flatPath), { recursive: true });
    fs.writeFileSync(flatPath, html);
  }
}

recordLog("Starting Playwright prerender run");
const routes = getSeoRoutes().map((route) => ({ ...route, path: normalizeRoutePath(route.path) }));
const spaHtml = injectRuntimeSeo(baseHtml, routes);
fs.writeFileSync(templatePath, spaHtml);

const server = createServer(spaHtml);
await new Promise((resolve) => server.listen(port, host, resolve));

let browser;
try {
  browser = await chromium.launch({ headless: true });
  for (const route of routes) {
    const html = await prerenderRoute(browser, route);
    writeRouteHtml(route.path, html);
  }
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}

recordLog(`Prerendered complete HTML for ${routes.length} routes.`);
console.log(`Prerendered complete HTML for ${routes.length} routes. Logs retained at ${path.relative(process.cwd(), playwrightLogPath)}.`);
