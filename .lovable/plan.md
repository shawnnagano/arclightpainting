# Revised Plan: GitHub Actions Build Gate + Cloudflare Pages Static Hosting

## Objective

Close the CSR SEO issue by producing complete build-time HTML for every indexable SEO route before anything reaches production.

The production architecture is:

```text
Lovable editor
→ GitHub sync
→ main branch
→ GitHub Actions required pipeline
→ prebuilt, prerendered, audited dist/
→ Cloudflare Pages hosting only
→ arclightpainting.com production
```

Cloudflare Pages is not the build system. Cloudflare receives only an already-built, already-tested artifact.

---

## Non-negotiable architecture rules

```text
1. Cloudflare Pages is host/CDN only.
   It must not run npm install, Vite builds, Playwright, prerendering, redirect generation, or SEO audits.

2. GitHub Actions is the build gate.
   A broken build must never reach Cloudflare.

3. Production deploys happen only from GitHub Actions on main.
   Lovable publishing must never control the apex/root production domain.

4. Lovable custom domain, if connected, is staging.arclightpainting.com only.
   Never connect arclightpainting.com or www.arclightpainting.com to Lovable after this migration.

5. Playwright remains the prerender engine.
   Do not add react-dom/server SSR as a fallback.
   If Playwright becomes unreliable, use route-specific static HTML shell templates instead.

6. Redirects come from redirect-map.json only.
   public/_redirects is generated output and must not be edited manually.
```

---

# Phase 1 implementation scope

## 1. Build script structure

Package scripts are separated by responsibility:

```text
npm run build:base          → Vite build only
npm run generate:redirects  → generate public/_redirects from redirect-map.json
npm run prerender           → Playwright prerender against existing dist/
npm run audit:seo           → strict SEO assertions against generated dist/
npm run build               → local convenience chain only
```

The production pipeline should run these as separate required GitHub Actions jobs, not rely on Cloudflare build settings.

---

## 2. GitHub Actions workflow

Create `.github/workflows/deploy.yml` with required jobs in dependency order:

```text
install-and-build
→ prerender
→ seo-assertions
→ deploy
```

### install-and-build

Runs:

```text
npm ci
npm run generate:redirects
npm run build:base
```

Uploads the base `dist/` artifact.

### prerender

Downloads the base `dist/`, installs Playwright Chromium in GitHub Actions, and runs:

```text
npm run prerender
```

This writes complete rendered HTML to route files such as:

```text
dist/index.html
dist/services/interior-painting/index.html
dist/woodinville/index.html
```

### seo-assertions

Downloads the prerendered `dist/` and runs:

```text
npm run generate:redirects
npm run audit:seo
```

The build fails if any assertion fails.

### deploy

Runs only on `main` after all prior jobs pass:

```text
npx wrangler pages deploy dist --project-name arclightpainting
```

Required GitHub secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

---

## 3. Strict SEO assertions

The audit gate must fail on:

- missing title
- duplicate title
- missing meta description
- duplicate meta description
- missing canonical
- canonical not matching the exact production URL
- canonical pointing to Lovable preview/staging URLs
- canonical pointing to `pages.dev`
- accidental `noindex`
- missing generated route HTML
- generated HTML with empty CSR root/body
- missing H1
- body text below the minimum crawler-ready threshold
- invalid “Get a TrueQuote” CTA paths
- legacy redirect URLs appearing as indexable SEO routes
- sitemap omissions for indexable routes
- legacy redirects appearing in the sitemap
- `_redirects` not being generated from `redirect-map.json`

---

## 4. Redirect source of truth

Redirects are maintained in:

```text
redirect-map.json
```

Each entry uses:

```json
{
  "source": "/home.html",
  "destination": "/",
  "status": 301
}
```

The generator script is:

```text
scripts/generate-redirects.mjs
```

It must fail on:

- duplicate redirect sources
- self-redirects
- redirect cycles
- invalid statuses
- missing required fields
- invalid source/destination formats
- destination parameters not present in the source pattern
- internal destinations that are not valid indexable SEO routes

It writes:

```text
public/_redirects
```

That file is generated output only.

---

## 5. What stays the same

Keep:

- `scripts/seo-routes.mjs` as the SEO route source of truth
- Playwright prerendering
- existing SEO audit scripts, expanded
- complete route HTML generation into `dist/{route}/index.html`
- Cloudflare-compatible redirects in the final deployed artifact
- DNS migration phases 3–5
- temporary Cloudflare URL curl testing
- email DNS preservation during migration
- Prerender.io safety-net period after launch
- post-launch Google Search Console monitoring

Remove/avoid:

- Cloudflare build commands
- `build:cloudflare`
- Cloudflare-running Playwright
- Cloudflare as the build gate
- `npx playwright install chromium` in Cloudflare build settings
- `react-dom/server` SSR fallback
- manual `_redirects` edits

---

# Phase 2: Cloudflare Pages project setup

Cloudflare Pages should be configured as a host that receives the finished artifact from Wrangler.

Do not configure Cloudflare Pages to build from GitHub with a build command.

The deployment source is GitHub Actions:

```text
GitHub Actions deploy job
→ Wrangler
→ Cloudflare Pages
→ uploaded dist/
```

---

# Phase 3: Temporary Cloudflare URL verification

Before DNS changes, test the temporary Cloudflare Pages URL.

Examples:

```text
curl -L https://temporary-project.pages.dev/services/interior-painting
curl -L https://temporary-project.pages.dev/woodinville
```

The raw response must include:

- route-specific `<title>`
- route-specific meta description
- self-referencing canonical for `https://arclightpainting.com/...`
- actual H1/body content
- service or city page copy
- no accidental `noindex`
- no `pages.dev` canonical
- no Lovable preview canonical

If these do not pass, DNS does not move.

---

# Phase 4: DNS migration safety

Do not move DNS until:

- GitHub Actions pipeline passes
- Cloudflare Pages deployment exists from the audited artifact
- curl tests confirm raw HTML on priority pages
- redirects work as real HTTP redirects
- email DNS records are inventoried and preserved

When moving DNS, preserve:

- MX
- SPF
- DKIM
- DMARC
- any other email/provider verification records

Move only the web records needed for the apex/root and `www` web traffic.

---

# Phase 5: Post-launch safety net

Keep Prerender.io active for 1–2 weeks after launch while monitoring Google Search Console.

Retire Prerender.io only after:

- Google sees the new static HTML correctly
- indexed pages remain stable
- no major coverage regressions appear
- priority service/location pages remain crawlable

---

# Final safety rule

No production DNS switch until the temporary Cloudflare URL proves full HTML via curl and the GitHub Actions gate is the only production deployment path.
