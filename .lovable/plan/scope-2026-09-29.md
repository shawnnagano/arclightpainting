## Scope

Create one new file only: `public/images/blog/holiday-interior-painting-woodinville-wa.webp`. No other files are added, edited, or replaced. The blog post itself is not created.

## Image brief

- Scene: a bright, freshly painted living and dining room in a Pacific Northwest home in autumn.
- Walls: warm soft neutral (greige or warm white). Trim: crisp white.
- Furniture pushed to the center and partly covered with clean drop cloths.
- A roller, a tray, and a small step ladder set neatly to one side, as if painting just finished.
- Window view: overcast fall light, evergreen trees, and a few yellow and orange leaves.
- Seasonal touch: a folded plaid throw or a small pumpkin on a side table.
- Exclusions: no Christmas decorations, text, logos, brand names, or faces. The image will show no people at all.
- Style: photorealistic, natural light, clean, matching the existing blog banners.

## Technical details

1. Generate the image at 1600x900 (standard quality) to a temporary file in `/tmp`.
2. Convert it to WebP at 1600x900 with web compression, aiming for under 250 KB. Lower the quality step by step if needed.
3. Save the result only to `public/images/blog/holiday-interior-painting-woodinville-wa.webp`, then confirm it doesn't overwrite an existing file.
4. Check the final size and dimensions, then show the image for review.

## Out of scope

No changes to `blogPosts.ts`, pages, routes, sitemap, robots.txt, _redirects, llms.txt, redirect-map.json, or SEO scripts. Nothing gets published.
