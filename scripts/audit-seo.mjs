import { getSeoRoutes } from "./seo-routes.mjs";

const routes = getSeoRoutes();
const errors = [];
const seenTitles = new Map();
const seenDescriptions = new Map();

for (const route of routes) {
  if (!route.title || route.title.length > 115) errors.push(`${route.path}: title missing or too long (${route.title?.length || 0})`);
  if (!route.description || route.description.length < 120 || route.description.length > 205) errors.push(`${route.path}: description length ${route.description?.length || 0}`);
  if (seenTitles.has(route.title)) errors.push(`${route.path}: duplicate title with ${seenTitles.get(route.title)}`);
  if (seenDescriptions.has(route.description)) errors.push(`${route.path}: duplicate description with ${seenDescriptions.get(route.description)}`);
  seenTitles.set(route.title, route.path);
  seenDescriptions.set(route.description, route.path);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`SEO audit passed for ${routes.length} routes: unique titles, unique descriptions, and crawler-ready description lengths.`);
