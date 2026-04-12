import { motion } from "framer-motion";
import { CheckCircle, Eye, Pipette, SwatchBook, FileText, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ObjectionsSection, { type Objection } from "@/components/ObjectionsSection";
import SEOHead, { serviceSchema, breadcrumbSchema, faqPageSchema } from "@/components/SEOHead";
import { colorConsultationFAQ } from "@/data/faqData";
import colorConfidenceHero from "@/assets/color-consultation-service-bothell-wa.webp";

const features = [
  { icon: Eye, rendered: <>Virtual or in-home Color<span className="text-accent">Confidence</span>™ Consultation with our professional colorist</> },
  { icon: SwatchBook, text: "Visual mockups of your real home" },
  { icon: Pipette, text: "Custom color matching with on-site test patches" },
  { icon: Palette, text: "Paint swatches mailed to you" },
  { icon: FileText, rendered: <>Full Color<span className="text-accent">Confidence</span>™ blueprint with color specs &amp; placement</> },
];

const objections: Objection[] = [
  {
    concern: "Is a color consultation really worth the cost?",
    response: "Color regret is one of the most common issues homeowners face after painting. A consultation eliminates guesswork, prevents costly repaints, and gives you a clear, confident plan before any paint goes on the wall.",
  },
  {
    concern: "Can't I just pick colors from a paint swatch at the store?",
    response: "Paint swatches are a starting point, but colors look dramatically different on a small chip versus a full wall — and they shift based on your lighting, flooring, and furnishings. A consultation accounts for all of those variables so the color you choose is the color you love.",
  },
  {
    concern: "What if I already have a color in mind?",
    response: "Great — we can refine it. ColorConfidence™ helps you confirm undertones, compare options, and make sure your choice works beautifully in your specific space before committing.",
  },
  {
    concern: "Do I need an in-home visit, or is virtual enough?",
    response: "A virtual consultation works well for most projects and provides expert guidance on color direction. An in-home session is ideal when you want hands-on support evaluating natural light, adjacent rooms, and how colors interact in person.",
  },
];

const ColorConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ColorConfidence™ Color Consultation in Bothell | Arclight Painting"
        description="Eliminate color regret with Arclight's ColorConfidence™ Consultation in Bothell. Virtual colorist sessions, visual mockups, custom matching, and on-site test patches. Choose boldly. Paint beautifully."
        canonical="/services/color-consultation"
        jsonLd={[
          serviceSchema("Color Consultation", "Eliminate color regret with Arclight's ColorConfidence™ Consultation in Bothell. Virtual colorist sessions, visual mockups, custom matching, and on-site test patches.", "color-consultation"),
          faqPageSchema(colorConsultationFAQ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Color Consultation", url: "/services/color-consultation" },
          ]),
        ]}
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
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfbda] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            Paint Color <span className="text-accent">Consultation</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            Choose <span className="text-accent">Boldly.</span> Paint <span className="text-accent">Beautifully.</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-[50%]">
            Color regret is real. We eliminate doubt by giving you expert guidance and visual clarity.
          </p>
        </div>
      </section>

      {/* H2 Description Section */}
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
                Expert Color Guidance — <span className="text-accent">Tailored to You</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Choosing paint colors is one of the most personal — and most stressful — parts of any painting project. Screens, swatches, and store lighting rarely tell the full story. Colors shift with natural light, room size, flooring, and neighboring finishes, and what looks perfect online can feel completely wrong on your wall.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Color<span className="text-accent font-semibold">Confidence</span>™ Consultation is designed to eliminate that uncertainty. Whether virtual or in-home, you work directly with our professional colorist to evaluate your space, compare options in context, and build a clear color plan before any paint is applied. The result is a Color<span className="text-accent font-semibold">Confidence</span>™ Blueprint — a detailed document with your final color specs, placement plan, and product recommendations — so you and your painter are aligned from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection serviceName="Color Consultation" />

      {/* What You Get Section (replaces Blueprint) */}
      <section className="pt-8 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <hr className="border-border mb-12" />
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Color Consultation Made Simple and <span className="text-accent">Stress-Free</span>
            </h3>
            <p className="text-lg md:text-xl font-bold tracking-widest uppercase mb-6">
              WHAT YOU <span className="text-accent">GET</span>
            </p>
            <div className="relative pl-8">
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-primary/30" />
              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 relative group"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center z-10 -ml-8 transition-colors duration-200 bg-primary group-hover:bg-accent">
                      <f.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-200">
                      {f.rendered || f.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection serviceName="Color Consultation" />

      {/* Guarantee */}
      <GuaranteeSection serviceName="Color Consultation" />

      {/* Common Concerns */}
      <ObjectionsSection objections={objections} serviceName="Color Consultation" />

      {/* FAQ */}
      <FAQSection faqs={colorConsultationFAQ} />

      {/* CTA */}
      <CTASection serviceName="Color Consultation" />

      <Footer />
    </div>
  );
};

export default ColorConsultation;
