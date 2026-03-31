import { motion } from "framer-motion";
import { Users, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "REAL PEOPLE",
    subtitle: "People Who Care Deeply",
    description:
      "Our team is built on character, excellence, and genuine care, so you can feel confident knowing your project is in trusted hands.",
    points: [
      "Proven experience",
      "Empowered leadership",
      "Trusted professionals",
    ],
  },
  {
    icon: Heart,
    title: "REAL PURPOSE",
    subtitle: "Serving People Above Profits",
    description:
      "At Arclight, service comes first. Every promise, guarantee, and part of our process is designed to give you confidence, peace of mind, and a better experience from beginning to end.",
    points: [
      "Value-driven service",
      "Ongoing support",
      "Guaranteed peace of mind",
    ],
  },
  {
    icon: Award,
    title: "EXCEPTIONAL RESULTS",
    subtitle: "No Shortcuts. No Surprises.",
    description:
      "Our Above & Beyond Blueprint™ is the proven process behind the smooth experience, clear communication, and exceptional craftsmanship our clients consistently rave about.",
    points: [
      "Transparent pricing",
      "Flexible scheduling",
      "Expert guidance",
      "Real-time updates",
      "Quality assurance",
    ],
  },
];

const ValuesSection = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          The Arclight Painting Difference
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary rounded-xl p-8 border border-border transition-shadow duration-200 hover:shadow-lg cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-5">
                <v.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-1">
                {v.title.split(' ').map((word, wi) => {
                  const isHighlight = word === 'REAL' || word === 'EXCEPTIONAL';
                  return (
                    <span key={wi} className={isHighlight ? 'text-foreground' : 'text-accent'}>
                      {word}{' '}
                    </span>
                  );
                })}
              </h3>
              <p className="text-lg font-semibold mb-3">{v.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{v.description}</p>
              <ul className="space-y-2">
                {v.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
