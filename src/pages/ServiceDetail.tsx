import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import painterForADayHero from "@/assets/painter-for-a-day-hero.jpg";
import popcornCeilingHero from "@/assets/popcorn-ceiling-removal-hero.webp";
import commercialHero from "@/assets/commercial-hero.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OwnersSection from "@/components/OwnersSection";

import ValuesSection from "@/components/ValuesSection";
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
  description: string[];
  image: string;
  benefits: string[];
}> = {
  "interior-painting": {
    title: "Interior Painting",
    tagline: "Transform Your Living Spaces",
    description: [
      "As a leading team of interior house painters in Bothell, WA, we understand that every home is unique. Our interior painting services are designed to bring your vision to life with precision, care, and premium materials.",
      "From accent walls to full-home repaints, our skilled team delivers flawless results that make your spaces feel brand new. We handle everything — from careful furniture protection and surface preparation to the final brushstroke.",
    ],
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg",
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
    description: [
      "Avoid the risks and hassles of DIY projects by trusting our experienced exterior painters here in Bothell, WA. We know the Pacific Northwest weather demands durable, high-quality finishes that stand the test of time.",
      "Our exterior painting process includes thorough power washing, scraping, sanding, caulking, and priming before we apply any paint. The result is a beautiful, long-lasting finish that protects your home for years to come.",
    ],
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-3-1-683x1024.jpg",
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
    description: [
      "Kitchen cabinets endure daily wear from food, grease, and stains, which fades and scuffs them over time. Cabinet refinishing is a cost-effective way to give your kitchen a fresh, modern look without the expense of a full remodel.",
      "Our cabinet refinishing process involves careful removal of hardware, thorough cleaning, sanding, priming, and applying multiple coats of premium cabinet-grade paint or stain for a factory-smooth finish.",
    ],
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg",
    benefits: [
      "Fraction of the cost of new cabinets",
      "Factory-smooth finish with premium cabinet paints",
      "Wide range of colors and finishes available",
      "Minimal disruption to your daily routine",
      "Hardware removal and reinstallation included",
      "Transforms your kitchen in days, not weeks",
    ],
  },
  "drywall-repair": {
    title: "Drywall Repair",
    tagline: "Seamless Walls, Every Time",
    description: [
      "Drywall may seem simple, but it is a key element for your home's structure and style. Whether you have nail holes, cracks, water damage, or larger patches that need repair, our team delivers seamless results.",
      "We match existing textures and finishes so repairs blend perfectly with the surrounding wall. Combined with our painting services, your walls will look flawless from corner to corner.",
    ],
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg",
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
    description: [
      "Professional pressure washing cleans siding, driveways, decks, and walkways to restore a fresh, clean look. Years of dirt, mold, mildew, and algae buildup can make your home look aged and neglected.",
      "Our pressure washing service is also an essential first step before any exterior painting project, ensuring proper paint adhesion and a long-lasting finish.",
    ],
    image: "https://arclightpainting.com/wp-content/uploads/2023/11/pressure-washing-company-concrete-cleaning-1.jpg",
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
    tagline: "Professional Spaces Deserve a Professional Finish",
    description: [
      "Enhance your business space with expert commercial painting services designed for durability and a polished look. First impressions matter, and a professionally painted commercial space communicates quality and attention to detail.",
      "We work around your business schedule to minimize disruption, offering evening and weekend availability. From offices to retail spaces, we deliver on time and on budget.",
    ],
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/911c859a-0306-4684-a98f-c4627a8148a0-1024x683.webp",
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
    description: [
      "Need a quick refresh? Our Painter-for-a-Day service gives you a skilled, background-checked painter dedicated to your home for a full 8 hours. Perfect for touch-ups, small projects, or that one room you've been meaning to update.",
      "You provide the checklist, we provide the painter. From touch-up work and accent walls to painting entry doors and repairing trim — our Painter-for-a-Day handles it all. No estimate needed. Quality work guaranteed. ALL FOR JUST $689 FOR THE DAY!",
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
      <HeroSection cityName="Bothell" heroImage={service.image} heroTitle={`Professional ${service.title}`} />

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Testimonials */}
      <TestimonialsSection serviceName={service.title} />

      {/* 3. Owners */}
      <OwnersSection />

      {/* 4. USPs / Values */}

      {/* 5. USPs / Values */}
      <ValuesSection />

      {/* 6. Guarantee */}
      <GuaranteeSection />

      {/* 7. Blueprint */}
      <BlueprintSection />

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
