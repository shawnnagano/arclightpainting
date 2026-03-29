

# Rebuild Arclight Painting Website

## Overview
Recreate the arclightpainting.com website as a modern React single-page application, matching the design and content from the live site. The site is a painting company website with a homepage containing multiple sections. Subpages (Services, About, Pricing) are currently 404ing on the original site, so we'll focus on the homepage as the primary page and create placeholder routes for the nav links.

## Design System
Based on the screenshot, the brand uses:
- **Dark navy/blue** (#0a1628) for header/backgrounds
- **Hot pink/magenta** (#e91e8c) for accent color (CTA buttons, highlighted words)
- **White** for text on dark backgrounds
- **Light gray** for alternate section backgrounds
- **Clean, modern sans-serif typography** (likely Inter or similar)

## Structure (Files to Create/Modify)

### 1. Update design tokens (`src/index.css`)
- Set primary to dark navy, accent to hot pink/magenta
- Update CSS variables to match the Arclight brand

### 2. Create homepage sections as components:
- **`src/components/TopBar.tsx`** - Scrolling service ticker bar (House Painting | Exterior Painting | Interior Painting | Cabinet Refinishing | Drywall | Commercial Painting | Painter for a Day)
- **`src/components/Header.tsx`** - Logo (text-based "ARCLIGHT PAINTING"), nav (HOME, SERVICES dropdown, ABOUT dropdown, PRICING), "Get A Fast Quote" CTA button
- **`src/components/HeroSection.tsx`** - "PROFESSIONAL HOUSE PAINTERS IN BOTHELL, WA" heading with pink highlighted words, tagline "Real People. Real Purpose. Exceptional Results.", Google review cards carousel
- **`src/components/TestimonialsSection.tsx`** - "See Why Customers Love Arclight" with review cards (Frank B, Katia S, Donna D, Lauren B, Margie C, Linda C)
- **`src/components/OwnersSection.tsx`** - Photo placeholder of owners with transition into services
- **`src/components/ServicesSection.tsx`** - 6 service cards (Interior Painting, Exterior Painting, Cabinet Refinishing, Drywall Repair, Pressure Washing, Commercial Painting) with placeholder images
- **`src/components/ValuesSection.tsx`** - Three columns: Real People, Real Purpose, Exceptional Results with bullet points
- **`src/components/GuaranteeSection.tsx`** - 100% Satisfaction Guarantee with subsections
- **`src/components/BlueprintSection.tsx`** - "Above & Beyond Blueprint" 7-step accordion/tabs
- **`src/components/GallerySection.tsx`** - Project photo grid with placeholder images
- **`src/components/CTASection.tsx`** - "Get The Highest Quality House Painting in Bothell" with quote button
- **`src/components/Footer.tsx`** - Company info, contact, social links

### 3. Update `src/pages/Index.tsx`
- Compose all sections into the full homepage

### 4. Update `src/App.tsx`
- Add routes for `/services`, `/about`, `/pricing`, `/schedule` (placeholder pages)

### 5. Update `index.html`
- Title: "Arclight Painting - Professional House Painters in Bothell, WA"
- Meta descriptions updated

## Content Source
All text content extracted from the live site scrape. Images will use Unsplash-style placeholder images relevant to house painting since the WordPress export doesn't contain usable image URLs for direct hotlinking.

## Technical Notes
- All components use Tailwind CSS and shadcn/ui primitives
- Responsive design (mobile hamburger menu, stacked sections)
- Smooth scroll between sections
- Review carousel using existing UI components
- No backend needed -- purely static content site

