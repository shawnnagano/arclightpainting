import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 opacity-15"
      style={{
        backgroundImage:
          "url('https://arclightpainting.com/wp-content/uploads/2025/07/hiyuse.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default HeroBackground;
