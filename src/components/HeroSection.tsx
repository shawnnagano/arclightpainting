import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ajili Hodari",
    time: "1 day ago",
    text: "Excellent painting with attention to detail. I highly recommend Arclight Painting for anyone looking for skilled professional painters!",
    stars: 5,
  },
  {
    name: "Abby Cooper",
    time: "1 month ago",
    text: "Shawn did an amazing job! His work was excellent and he was very helpful. I would highly recommend him. He painted our ceilings which was not an easy job.",
    stars: 5,
  },
  {
    name: "Mckinsley Reynolds III",
    time: "2 months ago",
    text: "I am very satisfied with the workmanship. Very detailed and professional. I will recommend to friends and family.",
    stars: 5,
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://arclightpainting.com/wp-content/uploads/2025/07/hiyuse.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      {/* Gradient overlay: solid on left for text readability, fading to transparent on right to show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 uppercase tracking-tight">
              Professional{" "}
              <span className="text-accent">House<br className="hidden md:block" /> Painters</span>{" "}
              in Bothell, WA
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              Real <span className="text-accent">People.</span> Real{" "}
              <span className="text-accent">Purpose.</span> Exceptional{" "}
              <span className="text-accent">Results.</span>
            </p>
          </motion.div>

          {/* Google Reviews Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3 max-w-sm"
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-border/50 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 rounded-full"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex mb-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {review.text}
                </p>
              </div>
            ))}

            {/* Google Rating Summary */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-lg font-bold text-[#4285F4]">G</span>
              <span className="text-lg font-bold text-[#EA4335]">o</span>
              <span className="text-lg font-bold text-[#FBBC05]">o</span>
              <span className="text-lg font-bold text-[#4285F4]">g</span>
              <span className="text-lg font-bold text-[#34A853]">l</span>
              <span className="text-lg font-bold text-[#EA4335]">e</span>
              <span className="ml-2 text-sm text-muted-foreground">
                <span className="font-bold text-foreground">4.9</span>
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">269 reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating CTA Button - bottom right on larger screens */}
      <Link
        to="/schedule"
        className="fixed bottom-6 right-6 z-50 hidden md:block"
      >
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-md shadow-2xl"
        >
          Get A Fast Quote →
        </Button>
      </Link>
    </section>
  );
};

export default HeroSection;
