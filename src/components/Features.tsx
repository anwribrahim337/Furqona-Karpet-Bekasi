import React, { useState } from "react";
import { FEATURES } from "../data";
import { 
  Ruler, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  FileSpreadsheet, 
  Truck, 
  MessageSquare,
  Users,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Features() {
  const [selectedFeat, setSelectedFeat] = useState<string | null>(null);

  // Mapped icons based on feature ids
  const getFeatureIcon = (id: string, colorClass: string) => {
    switch (id) {
      case "feat-survey":
        return <Ruler className={colorClass} size={28} />;
      case "feat-sample":
        return <Layers className={colorClass} size={28} />;
      case "feat-pemasangan":
        return <Sparkles className={colorClass} size={28} />;
      case "feat-garansi":
        return <ShieldCheck className={colorClass} size={28} />;
      case "feat-harga":
        return <FileSpreadsheet className={colorClass} size={28} />;
      case "feat-pengiriman":
        return <Truck className={colorClass} size={28} />;
      default:
        return <Sparkles className={colorClass} size={28} />;
    }
  };

  // Additional 2 features to match user request (Fast Response WhatsApp, Tim Berpengalaman)
  const ADDITIONAL_FEATS = [
    {
      id: "feat-wa-fast",
      title: "Fast Response WhatsApp 24/7",
      description: "Admin kami responsif dan memahami teknikal karpet. Cukup foto ruangan saat ini, langsung kami hitungkan perkiraan biaya.",
      fullDesc: "Kami tidak membiarkan Anda menunggu lama. Melalui sistem tanggap cepat WhatsApp, Anda akan langsung terhubung dengan konsultan spesialis karpet kami untuk negosiasi harga, koordinasi jadwal survey, maupun klaim garansi.",
      accent: "Respon Kilat < 5 Menit",
      icon: <MessageSquare className="text-[#cca43b]" size={28} />
    },
    {
      id: "feat-tim-exp",
      title: "Tim Berpengalaman Belasan Tahun",
      description: "Tim ahli pasang kami khusus dididik untuk mengobras saf kiblat melengkung & pilar masjid yang rumit tanpa kerutan.",
      fullDesc: "Bukan tukang bangunan umum. Seluruh tim kami adalah pekerja ahli rajut dan obras karpet yang memiliki jam terbang tinggi di ratusan masjid agung, kantor kedutaan, hingga hotel berbintang di Jabodetabek.",
      accent: "15+ Tahun Reputasi",
      icon: <Users className="text-[#cca43b]" size={28} />
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b4534]/10 text-[#0b4534] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b] animate-pulse"></span>
            Mengapa Memilih Furqona Karpet?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#072a20] tracking-tight">
            Pelayanan Premium Tanpa <span className="text-[#cca43b]">Biaya Siluman</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5a655c] mt-4 font-light leading-relaxed">
            Didesain khusus untuk memberikan rasa aman, transparan, dan kepercayaan mutlak bagi setiap pengurus masjid, donatur, maupun diler perkantoran dalam bermitra.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Loop over initial database features */}
          {FEATURES.map((feat) => {
            const isSelected = selectedFeat === feat.id;
            return (
              <motion.div
                key={feat.id}
                layout
                onClick={() => setSelectedFeat(isSelected ? null : feat.id)}
                className={`group relative p-6 sm:p-8 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected 
                    ? "bg-[#0b4534] border-[#cca43b] text-white shadow-2xl ring-2 ring-[#cca43b]/40" 
                    : "bg-[#fafbfc] border-gray-150 hover:border-[#cca43b]/40 hover:bg-white text-[#1a1c20] shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#cca43b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-3xl"></div>

                  {/* Header layout */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl transition-colors ${
                      isSelected ? "bg-white/10 text-white" : "bg-[#0b4534]/5 text-[#0b4534]"
                    }`}>
                      {getFeatureIcon(feat.id, isSelected ? "text-[#f4dfa2]" : "text-[#0b4534]")}
                    </div>
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      isSelected ? "bg-[#cca43b] text-[#072a20]" : "bg-gray-100 text-[#5a655c]"
                    }`}>
                      {feat.accent}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold font-heading mb-3 ${
                    isSelected ? "text-[#f4dfa2]" : "text-[#072a20]"
                  }`}>
                    {feat.title}
                  </h3>

                  {/* Descriptions */}
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isSelected ? "text-white/80 font-light" : "text-[#5a655c] font-light"
                  }`}>
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? "text-[#cca43b]" : "text-[#0b4534] group-hover:text-[#cca43b]"}>
                    {isSelected ? "Klik untuk memperkecil" : "Baca komitmen lengkap"}
                  </span>
                  <ArrowUpRight 
                    size={16} 
                    className={`transition-transform duration-300 ${isSelected ? "rotate-45 text-[#cca43b]" : "group-hover:translate-x-1 group-hover:-translate-y-1 text-[#0b4534]"}`} 
                  />
                </div>

                {/* Expanded Detailed Copy */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/15 text-xs text-white/90 leading-relaxed font-light space-y-2 bg-[#093d2e] -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-[#cca43b]/20"
                    >
                      <strong className="text-[#f4dfa2] font-semibold block">Cara Kerja Kami:</strong>
                      <p>{feat.fullDesc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Render Additional 2 Client requests features */}
          {ADDITIONAL_FEATS.map((feat) => {
            const isSelected = selectedFeat === feat.id;
            return (
              <motion.div
                key={feat.id}
                layout
                onClick={() => setSelectedFeat(isSelected ? null : feat.id)}
                className={`group relative p-6 sm:p-8 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected 
                    ? "bg-[#0b4534] border-[#cca43b] text-white shadow-2xl ring-2 ring-[#cca43b]/40" 
                    : "bg-[#fafbfc] border-gray-150 hover:border-[#cca43b]/40 hover:bg-white text-[#1a1c20] shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#cca43b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-3xl"></div>

                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl transition-colors ${
                      isSelected ? "bg-white/10 text-white" : "bg-[#0b4534]/5 text-[#0b4534]"
                    }`}>
                      {isSelected ? <CheckCircle className="text-[#f4dfa2]" size={28} /> : feat.icon}
                    </div>
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      isSelected ? "bg-[#cca43b] text-[#072a20]" : "bg-gray-100 text-[#5a655c]"
                    }`}>
                      {feat.accent}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-heading mb-3 ${
                    isSelected ? "text-[#f4dfa2]" : "text-[#072a20]"
                  }`}>
                    {feat.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    isSelected ? "text-white/80 font-light" : "text-[#5a655c] font-light"
                  }`}>
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? "text-[#cca43b]" : "text-[#0b4534] group-hover:text-[#cca43b]"}>
                    {isSelected ? "Klik untuk memperkecil" : "Baca komitmen lengkap"}
                  </span>
                  <ArrowUpRight 
                    size={16} 
                    className={`transition-transform duration-300 ${isSelected ? "rotate-45 text-[#cca43b]" : "group-hover:translate-x-1 group-hover:-translate-y-1 text-[#0b4534]"}`} 
                  />
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/15 text-xs text-white/90 leading-relaxed font-light space-y-2 bg-[#093d2e] -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-[#cca43b]/20"
                    >
                      <strong className="text-[#f4dfa2] font-semibold block">Layanan Istimewa:</strong>
                      <p>{feat.fullDesc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
