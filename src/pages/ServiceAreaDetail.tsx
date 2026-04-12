import { useLocation, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OwnersSection from "@/components/OwnersSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BlueprintSection from "@/components/BlueprintSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { serviceAreas } from "@/data/serviceAreas";
import { Heart, MapPin, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead, { serviceAreaSchema, breadcrumbSchema, faqPageSchema } from "@/components/SEOHead";

const ServiceAreaDetail = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Professional House Painters in ${area.name} | Arclight Painting`}
        description={area.metaDescription}
        canonical={`/${area.slug}`}
        jsonLd={[
          serviceAreaSchema(area.name, area.slug, area.metaDescription),
          faqPageSchema(area.cityFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: area.name, url: `/${area.slug}` },
          ]),
        ]}
      />
      <Header />

      {/* 1. Hero */}
      <HeroSection cityName={area.name} heroImage={area.heroImage} heroDescription={area.heroDescription} />

      {/* Why We Love This Area */}
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
                Why We Love Working in <span className="text-accent">{area.name}</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {area.localFlavor}
            </p>
          </motion.div>
        </div>
      </section>

      {/* City-Specific Painting Insights */}
      {area.cityServiceHighlights && area.cityServiceHighlights.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Paintbrush className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">
                  What Makes Painting in <span className="text-accent">{area.name}</span> Different
                </h2>
              </div>
              <div className="space-y-4">
                {area.cityServiceHighlights.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 2. Testimonials */}

      {/* 3. Owners */}
      <OwnersSection cityName={area.name} />

      {/* 4. USPs / Values */}
      <ValuesSection />

      {/* 5. Guarantee */}
      <GuaranteeSection />

      {/* 6. Services */}
      <ServicesSection cityName={area.name} />

      {/* 7. Blueprint */}
      <BlueprintSection showImage />

      {/* 8. Gallery */}
      <GallerySection cityName={area.name} />

      {/* 9. FAQ - use city-specific FAQs */}
      <FAQSection faqs={area.cityFaqs} heading={`Frequently Asked Questions About Painting in ${area.name}`} />

      {/* 10. CTA */}
      <CTASection cityName={area.name} serviceName="House Painters" />

      {/* Neighborhoods We Serve */}
      {area.neighborhoods.length > 0 && (
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
                  Neighborhoods We Serve in <span className="text-accent">{area.name}</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {area.neighborhoods.map((neighborhood) => (
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
      )}

      <Footer />
    </div>
  );
};

export default ServiceAreaDetail;
