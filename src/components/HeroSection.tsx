import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Scott Miller",
    time: "8 months ago",
    text: "Sandor Kovacs was committed to doing a great job. He had an attention to detail in every aspect of the job from prep to clean up. We are very pleased with the outcome and will definitely ask for him again.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocICARCuCoBAIevdKj-GNOV2Efc3cdwhYKNJMitwbXrq0iwN8w=w40-h40-c-rp-mo-br100",
    stars: 5,
  },
  {
    name: "M S",
    time: "8 months ago",
    text: "Jennifer came out right away and was very thorough. Ricardo and his painting team were excellent and took care in making the outside of our home look like new. We highly recommend Arclight for your painting needs.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJVgW4VgDdxX9lQmLaarTgEnQ5NwZEcltWrLeTx7zjycHlx-A=w40-h40-c-rp-mo-br100",
    stars: 5,
  },
  {
    name: "Leslie W",
    time: "8 months ago",
    text: "We hired Arclight to paint the exterior of our house. Not only did they do a fantastic job but the people were so kind and considerate; really a pleasure to work with. Communication was excellent for the duration of the work.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK7Bt8I53IbYMgHr7SG5CBQgwFU81fY1q2KGj0X24BWoHxd8Q=w40-h40-c-rp-mo-br100",
    stars: 5,
  },
];

const HeroSection = () => {
  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://arclightpainting.com/wp-content/uploads/2025/07/hiyuse.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 uppercase">
              Professional{" "}
              <span className="text-accent">House Painters</span>{" "}
              in Bothell, WA
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Real <span className="text-accent">People.</span> Real{" "}
              <span className="text-accent">Purpose.</span> Exceptional{" "}
              <span className="text-accent">Results.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://arclightpainting.com/schedule/">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
                >
                  Get A Fast Quote
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Google Review Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-secondary backdrop-blur-sm rounded-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    alt="Google"
                    className="w-5 h-5 ml-auto"
                  />
                </div>
                <div className="flex mb-2">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {review.text}
                </p>
              </div>
            ))}

            <div className="text-center text-sm text-muted-foreground pt-2">
              <span className="font-bold">Google</span> rating score:{" "}
              <span className="font-bold">4.9</span> of 5, based on{" "}
              <span className="font-bold">152 reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
