import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Calendar, Star, ShieldCheck, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onWAContactClick: () => void;
  onSurveyClick: () => void;
}

export default function Hero({ onWAContactClick, onSurveyClick }: HeroProps) {
  return (
    <section 
      id="hero"
      className="relative pt-24 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0b4534] via-[#093d2e] to-[#fafbfc]"
    >
      {/* Background Decorative Graphic - Islamic geometry outline and fluid ambient gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#cca43b] filter blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#166e53] filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Copy (Left side) - Colspan 7 */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Elegant Trust Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f4dfa2] text-xs font-semibold tracking-wider uppercase mb-1"
            >
              <Sparkles size={14} className="text-[#cca43b]" />
              <span>Spesialis Karpet Masjid & Kantor No. #1 Bekasi</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]"
            >
              Spesialis Karpet Masjid & Karpet Kantor <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] via-[#f4dfa2] to-[#cca43b]">Berkualitas Premium</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed"
            >
              Sujud lebih khusyuk, suasana kantor jadi lebih produktif. Melayani survey, pemetaan presisi, pengiriman langsung, hingga pengerjaan potong obras terpasang rapi di seluruh Indonesia.
            </motion.p>

            {/* Trust Badges Widget (DKM Ratings) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 py-2 border-y border-white/15"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#cca43b] text-[#cca43b]" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-white/95">
                <span className="font-bold text-[#cca43b]">4.9 / 5.0</span> kepuasan bintang dari <span className="underline font-medium underline-offset-4 decoration-[#cca43b]">1,850+ Masjid, Kantor & Donatur</span> Jabodetabek
              </div>
            </motion.div>

            {/* High Conversion CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={onWAContactClick}
                className="w-full sm:w-auto bg-[#25d366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-xl font-heading font-bold text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-[#25d366]/20 transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              >
                <MessageSquare className="animate-bounce" size={20} />
                <span>KONSULTASI WHATSAPP SEKARANG</span>
              </button>

              <button
                onClick={onSurveyClick}
                className="w-full sm:w-auto bg-[#cca43b] hover:bg-[#a17f27] text-[#072a20] px-8 py-4 rounded-xl font-heading font-bold text-base tracking-wide flex items-center justify-center gap-2 border border-[#cca43b] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#cca43b]/10 cursor-pointer"
              >
                <Calendar size={20} />
                <span>BOOKING SURVEY GRATIS</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xs text-white/60 flex items-center gap-2 mt-1 sm:mt-0"
            >
              <ShieldCheck size={14} className="text-[#cca43b]" />
              <span>Garansi Serat Bulu Anti-Renggang & Layanan Survey Sampel Fisik Tanpa Dipungut Biaya</span>
            </motion.div>

          </div>

          {/* Hero Visual Showcase (Right side) - Colspan 5 */}
          <div className="lg:col-span-5 relative w-full flex justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none group"
            >
              
              {/* Gold Ornamental Outer Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#cca43b] to-transparent rounded-2xl opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Image Framer Card */}
              <div className="relative bg-white p-2 sm:p-2.5 rounded-2xl shadow-2xl overflow-hidden border border-[#cca43b]/20">
                <img
                  src="/src/assets/images/mosque_carpet_hero_1780192984090.png"
                  alt="Furqona Karpet Masjid Premium"
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[350px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                />
                
                {/* Float Card Badge */}
                <div className="absolute top-4 right-4 bg-[#072a20]/90 text-[#f4dfa2] px-3.5 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase border border-[#cca43b]/30 backdrop-blur-sm shadow flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#cca43b] animate-ping"></span>
                  <span>100% TURKI IMPORT</span>
                </div>

                {/* Overlay Detail Card on bottom of image */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0b4534]/95 text-white p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-xl">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-heading font-semibold text-[#f4dfa2] tracking-wider uppercase">Masjid Jami Baiturrahman</span>
                    <span className="text-[10px] bg-white/10 text-white/90 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin size={10} className="text-[#cca43b]" /> Bekasi Selatan
                    </span>
                  </div>
                  <div className="pt-2 text-[11px] text-white/80 leading-relaxed font-light">
                    "Karpet Grade A terpasang sejuk & empuk. Jamaat memuji obras lekukan pilar yang luar biasa rapih."
                  </div>
                </div>
              </div>

              {/* Behind Floating Trust Panel */}
              <div className="absolute -bottom-6 -right-4 bg-white text-[#072a20] p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3 border border-gray-150">
                <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 text-[#072a20] flex items-center justify-center font-bold text-lg font-heading">
                  🚀
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold leading-none">Kecepatan Respon</div>
                  <div className="text-sm font-bold mt-1">&lt; 5 Menit via WA</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Business Stats Grid (Offsetting the divider on to white bg) */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
          
          <div className="text-center flex flex-col items-center justify-center p-3 border-r border-gray-100 last:border-r-0">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b4534] tracking-tight">2.500+</span>
            <span className="text-[#cca43b] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase mt-1">Masjid Terpasang</span>
            <span className="text-[10px] sm:text-xs text-[#5a655c] mt-0.5 font-light">Se-Indonesia</span>
          </div>

          <div className="text-center flex flex-col items-center justify-center p-3 border-r border-gray-100 last:border-r-0">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b4534] tracking-tight">350.000m+</span>
            <span className="text-[#cca43b] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase mt-1">Karpet Terdistribusi</span>
            <span className="text-[10px] sm:text-xs text-[#5a655c] mt-0.5 font-light">Lokal & Import</span>
          </div>

          <div className="text-center flex flex-col items-center justify-center p-3 sm:border-r border-gray-100 last:border-r-0">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b4534] tracking-tight">99.8%</span>
            <span className="text-[#cca43b] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase mt-1">Puasa Pengurus</span>
            <span className="text-[10px] sm:text-xs text-[#5a655c] mt-0.5 font-light">DKM & Kepala Kantor</span>
          </div>

          <div className="text-center flex flex-col items-center justify-center p-3 last:border-r-0">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b4534] tracking-tight">15+ Th</span>
            <span className="text-[#cca43b] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase mt-1">Pengalaman Tim</span>
            <span className="text-[10px] sm:text-xs text-[#5a655c] mt-0.5 font-light">Ahli Potong Obras</span>
          </div>

        </div>

      </div>
    </section>
  );
}
