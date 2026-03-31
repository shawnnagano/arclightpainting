import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import blueprintImage from "@/assets/blueprint-photo.jpg";

const Schedule = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(1200);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === "object" && event.data.height) {
        setIframeHeight(event.data.height);
      }
      // Some widgets send a string like "height:1200"
      if (typeof event.data === "string" && event.data.startsWith("height:")) {
        const h = parseInt(event.data.split(":")[1], 10);
        if (!isNaN(h)) setIframeHeight(h);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Get a Free Painting Estimate | Schedule Now | Arclight Painting"
        description="Schedule your free painting estimate with Arclight Painting in Bothell, WA. Fast quotes, no obligation. Call (425) 757-1199 or book online."
        canonical="/schedule"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Get a Quote", url: "/schedule" },
        ])}
      />
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[300px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${blueprintImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Schedule Your <span className="text-accent">TrueQuote</span> Consultation
          </h1>
        </div>
      </section>

      <section className="py-8" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-4">
          <iframe
            ref={iframeRef}
            src="https://link.arclightpainting.com/widget/booking/DbWlnGU0qizPxoW7pKkA"
            style={{
              width: "100%",
              height: `${iframeHeight}px`,
              border: "none",
              background: "#ffffff",
              transition: "height 0.3s ease",
            }}
            title="Schedule a booking with Arclight Painting"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-foreground text-lg">
          <Phone className="h-5 w-5" />
          <span>For Immediate Assistance Call: <a href="tel:14257571199" className="font-bold text-accent hover:underline">(425) 757-1199</a></span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
