import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[300px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-078.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-12">
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Schedule Your <span className="text-accent">Free Estimate</span>
          </h1>
          <p className="text-muted-foreground">
            For Immediate Assistance Call{" "}
            <a href="tel:14257571199" className="font-bold text-accent hover:underline">(425) 757-1199</a>
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <iframe
            src="https://link.arclightpainting.com/widget/booking/DbWlnGU0qizPxoW7pKkA"
            style={{ width: "100%", height: "2200px", border: "none", background: "transparent" }}
            title="Schedule a booking with Arclight Painting"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Phone className="h-4 w-4" />
          <span>Or call us directly: <a href="tel:14257571199" className="font-bold text-accent">(425) 757-1199</a></span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
