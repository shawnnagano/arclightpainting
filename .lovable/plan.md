

# Re-Audit: arclightpainting.com — Post-Improvement Scoring

**Target Keywords**: painter, painting company, commercial painting, exterior painting, interior painting, house painters

---

## Changes Since Last Audit

Three fixes were implemented:

1. **All 13 city hero images localized** — no more Wikimedia hotlinks. Every service area page now loads a local WebP asset.
2. **Article JSON-LD added to all blog posts** — `BlogPostDetail.tsx` now renders `articleSchema` with headline, datePublished, image, publisher, and breadcrumb structured data.
3. **Unique `cityServiceHighlights` added to all 13 city pages** — each city now has 2-3 paragraphs of locally-relevant content (architecture, climate, HOA factors) rendered as a dedicated section.

---

## Updated Scoring

### Technical SEO Integrity

**Previous: 72 → Updated: 76** | Confidence: Moderate

- **Improvement**: External image dependency eliminated. All assets now local WebP.
- **Remaining gaps**: SPA rendering risk persists (no SSR/pre-rendering). Client-side redirects (30+) are not server-side 301s. Sitemap `lastmod` dates have not been updated to reflect recent content changes.

### Local Search Strength

**Previous: 74 → Updated: 78** | Confidence: High

- **Improvement**: Every city page now has unique, substantive content covering local architecture, climate, and HOA factors — significantly reducing the boilerplate ratio from ~50% to ~30%. The unique content ratio is now strong enough to lift the cap.
- **Remaining gaps**: No city+service page combinations (e.g., /kirkland/interior-painting). Service pages still only reference Bothell. No city-specific project photos or testimonials tied to specific cities.

*Previous cap (74) is now lifted — unique content is no longer incomplete/uneven.*

### Market Persuasion

**Previous: 85 → Updated: 85** | Confidence: High

- **No change.** The three fixes were technical/content-focused, not persuasion-focused. Strengths and gaps remain the same.

### Content Quality & Coverage

**Previous: 73 → Updated: 77** | Confidence: High

- **Improvement**: City pages now have meaningfully unique content. Blog posts now have Article structured data improving content discoverability. The unique content ratio across city pages is substantially better.
- **Remaining gaps**: Blog posts still lack visible author/date in the UI. Multiple commercial painting blog posts still risk topic overlap. "Painting company" and "painter" keywords remain underserved on-page.

*Previous cap (74) is now lifted — content is no longer incomplete/generic.*

### AI Search Readiness

**Previous: 78 → Updated: 82** | Confidence: Moderate

- **Improvement**: Article JSON-LD on all 19 blog posts gives AI systems structured metadata to attribute and cite blog content. City pages with unique local content provide more groundable, cite-worthy answers.
- **Remaining gaps**: No Person schema for founders. No SSR/pre-rendering for AI crawlers. No "speakable" markup.

---

## Updated Final Score

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO Integrity | 76 | 0.25 | 19.0 |
| Local Search Strength | 78 | 0.30 | 23.4 |
| Market Persuasion | 85 | 0.25 | 21.25 |
| Content Quality & Coverage | 77 | 0.20 | 15.4 |
| **Weighted Base Score** | | | **79.05** |

**Penalties**: None triggered.

**AI Search Readiness**: 82 (informational)

**Final Score: 79** (up from 76)

**Interpretation: Competitive** — approaching the Strong band. Three more targeted fixes can push the site into 80+ territory.

---

## Next 3 Top Fixes

### Fix 1: Add visible publish date and author byline to blog posts

**Why this matters**: Blog posts have `datePublished` in JSON-LD but show no visible date or author in the UI. Google's E-E-A-T guidelines favor content with visible authorship and freshness signals. This is the easiest lift with the highest E-E-A-T return.

**What to change**: Add a visible date and "By Arclight Painting" byline below the H1 in `BlogPostDetail.tsx`. Format the date for readability (e.g., "January 15, 2025").

