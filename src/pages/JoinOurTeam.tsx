import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { motion } from "framer-motion";
import teamHeroImg from "@/assets/team-hero.jpg";

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
    title: "Honesty",
    icon: "🪞",
    description: "We tell the truth — about timelines, pricing, and what your home truly needs. No surprises, no shortcuts.",
  },
  {
    title: "Ownership",
    icon: "🛡️",
    description: "We treat every project like it's our own home. If something isn't right, we make it right — no excuses.",
  },
  {
    title: "Friendship",
    icon: "🤝",
    description: "We build genuine relationships with our clients and each other. Every interaction is grounded in respect and care.",
  },
  {
    title: "Family",
    icon: "🏡",
    description: "Our team is a family. We support one another, celebrate wins together, and show up for each other every day.",
  },
];

const JoinOurTeam = () => {
  return (
    <>
      <SEOHead
        title="Join Our Team | Arclight Painting Careers in Bothell, WA"
        description="Join the #1-rated residential painting company in Bothell, WA. We're looking for dedicated painters who share our values of quality craftsmanship and exceptional service."
        canonical="/join-our-team"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Join Our Team", url: "/join-our-team" },
        ])}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img src={teamHeroImg} alt="Arclight Painting team" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
              Join Our <span className="text-accent">Team!</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              We're always looking for good people who want to make a difference.
            </p>
            <a href="#openings">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-base">
                View Openings ↓
              </Button>
            </a>
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
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our <span className="text-accent">Core Values</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 shadow-sm text-center border border-border"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
