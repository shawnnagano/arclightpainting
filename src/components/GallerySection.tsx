import { motion } from "framer-motion";

const images = [
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

const GallerySection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          Results That Speak <span className="text-accent">For Themselves</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Browse some of our recent painting projects across Bothell and the greater
          Seattle area.
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
