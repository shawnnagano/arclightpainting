import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import aboutHeroImg from "@/assets/about-hero.jpg";
const teamMembers = [
  {
    name: "Shawn Nagano",
    title: "Executive Officer",
    image: "https://arclightpainting.com/wp-content/uploads/2025/09/image-9-scaled.webp",
    bio: "Shawn casts the long-term vision for Arclight and protects its soul. A University of Washington alum and U.S. Army Captain (ret.), he brings extreme ownership and mission-driven leadership to every project.",
  },
  {
    name: "Jennifer Pattison",
    title: "Sales Manager & Co-Founder",
    image: null,
    bio: "Jennifer leads with clarity, empathy, and integrity. A U.S. Army veteran and mother of three, she combines discipline with care, ensuring every client starts their project with confidence and trust.",
  },
  {
    name: "Christopher Repaso",
    title: "Executive Integrator",
    image: null,
    bio: "Christopher turns the Arclight Vision into actionable, accountable execution. He unifies the leadership team, manages cross-functional coordination, and drives discipline across all departments.",
  },
  {
    name: "Brittany Aguero",
    title: "Marketing Manager",
    image: null,
    bio: "Brittany ensures Arclight's story is seen, heard, and trusted. She manages every campaign with excellence, from digital ads to community outreach.",
  },
  {
    name: "Ellaine Cristostomo",
    title: "Business Operations Manager",
    image: null,
    bio: "Ellaine keeps Arclight's operations running smoothly behind the scenes, managing HR, finance, and compliance with grit and heart.",
  },
  {
    name: "Belle Tijap",
    title: "Controller",
    image: null,
    bio: "Belle oversees Arclight's finances with discipline and precision, ensuring payroll, job costing, and reporting are always reliable.",
  },
  {
    name: "Jessa Cabrera",
    title: "Production Manager",
    image: null,
    bio: "Jessa orchestrates the logistics that drive Arclight's daily production. A licensed civil engineer, she brings planning precision and on-the-ground execution.",
  },
  {
    name: "Daniel Wolff",
    title: "Quality Supervisor",
    image: null,
    bio: "Daniel oversees active job sites and ensures compliance with Arclight's production standards. He serves as quality assurance lead, safety officer, and training coordinator.",
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
            <span className="text-accent">Real</span> People
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Proven <span className="text-accent">Experience</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
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
        </div>
      </section>

      {/* Empowered Leaders */}
      <section id="our-team" className="py-16 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Empowered <span className="text-accent">Leaders</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            At Arclight, we don't just paint houses—we build relationships, empower leaders, and deliver above & beyond service.
          </p>
          <h3 className="text-2xl font-bold text-center mb-10">Meet Our Family</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-xl shadow-sm overflow-hidden text-center p-6 border border-border">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
          <h3 className="text-xl text-center text-muted-foreground mb-10">
            Your Peace of Mind Is Part of the Deal
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Skills & Training", desc: "Every painter is vetted for technical ability and receives ongoing coaching in industry best practices." },
              { title: "Selection Process", desc: "We only hire people who live our core values. Every team member passes a full screening before joining." },
              { title: "Clear Processes", desc: "From setup to walkthrough, our professionals follow documented systems ensuring consistency, safety, and quality." },
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
          <h2 className="text-3xl font-bold text-center mb-4">Team Leaders</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            Our Team Leaders are the heartbeat of Arclight's production. They guide jobs from setup to walkthrough, ensuring every detail meets our Above & Beyond standard.
          </p>
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

      {/* Our Values */}
      <section id="our-values" className="py-16 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-accent">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Honesty",
                icon: "🪞",
                desc: "We tell the truth — about timelines, pricing, and what your home truly needs. No surprises, no shortcuts.",
              },
              {
                title: "Ownership",
                icon: "🛡️",
                desc: "We treat every project like it's our own home. If something isn't right, we make it right — no excuses.",
              },
              {
                title: "Friendship",
                icon: "🤝",
                desc: "We build genuine relationships with our clients and each other. Every interaction is grounded in respect and care.",
              },
              {
                title: "Family",
                icon: "🏡",
                desc: "Our team is a family. We support one another, celebrate wins together, and show up for each other every day.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 rounded-xl border border-border bg-card shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
