import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Page Not Found | Arclight Painting"
        description="The page you're looking for doesn't exist. Browse our painting services or contact Arclight Painting in Bothell, WA."
      />
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            The page you're looking for may have moved or no longer exists. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-5">
                Go Home
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="outline" className="font-bold px-8 py-5">
                Get a TrueQuote →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
