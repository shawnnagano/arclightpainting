import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background overlay image placeholder */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            PROFESSIONAL{" "}
            <span className="text-accent">HOUSE PAINTERS</span>{" "}
            IN BOTHELL, WA
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Real People. Real Purpose. Exceptional Results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
            >
              Get A Fast Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 py-6"
            >
              View Our Work
            </Button>
          </div>

          {/* Google Reviews Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold">5.0 Rating on Google</span>
            <span className="text-sm opacity-70">• 80+ Reviews</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
