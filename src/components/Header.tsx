import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const tickerServices = [
  "House Painting",
  "Exterior Painting",
  "Interior Painting",
  "Cabinet Refinishing",
  "Drywall Repairs",
  "Commercial Painting",
  "Painter for a Day",
  "Popcorn Ceiling Removal",
  "House Painting",
  "Exterior Painting",
  "Interior Painting",
  "Cabinet Refinishing",
  "Drywall Repairs",
  "Commercial Painting",
  "Painter for a Day",
  "Popcorn Ceiling Removal",
];

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "SERVICES",
    href: "",
    children: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
      { label: "Drywall Repair", href: "/services/drywall-repair" },
      { label: "Popcorn Ceiling Removal", href: "/services/popcorn-ceiling-removal" },
      { label: "Pressure Washing", href: "/services/pressure-washing" },
      { label: "Commercial Painting", href: "/services/commercial-painting" },
      { label: "Painter for a Day", href: "/services/painter-for-a-day" },
    ],
  },
  {
    label: "ABOUT",
    href: "",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Join Our Team", href: "/join-our-team" },
    ],
  },
  { label: "PRICING", href: "/pricing" },
  
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      {/* Main Header */}
      <header
        className={`bg-background text-foreground sticky top-0 z-50 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://arclightpainting.com/wp-content/uploads/2020/09/ARCLIGHT-LOGO-long-version.png"
              alt="Arclight Painting"
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <span
                    className="flex items-center gap-1 text-sm font-semibold tracking-wide text-foreground hover:text-accent transition-colors py-6 cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-sm font-semibold tracking-wide text-foreground hover:text-accent transition-colors py-6"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <div className="absolute top-full left-0 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-background border border-border rounded-md shadow-xl py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
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

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:14257571199"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-3 shadow-lg transition-transform hover:scale-110"
              aria-label="Call Arclight Painting"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Link to="/schedule">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-5 text-sm rounded-md shadow-lg">
                Get a TrueQuote →
              </Button>
            </Link>
          </div>

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
          <div className="lg:hidden bg-background border-t border-border pb-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <span className="block px-6 py-3 text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-6 py-3 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <div className="pl-10">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 pt-3">
              <Link to="/schedule" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  Get a TrueQuote →
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
