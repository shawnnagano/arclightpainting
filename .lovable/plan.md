

## Add 5 Missing Legacy Redirects

**Problem**: Five URLs in Google Search Console show as "Page with redirect" or are hitting the catch-all 404 instead of proper redirects. Adding explicit redirects ensures Google consolidates link equity to the correct pages.

**Changes**: Add 5 redirect routes to `src/App.tsx` above the catch-all `*` route:

| Legacy URL | Redirect to |
|---|---|
| `/home` | `/` |
| `/House` | `/` |
| `/commercial` | `/services/commercial-painting` |
| `/trusted-professionals` | `/about` |
| `/4-versatile-neutral-paint-colors-that-arent-white` | `/neutral-paint-colors` |
| `/5-paint-color-trends-taking-over-winter-2025-according-to-designers` | `/paint-color-trends-2025` |

**Note**: The existing `/5-paint-color-trends-` route only matches that exact path, not the full WordPress slug. Adding the full slug ensures it redirects properly.

**File modified**: `src/App.tsx` only — 6 new `<Route>` lines added in the legacy redirects section.

**Everything else in the "Page with redirect" list** (http→https, www→non-www, trailing slashes, `/pricing`, `/schedule`, etc.) is handled at the hosting/DNS level and is completely normal. No action needed for those.

