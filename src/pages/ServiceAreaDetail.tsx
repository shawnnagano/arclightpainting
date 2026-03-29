import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { serviceAreas } from "@/data/serviceAreas";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";

const ServiceAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/service-areas" replace />;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All Service Areas
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h1 className="text-3xl md:text-5xl font-black">
                Painters in{" "}
                <span className="text-accent">{area.name}, WA</span>
              </h1>
            </div>
            <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
              {area.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Why {area.name} Homeowners Choose Arclight
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {area.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{h}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/schedule">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 text-lg">
                Get A Fast Quote in {area.name}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services available */}
      <ServicesSection />

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServiceAreaDetail;
