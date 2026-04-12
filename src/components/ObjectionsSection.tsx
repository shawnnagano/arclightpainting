import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export interface Objection {
  concern: string;
  response: string;
}

interface ObjectionsSectionProps {
  objections: Objection[];
}

const ObjectionsSection = ({ objections }: ObjectionsSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Common Concerns
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {objections.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-base">{obj.concern}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                  {obj.response}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
