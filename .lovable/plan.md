

# Service Page Rollout Plan — Apply Interior Painting Upgrades to All 7 Remaining Pages

## Summary of Interior Painting upgrades to replicate

The Interior Painting page has these completed upgrades that the other 7 pages lack:

1. **`metaTitle` and `metaDescription`** — unique, keyword-focused meta tags
2. **`blueprintSteps`** — 7 service-specific steps (5 branded + Surface Prep + Top-Quality Paint Application), each with a description tailored to the service
3. **`objections`** — 3-4 "Common [Service] Concerns" with service-specific Q&A
4. **`internalLinks`** — related service cross-links
5. **Rewritten `description` copy** — tighter, Bothell-signal, no topic bleed (already partially done for some pages)
6. **Rewritten FAQs** — service-specific, no brand mentions, aligned to testing/selection language for paint quality

## Pages and key details per page

### 1. Exterior Painting
- **blueprintSteps**: TrueQuote (measure siding, trim, fascia), PowerFlex (weather-window scheduling), ColorConfidence (exterior color mockups, sun exposure), JobTrack (tracking from power wash through final coat), Surface Prep & Protection (power wash, scrape, sand, caulk, prime, protect landscaping), Top-Quality Paint Application (exterior-specific: brush/roll/spray, weather-resistant coats, UV/moisture protection), PCA Inspection (walk the full exterior, check siding, trim, fascia)
- **objections**: weather delays, paint peeling, cost vs. value, how long it lasts
- **internalLinks**: Pressure Washing, Color Consultation
- **metaTitle/Description**: Exterior-focused, Bothell keyword

### 2. Cabinet Refinishing
- **blueprintSteps**: TrueQuote (inspect doors, drawers, boxes), PowerFlex (phased to minimize kitchen downtime), ColorConfidence (cabinet color/finish selection), JobTrack (track from hardware removal through cure time), Surface Prep (degrease, sand, prime every surface), Top-Quality Paint Application (cabinet-grade coats, spray/brush for factory-smooth finish), PCA Inspection (inspect every door, drawer, and frame)
- **objections**: durability concerns, kitchen downtime, color change feasibility, cost vs. replacement
- **internalLinks**: Interior Painting, Color Consultation

### 3. Commercial Painting
- **blueprintSteps**: TrueQuote (walk every space, measure by zone), PowerFlex (after-hours/weekend scheduling), ColorConfidence (brand-aligned color planning), JobTrack (phase-by-phase tracking across zones), Surface Prep (patch, repair, protect tenant fixtures), Top-Quality Paint Application (commercial-grade, high-traffic coatings), PCA Inspection (inspect each zone against scope)
- **objections**: business disruption, occupied space concerns, timeline reliability, insurance/licensing
- **internalLinks**: Interior Painting, Exterior Painting

### 4. One-Day Painting Service
- **blueprintSteps**: TrueQuote (scope checklist review — flat rate), PowerFlex (pick your date, we handle the rest), ColorConfidence (quick color guidance for small scopes), JobTrack (real-time updates throughout the day), Surface Prep (targeted prep for each task on the list), Top-Quality Paint Application (efficient, quality application across your checklist items), PCA Inspection (end-of-day walkthrough before we leave)
- **objections**: quality in one day, scope limits, is it worth the cost, what if we run out of time
- **internalLinks**: Interior Painting, Drywall Repair

### 5. Popcorn Ceiling Removal
- **blueprintSteps**: TrueQuote (measure ceilings, assess texture type), PowerFlex (room-by-room to minimize disruption), ColorConfidence (ceiling color/finish selection), JobTrack (track containment through final paint), Surface Prep (full containment, protection, texture removal, skim coat, sand), Top-Quality Paint Application (primer and ceiling paint for a smooth, modern finish), PCA Inspection (inspect every ceiling for smoothness and finish quality)
- **objections**: asbestos concerns, mess/dust, how long it takes, cost vs. living with it
- **internalLinks**: Interior Painting, Drywall Repair

### 6. Drywall Repair
- **blueprintSteps**: TrueQuote (assess damage, measure repair areas), PowerFlex (schedule around your availability), ColorConfidence (color matching for repaired areas), JobTrack (track from repair through paint-ready), Surface Prep (cut out damage, patch, tape, mud, sand, prime), Top-Quality Paint Application (prime and paint repaired areas to blend seamlessly), PCA Inspection (inspect repairs for smoothness, texture match, and paint blend)
- **objections**: will the patch show, do I need to paint the whole wall, mess/dust, small job worth hiring out
- **internalLinks**: Interior Painting, Popcorn Ceiling Removal

### 7. Pressure Washing
- **blueprintSteps**: TrueQuote (assess surfaces, measure square footage), PowerFlex (schedule around weather and your calendar), ColorConfidence (N/A — skip or replace with "Surface Assessment" step), JobTrack (track from setup through final rinse), Surface Prep (protect landscaping, windows, and fixtures), Top-Quality Cleaning Application (replace paint application with: proper PSI, nozzle, and solution selection for each surface), PCA Inspection (walk every surface to verify clean, damage-free results)
- **objections**: will it damage my surfaces, do I need it before painting, how often should I do it, DIY vs. pro
- **internalLinks**: Exterior Painting

## Files changed

- **`src/pages/ServiceDetail.tsx`** — add `metaTitle`, `metaDescription`, `blueprintSteps`, `objections`, `internalLinks` to all 7 remaining service entries; rewrite `description` copy where needed
- **`src/data/faqData.ts`** — review and tighten FAQs for each service (remove brand mentions, align paint quality language to testing/selection)

## Execution order

One page at a time, same order as the plan: Exterior → Cabinet → Commercial → One-Day → Popcorn → Drywall → Pressure Washing. Each page gets all fields in one pass.

