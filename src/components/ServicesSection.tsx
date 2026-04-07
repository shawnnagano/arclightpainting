import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Paintbrush, Home, PanelTop, Hammer, Droplets, Building2, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import painterForADayHero from "@/assets/one-day-painting-service-bothell-wa.webp";
import popcornCeilingHero from "@/assets/popcorn-ceiling-removal-bothell-wa.webp";
import commercialHero from "@/assets/commercial-painting-service-bothell-wa.webp";
import exteriorHero from "@/assets/exterior-house-painting-bothell-wa.webp";
import pressureWashingHero from "@/assets/pressure-washing-service-bothell-wa.webp";

const services = [
  {
    title: "Interior Painting",
    description: "As a leading team of interior house painters in Bothell, WA, we understand that every home is unique.",
    icon: Paintbrush,
    image: "/images/interior-room-painting-natural-light-bothell.webp",
    link: "/services/interior-painting",
  },
  {
    title: "Exterior Painting",
    description: "Avoid the risks and hassles of DIY projects by trusting our experienced exterior painters here in Bothell, WA.",
    icon: Home,
    image: exteriorHero,
    link: "/services/exterior-painting",
  },
  {
    title: "Cabinet Refinishing",
    description: "Kitchen cabinets endure daily wear from food, grease, and stains, which fades and scuffs them over time.",
    icon: PanelTop,
    image: "/images/cabinet-refinishing-project-bothell.webp",
    link: "/services/cabinet-refinishing",
  },
  {
    title: "Drywall Repair",
    description: "Drywall may seem simple, but it is a key element for your home's structure and style.",
    icon: Hammer,
    image: "/images/drywall-repair-project-bothell-wa.webp",
    link: "/services/drywall-repairs",
  },
  {
    title: "Pressure Washing",
    description: "Professional pressure washing that cleans siding, driveways and decks to restore a fresh look.",
    icon: Droplets,
    image: pressureWashingHero,
    link: "/services/pressure-washing",
  },
  {
    title: "Commercial Painting",
    description: "Enhance your business space with expert commercial painting services designed for durability and a polished look.",
    icon: Building2,
    image: commercialHero,
    link: "/services/commercial-painting",
  },
  {
    title: "Painter for a Day",
    description: "One professional. One day. One fresh new look. Get a skilled painter for 8 full hours — no estimate needed. Just $689.",
    icon: Clock,
    image: painterForADayHero,
    link: "/services/painter-for-a-day",
  },
  {
    title: "Popcorn Ceiling Removal",
    description: "Modernize your home by removing outdated popcorn ceilings for a smooth, clean finish.",
    icon: Layers,
    image: popcornCeilingHero,
    link: "/services/popcorn-ceiling-removal",
  },
];

const ServicesSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section id="services" className="pt-8 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {!hideHeader && (
          <>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              From residential homes to commercial spaces, Arclight delivers exceptional results through craftsmanship, care, and our proven Above & Beyond Blueprint™.
            </p>
          </>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
            <Link
              to={service.link}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
