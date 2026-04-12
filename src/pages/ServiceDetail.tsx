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
import SEOHead, { serviceSchema, breadcrumbSchema } from "@/components/SEOHead";
import { serviceFAQs } from "@/data/faqData";

const serviceData: Record<string, {
  title: string;
  tagline: string;
  heroDescription: string;
  sectionHeadline: string;
  description: string[];
  image: string;
  benefits: string[];
}> = {
  "interior-painting": {
    title: "Interior Painting",
    tagline: "Transform Your Living Spaces",
    heroDescription: "Premium interior painting that brings your vision to life — meticulous prep, flawless finishes, zero stress.",
    sectionHeadline: "Every Detail, Every Room, Done Right",
    description: [
      "As a leading team of interior house painters in Bothell, WA, we understand that every home is unique. Our interior painting services are designed to bring your vision to life with precision, care, and premium materials.",
      "From accent walls to full-home repaints, our skilled team delivers flawless results that make your spaces feel brand new. We handle everything — from careful furniture protection and surface preparation to the final brushstroke.",
    ],
    image: "/images/interior-room-painting-natural-light-bothell.webp",
    benefits: [
      "Free color consultation with our ColorConfidence™ program",
      "Premium paints from Sherwin-Williams and Benjamin Moore",
      "Meticulous surface preparation and priming",
      "Clean, organized worksite — every day",
      "Detailed final walkthrough with you",
      "Backed by our 100% Satisfaction Guarantee",
    ],
  },
  "exterior-painting": {
    title: "Exterior Painting",
    tagline: "Boost Your Curb Appeal",
    heroDescription: "Weather-tough exterior painting built to protect your home and turn heads for years to come.",
    sectionHeadline: "Protection That Looks as Good as It Performs",
    description: [
      "Avoid the risks and hassles of DIY projects by trusting our experienced exterior painters here in Bothell, WA. We know the Pacific Northwest weather demands durable, high-quality finishes that stand the test of time.",
      "Our exterior painting process includes thorough power washing, scraping, sanding, caulking, and priming before we apply any paint. The result is a beautiful, long-lasting finish that protects your home for years to come.",
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
  },
  "cabinet-refinishing": {
    title: "Cabinet Refinishing",
    tagline: "Refresh Your Kitchen Without the Remodel",
    heroDescription: "Factory-smooth cabinet finishes that transform your kitchen at a fraction of the cost of replacement.",
    sectionHeadline: "A New Kitchen Feel — Without the Remodel Price Tag",
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
  },
  "drywall-repairs": {
    title: "Drywall Repair",
    tagline: "Seamless Walls, Every Time",
    heroDescription: "Expert drywall repair that disappears into your walls — matched, blended, and paint-ready.",
    sectionHeadline: "Invisible Repairs That Make Walls Look New Again",
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
  },
  "pressure-washing": {
    title: "Pressure Washing",
    tagline: "Restore Your Home's Clean, Fresh Look",
    heroDescription: "Strip away years of grime, mold, and buildup — your home's fresh start begins here.",
    sectionHeadline: "Years of Buildup Gone in Hours",
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
  },
  "commercial-painting": {
    title: "Commercial Painting",
    tagline: "Commercial Painting Tailored to Your Business",
    heroDescription: "Professional results on your schedule — minimal disruption, maximum impact for your space.",
    sectionHeadline: "Your Business Stays Open. Your Space Gets Transformed.",
    description: [
      "Enhance your commercial space with our commercial painting services designed for durability and a polished look. Commercial painting services designed around your business, schedule, and standards.",
      "From offices and retail spaces to occupied commercial properties, we deliver clean, professional results with minimal disruption to your operations.",
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
  },
  "painter-for-a-day": {
    title: "One-Day Painting Service",
    tagline: "One Professional. One Day. One Fresh New Look.",
    heroDescription: "A skilled, background-checked painter dedicated to your home for a full 8 hours. No estimate needed.",
    sectionHeadline: "Your Checklist. Our Painter. One Productive Day.",
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
  },
  "popcorn-ceiling-removal": {
    title: "Popcorn Ceiling Removal",
    tagline: "Modernize Your Home — One Ceiling at a Time",
    heroDescription: "From dated texture to smooth, modern ceilings — full removal, repair, and painting in one project.",
    sectionHeadline: "Dated Ceilings Out. Smooth, Modern Finishes In.",
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

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${service.title} in Bothell | Arclight Painting`}
        description={service.description[0].slice(0, 155) + "..."}
        canonical={`/services/${slug}`}
        jsonLd={[
          serviceSchema(service.title, service.description[0], slug || ""),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.title, url: `/services/${slug}` },
          ]),
        ]}
      />
      <Header />

      {/* 1. Hero with service image */}
      <HeroSection
        cityName="Bothell"
        heroImage={service.image}
        heroTitle={`Professional ${service.title}`}
        {...(slug === "painter-for-a-day" ? {
          backgroundPosition: "center",
          heroTitleNode: <>Professional<br /><span className="text-accent">One-Day Painting</span><br />Service in Bothell</>
        } : {})}
      />

      {/* Service-specific content section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-accent font-semibold mb-6">
                {service.tagline}
              </p>
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

      {/* 2. Testimonials */}
      <TestimonialsSection serviceName={service.title} />

      {/* 6. Guarantee */}
      <GuaranteeSection serviceName={service.title} />

      {/* 7. Blueprint */}
      <BlueprintSection serviceName={service.title} />

      {/* 8. Gallery */}
      <GallerySection serviceName={service.title} />

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
