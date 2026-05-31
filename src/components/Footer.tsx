import React from "react";
import { Phone, Mail, MapPin, Award, MessageSquare, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear(); // Will load 2026

  const keywords = [
    "Karpet Masjid Bekasi", "Jual Karpet Masjid Bekasi", "Karpet Masjid Jakarta", 
    "Karpet Turki Bekasi", "Karpet Kantor Bekasi", "Karpet Kantor Jakarta", 
    "Distributor Karpet Masjid", "Supplier Karpet Kantor", "Karpet Masjid Premium", 
    "Karpet Masjid Turki"
  ];

  const quickLinks = [
    { label: "Tentang Kami", target: "about" },
    { label: "Koleksi Karpet", target: "products" },
    { label: "Cara Pemesanan", target: "process" },
    { label: "Galeri Proyek", target: "gallery" },
    { label: "Pertanyaan (FAQ)", target: "faq" },
    { label: "Kalkulator Estimasi", target: "booking-calculator" }
  ];

  return (
    <footer className="bg-[#072a20] text-gray-300 pt-16 pb-8 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col - 4 Column */}
          <div className="md:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cca43b] to-[#a17f27] text-[#072a20] flex items-center justify-center font-heading font-extrabold text-xl">
                F
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white leading-none">
                  FURQONA <span className="text-[#cca43b]">KARPET</span>
                </span>
                <span className="text-[9px] text-[#cca43b] font-semibold tracking-widest uppercase mt-0.5">Spesialis Karpet Masjid & Kantor</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Distributor utama karpet masjid Turki import mewah dan karpet tile kantor handal di Bekasi, metropolitan Jabodetabek, dan distribusi nasional. Berkomitmen menghadirkan kerapihan sajadah ibadah dan kenyamanan ruang kerja Anda se-Nusantara.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#cca43b] font-bold">
              <ShieldCheck size={16} />
              <span>Garansi Obras Pemasangan Tepercaya 1 Tahun</span>
            </div>
          </div>

          {/* Quick Links Col - 2 Column */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white border-b border-[#cca43b]/20 pb-2">
              Peta Situs
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.target);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-[#cca43b] transition-colors leading-none cursor-pointer text-gray-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col - 3 Column */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white border-b border-[#cca43b]/20 pb-2">
              Hubungi Kami
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#cca43b] shrink-0 mt-0.5" />
                <span>
                  <strong>Workshop Bekasi Pusat:</strong><br />
                  Jl. KH. Noer Ali No.88, Kayuringin Jaya,<br />
                  Bekasi Selatan, Kota Bekasi 17144
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#cca43b]" />
                <span>0812-1234-567 (Hotline)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#cca43b]" />
                <span>info@furqonakarpet.com</span>
              </li>
            </ul>
          </div>

          {/* Guarantee / trust Seal - 3 Column */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white border-b border-[#cca43b]/20 pb-2">
              Komitmen Kualitas
            </h4>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3 text-xs">
              <div className="flex items-center gap-2.5 text-[#f4dfa2]">
                <Award size={18} className="text-[#cca43b]" />
                <span className="font-bold">Distributor Tangan Pertama</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-normal">
                Kami melompati perantara retail umum, mendatangkan kontainer rol sajadah Turki langsung dari pabrik Istanbul, menjamin harga bersalaman menguntungkan kedua belah pihak.
              </p>
            </div>
          </div>

        </div>

        {/* SEO Tag Clouds (Important for high organic trust search terms matching requested keywords) */}
        <div className="py-8 border-b border-white/10 text-left">
          <span className="text-[10px] text-gray-400 font-extrabold tracking-widest uppercase block mb-3.5">
            OPTIMAL SEO INDEX (TARGET KEYWORDS FOR FURQONA):
          </span>
          <div className="flex flex-wrap gap-2 text-xs">
            {keywords.map((key) => (
              <span
                key={key}
                className="bg-white/5 border border-white/10 text-gray-400 px-2.5 py-1 rounded-md text-[10px] font-medium transition-colors hover:border-[#cca43b]/30 hover:text-white"
              >
                {key}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright year subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          
          <div className="flex items-center gap-1">
            <span>© {currentYear} Furqona Karpet. All Rights Reserved.</span>
            <span className="text-[10px] bg-white/5 text-[#cca43b] px-2 py-0.5 rounded font-bold uppercase tracking-wider ml-2 border border-white/10">Banten-Jabar-JabodetabekHub</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Developed with</span>
            <Heart size={10} className="text-red-500 fill-current" />
            <span>untuk Kemaslahatan Jamaah.</span>
          </div>

          {/* Dynamic Scroll Top Button */}
          <button
            onClick={handleScrollTop}
            className="bg-white/5 hover:bg-[#cca43b] text-gray-400 hover:text-[#072a20] p-2.5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer shadow flex items-center gap-1"
            title="Scroll ke Atas"
          >
            <span className="text-[10px] font-bold">KEMBALI KE ATAS</span>
            <ArrowUp size={12} />
          </button>

        </div>

      </div>
    </footer>
  );
}
