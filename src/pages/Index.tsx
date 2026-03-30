import Header from "@/components/Header";
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
import Footer from "@/components/Footer";
import SEOHead, { localBusinessSchema } from "@/components/SEOHead";
import { generalFAQ } from "@/data/faqData";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does house painting cost in Bothell, WA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Painting costs vary by project scope. Arclight Painting provides free, transparent on-the-spot quotes that include labor, materials, and itemized pricing. Schedule a free estimate to get your exact cost.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Arclight Painting serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arclight Painting serves Bothell, Kirkland, Redmond, Bellevue, Woodinville, Kenmore, Mill Creek, Everett, Lake Forest Park, Cottage Lake, Clearview, and Union Hill-Novelty Hill in Washington state.",
      },
    },
    {
      "@type": "Question",
      name: "What painting services does Arclight offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arclight offers interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, commercial painting, and Painter for a Day services.",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional House Painters in Bothell, WA | Arclight Painting"
        description="Arclight Painting provides professional house painting services in Bothell, WA. Interior, exterior, cabinet refinishing, drywall repair and more. 4.9★ rated with 269 Google reviews. Get a fast quote today!"
        canonical="/"
        jsonLd={[localBusinessSchema, homeFaqSchema]}
      />
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <OwnersSection />
      <ServicesSection />
      <ValuesSection />
      <GuaranteeSection />
      <BlueprintSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
