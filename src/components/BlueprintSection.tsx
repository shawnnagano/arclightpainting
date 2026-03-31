import { CheckCircle } from "lucide-react";
import blueprintImage from "@/assets/blueprint-photo.jpg";

const steps = [
  { step: "1", title: "TrueQuote™ Pricing", rendered: <>TrueQuote™ pricing</> },
  { step: "2", title: "PowerFlex™ Scheduling", rendered: <>PowerFlex™ scheduling</> },
  { step: "3", title: "ColorConfidence™ Consultation", rendered: <>ColorConfidence™ consultation</> },
  { step: "4", title: "JobTrack™ Project Management", rendered: <>JobTrack™ project management</> },
  { step: "5", title: "PCA™ Quality Inspection", rendered: <>PCA™ quality inspection</> },
];

const BlueprintSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text content */}
          <div className="lg:w-1/2">
            <p className="text-lg md:text-xl font-bold tracking-widest uppercase mb-2">
              THE <span className="text-accent">ABOVE & BEYOND</span> BLUEPRINT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-10">
              Painting Made Simple and Stress-Free
            </h2>

            <div className="relative pl-8">
              {/* Vertical connector line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-primary/30" />

              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.step} className="flex items-center gap-4 relative group cursor-pointer">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary group-hover:bg-accent flex items-center justify-center z-10 -ml-8 transition-colors duration-200">
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-200">
                      {s.rendered}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img
              src={blueprintImage}
              alt="Arclight Painting consultation with homeowner"
              className="rounded-xl shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;
