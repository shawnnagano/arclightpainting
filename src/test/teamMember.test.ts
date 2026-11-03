import { describe, expect, it } from "vitest";
import { teamMemberTerms } from "@/data/teamMember";

describe("approved Team Member terms", () => {
  it("starts pay at $23.18", () => { expect(teamMemberTerms.minimumPay).toBe(23.18); });
  it("ends pay at $37.46", () => { expect(teamMemberTerms.maximumPay).toBe(37.46); });
  it("prefers three years of experience", () => { expect(teamMemberTerms.preferredExperienceYears).toBe(3); });
  it("is Painter Level 2", () => { expect(teamMemberTerms.painterLevel).toBe(2); });
  it("includes W2 and 1099 employment", () => { expect(teamMemberTerms.employmentType).toBe("W2 / 1099"); });
});