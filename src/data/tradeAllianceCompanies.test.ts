import { describe, expect, it } from "vitest";
import { allianceCompanies, directoryLetters, firstCompanyForLetter, hasCompleteCompanyData, visibleAllianceCompanies } from "./tradeAllianceCompanies";

describe("Trade Alliance directory", () => {
  it("loads each existing logo from the published asset host rather than the Cloudflare page origin", () => {
    const logos = allianceCompanies.filter(company => company.logo);
    expect(logos).toHaveLength(15);
    for (const company of logos) {
      const url = new URL(company.logo ?? "");
      expect(url.origin).toBe("https://arclightpainting.lovable.app");
      expect(url.pathname.startsWith("/__l5e/assets-v1/")).toBe(true);
    }
  });
  it("retains all 21 companies without duplicating the roofing and gutters partner", () => {
    expect(allianceCompanies).toHaveLength(21);
    expect(allianceCompanies.filter(company => company.id === "sound-gutters")).toHaveLength(1);
  });
  it("sorts companies alphabetically", () => {
    expect(allianceCompanies.map(company => company.name)).toEqual(["AK Electric", "Amsberry's Painting", "Asbestos Removal of Puget Sound", "Benjamins Drywall Inc", "Do It Right Roofing", "Fridenmaker Painting", "HB Power Electric", "Hello Electric", "Hero Plumbing LLC", "Legacy Painting", "M&I Painting", "Perdue Builders", "PNW Drywall Finishing & Painting", "Queen Anne Painting", "Riverside Roofing", "Rock Roofing", "Sound Gutters & Roofing Co", "Squatch Roofing", "Three Tree Roofing", "West Coast Wallcovering", "Zee Construction"]);
  });
  it("provides all 26 letters and selects the first matching company", () => {
    expect(directoryLetters.join("")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    expect(firstCompanyForLetter("P")?.name).toBe("Perdue Builders");
    expect(firstCompanyForLetter("S")?.name).toBe("Sound Gutters & Roofing Co");
    expect(firstCompanyForLetter("A")?.name).toBe("Amsberry's Painting");
    expect(firstCompanyForLetter("B")).toBeUndefined();
  });
  it.each(["logo", "description", "website"] as const)("hides a company with missing or blank %s", field => {
    const complete = { id: "example", name: "Example", trade: "Roofing", logo: "/logo.png", description: "Roofing services", website: "https://example.com/" };
    expect(hasCompleteCompanyData(complete)).toBe(true);
    expect(hasCompleteCompanyData({ ...complete, [field]: undefined })).toBe(false);
    expect(hasCompleteCompanyData({ ...complete, [field]: "  " })).toBe(false);
  });
  it("shows only the 15 complete companies while preserving incomplete records", () => {
    expect(visibleAllianceCompanies.map(company => company.id)).toEqual(["amsberrys-painting", "asbestos-removal-puget-sound", "do-it-right-roofing", "fridenmaker-painting", "hello-electric", "legacy-painting", "perdue-builders", "pnw-drywall", "queen-anne-painting", "riverside-roofing", "rock-roofing", "sound-gutters", "squatch-roofing", "three-tree-roofing", "zee-construction"]);
    expect(allianceCompanies).toHaveLength(21);
  });
});