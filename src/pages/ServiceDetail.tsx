import { type ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import painterForADayHero from "@/assets/one-day-painting-service-bothell-wa.webp";
import popcornCeilingHero from "@/assets/popcorn-ceiling-removal-bothell-wa.webp";
import commercialHero from "@/assets/commercial-painting-service-bothell-wa.webp";
import exteriorHero from "@/assets/exterior-house-painting-bothell-wa.webp";
import pressureWashingHero from "@/assets/pressure-washing-service-bothell-wa.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BlueprintSection from "@/components/BlueprintSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ObjectionsSection, { type Objection } from "@/components/ObjectionsSection";
import SEOHead, { serviceSchema, breadcrumbSchema, faqPageSchema } from "@/components/SEOHead";
import { serviceFAQs } from "@/data/faqData";

import { type BlueprintStep } from "@/components/BlueprintSection";

interface ServiceData {
  title: string;
  tagline: ReactNode;
  heroDescription: string;
  sectionHeadline: ReactNode;
  description: string[];
  image: string;
  benefits: string[];
  metaTitle?: string;
  metaDescription?: string;
  blueprintSteps?: BlueprintStep[];
  objections?: Objection[];
  internalLinks?: { label: string; href: string }[];
}

const serviceData: Record<string, ServiceData> = {
  "interior-painting": {
    title: "Interior Painting",
    metaTitle: "Interior House Painting in Bothell | Arclight Painting",
    metaDescription: "Professional interior house painting in Bothell. Meticulous prep, premium paints, flawless finishes, and a 100% Satisfaction Guarantee. Get a free TrueQuote™.",
    tagline: <>Transform Your <span className="text-accent">Living Spaces</span></>,
    heroDescription: "Premium interior house painting in Bothell — meticulous prep, flawless finishes, zero stress.",
    sectionHeadline: <>Interior Painting <span className="text-accent">Done Right</span> — Every Detail, Every Room</>,
    description: [
      "Your home's interior is where life happens, and every wall, ceiling, and trim piece plays a role in how it looks and feels. Our interior house painting process in Bothell is built around the details that make the difference — thorough surface preparation, top-quality paints selected through independent testing, and clean, organized worksites from start to finish.",
      "Whether you need a single accent wall or a full-home repaint, our team delivers consistent, lasting results. We protect your furniture and floors, repair minor surface imperfections, and apply the right primer and paint system for every surface. The final walkthrough ensures every detail meets our standard — and yours.",
    ],
    image: "/images/interior-room-painting-natural-light-bothell.webp",
    benefits: [
      "Free color consultation with our ColorConfidence™ program",
      "Top-quality paints selected through independent testing",
      "Meticulous surface preparation and priming",
      "Clean, organized worksite — every day",
      "Detailed final walkthrough with you",
      "Backed by our 100% Satisfaction Guarantee",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We walk through every room, measure walls, ceilings, and trim, and build a detailed, fixed-price proposal — no guesswork, no surprises." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "We schedule room by room so you can keep living in your home. Flexible start dates, clear timelines, and daily updates on what's next." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "Choose interior colors with visual mockups of your actual rooms, expert guidance on undertones and lighting, and on-site test patches." },
      { title: "JobTrack™ Project Management", branded: true, description: "Real-time tracking as we move room to room — from furniture protection through final touch-ups, you always know where things stand." },
      { title: "Surface Preparation & Protection", branded: false, description: "We fill holes, sand rough spots, repair minor drywall damage, caulk gaps, mask trim, and protect all floors and furniture before any paint is opened." },
      { title: "Top-Quality Paint Application", branded: false, description: "Walls rolled with even, consistent coats. Trim and edges cut in by hand. Top-quality paints — selected through independent testing — deliver richer color, better coverage, and a finish that holds up to daily life." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor walks every room with you, inspecting walls, trim, and ceilings against Painting Contractors of America standards before the job is closed." },
    ],
    objections: [
      {
        concern: "Will there be a mess in my home?",
        response: "We protect all surfaces before work begins and clean up at the end of every day. Most homeowners tell us the house looks better during the project than they expected.",
      },
      {
        concern: "How long until I can use the room?",
        response: "Most rooms are ready for light use the same evening. With standard latex paint and good airflow, you can sleep in the room within 24 hours. Low-VOC paints can shorten that further.",
      },
      {
        concern: "What if I don't like the color once it's on the wall?",
        response: "That's why we start with ColorConfidence™. You see your colors mocked up on your real walls before we paint. If something still isn't right, we make it right — that's our Satisfaction Guarantee.",
      },
      {
        concern: "Is professional painting really worth the cost over DIY?",
        response: "Professional prep, materials, and technique produce a finish that lasts years longer than most DIY jobs. Factor in time, tools, and the risk of redoing it, and professional painting typically costs less in the long run.",
      },
    ],
    internalLinks: [
      { label: "Drywall Repair", href: "/services/drywall-repairs" },
      { label: "Color Consultation", href: "/services/color-consultation" },
    ],
  },
  "exterior-painting": {
    title: "Exterior Painting",
    metaTitle: "Exterior House Painting in Bothell | Arclight Painting",
    metaDescription: "Professional exterior house painting in Bothell. Weather-tough prep, premium paints, lasting protection, and a 100% Satisfaction Guarantee. Get a free TrueQuote™.",
    tagline: <>Boost Your <span className="text-accent">Curb Appeal</span></>,
    heroDescription: "Weather-tough exterior painting built to protect your home and turn heads for years to come.",
    sectionHeadline: <>Protection That <span className="text-accent">Looks as Good</span> as It Performs</>,
    description: [
      "Your home's exterior is its first line of defense against the Pacific Northwest's rain, wind, and UV exposure. Our exterior house painting process in Bothell starts with the preparation that makes the difference — power washing, scraping, sanding, caulking, and priming every surface before any paint is applied.",
      "Whether you need a full-home repaint or targeted work on trim, fascia, and siding, our team delivers a durable, beautiful finish that protects your home for years. We protect your landscaping and property throughout the project and schedule around weather windows so the paint cures properly.",
    ],
    image: exteriorHero,
    benefits: [
      "Weather-resistant premium exterior paints",
      "Complete surface prep: power wash, scrape, sand, caulk",
      "Wood rot repair and replacement",
      "Detailed trim and accent work",
      "PowerFlex™ scheduling around weather conditions",
      "5-year workmanship warranty",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We measure every surface — siding, trim, fascia, soffits, and doors — and build a detailed, fixed-price proposal specific to your home's exterior." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "Exterior projects depend on weather. We schedule around optimal weather windows, adjust for rain delays, and keep you updated on timing shifts." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "Choose exterior colors with visual mockups that account for sun exposure, neighboring homes, and how colors shift between natural and shaded light." },
      { title: "JobTrack™ Project Management", branded: true, description: "Real-time tracking from power washing through final coat — you always know which surfaces are prepped, primed, and painted." },
      { title: "Surface Preparation & Protection", branded: false, description: "We power wash all surfaces, scrape loose paint, sand rough areas, caulk gaps and joints, prime bare wood and repairs, and protect landscaping, walkways, and windows." },
      { title: "Top-Quality Paint Application", branded: false, description: "Siding, trim, and fascia coated using the right method for each surface — brush, roll, or spray. Top-quality exterior paints, selected through independent testing, deliver weather resistance, UV protection, and color retention that holds up season after season." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor walks the full exterior with you, inspecting siding, trim, fascia, and all painted surfaces against Painting Contractors of America standards." },
    ],
    objections: [
      {
        concern: "What if it rains during my project?",
        response: "We plan every exterior project around weather windows. If conditions aren't right for proper application or drying, we adjust the schedule rather than compromise the result. PowerFlex™ Scheduling keeps you informed of any shifts.",
      },
      {
        concern: "How long will exterior paint really last?",
        response: "That depends on substrate, exposure, and preparation quality. Our thorough prep process and top-quality paints — selected through independent testing — deliver finishes that hold up far longer than rushed jobs. We back it with a 5-year workmanship warranty.",
      },
      {
        concern: "Is professional exterior painting worth the cost?",
        response: "Proper exterior prep, materials, and technique protect your home from moisture damage, wood rot, and premature wear. The cost of addressing those problems later almost always exceeds the cost of doing the paint job right the first time.",
      },
      {
        concern: "Will exterior painting disrupt my daily life?",
        response: "Most of the work happens outside, so daily life continues as normal. We protect entry points, coordinate access, and clean up at the end of every day.",
      },
    ],
    internalLinks: [
      { label: "Pressure Washing", href: "/services/pressure-washing" },
      { label: "Color Consultation", href: "/services/color-consultation" },
    ],
  },
  "cabinet-refinishing": {
    title: "Cabinet Refinishing",
    metaTitle: "Cabinet Refinishing in Bothell | Arclight Painting",
    metaDescription: "Professional cabinet refinishing in Bothell. Factory-smooth finishes, meticulous prep, and a 100% Satisfaction Guarantee. Get a free TrueQuote™.",
    tagline: <>Refresh Your Kitchen <span className="text-accent">Without the Remodel</span></>,
    heroDescription: "Factory-smooth cabinet finishes that transform your kitchen at a fraction of the cost of replacement.",
    sectionHeadline: <>A New Kitchen Feel — <span className="text-accent">Without the Remodel</span> Price Tag</>,
    description: [
      "Kitchen cabinets endure daily wear from food, grease, and stains, which fades and scuffs them over time. Cabinet refinishing is a cost-effective way to give your kitchen a fresh, modern look without the expense of a full remodel.",
      "Our cabinet refinishing process involves careful removal of hardware, thorough cleaning, sanding, priming, and applying multiple coats of premium cabinet-grade paint or stain for a factory-smooth finish.",
    ],
    image: "/images/cabinet-refinishing-project-bothell.webp",
    benefits: [
      "Fraction of the cost of new cabinets",
      "Factory-smooth finish with premium cabinet paints",
      "Wide range of colors and finishes available",
      "Minimal disruption to your daily routine",
      "Hardware removal and reinstallation included",
      "Transforms your kitchen in days, not weeks",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We inspect every door, drawer front, and cabinet box — assessing condition, layout, and finish type — then build a detailed, fixed-price proposal." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "We phase the work to minimize kitchen downtime, coordinating hardware removal, drying times, and reinstallation around your daily routine." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "Choose your cabinet color and finish with expert guidance — from classic whites and grays to bold modern tones — with samples matched to your countertops, backsplash, and lighting." },
      { title: "JobTrack™ Project Management", branded: true, description: "Track progress from hardware removal through final cure time — you always know which cabinets are prepped, coated, and ready for reinstallation." },
      { title: "Surface Preparation", branded: false, description: "Every surface is degreased, scuff-sanded, and primed to ensure the new finish bonds properly. We remove all hardware, label doors and drawers, and protect countertops, appliances, and floors." },
      { title: "Top-Quality Paint Application", branded: false, description: "Multiple coats of cabinet-grade paint or stain applied by spray and brush for a factory-smooth finish. Top-quality cabinet coatings — selected through independent testing — deliver durability, adhesion, and a finish that stands up to daily kitchen use." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor inspects every door, drawer, and frame for finish consistency, smoothness, and proper cure before the project is closed." },
    ],
    objections: [
      {
        concern: "Will a refinished cabinet hold up to daily use?",
        response: "When properly prepared and coated with cabinet-grade products, a refinished surface is highly durable. Proper curing time is key — we build that into the schedule so nothing is rushed.",
      },
      {
        concern: "How long will my kitchen be out of service?",
        response: "We phase the work to minimize downtime. In most cases, you'll have partial access to your kitchen throughout the project, and full use within a few days of completion.",
      },
      {
        concern: "Can you change dark cabinets to a light color?",
        response: "Yes. Significant color changes require additional prep, priming, and coats, which we account for in the scope. The result is a clean, even finish regardless of the original color.",
      },
      {
        concern: "Is refinishing worth it, or should I just replace?",
        response: "If your cabinet boxes are structurally sound, refinishing delivers a dramatic transformation at a fraction of replacement cost — often 50-70% less. Replacement makes more sense only when the cabinet structure itself is failing.",
      },
    ],
    internalLinks: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Color Consultation", href: "/services/color-consultation" },
    ],
  },
  "drywall-repairs": {
    title: "Drywall Repair",
    metaTitle: "Drywall Repair in Bothell | Arclight Painting",
    metaDescription: "Expert drywall repair in Bothell. Seamless patches, texture matching, and paint-ready finishes. Backed by a 100% Satisfaction Guarantee. Get a free TrueQuote™.",
    tagline: <><span className="text-accent">Seamless</span> Walls, Every Time</>,
    heroDescription: "Expert drywall repair that disappears into your walls — matched, blended, and paint-ready.",
    sectionHeadline: <><span className="text-accent">Invisible Repairs</span> That Make Walls Look New Again</>,
    description: [
      "Drywall may seem simple, but it is a key element for your home's structure and style. Whether you have nail holes, cracks, water damage, or larger patches that need repair, our team delivers seamless results.",
      "We match existing textures and finishes so repairs blend perfectly with the surrounding wall. Combined with our painting services, your walls will look flawless from corner to corner.",
    ],
    image: "/images/drywall-repair-project-bothell-wa.webp",
    benefits: [
      "Patch and repair holes of any size",
      "Texture matching for seamless results",
      "Water damage assessment and repair",
      "Crack repair and prevention",
      "Smooth finish ready for paint",
      "Often combined with interior painting for best results",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We assess every area of damage — holes, cracks, water stains, and texture issues — and build a detailed, fixed-price proposal for the full repair scope." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "We schedule around your availability, accounting for drying and curing times between repair coats so the work fits your life without unnecessary delays." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "We color-match repaired areas to your existing walls so the final paint blends seamlessly — no visible patches or mismatched tones." },
      { title: "JobTrack™ Project Management", branded: true, description: "Track progress from initial repair through paint-ready — you always know which areas are patched, sanded, primed, and ready for the final coat." },
      { title: "Surface Preparation", branded: false, description: "We cut out damaged drywall, install new backing or patches, tape joints, apply multiple coats of joint compound, sand smooth, and match existing wall texture before priming." },
      { title: "Top-Quality Paint Application", branded: false, description: "Repaired areas are primed and painted to blend seamlessly with the surrounding wall. Top-quality paints — selected through independent testing — ensure the repair disappears into the existing finish." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor inspects every repair for smoothness, texture match, and paint blend against Painting Contractors of America standards before the job is closed." },
    ],
    objections: [
      {
        concern: "Will the patch be visible after painting?",
        response: "Our goal is an invisible repair. We match existing textures and finishes, and in most cases recommend priming and painting the full wall plane for the cleanest result.",
      },
      {
        concern: "Do I need to repaint the whole wall?",
        response: "Not always, but painting the full wall or ceiling plane after a repair typically produces the most seamless result. We'll advise you on the best approach during the estimate.",
      },
      {
        concern: "Is drywall repair messy?",
        response: "It can create dust, but we contain the work area, use dust-control methods, and clean up thoroughly at the end of each day.",
      },
      {
        concern: "Is a small repair worth hiring a professional?",
        response: "Even small repairs benefit from proper technique — incorrect patching, taping, or texture matching can make the repair more visible than the original damage. Professional results save you from redoing it later.",
      },
    ],
    internalLinks: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Popcorn Ceiling Removal", href: "/services/popcorn-ceiling-removal" },
    ],
  },
  "pressure-washing": {
    title: "Pressure Washing",
    metaTitle: "Pressure Washing in Bothell | Arclight Painting",
    metaDescription: "Professional pressure washing in Bothell. Safe, effective cleaning for siding, driveways, decks, and more. Get a free TrueQuote™.",
    tagline: <>Restore Your Home's <span className="text-accent">Clean, Fresh Look</span></>,
    heroDescription: "Strip away years of grime, mold, and buildup — your home's fresh start begins here.",
    sectionHeadline: <>Years of Buildup <span className="text-accent">Gone in Hours</span></>,
    description: [
      "Professional pressure washing cleans siding, driveways, decks, and walkways to restore a fresh, clean look. Years of dirt, mold, mildew, and algae buildup can make your home look aged and neglected.",
      "Our pressure washing service is also an essential first step before any exterior painting project, ensuring proper paint adhesion and a long-lasting finish.",
    ],
    image: pressureWashingHero,
    benefits: [
      "Safe, effective cleaning for all exterior surfaces",
      "Removes mold, mildew, algae, and grime",
      "Prepares surfaces for exterior painting",
      "Extends the life of your siding and deck",
      "Eco-friendly cleaning solutions available",
      "Improves curb appeal instantly",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We assess every surface — siding, driveways, walkways, decks, and fences — measuring square footage and evaluating buildup to build a detailed, fixed-price proposal." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "We schedule around weather and your calendar, ensuring conditions are right for effective cleaning and proper drying." },
      { title: "Surface Assessment", branded: false, description: "Each surface is evaluated for material type, condition, and the type of buildup present — determining the right PSI, nozzle, and cleaning solution for safe, effective results." },
      { title: "JobTrack™ Project Management", branded: true, description: "Real-time tracking from setup through final rinse — you always know which surfaces are cleaned and which are next." },
      { title: "Surface Protection", branded: false, description: "We protect landscaping, windows, light fixtures, and any vulnerable areas before cleaning begins. Delicate surfaces get soft washing; harder surfaces get appropriate pressure." },
      { title: "Top-Quality Cleaning Application", branded: false, description: "Proper PSI, nozzle selection, and cleaning solutions matched to each surface type. Soft wash for delicate materials, full pressure for concrete and stone — every surface cleaned safely and thoroughly." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor walks every cleaned surface with you, verifying thorough results and confirming no damage to surfaces, landscaping, or fixtures." },
    ],
    objections: [
      {
        concern: "Will pressure washing damage my surfaces?",
        response: "It can if done incorrectly. We match pressure, nozzle, and technique to each surface type — using soft wash for delicate materials and appropriate pressure for harder surfaces. Proper methods prevent damage.",
      },
      {
        concern: "Do I need pressure washing before painting?",
        response: "In most cases, yes. Clean surfaces are essential for proper paint adhesion. Skipping this step can lead to peeling, bubbling, and premature paint failure.",
      },
      {
        concern: "How often should I pressure wash my home?",
        response: "That depends on your location, exposure, and the type of buildup. Most homes in the Pacific Northwest benefit from annual or biannual cleaning to prevent mold, mildew, and algae from taking hold.",
      },
      {
        concern: "Can I just do it myself with a rented machine?",
        response: "You can, but incorrect pressure or technique can damage siding, force water behind walls, or strip paint. Professional equipment and experience deliver safer, more consistent results.",
      },
    ],
    internalLinks: [
      { label: "Exterior Painting", href: "/services/exterior-painting" },
    ],
  },
  "commercial-painting": {
    title: "Commercial Painting",
    metaTitle: "Commercial Painting in Bothell | Arclight Painting",
    metaDescription: "Professional commercial painting in Bothell. Flexible scheduling, durable finishes, minimal disruption, and a 100% Satisfaction Guarantee. Get a free TrueQuote™.",
    tagline: <>Painting Tailored to <span className="text-accent">Your Business</span></>,
    heroDescription: "Professional results on your schedule — minimal disruption, maximum impact for your space.",
    sectionHeadline: <>Your Business Stays Open. Your Space Gets <span className="text-accent">Transformed</span>.</>,
    description: [
      "Commercial spaces need more than a fresh coat of paint — they need a professional result delivered on a timeline that respects your business operations. Our commercial painting services in Bothell are designed around your schedule, your standards, and your space.",
      "From offices and retail spaces to occupied commercial properties, we deliver clean, professional results with minimal disruption. After-hours and weekend scheduling, phased project plans, and clear communication keep your business running while we work.",
    ],
    image: commercialHero,
    benefits: [
      "Flexible scheduling — evenings and weekends available",
      "Minimal disruption to your business operations",
      "Durable, high-traffic commercial-grade paints",
      "Office, retail, restaurant, and warehouse spaces",
      "Color consultation for brand-aligned environments",
      "Licensed, bonded, and insured",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We walk every space, measure by zone, and build a detailed, fixed-price proposal that accounts for access, phasing, and after-hours work." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "We schedule around your business hours — evenings, weekends, and phased timelines that keep your operations running while we work." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "Choose colors aligned with your brand identity, space function, and lighting conditions — with expert guidance on creating the right environment for your customers and employees." },
      { title: "JobTrack™ Project Management", branded: true, description: "Phase-by-phase tracking across zones — you always know which areas are prepped, painted, and ready for use, with clear communication at every step." },
      { title: "Surface Preparation & Protection", branded: false, description: "We patch walls, repair damaged surfaces, protect tenant fixtures, furniture, and flooring, and mask all trim and edges before any paint is applied." },
      { title: "Top-Quality Paint Application", branded: false, description: "Commercial-grade, high-traffic coatings applied with precision. Top-quality paints — selected through independent testing — deliver durability, washability, and a professional finish that holds up to daily commercial use." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor inspects each zone against the project scope, verifying finish quality, coverage, and cleanliness against Painting Contractors of America standards." },
    ],
    objections: [
      {
        concern: "Will painting disrupt my business operations?",
        response: "We plan every commercial project to minimize disruption. After-hours and weekend scheduling, phased zones, and clear communication keep your business running while we work.",
      },
      {
        concern: "Can you paint while tenants or employees are in the space?",
        response: "Yes. Occupied commercial painting requires careful planning, containment, ventilation, and communication — all of which we build into the project plan from the start.",
      },
      {
        concern: "How do I know the project will stay on schedule?",
        response: "JobTrack™ gives you real-time visibility into progress by zone. We provide clear timelines, daily updates, and proactive communication if anything changes.",
      },
      {
        concern: "Are you properly insured for commercial work?",
        response: "Yes. Arclight Painting is fully licensed, bonded, and insured for commercial projects. We carry the proper coverage to protect you, your property, and our team.",
      },
    ],
    internalLinks: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
    ],
  },
  "painter-for-a-day": {
    title: "One-Day Painting Service",
    metaTitle: "One-Day Painting Service in Bothell | Arclight Painting",
    metaDescription: "Book a skilled, background-checked painter for a full day in Bothell. Touch-ups, accent walls, trim, and more — no estimate needed. Just $689.",
    tagline: <>One Professional. One Day. One <span className="text-accent">Fresh New Look.</span></>,
    heroDescription: "A skilled, background-checked painter dedicated to your home for a full 8 hours. No estimate needed.",
    sectionHeadline: <>Your Checklist. Our Painter. <span className="text-accent">One Productive Day</span>.</>,
    description: [
      "Need a quick refresh? Our Painter-for-a-Day one-day painting service gives you a skilled, background-checked painter dedicated to your home for a full 8 hours. Perfect for touch-ups, small projects, or that one room you've been meaning to update.",
      "You provide the checklist, we provide the painter. From touch-up work and accent walls to painting entry doors and repairing trim — our Painter-for-a-Day handles it all. No estimate needed. Quality work guaranteed.",
    ],
    image: painterForADayHero,
    benefits: [
      "A professional painter for one full day (8 hours)",
      "Expertise in prep, painting, and clean-up",
      "Touch-up work and accent walls",
      "Repairing damaged woodwork, baseboards, or trim",
      "Painting or staining entry doors",
      "Touch-ups for faded exterior trim",
      "Pressure/power washing for your home's exterior",
      "No estimate needed — just book and go",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "No detailed estimate needed — review your checklist with us, confirm the scope, and book at our flat day rate. Simple and transparent." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "Pick your date, and we handle the rest. Your painter arrives ready to work with all the tools and materials needed for your checklist." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "Quick color guidance for small scopes — whether you need help picking an accent wall color or matching existing trim, we've got you covered." },
      { title: "JobTrack™ Project Management", branded: true, description: "Real-time updates throughout the day — you always know what's been completed, what's in progress, and what's next on your checklist." },
      { title: "Targeted Surface Preparation", branded: false, description: "Each task on your list gets the right prep — filling holes, sanding, masking, and protecting surfaces — so every item is done correctly, not just quickly." },
      { title: "Top-Quality Paint Application", branded: false, description: "Efficient, quality application across your checklist items. The same top-quality paints and techniques we use on full projects — applied with care to every task on your list." },
      { title: "PCA™ Quality Inspection", branded: true, description: "End-of-day walkthrough before we leave — every completed item reviewed with you to confirm quality and satisfaction." },
    ],
    objections: [
      {
        concern: "Can you really deliver quality work in one day?",
        response: "Yes — because the scope is right-sized for the time. We help you prioritize your checklist so every item gets proper prep, application, and finish. It's not rushed — it's focused.",
      },
      {
        concern: "What if my list is too big for one day?",
        response: "We'll help you prioritize during the checklist review. If the scope exceeds a single day, we can book additional days or recommend a full-project TrueQuote™ for larger work.",
      },
      {
        concern: "Is the flat rate really worth it for small tasks?",
        response: "A full day with a skilled professional means you get multiple items checked off your list — touch-ups, trim, doors, accent walls — all in one visit. Most homeowners find it far more cost-effective than scheduling separate small jobs.",
      },
      {
        concern: "What if we run out of time?",
        response: "We set expectations upfront during the checklist review. If time runs short, we prioritize the most important items first. Additional days can always be booked if needed.",
      },
    ],
    internalLinks: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Drywall Repair", href: "/services/drywall-repairs" },
    ],
  },
  "popcorn-ceiling-removal": {
    title: "Popcorn Ceiling Removal",
    metaTitle: "Popcorn Ceiling Removal in Bothell | Arclight Painting",
    metaDescription: "Professional popcorn ceiling removal in Bothell. Full removal, skim coating, and painting for smooth, modern ceilings. Get a free TrueQuote™.",
    tagline: <><span className="text-accent">Modernize</span> Your Home — One Ceiling at a Time</>,
    heroDescription: "From dated texture to smooth, modern ceilings — full removal, repair, and painting in one project.",
    sectionHeadline: <>Dated Ceilings Out. <span className="text-accent">Smooth, Modern Finishes</span> In.</>,
    description: [
      "Popcorn ceilings are one of the most dated features in homes across the Pacific Northwest. Our popcorn ceiling removal service transforms rough, textured ceilings into smooth, modern finishes that brighten your rooms and increase your home's value.",
      "The process involves careful containment and protection, texture removal, skim coating, sanding, priming, and painting. Our experienced team handles every step so you get a flawless result without the mess and hassle of doing it yourself.",
    ],
    image: popcornCeilingHero,
    benefits: [
      "Complete containment and floor/wall protection",
      "Safe texture removal with proper dust control",
      "Skim coating and sanding for a smooth finish",
      "Priming and painting included",
      "Asbestos testing guidance for older homes",
      "Minimal disruption to your daily routine",
    ],
    blueprintSteps: [
      { title: "TrueQuote™ Pricing", link: "/pricing", branded: true, description: "We measure every ceiling, assess the texture type and condition, and build a detailed, fixed-price proposal covering removal, repair, and finishing." },
      { title: "PowerFlex™ Scheduling", branded: true, description: "We schedule room by room to minimize disruption — you can keep using the rest of your home while we work through each ceiling." },
      { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true, description: "Choose your ceiling color and finish — from bright whites to subtle warm tones — with guidance on how the new smooth surface will reflect light and change the feel of each room." },
      { title: "JobTrack™ Project Management", branded: true, description: "Track every phase from containment setup through final paint — you always know which ceilings are scraped, skim-coated, sanded, and finished." },
      { title: "Surface Preparation", branded: false, description: "Full containment with plastic sheeting, floor and wall protection, careful texture removal, skim coating to fill imperfections, and thorough sanding for a perfectly smooth surface." },
      { title: "Top-Quality Paint Application", branded: false, description: "Smooth ceilings primed and painted for a clean, modern finish. Top-quality ceiling paints — selected through independent testing — provide even coverage, minimal spatter, and a finish that brightens every room." },
      { title: "PCA™ Quality Inspection", branded: true, description: "Our Quality Supervisor inspects every ceiling for smoothness, finish consistency, and overall quality against Painting Contractors of America standards before the job is closed." },
    ],
    objections: [
      {
        concern: "Should I test for asbestos before removal?",
        response: "If your home was built before the mid-1980s, testing is recommended before disturbing the texture. We can guide you through the testing process during the estimate.",
      },
      {
        concern: "How messy is popcorn ceiling removal?",
        response: "It can create significant dust, which is why we use full containment — plastic sheeting, floor protection, and dust-control methods. We clean up thoroughly at the end of each day.",
      },
      {
        concern: "How long does the process take?",
        response: "Due to the multiple steps involved — removal, skim coating, sanding, priming, and painting — most projects take a minimum of three days. Larger homes or more complex ceilings may take longer.",
      },
      {
        concern: "Is it worth the cost, or should I just paint over it?",
        response: "Painting over popcorn texture preserves the dated look and can make the texture harder to remove later. Removal delivers a modern, smooth finish that transforms the feel of your rooms and adds value to your home.",
      },
    ],
    internalLinks: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Drywall Repair", href: "/services/drywall-repairs" },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const pageTitle = service.metaTitle || `${service.title} in Bothell | Arclight Painting`;
  const pageDescription = service.metaDescription || service.description[0].slice(0, 155) + "...";

  return (
    <div className="min-h-screen">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={`/services/${slug}`}
        jsonLd={[
          serviceSchema(service.title, pageDescription, slug || ""),
          faqPageSchema(serviceFAQs[slug || ""] || []),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.title, url: `/services/${slug}` },
          ]),
        ]}
      />
      <Header />

      {/* 1. Hero */}
      <HeroSection
        cityName="Bothell"
        heroImage={service.image}
        heroTitle={`Professional ${service.title}`}
        heroDescription={service.heroDescription}
        heroTagline={service.tagline}
        {...(slug === "painter-for-a-day" ? {
          backgroundPosition: "center",
          heroTitleNode: <>Professional<br /><span className="text-accent">One-Day Painting</span><br />Service in Bothell</>
        } : {})}
      />

      {/* 2. Description + Benefits */}
      <section className="pt-16 pb-0 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {service.sectionHeadline}
              </h2>
              {service.description.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {slug === "painter-for-a-day" && (
                <p className="text-xl font-bold mt-2">
                  ALL FOR JUST <span className="text-accent">$689</span> FOR THE DAY!
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Blueprint (combined with process) */}
      <BlueprintSection
        serviceName={service.title}
        steps={service.blueprintSteps}
      />

      {/* 4. Testimonials */}
      <TestimonialsSection serviceName={service.title} />

      {/* 5. Gallery */}
      <GallerySection serviceName={service.title} />

      {/* 6. Guarantee */}
      <GuaranteeSection serviceName={service.title} />

      {/* 7. Common Concerns (if defined) */}
      {service.objections && service.objections.length > 0 && (
        <ObjectionsSection objections={service.objections} serviceName={service.title} />
      )}

      {/* 9. FAQ */}
      {slug && serviceFAQs[slug] && (
        <FAQSection faqs={serviceFAQs[slug]} />
      )}

      {/* 10. CTA */}
      <CTASection serviceName={service.title} />

      <Footer />
    </div>
  );
};

export default ServiceDetail;
