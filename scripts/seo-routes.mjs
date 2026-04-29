import fs from "node:fs";
import path from "node:path";

export const SITE_URL = "https://arclightpainting.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const withBrand = (title) => (title.includes("Arclight") ? title : `${title} | Arclight Painting`);

const coreRoutes = [
  {
    path: "/",
    title: "Professional House Painters in Bothell, WA | Arclight Painting",
    description: "Bothell's highest-rated, veteran-owned house painters. Interior, exterior & cabinet painting. 4.9★ from 269 reviews. Get a TrueQuote today!",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/about",
    title: "About Us - Meet the Arclight Painting Team | Bothell, WA",
    description: "Meet the team behind Bothell's most trusted painting company. Veteran-owned with 25+ years of experience, every Arclight painter is trained, background-checked, and committed to quality.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/pricing",
    title: "House Painting Cost in Bothell | Transparent TrueQuote™ Pricing | Arclight Painting",
    description: "How much does house painting cost in Bothell, WA? Get a free, itemized TrueQuote™ with no hidden fees. Use our instant pricing calculator or schedule a consultation with Arclight Painting.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/reviews",
    title: "Exceptional Results - 4.9★ Google Rating | Arclight Painting Bothell, WA",
    description: "Read 269+ five-star Google reviews from Arclight Painting customers in Bothell, WA. See why homeowners trust us for interior and exterior painting services.",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/schedule",
    title: "Get a Free Painting Estimate | Schedule Now | Arclight Painting",
    description: "Schedule your free painting estimate with Arclight Painting in Bothell, WA. Fast quotes, no obligation. Call (425) 757-1199 or book online.",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/blog",
    title: "Painting Tips & Insights Blog | Arclight Painting Bothell, WA",
    description: "Expert painting tips, color inspiration, and home improvement insights from Arclight Painting — the #1-rated painting company in Bothell, WA.",
    priority: "0.7",
    changefreq: "weekly",
  },
  {
    path: "/mission",
    title: "Our Mission - Real Purpose | Arclight Painting",
    description: "At Arclight Painting, service comes first. Learn about our purpose-driven mission, FreshStart™ Touch-Up Plan, and 100% Satisfaction Guarantee.",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    path: "/join-our-team",
    title: "Join Our Team | Arclight Painting Careers in Bothell, WA",
    description: "Join the #1-rated residential painting company in Bothell, WA. We're looking for dedicated painters who share our values of quality craftsmanship and exceptional service.",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Arclight Painting",
    description: "Arclight Painting's privacy policy outlines how we collect, use, disclose, and protect your personal information.",
    priority: "0.3",
    changefreq: "yearly",
  },
  {
    path: "/services/color-consultation",
    title: "ColorConfidence™ Color Consultation in Bothell | Arclight Painting",
    description: "Eliminate color regret with Arclight's ColorConfidence™ Consultation in Bothell. Virtual colorist sessions, visual mockups, custom matching, and on-site test patches. Choose boldly. Paint beautifully.",
    priority: "0.7",
    changefreq: "monthly",
  },
];

const serviceRoutes = [
  ["interior-painting", "Interior House Painting in Bothell | Arclight Painting", "Professional interior house painting in Bothell. Meticulous prep, premium paints, flawless finishes, and a 100% Satisfaction Guarantee. Get a free TrueQuote™."],
  ["exterior-painting", "Exterior House Painting in Bothell | Arclight Painting", "Professional exterior house painting in Bothell. Weather-tough prep, premium paints, lasting protection, and a 100% Satisfaction Guarantee. Get a free TrueQuote™."],
  ["cabinet-refinishing", "Cabinet Refinishing in Bothell | Arclight Painting", "Professional cabinet refinishing in Bothell. Factory-smooth finishes, meticulous prep, and a 100% Satisfaction Guarantee. Get a free TrueQuote™."],
  ["drywall-repairs", "Drywall Repair in Bothell | Arclight Painting", "Expert drywall repair in Bothell. Seamless patches, texture matching, and paint-ready finishes. Backed by a 100% Satisfaction Guarantee. Get a free TrueQuote™."],
  ["pressure-washing", "Pressure Washing in Bothell | Arclight Painting", "Professional pressure washing in Bothell. Safe, effective cleaning for siding, driveways, decks, and more. Get a free TrueQuote™."],
  ["commercial-painting", "Commercial Painting in Bothell | Arclight Painting", "Professional commercial painting in Bothell. Flexible scheduling, durable finishes, minimal disruption, and a 100% Satisfaction Guarantee. Get a free TrueQuote™."],
  ["painter-for-a-day", "One-Day Painting Service in Bothell | Arclight Painting", "Book a skilled, background-checked painter for a full day in Bothell. Touch-ups, accent walls, trim, and more — no estimate needed. Just $689."],
  ["popcorn-ceiling-removal", "Popcorn Ceiling Removal in Bothell | Arclight Painting", "Professional popcorn ceiling removal in Bothell. Full removal, skim coating, and painting for smooth, modern ceilings. Get a free TrueQuote™."],
].map(([slug, title, description]) => ({
  path: `/services/${slug}`,
  title,
  description,
  priority: slug === "painter-for-a-day" || slug === "color-consultation" ? "0.7" : "0.8",
  changefreq: "monthly",
}));

function parseServiceAreas() {
  const text = read("src/data/serviceAreas.ts");
  const routes = [];
  const regex = /\{\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",[\s\S]*?metaDescription:\s*\n?\s*"([^"]+)"/g;
  for (const match of text.matchAll(regex)) {
    const [, name, slug, description] = match;
    if (slug === "bothell") continue;
    routes.push({
      path: `/${slug}`,
      title: `Professional House Painters in ${name} | Arclight Painting`,
      description,
      priority: "0.7",
      changefreq: "monthly",
    });
  }
  return routes;
}

function parseBlogPosts() {
  const text = read("src/data/blogPosts.ts");
  const routes = [];
  const regex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*image:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*content:/g;
  for (const match of text.matchAll(regex)) {
    const [, slug, title, description, image, date] = match;
    routes.push({
      path: `/${slug}`,
      title: withBrand(title),
      description,
      image,
      lastmod: date,
      priority: "0.6",
      changefreq: "monthly",
      type: "article",
    });
  }
  return routes;
}

export function getSeoRoutes() {
  return [...coreRoutes, ...serviceRoutes, ...parseServiceAreas(), ...parseBlogPosts()].map((route) => ({
    ...route,
    title: withBrand(route.title),
    canonical: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    image: route.image?.startsWith("http") ? route.image : route.image ? `${SITE_URL}${route.image}` : DEFAULT_OG_IMAGE,
  }));
}
