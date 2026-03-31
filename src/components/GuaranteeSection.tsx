import { ShieldCheck } from "lucide-react";

const guarantees = [
  {
    title: "We Don't Leave Until You're Happy",
    description:
      "Before we call the job complete, we'll walk the project with you—together. If something's not right, we'll make it right. Whether it's a touch-up, a missed detail, or something that just doesn't feel finished, we'll fix it before final payment is due.",
  },
  {
    title: "Follow-Up Support After Completion",
    description:
      "If something settles or shows up in the first few weeks after we finish (and it's within the agreed scope), we'll come back to address it—at no charge. It's part of how we honor your trust and ensure lasting results.",
  },
  {
    title: "Clear Communication, No Surprises",
    description:
      "You'll always know what to expect—before, during, and after the project. If you ever feel uncertain, unheard, or unsatisfied at any point, we encourage you to tell us. We're not just here to paint; we're here to serve.",
  },
  {
    title: "Backed by our FreshStart™ Program",
    description:
      "Your 100% Satisfaction Guarantee doesn't expire when the project ends. With our FreshStart™ Program, you're also covered by our five-year workmanship commitment—including touch-ups and repairs for peeling, blistering, or chipping paint.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Guaranteed <span className="text-accent">Peace of Mind</span>
        </h2>

        <div className="max-w-3xl mx-auto mt-6 mb-12">
          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
            <ShieldCheck className="h-10 w-10 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Your Peace of Mind Is Part of the Deal</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Arclight Painting, we don't just aim for satisfaction—we aim for delight. That's why we back every project with our 100% Satisfaction Guarantee.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="p-6 rounded-xl bg-card border border-border/50"
            >
              <h3 className="text-lg font-bold mb-3">{g.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
          Your home deserves the highest standard. Your experience should be hassle-free. And your project isn't done until you're truly satisfied—guaranteed.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
