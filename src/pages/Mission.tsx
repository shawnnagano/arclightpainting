import Header from "@/components/Header";
import BlueprintSection from "@/components/BlueprintSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { ShieldCheck, Heart, RefreshCw, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutHeroImg from "@/assets/about-us-arclight-painting-bothell-wa.webp";

const coreValues = [
  {
    icon: "❤️",
    title: "Honesty",
    description: "We tell the truth, even when it's hard.",
  },
  {
    icon: "🛡️",
    title: "Ownership",
    description: "We take responsibility for our work and our word.",
  },
  {
    icon: "🤝",
    title: "Friendship",
    description: "We treat every client and teammate like family.",
  },
  {
    icon: "🏠",
    title: "Family",
    description: "We protect what matters most — your home and our people.",
  },
];

const guarantees = [
  {
    title: "PCA™ Quality Inspection",
    titleNode: <>PCA™ <span className="text-accent">Quality</span> Inspection</>,
    description:
      "Our guarantee is backed by a real inspection process. Before your project is considered complete, it receives an independent review by our Quality Supervisor based on Painting Contractors of America Industry Standards. If anything falls short, we document it, correct it, and make it right, so you can have confidence knowing the work was held to a clear, professional standard.",
  },
  {
    title: "We Don't Leave Until You're Happy",
    titleNode: <>We Don't Leave Until You're <span className="text-accent">Happy</span></>,
    description:
      "Before we call the job complete, we'll walk the project with you—together. If something's not right, we'll make it right. Whether it's a touch-up, a missed detail, or something that just doesn't feel finished, we'll fix it before final payment is due.",
  },
  {
    title: "Clear Communication, No Surprises",
    titleNode: <>Clear <span className="text-accent">Communication</span>, No Surprises</>,
    description:
      "You'll always know what to expect—before, during, and after the project. If you ever feel uncertain, unheard, or unsatisfied at any point, we encourage you to tell us. We're not just here to paint; we're here to serve.",
  },
  {
    title: "Backed by our FreshStart™ Touch-Up Plan",
    titleNode: <>Backed by our Fresh<span className="text-accent">Start</span>™ Touch-Up Plan</>,
    description:
      "Your 100% Satisfaction Guarantee doesn't expire when the project ends. With our FreshStart™ Touch-Up Plan, you're also covered by our five-year workmanship commitment—including touch-ups and repairs for peeling, blistering, or chipping paint.",
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Mission - Real Purpose | Arclight Painting"
        description="At Arclight Painting, service comes first. Learn about our purpose-driven mission, FreshStart™ Touch-Up Plan, and 100% Satisfaction Guarantee."
        canonical="/mission"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Mission", url: "/mission" },
        ])}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aboutHeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfbda] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            Real <span className="text-accent">Purpose</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            Serving <span className="text-accent">People</span> Above Profits.
          </p>
           <p className="max-w-[50%] text-lg leading-relaxed text-muted-foreground">
            Our Above &amp; Beyond Blueprint™ is the proven process behind the smooth experience, clear communication, and exceptional craftsmanship our clients consistently rave about.
          </p>
        </div>
      </section>

      {/* Purpose-Driven Service */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Values-Driven <span className="text-accent">Service</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-12">
              Arclight exists to serve. Every promise, guarantee, and process is built around our{" "}
              <span className="text-accent font-semibold">Core Values</span> so you can feel confident, cared for, and at peace from start to finish.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-secondary rounded-xl p-6 shadow-sm text-center"
                >
                  <span className="text-3xl mb-3 block">{value.icon}</span>
                  <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FreshStart™ Touch-Up Plan */}
      <section id="freshstart" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <RefreshCw className="h-8 w-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Ongoing <span className="text-accent">Service</span>
              </h2>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border/50 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every Arclight project is backed by our <span className="text-accent font-semibold">FreshStart™ Touch-Up Plan</span> — a free, five-year workmanship commitment that keeps your home looking its best long after we leave.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">5 Years of Coverage</span> — If paint peels, blisters, or chips due to workmanship within five years of project completion, we'll come back and fix it at no charge.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Scheduled Touch-Ups</span> — We proactively reach out to schedule touch-up visits, so your home stays protected without you having to track anything.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">No Fine Print</span> — Our FreshStart™ Plan is straightforward. If it's a workmanship issue, it's covered. Period.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Peace of Mind</span> — You're not just hiring a painter. You're gaining a long-term partner committed to the quality and longevity of your home's finish.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 100% Satisfaction Guarantee */}
      <section id="satisfaction-guarantee" className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Guaranteed <span className="text-accent">Peace of Mind</span>
            </h2>

            <div className="max-w-3xl mx-auto mt-6 mb-12">
              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
                <ShieldCheck className="h-10 w-10 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Peace of Mind Is Part of the Deal</h3>
                   <p className="text-muted-foreground leading-relaxed">
                    At Arclight Painting, we don't just aim for satisfaction—we aim for delight. That's why we back every project with our <span className="text-accent font-semibold">100% Satisfaction Guarantee</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {guarantees.map((g) => (
                <div
                  key={g.title}
                  className="p-6 rounded-xl bg-card border border-border/50"
                >
                  <h3 className="text-lg font-bold mb-3">{'titleNode' in g && g.titleNode ? g.titleNode : g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {g.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center font-bold mt-8 max-w-2xl mx-auto">
              Your home deserves the <span className="text-accent">highest standard</span>. Your experience should be <span className="text-accent">hassle-free</span>. And your project isn't done until you're <span className="text-accent">truly satisfied</span>—GUARANTEED.
            </p>
          </motion.div>
        </div>
      </section>


      <BlueprintSection showImage />

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-accent">Get Started</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the Arclight difference — purpose-driven service backed by real guarantees.
          </p>
          <Link to="/schedule">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg rounded-md shadow-lg">
              Get a TrueQuote →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
