

## Problem

Only the **Homepage** (`Index.tsx`) includes `FAQPage` JSON-LD schema for its FAQs. The following pages render FAQ accordions but are **missing** the structured data that search engines and AI answer engines need:

1. **ServiceDetail.tsx** — all 8 service pages (interior-painting, exterior-painting, cabinet-refinishing, drywall-repairs, pressure-washing, commercial-painting, painter-for-a-day, popcorn-ceiling-removal)
2. **ServiceAreaDetail.tsx** — all 14 location pages (bothell, kenmore, kirkland, redmond, bellevue, etc.)
3. **Pricing.tsx**
4. **ColorConsultation.tsx**

## Plan

### Step 1: Create a reusable FAQ schema helper

Add a utility function in `SEOHead.tsx`:

```ts
export const faqPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
```

### Step 2: Add FAQ schema to each page

- **ServiceDetail.tsx** — import `faqPageSchema`, generate it from `serviceFAQs[slug]`, and add it to the `jsonLd` array passed to `SEOHead`.
- **ServiceAreaDetail.tsx** — same approach using `area.cityFaqs`.
- **Pricing.tsx** — same approach using `pricingFAQ`.
- **ColorConsultation.tsx** — same approach using `colorConsultationFAQ`.

### Step 3: Clean up Homepage

Replace the hand-written `homeFaqSchema` in `Index.tsx` with a call to the new `faqPageSchema(generalFAQ)` helper, keeping the schema identical but DRY.

## Files to edit

| File | Change |
|---|---|
| `src/components/SEOHead.tsx` | Add `faqPageSchema` export |
| `src/pages/ServiceDetail.tsx` | Add FAQ schema to `jsonLd` |
| `src/pages/ServiceAreaDetail.tsx` | Add FAQ schema to `jsonLd` |
| `src/pages/Pricing.tsx` | Add FAQ schema to `jsonLd` |
| `src/pages/ColorConsultation.tsx` | Add FAQ schema to `jsonLd` |
| `src/pages/Index.tsx` | Replace manual schema with `faqPageSchema(generalFAQ)` |

