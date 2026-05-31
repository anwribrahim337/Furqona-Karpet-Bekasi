import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-[#fafbfc] to-white relative overflow-hidden border-b border-gray-100">
      
      {/* Background ambient lighting blobs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#cca43b] filter blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#0b4534] filter blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cca43b]/10 text-[#0b4534] text-xs font-bold uppercase tracking-wider mb-4 border border-[#cca43b]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b]"></span>
            Testimoni & Kepuasan Jamaah
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#072a20] tracking-tight">
            Apa Kata Para Pengurus <span className="text-[#0b4534]">DKM & Mitra?</span>
          </h2>
          <p className="text-sm text-[#5a655c] mt-3 font-light leading-relaxed">
            Kepercayaan bukan sekadar janji tertulis, melainkan kepuasan nyata ribuan jamaah yang beribadah di atas rajutan lembut Furqona Karpet.
          </p>
        </div>

        {/* Testimonial Slider Frame */}
        <div className="relative bg-white border border-gray-150 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl md:shadow-2xl">
          
          {/* Big Quote Decorative Logo */}
          <div className="absolute top-6 left-6 text-[#cca43b]/10 hover:text-[#cca43b]/20 transition-colors">
            <Quote size={80} className="stroke-[3]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center text-left">
            
            {/* Avatar Frame - left side on tablet/desktop */}
            <div className="relative shrink-0 flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#0b4534]/15 shadow-md">
                <img
                  src={activeTest.avatar}
                  alt={activeTest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 right-2 bg-[#cca43b] text-[#072a20] p-1.5 rounded-full shadow border border-white">
                <Star size={12} className="fill-current text-[#072a20]" />
              </div>
            </div>

            {/* Quote details - right side */}
            <div className="flex-grow space-y-4">
              
              {/* Star ratings */}
              <div className="flex items-center gap-1.5">
                {[...Array(activeTest.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#cca43b] text-[#cca43b]" />
                ))}
              </div>

              {/* Quote text with custom enter/exit animation on trigger change */}
              <p className="text-sm sm:text-base md:text-lg text-[#1a1c20] italic font-light leading-relaxed">
                "{activeTest.quote}"
              </p>

              {/* Client specifications and location tags */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h4 className="font-heading font-extrabold text-[#072a20] text-sm sm:text-base leading-none">
                    {activeTest.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 font-medium font-heading">
                    {activeTest.role} at <span className="text-[#0b4534]">{activeTest.organization}</span>
                  </p>
                </div>
                
                <span className="self-start sm:self-center text-[10px] sm:text-xs bg-gray-100 text-[#5a655c] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  📍 {activeTest.location}
                </span>
              </div>

            </div>

          </div>

          {/* Navigation sliders buttons */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-gray-50 border border-gray-150 text-gray-700 hover:bg-[#0b4534] hover:text-[#f4dfa2] hover:border-[#cca43b] transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-[#0b4534] border border-transparent text-[#f4dfa2] hover:bg-[#166e53] transition-all duration-300 cursor-pointer shadow-md active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="absolute bottom-8 left-6 sm:left-12 flex items-center gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === currentIdx ? "w-6 bg-[#0b4534]" : "w-2 bg-gray-200"
                }`}
              ></span>
            ))}
          </div>

        </div>

        {/* Real DKM call action reminder bubble */}
        <div className="mt-12 text-center text-xs text-gray-400">
          *Seluruh testimoni di atas merupakan respon tulus tertulis melalui chat WhatsApp resmi pasca tim instalatur selesai melakukan serah terima pekerjaan.
        </div>

      </div>
    </section>
  );
}
