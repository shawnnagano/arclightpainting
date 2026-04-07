

# Full Production-Grade Audit Report & Implementation Plan

## A. Executive Summary

| Area | Score |
|------|-------|
| Overall Site Health | 7.5/10 |
| Code Quality | 7/10 |
| SEO | 8/10 |
| AIEO | 7/10 |
| Conversion | 8/10 |

The site is well-built for a local service business with strong SEO fundamentals, good content quality, and solid component architecture. The issues found are mostly minor — dead code, externally-hosted images that should be localized, duplicate comments, an unused component, and some schema gaps. Nothing is critically broken.

---

## B. Issues Found

### CRITICAL
None.

### HIGH

1. **Service area hero images are externally hotlinked from Wikimedia Commons.** All 13 service area pages pull hero images from `upload.wikimedia.org`. These can break at any time if Wikimedia changes URLs, rate-limits, or the images are deleted. This is the single biggest reliability risk on the site.

2. **GlobalReviewWidget iframe loaded on EVERY page** (via App.tsx, outside Routes). This loads a third-party iframe from `reputationhub.site` on every single page, even pages that already have their own review widget (Reviews page has a second, different widget). This adds unnecessary load time to all pages and creates duplicate review widget rendering on /reviews.

3. **`tickerServices` array in Header.tsx is dead code.** Defined on lines 7-24 but never used anywhere — the scrolling ticker was removed per brand guidelines. This is 18 lines of dead data.

4. **`NavLink` component (`src/components/NavLink.tsx`) is completely unused.** No file in the project imports it. Dead file.

### MEDIUM

5. **Duplicate/stale comments in ServiceDetail.tsx** — lines 253-255 have `{/* 4. USPs / Values */}` immediately followed by `{/* 5. USPs / Values */}`. Copy-paste artifact.

6. **Duplicate `{/* FAQ */}` comments in Pricing.tsx** — lines 131-133 have two consecutive `{/* FAQ */}` comments.

7. **Unused variables in Reviews.tsx** — `overallRating` and `totalReviews` constants (lines 9-10) are defined but never rendered. Star import is also unused.

8. **`App.css` is effectively empty** — contains only a single CSS comment. Dead file.

9. **Footer logo uses external-style path** — `/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png` — this file exists in public but the logo should ideally be the same imported asset used in the Header (`arclight-logo.png`) for consistency and Vite hashing benefits.

10. **Blog post schema `image` field uses relative paths** — BlogPostDetail.tsx JSON-LD uses `post.image` which are relative paths like `/images/wp-content/...`. Schema.org requires absolute URLs for `image` fields.

11. **Blog post schema `logo.url` is a relative path** — publisher logo in BlogPostDetail line 42 uses `/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png` instead of a full URL.

12. **`localBusinessSchema` image uses a relative path** — `/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png` in SEOHead.tsx should be an absolute URL.

13. **Missing `WebSite` schema** — no sitewide `WebSite` schema with `SearchAction` or `potentialAction`, which helps AI engines and Google understand site structure.

14. **Missing `Organization` schema** — only `HousePainter` (LocalBusiness) exists; an explicit Organization schema would strengthen entity recognition.

15. **`placeholder.svg` in public/ is unused** — leftover from project scaffolding.

16. **Sitemap missing `<lastmod>` dates** — all URLs lack `<lastmod>`, reducing crawl efficiency signals.

17. **`index.html` has duplicate OG/Twitter meta tags** — both index.html and SEOHead component emit `og:title`, `og:description`, `og:image`, `twitter:title`, etc. On the homepage, react-helmet-async should override, but on initial SSR/pre-render the duplication is messy.

### LOW

18. **`services` breadcrumb points to `/services`** which redirects to `/` — ServiceDetail breadcrumb schema has `{ name: "Services", url: "/services" }` but `/services` is a redirect, not a real page.

19. **FAQ section uses CSS `max-h-0`/`max-h-96` for collapse** — works fine but `max-h-96` (24rem) may truncate very long answers. Should be a larger value or use a ref-based height.

20. **Missing `alt` text on OwnersSection image** — says "Owners of Arclight Painting" which is acceptable but could be more descriptive: "Shawn Nagano and Jennifer Pattison, owners of Arclight Painting."

21. **`framer-motion` used for basic fade-in animations** — adds ~30KB to bundle. Not a bug, but worth noting for performance.

22. **No explicit `<noscript>` fallback** — JavaScript-only SPA with no prerendering. Acceptable for this site type.

23. **Blog `externalUrl` field exists on interface but no posts use it** — minor dead interface property.

