import { motion } from "framer-motion";
import { Paintbrush, Home, PanelTop, Hammer, Droplets, Building2 } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    description:
      "Transform your living spaces with expert interior painting. We handle walls, ceilings, trim, and accent walls with precision.",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
  },
  {
    title: "Exterior Painting",
    description:
      "Boost your curb appeal and protect your home from the elements with our professional exterior painting services.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Cabinet Refinishing",
    description:
      "Give your kitchen a fresh new look without the cost of a full remodel. Our cabinet refinishing delivers stunning results.",
    icon: PanelTop,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    title: "Drywall Repair",
    description:
      "From small holes to large patches, we'll restore your walls to a smooth, paint-ready finish before applying fresh color.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
  },
  {
    title: "Pressure Washing",
    description:
      "Remove years of dirt, grime, and mildew from your home's exterior surfaces. The perfect prep for a new paint job.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    title: "Commercial Painting",
    description:
      "Professional painting solutions for offices, retail spaces, and commercial properties. Minimal disruption, maximum impact.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From interior walls to commercial properties, we deliver exceptional results on
          every project.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
