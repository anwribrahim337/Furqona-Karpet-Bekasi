import React, { useState } from "react";
import { MapPin, Globe, Compass, CheckCircle2, ChevronRight, Truck } from "lucide-react";

export default function CoverageArea() {
  const [hoveredReg, setHoveredReg] = useState<string | null>(null);

  const areas = [
    { name: "Bekasi", status: "Hub Utama / Workshop Pusat", delivery: "Selesai dalam 3 Jam Pasang", radius: "Prioritas Teratas" },
    { name: "Cikarang", status: "Kawasan Industri & Pemukiman", delivery: "Selesai dalam 4 Jam Pasang", radius: "Prioritas Teratas" },
    { name: "Jakarta", status: "DKI Ibukota Terintegrasi", delivery: "Selesai dalam 6 Jam Pasang", radius: "Prioritas Utama" },
    { name: "Karawang", status: "Kawasan Pabrik & Pemukiman", delivery: "Selesai dalam 6 Jam Pasang", radius: "Prioritas Utama" },
    { name: "Tangerang", status: "Kawasan Tangerang Raya", delivery: "Selesai dalam 8 Jam Pasang", radius: "Prioritas Utama" },
    { name: "Depok", status: "Kawasan Perumahan & Kampus", delivery: "Selesai dalam 8 Jam Pasang", radius: "Prioritas Utama" },
    { name: "Bogor", status: "Kawasan Kota & Kabupaten", delivery: "Selesai dalam 24 Jam Kirim", radius: "Prioritas Utama" },
  ];

  return (
    <section id="coverage" className="py-20 md:py-28 bg-[#fafbfc] border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Territory List & Hub highlights - Left side (Colspan 6) */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cca43b]/10 text-[#072a20] text-xs font-bold uppercase tracking-wider">
              <Compass size={14} className="text-[#cca43b] animate-spin" />
              Area Cakupan Pengiriman & Layanan
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#072a20] tracking-tight">
              Melayani Seluruh Penjuru <span className="text-[#0b4534]">Nusantara</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#5a655c] font-light leading-relaxed">
              Meskipun pusat produksi dan diler workshop resmi kami berbasis di <strong>Bekasi</strong>, armada surveyor dan tim pemasang specialist kami bersiap meluncur ke berbagai area metropolitan Jabodetabek, Jawa Barat, hingga mengirim kargo kustom luar Jawa.
            </p>

            {/* List of key cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {areas.map((ar) => (
                <div
                  key={ar.name}
                  onMouseEnter={() => setHoveredReg(ar.name)}
                  onMouseLeave={() => setHoveredReg(null)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    hoveredReg === ar.name
                      ? "bg-white border-[#cca43b] shadow-md -translate-x-1"
                      : "bg-[#fafbfc] border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${hoveredReg === ar.name ? "bg-[#cca43b] animate-ping" : "bg-[#0b4534]"}`}></span>
                    <h4 className="font-heading font-extrabold text-[#072a20] sm:text-base leading-none">{ar.name}</h4>
                  </div>
                  <p className="text-[10px] text-[#5a655c] mt-1.5 font-medium">{ar.status}</p>
                  <p className="text-[10px] text-gray-400 font-light mt-0.5">{ar.delivery}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#f0f9f6] p-4 rounded-xl border border-green-100 flex items-start gap-3">
              <Truck className="text-green-700 shrink-0 mt-0.5" size={18} />
              <div>
                <h5 className="font-heading font-bold text-xs sm:text-sm text-green-800">Melayani Pengiriman ke Seluruh Indonesia</h5>
                <p className="text-[11px] text-green-700 mt-0.5 leading-relaxed font-light">Kami bekerjasama dengan ekspedisi cargo kapal laut utama untuk menghantarkan rol karpet masjid donatur ke Sumatera, Kalimantan, Sulawesi, NTT, hingga Papua secara ekstra protektif (double wrap plastik kedap air).</p>
              </div>
            </div>

          </div>

          {/* Visual Interactive Territory Map Graphic - Right side (Colspan 6) */}
          <div className="lg:col-span-6 flex justify-center relative w-full h-[320px] sm:h-[400px] bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-xl overflow-hidden group">
            
            {/* Ambient gold rings around background map area */}
            <div className="absolute inset-0 bg-[radial-gradient(#0b4534_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-10"></div>
            
            {/* Simple Indonesia high trust outline vector graphic or coordinate map placeholder with animated pins */}
            <div className="relative w-full h-full flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="text-left">
                  <span className="text-[10px] text-gray-400 tracking-wider font-extrabold uppercase leading-none block">DATABASE SURVEYOR</span>
                  <span className="font-heading font-extrabold text-sm text-[#072a20]">Status Jaringan Layanan</span>
                </div>
                <span className="bg-green-100 text-green-800 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> ONLINE DI BEKASI
                </span>
              </div>

              {/* Graphic container with animated pins mapped structurally */}
              <div className="relative flex-grow flex items-center justify-center">
                
                {/* Simulated islands vector schematic circles */}
                <div className="w-[85%] h-3/5 rounded-full border border-[#cca43b]/15 relative flex items-center justify-center bg-[#fafbfc]/50">
                  <div className="absolute inset-3 rounded-full border border-dashed border-[#0b4534]/15"></div>
                  
                  {/* Central Node: Bekasi headquarters */}
                  <div className="absolute bg-[#0b4534] text-[#f4dfa2] p-3 rounded-2xl border border-[#cca43b]/50 shadow-xl flex items-center gap-2 z-20">
                    <MapPin className="text-[#cca43b] animate-bounce shrink-0" size={16} />
                    <div className="text-left leading-none">
                      <span className="font-bold text-[10px] sm:text-xs tracking-tight block">Furqona HQ</span>
                      <span className="text-[8px] sm:text-[9px] text-[#f4dfa2]/80 leading-none">Pusat Bekasi</span>
                    </div>
                  </div>

                  {/* Satellite Animated Ping Node: Jakarta */}
                  <div className="absolute top-[20%] left-[20%] z-10 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cca43b] animate-ping absolute"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cca43b] relative"></span>
                    <span className="text-[9px] text-gray-500 font-bold hidden sm:inline">Jakarta Hub</span>
                  </div>

                  {/* Satellite Animated Ping Node: Cikarang / MM2100 */}
                  <div className="absolute bottom-[25%] right-[15%] z-10 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0b4534] animate-ping absolute"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0b4534] relative"></span>
                    <span className="text-[9px] text-gray-500 font-bold hidden sm:inline">Cikarang</span>
                  </div>

                  {/* Satellite Animated Ping Node: Karawang */}
                  <div className="absolute top-[35%] right-[25%] z-10 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0b4534] relative"></span>
                    <span className="text-[9px] text-gray-500 font-bold hidden sm:inline">Karawang</span>
                  </div>

                  {/* Satellite Animated Ping Node: Depok */}
                  <div className="absolute bottom-[20%] left-[30%] z-10 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0b4534] relative"></span>
                    <span className="text-[9px] text-gray-500 font-bold hidden sm:inline">Depok</span>
                  </div>

                </div>

              </div>

              {/* Bottom footer bar for maps */}
              <div className="bg-[#0b4534] hover:bg-[#166e53] text-white p-3.5 rounded-xl border border-[#cca43b]/20 flex items-center justify-between text-xs transition-colors shadow">
                <div className="flex items-center gap-2 text-left">
                  <span>⚓</span>
                  <div>
                    <span className="font-extrabold block text-[10px] text-[#f4dfa2] tracking-wider uppercase">Pengiriman Luar Pulau</span>
                    <span className="text-[9px] text-white/80">Support cargo kargo asuransi laut murah se-Indonesia</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-[#cca43b]" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
