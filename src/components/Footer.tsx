import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-black tracking-widest">ARCLIGHT</span>
              <span className="text-xs tracking-[0.35em] text-accent font-semibold block -mt-1">
                PAINTING
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Professional house painting services in Bothell, WA and the greater Seattle
              area. Real People. Real Purpose. Exceptional Results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Cabinet Refinishing</li>
              <li>Drywall Repair</li>
              <li>Pressure Washing</li>
              <li>Commercial Painting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Values</li>
              <li>Pricing</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                (425) 999-7829
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                info@arclightpainting.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                Bothell, WA 98011
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 mt-10 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Arclight Painting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
