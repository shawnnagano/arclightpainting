import { motion } from "framer-motion";
import { CheckCircle, Palette, Eye, Pipette, SwatchBook, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import OwnersSection from "@/components/OwnersSection";
import ValuesSection from "@/components/ValuesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BlueprintSection from "@/components/BlueprintSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { generalFAQ } from "@/data/faqData";
import colorConfidenceHero from "@/assets/color-confidence-hero.png";

const features = [
  { icon: Eye, text: "Virtual Or In-Home Consultation With Our Professional Colorist" },
  { icon: SwatchBook, text: "Visual Mockups of Your Real Home" },
  { icon: Pipette, text: "Custom Color Matching" },
  { icon: Palette, text: "On-Site Test Patches" },
  { icon: FileText, rendered: <>Full Color<span className="text-accent">Confidence</span>™ Blueprint With Color Specs &amp; Placement</> },
];

const ColorConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ColorConfidence™ Color Consultation | Arclight Painting"
        description="Eliminate color regret with Arclight's ColorConfidence™ Consultation. Virtual colorist sessions, visual mockups, custom matching, and on-site test patches. Choose boldly. Paint beautifully."
        canonical="/services/color-consultation"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Color Consultation", url: "/services/color-consultation" },
        ])}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${colorConfidenceHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center right 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            Color<span className="text-accent">Confidence</span> Consultation
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            Choose <span className="text-accent">Boldly.</span> Paint <span className="text-accent">Beautifully.</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-3">
            Color regret is real. We eliminate doubt by giving you expert guidance and visual clarity.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8">
              What You <span className="text-accent">Get</span>
            </h2>
            <div className="space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-base md:text-lg font-semibold uppercase tracking-wide">
                    {f.rendered || f.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-semibold italic text-muted-foreground mb-10">
              No pressure. No guessing. Just confident, beautiful choices.
            </p>
            <div className="bg-muted rounded-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold uppercase leading-snug">
                We don't just help you pick a color
                <br />
                <span className="text-accent">— we help you pick the right one.</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection serviceName="Color Consultation" />

      {/* Owners */}
      <OwnersSection />

      {/* Values */}
      <ValuesSection />

      {/* Guarantee */}
      <GuaranteeSection />

      {/* Blueprint */}
      <BlueprintSection />

      {/* Gallery */}
      <GallerySection />

      {/* FAQ */}
      <FAQSection faqs={generalFAQ} />

      {/* CTA */}
      <CTASection serviceName="Color Consultation" />

      <Footer />
    </div>
  );
};

export default ColorConsultation;
