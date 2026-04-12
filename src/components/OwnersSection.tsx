import { Link } from "react-router-dom";

interface OwnersSectionProps {
  cityName?: string;
}

const OwnersSection = ({ cityName }: OwnersSectionProps) => {
  const cityMention = cityName && cityName !== "Bothell"
    ? ` We're proud to serve homeowners in ${cityName} and the surrounding area.`
    : "";

  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/images/painting-estimate-consultation-illustration.webp"
              alt="Owners of Arclight Painting"
              className="max-w-[300px] w-full"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="text-accent">Owners</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              As a veteran-owned, values-driven company based in Bothell, WA, we built Arclight Painting to serve our community through honesty, craftsmanship, and above-and-beyond care. Every project reflects our commitment to doing the job right and treating our customers like friends, not transactions.{cityMention}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnersSection;
