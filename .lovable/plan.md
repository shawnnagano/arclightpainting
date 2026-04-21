

## Plan A (Final): Enhance LocalBusiness Schema

**What**: Add verified profiles, Washington contractor license, founding date, slogan, and credentials to `localBusinessSchema` so AI crawlers (ChatGPT, Perplexity, Claude) recognize Arclight as a verified, credentialed business entity.

**Where**: `src/components/SEOHead.tsx` — extend the `localBusinessSchema` constant.

**Changes**:

1. **`sameAs`** — populate with 7 verified profiles:
   - Google Business Profile, Facebook, Yelp, LinkedIn, Instagram, BBB, Angi

2. **`hasCredential`** — Washington State contractor license:
   ```ts
   {
     "@type": "EducationalOccupationalCredential",
     credentialCategory: "license",
     name: "Washington State Contractor License",
     identifier: "ARCLIP*747DW",
     recognizedBy: {
       "@type": "GovernmentOrganization",
       name: "Washington State Department of Labor & Industries",
     },
   }
   ```

3. **`foundingDate`**: `"2013"`
4. **`award`**: `"Veteran-Owned Business"`
5. **`slogan`**: `"Real People. Real Purpose. Exceptional Results."`
6. **`paymentAccepted`**: `"Cash, Check, Credit Card, Financing"`
7. **`currenciesAccepted`**: `"USD"`

**Why it matters**: AI engines weight cross-platform identity verification, government-issued licenses, and business longevity heavily when deciding whether to cite a source. These additions turn Arclight into a verified, credentialed entity in LLM knowledge graphs — improving citation rates in ChatGPT/Perplexity answers about Bothell-area painters.

**Files modified**: 1 (`src/components/SEOHead.tsx`)

**Risk**: None. Schema-only, additive, no visual changes. Validates in Google Rich Results Test.

