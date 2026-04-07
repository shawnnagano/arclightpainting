
## Consolidated Plan: Blog Migration, Redirects & SEO Cleanup

### ✅ Already Completed
- Location pages moved to root-level URLs (`/bothell`, `/kirkland`, etc.)
- `/service-area` directory page removed
- `/service-area/:slug` redirects to `/:slug`
- Sitemap, footer, SEO schema updated for root-level location URLs

---

### 1. Migrate 24 Blog Posts as Internal Pages (Root-Level URLs)

Create each blog post as its own page component with full content (scraped from the old WordPress site), using root-level routes to match the legacy URL structure.

**Blog posts to migrate:**
1. `/neutral-paint-colors/`
2. `/hire-professional-painters/`
3. `/top-quality-paints/`
4. `/painting-wall-and-ceiling/`
5. `/timeless-paint-colors/`
6. `/painters-in-bothell/`
7. `/bothell-painting-company/`
8. `/exterior-painting-bothell/`
9. `/house-painters-in-bothell/`
10. `/how-much-does-it-cost-to-paint-a-house/`
11. `/paint-color-trends-2025/`
12. `/best-paint-for-high-traffic-areas/`
13. `/best-interior-painting/`
14. `/how-to-pick-a-front-door-color/`
15. `/professional-interior-painting/`
16. `/what-is-a-painting-contract/`
17. `/how-to-choose-a-painting-company/`
18. `/how-to-pick-exterior-paint-colors/`
19. `/is-it-worth-it-to-hire-a-painter/`
20. `/should-i-paint-my-house-before-selling/`
21. `/how-long-does-exterior-paint-last/`
22. `/do-painters-move-furniture/`
23. `/how-long-does-it-take-to-paint-a-room/`
24. `/how-long-does-it-take-to-paint-a-house/`

**Approach:**
- Create a shared `BlogPost` layout component for consistent styling (header, footer, SEO, breadcrumbs)
- Create a `src/data/blogPosts.ts` data file with all post content (title, body HTML/markdown, excerpt, featured image, date, slug)
- Create a single `src/pages/BlogPostDetail.tsx` component that renders from the data
- Add explicit routes in `App.tsx` for each blog slug
- Update `src/pages/Blog.tsx` to link internally instead of externally
- Add all 24 URLs to `public/sitemap.xml`

**Content:** Scrape each post from the live WordPress site to capture full text and images.

---

### 2. Add Redirect Routes in App.tsx

Add `<Navigate>` redirects for legacy WordPress URLs that have moved:

| Old URL | New URL | Reason |
|---------|---------|--------|
| `/service-area` | `/` | Directory page removed |
| `/service-area/:slug` | `/:slug` | Location pages now root-level |
| `/about-new` | `/about` | Staging URL cleanup |
| `/interior-painting/` | `/services/interior-painting` | Legacy service URLs |
| `/exterior-painting/` | `/services/exterior-painting` | Legacy service URLs |
| `/cabinet-refinishing/` | `/services/cabinet-refinishing` | Legacy service URLs |
| `/drywall-repair/` | `/services/drywall-repairs` | Legacy service URLs |
| `/pressure-washing/` | `/services/pressure-washing` | Legacy service URLs |
| `/commercial-painting/` | `/services/commercial-painting` | Legacy service URLs |
| `/popcorn-ceiling-removal/` | `/services/popcorn-ceiling-removal` | Legacy service URLs |
| `/color-consultation/` | `/services/color-consultation` | Legacy service URLs |

---

### 3. Update Sitemap

- Add all 24 blog post URLs to `public/sitemap.xml`
- Verify all existing entries use correct current paths

---

### 4. Update Blog Listing Page

- Change `src/pages/Blog.tsx` from external links to internal `<Link>` components
- Show all 24 posts with excerpts and featured images
- Order by date (newest first)

---

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/data/blogPosts.ts` | **Create** — all 24 posts' content |
| `src/pages/BlogPostDetail.tsx` | **Create** — shared blog post renderer |
| `src/App.tsx` | **Modify** — add 24 blog routes + legacy redirects |
| `src/pages/Blog.tsx` | **Modify** — internal links, all 24 posts |
| `public/sitemap.xml` | **Modify** — add blog URLs |
| `src/components/SEOHead.tsx` | **Modify** — add `blogPostSchema` helper |

### Execution Order
1. Scrape all 24 blog posts from WordPress
2. Create `blogPosts.ts` data file
3. Create `BlogPostDetail.tsx` component
4. Update `App.tsx` with blog routes + all redirects
5. Update `Blog.tsx` listing page
6. Update sitemap
7. Verify all routes work
