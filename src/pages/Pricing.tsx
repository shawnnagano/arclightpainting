import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead, { breadcrumbSchema, faqPageSchema } from "@/components/SEOHead";
import ValuesSection from "@/components/ValuesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { pricingFAQ } from "@/data/faqData";
import heroImage from "@/assets/painting-consultation-meeting-photo.webp";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="House Painting Cost in Bothell | Transparent TrueQuote™ Pricing | Arclight Painting"
        description="How much does house painting cost in Bothell, WA? Get a free, itemized TrueQuote™ with no hidden fees. Use our instant pricing calculator or schedule a consultation with Arclight Painting."
        canonical="/pricing"
        jsonLd={[
          faqPageSchema(pricingFAQ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Pricing", url: "/pricing" },
          ]),
        ]}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Arclight Painting consultation with homeowner discussing pricing"
            className="w-full h-full object-cover"
            style={{ objectPosition: "70% 35%" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfbda] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            House Painting <span className="text-accent">Cost</span>
          </h1>
           <p className="text-xl md:text-2xl font-semibold">
             <span className="text-accent">Clear</span> Prices. <span className="text-accent">No</span> Surprises. <span className="text-accent">No</span> Hidden Fees.
           </p>
           <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-[50%]">
             Whether it is an <Link to="/services/interior-painting" className="text-accent hover:underline">interior repaint</Link>, a full <Link to="/services/exterior-painting" className="text-accent hover:underline">exterior refresh</Link>, or <Link to="/services/cabinet-refinishing" className="text-accent hover:underline">cabinet refinishing</Link> — get transparent pricing built around your project.
           </p>
        </div>
      </section>

      {/* How Much Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            How Much Does House Painting <span className="text-accent">Cost?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The cost of house painting in Bothell depends on the size of your home, the condition of the surfaces, and the scope of work involved. <span className="text-accent font-semibold">True</span>Quote™ is our transparent pricing process — built around the real scope of your project so you can move forward with confidence and know exactly what to expect.
          </p>
          <div className="bg-secondary rounded-xl p-8 mb-8">
            <h3 className="font-bold text-lg mb-4">Your <span className="text-accent">True</span>Quote™ price is based on:</h3>
            <ul className="space-y-3">
              {[
                "Surface analysis and condition assessment",
                "Labor required for your specific project",
                "Premium paint and materials",
                "All preparation, protection, and cleanup",
                "The full, detailed scope of work",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
           <h3 className="text-xl md:text-2xl font-bold text-center mt-6 mb-3">
             Want a Ballpark Painting Estimate <span className="text-accent">Right Now?</span>
           </h3>
           <p className="text-foreground leading-relaxed text-center mb-2">
             Use our <a href="#pricing-calculator" className="text-accent font-semibold hover:underline">Pricing Calculator</a> (below) to get a quick starting point and a clearer idea of what the cost will be to get your project done right.
           </p>
        </div>
      </section>

      {/* Pricing Calculator Embed */}
      <section id="pricing-calculator">
        <iframe
          src="https://app.priceguide.ai/estimator/recacVReUcqWb1d6D"
          width="100%"
          style={{ width: "100%", height: "75vh", borderTop: "1px solid #999", borderBottom: "1px solid #999" }}
          frameBorder="0"
          title="Arclight Painting Price Estimator"
        />
      </section>

      {/* Why Not Cheapest */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why the Cheapest Painting Quote Is Not Always the <span className="text-accent">Best Value</span>
          </h2>
          <p className="text-foreground mb-6">
            A lower price can look appealing, but it does not always reflect the <strong>true cost</strong> of a successful project. When a quote comes in significantly lower, it is usually because of one of two things:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-lg mb-2 text-foreground">The estimate is incomplete</h4>
              <p className="text-muted-foreground text-sm">Some companies miss important details during the quoting process. That can lead to unexpected costs, change orders, or compromises later.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-lg mb-2 text-foreground">The scope or quality is reduced</h4>
              <p className="text-muted-foreground text-sm">Lower pricing often means less is included, whether in prep, materials, labor, supervision, or overall attention to detail.</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">At Arclight Painting, our <span className="text-accent">True</span>Quote pricing is designed to be accurate, transparent, and aligned with the true scope of work, so the job gets done right the first time.</strong>
          </p>
          <div className="text-center mt-8">
            <Link to="/schedule">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                Get a TrueQuote →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Arclight Painting Difference */}
      <ValuesSection />

      {/* Guarantee */}
      <GuaranteeSection />

      {/* FAQ */}
      <FAQSection faqs={pricingFAQ} heading="Additional Frequently Asked Questions" />

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Pricing;
