import { motion } from "framer-motion";
import commercialLobby from "@/assets/commercial-lobby.png";
import exteriorStaining from "@/assets/exterior-staining-kenmore.jpg";
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

// PFAD images
import pfadExteriorStaining from "@/assets/pfad-exterior-staining-work.jpg";
import pfadCrewLadders from "@/assets/pfad-exterior-crew-ladders.jpg";
import pfadInteriorCeiling from "@/assets/pfad-interior-ceiling-painting.jpg";
import pfadHighCeiling from "@/assets/pfad-high-ceiling-scaffolding.jpg";
import pfadTeam from "@/assets/pfad-team-thumbs-up.jpg";
import pfadProgress from "@/assets/pfad-interior-painting-progress.jpg";

// Cabinet stock images
import cabinetStock1 from "@/assets/cabinet-white-kitchen-stock-1.jpg";
import cabinetStock2 from "@/assets/cabinet-white-kitchen-stock-2.jpg";
import cabinetStock3 from "@/assets/cabinet-white-kitchen-stock-3.jpg";

// Drywall images
import drywallLivingRoom from "@/assets/drywall-living-room-prep.jpg";
import drywallHallway from "@/assets/drywall-hallway-prep.jpg";
import drywallMudding from "@/assets/drywall-room-mudding.jpg";
import drywallBathroom from "@/assets/drywall-bathroom-prep.jpg";
import drywallAccentWall from "@/assets/drywall-accent-wall-painting.jpg";

interface GalleryImage {
  src: string;
  alt: string;
}

const defaultImages: GalleryImage[] = [
  { src: exteriorHero, alt: "Freshly painted house exterior" },
  { src: cabinetAfter, alt: "Freshly refinished kitchen cabinets with white finish" },
  { src: "/images/wp-content/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Bright interior after professional painting" },
  { src: exteriorStaining, alt: "Exterior wood staining project in Kenmore" },
  { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "Interior room with newly painted walls" },
  { src: commercialLobby, alt: "Commercial lobby with blue accent wall and wood ceiling after painting" },
];

const serviceImages: Record<string, GalleryImage[]> = {
  "Interior Painting": [
    { src: "/images/wp-content/2025/09/arclight-interior-painting.png", alt: "Professional interior painting with clean wall finish" },
    { src: "/images/wp-content/2025/08/best-interior-painting-2-1024x683.png", alt: "Beautiful interior room after professional painting" },
    { src: "/images/wp-content/2025/08/best-interior-painting-3-1024x683.png", alt: "Freshly painted interior walls with modern decor" },
    { src: "/images/wp-content/2025/08/Image-5-1-1024x680.jpg", alt: "Interior room with newly painted walls and natural light" },
    { src: "/images/wp-content/2026/01/how-to-paint-a-room-1024x576.jpg", alt: "Interior room painting project in progress" },
    { src: "/images/wp-content/2025/08/best-interior-painting-1.png", alt: "Clean interior paint finish on living room walls" },
  ],
  "Exterior Painting": [
    { src: exteriorHero, alt: "Completed exterior house painting project" },
    { src: "/images/wp-content/2025/02/exterior-painting-service-company-near-me-in-bothell-wa-071.jpg", alt: "Exterior painting service in Bothell WA" },
    { src: "/images/wp-content/2025/06/Exterior-House-Painting-Bothell-WA.jpg", alt: "Exterior house painting in Bothell WA" },
    { src: "/images/wp-content/2025/06/Exterior-House-Painting-Brown-and-Tan-Arclight-Painting-Bothell-WA.png", alt: "Brown and tan exterior house painting by Arclight" },
    { src: "/images/wp-content/2025/06/Exterior-Painting-Blue-House-Arclight-Painting-Bothell-WA.png", alt: "Blue exterior house painting by Arclight Painting" },
    { src: exteriorStaining, alt: "Exterior wood staining project in Kenmore" },
  ],
  "Cabinet Refinishing": [
    { src: "/images/wp-content/2025/06/Kitchen-Cabinet-Painting-Arclight-Painting-Bothell-WA.png", alt: "Kitchen cabinet painting by Arclight Painting" },
    { src: cabinetAfter, alt: "Beautifully refinished white kitchen cabinets" },
    { src: "/images/wp-content/2025/08/Image-2-1.jpg", alt: "Cabinet refinishing project in progress" },
    { src: cabinetStock1, alt: "White painted kitchen cabinets with modern hardware" },
    { src: cabinetStock2, alt: "Professionally refinished kitchen with white cabinetry" },
    { src: cabinetStock3, alt: "Clean white cabinet finish in updated kitchen" },
  ],
  "Drywall Repair": [
    { src: drywallLivingRoom, alt: "Living room drywall repair and prep with crown molding" },
    { src: drywallSanding, alt: "Sanding drywall smooth after repair" },
    { src: drywallHallway, alt: "Hallway prepped and protected for drywall repair" },
    { src: drywallMudding, alt: "Drywall mudding and taping in commercial space" },
    { src: drywallBathroom, alt: "Bathroom walls prepped for drywall finishing" },
    { src: drywallAccentWall, alt: "Accent wall painting over repaired drywall surface" },
  ],
  "Pressure Washing": [
    { src: "/images/wp-content/2023/11/pressure-washing-company-concrete-cleaning-1.jpg", alt: "Pressure washed concrete driveway with clean results" },
    { src: "/images/wp-content/2023/11/deck-and-fence-cleaning-0-1.jpg", alt: "Deck after professional pressure washing" },
    { src: "/images/wp-content/2023/11/Pressure-Washing-Company-10-1.jpg", alt: "Walkway after pressure washing service" },
    { src: "/images/wp-content/2023/11/Pressure-Washing-Company-1.jpg", alt: "Home siding after pressure washing" },
    { src: pressureWashingHero, alt: "Exterior surface being cleaned with pressure washing equipment" },
    { src: "/images/wp-content/2023/11/vinyl-siding-cleaning-house-washing-1.jpg", alt: "Vinyl siding cleaning and house washing" },
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
    { src: pfadExteriorStaining, alt: "Arclight painter working on exterior staining detail" },
    { src: pfadCrewLadders, alt: "Arclight painting crew on ladders working on exterior" },
    { src: pfadInteriorCeiling, alt: "Painter working on interior ceiling painting project" },
    { src: pfadHighCeiling, alt: "Painter on scaffolding painting high ceilings in foyer" },
    { src: pfadTeam, alt: "Arclight Painting team giving thumbs up after completing project" },
    { src: pfadProgress, alt: "Interior painting in progress with protective coverings" },
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
