import { motion } from "framer-motion";
import commercialLobby from "@/assets/commercial-lobby.png";
import cabinetAfter from "@/assets/cabinet-after.jpg";
import painterForADayHero from "@/assets/painter-for-a-day-hero.jpg";
import popcornCeiling1 from "@/assets/popcorn-ceiling-removal-1.jpg";
import popcornCeiling2 from "@/assets/popcorn-ceiling-removal-2.jpg";
import popcornCeiling3 from "@/assets/popcorn-ceiling-removal-3.webp";
import drywallSanding from "@/assets/drywall-sanding.jpg";
import popcornCeilingBothell from "@/assets/popcorn-ceiling-removal-bothell.jpg";
import popcornCeilingHero from "@/assets/popcorn-ceiling-removal-hero.webp";
import commercialHero from "@/assets/commercial-hero.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import commercial2 from "@/assets/commercial-2.jpg";
import commercial3 from "@/assets/commercial-3.jpg";
import commercial4 from "@/assets/commercial-4.jpg";
import commercial5 from "@/assets/commercial-5.jpg";
import exteriorHero from "@/assets/exterior-hero.png";

import pressureWashingHero from "@/assets/pressure-washing-hero.webp";

interface GalleryImage {
  src: string;
  alt: string;
}

const defaultImages: GalleryImage[] = [
  { src: exteriorHero, alt: "Freshly painted house exterior" },
  { src: cabinetAfter, alt: "Freshly refinished kitchen cabinets with white finish" },
  { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Bright interior after professional painting" },
  { src: "/images/wp-content/2025/08/Image-3-1-683x1024.jpg", alt: "Exterior painting detail on a home" },
  { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "Interior room with newly painted walls" },
  { src: commercialLobby, alt: "Commercial lobby with blue accent wall and wood ceiling after painting" },
];

const serviceImages: Record<string, GalleryImage[]> = {
  "Interior Painting": [
    { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "Interior room with newly painted walls" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Interior painting project in progress" },
    { src: "/images/wp-content/2025/08/Image-2-1.jpg", alt: "Kitchen with freshly painted cabinets" },
    { src: painterForADayHero, alt: "Painter working on interior trim details" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Bright interior space after professional painting" },
    { src: "/images/wp-content/2025/08/Image-3-1-683x1024.jpg", alt: "Interior walls with clean professional finish" },
  ],
  "Exterior Painting": [
    { src: exteriorHero, alt: "Completed exterior house painting project" },
    { src: "/images/wp-content/2025/08/Image-3-1-683x1024.jpg", alt: "Fresh exterior paint finish on a home" },
    { src: commercial2, alt: "Building exterior with fresh paint and clean lines" },
    { src: commercial3, alt: "Exterior siding painting project in progress" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Residential painting project completed" },
    { src: painterForADayHero, alt: "Painter completing detailed exterior work" },
  ],
  "Cabinet Refinishing": [
    { src: "/images/wp-content/2025/08/Image-2-1.jpg", alt: "Freshly refinished kitchen cabinets" },
    { src: cabinetAfter, alt: "Beautifully refinished white kitchen cabinets" },
    { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "Kitchen refresh with updated painted surfaces" },
    { src: painterForADayHero, alt: "Professional applying a smooth finish to cabinetry" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Completed residential refinishing project" },
    { src: "/images/wp-content/2025/08/Image-3-1-683x1024.jpg", alt: "Clean painted finish with crisp edges" },
  ],
  "Drywall Repair": [
    { src: "/images/wp-content/2025/08/Image-4-1-1024x683.jpg", alt: "Seamless drywall repair with smooth finish" },
    { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "Interior walls after drywall repair and painting" },
    { src: painterForADayHero, alt: "Professional performing prep and repair work" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Repaired wall ready for paint" },
    { src: "/images/wp-content/2025/08/Image-2-1.jpg", alt: "Finished repair work with clean paint coverage" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Completed interior wall repair and paint project" },
  ],
  "Pressure Washing": [
    { src: "/images/wp-content/2023/11/pressure-washing-company-concrete-cleaning-1.jpg", alt: "Pressure washed concrete driveway with clean results" },
    { src: "/images/wp-content/2023/11/deck-and-fence-cleaning-0-1.jpg", alt: "Deck after professional pressure washing" },
    { src: "/images/wp-content/2023/11/Pressure-Washing-Company-10-1.jpg", alt: "Walkway after pressure washing service" },
    { src: "/images/wp-content/2023/11/Pressure-Washing-Company-1.jpg", alt: "Home siding after pressure washing" },
    { src: pressureWashingHero, alt: "Exterior surface being cleaned with pressure washing equipment" },
    { src: "/images/wp-content/2023/11/Pressure-Washing-Company-10-1.jpg", alt: "Freshly cleaned outdoor surface after washing" },
  ],
  "Commercial Painting": [
    { src: commercialHero, alt: "Commercial steel structure painting from scissor lift" },
    { src: commercial1, alt: "Restaurant interior with freshly painted walls and art display" },
    { src: commercial2, alt: "Commercial building exterior with Arclight Painting signage" },
    { src: commercial3, alt: "Commercial building exterior siding painting in progress" },
    { src: commercial4, alt: "Hotel lobby interior after professional commercial painting" },
    { src: commercial5, alt: "Corporate office lounge with accent wall painting" },
  ],
  "One-Day Painting Service": [
    { src: painterForADayHero, alt: "Arclight Painter-for-a-Day professional at work" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Painter working through a one-day project" },
    { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "One-day accent wall painting project" },
    { src: "/images/wp-content/2025/08/Image-2-1.jpg", alt: "Quick cabinet touch-up from one-day service" },
    { src: "/images/wp-content/2025/08/Image-3-1-683x1024.jpg", alt: "One-day painting touch-up results" },
    { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Completed residential refresh from a one-day visit" },
  ],
  "Popcorn Ceiling Removal": [
    { src: popcornCeilingHero, alt: "Popcorn ceiling texture being scraped off" },
    { src: popcornCeiling1, alt: "Workers removing popcorn ceiling in contained room" },
    { src: popcornCeiling2, alt: "Painter rolling smooth finish on ceiling after removal" },
    { src: popcornCeiling3, alt: "Professional spraying popcorn ceiling for removal" },
    { src: drywallSanding, alt: "Sanding ceiling smooth after popcorn removal" },
    { src: popcornCeilingBothell, alt: "Popcorn ceiling removal project in Bothell" },
  ],
};

interface GallerySectionProps {
  cityName?: string;
  serviceName?: string;
}

const GallerySection = ({ cityName = "Bothell", serviceName }: GallerySectionProps) => {
  const images = (serviceName && serviceImages[serviceName]) ? serviceImages[serviceName] : defaultImages;

  const subtitle = serviceName
    ? `Browse some of our recent ${serviceName.toLowerCase()} projects.`
    : `Browse some of our recent painting projects in the ${cityName} area.`;

  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <hr className="border-border mb-12" />
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Results That <span className="text-accent">Speak For Themselves</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