**Expected result**: Improved E-E-A-T signals, better content trust for both users and search engines. Supports the AI Search Readiness score by making authorship explicit in rendered content.

**Lovable Implementation Prompt**:

> **Role**: Web developer and SEO optimizer
> **Goal**: Add visible publish date and author byline to all blog post pages
> **Pages involved**: `src/pages/BlogPostDetail.tsx`
> **Keep**: Existing hero layout, H1 styling, back-to-blog link
> **Build**: Below the H1 in the hero section, add a line showing the formatted publish date and author name ("By Arclight Painting"). Style it as white/80 text, small size, consistent with the hero overlay aesthetic. Use the post's `date` field, formatted as "Month Day, Year".
> **SEO requirements**: Date must be human-readable and match the datePublished in JSON-LD
> **UX requirements**: Subtle, not competing with the H1. White text on the dark hero overlay.

---

### Fix 2: Naturally integrate "painter" and "painting company" keywords into homepage and About page copy

**Why this matters**: Two of the six target keywords — "painter" and "painting company" — appear in zero H1s, H2s, or meta descriptions. The homepage H1 uses "House Painters" but never "painting company." The About page uses neither phrase. These are high-volume head terms that the site is leaving on the table.

**What to change**: 
- Homepage: Add "painting company" naturally to the meta description or a secondary heading (e.g., a subheadline or section header like "Why Homeowners Choose Arclight as Their Painting Company").
- About page: Include "painting company" in the page's meta description and at least one visible heading or paragraph. Add "painter" naturally in team/story copy.
- Keep changes minimal and natural — no keyword stuffing.

**Expected result**: Better keyword coverage for two underserved head terms without disrupting existing page quality.

**Lovable Implementation Prompt**:

> **Role**: SEO copywriter and developer
> **Goal**: Integrate "painter" and "painting company" keywords into homepage and About page
> **Pages involved**: `src/pages/Index.tsx`, `src/pages/About.tsx`
> **Keep**: All existing H1s, section structure, visual design
> **Build**: 
> - In `Index.tsx` SEOHead, work "painting company" into the meta description naturally (e.g., "Arclight Painting is Bothell's highest-rated painting company...").
> - In `About.tsx`, update the meta description to include "painting company." Add "painter" naturally in at least one visible paragraph or heading (e.g., "What sets Arclight apart as a painter...").
> **Content requirements**: Must read naturally. No forced repetition.
> **SEO requirements**: Each keyword should appear at least once in meta description and once in visible page content.

---

### Fix 3: Update sitemap.xml lastmod dates to reflect recent content changes

**Why this matters**: All service area pages and core pages show `lastmod` of `2026-04-10`, which predates the content updates (hero images, cityServiceHighlights, Article schema). Stale lastmod dates signal to crawlers that pages haven't changed, potentially delaying re-crawling and re-indexing of improved content.

**What to change**: Update `lastmod` for all 13 service area pages and blog listing page to today's date. Keep blog post dates as-is (they reflect original publish dates).

**Expected result**: Search engines re-crawl updated city pages sooner, picking up the new unique content and localized images.

**Lovable Implementation Prompt**:

> **Role**: SEO developer
> **Goal**: Update sitemap.xml lastmod dates for recently modified pages
> **Pages involved**: `public/sitemap.xml`
> **Keep**: All existing URLs, priorities, changefreq values
> **Build**: Update `lastmod` to `2026-04-12` for: all 13 service area URLs, the homepage, the blog index page, and all service pages. Leave blog post lastmod dates unchanged.
> **SEO requirements**: Dates must be valid ISO 8601 format (YYYY-MM-DD)

---

## Score Projection After These 3 Fixes

| Category | Current | Projected |
|---|---|---|
| Technical SEO | 76 | 78 |
| Local Search | 78 | 79 |
| Market Persuasion | 85 | 85 |
| Content Quality | 77 | 80 |
| **Final Score** | **79** | **81** |
| AI Search Readiness | 82 | 83 |

These three fixes would push the site into the **Strong (80-89)** band.

