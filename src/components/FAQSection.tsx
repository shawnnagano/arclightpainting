import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import type { FAQItem } from "@/data/faqData";

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

const FAQSection = ({ faqs, heading = "Frequently Asked Questions" }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Frequently Asked <span className="text-accent">Questions</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between bg-card border border-border rounded-lg px-6 py-5 text-left hover:border-accent/40 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <span className="shrink-0 text-accent">
                  {openIndex === i ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
