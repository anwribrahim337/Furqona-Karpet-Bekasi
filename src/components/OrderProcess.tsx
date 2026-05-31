import React, { useState } from "react";
import { PROCESS_STEPS } from "../data";
import { 
  MessageSquare, 
  Ruler, 
  Layers, 
  FileCheck, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { motion } from "motion/react";

export default function OrderProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (stepNum: number, colorClass: string) => {
    switch (stepNum) {
      case 1:
        return <MessageSquare className={colorClass} size={24} />;
      case 2:
        return <Ruler className={colorClass} size={24} />;
      case 3:
        return <Layers className={colorClass} size={24} />;
      case 4:
        return <FileCheck className={colorClass} size={24} />;
      case 5:
        return <Sparkles className={colorClass} size={24} />;
      case 6:
      default:
        return <ShieldCheck className={colorClass} size={24} />;
    }
  };

  // Add the 6th step or customize PROCESS_STEPS
  const STEPS_6 = [
    {
      step: 1,
      title: "Konsultasi WhatsApp Cepat",
      description: "Diskusikan denah kasar ruangan, grade sajadah yang diincar, serta estimasi budget awal dengan CS kami.",
      details: "WhatsApp kami aktif 24 jam melayani kepengurusan DKM. Beritahu kami kebutuhan Anda, dan dapatkan taksiran biaya kasar dalam hitungan menit tanpa ribet."
    },
    {
      step: 2,
      title: "Survey Lokasi Gratis",
      description: "Teknisi handal kami meluncur ke alamat Anda untuk memetakan lekuk pilar & saf kiblat secara akurat.",
      details: "Tinggal setel tanggal! Tim surveyor datang memboyong laser distance meter agar hitungan meter lari karpet tidak ada manipulasi, 100% transparan."
    },
    {
      step: 3,
      title: "Pemilihan Produk Langsung",
      description: "Bandingkan langsung ketebalan, kelembutan, dan pola rajutan berbagai sampel karpet di lokasi Anda.",
      details: "Kami membawakan potongan rol sampel (Grade A, B, C, & Turki) agar donatur atau DKM pengurus dapat memegang langsung kualitas rajutan dan teksturnya."
    },
    {
      step: 4,
      title: "Penawaran Harga Resmi (RAB)",
      description: "Kami susun proposal estimasi anggaran terperinci berstempel legalitas resmi tanpa biaya siluman.",
      details: "DKM akan menerima file PDF formal yang mencakup rincian harga per roll/meter, upah obras keliling, dan rincian fitting pilar demi mempermudah transparansi rapat pengurus."
    },
    {
      step: 5,
      title: "Pemasangan Profesional",
      description: "Karpet dibentangkan, dipotong meliuk sesuai pilar di tempat, lalu dirajut obras instan rapi.",
      details: "Sajadah masjid mengikuti saf lengkung sejajar kiblat. Teknisi kami membawa mesin obras portable dan obeng khusus, merapikan saf utama rapi layaknya tanpa sekat."
    },
    {
      step: 6,
      title: "Selesai & Serah Terima Garansi",
      description: "Pembersihan total residu sisa benang menggunakan vakum, diakhiri penyerahan sertifikat garansi resmi.",
      details: "Sebelum tim pamit, karpet divacum industrial dan disemprot pewangi aroma segar khas Timur Tengah. Garansi reparasi obras bergelombang meliputi 1 tahun penuh."
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#fafbfc] relative overflow-hidden border-b border-gray-100">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b4534]/10 text-[#0b4534] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b]"></span>
            Langkah Transaksi Praktis & Cepat
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#072a20] tracking-tight">
            Bagaimana Kami Melayani <span className="text-[#cca43b]">Proyek Anda?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5a655c] mt-4 font-light leading-relaxed">
            Tidak ada pembelian kucing dalam karung. Setiap milimeter diukur dengan laser presisi, disetujui bersama, dan dipasang oleh teknisi berdedikasi tinggi.
          </p>
        </div>

        {/* Desktop Step Stepper Grid (Horizontal progress line) */}
        <div className="hidden lg:grid grid-cols-6 gap-6 relative mb-12">
          {/* Animated Connecting Line */}
          <div className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-gray-200 z-0">
            <div 
              className="h-full bg-gradient-to-r from-[#0b4534] via-[#cca43b] to-[#166e53] transition-all duration-500"
              style={{ width: `${((activeStep - 1) / 5) * 100}%` }}
            ></div>
          </div>

          {STEPS_6.map((item) => {
            const isCompleted = item.step < activeStep;
            const isActive = item.step === activeStep;
            return (
              <div 
                key={item.step} 
                className="flex flex-col items-center text-center relative z-10 cursor-pointer group"
                onClick={() => setActiveStep(item.step)}
              >
                {/* Stepper Orb */}
                <div 
                  className={`w-18 h-18 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActive 
                      ? "bg-[#0b4534] text-[#f4dfa2] ring-4 ring-[#cca43b]/40 scale-110" 
                      : isCompleted 
                        ? "bg-[#cca43b] text-[#072a20]" 
                        : "bg-white text-gray-400 border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {getStepIcon(item.step, isActive ? "text-[#f4dfa2]" : isCompleted ? "text-[#072a20]" : "text-gray-400")}
                </div>

                {/* Stepper badge number */}
                <div className={`mt-3.5 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-all ${
                  isActive ? "bg-[#cca43b] text-[#072a20]" : "bg-gray-100 text-[#5a655c]"
                }`}>
                  LANGKAH 0{item.step}
                </div>

                {/* Steps Mini summary */}
                <h3 className={`mt-3 font-heading font-bold text-sm leading-tight transition-all uppercase tracking-tight duration-300 ${
                  isActive ? "text-[#0b4534]" : "text-gray-500 hover:text-gray-700"
                }`}>
                  {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Detailed progressive informational block for Desktop step */}
        <div className="hidden lg:block bg-white p-8 rounded-2xl border border-gray-150 max-w-4xl mx-auto shadow-lg text-left">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            <div className="col-span-1 flex justify-center text-[#cca43b] font-heading font-extrabold text-5xl">
              0{activeStep}
            </div>
            
            <div className="col-span-8 space-y-2">
              <h4 className="font-heading font-extrabold text-xl text-[#072a20] flex items-center gap-2">
                <span>{STEPS_6[activeStep - 1].title}</span>
                <span className="text-xs font-semibold bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full uppercase">Aktif di Penjelasan</span>
              </h4>
              <p className="text-sm font-semibold text-[#0b4534] italic font-sans">
                "{STEPS_6[activeStep - 1].description}"
              </p>
              <p className="text-xs text-[#5a655c] leading-relaxed font-light mt-2">
                {STEPS_6[activeStep - 1].details}
              </p>
            </div>

            <div className="col-span-3 flex flex-col gap-2 justify-center items-stretch pl-4 border-l border-gray-150">
              <a
                href="https://wa.me/628121234567?text=Halo%20Furqona%20Karpet,%20saya%20sudah%20membaca%20proses%20pemesanan%20dan%20tertarik%20melangkah%20ke%20tahap%20survey/konsultasi."
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-[#25d366] hover:bg-[#20ba5a] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 shadow-sm"
              >
                <MessageSquare size={14} />
                <span>Mulai Sekarang</span>
              </a>
              <button
                onClick={() => setActiveStep(activeStep < 6 ? activeStep + 1 : 1)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>Tahap Berikutnya</span>
                <ArrowRight size={12} />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile progressive collapsible list (Fully mobile responsive) */}
        <div className="lg:hidden space-y-4">
          {STEPS_6.map((item) => {
            const isOpen = activeStep === item.step;
            return (
              <div 
                key={item.step}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm text-left transition-all"
              >
                <button
                  onClick={() => setActiveStep(isOpen ? 0 : item.step)}
                  className="w-full p-5 flex items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                      isOpen ? "bg-[#0b4534] text-[#f4dfa2]" : "bg-gray-100 text-gray-500"
                    }`}>
                      {getStepIcon(item.step, isOpen ? "text-[#f4dfa2]" : "text-gray-500")}
                    </div>
                    <div>
                      <span className="text-[10px] text-[#cca43b] font-bold block leading-none uppercase tracking-widest mb-1">LANGKAH 0{item.step}</span>
                      <h3 className="font-heading font-bold text-base text-[#072a20] leading-tight">{item.title}</h3>
                    </div>
                  </div>
                  <div>
                    {isOpen ? <ChevronDown size={20} className="text-[#0b4534] rotate-180 transition-transform duration-300" /> : <ChevronRight size={20} className="text-gray-400" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 border-t border-gray-50 bg-gray-50/50 space-y-4">
                    <p className="text-xs font-semibold text-[#0b4534] italic font-sans leading-relaxed">
                      "{item.description}"
                    </p>
                    <p className="text-xs text-[#5a655c] leading-relaxed font-light">
                      {item.details}
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/628121234567?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20tertarik%20memulai%20langkah%20${item.step}%20yaitu%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-2 bg-[#25d366] text-white py-3 px-5 rounded-xl font-bold text-xs shadow-md"
                      >
                        <MessageSquare size={14} />
                        <span>KONSULTASIKAN LANGKAH INI</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
