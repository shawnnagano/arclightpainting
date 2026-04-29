I checked the live published custom domain after you published. The sitemap and robots.txt are good, but the live verification found one important remaining SEO issue that should be fixed before resubmitting in Google Search Console.

## What passed

1. `robots.txt` is live and crawlable.
   - It allows Googlebot.
   - It points to `https://arclightpainting.com/sitemap.xml`.

2. `sitemap.xml` is live and using the correct root domain.
   - Sitemap URLs use `https://arclightpainting.com/...`.
   - The priority service, location, and blog URLs are included.
   - It is not using the preview domain or the `www` domain.

3. The pages render visually in the browser.
   - Example: `/commercial-painting-cost` loads the correct blog article visually.

## What failed

The raw HTML currently sends the same homepage canonical/title for many deep pages:

```text
<link rel="canonical" href="https://arclightpainting.com" />
<title>Professional House Painters in Bothell, WA | Arclight Painting</title>
```

This was found on pages like:

```text
/commercial-painting-cost
/services/pressure-washing
/about
/woodinville
```

That means Google may see those URLs as duplicates of the homepage, even though the browser eventually renders the correct content with JavaScript. This is likely contributing to the “Discovered, currently not indexed” issue.

There is also one legacy URL still returning a real 404:

```text
/home.html
```

And these legacy URLs visually redirect in the browser, but they are not server-level 301 redirects in the raw HTTP response:

```text
/the-arclight-difference/ -> /about visually
/services-new -> / visually
/interior-painting-bothell-wa -> /services/interior-painting visually
/services -> / visually
```

## Fix plan

### 1. Fix production prerender metadata for every indexable route

Update the SEO/prerender generation so each route outputs its own canonical URL and route-specific metadata in the initial HTML.

Examples:

```text
/about
canonical: https://arclightpainting.com/about

a/commercial-painting-cost
canonical: https://arclightpainting.com/commercial-painting-cost

/services/pressure-washing
canonical: https://arclightpainting.com/services/pressure-washing

/woodinville
canonical: https://arclightpainting.com/woodinville
```

The homepage should remain:

```text
canonical: https://arclightpainting.com
```

### 2. Ensure titles/descriptions are route-specific in raw HTML

The initial HTML should not use the homepage title for every page. Blog pages, service pages, and location pages should output their own titles and meta descriptions before JavaScript runs.

This matters because Google evaluates the raw HTML and rendered HTML, and conflicting signals can slow indexing.

### 3. Add `/home.html` to the legacy redirect handling

Fix `/home.html` so it no longer returns a hard 404.

Target:

```text
/home.html -> /
```

### 4. Re-check legacy redirects

After the metadata fix, verify these again:

```text
/the-arclight-difference/ -> /about
/services-new -> /
/home.html -> /
/interior-painting-bothell-wa -> /services/interior-painting
/services -> /
```

Because Lovable hosting handles SPA routes automatically, these may still be app-level redirects rather than true HTTP 301s. The key requirement is that they no longer show 404/noindex pages. If true HTTP 301s are unavailable at the hosting layer, the app-level redirect is the best available in-code fix.

### 5. Re-run the live verification checklist

After implementation and another publish/update, verify:

```text
https://arclightpainting.com/commercial-painting-cost
https://arclightpainting.com/services/pressure-washing
https://arclightpainting.com/woodinville
https://arclightpainting.com/union-hill-novelty-hill
https://arclightpainting.com/timeless-paint-colors
https://arclightpainting.com/about
```

Each should have:

```text
status: 200
noindex: false
canonical: exact same URL
route-specific title/meta description
visible rendered content
```

### 6. Then resubmit in Google Search Console

Only after this fix is live:

1. Resubmit `https://arclightpainting.com/sitemap.xml`.
2. Use URL Inspection on the most valuable pages.
3. Request indexing for priority URLs first:
   - `/services/interior-painting`
   - `/services/exterior-painting`
   - `/services/pressure-washing`
   - `/woodinville`
   - `/union-hill-novelty-hill`
   - `/commercial-painting-cost`
   - `/bad-paint-job`
   - `/what-is-a-painting-contract`

## Bottom line

Step 2 found the remaining blocker: deep pages are live and crawlable, but their initial HTML canonical currently points to the homepage. The next implementation should fix route-specific canonical/title/meta generation, then we can rerun the live checks and move to Search Console resubmission.