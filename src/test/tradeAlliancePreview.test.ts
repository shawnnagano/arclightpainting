import { describe, expect, it } from "vitest";
import { canRenderTradeAlliance, TRADE_ALLIANCE_PREVIEW_ONLY } from "@/lib/tradeAlliancePreview";

describe("Trade Alliance preview-only access", () => {
  it("keeps the launch flag enabled", () => {
    expect(TRADE_ALLIANCE_PREVIEW_ONLY).toBe(true);
  });
  it.each(["draft.lovable.app", "draft.lovableproject.com", "localhost", "127.0.0.1"])("allows preview host %s", hostname => {
    expect(canRenderTradeAlliance(hostname)).toBe(true);
  });
  it.each(["arclightpainting.com", "www.arclightpainting.com", "example.com", "lovable.app", "lovableproject.com", "draft.lovable.app.example.com", "notlovable.app"])("blocks non-preview host %s", hostname => {
    expect(canRenderTradeAlliance(hostname)).toBe(false);
  });
});