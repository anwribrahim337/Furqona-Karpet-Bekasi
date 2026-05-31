import React from "react";
import { CLIENT_LOGOS } from "../data";
import { ShieldCheck, Award } from "lucide-react";

export default function TrustBar() {
  // Let's duplicate the logos array to achieve a seamless looping effect
  const doubleLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div id="about" className="bg-[#fafbfc] border-b border-gray-100 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-2">
            <Award className="text-[#cca43b]" size={18} />
            <span className="text-xs font-bold text-[#0b4534] uppercase tracking-widest font-heading">
              DIREKOMENDASIKAN OLEH MITRA TERPERCAYA
            </span>
          </div>
          <div className="text-xs text-gray-500 font-light flex items-center gap-1">
            <ShieldCheck className="text-green-600" size={14} />
            <span>Telah di-survey, diukur, & diselesaikan dengan standard kepatuhan tertinggi</span>
          </div>
        </div>

        {/* Endless Scrolling Slider */}
        <div className="relative w-full overflow-hidden py-2 select-none">
          {/* Left Fading Gradient Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafbfc] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Fading Gradient Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafbfc] to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Row Container */}
          <div className="flex gap-4 sm:gap-6 animate-[marquee_45s_linear_infinite] w-max hover:[animation-play-state:paused] whitespace-nowrap">
            {doubleLogos.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center gap-3 bg-white px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#cca43b]/40 hover:shadow-md transition-all duration-300"
              >
                {/* Logo Placeholder Badge with brand initials */}
                <span className="w-8 h-8 rounded-full bg-[#0b4534]/10 text-[#0b4534] font-bold text-xs flex items-center justify-center border border-[#0b4534]/10">
                  {client.name.substring(0, 2).toUpperCase()}
                </span>
                
                <div className="flex flex-col text-left">
                  <span className="font-heading font-semibold text-xs sm:text-sm text-[#1a1c20]">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-gray-500 tracking-wider">
                    {client.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Insert custom stylesheet animation block so we don't depend on tailwind config being edited directly */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
