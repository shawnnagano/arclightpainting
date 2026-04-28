## Revised Plan D: Expand Blog Library With Safe Image, SEO, and Quality Controls

### Goal
Add a substantial set of new, high-quality blog posts while protecting the site from the main risks: thin content, poor image fit, licensing issues, SEO/indexing problems, date ordering mistakes, and implementation errors.

### Scope
- Add approximately 31 new blog posts to bring the blog library to the planned 51-post threshold.
- Use only one main image per blog post.
- Use only local, fast-loading WebP images for all added blog posts.
- Use appropriate cross-referenced links to other blog posts and service/location pages where natural.
- Backdate new posts across the last three years, with all added posts dated no later than January 2026 so they do not bury the more recent existing posts.
- Update the sitemap for the added blog URLs.

## Mitigations Added to the Plan

### 1. Content Quality / Thin-Content Mitigation
Each added post will be written as a useful standalone article, not filler.

Requirements:
- Avoid repetitive intros, generic advice, and keyword stuffing.
- Give each post a distinct search intent and practical angle.
- Include specific, homeowner-focused guidance relevant to Bothell / local service-area readers where appropriate.
- Keep service claims realistic and aligned with the existing site.
- Do not use specific paint brand names.
- Use natural CTA language, especially “Get a TrueQuote,” linking to `/schedule` where appropriate.

### 2. Internal-Linking Mitigation
Internal links will be added only where they help the reader.

Requirements:
- Cross-link to relevant existing service pages such as interior painting, exterior painting, cabinet refinishing, color consultation, and Painter-for-a-Day where appropriate.
- Cross-link between related blog posts when the relationship is clear.
- Avoid over-linking every paragraph.
- Use natural anchor text rather than repeated exact-match SEO phrases.
- Ensure links use valid internal routes.

### 3. Chronology / Existing Blog Visibility Mitigation
The new posts will be intentionally dated so existing newer content remains prominent.

Requirements:
- Spread new publication dates across 2023, 2024, 2025, and January 2026.
- Do not date any added blog later than January 2026.
- Keep dates in chronological order within the data structure if that is how the blog currently expects sorting.
- Verify the blog listing still shows the intended newest existing posts ahead of the added posts.

### 4. Image Appropriateness Mitigation
Images will be selected or sourced based on topic fit, not convenience.

Requirements:
- Start by auditing the existing local WebP image library.
- Match each blog topic to an image that is clearly appropriate.
- If a topic does not have a suitable image, either:
  1. Adjust the topic to match an available appropriate image, or
  2. Source a new appropriate image and convert it to local WebP.
- Use exactly one main image per added blog.
- Do not add inline article images.
- Do not use AI-generated imagery for blog content.
- Do not use off-site image URLs.

### 5. Image Licensing / Source Mitigation
Any newly sourced image must be safe to use.

Requirements:
- Prefer reputable free/commercial-use image sources or other clearly license-compatible sources.
- Avoid images with unclear ownership, watermarks, identifiable private homes where rights are uncertain, or copyrighted editorial images.
- Save sourced images locally as WebP files under the project image directory.
- Use descriptive filenames.
- Compress/resize images for fast loading, with a practical maximum width consistent with the project’s existing WebP guidance.

### 6. Web Performance Mitigation
Images must stay lightweight and local.

Requirements:
- Convert newly sourced photos to WebP before use.
- Avoid oversized files.
- Keep one hero/card image per post only.
- Prefer existing lazy-loading behavior if the current blog components already support it.
- Do not introduce remote image dependencies.

### 7. SEO / Indexing Mitigation
The new posts will support SEO without creating crawl or duplication issues.

Requirements:
- Give every new post a unique slug, title, excerpt, meta description, and body.
- Avoid duplicate or near-duplicate article structures.
- Make the sitemap entries match the new blog slugs.
- Set `<lastmod>` values to match each post’s intended publication/update date.
- Preserve existing robots/noindex rules and avoid changing indexing policies unless required.
- Avoid specific paint brand names in line with project rules.

### 8. Implementation / Data Integrity Mitigation
The blog data and sitemap updates will be validated carefully.

Requirements:
- Preserve the existing blog data shape in `src/data/blogPosts.ts`.
- Ensure every new post has all required fields.
- Ensure image paths resolve to local files.
- Ensure all markdown/internal links are valid and use existing routes.
- Ensure sitemap URLs match generated routes.
- Run the project’s normal automated checks after implementation.

## Implementation Steps

### Step 1: Audit Existing Blog and Image Assets
- Review current blog post structure, current slugs, publication dates, image usage, and sorting behavior.
- Audit local images, prioritizing existing `.webp` files.
- Identify which existing WebP images can support genuinely appropriate blog topics.

### Step 2: Build a Topic/Image Matrix
Create a working matrix for each planned new post:

```text
Post title | Search intent | Date | Image path | Internal links | Related posts/pages
```

This will prevent weak topic-image pairings and reduce duplicate article angles.

### Step 3: Source New Images Only Where Needed
If the existing image library does not provide enough appropriate WebP images:
- Source suitable non-AI images from license-safe sources.
- Download them locally.
- Convert/compress them to WebP.
- Use one locally stored WebP per post.

### Step 4: Add New Blog Posts
- Add the new posts to `src/data/blogPosts.ts`.
- Write unique, useful article bodies.
- Add contextual internal links inside article content where helpful.
- Use date distribution spanning 2023 through January 2026.
- Ensure no added post is dated later than January 2026.

### Step 5: Update Sitemap
- Add sitemap entries for all new blog URLs.
- Use matching `<lastmod>` dates.
- Preserve existing sitemap structure.

### Step 6: Validate
- Confirm blog listing order is correct.
- Confirm blog detail pages render correctly.
- Confirm all added images load locally and are WebP.
- Confirm no remote image links were added.
- Confirm internal links point to valid routes.
- Confirm sitemap URLs match the new slugs.
- Run automated checks available in the project environment.

## Files Expected to Change
- `src/data/blogPosts.ts`
- `public/sitemap.xml`
- `public/images/...` only if new local WebP images are needed

## Acceptance Criteria
- About 31 new blog posts are added.
- Every added blog has exactly one main image.
- Every added blog image is local WebP.
- No off-site image URLs are used.
- No AI-generated blog images are used.
- Every image is appropriate to the article topic.
- New posts are dated from 2023 through January 2026 only.
- Existing newer blog posts remain newer than the added batch.
- Blog content includes helpful internal cross-links where natural.
- Sitemap includes the new posts.
- No specific paint brand names are introduced.
- The site builds/checks successfully after implementation.