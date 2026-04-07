

## Consolidate Duplicate & Legacy Page Architecture

### Problem

The router in `App.tsx` has duplicate and legacy routes that serve identical content at multiple URLs, which dilutes SEO authority and confuses crawlers:

1. **`/about-new`** — serves the same `<About />` component as `/about`. No internal links point to it, but it's publicly accessible.
2. **Legacy service redirects** (lines 81-88) — `/interior-painting`, `/exterior-painting`, etc. redirect to `/services/*`. These are correct 301-equivalent redirects and should stay for now.
3. **`/service-area/:slug`** and **`/service-area`** — redirect to root-level slugs. Also correct redirects.
4. **`src/pages/Services.tsx`** — a standalone Services page file that is never imported or routed. Dead code.

### What to Change

**1. Remove `/about-new` duplicate route** (App.tsx, line 61)
- Delete the line `<Route path="/about-new" element={<About />} />`
- Replace with a redirect: `<Route path="/about-new" element={<Navigate to="/about" replace />} />`
- This preserves any existing external links while consolidating authority to `/about`

**2. Delete unused `src/pages/Services.tsx`**
- This file is never imported or routed — it's dead code that could cause confusion

**3. Verify sitemap excludes legacy paths**
- Already confirmed: `sitemap.xml` only lists canonical URLs. No changes needed.

**4. Keep existing legacy redirects**
- The `/interior-painting → /services/interior-painting` redirects and `/service-area/:slug` redirects are correct and should remain to preserve backlink equity from the old WordPress site.

### Summary of Changes

| File | Action |
|------|--------|
| `src/App.tsx` | Change `/about-new` from rendering `<About />` to redirecting to `/about` |
| `src/pages/Services.tsx` | Delete file (unused dead code) |

This is a small, low-risk cleanup. All internal links already point to canonical URLs — only the router entries need tidying.

