import helloLogo from "@/assets/trade-alliance/hello-electric.png.asset.json";
import perdueLogo from "@/assets/trade-alliance/perdue-builders.png.asset.json";
import rockLogo from "@/assets/trade-alliance/rock-roofing.png.asset.json";
import squatchLogo from "@/assets/trade-alliance/squatch-roofing.png.asset.json";
import threeTreeLogo from "@/assets/trade-alliance/three-tree-roofing.svg.asset.json";
import doItRightLogo from "@/assets/trade-alliance/do-it-right-roofing.webp.asset.json";
import zeeLogo from "@/assets/trade-alliance/zee-construction.png.asset.json";
import pnwLogo from "@/assets/trade-alliance/pnw-drywall.png.asset.json";
import soundLogo from "@/assets/trade-alliance/sound-gutters.png.asset.json";
import hbPowerLogo from "@/assets/trade-alliance/hb-power-electric.jpg.asset.json";
import westCoastLogo from "@/assets/trade-alliance/west-coast-wallcovering.png.asset.json";
import benjaminsLogo from "@/assets/trade-alliance/benjamins-drywall.png.asset.json";
import heroLogo from "@/assets/trade-alliance/hero-plumbing.svg.asset.json";
import asbestosLogo from "@/assets/trade-alliance/asbestos-removal-puget-sound.webp.asset.json";

export interface AllianceCompany {
  id: string;
  name: string;
  trade: string;
  location?: string;
  website?: string;
  logo?: string;
  description?: string;
}

// List current partners only; never substitute a similarly named business.
const companies: AllianceCompany[] = [
  { id: "do-it-right-roofing", name: "Do It Right Roofing", trade: "Roofing", location: "Tacoma", website: "https://dir-roofing.com/", logo: doItRightLogo.url, description: "A family-owned roofing company serving the greater South Sound with residential and commercial roof repairs, replacements, maintenance, and gutter installation." },
  { id: "hello-electric", name: "Hello Electric", trade: "Electrical", location: "Bothell", website: "https://helloelectricsolutions.com/", logo: helloLogo.url, description: "Hello Electric is a family-owned electrical company serving homes and businesses. Services include panel upgrades, electrical design, generators, EV charging, and emergency electrical support." },
  { id: "perdue-builders", name: "Perdue Builders", trade: "General Contracting & Remodeling", location: "Bothell", website: "https://www.perduebuilders.net/", logo: perdueLogo.url, description: "Perdue Builders specializes in siding replacement and window and door upgrades for homeowners across the greater Seattle area, with a focus on durable exterior renovations." },
  { id: "pnw-drywall", name: "PNW Drywall Finishing & Painting", trade: "Drywall", location: "Bothell", website: "https://pnwdrywallfap.com/", logo: pnwLogo.url, description: "PNW Drywall Finishing & Painting offers drywall removal and installation, wall and ceiling insulation, smooth and Level 5 finishing, texturing, popcorn ceiling removal, and interior and exterior painting." },
  { id: "power-electric", name: "HB Power Electric", trade: "Electrical", location: "Bothell", website: "https://www.instagram.com/hbpowerelectric/", logo: hbPowerLogo.url, description: "Licensed electrical contractor based in Bothell, WA, handling residential electrical work including subpanels, generator hookups and EV charger installs." },
  { id: "rock-roofing", name: "Rock Roofing", trade: "Roofing", location: "Bothell", website: "https://www.rockroofing.com/", logo: rockLogo.url, description: "Rock Roofing serves residential homes and new construction projects in Bothell and surrounding communities. Services include roof replacement, re-roofing, repairs, and flat and sloped roof installation." },
  { id: "sound-gutters", name: "Sound Gutters & Roofing Co", trade: "Roofing & Gutters", location: "Bothell", website: "https://www.soundguttersandroofing.com/", logo: soundLogo.url, description: "Sound Gutters & Roofing Co. serves Bothell, Snohomish County, and King County with gutter installation, repair, maintenance, cleaning, and roofing services." },
  { id: "squatch-roofing", name: "Squatch Roofing", trade: "Roofing", location: "Woodinville", website: "https://squatchroofing.com/", logo: squatchLogo.url, description: "Based in Woodinville, Squatch Roofing serves greater Seattle and the Eastside with roof replacement, repairs, inspections, cleaning and maintenance, and gutter installation and repair." },
  { id: "three-tree-roofing", name: "Three Tree Roofing", trade: "Roofing", location: "Kent", website: "https://www.threetreeroofing.com/", logo: threeTreeLogo.url, description: "Three Tree Roofing serves the greater Seattle area with roof replacement and installation services for residential and commercial properties." },
  // Logo cropped from a screenshot of the site header (rendered as inline SVG, no downloadable file).
  { id: "west-coast-wallcovering", name: "West Coast Wallcovering", trade: "Wallpaper & Wallcovering", location: "Bothell", website: "https://www.westcoastwallcovering.com/", logo: westCoastLogo.url, description: "West Coast WallCoverings installs wallpaper and wall coverings, including custom murals, dry erase and whiteboard surfaces, and specialty wallpaper." },
  { id: "zee-construction", name: "Zee Construction", trade: "General Contracting & Remodeling", website: "https://www.zee-llc.com/", logo: zeeLogo.url, description: "Zee Design & Build offers residential remodeling, renovation, new construction, and commercial construction, with design and project planning from initial concept through completion." },
  { id: "asbestos-removal-puget-sound", name: "Asbestos Removal of Puget Sound", trade: "Asbestos Abatement", location: "Everett", website: "https://asbestosremovalofpugetsound.com/", logo: asbestosLogo.url, description: "A licensed, AHERA-certified asbestos testing and removal company that also tests for lead. Uses full containment and HEPA disposal across Snohomish, King and Pierce Counties." },
  { id: "benjamins-drywall", name: "Benjamins Drywall Inc", trade: "Drywall", location: "Snohomish", website: "https://www.facebook.com/interiorconstruction99/", logo: benjaminsLogo.url, description: "An established drywall contractor based in Snohomish, WA." },
  { id: "hero-plumbing", name: "Hero Plumbing LLC", trade: "Plumbing", location: "Lynnwood", website: "", logo: heroLogo.url, description: "A licensed plumbing contractor serving Lynnwood and the Snohomish County area." },
];

// Cloudflare Pages does not serve Lovable's relative asset endpoint.
// Resolve the existing immutable pointers against the published asset-serving origin.
export const allianceCompanies = companies.map(company => ({
  ...company,
  logo: company.logo ? new URL(company.logo, "https://arclightpainting.lovable.app").href : company.logo,
})).sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
export const hasCompleteCompanyData = (company: AllianceCompany) => Boolean(company.logo?.trim() && company.description?.trim()) // website optional; the link is hidden when absent;
export const visibleAllianceCompanies = allianceCompanies.filter(hasCompleteCompanyData);
export const directoryLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const firstCompanyForLetter = (letter: string) => visibleAllianceCompanies.find(company => company.name[0]?.toUpperCase() === letter.toUpperCase());
export const companyLinkLabel = (website: string) => {
  try {
    const host = new URL(website).hostname.toLowerCase().replace(/^www\./, "");
    if (host === "instagram.com" || host.endsWith(".instagram.com")) return "Visit on Instagram";
    if (host === "facebook.com" || host.endsWith(".facebook.com")) return "Visit on Facebook";
  } catch { /* fall through */ }
  return "Visit official website";
};
