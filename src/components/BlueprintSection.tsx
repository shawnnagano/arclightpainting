import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    step: "1",
    title: "Free Consultation & Estimate",
    content:
      "We start with a free, no-obligation consultation at your home. We'll discuss your vision, assess the scope of work, and provide a detailed written estimate — typically within 24 hours.",
  },
  {
    step: "2",
    title: "Color Selection Assistance",
    content:
      "Need help picking the perfect color? Our team provides expert color consultation to ensure your palette complements your home's architecture and your personal style.",
  },
  {
    step: "3",
    title: "Thorough Preparation",
    content:
      "Great paint jobs start with great prep. We meticulously clean, sand, patch, caulk, and prime all surfaces before a single drop of paint is applied.",
  },
  {
    step: "4",
    title: "Premium Materials Only",
    content:
      "We use only top-tier paints from trusted brands like Sherwin-Williams and Benjamin Moore. Quality materials mean a longer-lasting, more beautiful finish.",
  },
  {
    step: "5",
    title: "Expert Application",
    content:
      "Our skilled painters apply paint with precision using the best techniques for each surface — brushing, rolling, or spraying — for a flawless result.",
  },
  {
    step: "6",
    title: "Detailed Walkthrough",
    content:
      "Once painting is complete, we walk through every room with you. If anything doesn't meet your expectations, we'll address it on the spot.",
  },
  {
    step: "7",
    title: "Final Clean-Up & Follow-Up",
    content:
      "We clean up thoroughly, remove all materials, and leave your home spotless. We'll also follow up after the project to make sure everything looks perfect.",
  },
];

const BlueprintSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          The Above & Beyond{" "}
          <span className="text-accent">Blueprint</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Our proven 7-step process ensures exceptional results on every project.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {steps.map((s) => (
            <AccordionItem
              key={s.step}
              value={`step-${s.step}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                    {s.step}
                  </span>
                  <span className="font-bold text-left">{s.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-12">
                {s.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BlueprintSection;
