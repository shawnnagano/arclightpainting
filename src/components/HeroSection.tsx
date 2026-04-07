import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";



interface HeroSectionProps {
  cityName?: string;
  heroImage?: string;
  heroTitle?: string;
  heroTitleNode?: React.ReactNode;
  backgroundPosition?: string;
  backgroundSize?: string;
}

const HeroSection = ({ cityName = "Bothell", heroImage, heroTitle, heroTitleNode, backgroundPosition, backgroundSize }: HeroSectionProps) => {
  const bgImage = heroImage || "/images/hiyuse-bothell-wa-landmark.webp";
  const displayTitle = heroTitle || "Professional House Painters";

  return (
    <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: backgroundSize || "cover",
          backgroundPosition: backgroundPosition || "center right",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfb]/85 to-transparent" />

      <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 uppercase tracking-tight">
              {heroTitleNode ? heroTitleNode : (
                <>
                  {displayTitle.includes(" ") ? (
                    <>
                      {displayTitle.split(" ").slice(0, 1).join(" ")}{" "}
                      <span className="text-accent">{displayTitle.split(" ").slice(1).join(" ")}</span>
                    </>
                  ) : (
                    <span className="text-accent">{displayTitle}</span>
                  )}
                  {" "}in {cityName}
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              Real <span className="text-accent">People.</span> Real{" "}
              <span className="text-accent">Purpose.</span> Exceptional{" "}
              <span className="text-accent">Results.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2"
          >
            <p className="text-lg md:text-xl text-muted-foreground">
              Veteran-owned. Built on character, excellence, and above-and-beyond service.
            </p>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
