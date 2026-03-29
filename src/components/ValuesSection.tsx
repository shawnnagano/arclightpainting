import { motion } from "framer-motion";
import { Users, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Real People",
    points: [
      "Locally owned and operated in Bothell, WA",
      "Our painters are W-2 employees — not subcontractors",
      "Background-checked, insured, and trained professionals",
      "We treat your home like our own",
    ],
  },
  {
    icon: Heart,
    title: "Real Purpose",
    points: [
      "We donate a portion of every project to local charities",
      "Committed to building lasting community relationships",
      "Mentorship and career growth for our team members",
      "Painting with purpose — beyond just a paycheck",
    ],
  },
  {
    icon: Award,
    title: "Exceptional Results",
    points: [
      "Premium paints and materials on every job",
      "Meticulous prep work for a flawless finish",
      "Detailed walkthrough and final inspection",
      "100% satisfaction guarantee on all projects",
    ],
  },
];

const ValuesSection = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          Real People. Real Purpose.{" "}
          <span className="text-accent">Exceptional Results.</span>
        </h2>
        <p className="text-center opacity-80 mb-16 max-w-2xl mx-auto">
          At Arclight Painting, we're more than just painters — we're your neighbors,
          committed to excellence in every brushstroke.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <v.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <ul className="space-y-3 text-left">
                {v.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm opacity-90">
                    <span className="text-accent mt-1 shrink-0">✓</span>
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
