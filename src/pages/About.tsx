import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import aboutHeroImg from "@/assets/about-hero.jpg";
import shawnImg from "@/assets/shawn-nagano-small.jpg";
import jenniferImg from "@/assets/jennifer-pattison.jpg";
import christopherImg from "@/assets/christopher-repaso.png";
import brittanyImg from "@/assets/brittany-aguero.jpg";
import ellaineImg from "@/assets/ellaine-cristostomo.jpg";
import belleImg from "@/assets/belle-tijap.png";
import jessaImg from "@/assets/jessa-cabrera.png";
import danielImg from "@/assets/daniel-wolff.png";

const teamMembers: { name: string; title: string; image: string; bio: string; imageStyle?: React.CSSProperties }[] = [
  {
    name: "Shawn Nagano",
    title: "Executive Officer",
    image: shawnImg,
    bio: "Shawn casts the long-term vision for Arclight and protects its soul. A University of Washington alum and U.S. Army Captain (ret.), he brings extreme ownership and mission-driven leadership to every project.",
  },
  {
    name: "Jennifer Pattison",
    title: "Sales Manager & Co-Founder",
    image: jenniferImg,
    bio: "Jennifer leads with clarity, empathy, and integrity. A U.S. Army veteran and mother of three, she combines discipline with care, ensuring every client starts their project with confidence and trust.",
  },
  {
    name: "Christopher Repaso",
    title: "Executive Integrator",
    image: christopherImg,
    bio: "Christopher turns the Arclight Vision into actionable, accountable execution. He unifies the leadership team, manages cross-functional coordination, and drives discipline across all departments.",
  },
  {
    name: "Brittany Aguero",
    title: "Marketing Manager",
    image: brittanyImg,
    bio: "Brittany ensures Arclight's story is seen, heard, and trusted. She manages every campaign with excellence, from digital ads to community outreach.",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "center 42%",
      transform: "scale(1.22)",
    },
  },
  {
    name: "Ellaine Cristostomo",
    title: "Business Operations Manager",
    image: ellaineImg,
    bio: "Ellaine keeps Arclight's operations running smoothly behind the scenes, managing HR, finance, and compliance with grit and heart.",
    imageStyle: { objectPosition: "center 60%" },
  },
  {
    name: "Belle Tijap",
    title: "Controller",
    image: belleImg,
    bio: "Belle oversees Arclight's finances with discipline and precision, ensuring payroll, job costing, and reporting are always reliable.",
  },
  {
    name: "Jessa Cabrera",
    title: "Production Manager",
    image: jessaImg,
    bio: "Jessa orchestrates the logistics that drive Arclight's daily production. A licensed civil engineer, she brings planning precision and on-the-ground execution.",
    imageStyle: { objectPosition: "top", transform: "scale(1.5)" },
  },
  {
    name: "Daniel Wolff",
    title: "Quality Supervisor",
    image: danielImg,
    bio: "Daniel oversees active job sites and ensures compliance with Arclight's production standards. He serves as quality assurance lead, safety officer, and training coordinator.",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "center 18%",
      transform: "scale(1.08)",
    },
  },
];

const teamLeaders = [
  "Ion Botnariuc", "Ricardo Guerrero", "Roberto Alcazar", "Shawn Callihoo",
  "Alejandro Lopez", "Angel Andrade", "Sandor Kovacs", "Tuguldur Telmer",
];

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us - Meet the Arclight Painting Team | Bothell, WA"
        description="Meet the Arclight Painting team — 25 years of service, veteran-owned, and built on trust. Learn about our leadership, values, and commitment to quality house painting in Bothell, WA."
        canonical="/about"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ])}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aboutHeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            Real <span className="text-accent">People</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            Who <span className="text-accent">Care</span> Deeply
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground mb-6">
            Our team is built on character, excellence, and genuine care, so you can feel confident knowing your project is in trusted hands.
          </p>
        </div>
      </section>

      {/* 25 Years of Service */}
      <section id="our-story" className="py-16 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Proven <span className="text-accent">Experience</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Arclight's story began in the mid-1990s, when founder Shawn Nagano started painting during college summers. What began as side work became a lifelong commitment to craftsmanship, integrity, and service.
              </p>
              <p>
                After building his first business and serving as a commissioned officer in the U.S. Army, Shawn founded Arclight Painting in 2013 alongside co-founder Jennifer Pattison, also a veteran. Together, they built a company rooted in discipline, trust, and doing the job right.
              </p>
              <p>
                The Arclight name reflects clarity, attention to detail, and transformation, values that continue to shape our culture and our work today.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://arclightpainting.com/wp-content/uploads/2025/09/image__11_-removebg-preview.png"
                alt="Shawn Nagano and Jennifer Pattison, owners of Arclight Painting"
                className="max-w-[300px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empowered Leaders */}
      <section id="our-team" className="py-16 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Empowered <span className="text-accent">Leaders</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We do more than complete projects. We build relationships, take ownership, and lead with purpose. Our team is made up of empowered leaders who communicate clearly, solve problems proactively, and work hard to create an experience that feels smooth, professional, and trustworthy.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-xl shadow-sm overflow-hidden text-center p-6 border border-border">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" style={member.imageStyle || { objectPosition: 'top' }} />
                  ) : (
                    <span className="text-2xl font-bold text-accent">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-accent text-sm font-semibold mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Professionals */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trusted <span className="text-accent">Professionals</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Skills & Training", desc: <>Our painters are chosen for <span className="text-accent font-semibold">technical ability</span> and developed through ongoing coaching and industry best practices.</> },
              { title: "Selection Process", desc: <>We hire people who live our <span className="text-accent font-semibold">Core Values</span> and carefully screen every team member before they join our team.</> },
              { title: "Clear Processes", desc: <>From setup to walkthrough, we follow <span className="text-accent font-semibold">proven systems</span> that create consistency, safety, and quality at every stage.</> },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leaders */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {teamLeaders.map((name) => (
              <div key={name} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-2">
                  <span className="text-accent font-bold">{name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <p className="font-semibold text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default About;
