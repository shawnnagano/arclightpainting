import type { FAQItem } from "@/data/faqData";

import bothellHero from "@/assets/bothell-wa-hero.webp";
import kenmoreHero from "@/assets/kenmore-wa-hero.webp";
import woodinvilleHero from "@/assets/woodinville-wa-hero.webp";
import kirklandHero from "@/assets/kirkland-wa-hero.webp";
import millCreekHero from "@/assets/mill-creek-wa-hero.webp";
import everettHero from "@/assets/everett-wa-hero.webp";
import cottageLakeHero from "@/assets/cottage-lake-wa-hero.webp";
import bellevueHero from "@/assets/bellevue-wa-hero.webp";
import unionHillHero from "@/assets/union-hill-novelty-hill-wa-hero.webp";
import redmondHero from "@/assets/redmond-wa-hero.webp";
import clearviewHero from "@/assets/clearview-wa-hero.webp";
import lakeForestParkHero from "@/assets/lake-forest-park-wa-hero.webp";
import seattleHero from "@/assets/seattle-wa-hero.webp";

export interface ServiceArea {
  name: string;
  slug: string;
  state: string;
  description: string;
  localFlavor: string;
  highlights: string[];
  metaDescription: string;
  heroImage: string;
  heroDescription: string;
  neighborhoods: string[];
  cityFaqs: FAQItem[];
  cityServiceHighlights?: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Bothell",
    slug: "bothell",
    state: "Washington",
    description:
      "As Bothell's trusted painting team, Arclight has been transforming homes and businesses throughout this vibrant community. From the charming downtown corridor to the beautiful neighborhoods along the Sammamish River, we understand the unique character of Bothell properties and deliver finishes that complement the Pacific Northwest aesthetic.",
    localFlavor:
      "Bothell is home for us — literally. We love grabbing a coffee at the Daily Grind on Bothell Way before heading to a job, or picking up donuts from Hillcrest Bakery for the crew. There's something special about painting homes in a town where we know the streets by heart, from the trails along the Sammamish River to the quirky shops downtown. When we finish a project in Bothell, we don't just drive away — we're still part of the neighborhood.",
    highlights: [
      "Serving residential and commercial properties across Bothell",
      "Experienced with Bothell's mix of historic and modern architecture",
      "Familiar with local HOA requirements and neighborhood standards",
    ],
    metaDescription:
      "Professional painting services in Bothell, WA. Interior, exterior, cabinet refinishing & more. Arclight Painting delivers quality craftsmanship with our Above & Beyond Blueprint™.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Main_Street%2C_Bothell%2C_WA_02.jpg/1280px-Main_Street%2C_Bothell%2C_WA_02.jpg",
    heroDescription: "Bothell's hometown painting company — delivering meticulous craftsmanship to our own neighbors since day one.",
    neighborhoods: ["Canyon Park", "North Creek", "Queensgate", "Bothell Landing", "Brickyard", "Maltby"],
    cityFaqs: [
      {
        question: "Are you locally based in Bothell?",
        answer: "Yes. Arclight Painting is headquartered in Bothell. This is our home base — we live, work, and raise our families here. When you hire us, you are supporting a local, veteran-owned business right in your community.",
      },
      {
        question: "Do you work with Bothell HOAs?",
        answer: "Yes. We are familiar with the architectural guidelines in neighborhoods like Canyon Park, Queensgate, and North Creek. We can help navigate color approvals and community standards so your project goes smoothly.",
      },
      {
        question: "What types of homes do you paint in Bothell?",
        answer: "Bothell has a great mix — from 1970s and 1980s split-levels and ramblers in established neighborhoods to newer two-story homes in Canyon Park and North Creek. We handle all of them, including the prep challenges that come with older siding and trim.",
      },
      {
        question: "How does Bothell's climate affect exterior paint?",
        answer: "Bothell gets significant rain and humidity, especially in fall and winter. Moisture can cause peeling, mildew, and wood rot if surfaces are not properly prepared and coated. We use moisture-resistant primers and premium exterior paints designed for Pacific Northwest conditions.",
      },
      {
        question: "How much does house painting cost in Bothell?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you offer free estimates in Bothell?",
        answer: "Yes. We provide free on-site estimates throughout Bothell and surrounding areas. Once you approve the scope, your estimate becomes a fixed-price agreement — no surprises.",
      },
    ],
  },
  {
    name: "Kenmore",
    slug: "kenmore",
    state: "Washington",
    description:
      "Kenmore's lakeside location and growing downtown make it an exciting place to live — and Arclight is proud to help homeowners keep their properties looking fresh. From waterfront homes to the neighborhoods along the Burke-Gilman Trail, we paint Kenmore with precision.",
    localFlavor:
      "Kenmore sits right at the north tip of Lake Washington, and you can feel the lake everywhere you go. We love biking the Burke-Gilman Trail through town on our days off, and grabbing a bite at one of the spots in the growing Kenmore Village. The Lodge at St. Edward State Park is one of our favorite places — the old seminary turned hotel has this incredible atmosphere tucked into 326 acres of forest. Painting homes in Kenmore means working near beautiful water views, towering evergreens, and a community that genuinely cares about how their neighborhood looks.",
    highlights: [
      "Serving Kenmore homes near Lake Washington and the Sammamish River",
      "Moisture-smart coatings for lakeside and river-adjacent properties",
      "Quick, professional service for Kenmore's growing community",
    ],
    metaDescription:
      "Kenmore, WA painting company. Arclight Painting provides expert interior & exterior painting, drywall repair, and cabinet refinishing. Schedule your estimate today.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Kenmore%2C_WA_-_Log_Boom_Park%2C_seen_from_the_Pier_01.jpg/1280px-Kenmore%2C_WA_-_Log_Boom_Park%2C_seen_from_the_Pier_01.jpg",
    heroDescription: "Just minutes from our Bothell headquarters — trusted by Kenmore homeowners for lakeside-tough painting that lasts.",
    neighborhoods: ["Kenmore Village", "Northshore", "Arrowhead", "Linwood", "St. Edward", "Burke-Gilman corridor"],
    cityFaqs: [
      {
        question: "Do you paint waterfront and lake-adjacent homes in Kenmore?",
        answer: "Yes. Kenmore's proximity to Lake Washington means higher moisture exposure, which demands proper prep, mildew-resistant primers, and coatings built for wet climates. We handle these projects regularly.",
      },
      {
        question: "What types of homes do you paint in Kenmore?",
        answer: "Kenmore has a wide range — mid-century ramblers near the lake, split-levels in Northshore, and newer townhomes near Kenmore Village. We have experience with all of them and tailor our prep and paint approach to each home's needs.",
      },
      {
        question: "Is Kenmore close to your service area?",
        answer: "Kenmore is right next door to our Bothell headquarters — just a few minutes away. We are in Kenmore frequently and can schedule your estimate quickly.",
      },
      {
        question: "How does lake moisture affect exterior painting in Kenmore?",
        answer: "Lake Washington and the Sammamish River create consistent moisture that can accelerate peeling, mildew growth, and wood deterioration. We use premium exterior systems with mildew inhibitors and ensure thorough surface prep to maximize paint life.",
      },
      {
        question: "How much does house painting cost in Kenmore?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you stand behind your work in Kenmore?",
        answer: "Absolutely. Every project comes with our 100% Satisfaction Guarantee and a 5-Year FreshStart™ Touch-Up Plan. We verify results through a PCA™ Quality Inspection walkthrough before any job is considered complete.",
      },
    ],
  },
  {
    name: "Woodinville",
    slug: "woodinville",
    state: "Washington",
    description:
      "Woodinville's wine country charm extends to its beautifully maintained homes and estates. Arclight is the go-to painting company for Woodinville homeowners who want quality finishes that complement the area's relaxed yet refined lifestyle.",
    localFlavor:
      "Woodinville is wine country right in our backyard, and we love it. Chateau Ste. Michelle — Washington's founding winery since 1967 — has that gorgeous 87-acre estate with summer concerts on the lawn that our team looks forward to every year. There are over 100 wineries and tasting rooms in the area, and the Warehouse District is always a fun stop. But beyond the wine, Woodinville has beautiful estate-style homes, horse properties, and newer developments around Woodinville proper. The mix of rural elegance and suburban convenience makes it a unique place to paint, and the homeowners here appreciate craftsmanship that matches their surroundings.",
    highlights: [
      "Trusted by Woodinville homeowners in wine country and beyond",
      "Exterior painting that enhances Woodinville's estate-style properties",
      "Cabinet and interior painting to refresh Woodinville kitchens and living spaces",
    ],
    metaDescription:
      "Woodinville, WA painting services. Arclight Painting delivers quality interior & exterior painting, cabinet refinishing, and more. Get a fast, free estimate.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chateau_Ste._Michelle_Winery_exterior.jpg/1280px-Chateau_Ste._Michelle_Winery_exterior.jpg",
    heroDescription: "Wine country homes deserve refined craftsmanship — Woodinville's trusted painters for estates, horse properties, and modern builds alike.",
    neighborhoods: ["Hollywood Hill", "Woodinville Proper", "Wellington", "Cottage Lake area", "Warehouse District", "Bear Creek"],
    cityFaqs: [
      {
        question: "Do you paint larger estate-style homes in Woodinville?",
        answer: "Yes. Woodinville has many larger properties, including estate homes, horse properties, and homes on acreage. We are equipped for larger-scale exterior and interior projects and schedule accordingly.",
      },
      {
        question: "What home styles do you see most in Woodinville?",
        answer: "Woodinville has everything from custom-built estates on Hollywood Hill to newer construction in Wellington and established homes near Bear Creek. Each style has different prep and coating needs, and we tailor our approach accordingly.",
      },
      {
        question: "Do you handle exterior painting for homes with lots of natural wood in Woodinville?",
        answer: "Yes. Many Woodinville homes feature cedar siding, wood trim, and natural accents. We properly prepare and coat wood surfaces with products designed for the Pacific Northwest climate to protect against moisture, UV damage, and mildew.",
      },
      {
        question: "How far is Woodinville from your home base?",
        answer: "Woodinville borders Bothell — it is one of our closest service areas. We are in Woodinville regularly and can schedule estimates quickly.",
      },
      {
        question: "How much does house painting cost in Woodinville?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you offer cabinet refinishing in Woodinville?",
        answer: "Yes. Cabinet refinishing is one of our most popular services in Woodinville. We deliver a factory-smooth finish that transforms dated cabinets for a fraction of the cost of replacement.",
      },
    ],
  },
  {
    name: "Kirkland",
    slug: "kirkland",
    state: "Washington",
    description:
      "Kirkland homeowners trust Arclight for painting that matches the waterfront city's high standards. Whether your home overlooks Lake Washington or sits in one of Kirkland's tree-lined neighborhoods, we deliver meticulous work that enhances curb appeal and interior comfort.",
    localFlavor:
      "We love working in Kirkland — there's nothing like finishing up a lakeside exterior and walking down to the Kirkland waterfront for dinner at Hearth Restaurant at the Heathman Hotel. The public art along the Marina Park trail always inspires us to bring that same attention to detail to every brushstroke. Kirkland's mix of charming craftsman homes and modern builds keeps our work interesting, and the views from the hillside neighborhoods never get old.",
    highlights: [
      "Expert painters serving Kirkland's lakeside and hillside homes",
      "Moisture-resistant exterior coatings suited to waterfront properties",
      "Cabinet refinishing that refreshes Kirkland kitchens beautifully",
    ],
    metaDescription:
      "Top-rated painting company in Kirkland, WA. Interior & exterior painting, cabinet refinishing, drywall repair. Get a fast quote from Arclight Painting today.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Beach_at_Marina_Park%2C_Kirkland%2C_WA_-_panoramio.jpg/1280px-Beach_at_Marina_Park%2C_Kirkland%2C_WA_-_panoramio.jpg",
    heroDescription: "Waterfront-grade craftsmanship for Kirkland's craftsman homes, hillside properties, and modern builds.",
    neighborhoods: ["Juanita", "Houghton", "Totem Lake", "Bridle Trails", "Norkirk", "Moss Bay"],
    cityFaqs: [
      {
        question: "Do you paint craftsman-style homes in Kirkland?",
        answer: "Yes. Kirkland has beautiful craftsman homes throughout Norkirk, Houghton, and the downtown core. These homes have detailed trim, exposed rafters, and multiple paint surfaces that require careful prep and precise application.",
      },
      {
        question: "Do you work with Kirkland HOAs and architectural guidelines?",
        answer: "Yes. Many Kirkland neighborhoods, especially in areas like Bridle Trails and Totem Lake, have architectural committees or HOA color requirements. We can help navigate approvals and recommend compliant color palettes.",
      },
      {
        question: "How does the lake affect painting in Kirkland?",
        answer: "Homes near Lake Washington in neighborhoods like Juanita and Moss Bay face higher humidity and moisture exposure. We use mildew-resistant primers and premium coatings designed to hold up in wet, lakeside conditions.",
      },
      {
        question: "What services are most popular in Kirkland?",
        answer: "Interior repaints, full exterior refreshes, and cabinet refinishing are our most requested services in Kirkland. The area's mix of older craftsman homes and newer construction means varied prep needs, and we tailor our approach to each.",
      },
      {
        question: "How much does house painting cost in Kirkland?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Can you handle steep lots and multi-story homes in Kirkland?",
        answer: "Yes. Many Kirkland homes sit on hillsides with challenging access. Our crew is experienced with tall ladders, staging, and the safety protocols needed for multi-story and steep-lot exteriors.",
      },
    ],
  },
  {
    name: "Mill Creek",
    slug: "mill-creek",
    state: "Washington",
    description:
      "Mill Creek's well-maintained neighborhoods and master-planned community deserve a painting team that meets its elevated standards. Arclight consistently delivers clean lines, quality materials, and attention to detail that Mill Creek homeowners expect.",
    localFlavor:
      "Mill Creek is one of the most beautifully maintained communities we work in. The Mill Creek Town Center is a great spot for lunch between jobs — it took over 10 years of community planning to bring it to life, and that kind of care shows. We also love the trail system that winds through the neighborhoods; there are over 15 miles of walking paths here. Mill Creek Sports Park and Freedom Field are always buzzing with families on weekends. Homeowners here take pride in their properties, and we match that energy with top-quality work.",
    highlights: [
      "Familiar with Mill Creek HOA and architectural guidelines",
      "Interior and exterior painting for the community's signature homes",
      "Color consultations to complement Mill Creek's cohesive aesthetic",
    ],
    metaDescription:
      "Mill Creek, WA painting experts. Arclight Painting offers residential painting, cabinet refinishing, and more. Quality craftsmanship backed by our guarantee.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Mill_Creek_Town_Center.jpg/1280px-Mill_Creek_Town_Center.jpg",
    heroDescription: "Painting that meets Mill Creek's elevated community standards — HOA-savvy, detail-focused, and built to last.",
    neighborhoods: ["Country Club", "Heatherwood", "The Farm", "Thomas Lake", "Penny Creek", "Gateway"],
    cityFaqs: [
      {
        question: "Are you familiar with Mill Creek HOA requirements?",
        answer: "Yes. Mill Creek is a master-planned community with specific architectural guidelines for exterior colors. We help homeowners navigate the approval process, recommend compliant palettes, and submit color selections when needed.",
      },
      {
        question: "What types of homes do you typically paint in Mill Creek?",
        answer: "Mill Creek has well-maintained two-story homes, ramblers, and newer builds throughout neighborhoods like Country Club, Heatherwood, and The Farm. We are experienced with all of these and understand the community's expectations for quality.",
      },
      {
        question: "Do you offer color consultation for Mill Creek homes?",
        answer: "Yes. Our ColorConfidence™ Consultation is especially helpful in Mill Creek, where color choices need to work within HOA guidelines and complement the neighborhood's cohesive look. We help you find colors that stand out tastefully.",
      },
      {
        question: "How do you handle the trail-side homes in Mill Creek?",
        answer: "Homes backing up to Mill Creek's 15+ miles of trails often face more moisture and shade on their rear exteriors. We pay close attention to these exposures, using mildew-resistant products and ensuring thorough prep on shaded surfaces.",
      },
      {
        question: "How much does house painting cost in Mill Creek?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you stand behind your work?",
        answer: "Yes. Every project comes with our 100% Satisfaction Guarantee and a 5-Year FreshStart™ Touch-Up Plan. We inspect every job using PCA™ Quality Standards before it is considered complete.",
      },
    ],
  },
  {
    name: "Everett",
    slug: "everett",
    state: "Washington",
    description:
      "From Everett's historic neighborhoods to its waterfront developments, Arclight brings reliable painting services to Snohomish County's largest city. We understand the range of architecture across Everett and tailor our approach to each project.",
    localFlavor:
      "Everett has been reinventing itself beautifully. The waterfront is thriving — we love grabbing lunch at Fisherman Jack's on the marina for their incredible Asian-seafood fusion after finishing a job nearby. The Jetty Bar & Grille at Hotel Indigo is another crew favorite with those marina views. From the historic homes in the Rucker Hill neighborhood to the newer waterfront condos at Millwright District, Everett has an incredible range of architecture. The Port of Everett marina area is one of the most exciting waterfronts in the region, and we're proud to paint homes throughout this revitalized city.",
    highlights: [
      "Serving all of Everett including downtown, waterfront, and suburban areas",
      "Experience with historic home restoration painting",
      "Commercial painting available for Everett businesses",
    ],
    metaDescription:
      "Everett, WA painting company. Arclight Painting provides residential & commercial painting, drywall repair, and cabinet refinishing in Everett. Free estimates.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Everett_WA._-_USA_02_19_2020_Boat_mooring_with_Anthony%27s_Homeport_Resturant_on_Port_Gardner_bay._%2849565791383%29.jpg/1280px-Everett_WA._-_USA_02_19_2020_Boat_mooring_with_Anthony%27s_Homeport_Resturant_on_Port_Gardner_bay._%2849565791383%29.jpg",
    heroDescription: "From Rucker Hill Victorians to waterfront condos — Everett's go-to painters for every style of home.",
    neighborhoods: ["Rucker Hill", "Bayside", "Boulevard Bluffs", "Glacier View", "Lowell", "Millwright District"],
    cityFaqs: [
      {
        question: "Do you have experience with historic homes in Everett?",
        answer: "Yes. Everett's Rucker Hill neighborhood and other historic areas feature Victorians, Craftsman bungalows, and early-1900s homes that need specialized prep — lead paint considerations, detailed woodwork, and period-appropriate color guidance. We handle all of it.",
      },
      {
        question: "Do you offer commercial painting in Everett?",
        answer: "Yes. We serve Everett businesses including offices, retail spaces, and the growing waterfront commercial district. We can schedule around business hours and handle multi-phase projects.",
      },
      {
        question: "How does Everett's coastal climate affect exterior paint?",
        answer: "Everett's proximity to Port Gardner Bay means salt air, wind, and rain exposure that can break down exterior coatings faster. We use marine-grade primers and premium paints formulated to withstand coastal conditions.",
      },
      {
        question: "What neighborhoods in Everett do you serve?",
        answer: "We serve all of Everett — Rucker Hill, Bayside, Boulevard Bluffs, Glacier View, Lowell, the Millwright District, and everywhere in between. We are in Everett frequently and know the area well.",
      },
      {
        question: "How much does house painting cost in Everett?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "How far is Everett from your home base?",
        answer: "Everett is a short drive north from our Bothell headquarters. We are in Everett regularly and can schedule your estimate quickly.",
      },
    ],
  },
  {
    name: "Cottage Lake",
    slug: "cottage-lake",
    state: "Washington",
    description:
      "The peaceful Cottage Lake community deserves painters who appreciate its rural charm. Arclight brings careful, detail-oriented craftsmanship to the larger properties and wooded lots that define this beautiful unincorporated area northeast of Woodinville.",
    localFlavor:
      "Cottage Lake is one of those hidden gems — quiet roads, tall trees, and homes with real character. We love the drive out past the rolling lots, and our crew has been known to take a detour to Cottage Lake Park to enjoy the waterfront during lunch. The fishing at Cottage Lake itself is legendary (Rainbow Trout and Cutthroat!), and the whole area has a peaceful, country feel that we respect by keeping our job sites tidy and our work unhurried but precise.",
    highlights: [
      "Experienced with larger rural properties around Cottage Lake",
      "Exterior painting that protects against the area's wooded, humid environment",
      "Respectful of the natural surroundings and peaceful neighborhood feel",
    ],
    metaDescription:
      "Painting services in Cottage Lake, WA. Arclight Painting offers interior, exterior, and cabinet refinishing for homes in the Cottage Lake area. Get a fast quote.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cottage_Lake_%28Washington%29_2026_-_01.jpg/1280px-Cottage_Lake_%28Washington%29_2026_-_01.jpg",
    heroDescription: "Rural properties and wooded lots need paint that can handle the shade and moisture — that's our specialty.",
    neighborhoods: ["Cottage Lake", "Avondale", "Bear Creek area", "Redmond Ridge border", "Woodinville outskirts"],
    cityFaqs: [
      {
        question: "Do you handle larger properties in the Cottage Lake area?",
        answer: "Yes. Cottage Lake properties tend to be larger with more exterior surface area and often include outbuildings, decks, and fences. We are equipped for bigger projects and price them fairly.",
      },
      {
        question: "How does the wooded environment around Cottage Lake affect paint?",
        answer: "Shade from evergreens and leaf canopy keeps surfaces damp longer, which promotes mildew, moss, and moisture-related paint failure. We use mildew-resistant primers and premium coatings, and we prep surfaces thoroughly before painting.",
      },
      {
        question: "Do you paint cedar siding and natural wood homes?",
        answer: "Yes. Many Cottage Lake homes feature cedar siding, wood shingles, and natural wood accents. We properly prep and coat wood surfaces with products designed to protect against moisture, UV damage, and the area's humid environment.",
      },
      {
        question: "How far is Cottage Lake from your headquarters?",
        answer: "Cottage Lake is just northeast of our Bothell home base, bordering Woodinville. We are very close and can schedule your estimate quickly.",
      },
      {
        question: "How much does house painting cost in Cottage Lake?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Are you respectful of the rural property feel?",
        answer: "Absolutely. We keep job sites clean, protect landscaping, and treat your property with care. Our crew understands the character of the Cottage Lake area and works accordingly.",
      },
    ],
  },
  {
    name: "Bellevue",
    slug: "bellevue",
    state: "Washington",
    description:
      "Bellevue's upscale homes and commercial spaces demand precision and premium materials. Arclight brings a meticulous eye to every Bellevue project, from luxury residences in West Bellevue to growing businesses in the Bel-Red corridor.",
    localFlavor:
      "Bellevue is where ambition meets beauty. We've painted homes with views of the Cascades and Lake Washington that take your breath away. When the crew needs a break, the 21-acre Bellevue Downtown Park — with its iconic 240-foot waterfall cascading into a reflecting pond — is the perfect spot to recharge. Bellevue Square is right around the corner for everything you need. From the luxury homes in Meydenbauer to the modern builds in Wilburton, Bellevue homeowners expect the best, and that's exactly what we bring.",
    highlights: [
      "Premium painting services for Bellevue's luxury residential market",
      "Commercial painting for Bellevue's thriving business district",
      "High-end cabinet refinishing and specialty finishes available",
    ],
    metaDescription:
      "Bellevue, WA painting services. Arclight Painting delivers premium interior & exterior painting for homes and businesses. Get your fast, free quote today.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bellevue_Downtown_Park_aerial%2C_April_2023.png/1280px-Bellevue_Downtown_Park_aerial%2C_April_2023.png",
    heroDescription: "Premium painting for Bellevue's luxury homes and high-end properties — craftsmanship that matches the Eastside's highest standards.",
    neighborhoods: ["Meydenbauer", "West Bellevue", "Bridle Trails", "Wilburton", "Bel-Red", "Crossroads"],
    cityFaqs: [
      {
        question: "Do you serve luxury and high-end homes in Bellevue?",
        answer: "Yes. We regularly work on upscale homes in West Bellevue, Meydenbauer, and Bridle Trails. We understand the level of precision and premium materials these properties require, from custom color matching to specialty finishes.",
      },
      {
        question: "Do you handle commercial painting in Bellevue?",
        answer: "Yes. We serve Bellevue businesses in the Bel-Red corridor, downtown offices, and retail spaces. We can work around business hours and coordinate multi-phase projects to minimize disruption.",
      },
      {
        question: "What makes Bellevue homes different to paint?",
        answer: "Bellevue has a high concentration of newer, custom-built homes with complex trim details, tall ceilings, and premium materials. These homes demand careful prep, precise masking, and premium products — which is exactly how we approach every Bellevue project.",
      },
      {
        question: "Do you work with Bellevue HOAs?",
        answer: "Yes. Several Bellevue neighborhoods have architectural committees and HOA color requirements. We can help with color selection that meets guidelines and handle any approval paperwork.",
      },
      {
        question: "How much does house painting cost in Bellevue?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you offer cabinet refinishing in Bellevue?",
        answer: "Yes. Cabinet refinishing is popular in Bellevue, especially for homeowners updating kitchens without a full remodel. We deliver factory-smooth finishes that transform dated cabinets at a fraction of replacement cost.",
      },
    ],
  },
  {
    name: "Union Hill-Novelty Hill",
    slug: "union-hill-novelty-hill",
    state: "Washington",
    description:
      "The spacious properties of Union Hill-Novelty Hill call for painters who can handle larger-scale projects with the same care as any home. Arclight is experienced with the area's newer construction and larger lots, delivering quality across every square foot.",
    localFlavor:
      "Union Hill-Novelty Hill is tucked between Redmond and the Snoqualmie Valley, and the properties out here are stunning — big lots, newer construction, and gorgeous views of the Cascades. We love the Redmond Ridge Trail system that winds through the area, connecting parks and neighborhoods through evergreen forest. Redmond Ridge Park is a great gathering spot, and the whole community has this polished, well-planned feel. The homes here are spacious and modern, which gives us the chance to do some of our best work on big, beautiful walls and tall ceilings.",
    highlights: [
      "Experienced with larger homes on Union Hill and Novelty Hill",
      "Equipped for the unique needs of newer-construction properties",
      "Full-service painting including exteriors, interiors, and cabinets",
    ],
    metaDescription:
      "Painting services in Union Hill-Novelty Hill, WA. Arclight Painting provides expert residential painting, cabinet refinishing, and drywall repair.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cascade_Range_cabin_%28Unsplash%29.jpg/1280px-Cascade_Range_cabin_%28Unsplash%29.jpg",
    heroDescription: "Spacious homes and tall ceilings deserve a crew built for scale — Union Hill and Novelty Hill's trusted painting team.",
    neighborhoods: ["Redmond Ridge", "Trilogy at Redmond Ridge", "Novelty Hill", "Union Hill", "Bear Creek area"],
    cityFaqs: [
      {
        question: "Do you handle the larger homes in Union Hill-Novelty Hill?",
        answer: "Yes. Homes in this area are often 3,000 to 5,000+ square feet with tall ceilings, open floor plans, and significant exterior surfaces. We crew-size appropriately and use PowerFlex™ Scheduling to keep larger projects on track.",
      },
      {
        question: "What is different about painting newer construction?",
        answer: "Newer homes may need different prep — builder-grade paint is thinner, drywall finish levels vary, and some surfaces may not have been primed properly the first time. We assess these factors during the estimate and adjust our approach.",
      },
      {
        question: "Do you work in Redmond Ridge and Trilogy?",
        answer: "Yes. We are familiar with both communities, including the HOA guidelines in Redmond Ridge and the specific needs of homes in the Trilogy 55+ community.",
      },
      {
        question: "How far are Union Hill and Novelty Hill from your home base?",
        answer: "The area is just east of Woodinville and Redmond — a short drive from our Bothell headquarters. We work in this area regularly.",
      },
      {
        question: "How much does house painting cost in Union Hill-Novelty Hill?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you offer color consultation for these large open-floor-plan homes?",
        answer: "Yes. Open floor plans need careful color flow between spaces. Our ColorConfidence™ Consultation helps you choose a cohesive palette that works across connected rooms and under different lighting conditions.",
      },
    ],
  },
  {
    name: "Redmond",
    slug: "redmond",
    state: "Washington",
    description:
      "Redmond's fast-growing neighborhoods deserve a painting partner that keeps pace with quality. Arclight serves Redmond's tech-forward community with efficient scheduling, clean workmanship, and finishes that stand up to the region's weather patterns.",
    localFlavor:
      "Redmond has this incredible energy — you've got the Redmond Town Center for a lunch break, and the Marymoor Park trails right around the corner for an after-work reset. We've painted homes all over Education Hill, Grass Lawn, and the newer developments around Redmond Ridge. Our crew loves the Saturday Redmond Farmers Market and the growing downtown scene. It's a city that's always evolving, and we're proud to help Redmond homeowners keep their properties looking as sharp as the community around them.",
    highlights: [
      "Serving Redmond's established and new-construction neighborhoods",
      "Flexible scheduling to accommodate busy Redmond professionals",
      "Premium exterior coatings that withstand Pacific Northwest weather",
    ],
    metaDescription:
      "Professional painting services in Redmond, WA. Trusted by homeowners for interior painting, exterior painting, and cabinet refinishing. Get your free quote.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Marymoor_Park_aerial%2C_April_2023.png/1280px-Marymoor_Park_aerial%2C_April_2023.png",
    heroDescription: "Efficient, premium painting for Redmond's busy professionals — flexible scheduling, clean work, lasting results.",
    neighborhoods: ["Education Hill", "Grass Lawn", "Overlake", "Southeast Redmond", "Idylwood", "Willows"],
    cityFaqs: [
      {
        question: "Do you offer flexible scheduling for busy Redmond professionals?",
        answer: "Yes. Many Redmond homeowners work demanding schedules. We offer flexible estimate times and use PowerFlex™ Scheduling to coordinate around your calendar, with clear timelines and daily updates so you always know what to expect.",
      },
      {
        question: "What neighborhoods in Redmond do you serve?",
        answer: "We serve all of Redmond — Education Hill, Grass Lawn, Overlake, Southeast Redmond, Idylwood, Willows, and the newer developments around Redmond Ridge. We are in Redmond frequently.",
      },
      {
        question: "Do you paint townhomes and condos in Redmond?",
        answer: "Yes. Redmond has many townhome and condo communities, especially around Overlake and the Redmond Town Center area. We work with HOAs on color approvals and can paint interiors, exteriors, or both.",
      },
      {
        question: "What about homes with builder-grade paint in newer Redmond developments?",
        answer: "Builder-grade paint is thinner and often applied with minimal prep. We see this frequently in newer Redmond developments. A proper repaint with premium paint and professional prep makes a dramatic difference in both appearance and durability.",
      },
      {
        question: "How much does house painting cost in Redmond?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you stand behind your work?",
        answer: "Yes. Every project comes with our 100% Satisfaction Guarantee and a 5-Year FreshStart™ Touch-Up Plan, verified through a PCA™ Quality Inspection walkthrough.",
      },
    ],
  },
  {
    name: "Clearview",
    slug: "clearview",
    state: "Washington",
    description:
      "Clearview's quiet, semi-rural setting deserves a painting company that values quality and respects properties. Arclight delivers reliable, professional painting for Clearview homes, handling everything from full exterior repaints to detailed interior refreshes.",
    localFlavor:
      "Clearview lives up to its name — wide open spaces, big skies, and that true rural feel that's hard to find this close to the city. The community out here is tight-knit, with families, farms, and wooded acres that make every property unique. We love the drive out Highway 9, and the Clearview Coffee stand is a crew favorite for a quick pick-me-up. There's a strong \"country living\" vibe here that the Clearview Community Council works hard to preserve, and we respect that by treating every home and property like it's our own.",
    highlights: [
      "Serving the greater Clearview and unincorporated Snohomish County area",
      "Durable exterior coatings for properties in rural settings",
      "Friendly, respectful crew that treats your home like our own",
    ],
    metaDescription:
      "Clearview, WA house painters. Arclight Painting offers professional interior & exterior painting, pressure washing, and cabinet refinishing near Clearview.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Snohomish%2C_WA_-_Marks_Building_01.jpg/1280px-Snohomish%2C_WA_-_Marks_Building_01.jpg",
    heroDescription: "Country properties, big lots, and rural charm — Clearview's trusted painters who treat your home like our own.",
    neighborhoods: ["Clearview", "Maltby border", "Highway 9 corridor", "Cathcart", "unincorporated Snohomish County"],
    cityFaqs: [
      {
        question: "Do you serve the unincorporated Clearview area?",
        answer: "Yes. Clearview is unincorporated Snohomish County, and we serve the entire area including properties along Highway 9, near Maltby, and throughout the surrounding rural neighborhoods.",
      },
      {
        question: "How do rural properties in Clearview differ from suburban painting?",
        answer: "Clearview properties tend to be larger with more exterior surface, outbuildings, and exposure to weather. The rural setting means more shade from trees, which increases moisture and mildew concerns. We adjust our prep and product choices accordingly.",
      },
      {
        question: "Do you paint barns, outbuildings, and fences?",
        answer: "Yes. We can paint or stain outbuildings, sheds, barns, fences, and other structures as part of a larger project or as standalone work.",
      },
      {
        question: "How far is Clearview from your home base?",
        answer: "Clearview is just north of our Bothell headquarters along Highway 9. We drive through the area regularly and can schedule your estimate quickly.",
      },
      {
        question: "How much does house painting cost in Clearview?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you stand behind your work?",
        answer: "Yes. Every project comes with our 100% Satisfaction Guarantee and a 5-Year FreshStart™ Touch-Up Plan. We inspect every job to PCA™ Quality Standards before it is considered complete.",
      },
    ],
  },
  {
    name: "Lake Forest Park",
    slug: "lake-forest-park",
    state: "Washington",
    description:
      "Lake Forest Park's tree-canopied streets and mid-century homes have a character worth preserving. Arclight specializes in painting that respects and enhances the unique architectural style of this charming, wooded community north of Seattle.",
    localFlavor:
      "Lake Forest Park is one of our favorite communities to work in. Third Place Books at the Town Center is legendary — a huge independent bookstore with a pub and community commons that hosts live music every Friday and Saturday night. The Lake Forest Park Farmers Market runs out of there too and is one of the best in the region. The homes here sit on beautiful, wooded lots under towering evergreens, and many have that classic mid-century character that you just don't see in newer developments. We take extra care prepping around mature landscaping and gardens, because those trees and rhododendrons are as much a part of the home's charm as the paint.",
    highlights: [
      "Familiar with Lake Forest Park's mid-century and craftsman-style homes",
      "Mildew-resistant coatings ideal for the area's shaded, wooded lots",
      "Careful prep work that protects mature landscaping and gardens",
    ],
    metaDescription:
      "Lake Forest Park, WA painters. Arclight Painting offers expert interior & exterior painting for this unique, tree-lined community. Schedule your quote today.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Third_Place_Books_-_Ravenna_-_Flickr_-_brewbooks.jpg/1280px-Third_Place_Books_-_Ravenna_-_Flickr_-_brewbooks.jpg",
    heroDescription: "Mid-century charm under towering evergreens — painting that protects and preserves Lake Forest Park's unique character.",
    neighborhoods: ["Town Center", "Sheridan Beach", "Horizon View", "Brookside", "Burke-Gilman Trail area"],
    cityFaqs: [
      {
        question: "What is unique about painting homes in Lake Forest Park?",
        answer: "Lake Forest Park homes sit on heavily wooded lots under large evergreens. The shade and moisture create ideal conditions for mildew, moss, and accelerated paint breakdown. Proper prep — including cleaning, scraping, and mildew treatment — is essential before any coating goes on.",
      },
      {
        question: "Do you work on mid-century homes?",
        answer: "Yes. Lake Forest Park has many 1950s–1970s homes with unique architectural details, original wood siding, and large windows. We understand how to prep and paint these homes to preserve their character while protecting them from the elements.",
      },
      {
        question: "Do you protect mature landscaping during exterior painting?",
        answer: "Absolutely. Many Lake Forest Park properties have established gardens, mature rhododendrons, and towering trees. We use drop cloths, careful staging, and protective measures to keep landscaping safe during our work.",
      },
      {
        question: "How does the tree canopy affect exterior paint in Lake Forest Park?",
        answer: "Heavy tree cover keeps surfaces damp longer and promotes biological growth like mildew and algae. We use mildew-resistant primers and coatings formulated for shaded, humid conditions to ensure lasting results.",
      },
      {
        question: "How much does house painting cost in Lake Forest Park?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "How far is Lake Forest Park from your home base?",
        answer: "Lake Forest Park is just south of Kenmore and a short drive from our Bothell headquarters. We serve the area regularly and can schedule your estimate quickly.",
      },
    ],
  },
  {
    name: "Seattle",
    slug: "seattle",
    state: "Washington",
    description:
      "Seattle's diverse neighborhoods — from Capitol Hill to Ballard to West Seattle — deserve a painting team that understands the city's eclectic architecture. Arclight brings premium craftsmanship to Seattle homes and businesses, whether it's a classic Craftsman bungalow or a modern condo.",
    localFlavor:
      "Seattle is where it all comes together — world-class food, incredible views, and neighborhoods that each have their own personality. We love grabbing Pike Place chowder before a downtown job, or coffee from Elm Coffee Roasters in Pioneer Square. From painting Craftsman homes in Wallingford to refreshing Victorians on Capitol Hill, every Seattle project has its own story. The views of the Space Needle, Mount Rainier on a clear day, and the Puget Sound from the waterfront never get old. Seattle homeowners care deeply about their homes, and we match that passion with meticulous work on every project.",
    highlights: [
      "Serving all Seattle neighborhoods from Ballard to Beacon Hill",
      "Experienced with Seattle's diverse architectural styles",
      "Moisture-resistant coatings built for Seattle's maritime climate",
    ],
    metaDescription:
      "Professional house painters in Seattle, WA. Arclight Painting offers interior & exterior painting, cabinet refinishing, and drywall repair. Get a fast, free quote.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/SeattleI5Skyline.jpg/1280px-SeattleI5Skyline.jpg",
    heroDescription: "From Ballard Craftsman bungalows to Capitol Hill Victorians — Seattle's go-to painters for every neighborhood and style.",
    neighborhoods: ["Ballard", "Wallingford", "Fremont", "Capitol Hill", "Green Lake", "Ravenna", "University District", "West Seattle"],
    cityFaqs: [
      {
        question: "What Seattle neighborhoods do you serve?",
        answer: "We serve neighborhoods across Seattle including Ballard, Wallingford, Fremont, Capitol Hill, Green Lake, Ravenna, the University District, West Seattle, and more. Each neighborhood has its own architectural character, and we tailor our approach accordingly.",
      },
      {
        question: "Do you have experience with Seattle's older homes?",
        answer: "Yes. Seattle has a rich mix of Craftsman bungalows, Victorians, Tudor-style homes, and early-century builds. We understand the prep requirements for older homes — including lead paint considerations, wood repair, and period-appropriate color guidance.",
      },
      {
        question: "How does Seattle's climate affect exterior painting?",
        answer: "Seattle's maritime climate means rain, humidity, and limited sun exposure for much of the year. This accelerates moisture-related paint failure, mildew, and wood deterioration. We use moisture-resistant primers and premium exterior coatings built for these conditions.",
      },
      {
        question: "Do you paint condos and townhomes in Seattle?",
        answer: "Yes. We paint interiors for condo and townhome owners and can work with HOAs for exterior painting. We are experienced with the access and scheduling challenges that come with multi-unit properties.",
      },
      {
        question: "How much does house painting cost in Seattle?",
        answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
      },
      {
        question: "Do you offer commercial painting in Seattle?",
        answer: "Yes. We serve Seattle businesses including offices, restaurants, retail spaces, and tenant improvements. We schedule around business operations and can handle after-hours and weekend work.",
      },
    ],
  },
];
