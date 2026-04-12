import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blueprintImage from "@/assets/painting-consultation-meeting-photo.webp";

const brandedSteps = [
  { title: "TrueQuote™ Pricing", link: "/pricing" },
  { title: "PowerFlex™ Scheduling", link: null },
  { title: "ColorConfidence™ Consultation", link: "/services/color-consultation" },
  { title: "JobTrack™ Project Management", link: null },
  { title: "PCA™ Quality Inspection", link: null },
];

interface BlueprintSectionProps {
  serviceName?: string;
  /** Service-specific descriptions for each of the 5 branded steps */
  brandedDescriptions?: string[];
  /** Additional service-specific process steps shown after the branded 5 */
  additionalSteps?: { title: string; description: string }[];
}

const BlueprintSection = ({ serviceName, brandedDescriptions, additionalSteps }: BlueprintSectionProps) => {
  const isServicePage = !!brandedDescriptions && brandedDescriptions.length === 5;
  const headingText = serviceName
    ? `${serviceName} Made Simple and Stress-Free`
    : "Painting Made Simple and Stress-Free";

  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <hr className="border-border mb-12" />
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text content */}
          <div className="lg:w-1/2">
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
              {/* Vertical connector line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-primary/30" />

              <div className="space-y-6">
                {brandedSteps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 relative group"
                  >
                    {/* Numbered circle */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary group-hover:bg-accent flex items-center justify-center z-10 -ml-8 transition-colors duration-200">
                      <span className="text-sm font-bold text-primary-foreground">{i + 1}</span>
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
                      {isServicePage && brandedDescriptions[i] && (
                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                          {brandedDescriptions[i]}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Additional service-specific steps */}
                {additionalSteps && additionalSteps.map((step, i) => (
                  <motion.div
                    key={`extra-${i}`}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (5 + i) * 0.08 }}
                    className="flex items-start gap-4 relative group"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center z-10 -ml-8">
                      <span className="text-sm font-bold text-accent-foreground">{6 + i}</span>
                    </div>
                    <div>
                      <span className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-200">
                        {step.title}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img
              src={blueprintImage}
              alt="Arclight Painting consultation with homeowner"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;
