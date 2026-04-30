import fs from "node:fs";
import path from "node:path";
import { getSeoRoutes } from "./seo-routes.mjs";

const root = process.cwd();
const mapPath = path.join(root, "redirect-map.json");
const redirectsPath = path.join(root, "public", "_redirects");
const allowedStatuses = new Set([301, 302, 307, 308]);
const errors = [];

const normalizePath = (value) => {
  if (value === "/") return "/";
  return String(value).replace(/\/+$/, "") || "/";
};

const hasParam = (value) => /(^|\/)[:*][^/]+/.test(value);
const paramsFor = (value) => new Set([...String(value).matchAll(/[:*]([^/]+)/g)].map((match) => match[1]));
const internalTargetExists = (destination, routePaths) => {
  if (hasParam(destination)) return true;
  return routePaths.has(normalizePath(destination));
};

if (!fs.existsSync(mapPath)) {
  throw new Error("redirect-map.json is missing. Redirects must be generated from the source-of-truth map.");
}

const redirects = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const routePaths = new Set(getSeoRoutes().map((route) => normalizePath(route.path)));
const bySource = new Map();

if (!Array.isArray(redirects)) {
  errors.push("redirect-map.json must contain an array of redirect entries.");
}

for (const [index, entry] of (Array.isArray(redirects) ? redirects : []).entries()) {
  const label = `entry ${index + 1}`;
  if (!entry || typeof entry !== "object") {
    errors.push(`${label}: entry must be an object`);
    continue;
  }

  const { source, destination, status } = entry;
  if (!source || !destination || !status) errors.push(`${label}: source, destination, and status are required`);
  if (typeof source !== "string" || !source.startsWith("/")) errors.push(`${label}: source must start with /`);
  if (typeof destination !== "string" || !destination.startsWith("/")) errors.push(`${label}: internal destination must start with /`);
  if (!allowedStatuses.has(Number(status))) errors.push(`${label}: status must be one of 301, 302, 307, 308`);

  if (typeof source === "string" && typeof destination === "string") {
    const normalizedSource = String(source);
    const normalizedDestination = normalizePath(destination);
    if (normalizedSource === normalizedDestination) errors.push(`${source}: redirect points to itself`);
    if (bySource.has(normalizedSource)) errors.push(`${source}: duplicate redirect source; first seen at ${bySource.get(normalizedSource)}`);
    bySource.set(normalizedSource, label);

    const sourceParams = paramsFor(source);
    for (const param of paramsFor(destination)) {
      if (!sourceParams.has(param)) errors.push(`${source}: destination uses missing route parameter :${param}`);
    }

    if (!internalTargetExists(destination, routePaths)) {
      errors.push(`${source}: destination ${destination} is not an indexable SEO route`);
    }
  }
}

const exactRedirects = new Map(
  (Array.isArray(redirects) ? redirects : [])
    .filter((entry) => entry?.source && entry?.destination && !hasParam(entry.source) && !hasParam(entry.destination))
    .map((entry) => [normalizePath(entry.source), normalizePath(entry.destination)])
);

for (const source of exactRedirects.keys()) {
  const seen = new Set([source]);
  let cursor = exactRedirects.get(source);
  while (exactRedirects.has(cursor)) {
    if (seen.has(cursor)) {
      errors.push(`${source}: redirect cycle detected through ${cursor}`);
      break;
    }
    seen.add(cursor);
    cursor = exactRedirects.get(cursor);
  }
}

if (errors.length) {
  const categorize = (msg) => {
    if (msg.includes("redirect cycle detected")) return "cycle";
    if (msg.includes("is not an indexable SEO route")) return "unknown-target";
    if (msg.includes("missing route parameter")) return "param-mismatch";
    if (msg.includes("duplicate redirect source")) return "duplicate";
    if (msg.includes("points to itself")) return "self-loop";
    if (
      msg.includes("must be") ||
      msg.includes("are required") ||
      msg.includes("must start with") ||
      msg.includes("must contain an array") ||
      msg.includes("entry must be an object")
    ) return "schema";
    return "other";
  };

  const groups = new Map();
  const categoryCounts = new Map();

  for (const raw of errors) {
    const colonIdx = raw.indexOf(":");
    const key = colonIdx > 0 ? raw.slice(0, colonIdx) : "(general)";
    const message = colonIdx > 0 ? raw.slice(colonIdx + 1).trim() : raw;
    const tag = categorize(raw);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ tag, message });
    categoryCounts.set(tag, (categoryCounts.get(tag) || 0) + 1);
  }

  const summary = [...categoryCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => `${count} ${tag}`)
    .join(", ");

  console.error(`--- Redirect generation failed: ${errors.length} issue(s) ---`);
  console.error(`Categories: ${summary}`);
  console.error("");

  for (const [key, items] of groups) {
    console.error(`${key}`);
    for (const { tag, message } of items) {
      console.error(`  - [${tag}] ${message}`);
    }
  }

  console.error("");
  console.error("--- Fix in redirect-map.json. Internal destinations must exist as routes in scripts/seo-routes.mjs. ---");
  process.exit(1);
}

const maxSource = Math.max(...redirects.map((entry) => entry.source.length), 2) + 2;
const maxDestination = Math.max(...redirects.map((entry) => entry.destination.length), 11) + 2;
const lines = [
  "# Generated by scripts/generate-redirects.mjs from redirect-map.json. Do not edit manually.",
  ...redirects.map((entry) => `${entry.source.padEnd(maxSource)}${entry.destination.padEnd(maxDestination)}${entry.status}`),
  "/*".padEnd(maxSource) + "/index.html".padEnd(maxDestination) + "200",
  "",
];

fs.writeFileSync(redirectsPath, lines.join("\n"));
console.log(`Generated ${path.relative(root, redirectsPath)} from ${redirects.length} redirect-map entries. Redirect validation passed.`);
