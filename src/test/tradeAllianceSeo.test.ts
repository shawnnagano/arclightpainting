import { describe, expect, it } from "vitest";

describe("Trade Alliance launch discovery", () => {
  it("includes the public page exactly once in the shared sitemap and prerender routes", async () => {
    const modulePath = `${process.cwd()}/scripts/seo-routes.mjs`;
    const { getSeoRoutes } = await import(/* @vite-ignore */ modulePath);
    const routes = getSeoRoutes().filter((route: { path: string }) => route.path === "/trade-alliance");
    expect(routes).toHaveLength(1);
    expect(routes[0].canonical).toBe("https://arclightpainting.com/trade-alliance");
  });
});