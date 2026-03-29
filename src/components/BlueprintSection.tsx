import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    step: "1",
    title: "TrueQuote™ Pricing",
    content:
      "Get a transparent, detailed quote with no hidden fees. Our TrueQuote™ system ensures you know exactly what you're paying for — no surprises, no last-minute add-ons.",
  },
  {
    step: "2",
    title: "PowerFlex™ Scheduling",
    content:
      "We work around your schedule, not the other way around. Our PowerFlex™ system lets you choose the timing that works best for your family and your home.",
  },
  {
    step: "3",
    title: "ColorConfidence™ Consultation",
    content:
      "Not sure which colors to choose? Our ColorConfidence™ consultation helps you pick the perfect palette that complements your home's architecture and your personal style.",
  },
  {
    step: "4",
    title: "Top-Rated Paints",
    content:
      "We use only premium paints from trusted brands. Quality materials mean a longer-lasting, more beautiful finish that stands up to the Pacific Northwest weather.",
  },
  {
    step: "5",
    title: "JobTrack™ Project Management",
    content:
      "Stay informed every step of the way with our JobTrack™ system. You'll receive daily updates on progress, next steps, and any details you need to know.",
  },
  {
    step: "6",
    title: "CompanyCam™ Timeline",
    content:
      "See your project unfold in real-time with CompanyCam™. We document every phase of the work so you can watch the transformation happen — even when you're not home.",
  },
  {
    step: "7",
    title: "PCA™ Standards Inspection",
    content:
      "Every project receives a final inspection against PCA (Painting Contractors Association) standards. We don't call it done until it meets the highest industry benchmarks.",
  },
];

const BlueprintSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-2">
          The Above & Beyond{" "}
          <span className="text-accent">Blueprint</span>
        </h2>
        <p className="text-center text-xl font-semibold text-muted-foreground mb-12">
          Painting Made Simple and Stress-Free
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
