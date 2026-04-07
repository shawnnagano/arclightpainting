

## Plan: Migrate Remaining 9 External Blog Posts

### What's Happening Now
11 of 24 blog posts are hosted internally with full content. These 9 still link externally to the old WordPress site:

1. `/local-commercial-painters/`
2. `/how-to-paint-a-room/`
3. `/commercial-painting-cost/`
4. `/bad-paint-job/`
5. `/small-house-color-ideas/`
6. `/types-of-commercial-painting-services/`
7. `/color-psychology-in-commercial-painting/`
8. `/peeling-paint-in-commercial-buildings/`
9. `/how-long-after-painting-can-i-sleep-in-the-room/`

### What Changes

**Step 1: Scrape content** from each of the 9 URLs on the old WordPress site.

**Step 2: Update `src/data/blogPosts.ts`**
- Replace each post's `externalUrl` property with a `content` property containing the scraped markdown.

**Step 3: Update `src/App.tsx`**
- The existing route mapping (`blogPosts.filter(p => p.content).map(...)`) will automatically pick up the new posts — no route changes needed.

**Step 4: Update `public/sitemap.xml`**
- Add the 9 new internal blog URLs.

**Step 5: Update `src/pages/Blog.tsx`**
- These posts will automatically switch from external `<a>` tags to internal `<Link>` components (the existing logic already handles this based on `externalUrl` vs `content`).

### Result
All 24 blog posts hosted internally at root-level URLs, no external dependencies on the old WordPress site.

