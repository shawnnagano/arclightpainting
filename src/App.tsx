import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
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

import ServiceDetail from "./pages/ServiceDetail.tsx";

import ServiceAreaDetail from "./pages/ServiceAreaDetail.tsx";
import BlogPostDetail from "./pages/BlogPostDetail.tsx";
import { serviceAreas } from "@/data/serviceAreas";
import { blogPosts } from "@/data/blogPosts";
import { Navigate } from "react-router-dom";
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

function ServiceAreaRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
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
            <Route path="/about-new" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/services/color-consultation" element={<ColorConsultation />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            {serviceAreas.map((area) => (
              <Route key={area.slug} path={`/${area.slug}`} element={<ServiceAreaDetail />} />
            ))}
            <Route path="/service-area/:slug" element={<ServiceAreaRedirect />} />
            <Route path="/service-area" element={<Navigate to="/" replace />} />
            <Route path="/blog" element={<Blog />} />
            {blogPosts.filter(p => p.content).map((post) => (
              <Route key={post.slug} path={`/${post.slug}`} element={<BlogPostDetail />} />
            ))}
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Legacy service redirects */}
            <Route path="/interior-painting" element={<Navigate to="/services/interior-painting" replace />} />
            <Route path="/exterior-painting" element={<Navigate to="/services/exterior-painting" replace />} />
            <Route path="/cabinet-refinishing" element={<Navigate to="/services/cabinet-refinishing" replace />} />
            <Route path="/drywall-repair" element={<Navigate to="/services/drywall-repairs" replace />} />
            <Route path="/pressure-washing" element={<Navigate to="/services/pressure-washing" replace />} />
            <Route path="/commercial-painting" element={<Navigate to="/services/commercial-painting" replace />} />
            <Route path="/popcorn-ceiling-removal" element={<Navigate to="/services/popcorn-ceiling-removal" replace />} />
            <Route path="/color-consultation" element={<Navigate to="/services/color-consultation" replace />} />
            {/* Legacy staging "-new" duplicates */}
            <Route path="/painter-for-a-day-new" element={<Navigate to="/services/painter-for-a-day" replace />} />
            <Route path="/blog-new" element={<Navigate to="/blog" replace />} />
            <Route path="/privacy-policy-new" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/interior-painting-new" element={<Navigate to="/services/interior-painting" replace />} />
            <Route path="/exterior-painting-new" element={<Navigate to="/services/exterior-painting" replace />} />
            <Route path="/drywall-repair-new" element={<Navigate to="/services/drywall-repairs" replace />} />
            <Route path="/cabinet-refinishing-new" element={<Navigate to="/services/cabinet-refinishing" replace />} />
            <Route path="/gallery-new" element={<Navigate to="/about" replace />} />
            <Route path="/service-area-new" element={<Navigate to="/" replace />} />
            <Route path="/referral-rewards-new" element={<Navigate to="/" replace />} />
            {/* Legacy staging location "-new" duplicates */}
            <Route path="/house-painting-in-woodinville-new" element={<Navigate to="/woodinville" replace />} />
            <Route path="/house-painting-in-redmond-new" element={<Navigate to="/redmond" replace />} />
            <Route path="/house-painting-in-mill-creek-new" element={<Navigate to="/mill-creek" replace />} />
            <Route path="/house-painting-in-lynnwood-new" element={<Navigate to="/lynnwood" replace />} />
            <Route path="/house-painting-in-lake-forest-park-new" element={<Navigate to="/lake-forest-park" replace />} />
            <Route path="/house-painting-in-kirkland-new" element={<Navigate to="/kirkland" replace />} />
            <Route path="/house-painting-in-kenmore-new" element={<Navigate to="/kenmore" replace />} />
            <Route path="/house-painting-in-everett-new" element={<Navigate to="/everett" replace />} />
            <Route path="/house-painting-in-bothell-new" element={<Navigate to="/bothell" replace />} />
            <Route path="/house-painting-in-bellevue-new" element={<Navigate to="/bellevue" replace />} />
            {/* Other legacy WP pages */}
            <Route path="/why-it-matters" element={<Navigate to="/mission" replace />} />
            <Route path="/house-painting-new" element={<Navigate to="/" replace />} />
            <Route path="/house-painting" element={<Navigate to="/" replace />} />
            <Route path="/gallery" element={<Navigate to="/about" replace />} />
            <Route path="/above-beyond-blueprint" element={<Navigate to="/about" replace />} />
            <Route path="/about-arclight" element={<Navigate to="/about" replace />} />
            <Route path="/faq" element={<Navigate to="/" replace />} />
            <Route path="/referral-thank-you" element={<Navigate to="/" replace />} />
            <Route path="/home-old" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
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
