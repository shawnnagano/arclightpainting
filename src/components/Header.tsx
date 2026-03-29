import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  {
    label: "ABOUT",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Our Values", href: "/about" },
    ],
  },
  { label: "PRICING", href: "/pricing" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "SCHEDULE", href: "/schedule" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://arclightpainting.com/wp-content/uploads/2020/09/ARCLIGHT-LOGO-long-version.png"
            alt="Arclight Painting"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className="flex items-center gap-1 text-sm font-semibold tracking-wide hover:text-accent transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-primary border border-border/20 rounded-md shadow-xl py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm hover:bg-accent/20 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/schedule">
          <Button className="hidden lg:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6">
            Get A Fast Quote
          </Button>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-border/20 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-6 py-3 text-sm font-semibold hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link to="/schedule">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                Get A Fast Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
