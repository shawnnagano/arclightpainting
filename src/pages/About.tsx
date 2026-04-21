import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SEOHead, {
  breadcrumbSchema,
  shawnNaganoSchema,
  jenniferPattisonSchema,
} from "@/components/SEOHead";
import aboutHeroImg from "@/assets/about-us-arclight-painting-bothell-wa.webp";
import shawnImg from "@/assets/shawn-nagano-owner-arclight-painting.webp";
import jenniferImg from "@/assets/jennifer-pattison-co-owner-arclight.webp";
import christopherImg from "@/assets/christopher-repaso-arclight-painting.webp";
import brittanyImg from "@/assets/brittany-aguero-arclight-painting.webp";
import ellaineImg from "@/assets/ellaine-cristostomo-arclight-painting.webp";
import belleImg from "@/assets/belle-tijap-arclight-painting.webp";
import jessaImg from "@/assets/jessa-cabrera-arclight-painting.webp";
import danielImg from "@/assets/daniel-wolff-arclight-painting.webp";
import ionImg from "@/assets/ion-botnariuc-arclight-painting.webp";
import alejandroImg from "@/assets/alejandro-lopez-arclight-painting.webp";
import sandorImg from "@/assets/sandor-kovacs-arclight-painting.webp";
import shawnCImg from "@/assets/shawn-callihoo-arclight-painting.webp";
import antoniImg from "@/assets/antoni-salvin-arclight-painting.webp";
import georgeImg from "@/assets/george-linares-arclight-painting.webp";
import robertoImg from "@/assets/roberto-alcazar-arclight-painting.webp";
import vicenteImg from "@/assets/vicente-guerrero-arclight-painting.webp";
import victorImg from "@/assets/victor-mendoza-arclight-painting.webp";
import benjaminImg from "@/assets/benjamin-griffin-arclight-painting.webp";
import kevinImg from "@/assets/kevin-garnica-arclight-painting.webp";
import tonyImg from "@/assets/tony-garcia-arclight-painting.webp";

const teamMembers: { name: string; title: string; image: string; bio: string; imageStyle?: React.CSSProperties; linkedin?: string }[] = [
  {
    name: "Shawn Nagano",
    title: "Founder",
    image: shawnImg,
    bio: "Shawn is the visionary behind Arclight and the one always pushing it forward. A University of Washington alum, Army Captain (ret.), and lifelong builder at heart, he leads with grit, purpose, and a deep belief in helping family and friends win.",
    linkedin: "https://www.linkedin.com/in/shawn-nagano/",
  },
  {
    name: "Jennifer Pattison",
    title: "Co-Founder",
    image: jenniferImg,
    bio: "Jennifer brings heart, clarity, and confidence to every customer relationship. A U.S. Army veteran and mom of three, she has a natural way of helping homeowners feel comfortable, cared for, and ready to move forward.",
    linkedin: "https://www.linkedin.com/in/jennifer-pattison-48950865/",
  },
  {
    name: "Christopher Repaso",
    title: "Executive Integrator",
    image: christopherImg,
    bio: "Christopher is the steady hand behind the execution of Arclight's vision. With deep operations experience and a people-first leadership style, he keeps the team aligned, focused, and moving in the same direction.",
  },
  {
    name: "Brittany Aguero",
    title: "Marketing Manager",
    image: brittanyImg,
    bio: "Brittany helps tell the Arclight story in a way people can see, feel, and trust. She brings creativity, heart, and strategic focus to every campaign, while staying rooted in faith, growth, and service.",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "center 20%",
    },
  },
  {
    name: "Ellaine Cristostomo",
    title: "Business Operations Manager",
    image: ellaineImg,
    bio: "Ellaine keeps the behind-the-scenes engine running with focus, care, and positivity. She is driven, dependable, and always growing, with the kind of energy that lifts the team and keeps things moving.",
    imageStyle: { objectPosition: "center 60%" },
  },
  {
    name: "Belle Tijap",
    title: "Controller",
    image: belleImg,
    bio: "Belle brings steady focus and quiet excellence to Arclight's financial operations. She keeps things accurate, dependable, and on track, while leading with gratitude, ownership, and consistency.",
  },
  {
    name: "Jessa Cabrera",
    title: "Production Manager",
    image: jessaImg,
    bio: "Jessa connects the moving pieces of production with calm precision. As a licensed civil engineer, traveler, and runner, she brings strong coordination, thoughtful execution, and a grounded approach to every project.",
    imageStyle: { objectPosition: "top", transform: "scale(1.5)" },
  },
  {
    name: "Daniel Wolff",
    title: "Quality Supervisor",
    image: danielImg,
    bio: "Daniel brings a simple, straightforward approach to quality in the field. With more than 12 years of painting experience, he helps make sure every project is done right, every standard is upheld, and every crew has the support they need.",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "center 18%",
      transform: "scale(1.08)",
    },
  },
];

const teamLeaders: { name: string; image?: string; imageStyle?: React.CSSProperties }[] = [
  { name: "Ion Botnariuc", image: ionImg, imageStyle: { objectPosition: "center 20%" } },
  { name: "Roberto Alcazar", image: robertoImg, imageStyle: { objectPosition: "center 25%" } },
  { name: "Shawn Callihoo", image: shawnCImg, imageStyle: { objectPosition: "center 25%" } },
  { name: "Alejandro Lopez", image: alejandroImg, imageStyle: { objectPosition: "center 30%" } },
  { name: "Sandor Kovacs", image: sandorImg, imageStyle: { objectPosition: "center 25%" } },
  { name: "Todd Telmer" },
  { name: "Antoni Salvin", image: antoniImg, imageStyle: { objectPosition: "center 20%" } },
  { name: "George Linares", image: georgeImg, imageStyle: { objectPosition: "center 15%" } },
  { name: "Vicente Guerrero", image: vicenteImg, imageStyle: { objectPosition: "center 25%" } },
  { name: "Victor Mendoza", image: victorImg, imageStyle: { objectPosition: "center 15%" } },
  { name: "Benjamin Griffin", image: benjaminImg, imageStyle: { objectPosition: "center 20%" } },
  { name: "Kevin Garnica", image: kevinImg, imageStyle: { objectPosition: "center 25%" } },
  { name: "Tony Garcia", image: tonyImg, imageStyle: { objectPosition: "center 20%" } },
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
        description="Meet the team behind Bothell's most trusted painting company. Veteran-owned with 25+ years of experience, every Arclight painter is trained, background-checked, and committed to quality."
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfbda] to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
            Real <span className="text-accent">People</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            Who <span className="text-accent">Care</span> Deeply
          </p>
          <p className="max-w-[50%] text-lg leading-relaxed text-muted-foreground mb-6">
            Our team is built on character, excellence, and genuine care, so you can feel confident knowing your project is in trusted hands.
          </p>
        </div>
      </section>

      {/* 25 Years of Service */}
      <section id="our-story" className="py-16 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
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
                src="/images/painting-estimate-consultation-illustration.webp"
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
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" style={member.imageStyle || { objectPosition: 'top' }} loading="lazy" />
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
            What Sets Us Apart as a <span className="text-accent">Painting Company</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamLeaders.map((member) => (
              <div key={member.name} className="bg-card rounded-xl shadow-sm overflow-hidden text-center p-6 border border-border">
                <div className="w-28 h-28 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" style={member.imageStyle || { objectPosition: 'center 20%' }} loading="lazy" />
                  ) : (
                    <span className="text-2xl font-bold text-accent">{member.name.split(" ").map(n => n[0]).join("")}</span>
                  )}
                </div>
                <h4 className="font-bold text-lg">{member.name}</h4>
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
