import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Paintbrush, Home, PanelTop, Hammer, Droplets, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Interior Painting",
    description: "As a leading team of interior house painters in Bothell, WA, we understand that every home is unique.",
    icon: Paintbrush,
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg",
    link: "/services",
  },
  {
    title: "Exterior Painting",
    description: "Avoid the risks and hassles of DIY projects by trusting our experienced exterior painters here in Bothell, WA.",
    icon: Home,
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-3-1-683x1024.jpg",
    link: "/services",
  },
  {
    title: "Cabinet Refinishing",
    description: "Kitchen cabinets endure daily wear from food, grease, and stains, which fades and scuffs them over time.",
    icon: PanelTop,
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg",
    link: "/services",
  },
  {
    title: "Drywall Repair",
    description: "Drywall may seem simple, but it is a key element for your home's structure and style.",
    icon: Hammer,
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg",
    link: "/services",
  },
  {
    title: "Pressure Washing",
    description: "Professional pressure washing that cleans siding, driveways and decks to restore a fresh look.",
    icon: Droplets,
    image: "https://arclightpainting.com/wp-content/uploads/2023/11/pressure-washing-company-concrete-cleaning-1.jpg",
    link: "/services",
  },
  {
    title: "Commercial Painting",
    description: "Enhance your business space with expert commercial painting services designed for durability and a polished look.",
    icon: Building2,
    image: "https://arclightpainting.com/wp-content/uploads/2025/08/911c859a-0306-4684-a98f-c4627a8148a0-1024x683.webp",
    link: "/services",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          From residential homes to commercial spaces, Arclight delivers exceptional results through craftsmanship, care, and our proven Above & Beyond Blueprint™.
        </p>

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

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="font-semibold">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
