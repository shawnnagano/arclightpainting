import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Get The Highest Quality{" "}
          <span className="text-accent">House Painting</span> in Bothell
        </h2>
        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
          Ready to transform your home? Get a fast, free quote from our team today. No
          pressure, no obligation — just honest pricing and expert advice.
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6"
        >
          Get A Fast Quote
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
