## Scope

Create one new file only: `public/images/blog/prevent-mildew-interior-walls-bellevue-wa.webp`. The file name is not in use yet (checked). No other files are added, edited, or replaced. The blog post itself is not created. Nothing gets published.

## Image brief

- Scene: a bright, clean bathroom in a Pacific Northwest home in Bellevue, WA, on a gray, rainy late-October morning.
- Ceiling and walls: freshly painted, spotless, soft light neutral color.
- Window: raindrops on the glass, soft diffuse daylight, blurred evergreen trees outside.
- Mood: fresh, dry, well cared for (the "after" result).
- Subtle touches: a folded towel and a small plant.
- Exclusions: no visible mold or mildew, no readable text or numbers, no logos or brand names, no labeled paint cans, no people or faces, no holiday decorations.
- Style: photorealistic, natural light, clean and uncluttered, matching the existing blog banners.

## Technical details

1. Re-check right before saving that the target file still does not exist; if it does, stop and report.
2. Generate at 1600x900 (standard quality) to a temporary file in `/tmp`.
3. Inspect for mold, readable text, numbers, logos, labels, or people; regenerate if found.
4. Convert to WebP at 1600x900, starting at quality 80 and stepping down only as needed to stay under 250 KB.
5. Save only to the target path, plus a review copy in Files.
6. Report the final size and dimensions and show the image for review.

## Out of scope

No changes to `blogPosts.ts`, sitemap, robots.txt, _redirects, redirect-map.json, llms.txt/llms-full.txt, roadmap.md, SEO/audit scripts, or any existing image. Nothing gets published.
