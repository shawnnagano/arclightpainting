import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blueprintImage from "@/assets/painting-consultation-meeting-photo.webp";

export interface BlueprintStep {
  title: string;
  description?: string;
  link?: string | null;
  /** Whether this is a branded/core step (styled with primary bg) vs service-specific (accent bg) */
  branded?: boolean;
}

const defaultSteps: BlueprintStep[] = [
  { title: "TrueQuote™ Pricing", link: "/pricing", branded: true },
  { title: "PowerFlex™ Scheduling", branded: true },
  { title: "ColorConfidence™ Consultation", link: "/services/color-consultation", branded: true },
  { title: "JobTrack™ Project Management", branded: true },
  { title: "PCA™ Quality Inspection", branded: true },
];

interface BlueprintSectionProps {
  serviceName?: string;
  showImage?: boolean;
  /** Full ordered list of steps. If not provided, uses the default 5 branded steps. */
  steps?: BlueprintStep[];
}

const BlueprintSection = ({ serviceName, showImage = false, steps }: BlueprintSectionProps) => {
  const isServicePage = !!steps && steps.length > 0;
  const displaySteps = isServicePage ? steps : defaultSteps;
  const headingText = serviceName
    ? `${serviceName} Made Simple and Stress-Free`
    : "Painting Made Simple and Stress-Free";

  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <hr className="border-border mb-12" />
        <div className={showImage ? "flex flex-col lg:flex-row items-center gap-12" : ""}>
          <div className={showImage ? "lg:w-1/2" : "max-w-3xl mx-auto"}>
            {isServicePage ? (
              <>
                <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2">
                  {headingText}
                </h3>
                <p className="text-lg md:text-xl font-bold tracking-widest uppercase mb-10">
                  THE <span className="text-accent">ABOVE & BEYOND</span> BLUEPRINT
                </p>
              </>
            ) : (
              <>
                <p className="text-lg md:text-xl font-bold tracking-widest uppercase mb-2">
                  THE <span className="text-accent">ABOVE & BEYOND</span> BLUEPRINT
                </p>
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-10">
                  {headingText}
                </h2>
              </>
            )}

            <div className="relative pl-8">
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-primary/30" />

              <div className="space-y-6">
                {displaySteps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 relative group"
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center z-10 -ml-8 transition-colors duration-200 ${
                      s.branded !== false ? "bg-primary group-hover:bg-accent" : "bg-accent"
                    }`}>
                      <span className={`text-sm font-bold ${
                        s.branded !== false ? "text-primary-foreground" : "text-accent-foreground"
                      }`}>{i + 1}</span>
                    </div>

                    <div>
                      {s.link ? (
                        <Link to={s.link} className="text-lg md:text-xl font-bold hover:text-accent transition-colors duration-200">
                          {s.title}
                        </Link>
                      ) : (
                        <span className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-200">
                          {s.title}
                        </span>
                      )}
                      {s.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                          {s.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {showImage && (
            <div className="lg:w-1/2">
              <img
                src={blueprintImage}
                alt="Arclight Painting consultation with homeowner"
                className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;
