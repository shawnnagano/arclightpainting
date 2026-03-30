import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  cityName?: string;
}

const CTASection = ({ cityName = "Bothell" }: CTASectionProps) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8">
          Get The Highest Quality House Painting in {cityName}
        </h2>
        <Link to="/schedule">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6"
          >
            Get A Fast Quote →
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
