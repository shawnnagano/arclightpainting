import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { serviceAreas } from "@/data/serviceAreas";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ServiceAreas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Areas We <span className="text-accent">Serve</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Arclight Painting proudly serves homeowners and businesses across the greater Eastside and Snohomish County. Find your community below.
          </p>
        </div>
      </div>

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
