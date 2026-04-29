Revised plan

Decision: do not bring back `/services`

We should not recreate `/services` just for indexing. If the page was removed because it felt irrelevant or redundant, adding it back as a thin hub page could create more quality/canonical noise. The better approach is to keep the site focused on the real indexable service pages and use the homepage’s existing services section for general service discovery.

Final redirect decisions

1. `/home.html`
   - Target: `/`
   - Purpose: classic migration cleanup.
   - Keep out of sitemap.

2. `/interior-painting-bothell-wa/`
   - Target: `/services/interior-painting`
   - Purpose: strongest topical match; this is business-relevant and should not go to homepage.
   - Keep out of sitemap.

3. `/services-new/`
   - Target: `/`
   - Purpose: old generic/staging services URL. Since there is no current `/services` page by design, homepage is the best broad equivalent because it contains the current services section and routes users onward.
   - Keep out of sitemap.

4. `?page_id=` WordPress URLs
   - Do not map yet without evidence.
   - Investigate each old page ID before deciding:
     - `/?page_id=7850`
     - `/?page_id=8582`
     - `/?page_id=8521`
     - `/?page_id=8488`
     - `/?page_id=8547`
     - `/?page_id=8343`
   - If a page ID was a real service/location/blog page, redirect it to the closest current equivalent.
   - If it was a draft, duplicate, staging, or test page, leave it as 404 and keep it out of the sitemap.

5. WordPress/security-probe URLs
   - Do not create redirects for:
     - `/wp-content/uploads/*`
     - `/wp-content/themes/hello-elementor/*`
     - `/wp-content/*`
     - `/wp-*.php`
     - `/*`
   - These should not be redirected to homepage because that can create soft-404 patterns and confuse Google.

Implementation plan

1. Keep the app route policy lean
   - Keep `/services` redirected to `/` unless there is a future user-facing reason to build a true services overview page.
   - Keep `/services` out of the sitemap and SEO route list.
   - Keep all specific service pages indexable.

2. Update legacy redirect fallbacks
   - Ensure these paths are handled consistently, including trailing-slash variants where the router needs them:
     - `/home.html` → `/`
     - `/services-new` and `/services-new/` → `/`
     - `/interior-painting-bothell-wa` and `/interior-painting-bothell-wa/` → `/services/interior-painting`
   - Keep existing relevant legacy service redirects that point to specific current service pages.

3. Fix crawler-visible metadata/canonical output for deep routes
   - This remains the highest-priority technical issue.
   - Update the static/prerender SEO process so every indexable route serves its own initial HTML metadata instead of inheriting homepage metadata.
   - Verify raw HTML on the custom domain eventually shows correct route-specific values for:
     - `/`
     - `/blog`
     - `/services/interior-painting`
     - `/woodinville`
     - a recent blog post
   - Expected result: each route has its own title, description, and canonical URL before JavaScript runs.

4. Strengthen sitemap/audit checks
   - Ensure `public/sitemap.xml` contains only canonical, indexable final URLs.
   - Keep legacy redirects and WordPress probe URLs out of the sitemap.
   - Extend the SEO audit so it catches:
     - duplicate titles/descriptions
     - missing or short descriptions
     - canonical mismatch
     - accidental noindex on sitemap URLs
     - sitemap URLs that are redirects or non-200s

5. Validate post-publish
   - Test the custom domain, not just preview/local output.
   - Validate:
     - `/home.html` resolves to `/`
     - `/services-new/` resolves to `/`
     - `/interior-painting-bothell-wa/` resolves to `/services/interior-painting`
     - sitemap contains only final canonical URLs
     - deep pages no longer show homepage canonical metadata
   - Then in Google Search Console:
     - inspect the three meaningful old URLs
     - validate the 404 fix
     - resubmit `https://arclightpainting.com/sitemap.xml`

Technical note

A true HTTP 301 is controlled by the hosting layer. Lovable hosting does not use `_redirects`, `_headers`, `netlify.toml`, or `vercel.json`, so I will not add those. I will keep the app-side redirects as fallback behavior and focus the code changes on canonical/sitemap correctness and route-specific metadata, which are the most actionable fixes inside this project.