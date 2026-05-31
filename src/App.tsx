import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import Products from "./components/Products";
import OrderProcess from "./components/OrderProcess";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CoverageArea from "./components/CoverageArea";
import FAQ from "./components/FAQ";
import WhatsAppConversion from "./components/WhatsAppConversion";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  // Pass state of chosen carpet spec from Products to the estimator form at the bottom
  const [selectedGrade, setSelectedGrade] = useState<string>("Grade A");

  const handleProductSelect = (gradeName: string) => {
    setSelectedGrade(gradeName);
  };

  const handleScrollToCalculator = () => {
    const element = document.getElementById("booking-calculator");
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDirectWAContact = (message?: string) => {
    const textMsg = message || "Halo Furqona Karpet Bekasi, saya tertarik berkonsultasi mengenai pemasangan karpet masjid atau karpet kantor untuk alamat saya.";
    const url = `https://wa.me/628121234567?text=${encodeURIComponent(textMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#1a1c20] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Luxurious Sticky Header */}
      <Header onSurveyClick={handleScrollToCalculator} />

      {/* 2. Hero Section (Conversion focus, ratings, visual card mockup) */}
      <Hero 
        onWAContactClick={() => handleDirectWAContact()} 
        onSurveyClick={handleScrollToCalculator} 
      />

      {/* 3. Sliding Logo Trust Bar */}
      <TrustBar />

      {/* 4. Keunggulan Section (Bento Grid presentation) */}
      <Features />

      {/* 5. Products Section Layout (Tabs, spec values, card action triggers) */}
      <Products 
        onProductSelect={handleProductSelect} 
        onWAContactClick={handleDirectWAContact} 
      />

      {/* 6. Order Navigation Stepper Timeline */}
      <OrderProcess />

      {/* 7. Gallery Showcase (Masonry layouts with categories & zooms) */}
      <Gallery />

      {/* 8. Testimonials Interactive Slider (Real reviews from diverse industries) */}
      <Testimonials />

      {/* 9. Value Proposition (Metrics grids, brand assurances) */}
      <WhyChooseUs />

      {/* 10. Coverage Geographical distribution nodes */}
      <CoverageArea />

      {/* 11. FAQ Accordions (Deter standard doubts) */}
      <FAQ />

      {/* 12. Main Conversion Section (Interactive Real-time calculator form + urgency copy) */}
      <WhatsAppConversion selectedGrade={selectedGrade} />

      {/* 13. Deep trust Footer */}
      <Footer />

      {/* 14. Floating and sticky bottom CTA elements */}
      <FloatingCTA />

    </div>
  );
}
