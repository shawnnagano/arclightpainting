import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquareQuote, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import serviceAreasMap from "@/assets/service-areas-map-bothell-wa.webp";
import sbaVeteranOwned from "@/assets/sba-veteran-owned-business-badge.webp";
import arclightLogo from "@/assets/arclight-logo.png";
import { serviceAreas } from "@/data/serviceAreas";

const badges = [
  {
    src: "/images/bbb-accredited-business-badge.webp",
    alt: "Better Business Bureau Accredited",
  },
  {
    src: "/images/pca-painting-contractors-association-logo.webp",
    alt: "PCA Member",
  },
  {
    src: "/images/bothell-kenmore-chamber-of-commerce-logo.webp",
    alt: "Bothell Kenmore Chamber",
  },
  {
    src: "/images/omwbe-certified-business-badge.webp",
    alt: "OMWBE Certified",
  },
  {
    src: sbaVeteranOwned,
    alt: "SBA Veteran-Owned Certified",
  },
];

const socials = [
  { href: "https://maps.app.goo.gl/Q3E8cyNn3tbnnqkC9", label: "Google Business Profile", icon: MapPin },
  { href: "https://www.facebook.com/arclightpainting/", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/arclightpainting/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/arclightpainting/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.yelp.com/biz/arclight-painting-bothell", label: "Yelp", icon: Star },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      {/* Service Areas Map */}
      <div className="relative overflow-hidden">
        <img
          src={serviceAreasMap}
          alt="Arclight Painting Service Areas Map"
          className="w-full h-48 md:h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Service Areas
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              Bothell & Surrounding Areas
            </p>
          </div>
        </div>
      </div>

      {/* Service Areas Links */}
      <div className="container mx-auto px-4 py-4 border-b border-border">
        <p className="text-center text-sm opacity-70 leading-relaxed">
          {serviceAreas.map((area, i) => (
            <span key={area.slug}>
              <Link to={`/${area.slug}`} className="hover:text-accent transition-colors">
                {area.name}
              </Link>
              {i < serviceAreas.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={arclightLogo}
              alt="Arclight Painting"
              className="h-12 mb-4"
              loading="lazy"
            />
            <p className="text-sm opacity-70 leading-relaxed mb-3">
              Professional house painting services in Bothell, WA and surrounding areas.
            </p>
            <p className="text-sm font-bold leading-relaxed">
              <span className="text-accent">Real</span> People. <span className="text-accent">Real</span> Purpose. Exceptional <span className="text-accent">Results.</span>
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/60 text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/services/interior-painting" className="hover:text-accent transition-colors">Interior Painting</Link></li>
              <li><Link to="/services/exterior-painting" className="hover:text-accent transition-colors">Exterior Painting</Link></li>
              <li><Link to="/services/cabinet-refinishing" className="hover:text-accent transition-colors">Cabinet Refinishing</Link></li>
              <li><Link to="/services/drywall-repairs" className="hover:text-accent transition-colors">Drywall Repair</Link></li>
              <li><Link to="/services/popcorn-ceiling-removal" className="hover:text-accent transition-colors">Popcorn Ceiling Removal</Link></li>
              <li><Link to="/services/pressure-washing" className="hover:text-accent transition-colors">Pressure Washing</Link></li>
              <li><Link to="/services/commercial-painting" className="hover:text-accent transition-colors">Commercial Painting</Link></li>
              <li><Link to="/services/painter-for-a-day" className="hover:text-accent transition-colors">Painter for a Day</Link></li>
              <li><Link to="/services/color-consultation" className="hover:text-accent transition-colors">Color Consultation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-accent">About</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/mission" className="hover:text-accent transition-colors">Our Mission</Link></li>
              <li><Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/join-our-team" className="hover:text-accent transition-colors">Join Our Team</Link></li>
              
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
                <MessageSquareQuote className="h-4 w-4 text-accent" />
                <Link to="/schedule" className="hover:text-accent transition-colors">Get A Quote</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {badges.map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                className="h-15 md:h-20 object-contain rounded p-1"
                loading="lazy"
              />
            ))}
          </div>
          <p className="text-center text-sm opacity-70 mt-4">
            BBB A+ Rating | PCA Legacy Member | Bothell-Kenmore Chamber Member | WA-Certified Minority Business | SBA-Certified Veteran Owned
          </p>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Arclight Painting. All rights reserved. · <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
