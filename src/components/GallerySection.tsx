import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

const defaultImages: GalleryImage[] = [
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg",
    alt: "Bright kitchen with white cabinets and granite countertops",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg",
    alt: "Classic white clapboard house with black shutters",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg",
    alt: "Modern two-story home with white siding and black trim",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg",
    alt: "Light blue two-story house with brick chimney",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-078.jpg",
    alt: "Multi-story log cabin home with green trim",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2023/11/House-Painting-Bothell-WA-Blog-Post.jpg",
    alt: "Two-story home with sage green siding",
  },
];

const serviceImages: Record<string, GalleryImage[]> = {
  "Interior Painting": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Bright kitchen with white cabinets after interior painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Beautiful interior wall painting in living room" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg", alt: "Freshly painted interior bedroom walls" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "Interior painting with clean trim work" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Modern interior repaint with accent colors" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/House-Painting-Bothell-WA-Blog-Post.jpg", alt: "Interior painting project completed" },
  ],
  "Exterior Painting": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "Classic white clapboard house exterior painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Modern two-story home exterior paint job" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg", alt: "Light blue house exterior painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-078.jpg", alt: "Log cabin home exterior staining and painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/House-Painting-Bothell-WA-Blog-Post.jpg", alt: "Sage green exterior paint project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-3-1-683x1024.jpg", alt: "Exterior painting with trim detail" },
  ],
  "Cabinet Refinishing": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "White kitchen cabinets after refinishing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-2-1.jpg", alt: "Refinished kitchen cabinets with modern finish" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Cabinet refinishing with granite countertops" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Kitchen cabinet painting project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "Cabinet refinishing before and after" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Refinished bathroom vanity cabinets" },
  ],
  "Drywall Repair": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-4-1-1024x683.jpg", alt: "Seamless drywall repair and painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Drywall patch with texture matching" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Repaired and painted walls" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "Drywall repair with smooth finish" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Wall repair and repaint project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg", alt: "Completed drywall and painting project" },
  ],
  "Pressure Washing": [
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/pressure-washing-company-concrete-cleaning-1.jpg", alt: "Pressure washed concrete driveway" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "Home exterior after pressure washing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Pressure washed siding and trim" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-078.jpg", alt: "Deck and siding pressure washing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/House-Painting-Bothell-WA-Blog-Post.jpg", alt: "Clean home exterior after pressure washing" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg", alt: "Pressure washed walkway and patio" },
  ],
  "Commercial Painting": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/911c859a-0306-4684-a98f-c4627a8148a0-1024x683.webp", alt: "Commercial office painting project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "Commercial building exterior painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Office interior commercial painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "Retail space commercial paint job" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg", alt: "Commercial property painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2023/11/House-Painting-Bothell-WA-Blog-Post.jpg", alt: "Commercial exterior painting project" },
  ],
  "One-Day Painting Service": [
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/Image-5-1-1024x680.jpg", alt: "One-day painting accent wall project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-074.jpg", alt: "Quick kitchen refresh painting" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg", alt: "One-day touch-up painting project" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-076.jpg", alt: "Door and trim painting in one day" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-077.jpg", alt: "Same-day painting service results" },
    { src: "https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-078.jpg", alt: "One-day exterior touch-up project" },
  ],
};

interface GallerySectionProps {
  cityName?: string;
  serviceName?: string;
}

const GallerySection = ({ cityName = "Bothell", serviceName }: GallerySectionProps) => {
  const images = (serviceName && serviceImages[serviceName]) ? serviceImages[serviceName] : defaultImages;

  const subtitle = serviceName
    ? `Browse some of our recent ${serviceName.toLowerCase()} projects in the Bothell area.`
    : `Browse some of our recent painting projects in the ${cityName} area.`;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
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
