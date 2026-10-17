## Scope

Create one new file only: `public/images/blog/check-painting-contractor-license-insurance-kenmore-wa.webp`. No other files are added, edited, or replaced. The blog post itself is not created. Before saving, confirm the target file does not already exist; if it does, stop and report.

## Image brief

- Scene: a homeowner's kitchen table in a bright Pacific Northwest home in autumn.
- On the table: an open laptop (screen angled away or softly blurred, no readable text), a printed painting estimate with a pen (text blurred/illegible), a mug of coffee, and a few paint color swatch cards.
- Optional: a homeowner's hands (no face) resting near the laptop.
- Window behind: overcast fall light, evergreen trees, a few yellow and orange leaves.
- Mood: calm, careful, trustworthy — "doing your homework before hiring".
- Exclusions: no readable text or numbers, no license numbers, no website names, no logos, no brand names, no government seals or badges, no faces, no Halloween or Christmas decorations.
- Style: photorealistic, natural light, clean and uncluttered, matching the existing blog banners.

## Technical details

1. Check that the target path does not exist.
2. Generate at 1600x900 (standard quality) to a temporary file in `/tmp`.
3. Inspect for any legible text, numbers, logos, or faces; regenerate if found.
4. Convert to WebP at 1600x900, starting at quality 80 and stepping down only as needed to stay under 250 KB.
5. Save only to the target path, plus a review copy in Files.
6. Report final size and dimensions and show the image for review.

## Out of scope

No changes to `blogPosts.ts`, pages, components, routes, sitemap, robots.txt, _redirects, llms.txt, redirect-map.json, or SEO scripts. Nothing gets published.
