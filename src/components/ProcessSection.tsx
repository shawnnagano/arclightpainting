import { motion } from "framer-motion";

export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
  serviceName: string;
}

const ProcessSection = ({ steps, serviceName }: ProcessSectionProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Our {serviceName} Process
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/30 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 md:gap-6"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg relative z-10">
                    {i + 1}
                  </div>

                  <div className="pt-1">
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
