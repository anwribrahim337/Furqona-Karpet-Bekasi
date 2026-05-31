import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Menu, X, ShieldCheck, Award } from "lucide-react";

interface HeaderProps {
  onSurveyClick: () => void;
}

export default function Header({ onSurveyClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b4534]/95 text-white shadow-xl backdrop-blur-md border-b border-[#cca43b]/20 py-3"
          : "bg-[#0b4534] text-white py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Info */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#cca43b] to-[#a17f27] text-[#0b4534] shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="font-heading font-extrabold text-2xl tracking-tighter">F</span>
              {/* Subtle crescent star Islamic aesthetic touch */}
              <div className="absolute -top-1 -right-1 w-3 h-3 text-[#f4dfa2] font-semibold text-[8px] animate-pulse">★</div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none tracking-tight">
                FURQONA <span className="text-[#cca43b] font-extrabold">KARPET</span>
              </span>
              <span className="text-[10px] text-white/70 tracking-widest uppercase font-semibold mt-1">
                Premium Carpet Specialist
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-white/90">
            <button 
              onClick={() => scrollToSection("about")} 
              className="hover:text-[#cca43b] transition-colors cursor-pointer"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection("products")} 
              className="hover:text-[#cca43b] transition-colors cursor-pointer"
            >
              Kategori Karpet
            </button>
            <button 
              onClick={() => scrollToSection("process")} 
              className="hover:text-[#cca43b] transition-colors cursor-pointer"
            >
              Cara Pemesanan
            </button>
            <button 
              onClick={() => scrollToSection("gallery")} 
              className="hover:text-[#cca43b] transition-colors cursor-pointer"
            >
              Proyek Kami
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="hover:text-[#cca43b] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Call and WhatsApp Quick Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+628121234567" /* Placeholder phone */
              className="flex items-center gap-2 hover:text-[#cca43b] text-white/90 text-sm font-semibold transition-colors"
            >
              <Phone size={16} className="text-[#cca43b]" />
              <span>0812-1234-567</span>
            </a>
            
            <button
              onClick={onSurveyClick}
              className="bg-[#cca43b] hover:bg-[#a17f27] text-[#072a20] px-5 py-2.5 rounded-xl font-heading font-semibold text-xs tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-[#cca43b]/20 cursor-pointer flex items-center gap-1.5"
            >
              <Award size={14} />
              <span>BOOK SURVEY GRATIS</span>
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onSurveyClick}
              className="bg-[#cca43b] text-[#072a20] px-3.5 py-2 rounded-lg font-heading font-semibold text-xs transition-colors cursor-pointer"
            >
              Survey
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#cca43b] p-1.5 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#072a20] border-b border-[#cca43b]/30 shadow-2xl animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col font-medium text-base">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#0b4534] hover:text-[#cca43b] text-white/90 transition-all cursor-pointer"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#0b4534] hover:text-[#cca43b] text-white/90 transition-all cursor-pointer"
            >
              Kategori Karpet
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#0b4534] hover:text-[#cca43b] text-white/90 transition-all cursor-pointer"
            >
              Cara Pemesanan
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#0b4534] hover:text-[#cca43b] text-white/90 transition-all cursor-pointer"
            >
              Proyek Kami
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#0b4534] hover:text-[#cca43b] text-white/90 transition-all cursor-pointer"
            >
              FAQ
            </button>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3 px-3">
              <a
                href="https://wa.me/628121234567?text=Halo%20Furqona%20Karpet,%20saya%20tertarik%20tanya%20mengenai%20karpet%20masjid/kantor%20Anda."
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
              >
                <MessageSquare size={18} />
                <span>Konsultasi WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onSurveyClick();
                }}
                className="flex items-center justify-center gap-2 bg-[#cca43b] hover:bg-[#a17f27] text-[#072a20] py-3 rounded-xl font-heading font-semibold text-sm transition-all"
              >
                <ShieldCheck size={18} />
                <span>Jadwalkan Survey Gratis</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