24. **`useMemo` in Schedule.tsx is imported but not used** (line 1 imports it but it's not called).

---

## C. Implementation Plan

### Phase 1: Localize Service Area Hero Images (HIGH PRIORITY)
Download all 13 Wikimedia Commons images, optimize to WebP (1920px max, 82% quality), save to `src/assets/` with descriptive filenames (e.g., `bothell-main-street-landmark.webp`), and update `serviceAreas.ts` to use imported assets instead of external URLs.

**Files changed:** 13 new image assets, `src/data/serviceAreas.ts`

### Phase 2: Dead Code & Unused Files Cleanup
- Remove `tickerServices` array from `Header.tsx`
- Delete `src/components/NavLink.tsx`
- Delete `src/App.css` and remove its import from wherever referenced
- Remove unused `overallRating`, `totalReviews`, and `Star` import from `Reviews.tsx`
- Remove `useMemo` import from `Schedule.tsx`
- Remove duplicate comments in `ServiceDetail.tsx` (lines 253-254)
- Remove duplicate `{/* FAQ */}` comment in `Pricing.tsx` (line 132)
- Delete `public/placeholder.svg`

**Files changed:** Header.tsx, Reviews.tsx, Schedule.tsx, ServiceDetail.tsx, Pricing.tsx; delete NavLink.tsx, App.css, placeholder.svg

### Phase 3: GlobalReviewWidget Optimization
Move the GlobalReviewWidget out of the global App.tsx render and only include it on pages that need it (or keep it global but exclude it from the Reviews page to avoid double-widget). Evaluate whether it's needed on every page or just specific ones.

**Files changed:** `App.tsx`, potentially individual page files

### Phase 4: Schema & Structured Data Fixes
- Make all schema `image` and `logo` URLs absolute (prepend `https://arclightpainting.com`)
- Add `WebSite` schema to homepage
- Add `Organization` schema (can be combined with existing LocalBusiness)
- Fix breadcrumb `/services` to point to `/` or remove the intermediate crumb
- Unify footer logo to use the same imported asset as the header

**Files changed:** `SEOHead.tsx`, `BlogPostDetail.tsx`, `Index.tsx`, `Footer.tsx`

### Phase 5: Sitemap Enhancement
Add `<lastmod>` dates to all sitemap entries. Use realistic dates based on content freshness.

**Files changed:** `public/sitemap.xml`

### Phase 6: index.html Meta Cleanup
Remove the hardcoded OG/Twitter meta tags from `index.html` since `react-helmet-async` handles them per-page. Keep only the basic `<title>` and `<meta description>` as fallbacks.

**Files changed:** `index.html`

### Phase 7: Minor Quality Improvements
- Improve OwnersSection alt text
- Increase FAQ `max-h-96` to `max-h-[1000px]` to prevent truncation of long answers
- Remove unused `externalUrl` from BlogPost interface if no posts use it

**Files changed:** `OwnersSection.tsx`, `FAQSection.tsx`, `blogPosts.ts`

---

## D. Manual Review Needed

1. **Blog content accuracy** — 20 blog posts with substantial content; human review needed for factual claims, brand voice, and any outdated information.
2. **Testimonial authenticity** — large volume of service-specific testimonials in TestimonialsSection.tsx. Verify these match actual Google reviews.
3. **Pricing calculator embed** (`app.priceguide.ai`) — third-party dependency. Verify it's current and the account is active.
4. **Review widget accounts** — two different widget IDs used (GlobalReviewWidget vs Reviews page widget). Confirm both are intended.
5. **Job listings** — salary ranges and application URLs in JoinOurTeam.tsx need periodic human updates.
6. **Legal review** — Privacy Policy "Last Updated: 12/24/2024" may need refreshing.
7. **Color Consultation page** — uses `colorConfidenceHero` but should verify the alt image (`color-confidence-hero-alt.webp`) in assets isn't a duplicate.

---

## E. Recommended Next Improvements (Top 10, by Impact)

1. **Localize all 13 service area hero images from Wikimedia** — eliminates the biggest single-point-of-failure risk
2. **Remove GlobalReviewWidget from every-page rendering** — improves load time on all pages
3. **Fix all schema URLs to be absolute** — directly impacts rich results and AI citation accuracy
4. **Add WebSite + Organization schema** — strengthens entity recognition for AI search
5. **Clean all dead code** — reduces bundle size slightly, improves maintainability
6. **Add `<lastmod>` to sitemap** — signals freshness to crawlers
7. **Prerender critical pages** (homepage, top services) with a service like `react-snap` — improves SEO for non-JS crawlers and Core Web Vitals
8. **Lazy-load framer-motion** or replace with CSS animations — saves ~30KB from initial bundle
9. **Add `rel="noopener noreferrer"` audit** on all external links — some `<a>` tags with `target="_blank"` may be missing these
10. **Create a proper 404 page** with Header/Footer, search suggestions, and links to popular pages — current 404 is bare-bones and misses branding/conversion opportunity

