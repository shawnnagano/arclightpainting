import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

const blueprintSteps = [
  "TrueQuote™ Pricing",
  "PowerFlex™ Scheduling",
  "ColorConfidence™ Consultation",
  "Top-Rated Paints",
  "JobTrack™ Project Management",
  "CompanyCam™ Timeline",
  "PCA™ Standards Inspection",
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[400px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://arclightpainting.com/wp-content/uploads/2025/09/image-8-1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">
            Above & Beyond Pricing:
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-accent uppercase">
            Transparency & Value
          </h2>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
            How Much Will It <span className="text-accent">Cost?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is often the first question homeowners ask—but it's usually the last one painting companies want to answer. At Arclight Painting, we believe in complete transparency when it comes to pricing. That's why we always provide a detailed quote that reflects the true cost of quality work—no hidden fees, no surprises.
          </p>
          <div className="bg-secondary rounded-xl p-8 mb-8">
            <h3 className="font-bold text-lg mb-4">Our on-the-spot quotes include:</h3>
            <ul className="space-y-3">
              {[
                "Labor (estimated hours required)",
                "Materials (gallons of paint needed)",
                "Itemized Pricing (based on your project's scope)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Curious about pricing before scheduling a consultation? Use our Pricing Calculator to get an instant ballpark estimate. It's quick, easy, and helps you avoid being in the dark.
          </p>
        </div>
      </section>

      {/* Why Not Cheapest */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-6 text-center">
            Why Not Just Choose The <span className="text-accent">Cheapest</span> Quote?
          </h2>
          <p className="text-muted-foreground mb-6">
            It's good to have choices. But before simply choosing the lower bid, ask yourself: <strong className="text-foreground">Why is it cheaper?</strong>
          </p>
          <p className="text-muted-foreground mb-4">In our experience, there are only two reasons:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-lg mb-2 text-destructive">1. It Was Underestimated</h4>
              <p className="text-muted-foreground text-sm">Some companies lack the experience to provide accurate pricing, leading to surprise costs mid-project or cutting corners.</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="font-bold text-lg mb-2 text-destructive">2. They Will Cut Corners</h4>
              <p className="text-muted-foreground text-sm">Lower bids often mean lower-quality materials, unskilled labor, or rushed work—leaving you with a disappointing result.</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            At Arclight Painting, we provide the most accurate estimates in the industry, and we never cut corners. Our pricing reflects the true cost of doing the job right the first time.
          </p>
        </div>
      </section>

      {/* Investing in Quality */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center">
            Investing in <span className="text-accent">Quality</span> and Long-Term Value
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Trusted Professionals", desc: "Skilled craftsmen, thoroughly vetted and committed to excellence in every detail." },
              { title: "Top-Quality Paint", desc: "Premium materials that have been thoroughly tested and proven to provide a lasting finish." },
              { title: "The Arclight Difference", desc: "A hassle-free experience with clear communication, no stress, and no surprises." },
            ].map((item) => (
              <div key={item.title} className="bg-secondary p-6 rounded-xl text-center">
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-2">The Above & Beyond Blueprint</h2>
          <p className="text-muted-foreground mb-10">Painting Made Simple and Stress-Free</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blueprintSteps.map((step, i) => (
              <div key={step} className="bg-card border border-border rounded-lg p-4">
                <span className="text-accent font-black text-2xl">0{i + 1}</span>
                <p className="font-semibold text-sm mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Transform Your Space?</h2>
          <Link to="/schedule">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
              Get A Fast Quote →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
