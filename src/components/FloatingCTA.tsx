import React from "react";
import { MessageSquare, Phone, Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function FloatingCTA() {
  
  const handleScrollToForm = () => {
    const el = document.getElementById("booking-calculator");
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const directWaLink = "https://wa.me/628121234567?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20konsultasi%20atau%20survey%20pemasangan%20karpet.";

  return (
    <>
      {/* 1. Desktop & Tablet Floating Action Bubbles (Pulsing, interactive) */}
      <div className="hidden sm:flex flex-col gap-3.5 fixed bottom-6 right-6 z-50 items-end select-none">
        
        {/* Book Survey Floating Badge */}
        <button
          onClick={handleScrollToForm}
          className="group bg-[#cca43b] hover:bg-[#a17f27] text-[#072a20] px-5 py-3 rounded-2xl font-heading font-extrabold text-xs sm:text-sm shadow-xl flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer border border-[#cca43b]"
        >
          <Calendar size={16} />
          <span>FITTING SURVEY GRATIS</span>
          <span className="bg-red-500 text-white font-sans text-[8px] px-1.5 py-0.5 rounded-full animate-pulse">HOT</span>
        </button>

        {/* Pulsing WhatsApp CTA badge */}
        <a
          href={directWaLink}
          target="_blank"
          referrerPolicy="no-referrer"
          className="relative flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white pl-4 pr-5 py-3.5 rounded-2xl font-heading font-extrabold text-xs sm:text-sm shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer group"
        >
          {/* Pulsing ring animation */}
          <span className="absolute -inset-1 bg-[#25d366]/40 rounded-2xl animate-ping opacity-60 pointer-events-none group-hover:scale-105"></span>
          
          <MessageSquare className="animate-bounce shrink-0" size={18} />
          <div className="text-left flex flex-col leading-none">
            <span className="text-[9px] text-white/80 font-normal leading-none block font-sans">KONSULTASI KILAT</span>
            <span className="mt-1 font-bold">CHAT WHATSAPP</span>
          </div>
          <ArrowUpRight size={14} className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>

      {/* 2. Mobile Bottom-Pinned Sticky Bar Integration (Crucial for thumb target accessibility under 44px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#072a20]/95 backdrop-blur-md border-t border-[#cca43b]/30 shadow-2xl p-3 flex gap-2.5">
        
        {/* Call directly */}
        <a
          href="tel:+628121234567"
          className="bg-white/10 text-white p-3 rounded-xl border border-white/20 flex items-center justify-center shrink-0 active:bg-white/20"
          aria-label="Direct Call Hotlines"
        >
          <Phone size={20} className="text-[#cca43b]" />
        </a>

        {/* Free Survey smooth trigger */}
        <button
          onClick={handleScrollToForm}
          className="flex-1 bg-[#cca43b] text-[#072a20] font-heading font-extrabold text-xs tracking-wider rounded-xl uppercase flex items-center justify-center gap-1.5 active:bg-[#a17f27]"
        >
          <Calendar size={14} />
          <span>SURVEY GERATIS</span>
        </button>

        {/* Chat WhatsApp direct option */}
        <a
          href={directWaLink}
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex-1 bg-[#25d366] text-white font-heading font-extrabold text-xs tracking-wider rounded-xl uppercase flex items-center justify-center gap-1.5 shadow active:bg-[#20ba5a]"
        >
          <MessageSquare size={14} />
          <span>KONSUL WA</span>
        </a>

      </div>
    </>
  );
}
