import { motion } from "framer-motion";
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

interface GalleryImage {
  src: string;
  alt: string;
}

const defaultImages: GalleryImage[] = [
  { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-House-Painting-Bothell-WA.jpg", alt: "Suburban home with gray and beige siding after exterior painting" },
  { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Kitchen-Cabinet-Painting-Arclight-Painting-Bothell-WA.png", alt: "Bright kitchen with white painted cabinets and granite countertops" },
  { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-Wood-Staining-Arclight-Painting-Bothell-WA.png", alt: "Rustic log cabin with freshly stained wood exterior" },
  { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-Painting-Blue-House-Arclight-Painting-Bothell-WA.png", alt: "Two-story house painted deep blue with white trim" },
  { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exteiror-House-Painting-Green-and-Tan-Arclight-Painting-Bothell-WA.png", alt: "Two-story house with sage green siding and dark trim" },
  { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-House-Painting-Brown-and-Tan-Arclight-Painting-Bothell-WA.png", alt: "Two-story house with brown siding and stone accents" },
];

const serviceImages: Record<string, GalleryImage[]> = {
  "Interior Painting": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Beautiful interior room with freshly painted walls" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Bright kitchen interior with white cabinets after painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Kitchen-Cabinet-Painting-Arclight-Painting-Bothell-WA.png", alt: "Kitchen interior with freshly painted white cabinets" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Shawn-Arclight-Painting-Bothell-WA.png", alt: "Arclight painter working on interior trim details" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg", alt: "Interior cabinet and wall painting project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg", alt: "Smooth interior walls after professional painting" },
  ],
  "Exterior Painting": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-House-Painting-Bothell-WA.jpg", alt: "Suburban home with gray and beige siding after exterior painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-Painting-Blue-House-Arclight-Painting-Bothell-WA.png", alt: "Two-story house painted deep blue with crisp white trim" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exteiror-House-Painting-Green-and-Tan-Arclight-Painting-Bothell-WA.png", alt: "Two-story house with sage green siding and dark trim" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-House-Painting-Brown-and-Tan-Arclight-Painting-Bothell-WA.png", alt: "Two-story house with brown siding and stone accents" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Exterior-Wood-Staining-Arclight-Painting-Bothell-WA.png", alt: "Rustic log cabin with freshly stained wood exterior" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-3-1-683x1024.jpg", alt: "Home exterior with professional paint finish" },
  ],
  "Cabinet Refinishing": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Kitchen-Cabinet-Painting-Arclight-Painting-Bothell-WA.png", alt: "Bright kitchen with white refinished cabinets and granite countertops" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg", alt: "Refinished kitchen cabinets with modern finish" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Kitchen with freshly refinished white cabinets" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Kitchen cabinet refinishing project with smooth finish" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Shawn-Arclight-Painting-Bothell-WA.png", alt: "Arclight painter applying cabinet finish" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg", alt: "Completed cabinet refinishing with flawless results" },
  ],
  "Drywall Repair": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg", alt: "Seamless drywall repair with smooth finish" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Interior walls after drywall repair and painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Shawn-Arclight-Painting-Bothell-WA.png", alt: "Arclight professional performing wall repairs" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Repaired and painted interior walls" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg", alt: "Wall repair and repaint with texture matching" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Kitchen-Cabinet-Painting-Arclight-Painting-Bothell-WA.png", alt: "Kitchen walls after drywall repair and fresh paint" },
  ],
  "Pressure Washing": [
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/pressure-washing-company-concrete-cleaning-1.jpg", alt: "Pressure washed concrete driveway — clean results" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/deck-and-fence-cleaning-0-1.jpg", alt: "Deck after professional pressure washing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/Pressure-Washing-Company-10-1.jpg", alt: "Walkway after pressure washing service" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/Pressure-Washing-Company-1.jpg", alt: "Home siding after pressure washing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/vinyl-siding-cleaning-house-washing-1.jpg", alt: "Vinyl siding cleaned with pressure washing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/house-washing-1.jpg", alt: "House exterior after professional washing" },
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
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Shawn-Arclight-Painting-Bothell-WA.png", alt: "Professional painter working on trim and details" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "One-day accent wall painting project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg", alt: "Quick cabinet touch-up from one-day service" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg", alt: "One-day painting touch-up results" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/06/Kitchen-Cabinet-Painting-Arclight-Painting-Bothell-WA.png", alt: "Kitchen refresh from Painter-for-a-Day service" },
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
