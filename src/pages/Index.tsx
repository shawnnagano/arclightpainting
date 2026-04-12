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

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional House Painters in Bothell, WA | Arclight Painting"
        description="Arclight Painting is Bothell's highest-rated painting company. Professional interior painting, exterior painting, cabinet refinishing, and more. 4.9★ with 269 Google reviews. Get a fast quote from a trusted local painter today!"
        canonical="/"
        jsonLd={[localBusinessSchema, faqPageSchema(generalFAQ), websiteSchema, organizationSchema]}
      />
      <Header />
      <HeroSection heroImage={homeHero} />
      <TestimonialsSection />
      <OwnersSection />
      <ValuesSection />
      <GuaranteeSection />
      <ServicesSection />
      <BlueprintSection showImage />
      <GallerySection />
      <FAQSection faqs={generalFAQ} />
      <CTASection serviceName="House Painters" />
      <Footer />
    </div>
  );
};

export default Index;
