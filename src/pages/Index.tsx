import Header from "@/components/Header";
import homeHero from "@/assets/house-painting-bothell-wa-hero.webp";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OwnersSection from "@/components/OwnersSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BlueprintSection from "@/components/BlueprintSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead, { localBusinessSchema, websiteSchema, organizationSchema, faqPageSchema } from "@/components/SEOHead";
import { generalFAQ } from "@/data/faqData";
import { Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const bothellLocalFlavor =
  "Bothell is home for us — literally. We love grabbing a coffee at the Daily Grind on Bothell Way before heading to a job, or picking up donuts from Hillcrest Bakery for the crew. There's something special about painting homes in a town where we know the streets by heart, from the trails along the Sammamish River to the quirky shops downtown. When we finish a project in Bothell, we don't just drive away — we're still part of the neighborhood.";

const bothellNeighborhoods = ["Canyon Park", "North Creek", "Queensgate", "Bothell Landing", "Brickyard", "Maltby"];

const bothellFaqs = [
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
];

const homepageFaqs = [...generalFAQ, ...bothellFaqs];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional House Painters in Bothell, WA | Arclight Painting"
        description="Arclight Painting is Bothell's highest-rated painting company. Professional interior painting, exterior painting, cabinet refinishing, and more. 4.9★ with 269 Google reviews. Get a fast quote from a trusted local painter today!"
        canonical="/"
        jsonLd={[localBusinessSchema, faqPageSchema(homepageFaqs), websiteSchema, organizationSchema]}
      />
      <Header />
      <HeroSection
        heroImage={homeHero}
        heroDescription="Bothell's veteran-owned hometown painting company, built on character, excellence, and above-and-beyond service."
      />
      <TestimonialsSection />

      {/* Why We Love Working in Bothell */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Why We Love Working in <span className="text-accent">Bothell</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {bothellLocalFlavor}
            </p>
          </motion.div>
        </div>
      </section>

      <OwnersSection />
      <ValuesSection />
      <GuaranteeSection />
      <ServicesSection />
      <BlueprintSection showImage />
      <GallerySection />
      <FAQSection faqs={homepageFaqs} />
      <CTASection serviceName="House Painters" />

      {/* Neighborhoods We Serve in Bothell */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Neighborhoods We Serve in <span className="text-accent">Bothell</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {bothellNeighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="bg-card border border-border rounded-full px-5 py-2 text-sm font-medium text-foreground"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
