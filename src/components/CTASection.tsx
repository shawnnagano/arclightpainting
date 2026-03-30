import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  cityName?: string;
  serviceName?: string;
}

const CTASection = ({ cityName = "Bothell", serviceName = "Home Painting" }: CTASectionProps) => {
  const isPFAD = serviceName === "One-Day Painting Service";
  const buttonText = isPFAD ? "Book Now →" : "Get A Fast Quote →";
  const buttonLink = isPFAD
    ? "https://link.arclightpainting.com/widget/form/ZLPniZseAFrjLPEcU2pc"
    : "/schedule";

  const buttonEl = (
    <Button
      size="lg"
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6"
    >
      {buttonText}
    </Button>
  );

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Get The Highest-Rated <span className="text-accent">{serviceName}</span> in {cityName}
        </h2>
        {isPFAD ? (
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonEl}
          </a>
        ) : (
          <Link to={buttonLink}>{buttonEl}</Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
