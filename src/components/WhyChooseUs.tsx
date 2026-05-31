import React from "react";
import { Check, ShieldCheck, Award, ThumbsUp, HeartHandshake, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Ribuan Meter Karpet Terpasang",
      desc: "Reputasi tepercaya di ratusan masjid besar (DKM) dan perkantoran elit di Bekasi, Jabodetabek, hingga pulau terjauh di luar Jawa."
    },
    {
      title: "Tim Profesional & Berpengalaman",
      desc: "Bukan buruh lepas borongan. Teknisi kami adalah karyawan tetap spesialis potong-sulam, jahit obras sajadah berpilar."
    },
    {
      title: "Layanan Survey & Sampel Gratis",
      desc: "Tidak perlu membeli kucing dalam karung. Pegang bahan, rasakan teksturnya langsung di masjid Anda sebelum mengajukan RAB."
    },
    {
      title: "Pilihan Corak & Motif Terlengkap",
      desc: "Tersedia motif pilar tradisional mewah, saf minimalis modern, hingga custom logo bergaransi keaslian Turki import."
    },
    {
      title: "Skema Harga Sangat Kompetitif",
      desc: "Harga transparan pabrikan tangan pertama karena kami adalah distributor utama (direct supplier), memotong biaya perantara."
    },
    {
      title: "Tanggapan WhatsApp Super Cepat",
      desc: "CS responsif ramah tak perlu menanti lama. Rapat pengurus atau donatur butuh penawaran malam ini? Kami layani segera."
    },
    {
      title: "Pengiriman Luas Seluruh Indonesia",
      desc: "Bekerjasama dengan ekspedisi cargo laut, udara, dan darat murah bergaransi asuransi keamanan packing 100% kedap air."
    },
    {
      title: "Layanan Purna Jual & Support After Sales",
      desc: "Ada kerutan akibat pilar bergeser dalam setahun? Hubungi kami, tim kami meluncur merapikan ulang gratis."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0b4534] text-white relative">
      {/* Subtle Islamic lattice graphic background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#cca43b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header & Metrics copy side */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#f4dfa2] text-xs font-bold uppercase tracking-wider">
              <Award size={14} className="text-[#cca43b]" />
              Komitmen Kredibilitas Furqona
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-[1.1]">
              Penyedia Karpet Masjid Terbaik di <span className="text-[#cca43b]">Bekasi & Jabodetabek</span>
            </h2>
            
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              Furqona Karpet berdiri untuk mengemban misi kemaslahatan umat. Kami berkomitmen menyediakan sajadah import Turki tebal dan karpet tile komersial dengan penawaran paling jujur, presisi, tanpa biaya tersembunyi.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-[#cca43b] shrink-0 mt-0.5">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#f4dfa2]">Legalitas Resmi & Terpercaya</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">Perusahaan berbadan hukum resmi, siap menyediakan invoice, faktur pajak PPN untuk yayasan maupun instansi negara.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-[#cca43b] shrink-0 mt-0.5">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#f4dfa2]">Diskon Khusus DKM & Donatur</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">Diskon khusus kuantitas potongan harga untuk masjid di pelosok desa demi pemerataan kenyamanan ibadah se-Nusantara.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core points grid display (Right side) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => (
              <div 
                key={idx}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#cca43b]/40 hover:bg-white/10 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#cca43b]/20 flex items-center justify-center border border-[#cca43b]/40 shrink-0">
                    <Check className="text-[#cca43b]" size={12} />
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#f4dfa2] tracking-tight leading-snug">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-xs text-white/75 leading-relaxed font-light font-sans">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
