import React, { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { Shield, Sparkles, Sliders, Box, Layers, ArrowRight, MessageSquare, Heart, Info } from "lucide-react";
import { motion } from "motion/react";

interface ProductsProps {
  onProductSelect: (gradeName: string) => void;
  onWAContactClick: (message?: string) => void;
}

export default function Products({ onProductSelect, onWAContactClick }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<"all" | "mosque" | "office">("all");
  const [selectedSpecProduct, setSelectedSpecProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "mosque") return p.id !== "karpet-kantor-modular";
    if (activeTab === "office") return p.id === "karpet-kantor-modular";
    return true;
  });

  const handleOrderRedirect = (product: Product) => {
    // Scroll to the budget calculator section
    onProductSelect(product.grade);
    const element = document.getElementById("booking-calculator");
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-[#fafbfc] relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cca43b]/10 text-[#072a20] text-xs font-bold uppercase tracking-wider mb-4 border border-[#cca43b]/30">
            <Sparkles size={14} className="text-[#cca43b]" />
            Koleksi Produk Terbaik Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#072a20] tracking-tight">
            Pilihan Benang Rajut & Serat <span className="text-[#0b4534]">Eksklusif</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5a655c] mt-4 font-light leading-relaxed">
            Dari Karpet Turki super plush setebal 18mm hingga Karpet Tile modular tahan banting untuk koridor, kami hanya menggunakan material orisinal bergaransi pabrik resmi.
          </p>

          {/* Navigation Category Tabs */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex p-1.5 bg-[#0b4534]/10 rounded-xl border border-[#0b4534]/10">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 rounded-lg font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#0b4534] text-[#f4dfa2] shadow-md"
                    : "text-[#072a20] hover:text-[#0b4534]"
                }`}
              >
                Semua Produk
              </button>
              <button
                onClick={() => setActiveTab("mosque")}
                className={`px-5 py-2.5 rounded-lg font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === "mosque"
                    ? "bg-[#0b4534] text-[#f4dfa2] shadow-md"
                    : "text-[#072a20] hover:text-[#0b4534]"
                }`}
              >
                Karpet Masjid & Sajadah
              </button>
              <button
                onClick={() => setActiveTab("office")}
                className={`px-5 py-2.5 rounded-lg font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === "office"
                    ? "bg-[#0b4534] text-[#f4dfa2] shadow-md"
                    : "text-[#072a20] hover:text-[#0b4534]"
                }`}
              >
                Karpet Kantor & Komersial
              </button>
            </div>
          </div>
        </div>

        {/* Products Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-150 transition-all duration-300 flex flex-col h-full group hover:shadow-2xl hover:border-[#cca43b]/30 hover:-translate-y-1"
            >
              
              {/* Product Visual wrapper */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Accent Ribbon or badge */}
                {product.accentText && (
                  <div className="absolute top-4 left-4 bg-[#0b4534] text-white backdrop-blur-md font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-[#cca43b]/30 shadow-md">
                    {product.accentText}
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-white/95 text-[#072a20] p-1.5 rounded-full shadow hover:text-red-500 transition-colors cursor-pointer">
                  <Heart size={14} className="fill-transparent hover:fill-red-500 transition-colors" />
                </div>

                {/* Grade display glass element */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-[#f4dfa2] backdrop-blur-sm text-xs font-bold font-heading px-3 py-1 rounded-md border border-white/10 uppercase tracking-widest">
                  {product.grade}
                </div>
              </div>

              {/* Product Info Block */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#072a20] group-hover:text-[#0b4534] transition-colors leading-tight mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#5a655c] font-light leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Core specifications parameters */}
                  <div className="bg-[#fafbfc] rounded-xl p-4 mb-5 border border-gray-100 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-medium">Ketebalan:</span>
                      <span className="text-[#072a20] font-semibold">{product.thickness}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-medium">Rapat Rajutan:</span>
                      <span className="text-[#072a20] font-semibold">{product.density}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-medium">Asal Produksi:</span>
                      <span className="text-[#072a20] font-semibold">{product.origin}</span>
                    </div>
                    {product.priceEstimate && (
                      <div className="flex items-center justify-between pt-1.5 border-t border-dashed border-gray-200">
                        <span className="text-gray-500 font-bold">Estimasi Acuan:</span>
                        <span className="text-[#0b4534] font-extrabold text-sm font-heading">{product.priceEstimate}</span>
                      </div>
                    )}
                  </div>

                  {/* Features Bullets List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Fitur Utama:</span>
                    {product.features.map((feat, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-[#1a1c20] font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cca43b] mt-1.5 shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Block */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedSpecProduct(product)}
                    className="flex items-center justify-center gap-1 border border-gray-200 text-gray-600 hover:text-[#0b4534] hover:bg-gray-50 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                  >
                    <Info size={14} />
                    <span>Lihat Spesifikasi</span>
                  </button>
                  
                  <button
                    onClick={() => handleOrderRedirect(product)}
                    className="flex items-center justify-center gap-1 bg-[#0b4534] hover:bg-[#166e53] text-[#f4dfa2] py-2.5 rounded-xl text-xs font-heading font-medium tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>PILIH PRODUK</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Middle trust CTA */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#0b4534] to-[#072a20] text-white rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-[#cca43b]/40 shadow-xl">
          <div className="text-left">
            <h4 className="font-heading font-bold text-lg text-[#f4dfa2]">Butuh Custom Desain, Sajadah Berlogo Yayasan, atau Corak Masjid Khusus?</h4>
            <p className="text-xs text-white/80 mt-1 font-light max-w-xl">Kami terafiliasi dengan diler penenun modern Turki & lokal untuk mewujudkan motif kustom berlogo masjid Anda untuk minimal pemesanan tertentu.</p>
          </div>
          <button
            onClick={() => onWAContactClick("Halo Furqona Karpet, saya ingin berkonsultasi mengenai pembuatan karpet masjid custom motif / berlogo yayasan.")}
            className="whitespace-nowrap bg-[#25d366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl text-sm font-bold tracking-wide flex items-center gap-2 transition-all cursor-pointer hover:shadow-lg hover:shadow-[#25d366]/20"
          >
            <MessageSquare size={16} />
            <span>Chat Desainer Kami</span>
          </button>
        </div>

      </div>

      {/* Product Specification Modal */}
      {selectedSpecProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 text-left">
            <div className="bg-[#0b4534] p-6 text-white relative">
              <span className="text-[10px] bg-[#cca43b] text-[#072a20] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                {selectedSpecProduct.grade} SPECIFICATION
              </span>
              <h3 className="font-heading font-bold text-xl text-[#f4dfa2]">
                {selectedSpecProduct.name}
              </h3>
              <p className="text-xs text-white/70 mt-1">Sertifikasi & Detail Teknis Internasional</p>
              <button
                onClick={() => setSelectedSpecProduct(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 transition-transform cursor-pointer font-bold text-lg"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-y-3 py-2 border-b border-gray-100">
                <span className="text-gray-400">Asal Barang</span>
                <span className="text-[#072a20] font-semibold text-right">{selectedSpecProduct.origin}</span>
                
                <span className="text-gray-400">Ketebalan Sempurna</span>
                <span className="text-[#072a20] font-semibold text-right">{selectedSpecProduct.thickness}</span>
                
                <span className="text-gray-400">Total Density Kerapatan</span>
                <span className="text-[#072a20] font-semibold text-right">{selectedSpecProduct.density}</span>
                
                <span className="text-gray-400">Bahan Baku Utama</span>
                <span className="text-[#072a20] font-semibold text-right">
                  {selectedSpecProduct.id.includes("turki") ? "100% Acrylic Heatset Soft Wool-feel" : "Premium Anti-Static Polyethylene"}
                </span>

                <span className="text-gray-400">Sifat Karakteristik</span>
                <span className="text-green-700 font-semibold text-right">Anti-Bacterial, Odor-free, Fire-Retardant</span>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-2">Standar Pengujian:</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <span className="text-gray-400 block font-semibold text-[10px]">ISO 9001 TESTED</span>
                    <span className="text-[#072a20] font-semibold">Tunas Kontrol Mutu</span>
                  </div>
                  <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <span className="text-gray-400 block font-semibold text-[10px]">Oeko-Tex Standard</span>
                    <span className="text-[#072a20] font-semibold">Bebas Bahan Alergen</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf5e6] p-4 rounded-xl border border-[#cca43b]/20 flex items-start gap-3">
                <div className="text-lg">📢</div>
                <p className="text-xs text-[#6e5820] leading-relaxed">
                  <strong>Rekomendasi DKM:</strong> Sangat disarankan melakukan survey fisik. Kontak admin untuk memboyong karung sampel langsung ke alamat Anda gratis hari ini demi pembuktian teoretis di atas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setSelectedSpecProduct(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-all text-xs text-center cursor-pointer"
                >
                  Tutup Spesifikasi
                </button>
                <a
                  href={`https://wa.me/628121234567?text=Halo%20Furqona%20Karpet,%20saya%20ingin%20tanya%20detail%20mengenai%20produk%20${encodeURIComponent(selectedSpecProduct.name)}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-xs cursor-pointer shadow shadow-[#25d366]/20"
                >
                  <MessageSquare size={14} />
                  <span>Chat Pembelian WA</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
