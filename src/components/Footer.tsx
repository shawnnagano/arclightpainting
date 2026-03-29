import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import serviceAreasMap from "@/assets/service-areas-map.png";

const badges = [
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/09/188-1884205_better-business-bureau-accredited-bussiness-better-business-bureau.jpg",
    alt: "Better Business Bureau Accredited",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/09/PCA-Logo-CMYK.webp",
    alt: "PCA Member",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/09/Bothell-Kenmore-Chamber-logo-B-CMYK-600-e1532311661719.jpg",
    alt: "Bothell Kenmore Chamber",
  },
  {
    src: "https://arclightpainting.com/wp-content/uploads/2025/09/OMWBE-Cerfitied-Badge-Final-01.png",
    alt: "OMWBE Certified",
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      {/* Service Areas Map */}
      <Link to="/service-areas" className="block group">
        <div className="relative overflow-hidden">
          <img
            src={serviceAreasMap}
            alt="Arclight Painting Service Areas Map"
            className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Our Service Areas
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Serving Bothell, Kirkland, Redmond, Bellevue & more →
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Trust badges */}
      <div className="container mx-auto px-4 py-8 border-b border-primary-foreground/20">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge) => (
            <img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              className="h-12 md:h-16 object-contain rounded bg-primary-foreground/90 p-1"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="https://arclightpainting.com/wp-content/uploads/2020/09/ARCLIGHT-LOGO-long-version.png"
              alt="Arclight Painting"
              className="h-12 mb-4"
            />
            <p className="text-sm opacity-70 leading-relaxed">
              Professional house painting services in Bothell, WA and the greater Seattle area. Real People. Real Purpose. Exceptional Results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/services/interior-painting" className="hover:text-accent transition-colors">Interior Painting</Link></li>
              <li><Link to="/services/exterior-painting" className="hover:text-accent transition-colors">Exterior Painting</Link></li>
              <li><Link to="/services/cabinet-refinishing" className="hover:text-accent transition-colors">Cabinet Refinishing</Link></li>
              <li><Link to="/services/drywall-repair" className="hover:text-accent transition-colors">Drywall Repair</Link></li>
              <li><Link to="/services/pressure-washing" className="hover:text-accent transition-colors">Pressure Washing</Link></li>
              <li><Link to="/services/commercial-painting" className="hover:text-accent transition-colors">Commercial Painting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link to="/service-areas" className="hover:text-accent transition-colors">Service Areas</Link></li>
              <li><Link to="/schedule" className="hover:text-accent transition-colors">Get A Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:4257571199" className="hover:text-accent transition-colors">(425) 757-1199</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@arclightpainting.com" className="hover:text-accent transition-colors">info@arclightpainting.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                Bothell, WA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Arclight Painting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
