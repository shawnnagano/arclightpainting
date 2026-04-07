

## SEO Improvements — Phase 1

### What We're Doing

Four targeted fixes that improve how search engines and AI systems understand and index the site. The GlobalReviewWidget iframe stays exactly as-is on every page.

### Changes

**1. Fix duplicate meta tags in `index.html`** (lines 16-23)
Remove the hardcoded OG/Twitter meta tags from `index.html`. These duplicate what `SEOHead.tsx` already sets per-page via `react-helmet-async`, and the hardcoded versions override the dynamic ones for crawlers that read raw HTML first. Keep only `<title>`, `<meta name="description">`, `<link rel="canonical">`, and `<meta name="author">` as fallbacks.

**2. Fix relative image URL in `localBusinessSchema`** (`SEOHead.tsx` line 65)
Change `image: "/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png"` to `image: "https://arclightpainting.com/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png"` — Google requires absolute URLs in structured data.

**3. Add `WebSite` and `Organization` schemas** (`SEOHead.tsx`)
Add two new exported schema objects:
- `websiteSchema` — tells Google this is a website with a name and URL (enables sitelinks search box eligibility)
- `organizationSchema` — reinforces brand entity with logo, contact info, and social profiles

These will be included on the homepage via `Index.tsx`.

**4. Add `<lastmod>` dates to `sitemap.xml`**
Add `<lastmod>` tags to all entries. Blog posts get their published dates; static pages get today's date. This helps Google prioritize re-crawling recently updated content.

### Files Modified

| File | Change |
|------|--------|
| `index.html` | Remove lines 16-23 (duplicate OG/Twitter tags) |
| `src/components/SEOHead.tsx` | Fix schema image URL to absolute; add `websiteSchema` and `organizationSchema` exports |
| `src/pages/Index.tsx` | Add `websiteSchema` and `organizationSchema` to `jsonLd` array |
| `public/sitemap.xml` | Add `<lastmod>` to all ~66 entries |

### Not Touched

- `GlobalReviewWidget.tsx` — no changes, keeps loading on every page
- No design, layout, or content changes

