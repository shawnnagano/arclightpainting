import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-8">
          Get The Highest Quality House Painting in Bothell
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

      {/* Van graphic */}
      <div className="flex justify-center mt-12">
        <img
          src="https://arclightpainting.com/wp-content/uploads/2025/09/van-body-1.png"
          alt="Arclight Painting van"
          className="max-w-md w-full opacity-90"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CTASection;
