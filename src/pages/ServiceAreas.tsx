import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { serviceAreas } from "@/data/serviceAreas";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import serviceAreasMap from "@/assets/service-areas-map.png";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

const ServiceAreas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Service Areas - Painting in Bothell, Kirkland, Redmond & More | Arclight Painting"
        description="Arclight Painting serves Bothell, Kirkland, Redmond, Bellevue, Woodinville, Kenmore, Mill Creek, Everett, Lake Forest Park, and more across the greater Eastside, WA."
        canonical="/service-areas"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ])}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[350px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${serviceAreasMap}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Areas We <span className="text-accent">Serve</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Arclight Painting proudly serves homeowners and businesses across the greater Eastside and Snohomish County. Find your community below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/service-areas/${area.slug}`}
                  className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h2 className="text-lg font-bold group-hover:text-accent transition-colors">
                      {area.name}, {area.state}
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {area.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServiceAreas;
