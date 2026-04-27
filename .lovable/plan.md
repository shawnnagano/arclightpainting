## Plan C: Add Verified Homepage Google Reviews to JSON-LD

**What**: Add the 5 real Google reviews currently shown on the homepage to `localBusinessSchema` as structured `Review` objects.

**Source reviews**: The 5 default homepage testimonials in `src/components/TestimonialsSection.tsx`:
- Lauren B
- Frank B
- Amruta M
- Donna D
- Jakub K

**Date handling**: Use the real Google Business Profile dates where confirmable. If Google only exposes relative dates or the exact date is not accessible, use the **first day of the matching month** as the reasonable approximation, per your instruction. No invented review copy will be used.

**Where**:
- `src/components/SEOHead.tsx`

**Implementation details**:
1. Add a `review` array inside `localBusinessSchema`.
2. Add one `Review` object for each of the 5 homepage Google reviews.
3. Preserve the homepage review text exactly as currently displayed.
4. Use `reviewRating` of `5` / `5` for each review.
5. Add Google as the review publisher.
6. Keep the existing `aggregateRating` unchanged.

Example shape:
```ts
review: [
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Lauren B" },
    datePublished: "YYYY-MM-01",
    reviewBody: "Friends we trust recommended Arclight...",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    publisher: {
      "@type": "Organization",
      name: "Google",
    },
  },
]
```

**Why it matters**: This gives AI crawlers and search engines specific, attributable customer-review evidence to extract, instead of only seeing the aggregate 4.9 rating.

**Files modified**: 1
- `src/components/SEOHead.tsx`

**Risk**: Low. Schema-only, additive, no visual change.
