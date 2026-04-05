import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlobalReviewWidget from "@/components/GlobalReviewWidget";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Pricing from "./pages/Pricing.tsx";
import Reviews from "./pages/Reviews.tsx";
import Schedule from "./pages/Schedule.tsx";

import { Navigate, useParams } from "react-router-dom";
import ServiceDetail from "./pages/ServiceDetail.tsx";

// Redirect old /services/:slug paths to root-level /:slug
function ServiceRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
}

import ServiceAreas from "./pages/ServiceAreas.tsx";
import ServiceAreaDetail from "./pages/ServiceAreaDetail.tsx";
import Blog from "./pages/Blog.tsx";
import JoinOurTeam from "./pages/JoinOurTeam.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Mission from "./pages/Mission.tsx";
import ColorConsultation from "./pages/ColorConsultation.tsx";
import NotFound from "./pages/NotFound.tsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-new" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/color-consultation" element={<ColorConsultation />} />
            <Route path="/:slug" element={<ServiceDetail />} />
            {/* 301-style redirects from old /services/ paths */}
            <Route path="/services/color-consultation" element={<Navigate to="/color-consultation" replace />} />
            <Route path="/services/drywall-repair" element={<Navigate to="/drywall-repairs" replace />} />
            <Route path="/services/:slug" element={<ServiceRedirect />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/:slug" element={<ServiceAreaDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GlobalReviewWidget />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
