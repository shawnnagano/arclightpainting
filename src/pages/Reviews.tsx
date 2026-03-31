import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import SEOHead, { localBusinessSchema, breadcrumbSchema } from "@/components/SEOHead";

const overallRating = 4.9;
const totalReviews = 269;

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Customer Reviews - 4.9★ Google Rating | Arclight Painting Bothell, WA"
        description="Read 269+ five-star Google reviews from Arclight Painting customers in Bothell, WA. See why homeowners trust us for interior and exterior painting services."
        canonical="/reviews"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Reviews", url: "/reviews" },
          ]),
        ]}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[350px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Customer <span className="text-accent">Reviews</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg">
            See what our clients have to say about their experience working with us—their words speak for themselves.
          </p>
        </div>
      </section>

      {/* Reviews Widget */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/TGrxHZY8Y5wXqvLyDgYP?widgetId=69cc15ea2717b4bd6928b877"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Customer Reviews Widget"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
