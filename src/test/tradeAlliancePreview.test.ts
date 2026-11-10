import { describe, expect, it } from "vitest";
import { canRenderTradeAlliance, TRADE_ALLIANCE_PREVIEW_ONLY } from "@/lib/tradeAlliancePreview";

describe("Trade Alliance public launch access", () => {
  it("disables the preview-only launch flag after approval", () => {
    expect(TRADE_ALLIANCE_PREVIEW_ONLY).toBe(false);
  });
  it.each(["id-preview--234bfa9b.lovable.app", "id-preview-7381bd65--234bfa9b.lovable.app", "draft.lovableproject.com", "localhost", "127.0.0.1"])("allows preview host %s", hostname => {
    expect(canRenderTradeAlliance(hostname)).toBe(true);
  });
  it.each(["arclightpainting.com", "www.arclightpainting.com", "arclightpainting.lovable.app", "draft.lovable.app", "example.com", "lovable.app", "lovableproject.com", "id-preview--draft.lovable.app.example.com", "notlovable.app"])("allows public host %s after launch", hostname => {
    expect(canRenderTradeAlliance(hostname)).toBe(true);
  });
});