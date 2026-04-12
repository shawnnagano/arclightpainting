

# Service Page Refactor — Page-by-Page (All Phases Per Page)

## Approach
Complete all 5 phases on one service page before moving to the next. This lets you review, approve, and refine the full framework on a single page before it's applied to the rest.

## Order (by traffic/conversion priority)
1. Interior Painting
2. Exterior Painting
3. Cabinet Refinishing
4. Commercial Painting
5. One-Day Painting Service
6. Popcorn Ceiling Removal
7. Drywall Repair
8. Pressure Washing

## What "Done" Looks Like Per Page

Each page gets all of the following in one pass:

| Phase | Work |
|---|---|
| 1. Data structure | Add `metaTitle`, `metaDescription`, `processSteps`, `objections`, `internalLinks` fields to that service's entry |
| 2. New sections | Add "Our Process" and "Common Concerns" sections to the layout (only needed once — Page 1 builds the components, later pages just add data) |
| 3. Copy rewrite | Rewrite description, benefits, hero copy — remove topic bleed, tighten keyword focus, add Bothell signals |
| 4. FAQ tightening | Rewrite/add service-specific FAQs, remove generic duplicates |
| 5. Meta + Schema | Set unique title tag, meta description, update SEOHead usage |

## Files Changed

- `src/pages/ServiceDetail.tsx` — expand interface (Page 1 only), add section components (Page 1 only), update that service's data entry (every page)
- `src/data/faqData.ts` — rewrite that service's FAQ block (every page)

## Process
1. I implement all 5 phases for Interior Painting
2. You review the full page — layout, copy, FAQs, meta
3. We adjust the framework if needed
4. I roll out to the next page using the refined framework
5. Repeat until all 8 are done

## Start
Interior Painting first — it's highest traffic and will establish the pattern for the rest.

