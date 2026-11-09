import { describe, expect, it } from "vitest";
import { allianceCompanies, directoryLetters, firstCompanyForLetter, hasCompleteCompanyData, visibleAllianceCompanies } from "./tradeAllianceCompanies";

describe("Trade Alliance directory", () => {
  it("retains all 14 companies without duplicating the roofing and gutters partner", () => {
    expect(allianceCompanies).toHaveLength(14);
    expect(allianceCompanies.filter(company => company.id === "sound-gutters")).toHaveLength(1);
  });
  it("sorts companies alphabetically", () => {
    expect(allianceCompanies.map(company => company.name)).toEqual(["AK Electric", "Do It Right Roofing", "Hello Electric", "M&I Painting", "Perdue Builders", "PNW Drywall Finishing & Painting", "Power Electric", "Riverside Roofing", "Rock Roofing", "Sound Gutter and Roofing Co", "Squatch Roofing", "Three Tree Roofing", "West Coast Wallcovering", "Zee Construction"]);
  });
  it("provides all 26 letters and selects the first matching company", () => {
    expect(directoryLetters.join("")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    expect(firstCompanyForLetter("P")?.name).toBe("Perdue Builders");
    expect(firstCompanyForLetter("S")?.name).toBe("Squatch Roofing");
    expect(firstCompanyForLetter("A")).toBeUndefined();
    expect(firstCompanyForLetter("B")).toBeUndefined();
  });
  it.each(["logo", "description", "website"] as const)("hides a company with missing or blank %s", field => {
    const complete = { id: "example", name: "Example", trade: "Roofing", logo: "/logo.png", description: "Roofing services", website: "https://example.com/" };
    expect(hasCompleteCompanyData(complete)).toBe(true);
    expect(hasCompleteCompanyData({ ...complete, [field]: undefined })).toBe(false);
    expect(hasCompleteCompanyData({ ...complete, [field]: "  " })).toBe(false);
  });
  it("shows only the eight complete companies while preserving incomplete records", () => {
    expect(visibleAllianceCompanies.map(company => company.id)).toEqual(["do-it-right-roofing", "hello-electric", "perdue-builders", "pnw-drywall", "rock-roofing", "squatch-roofing", "three-tree-roofing", "zee-construction"]);
    expect(allianceCompanies).toHaveLength(14);
  });
});