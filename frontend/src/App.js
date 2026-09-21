import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCta from "./components/MobileCta";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DoctorHomeVisit from "./pages/DoctorHomeVisit";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Packages from "./pages/Packages";
import Doctors from "./pages/Doctors";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

function Shell() {
  useLenis();
  return (
    <div className="min-h-screen bg-white text-slate-900 font-body antialiased">
      <ScrollToTop />
      <Header />
      <main className="pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/doctor-home-visit-mumbai" element={<DoctorHomeVisit />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal page="privacy-policy" />} />
          <Route path="/terms" element={<Legal page="terms" />} />
          <Route path="/disclaimer" element={<Legal page="disclaimer" />} />
          <Route path="/cancellation-refund-policy" element={<Legal page="cancellation-refund-policy" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCta />
      <Toaster position="top-center" richColors />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
