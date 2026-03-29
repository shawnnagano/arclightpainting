import { ShieldCheck, Clock, ThumbsUp } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    description:
      "If you're not completely satisfied with our work, we'll come back and make it right — no questions asked.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We respect your schedule. Our team arrives on time, stays on track, and finishes when we say we will.",
  },
  {
    icon: ThumbsUp,
    title: "Clean & Respectful",
    description:
      "We protect your furniture, clean up daily, and leave your home spotless when the job is done.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          Our <span className="text-accent">Guarantee</span> To You
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We stand behind every project with promises that matter.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="text-center p-8 rounded-xl bg-card border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-5">
                <g.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-3">{g.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
