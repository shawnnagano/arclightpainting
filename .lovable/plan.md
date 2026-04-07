

## Add Redirects for Legacy WordPress Pages

### Problem

The old WordPress site's `sitemap_index.xml` still exposes ~25 legacy page URLs that have no redirect in the new app. Anyone (or any crawler) visiting these gets a 404 from the catch-all `NotFound` route, wasting any existing backlink equity.

### WP Pages Found vs. Current App Coverage

**Already handled (have routes or redirects):**
- `/` `/about` `/pricing` `/reviews` `/schedule` `/blog` `/join-our-team` `/privacy-policy`
- `/services/interior-painting` `/services/exterior-painting` `/services/cabinet-refinishing` `/services/commercial-painting` `/services/pressure-washing` `/services/drywall-repairs` `/services/painter-for-a-day`
- `/about-new` (already redirects to `/about`)
- `/interior-painting` `/exterior-painting` `/cabinet-refinishing` `/drywall-repair` `/pressure-washing` `/commercial-painting` `/popcorn-ceiling-removal` `/color-consultation` (legacy service redirects)
- `/service-area/:slug` `/service-area` (redirects)
- All location pages: `/bothell` `/kenmore` `/woodinville` `/kirkland` `/mill-creek` `/everett` `/cottage-lake` `/bellevue` `/union-hill-novelty-hill` `/redmond` `/clearview` `/lake-forest-park` `/seattle` `/lynnwood`
- All blog post slugs at root level

**Need redirects added (found in WP sitemap, no current route):**

| Legacy WP Path | Redirect To | Rationale |
|---|---|---|
| `/painter-for-a-day-new` | `/services/painter-for-a-day` | Staging "-new" duplicate |
| `/blog-new` | `/blog` | Staging duplicate |
| `/why-it-matters` | `/mission` | Old mission page slug |
| `/service-area-new` | `/` | Staging duplicate of service area index |
| `/referral-rewards-new` | `/` | No equivalent; send to homepage |
| `/privacy-policy-new` | `/privacy-policy` | Staging duplicate |
| `/interior-painting-new` | `/services/interior-painting` | Staging duplicate |
| `/house-painting-new` | `/` | Old homepage variant |
| `/house-painting` | `/` | Old homepage variant |
| `/house-painting-in-woodinville-new` | `/woodinville` | Staging location page |
| `/house-painting-in-redmond-new` | `/redmond` | Staging location page |
| `/house-painting-in-mill-creek-new` | `/mill-creek` | Staging location page |
| `/house-painting-in-lynnwood-new` | `/lynnwood` | Staging location page |
| `/house-painting-in-lake-forest-park-new` | `/lake-forest-park` | Staging location page |
| `/house-painting-in-kirkland-new` | `/kirkland` | Staging location page |
| `/house-painting-in-kenmore-new` | `/kenmore` | Staging location page |
| `/house-painting-in-everett-new` | `/everett` | Staging location page |
| `/house-painting-in-bothell-new` | `/bothell` | Staging location page |
| `/house-painting-in-bellevue-new` | `/bellevue` | Staging location page |
| `/gallery-new` | `/about` | Gallery folded into about/homepage |
| `/gallery` | `/about` | Old gallery page |
| `/exterior-painting-new` | `/services/exterior-painting` | Staging duplicate |
| `/drywall-repair-new` | `/services/drywall-repairs` | Staging duplicate |
| `/cabinet-refinishing-new` | `/services/cabinet-refinishing` | Staging duplicate |
| `/above-beyond-blueprint` | `/about` | Blueprint is a section on about page |
| `/faq` | `/` | FAQ is a section on homepage |
| `/referral-thank-you` | `/` | No equivalent |
| `/home-old` | `/` | Old homepage |
| `/services/` (directory) | `/` | No services index page |
| `/about-arclight` | `/about` | Old about page |

### What to Change

**File: `src/App.tsx`**
- Add ~30 `<Route path="/..." element={<Navigate to="..." replace />} />` lines in the legacy redirects section, before the catch-all `*` route.

### Technical Details

All redirects use React Router's `<Navigate replace />` which produces a client-side redirect. For crawlers that execute JavaScript (Google, Bing, AI bots), this behaves like a 301. The redirects are grouped logically in the existing "Legacy service redirects" section of `App.tsx`.

No other files need changes. The `sitemap.xml` in the new app already only lists canonical URLs.

