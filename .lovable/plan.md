

## Plan: Move Location Pages to Root-Level URLs

### What Changes

Remove the `/service-area` directory page and `/service-area/:slug` dynamic route. Instead, add an explicit root-level route for each location (e.g., `/bothell`, `/kirkland`). The ServiceAreaDetail page stays, but now reads its slug from explicit routes. Add a redirect from `/service-area` and `/service-area/:slug` to preserve old links.

### Files to Update

**1. `src/App.tsx`**
- Remove `/service-area` and `/service-area/:slug` routes
- Add explicit route for each of the 13 locations at root level (e.g., `<Route path="/bothell" element={<ServiceAreaDetail />} />`)
- Add redirect: `/service-area/:slug` → `/:slug` and `/service-area` → `/` (or keep as redirect to homepage)
- ServiceAreaDetail will need to accept slug as a prop or derive it from the path

**2. `src/pages/ServiceAreaDetail.tsx`**
- Instead of `useParams`, derive slug from `useLocation().pathname` (strip leading `/`)
- Update canonical URL from `/service-area/${slug}` to `/${slug}`
- Update breadcrumb URLs to use root-level paths
- Update fallback redirect from `/service-area` to `/`

**3. `src/components/Footer.tsx`**
- Change map banner link from `/service-area` to `/bothell` (or homepage)
- Change location links from `/service-area/${slug}` to `/${slug}`

**4. `src/components/SEOHead.tsx`**
- Update `serviceAreaSchema` URL from `/service-area/${slug}` to `/${slug}`
- Update city `@id` URLs from `/service-area/...` to `/...`

**5. `src/pages/ServiceAreas.tsx`**
- Can be deleted or kept as a redirect target. Since we're removing the page, it can be deleted.

**6. `public/sitemap.xml`**
- Change all location URLs from `/service-area/bothell` to `/bothell`, etc.
- Remove the `/service-area` directory entry

### Technical Notes

- Each location gets its own explicit `<Route>` to avoid conflicts with other root-level routes like `/about`, `/pricing`
- ServiceAreaDetail derives the slug from `window.location.pathname` instead of `useParams`
- Redirect routes ensure any old `/service-area/...` links still work

