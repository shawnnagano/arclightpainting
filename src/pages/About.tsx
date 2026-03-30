import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
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
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[400px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://arclightpainting.com/wp-content/uploads/2025/08/residential-painting-services-exterior.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">
            <span className="text-accent">Who</span> We Are
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Real <span className="text-accent">People</span> Who Care Deeply
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Behind every brushstroke is a story, a true leader, and a professional you can trust. With <strong className="text-foreground">25 years of service</strong>, a team of <strong className="text-foreground">empowered leaders</strong>, and <strong className="text-foreground">trusted professionals</strong> who treat every home like their own, Arclight is built on people who care as much about the outcome as you do.
          </p>
        </div>
      </section>

      {/* 25 Years of Service */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
            25 Years of <span className="text-accent">Service</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Arclight's story began in the mid-1990s, when founder Shawn Nagano picked up a brush during college summers. What started as side work turned into a lifelong mission: to build something that combined craftsmanship, integrity, and service.
            </p>
            <p>
              From those early days, Shawn carried painting with him through every chapter—launching his first business, serving as a commissioned officer in the U.S. Army, and eventually founding Arclight Painting in 2013. Side by side with co-founder Jennifer Pattison, also a veteran, the two built a company rooted in grit, quality, and trust.
            </p>
            <p>
              Our name, logo, and culture all reflect that mission. "Arclight" is a symbol of clarity—a light strong enough to reveal every detail. The butterfly in our mark represents transformation and creativity, while bold colors stand for honesty, ownership, friendship, and family.
            </p>
          </div>
        </div>
      </section>

      {/* Empowered Leaders */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
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
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
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
          <h2 className="text-3xl font-black text-center mb-4">Team Leaders</h2>
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

      <Footer />
    </div>
  );
};

export default About;
