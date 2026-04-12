

## Consolidate /bothell into Homepage with Bothell-Specific Content

**What changes:**

The /bothell page gets redirected to `/`, and 4 pieces of Bothell-specific content get added to the homepage (Index.tsx):

### 1. Update Hero Description
Change the default `heroDescription` in the `HeroSection` call on Index.tsx to:
> "Bothell's veteran-owned hometown painting company, built on character, excellence, and above-and-beyond service."

### 2. Add "Why We Love Working in Bothell" Section
Add the existing `localFlavor` text from the Bothell service area data as a new section on the homepage, positioned after `TestimonialsSection`. Uses the same Heart icon + H2 layout from ServiceAreaDetail.

### 3. Add "Neighborhoods We Serve in Bothell" Section
Add the neighborhood pills (Canyon Park, North Creek, Queensgate, Bothell Landing, Brickyard, Maltby) as a section on the homepage, positioned after the CTA section (same placement as ServiceAreaDetail).

### 4. Add Bothell-Specific FAQs to Homepage
Append the non-overlapping Bothell FAQs to the homepage FAQ section. These 4 are unique (not covered by generalFAQ):
- "Are you locally based in Bothell?"
- "Do you work with Bothell HOAs?"
- "What types of homes do you paint in Bothell?"
- "How does Bothell's climate affect exterior paint?"

(The pricing and free estimates Bothell FAQs are already covered by generalFAQ, so they're excluded.)

### 5. Redirect /bothell → /
Add a redirect route in App.tsx (if not already present from the previous task).

**Sections NOT added** (per your direction):
- No "What Makes Painting in Bothell Different" section

**Files modified:**
- `src/pages/Index.tsx` — add hero description, Why We Love section, neighborhoods section, and merged FAQs
- `src/App.tsx` — ensure /bothell redirects to /
- `src/components/SEOHead.tsx` — update FAQ schema to include the combined FAQ list

