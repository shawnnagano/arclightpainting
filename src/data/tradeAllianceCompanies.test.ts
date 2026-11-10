import { describe, expect, it } from "vitest";
import { allianceCompanies, companyLinkLabel, directoryLetters, firstCompanyForLetter, hasCompleteCompanyData, visibleAllianceCompanies } from "./tradeAllianceCompanies";

describe("Trade Alliance directory", () => {
  it("loads each existing logo from the published asset host rather than the Cloudflare page origin", () => {
    const logos = allianceCompanies.filter(company => company.logo);
    expect(logos).toHaveLength(19);
    for (const company of logos) {
      const url = new URL(company.logo ?? "");
      expect(url.origin).toBe("https://arclightpainting.lovable.app");
      expect(url.pathname.startsWith("/__l5e/assets-v1/")).toBe(true);
    }
  });
  it("lists 19 current companies", () => {
    expect(allianceCompanies).toHaveLength(19);
  });
  it.each(["riverside-roofing", "ak-electric"])("excludes former partner %s", id => {
    expect(allianceCompanies.some(company => company.id === id)).toBe(false);
  });
  it("keeps Sound Gutters & Roofing Co as one roofing and gutters partner", () => {
    expect(allianceCompanies.filter(company => company.id === "sound-gutters")).toHaveLength(1);
    expect(allianceCompanies.find(company => company.id === "sound-gutters")?.trade).toBe("Roofing & Gutters");
  });
  it("sorts companies alphabetically", () => {
    expect(allianceCompanies.map(company => company.name)).toEqual(["Amsberry's Painting", "Asbestos Removal of Puget Sound", "Benjamins Drywall Inc", "Do It Right Roofing", "Fridenmaker Painting", "HB Power Electric", "Hello Electric", "Hero Plumbing LLC", "Legacy Painting", "M&I Painting", "Perdue Builders", "PNW Drywall Finishing & Painting", "Queen Anne Painting", "Rock Roofing", "Sound Gutters & Roofing Co", "Squatch Roofing", "Three Tree Roofing", "West Coast Wallcovering", "Zee Construction"]);
  });
  it("provides all 26 letters and selects the first matching company", () => {
    expect(directoryLetters.join("")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    expect(firstCompanyForLetter("P")?.name).toBe("Perdue Builders");
    expect(firstCompanyForLetter("S")?.name).toBe("Sound Gutters & Roofing Co");
    expect(firstCompanyForLetter("A")?.name).toBe("Amsberry's Painting");
    expect(firstCompanyForLetter("B")?.name).toBe("Benjamins Drywall Inc");
    expect(firstCompanyForLetter("C")).toBeUndefined();
  });
  it.each(["logo", "description"] as const)("hides a company with missing or blank %s", field => {
    const complete = { id: "example", name: "Example", trade: "Roofing", logo: "/logo.png", description: "Roofing services", website: "https://example.com/" };
    expect(hasCompleteCompanyData(complete)).toBe(true);
    expect(hasCompleteCompanyData({ ...complete, [field]: undefined })).toBe(false);
    expect(hasCompleteCompanyData({ ...complete, [field]: "  " })).toBe(false);
  });
  it("shows a company with logo and description but no website", () => {
    expect(hasCompleteCompanyData({ id: "x", name: "X", trade: "Plumbing", logo: "/l.svg", description: "Plumbing", website: "" })).toBe(true);
    expect(visibleAllianceCompanies.find(company => company.id === "hero-plumbing")?.website).toBe("");
  });
  it("shows all 19 companies", () => {
    expect(visibleAllianceCompanies).toHaveLength(19);
    expect(allianceCompanies.filter(company => !hasCompleteCompanyData(company))).toEqual([]);
  });
});

describe("companyLinkLabel", () => {
  it("labels social profiles by domain and keeps the default otherwise", () => {
    expect(companyLinkLabel("https://www.instagram.com/hbpowerelectric/")).toBe("Visit on Instagram");
    expect(companyLinkLabel("https://www.facebook.com/interiorconstruction99/")).toBe("Visit on Facebook");
    expect(companyLinkLabel("http://www.mandipaintingwa.com/")).toBe("Visit official website");
  });
});
