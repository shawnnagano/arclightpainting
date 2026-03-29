import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial spaces, Arclight delivers exceptional results through craftsmanship, care, and our proven Above & Beyond Blueprint™.
          </p>
        </div>
      </div>
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
