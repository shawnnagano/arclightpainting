import { describe, expect, it } from "vitest";
import { subcontractorFAQGroups, subcontractorTerms } from "@/data/subcontracting";

describe("approved subcontractor terms", () => {
  it("splits $10,000 labor equally, giving the subcontractor $5,000", () => { expect(10000 * subcontractorTerms.laborShare).toBe(5000); });
  it("pays on Net 10 terms", () => { expect(subcontractorTerms.invoiceDays).toBe(10); });
  it("requires at least three years of experience", () => { expect(subcontractorTerms.minimumExperienceYears).toBe(3); });
  it("limits travel to 45 minutes from Bothell", () => { expect(subcontractorTerms.travelMinutes).toBe(45); });
  it("requires an average communication score of three", () => { expect(subcontractorTerms.communicationScore).toBe(3); });
  it("requires a resume", () => { expect(subcontractorTerms.resumeRequired).toBe(true); });
  it("has no application fee", () => { expect(subcontractorTerms.applicationFee).toBe(0); });
  it("routes specialty applications to the approved form in both FAQ content and schema", () => {
    const faq = subcontractorFAQGroups.flatMap(group => group.faqs).find(item => item.question === "How do I apply?");
    const link = faq?.content?.links?.find(item => item.label === "Specialty Subcontractor Application");
    expect(link?.href).toBe("https://link.arclightpainting.com/widget/form/ygJUMoN8RQmpqR7NysKp");
    expect(faq?.answer).toContain("https://link.arclightpainting.com/widget/form/ygJUMoN8RQmpqR7NysKp");
  });
});