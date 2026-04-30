# Phase 1 Plan: Cloudflare Pages + Complete Build-Time HTML

## Objective

Begin the Cloudflare Pages + build-time HTML migration by upgrading the current SEO prerendering system from metadata-only output to complete rendered HTML output.

The Phase 1 deliverable is a codebase that can run a production build and generate full static HTML for SEO routes, with strict audits that prevent broken SEO output from deploying.

---

## Non-negotiable requirements

Your three requirements will be treated as release gates:

```text
1. Strict SEO Audit
   Build fails if any SEO page is missing:
   - unique <title>
   - unique <meta name="description">
   - self-referencing <link rel="canonical">

2. Playwright/Cloudflare Compatibility
   The renderer must be testable in Cloudflare Pages before DNS changes.
   DNS will not move until Cloudflare build logs confirm success.

3. CURL Test
   Before DNS switch, at least one service page and one city/location page from the temporary Cloudflare Pages URL must return full raw HTML body content and correct meta tags without JavaScript.
```

---

# What I will implement in Phase 1

## 1. Upgrade the prerender pipeline to full HTML rendering

Current script behavior:

```text
vite build
→ dist/index.html exists
→ script injects route-specific SEO metadata
→ route files are created
→ body content is still mostly CSR shell
```

New script behavior:

```text
vite build
→ launch local static server for dist
→ open each SEO route with Playwright
→ wait for React to finish rendering
→ capture the complete final HTML document
→ write it to dist/{route}/index.html
→ keep JS/CSS assets so hydration still works for users
```

Generated examples:

```text
dist/index.html
dist/about/index.html
dist/blog/index.html
dist/services/interior-painting/index.html
dist/services/exterior-painting/index.html
dist/services/pressure-washing/index.html
dist/woodinville/index.html
dist/kirkland/index.html
dist/commercial-painting-cost/index.html
```

Each generated file must contain actual rendered page content, not only:

```html
<div id="root"></div>
```

---

## 2. Keep `seo-routes.mjs` as the route source of truth

The existing SEO route system will continue to drive:

- generated HTML pages
- sitemap URLs
- audit checks
- service pages
- city/location pages
- blog post pages

This preserves the future Lovable workflow:

```text
You ask Lovable to add/edit a page or blog
→ route data updates
→ Cloudflare rebuilds
→ static HTML and sitemap update together
```

---

## 3. Add strict SEO audit enforcement

I will strengthen `scripts/audit-seo.mjs` so it validates both route definitions and generated build output.

The build should fail if any indexable SEO route has:

- missing title
- duplicate title
- missing meta description
- duplicate meta description
- missing canonical
- canonical not matching the exact production URL
- canonical pointing to the homepage incorrectly
- canonical pointing to Lovable preview URL
- canonical pointing to Cloudflare `pages.dev`
- accidental `noindex`
- missing generated HTML file
- generated HTML with empty root/body content

Priority routes will also get body-content checks.

Examples:

```text
/services/interior-painting must contain interior-painting-specific rendered text
/services/exterior-painting must contain exterior-painting-specific rendered text
/woodinville must contain Woodinville-specific rendered text
/kirkland must contain Kirkland-specific rendered text
/blog must contain blog/index content
```

---

## 4. Add Cloudflare Pages routing/redirect support

I will add Cloudflare-compatible redirect handling for the future Cloudflare deployment.

Important: this is specifically for Cloudflare Pages. Lovable hosting does not process `_redirects`.

The Cloudflare deployment should include true HTTP redirects for legacy URLs such as:

```text
/home.html                         /                              301
/home                              /                              301
/bothell                           /                              301
/services                          /                              301
/interior-painting                 /services/interior-painting    301
/exterior-painting                 /services/exterior-painting    301
/cabinet-refinishing               /services/cabinet-refinishing  301
/drywall-repair                    /services/drywall-repairs      301
/pressure-washing                  /services/pressure-washing     301
/commercial-painting               /services/commercial-painting  301
/color-consultation                /services/color-consultation   301
/the-arclight-difference           /about                         301
/interior-painting-bothell-wa      /services/interior-painting    301
/service-area/:slug                /:slug                         301
```

SPA fallback will remain last:

```text
/* /index.html 200
```

---

## 5. Add Cloudflare build compatibility scripts

I will update package scripts so production builds include:

```text
Vite build
→ full HTML prerender
→ strict SEO audit
```

Likely target commands:

```text
npm run build
npm run build:cloudflare
npm run seo:audit
```

The Cloudflare-specific build command may include Chromium installation if needed:

```text
npx playwright install chromium && npm run build
```

or:

```text
npm run build:cloudflare
```

Exact command will be finalized after the Cloudflare test deployment.

---

# What you will do after Phase 1 code is ready

## 1. Confirm GitHub sync

You will make sure the Lovable project is connected to GitHub:

```text
Lovable → Connectors → GitHub → Connect project
```

Cloudflare Pages needs the GitHub repo as its deployment source.

## 2. Create Cloudflare Pages project

In Cloudflare:

```text
Workers & Pages → Create Pages project → Connect GitHub repo
```

Initial settings:

```text
Framework preset: Vite
Build command: npm run build
Output directory: dist
Production branch: main/default branch
```

If Playwright needs Chromium setup:

```text
Build command: npm run build:cloudflare
```

## 3. Do not change DNS yet

At this stage:

```text
Do not move arclightpainting.com DNS
Do not cancel Prerender.io
Do not submit the pages.dev URL to Google
```

---

# Required verification before DNS switch

## Cloudflare build verification

We must confirm:

```text
Cloudflare Pages build completes successfully
Playwright runs successfully in the Cloudflare build environment
No Chromium/browser dependency errors appear
Generated HTML files exist in deployment
```

If Playwright fails in Cloudflare, fallback order is:

```text
1. Add/adjust Chromium install step
2. Use a dedicated build:cloudflare command
3. Use GitHub Actions to build and deploy completed dist
4. Use a React server-render script instead of Playwright
5. Keep Prerender.io until static HTML path is proven
```

## CURL test verification

Before DNS changes, test the temporary Cloudflare URL.

Examples:

```text
curl -L https://temporary-project.pages.dev/services/interior-painting
curl -L https://temporary-project.pages.dev/woodinville
```

The raw response must include:

```text
route-specific <title>
route-specific meta description
self-referencing canonical for arclightpainting.com
actual H1/body content
service or city page copy
no accidental noindex
no pages.dev canonical
no Lovable preview canonical
```

If these do not pass, DNS does not move.

---

# Phase 1 success criteria

Phase 1 is complete only when:

```text
Local production build generates complete route HTML
Strict SEO audit runs during build
Build fails on missing/duplicate title or description
Build fails on missing/wrong canonical
Build fails on empty/CSR-only route body
Cloudflare-specific redirect file exists
Build scripts are ready for Cloudflare Pages testing
```

After Phase 1, the next milestone is a temporary Cloudflare Pages deployment and curl verification from the `pages.dev` URL.

---

# Final safety rule

No DNS switch until this is proven on Cloudflare itself:

```text
Cloudflare build succeeds
Playwright or fallback renderer works
Temporary Cloudflare URL returns full HTML via curl
Priority pages have correct metadata and body content
Redirects work as real HTTP redirects
```

This prevents repeating the SEO damage caused by moving to a CSR-only production setup.