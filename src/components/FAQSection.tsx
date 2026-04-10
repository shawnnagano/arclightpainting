import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Fragment, type ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import type { FAQItem } from "@/data/faqData";

const linkedPhrases = [
  {
    phrase: "FreshStart™ Touch-Up Plan",
    to: "/mission#ongoing-service",
  },
  {
    phrase: "100% Satisfaction Guarantee",
    to: "/mission#satisfaction-guarantee",
  },
  {
    phrase: "Pricing Page",
    to: "/pricing",
  },
  {
    phrase: "Pricing Calculator",
    to: "/pricing#pricing-calculator",
  },
  {
    phrase: "How Long After Painting Can I Sleep in the Room? 4 Expert Tips",
    to: "/how-long-after-painting-can-i-sleep-in-the-room",
  },
] as const;

const highlightedPhrases = [
  { phrase: "PowerFlex™", highlightPart: "Flex" },
  { phrase: "TrueQuote™", highlightPart: "Quote" },
  { phrase: "ColorConfidence™", highlightPart: "Confidence" },
  { phrase: "FreshStart™", highlightPart: "Start" },
  { phrase: "PCA™", highlightPart: "PCA" },
] as const;

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

const renderAnswer = (answer: string) => {
  let parts: ReactNode[] = [answer];

  linkedPhrases.forEach(({ phrase, to }) => {
    parts = parts.flatMap((part, partIndex) => {
      if (typeof part !== "string" || !part.includes(phrase)) {
        return [part];
      }

      return part.split(phrase).flatMap((segment, segmentIndex, segments) => {
        const nodes: (string | ReactNode)[] = [];

        if (segment) {
          nodes.push(segment);
        }

        if (segmentIndex < segments.length - 1) {
          nodes.push(
            <Link
              key={`${phrase}-${partIndex}-${segmentIndex}-link`}
              to={to}
              className="text-accent font-semibold hover:underline"
            >
              {phrase}
            </Link>
          );
        }

        return nodes;
      });
    });
  });

  highlightedPhrases.forEach(({ phrase, highlightPart }) => {
    parts = parts.flatMap((part, partIndex) => {
      if (typeof part !== "string" || !part.includes(phrase)) {
        return [part];
      }

      return part.split(phrase).flatMap((segment, segmentIndex, segments) => {
        const nodes: (string | ReactNode)[] = [];

        if (segment) {
          nodes.push(segment);
        }

        if (segmentIndex < segments.length - 1) {
          const before = phrase.replace(highlightPart + "™", "").replace(highlightPart, "");
          nodes.push(
            <span key={`${phrase}-${partIndex}-${segmentIndex}-hl`} className="font-semibold">
              {before}<span className="text-accent">{highlightPart}</span>™
            </span>
          );
        }

        return nodes;
      });
    });
  });

  return parts;
};

const FAQSection = ({ faqs, heading = "Frequently Asked Questions" }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="pt-8 pb-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <hr className="border-border mb-12" />
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
                  {renderAnswer(faq.answer)}
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
