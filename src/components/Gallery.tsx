import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Sparkles, MapPin, Layers, CheckCircle2, SlidersHorizontal, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  const categories = ["All", "Masjid", "Mushola", "Kantor", "Hotel", "Gedung"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b4534]/10 text-[#0b4534] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b]"></span>
            Portofolio & Showcase Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#072a20] tracking-tight">
            Bukti Pemasangan <span className="text-[#cca43b]">Presisi & Indah</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5a655c] mt-4 font-light leading-relaxed">
            Menghadirkan kenyamanan bagi ribuan jamaah dan kemewahan fungsional bagi gedung perkantoran prestisius. Telusuri dokumentasi riil pengerjaan tim ahli kami.
          </p>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            <div className="flex items-center gap-1.5 text-gray-400 mr-2 border-r border-gray-200 pr-3 hidden md:flex">
              <SlidersHorizontal size={14} />
              <span className="text-xs font-semibold uppercase tracking-wider">Filter:</span>
            </div>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl font-heading font-semibold text-xs transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#0b4534] text-[#f4dfa2] shadow-md shadow-[#0b4534]/10 border border-[#cca43b]/40"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#0b4534]"
                }`}
              >
                {cat === "All" ? "Semua Proyek" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Display */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className="group relative bg-[#fafbfc] rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProj(proj)}
              >
                {/* Visual wrap */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle black overlay on default, dark green on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-[#0b4534]/95 group-hover:via-[#072a20]/70 transition-all duration-500"></div>

                  {/* Top category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-[#072a20] px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase border border-gray-100/50">
                    {proj.category}
                  </div>

                  {/* Volume / Meterage Indicator on Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-[#cca43b] text-[#072a20] px-3 py-1 rounded-md text-[10px] font-bold font-heading uppercase tracking-wider shadow">
                    {proj.volume}
                  </div>

                  {/* Zoom indicator on top right (visible on hover) */}
                  <div className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={14} />
                  </div>

                  {/* Absolute positioning text overlay for default states */}
                  <div className="absolute bottom-4 left-4 right-20 text-left text-white transition-opacity duration-500 group-hover:opacity-0">
                    <div className="text-xs text-[#cca43b] flex items-center gap-1">
                      <MapPin size={12} /> {proj.location.split(',')[1] || proj.location}
                    </div>
                    <h3 className="font-heading font-extrabold text-base tracking-tight leading-tight mt-0.5 truncate">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Slide-Up Hover descriptive detailed content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <span className="text-[10px] text-[#f4dfa2] font-semibold tracking-widest uppercase mb-1 flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-[#cca43b]" /> Proyek Terselesaikan
                    </span>
                    <h3 className="font-heading font-extrabold text-lg text-white leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white/90 font-light mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="text-xs text-[#cca43b] mt-3.5 flex items-center gap-1 pt-3 border-t border-white/10">
                      <MapPin size={12} />
                      <span className="font-medium">{proj.location}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating details modals */}
        <AnimatePresence>
          {selectedProj && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-150 text-left">
                
                {/* Modal Visual header with relative details */}
                <div className="relative h-72 sm:h-96">
                  <img
                    src={selectedProj.image}
                    alt={selectedProj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Category badg */}
                  <span className="absolute top-4 left-4 bg-[#cca43b] text-[#072a20] text-xs font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-lg shadow border border-[#cca43b]/40">
                    {selectedProj.category}
                  </span>

                  <button
                    onClick={() => setSelectedProj(null)}
                    className="absolute top-4 right-4 bg-black/40 text-white font-bold p-2.5 rounded-full hover:scale-105 transition-transform hover:bg-black/60 cursor-pointer"
                  >
                     ✕
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <div className="text-xs text-[#cca43b] flex items-center gap-1.5 font-semibold">
                      <MapPin size={14} /> {selectedProj.location}
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mt-1 tracking-tight">
                      {selectedProj.title}
                    </h3>
                  </div>
                </div>

                {/* Specs context descriptions */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-5 text-center">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-gray-400 block text-[10px] sm:text-xs font-semibold uppercase">Status</span>
                      <span className="text-[#0b4534] font-extrabold text-xs sm:text-sm">100% Selesai</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-gray-400 block text-[10px] sm:text-xs font-semibold uppercase font-heading">Total Volume</span>
                      <span className="text-[#072a20] font-extrabold text-xs sm:text-sm">{selectedProj.volume}</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-gray-400 block text-[10px] sm:text-xs font-semibold uppercase">Mitra Tim</span>
                      <span className="text-[#cca43b] font-extrabold text-xs sm:text-sm">Furqona Ahli</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Ringkasan Pemasangan:</span>
                    <p className="text-sm text-[#5a655c] leading-relaxed font-light">
                      {selectedProj.description} Projek revitalisasi ini melibatkan penyelarasan arah benang lari, pemotongan meliuk rapi mengelilingi pilar tiang struktural utama, obras keliling langsung dengan mesin modern di tempat, finishing kebersihan total menggunakan penyedot debu industrial, serta sertifikasi anti tungau bakteri agar menjamin kenyamanan jangka panjang.
                    </p>
                  </div>

                  <div className="bg-[#f0f9f6] p-4 rounded-xl border border-green-150 text-xs text-green-800 flex items-start gap-2.5">
                    <span>💡</span>
                    <p className="leading-relaxed">
                      Informasi: Hasil akhir yang presisi seperti di atas hanya bisa dicapai melalui <strong>survey pengukuran laser</strong> yang akurat sebelum memesan. Kontak cs untuk menyetel jadwal kunjungan gratis untuk masjid Anda.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button
                      onClick={() => setSelectedProj(null)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer"
                    >
                      Kembali ke Galeri
                    </button>
                    <a
                      href={`https://wa.me/628121234567?text=Halo%20Furqona%20Karpet,%20saya%20tertarik%20dengan%20hasil%20pemasangan%20di%20${encodeURIComponent(selectedProj.title)}%20dan%20ingin%20tanya%20detail.`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="bg-[#25d366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span className="animate-pulse">💬</span>
                      <span>Konsultasi Proyek WA</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
