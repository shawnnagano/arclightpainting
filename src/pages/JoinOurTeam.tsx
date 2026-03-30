import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Users, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";

const openings = [
  {
    title: "Professional Team Member Painter",
    location: "Bothell, WA",
    salary: "$23.18 – $37.46",
    applyUrl: "https://link.arclightpainting.com/widget/form/gWvGAtmZ20X3MldL7DVe",
  },
  {
    title: "Professional Team Leader Painter",
    location: "Bothell, WA",
    salary: "$36.80 – $48.41",
    applyUrl: "https://link.arclightpainting.com/widget/form/HbZ0eGzrgHtkFG3k3WuF",
  },
  {
    title: "Professional Subcontracting Team Leader Painter",
    location: "Bothell, WA",
    salary: "$44.94 – $47.36",
    applyUrl: "https://link.arclightpainting.com/widget/form/Q6xZk6j2VybZl0pnRBxj",
  },
];

const values = [
  {
    icon: Shield,
    title: "Extreme Ownership",
    description: "We take full responsibility for every project outcome — no excuses, no shortcuts.",
  },
  {
    icon: Heart,
    title: "Quality Craftsmanship",
    description: "We believe high-quality workmanship is worth the investment and anything short of extraordinary is unacceptable.",
  },
  {
    icon: Users,
    title: "Exceptional Service",
    description: "We always strive to go above and beyond for our customers, employees, and community.",
  },
];

const JoinOurTeam = () => {
  return (
    <>
      <SEOHead
        title="Join Our Team | Arclight Painting Careers in Bothell, WA"
        description="Join the #1-rated residential painting company in Bothell, WA. We're looking for dedicated painters who share our values of quality craftsmanship and exceptional service."
        canonical="/join-our-team"
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Join Our Team", url: "/join-our-team" },
        ])}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold mb-6"
            >
              Join Our Team!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8"
            >
              We're always looking for good people who want to make a difference.
            </motion.p>
            <motion.a
              href="#openings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-base">
                View Openings ↓
              </Button>
            </motion.a>
          </div>
        </section>

        {/* About Working Here */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why Arclight?</h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>
                Arclight Painting is the #1-rated residential painting company in the Bothell, WA area. We are a veteran-owned and operated company, specializing in top-tier customer service. Our business is founded on a set of core values centered on providing maximum value to our clients by doing business the right way.
              </p>
              <p>
                We believe that high-quality workmanship is worth the investment, and anything short of extraordinary service is unacceptable. Through Quality Craftsmanship, Exceptional Service, and Extreme Ownership, we always strive to go "above and beyond" when it comes to serving our customers, employees, and community.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 shadow-sm text-center"
                >
                  <value.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section id="openings" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Openings</h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-secondary rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    <p className="text-muted-foreground text-sm">{job.location} · {job.salary}</p>
                  </div>
                  <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                      Apply Now →
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default JoinOurTeam;
