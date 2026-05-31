import React, { useState, useEffect } from "react";
import { 
  MessageSquare, 
  Calculator, 
  Calendar, 
  MapPin, 
  Check, 
  Sparkles, 
  User, 
  Phone, 
  Hourglass,
  BadgePercent,
  TrendingUp,
  Flame
} from "lucide-react";
import { motion } from "motion/react";

interface WhatsAppConversionProps {
  selectedGrade: string;
}

export default function WhatsAppConversion({ selectedGrade }: WhatsAppConversionProps) {
  // Calculator states
  const [roomType, setRoomType] = useState<"masjid" | "office">("masjid");
  const [chosenGrade, setChosenGrade] = useState<string>("Grade A");
  const [lengthVal, setLengthVal] = useState<number>(10);
  const [widthVal, setWidthVal] = useState<number>(6);
  
  // User input states
  const [fullName, setFullName] = useState<string>("");
  const [waNumber, setWaNumber] = useState<string>("");
  const [region, setRegion] = useState<string>("Bekasi");

  // Prices multipliers map per meter or sqm
  const PRICES_MAP: Record<string, { price: number; type: "meter" | "sqm" }> = {
    "Grade A": { price: 500000, type: "meter" },
    "Grade B": { price: 360000, type: "meter" },
    "Grade C": { price: 220000, type: "meter" },
    "Grade Luxury": { price: 820000, type: "meter" },
    "Office Series": { price: 250000, type: "sqm" }
  };

  // Synchronize dynamic updates when user selects a product on top
  useEffect(() => {
    if (selectedGrade) {
      setChosenGrade(selectedGrade);
      if (selectedGrade === "Office Series") {
        setRoomType("office");
      } else {
        setRoomType("masjid");
      }
    }
  }, [selectedGrade]);

  // Calculate parameters
  let totalMeter = 0;
  let calculationBreakdown = "";

  if (roomType === "masjid") {
    // Sajadah carpet width is standard 1.2m
    // Lines of saf required = Width / 1.2, rounded up
    const safCount = Math.ceil(widthVal / 1.2);
    totalMeter = safCount * lengthVal;
    calculationBreakdown = `Butuh ${safCount} saf (shaf) baris x ${lengthVal} meter = ${totalMeter} meter lari.`;
  } else {
    // Office carpets are computed per sqm
    totalMeter = lengthVal * widthVal;
    calculationBreakdown = `${lengthVal}m x ${widthVal}m = ${totalMeter} meter persegi (sqm).`;
  }

  const selectedSpec = PRICES_MAP[chosenGrade] || { price: 360000, type: "meter" };
  const estimatedCost = totalMeter * selectedSpec.price;

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) {
      alert("Mohon isi Nama Lengkap Anda terlebih dahulu.");
      return;
    }

    const costStr = formatRupiah(estimatedCost);
    const unitStr = selectedSpec.type === "meter" ? "meter lari sajabah" : "meter persegi";
    
    // Formatting WhatsApp Message beautifully with AIDA / pas style
    const message = `Halo Furqona Karpet Bekasi! 

Saya ingin membuat janji survey gratis sekaligus meminta penawaran resmi untuk rincian berikut:
- Nama Lengkap: ${fullName}
- Lokasi Kunjungan: ${region}
- Kontak WhatsApp: ${waNumber || "Terlampir"}
- Kategori Ruangan: ${roomType === "masjid" ? "Rumah Ibadah (Masjid / Mushola)" : "Ruang Kantor / Komersial"}
- Pilihan Karpet: ${chosenGrade}
- Dimensi Ruangan: ${lengthVal} meter x ${widthVal} meter
- Estimasi Kebutuhan: ${totalMeter} ${unitStr}
- Rincian Saf: ${calculationBreakdown}
- Estimasi Kasar Budget: ~ ${costStr}

Mohon konfirmasi jadwal kunjungan surveyor dengan membawa karung sampel fisik grade karpet tersebut ya min. Terima kasih!`;

    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/628121234567?text=${encodedText}`;
    window.open(waUrl, "_blank", "noreferrer,noopener");
  };

  return (
    <section id="booking-calculator" className="py-20 md:py-28 bg-[#072a20] text-white relative overflow-hidden">
      {/* Background graphic nodes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[30%] w-[600px] h-[600px] rounded-full bg-[#cca43b] filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Side - Left Column 7 */}
          <div className="lg:col-span-7 bg-white text-gray-800 p-6 sm:p-10 rounded-3xl shadow-2xl relative border border-white/10">
            
            {/* Title / Header of card */}
            <div className="text-left border-b border-gray-100 pb-5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b4534]/10 text-[#0b4534] text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator size={14} className="text-[#cca43b]" />
                Interactive Estimator & Surveyor Booking
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#072a20]">
                Kalkulator Estimasi Biaya & Booking Survey
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                Gonta-ganti ukuran ruang untuk menghitung kasaran budget instan, lalu jadwalkan kunjungan tim pengukur sampel.
              </p>
            </div>

            {/* Custom Interactive Form */}
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Type Category selection */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2.5">1. Pilih Kategori Ruangan</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setRoomType("masjid");
                      setChosenGrade("Grade A");
                    }}
                    className={`py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      roomType === "masjid"
                        ? "bg-[#0b4534] text-white border-2 border-[#cca43b] shadow-md"
                        : "bg-gray-50 text-gray-500 border border-gray-150 hover:bg-gray-100"
                    }`}
                  >
                    🕌 MASJID / MUSHOLA
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRoomType("office");
                      setChosenGrade("Office Series");
                    }}
                    className={`py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      roomType === "office"
                        ? "bg-[#0b4534] text-white border-2 border-[#cca43b] shadow-md"
                        : "bg-gray-50 text-gray-500 border border-gray-150 hover:bg-gray-100"
                    }`}
                  >
                    🏢 KANTOR / GEDUNG
                  </button>
                </div>
              </div>

              {/* Grade selections tabbed options */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2.5">2. Pilih Kualitas / Grade Karpet</label>
                <div className="flex flex-wrap gap-2">
                  {roomType === "masjid" ? (
                    <>
                      {["Grade A", "Grade B", "Grade C", "Grade Luxury"].map((grade) => (
                        <button
                          key={grade}
                          type="button"
                          onClick={() => setChosenGrade(grade)}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider border cursor-pointer transition-all ${
                            chosenGrade === grade
                              ? "bg-[#cca43b] text-[#072a20] border-[#072a20] font-bold"
                              : "bg-gray-50 text-gray-600 border-gray-150 hover:bg-gray-100"
                          }`}
                        >
                          {grade === "Grade Luxury" ? "Turki Premium" : grade}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      type="button"
                      className="py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#cca43b] text-[#072a20] border border-[#072a20]"
                    >
                      Office Carpet Series (Modular Tile)
                    </button>
                  )}
                </div>
              </div>

              {/* Room Dimensions details range input */}
              <div className="bg-[#fafbfc] p-5 rounded-2xl border border-gray-100 space-y-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">3. Atur Dimensi Ruang (Meter)</span>
                
                {/* Length Range */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#072a20]">Panjang Ruangan:</span>
                    <span className="font-bold font-heading text-[#0b4534] bg-[#0b4534]/15 px-2 py-0.5 rounded-md">{lengthVal} Meter</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="150"
                    value={lengthVal}
                    onChange={(e) => setLengthVal(parseInt(e.target.value))}
                    className="w-full accent-[#0b4534] h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Width Range */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-[#072a20]">Lebar Ruangan:</span>
                    <span className="font-bold font-heading text-[#0b4534] bg-[#0b4534]/15 px-2 py-0.5 rounded-md">{widthVal} Meter</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step={0.5}
                    value={widthVal}
                    onChange={(e) => setWidthVal(parseFloat(e.target.value))}
                    className="w-full accent-[#0b4534] h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Calculation dynamic feedback output info */}
                <div className="border-t border-dashed border-gray-200 pt-3.5 flex items-center justify-between text-xs text-gray-500 font-light">
                  <span className="font-medium text-gray-400 uppercase tracking-widest text-[10px]">Laporan Pemetaan:</span>
                  <span className="font-semibold text-[#072a20]">{calculationBreakdown}</span>
                </div>
              </div>

              {/* Price estimation dashboard panel (Instant updating feedback) */}
              <div className="bg-gradient-to-r from-[#0b4534] to-[#072a20] p-5 rounded-2xl text-white border border-[#cca43b]/20 relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:scale-110 transition-transform">
                  <Calculator size={140} />
                </div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-left space-y-1">
                    <span className="text-[10px] sm:text-xs text-[#cca43b] font-bold tracking-widest uppercase flex items-center gap-1">
                      <Flame size={12} className="text-[#cca43b] animate-bounce" /> Estimasi Kasaran Anggaran (RAB)
                    </span>
                    <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none mt-1">
                      {formatRupiah(estimatedCost)}
                    </h4>
                  </div>
                  <div className="bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10 text-[10px] text-white/90 font-light self-start sm:self-center leading-normal">
                    *Tergantung pilar pilar melingkar & tingkat kesulitan potong obras
                  </div>
                </div>
              </div>

              {/* User credentials details */}
              <div className="space-y-4 pt-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">4. Data Kontak Anda (Untuk Verifikasi Logistik)</label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="Nama Lengkap Anda..."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-250 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b4534] focus:border-transparent"
                    />
                  </div>

                  {/* WhatsApp phone Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      placeholder="No WhatsApp (Aktif)..."
                      value={waNumber}
                      onChange={(e) => setWaNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-250 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b4534] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Region Select dropdown */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <MapPin size={16} />
                  </div>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-250 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0b4534] focus:border-transparent appearance-none"
                  >
                    {["Bekasi", "Jakarta", "Cikarang", "Karawang", "Tangerang", "Depok", "Bogor", "Luar Kota Lain"].map((reg) => (
                      <option key={reg} value={reg}>Area Kunjungan: {reg}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit CTA WhatsApp button */}
              <button
                type="submit"
                className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl font-heading font-extrabold text-base tracking-wider transition-all duration-300 transform active:scale-[0.99] flex items-center justify-center gap-3 shadow-xl shadow-[#25d366]/20 mt-4 cursor-pointer"
              >
                <MessageSquare className="animate-pulse" size={20} />
                <span>KIRIM DATA & KLAIM SURVEY GRATIS</span>
              </button>

            </form>
          </div>

          {/* Copy / Marketing Urgency column - Right Column 5 */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cca43b]/10 text-[#cca43b] text-xs font-bold uppercase tracking-wider">
                <Flame size={14} className="text-[#cca43b]" /> Urgent: Kuota Terbatas!
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Siap Membuat Masjid Atau Kantor Anda Lebih Nyaman?
              </h2>
              
              <p className="text-base text-white/80 font-light leading-relaxed">
                Konsultasikan kebutuhan karpet Anda sekarang juga. Tim kami siap meluncur membawa segudang katalog sampel fisik tebal langsung ke hadapan rapat pengurus masjid/kantor Anda tanpa ada pungutan biaya sepeser pun.
              </p>

              {/* Urgent banner widget */}
              <div className="bg-red-500/10 p-5 rounded-2xl border border-red-500/30 text-xs sm:text-sm text-red-300 flex items-start gap-3 mt-4">
                <Hourglass className="text-[#cca43b] shrink-0 mt-0.5 animate-spin" size={18} />
                <div>
                  <strong>🔥 Urgent Slot Survey Hari Ini Tersisa 2 Kuota!</strong>
                  <p className="font-light text-white/70 mt-1 leading-normal text-xs">Karena tingginya permintaan renovasi karpet masjid menjelang musim ibadah baru, silakan book jadwal kunjungan Anda siang ini melalui kalkulator di samping demi mengunci slot gratis.</p>
                </div>
              </div>
            </div>

            {/* List of core assurances */}
            <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Jaminan Layanan Furqona:</span>
              
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="p-1 rounded-full bg-green-500/20 text-green-400 mt-0.5 shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <strong>Suku Bunga & Harga Bersalaman Jujur</strong>
                  <p className="text-xs text-white/70 font-light mt-0.5">Penawaran harga tertulis (RAB) mengikat tanpa tambahan rincian tak terduga.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="p-1 rounded-full bg-green-500/20 text-green-400 mt-0.5 shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <strong>Pemasangan Rapih Se-Milimeter</strong>
                  <p className="text-xs text-white/70 font-light mt-0.5">Potongan tepi mengitari tiang diselesaikan menggunakan teknik rajut obras anti-urai.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="p-1 rounded-full bg-green-500/20 text-green-400 mt-0.5 shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <strong>Layanan Purna Jual Respon Kilat</strong>
                  <p className="text-xs text-white/70 font-light mt-0.5">Kami berikan garansi perbaikan penuh selama satu tahun semenjak berita acara ditandatangani.</p>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-white/50 leading-relaxed font-light">
              Menekan tombol kirim di samping akan langsung memformat draft pesan text rapi di aplikasi WhatsApp Anda. Kami menjaga privasi kontak Anda 100% aman untuk kebutuhan estimasi logistik internal.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
