import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import ValuesSection from "@/components/ValuesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BlueprintSection from "@/components/BlueprintSection";
import CTASection from "@/components/CTASection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Painting Pricing - Transparent Quotes | Arclight Painting Bothell, WA"
        description="Get transparent, itemized painting quotes from Arclight Painting in Bothell, WA. No hidden fees, no surprises. Learn about our pricing philosophy and get a fast quote."
        canonical="/pricing"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" },
        ])}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://arclightpainting.com/wp-content/uploads/2025/09/image-8-1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            <span className="text-accent">True</span>Quote Pricing
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            Clear Prices. No Surprises.
          </p>
        </div>
      </section>

      {/* How Much Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            How Much Will It <span className="text-accent">Cost?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is one of the first questions homeowners ask, and we believe it deserves a straight answer. At Arclight Painting, every quote is built around the true scope of your project, with clear, itemized pricing and no hidden fees.
          </p>
          <div className="bg-secondary rounded-xl p-8 mb-8">
            <h3 className="font-bold text-lg mb-4">Your <span className="text-accent">True</span>Quote™ price is based on:</h3>
            <ul className="space-y-3">
              {[
                "Labor required",
                "Paint and materials",
                "The full scope of your project",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xl md:text-2xl font-bold text-center mt-2 mb-2">
            Want a ballpark estimate before scheduling your <span className="text-accent">True</span>Quote consultation?
          </p>
          <p className="text-lg md:text-xl font-semibold text-center">
            Use our <span className="text-accent">Pricing Calculator</span> (below) to get a quick starting point and a clearer idea of what to expect.
          </p>
        </div>
      </section>

      {/* Pricing Calculator Embed */}
      <section>
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
            Why Not Just Choose the <span className="text-accent">Cheapest</span> Quote?
          </h2>
          <p className="text-foreground mb-6">
            A lower price can look appealing, but it does not always reflect the <strong>true cost</strong> of a successful project. When a quote comes in significantly lower, it is usually because of one of two things:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-lg mb-2 text-destructive">1. The estimate is incomplete</h4>
              <p className="text-muted-foreground text-sm">Some companies miss important details during the quoting process. That can lead to unexpected costs, change orders, or compromises later.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-lg mb-2 text-destructive">2. The scope or quality is reduced</h4>
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

      {/* Blueprint */}
      <BlueprintSection />

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Pricing;
