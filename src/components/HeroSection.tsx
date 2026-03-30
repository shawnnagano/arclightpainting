import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import googleLogo from "@/assets/google-logo.png";



interface HeroSectionProps {
  cityName?: string;
  heroImage?: string;
  heroTitle?: string;
}

const HeroSection = ({ cityName = "Bothell", heroImage, heroTitle }: HeroSectionProps) => {
  const bgImage = heroImage || "https://arclightpainting.com/wp-content/uploads/2025/07/hiyuse.jpg";
  const displayTitle = heroTitle || "Professional House Painters";

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 uppercase tracking-tight">
              {displayTitle.includes(" ") ? (
                <>
                  {displayTitle.split(" ").slice(0, 1).join(" ")}{" "}
                  <span className="text-accent">{displayTitle.split(" ").slice(1).join(" ")}</span>
                </>
              ) : (
                <span className="text-accent">{displayTitle}</span>
              )}
              {" "}in {cityName}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              Real <span className="text-accent">People.</span> Real{" "}
              <span className="text-accent">Purpose.</span> Exceptional{" "}
              <span className="text-accent">Results.</span>
            </p>
          </motion.div>

          {/* Google Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2"
          >
            <div className="flex items-center gap-2">
              <img src={googleLogo} alt="Google" className="h-10 w-auto" />
              <span className="font-bold text-foreground">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Link
                to="/reviews"
                className="text-sm text-accent font-semibold hover:underline"
              >
                Read All Reviews →
              </Link>
              <span className="text-sm text-muted-foreground">269 reviews</span>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
