import { motion } from "framer-motion";
import commercialLobby from "@/assets/commercial-lobby-accent-wall-painting.webp";
import exteriorStaining from "@/assets/exterior-wood-staining-kenmore-wa.webp";
import cabinetAfter from "@/assets/cabinet-refinishing-white-kitchen-after.webp";
import painterForADayHero from "@/assets/one-day-painting-service-bothell-wa.webp";
import popcornCeiling1 from "@/assets/popcorn-ceiling-removal-contained-room.webp";
import popcornCeiling2 from "@/assets/popcorn-ceiling-smooth-finish-rolling.webp";
import popcornCeiling3 from "@/assets/popcorn-ceiling-removal-spraying.webp";
import drywallSanding from "@/assets/drywall-sanding-smooth-finish.webp";
import popcornCeilingBothell from "@/assets/popcorn-ceiling-removal-project-bothell.webp";
import popcornCeilingHero from "@/assets/popcorn-ceiling-removal-bothell-wa.webp";
import commercialHero from "@/assets/commercial-painting-service-bothell-wa.webp";
import commercial1 from "@/assets/commercial-restaurant-interior-painting.webp";
import commercial2 from "@/assets/commercial-building-exterior-painting.webp";
import commercial3 from "@/assets/commercial-building-siding-painting.webp";
import commercial4 from "@/assets/commercial-hotel-lobby-painting.webp";
import commercial5 from "@/assets/commercial-office-accent-wall-painting.webp";
import exteriorHero from "@/assets/exterior-house-painting-bothell-wa.webp";
import pressureWashingHero from "@/assets/pressure-washing-service-bothell-wa.webp";

// Exterior project images
import exteriorPainterLadder from "@/assets/exterior-painter-on-ladder-bothell-wa.webp";
import exteriorDarkCraftsman from "@/assets/exterior-painting-dark-craftsman-home-after.webp";
import exteriorSidingAfter from "@/assets/exterior-siding-painting-completed.webp";

import exteriorDeckAfter from "@/assets/exterior-deck-painting-railing-after.webp";

// Interior project images
import interiorEntryway from "@/assets/interior-painting-entryway-staircase-bothell.webp";
import interiorLivingRoom from "@/assets/interior-painting-living-room-brown-walls.webp";
import interiorOpenConcept from "@/assets/interior-painting-open-concept-columns-trim.webp";

// PFAD images
import pfadExteriorStaining from "@/assets/painter-for-a-day-exterior-staining.webp";
import pfadCrewLadders from "@/assets/painter-for-a-day-crew-ladders-exterior.webp";
import pfadInteriorCeiling from "@/assets/painter-for-a-day-ceiling-painting.webp";
import pfadHighCeiling from "@/assets/painter-for-a-day-high-ceiling-scaffolding.webp";
import pfadTeam from "@/assets/painter-for-a-day-team-completed-project.webp";
import pfadProgress from "@/assets/painter-for-a-day-interior-progress.webp";

// Cabinet stock images
import cabinetStock1 from "@/assets/white-kitchen-cabinets-modern-hardware.webp";
import cabinetStock2 from "@/assets/professional-kitchen-cabinet-refinishing.webp";
import cabinetStock3 from "@/assets/white-cabinet-finish-updated-kitchen.webp";

// Cabinet project images
import cabinetBeforeAfter from "@/assets/cabinet-refinishing-before-after-transformation.webp";
import cabinetWhiteVanity from "@/assets/cabinet-refinishing-white-bathroom-vanity.webp";
import cabinetAntiqueVanity from "@/assets/cabinet-refinishing-antique-white-vanity.webp";

// Drywall images
import drywallLivingRoom from "@/assets/drywall-repair-living-room-prep.webp";
import drywallHallway from "@/assets/drywall-repair-hallway-prep-protection.webp";
import drywallMudding from "@/assets/drywall-mudding-taping-repair.webp";
import drywallBathroom from "@/assets/drywall-repair-bathroom-walls.webp";
import drywallAccentWall from "@/assets/drywall-accent-wall-painting-finish.webp";

interface GalleryImage {
  src: string;
  alt: string;
}

const defaultImages: GalleryImage[] = [
  { src: exteriorHero, alt: "Freshly painted house exterior" },
  { src: cabinetAfter, alt: "Freshly refinished kitchen cabinets with white finish" },
  { src: interiorLivingRoom, alt: "Elegant living room with warm brown walls and white wainscoting" },
  { src: exteriorStaining, alt: "Exterior wood staining project in Kenmore" },
  { src: "/images/interior-room-painting-natural-light-bothell.webp", alt: "Interior room with newly painted walls" },
  { src: commercialLobby, alt: "Commercial lobby with blue accent wall and wood ceiling after painting" },
];

const serviceImages: Record<string, GalleryImage[]> = {
  "Interior Painting": [
    { src: pfadInteriorCeiling, alt: "Painter rolling a smooth interior ceiling finish" },
    { src: pfadHighCeiling, alt: "Interior foyer with high-ceiling painting in progress" },
    { src: interiorEntryway, alt: "Freshly painted entryway and staircase with dark railing" },
    { src: "/images/interior-room-painting-natural-light-bothell.webp", alt: "Interior room with newly painted walls and natural light" },
    { src: interiorLivingRoom, alt: "Elegant living room with warm brown walls and white wainscoting" },
    { src: interiorOpenConcept, alt: "Open concept living space with painted columns and crown molding" },
  ],
  "Exterior Painting": [
    { src: exteriorHero, alt: "Completed exterior house painting project" },
    { src: exteriorPainterLadder, alt: "Arclight painter on ladder painting dark exterior trim in Bothell" },
    { src: exteriorDarkCraftsman, alt: "Dark craftsman home exterior after professional painting" },
    { src: exteriorSidingAfter, alt: "Light blue siding and white trim exterior painting completed" },
    { src: exteriorStaining, alt: "Exterior wood staining project in Kenmore" },
    { src: exteriorDeckAfter, alt: "Freshly painted white deck and railing after exterior painting" },
  ],
  "Cabinet Refinishing": [
    { src: cabinetBeforeAfter, alt: "Kitchen cabinet refinishing before and after transformation" },
    { src: cabinetAfter, alt: "Beautifully refinished white kitchen cabinets" },
    { src: cabinetWhiteVanity, alt: "White shaker bathroom vanity with marble countertop after refinishing" },
    { src: cabinetAntiqueVanity, alt: "Antique white shaker vanity cabinet in rustic bathroom" },
    { src: "/images/cabinet-refinishing-project-bothell.webp", alt: "Cabinet refinishing project in progress" },
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
    { src: "/images/pressure-washing-concrete-driveway-bothell.webp", alt: "Pressure washed concrete driveway with clean results" },
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
