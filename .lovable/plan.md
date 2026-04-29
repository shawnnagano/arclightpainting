Bing is flagging this because the live HTML currently serves the same empty React app shell for every route. I checked the live pages directly: `/`, `/blog`, `/house-washing-before-painting`, `/services/interior-painting`, and `/woodinville` all return initial HTML with 0 `<title>` tags and 0 `<meta name="description">` tags before JavaScript runs. The site does set unique metadata in React via `SEOHead`, but Bing’s top recommendations indicate it is not reliably treating that client-rendered metadata as unique page metadata.

Plan to fix it:

1. Add crawler-visible HTML metadata for every indexable route
   - Create a build-time/prerender metadata step so each important URL gets its own initial `<title>`, meta description, canonical URL, OG tags, and Twitter tags in the served HTML.
   - Cover:
     - homepage
     - core pages: about, pricing, reviews, schedule, blog, mission, join our team, privacy policy
     - service pages
     - service area pages
     - all blog post pages
   - Keep the canonical root domain as `https://arclightpainting.com`.

2. Fix short meta descriptions
   - Update the blog excerpts used as meta descriptions.
   - I found 28 blog excerpts under 120 characters, including the newer blog posts such as:
     - house washing before painting
     - deck and fence staining prep
     - questions to ask before a paint estimate
     - move-in painting checklist
     - garage door paint color ideas
     - winter interior painting benefits
     - home paint maintenance schedule
   - Rewrite these to roughly 140–155 characters, with natural local/service context and no specific paint brand names.

3. Prevent duplicate titles and descriptions
   - Keep `SEOHead` as the React runtime source of truth for browser/social metadata.
   - Add stable Helmet keys so React replaces tags cleanly instead of accidentally stacking duplicates during navigation.
   - Ensure `index.html` does not introduce a generic global title/description that competes with route-specific metadata.

4. Audit all indexable routes against sitemap
   - Compare route list, blog posts, service areas, and `public/sitemap.xml`.
   - Make sure every sitemap URL has a unique title, unique description, canonical URL, and visible H1.
   - Preserve current noindex/redirect rules for legacy/non-core pages.

5. Update sitemap workflow for future blogs
   - Ensure the remembered blog-entry workflow is followed: new blog route, metadata, sitemap entry, image rules, ordering, and indexing checks.
   - If practical, make sitemap generation more data-driven so new blog entries are less likely to be missed.

6. Verify after implementation
   - Check the initial HTML for several live-equivalent routes to confirm title and description are present before JavaScript.
   - Run an internal metadata audit for duplicates and short descriptions.
   - After publishing, resubmit `https://arclightpainting.com/sitemap.xml` in Bing and rerun the Site Scan.

Technical approach:

- The app is Vite/React, so the likely fix is a static HTML generation/prerender script that reads route metadata from existing data files and writes route-specific HTML output during the build/publish process.
- Existing files involved will likely include:
  - `src/components/SEOHead.tsx`
  - `src/data/blogPosts.ts`
  - `src/data/serviceAreas.ts`
  - route/page metadata sources
  - `public/sitemap.xml`
  - package build scripts if needed
- No backend/database changes are needed.