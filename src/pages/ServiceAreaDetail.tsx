import { useParams, Navigate } from "react-router-dom";
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
import { generalFAQ } from "@/data/faqData";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead, { serviceAreaSchema, breadcrumbSchema } from "@/components/SEOHead";

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/service-areas" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Professional House Painters in ${area.name} | Arclight Painting`}
        description={area.metaDescription}
        canonical={`/service-areas/${area.slug}`}
        jsonLd={[
          serviceAreaSchema(area.name, area.slug, area.metaDescription),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/service-areas" },
            { name: area.name, url: `/service-areas/${area.slug}` },
          ]),
        ]}
      />
      <Header />

      {/* 1. Hero */}
      <HeroSection cityName={area.name} heroImage={area.heroImage} />

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
                Why We Love Working in {area.name}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {area.localFlavor}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Testimonials */}
      <TestimonialsSection cityName={area.name} />

      {/* 3. Owners */}
      <OwnersSection />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. USPs / Values */}
      <ValuesSection />

      {/* 6. Guarantee */}
      <GuaranteeSection />

      {/* 7. Blueprint */}
      <BlueprintSection />

      {/* 8. Gallery */}
      <GallerySection cityName={area.name} />

      {/* 9. CTA */}
      <CTASection cityName={area.name} serviceName="House Painters" />

      <Footer />
    </div>
  );
};

export default ServiceAreaDetail;
