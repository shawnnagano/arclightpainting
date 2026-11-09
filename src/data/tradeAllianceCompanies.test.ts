import { describe, expect, it } from "vitest";
import { allianceCompanies, directoryLetters, firstCompanyForLetter } from "./tradeAllianceCompanies";

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
    expect(firstCompanyForLetter("S")?.name).toBe("Sound Gutter and Roofing Co");
    expect(firstCompanyForLetter("B")).toBeUndefined();
  });
});