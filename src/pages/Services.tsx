import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { generalFAQ } from "@/data/faqData";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Painting Services | Arclight Painting Bothell, WA"
        description="Explore Arclight Painting's full range of services: interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, and commercial painting in Bothell, WA."
        canonical="/services"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[350px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/interior-room-painting-natural-light-bothell.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfbda] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            From residential homes to commercial spaces, Arclight delivers exceptional results through craftsmanship, care, and our proven Above & Beyond Blueprint™.
          </p>
        </div>
      </section>

      <ServicesSection hideHeader />
      <FAQSection faqs={generalFAQ} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
