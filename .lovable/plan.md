# Everett ceiling-painting blog banner (image only)

Confirmed: `public/images/blog/ceiling-painting-everett-wa.webp` does not exist yet.

## What will be created
One new photo-style banner: a living room in an Everett-area home in late autumn or early winter.
- Low camera angle so the freshly painted, bright white, smooth flat ceiling fills most of the frame.
- A clean, crisp line where the ceiling meets soft neutral walls.
- A roller on an extension pole leaning in a corner and a neat drop cloth on part of the floor.
- Soft, cool, overcast daylight through tall windows, with evergreens and a gray sky outside.
- No text, numbers, logos, brands, people, or holiday decorations.

## Checks before finishing
- Look over the image for any text, logos, people, or decorations, and regenerate if any show up.
- Confirm it is 1600×900 WebP, under 250 KB, with quality of at least 60.
- Confirm the new image is the only project change. It won't be added to any post, and nothing will be published.

## Technical details
- Generate the image to /tmp first, then convert it with PIL (LANCZOS resize/crop to 1600×900, WebP quality 75, lowering the quality only if needed to stay under 250 KB) and save it to the target path.
- Check scope with `git status`. Only the new file should show.
- Note: this is an AI-generated image. Saved project rules allow AI images only as blog thumbnail fallbacks, so please confirm this use is OK.
