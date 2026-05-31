import React, { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b4534]/10 text-[#0b4534] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={14} className="text-[#cca43b]" />
            Sering Ditanyakan (FAQ)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#072a20] tracking-tight">
            Menjawab Keraguan <span className="text-[#cca43b]">Anda</span>
          </h2>
          <p className="text-sm text-[#5a655c] mt-3 font-light leading-relaxed">
            Sebelum memutuskan bermitra dengan kami, berikut adalah jawaban lengkap dari pertanyaan yang paling sering diajukan oleh pengurus DKM Masjid, donatur, maupun panitia sarana kantor.
          </p>
        </div>

        {/* Dynamic Accordions list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 text-left ${
                  isOpen
                    ? "bg-[#faf5e6]/45 border-[#cca43b] shadow-md shadow-[#cca43b]/5"
                    : "bg-[#fafbfc] border-gray-150 hover:bg-white hover:border-[#0b4534]/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#072a20] group-hover:text-[#0b4534] transition-colors leading-snug">
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 p-1 rounded-full ${isOpen ? "bg-[#0b4534] text-white" : "bg-gray-100 text-gray-400"}`}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Smooth Animated Collapsible panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-100 text-xs sm:text-sm text-[#5a655c] leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions tag */}
        <div className="mt-14 p-6 bg-[#fafbfc] border border-gray-150 rounded-2xl text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-sm text-[#072a20]">Pertanyaan Anda Belum Terjawab?</h4>
            <p className="text-xs text-[#5a655c] mt-0.5 font-light">Konsultan teknis kami siap memandu Anda selaik-laiknya chat ramah sahabat.</p>
          </div>
          <a
            href="https://wa.me/628121234567?text=Halo%20Furqona%20Karpet%20Bekasi,%20saya%20punya%20pertanyaan%20mengenai%20instalasi/produk%20berikut..."
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-[#25d366] hover:bg-[#20ba5a] text-white py-2.5 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
          >
            <MessageSquare size={14} />
            <span>Tanya Via WA</span>
          </a>
        </div>

      </div>
    </section>
  );
}
