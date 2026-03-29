import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-black text-center mb-2">
            Schedule Your <span className="text-accent">Free Estimate</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            For Immediate Assistance Call{" "}
            <a href="tel:14257571199" className="font-bold text-accent hover:underline">(425) 757-1199</a>
          </p>

          <div className="max-w-3xl mx-auto">
            <iframe
              src="https://link.arclightpainting.com/widget/booking/DbWlnGU0qizPxoW7pKkA"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "1200px", background: "transparent" }}
              scrolling="no"
              title="Schedule a booking with Arclight Painting"
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Phone className="h-4 w-4" />
            <span>Or call us directly: <a href="tel:14257571199" className="font-bold text-accent">(425) 757-1199</a></span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
