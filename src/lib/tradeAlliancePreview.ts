// Public launch approved; keep the gate available for a future preview-only rollback.
export const TRADE_ALLIANCE_PREVIEW_ONLY = false;

export function canRenderTradeAlliance(hostname: string): boolean {
  return !TRADE_ALLIANCE_PREVIEW_ONLY ||
    (hostname.startsWith("id-preview--") || hostname.startsWith("id-preview-")) && hostname.endsWith(".lovable.app") ||
    hostname.endsWith(".lovableproject.com") ||
    hostname === "localhost" ||
    hostname === "127.0.0.1";
}