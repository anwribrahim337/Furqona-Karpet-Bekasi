import { Product, Project, Testimonial, FAQItem, ProcessStep, FeatureItem } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "masjid-grade-a",
    name: "Karpet Masjid Grade A (Super Premium)",
    grade: "Grade A",
    description: "Pilihan terbaik untuk keindahan optimal dan kenyamanan ibadah jamaah secara jangka panjang. Sangat tebal, padat, dan halus di kulit.",
    thickness: "14mm - 16mm",
    density: "Tinggi (950.000 point/sqm)",
    origin: "Turki (Sajadah Tebal)",
    priceEstimate: "Rp 450.000 - Rp 650.000 / Meter",
    features: [
      "Serat benang super padat (tidak mudah kempes)",
      "Bulu lembut anti-alergi dan sangat nyaman di dahi",
      "Pilihan motif pilar / saf minimalis modern terupdate",
      "Garansi ketahanan warna hingga 10 tahun"
    ],
    image: "/src/assets/images/mosque_carpet_hero_1780192984090.png",
    accentText: "Best Seller - Terlaris untuk Masjid Agung"
  },
  {
    id: "masjid-grade-b",
    name: "Karpet Masjid Grade B (Eksklusif Standar)",
    grade: "Grade B",
    description: "Kombinasi sempurna antara estetika premium dan anggaran efisien. Banyak dipilih oleh DKM Masjid Perumahan dan Mushola Perkantoran.",
    thickness: "11mm - 13mm",
    density: "Sedang-Tinggi (750.000 point/sqm)",
    origin: "Lokal Premium & Turki Standar",
    priceEstimate: "Rp 300.000 - Rp 420.000 / Meter",
    features: [
      "Sangat empuk untuk ruku dan sujud jamaah",
      "Mudah dibersihkan dan divacum sehari-hari",
      "Pilihan warna hijau emerald dan merah sajadah",
      "Tepian dirajut rapi (obras presisi)"
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    accentText: "Paling Populer di Jabodetabek"
  },
  {
    id: "masjid-grade-c",
    name: "Karpet Masjid Grade C (Hemat & Nyaman)",
    grade: "Grade C",
    description: "Solusi ekonomis berkualitas tanpa mengorbankan kenyamanan ibadah dasar. Sangat cocok untuk Mushola instansi, renovasi darurat, atau donatur hemat.",
    thickness: "8mm - 10mm",
    density: "Standar (500.000 point/sqm)",
    origin: "Lokal High Quality",
    priceEstimate: "Rp 180.000 - Rp 280.000 / Meter",
    features: [
      "Harga sangat ekonomis & bersahabat",
      "Bahan sintetis awet mudah dibersihkan",
      "Praktis untuk dicuci berkala",
      "Ready stock partai besar siap pasang cepat"
    ],
    image: "https://images.unsplash.com/photo-1590076275577-26d4608c98db?auto=format&fit=crop&w=600&q=80",
    accentText: "Solusi Ekonomis & Cepat Saji"
  },
  {
    id: "turki-premium-import",
    name: "Karpet Turki Premium Import Eksklusif",
    grade: "Grade Luxury",
    description: "Karpet import langsung dari pabrik Turki terbaik dengan corak klasik timur tengah berwibawa atau baris modern yang mewah nan indah.",
    thickness: "16mm - 18mm (Ultra Tebal)",
    density: "Super Padat (1.200.000 point/sqm)",
    origin: "Turki Asli (Handcrafted feel)",
    priceEstimate: "Rp 700.000 - Rp 950.000 / Meter",
    features: [
      "Ketebalan maksimal layaknya kasur empuk",
      "Bahan Heatset Wool & Acrylic super halus",
      "Motif ukiran emas timbul 3D yang sangat agung",
      "Sertifikat keaslian dan jaminan mutu import"
    ],
    image: "/src/assets/images/turkish_carpet_detail_1780193019496.png",
    accentText: "Terbanyak Dipilih Donatur Khusus"
  },
  {
    id: "karpet-kantor-modular",
    name: "Karpet Kantor Premium (Tile & Roll Carpet)",
    grade: "Office Series",
    description: "Karpet modular khusus ruang perkantoran, koridor hotel, aula pertemuan, dan ruang direksi. Desain modern minimalis, tahan gesekan kursi roda.",
    thickness: "5mm - 8mm Loop Pile",
    density: "Heavy Duty Commercial Grade",
    origin: "Import & Lokal Komersial",
    priceEstimate: "Rp 150.000 - Rp 350.000 / sqm",
    features: [
      "Struktur Tile (50x50 cm) - sangat mudah diganti per lembar jika bernoda",
      "Tahan api (fire retardant) & peredam suara bising langkah kaki",
      "Alas karet (PVC backing) anti slip dan kelembapan lantai",
      "Motif elegan minimalis monokromatik untuk nuansa profesional"
    ],
    image: "/src/assets/images/office_carpet_showcase_1780193001759.png",
    accentText: "Instalasi Cepat, Minim Sisa Potongan"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Masjid Raya Al-Barkah (Masjid Agung)",
    category: "Masjid",
    location: "Bekasi Selatan, Bekasi",
    volume: "450 Meter (Custom Fit)",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
    description: "Pemasangan karpet Turki Premium 16mm dengan pilar saff melengkung mengikuti kiblat. Hasil akhir tanpa sambungan luar, super presisi."
  },
  {
    id: "proj-2",
    title: "Gedung Kantor BUMN Jabodetabek",
    category: "Kantor",
    location: "Cikarang Baru, Bekasi",
    volume: "1.200 meter persegi (Custom Tile)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
    description: "Penerapan karpet Tile modular herringbone dengan peredam akustik tingkat tinggi di 3 lantai divisi manajemen."
  },
  {
    id: "proj-3",
    title: "Masjid Jami' Baiturrahman",
    category: "Masjid",
    location: "Mustika Jaya, Bekasi",
    volume: "240 Meter (Sajadah Hijau)",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
    description: "Proyek revitalisasi sajadah saf masjid utama menggunakan Grade A tebal 15mm. Jamaah sangat antusias atas kelembutan bulunya."
  },
  {
    id: "proj-4",
    title: "Mushola Al-Ikhlas Grand Galaxy",
    category: "Mushola",
    location: "Galaxy, Bekasi",
    volume: "60 Meter",
    image: "https://images.unsplash.com/photo-1590076275577-26d4608c98db?auto=format&fit=crop&w=700&q=80",
    description: "Pemasangan karpet Grade B ekonomis di mushola perumahan elite, pengerjaan tuntas dalam 4 jam termasuk pemotongan pilar."
  },
  {
    id: "proj-5",
    title: "Amphi-Theatre Hotel & Conventions",
    category: "Hotel",
    location: "Jakarta Timur, DKI Jakarta",
    volume: "850 meter persegi (Roll Carpet Custom)",
    image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=700&q=80",
    description: "Pemasangan karpet ditenun mewah tahan aus tinggi di selasar hotel bintang empat dengan pola pendaran warna keemasan malam."
  },
  {
    id: "proj-6",
    title: "Aula Serbaguna Yayasan Pendidikan Islam",
    category: "Gedung",
    location: "Tambun Selatan, Bekasi",
    volume: "350 Meter",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
    description: "Instalasi karpet dinamis bergaris merah marun untuk aula wisuda, rapat pengurus yayasan, dan kajian guru besar."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ustadz H. Ahmad Syukron",
    role: "Ketua DKM & Imam Utama",
    organization: "Masjid Raya Baitussalam",
    location: "Bekasi Timur",
    quote: "Kami sangat bersyukur dipertemukan dengan Furqona Karpet. Pengerjaan saf masjid kami yang melengkung dan berpilar banyak dilakukan sangat rapi tanpa lipatan tebal. Layanan survey gratisnya sangat memudahkan kami membandingkan kualitas sampel langsung di masjid kami.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=clamp&w=120&h=120&q=80"
  },
  {
    id: "test-2",
    name: "Hendrayanto Soebagjo",
    role: "General Manager Ops",
    organization: "PT Sukses Karya Makmur",
    location: "Kawasan Industri MM2100",
    quote: "Untuk kebutuhan kantor, kami membutuhkan karpet tile yang tahan gesekan kursi kerja dan pengerjaan cepat di akhir pekan sempit agar tidak mengganggu operasional. Tim Furqona bekerja luar biasa cepat, presisi, bersih, dan harganya sangat bersahabat dibanding kontraktor interior lain.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=clamp&w=120&h=120&q=80"
  },
  {
    id: "test-3",
    name: "Ibu Hajah Wardah Alatas",
    role: "Dewan Donatur Khusus",
    organization: "Pondok Pesantren Daarul Huffadz",
    location: "Cikarang Utara",
    quote: "Sempat ragu membeli online untuk luar kota. Namun tim Furqona merespon cepat via WA, mengirimkan sampel potongan kecil ke pondok kami, lalu datang membawa tim pasang berpengalaman. Luar biasa rapi dan karpet Turki yang kami donasikan terasa sejuk dan empuk sekali.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=clamp&w=120&h=120&q=80"
  },
  {
    id: "test-4",
    name: "Bapak Teddy Irwan",
    role: "Kepala Pembangunan Sarana",
    organization: "Yayasan Islam Terpadu Al-Fath",
    location: "Mustika Jaya, Bekasi",
    quote: "Sangat puas dengan garansi yang diberikan. Ketika ada sudut karpet lepas karena kesenggol meja berat, mereka datang kembali memperbaiki tanpa biaya dalam 1x24 jam. Ini baru pelayanan purna jual bintang lima yang sesungguhnya!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=clamp&w=120&h=120&q=80"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "feat-survey",
    title: "Survey & Pengukuran Gratis",
    description: "Tim ahli kami datang langsung ke lokasi membawa sampel fisik karpet lengkap tanpa dipungut biaya sepeser pun.",
    fullDesc: "Untuk area Bekasi dan Jabodetabek, tim teknisi profesional kami akan melakukan pemetaan ruangan menggunakan laser precision, merencanakan arah sajadah saf kiblat, serta memperhitungkan jumlah pilar agar tidak ada sisa bahan terbuang sia-sia.",
    accent: "Mudah & Tanpa Syarat",
  },
  {
    id: "feat-sample",
    title: "Sampel Fisik Bebas Pilih",
    description: "Pegang teksturnya langsung! Kami bawakan bermacam pilihan grade karpet agar Anda bisa membandingkan ketebalan langsung.",
    fullDesc: "Kami memahami membeli karpet masjid tidak boleh menebak rasa. Tim kami membawa rol sampel agar pengurus DKM, donatur, atau penanggung jawab kantor dapat mencocokkan tekstur, ketebalan bulu, dan corak warna dengan interior ruangan.",
    accent: "Pegang Langsung",
  },
  {
    id: "feat-pemasangan",
    title: "Pemasangan Presisi Rapi",
    description: "Pemotongan langsung di tempat (fitting lokasi), obras tepi profesional, sehingga sajadah mengikuti tiang & kiblat melengkung.",
    fullDesc: "Pemasangan karpet masjid tersulit adalah mengitari pilar melingkar dan saf miring. Tim instalatur kami berpengalaman bertahun-tahun melakukan pemotongan presisi tinggi, dilanjutkan proses jahit tepi obras instan dengan mesin paku obras khusus.",
    accent: "Teknisi Specialist",
  },
  {
    id: "feat-garansi",
    title: "Garansi Pasang & Produk",
    description: "Kami memberikan garansi penjedalan, lepas rajutan, atau pergeseran karpet pasca pemasangan hingga 1 tahun penuh.",
    fullDesc: "Komitmen kami adalah kepuasan berkelanjutan. Melalui garansi tertulis, kami memastikan jika ada masalah kerutan bergelombang atau obras tepian yang terurai pasca pemasangan, tim kami akan terjun langsung memperbaiki gratis.",
    accent: "Kepercayaan Aman",
  },
  {
    id: "feat-harga",
    title: "Harga Transparan & Kompetitif",
    description: "Penawaran harga tertulis (RAB) resmi tanpa biaya siluman tersembunyi. Sesuai ukuran riil pasca survey.",
    fullDesc: "DKM Masjid berhak atas laporan keuangan yang bersih. Kami menyediakan Rencana Anggaran Biaya (RAB) menyeluruh, mulai dari harga per meter, upah obras pilar, busa pelapis (underlay), hingga biaya jasa pasang tanpa ada revisi kenaikan mendadak.",
    accent: "Jujur & Resmi",
  },
  {
    id: "feat-pengiriman",
    title: "Distribusi Pengiriman Nasional",
    description: "Kemitraan ekspedisi cargo terpercaya, menjangkau seluruh pulau besar di Indonesia dengan tarif super aman dan murah.",
    fullDesc: "Meskipun pabrik dan pusat kami berbasis di Bekasi, kami telah mengirim karpet ke Aceh, Kalimantan, Bali, Sulawesi, hingga Papua. Dukungan packing kedap air (double wrapping) menjamin karpet sampai di lokasi dalam kondisi 100% kering sempurna.",
    accent: "Layanan Nusantara",
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Konsultasi WhatsApp Cepat",
    description: "Hubungi admin ramah kami untuk menuturkan ukuran ruangan kasar, model corak yang diminati, serta range budget Anda.",
    details: "Kami melayani konsultasi interaktif 24/7. Cukup kirim foto ruangan saat ini via WA, dan kami bantu estimasikan kebutuhan awal Anda dalam hitungan menit.",
    iconName: "MessageSquareCode"
  },
  {
    step: 2,
    title: "Survey Lokasi & Kirim Sampel",
    description: "Teknisi berkunjung mengukur presisi ruangan dengan pengukur laser sekaligus membawa katalog sampel karpet pilihan.",
    details: "Kami membawakan sampel riil grade A, B, C, Turki asli agar DKM dapat memutuskan bersama jamaah dengan data nyata.",
    iconName: "Ruler"
  },
  {
    step: 3,
    title: "Pembuatan Dokumen Penawaran Resmi",
    description: "Kami menyusun penawaran anggaran (RAB) tertulis resmi berstempel perusahaan yang transparan untuk rapat pengurus.",
    details: "Dokumen proposal kami didesain rapi, terperinci, dan ramah donatur sehingga mudah dipresentasikan dalam rapat pleno masjid atau pengajuan proposal donasi.",
    iconName: "FileSpreadsheet"
  },
  {
    step: 4,
    title: "Instalasi & Obras Presisi di Tempat",
    description: "Tim ahli dikerahkan memotong karpet sesuai lekukan ruangan dan pilar tiang, meluruskan saf kiblat, lalu mengobras pinggiran.",
    details: "Kami menggunakan peralatan obras portabel bertenaga tinggi, memastikan seluruh tepian sajadah terkunci kuat, tidak berbulu lepas, dan pas secara absolut.",
    iconName: "Sparkles"
  },
  {
    step: 5,
    title: "Selesai, Penyerahan Garansi & Vacuuming",
    description: "Pembersihan seluruh serpihan sisa potongan menggunakan vacuum cleaner industrial, serah terima sertifikat garansi.",
    details: "Sebelum tim pulang, kami membersihkan permukaan karpet sampai sebersih mungkin sehingga ruangan siap langsung dipakai sujud berjamaah dengan nyaman dan wangi.",
    iconName: "ShieldCheck"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah layanan survey lokasi benar-benar gratis tanpa komitmen apapun?",
    answer: "Ya, 100% GRATIS untuk wilayah Bekasi, Jakarta, Depok, Tangerang, Bogor, Cikarang, dan Karawang. Tim kami datang untuk membawakan katalog sampel fisik, melakukan pengukuran laser presisi, dan memberikan estimasi budget secara gratis. Anda tidak memiliki kewajiban apa pun untuk langsung bertransaksi jika spesifikasi atau harga belum cocok di hati."
  },
  {
    id: "faq-2",
    question: "Bagaimana cara melakukan pemesanan untuk wilayah di luar Jabodetabek?",
    answer: "Untuk luar kota/pulau se-Indonesia, Anda cukup mengirimkan layout denah dasar dengan coretan ukuran ruangan (lebar x panjang) dan posisi tiang/kiblat. Kami buatkan simulasi denah saf karpet, kami kirim sampel kecil potongan via kurir jika diperlukan, lalu karpet siap dikirim melalui ekspedisi kargo rekanan terpercaya. Kami juga bisa mengirimkan tim pasang profesional khusus ke luar pulau jika volume pesanan memenuhi batas tertentu."
  },
  {
    id: "faq-3",
    question: "Berapa lama proses pengerjaan instalasi karpet masjid?",
    answer: "Untuk ruang masjid berukuran standar (volume 40 - 150 meter), proses pemotongan, pemadanan saf, penyesuaian pilar, obras tepi langsung, hingga pembersihan tuntas rata-rata diselesaikan hanya dalam 3 hingga 6 jam kerja di hari yang sama. Ruangan bisa langsung digunakan pada ibadah shalat berikutnya."
  },
  {
    id: "faq-4",
    question: "Apakah ada garansi jika hasil obras terlepas atau karpet bergelombang mendadak?",
    answer: "Tentu saja. Furqona Karpet memberikan garansi instalasi resmi selama 1 tahun. Jika terjadi gejala karpet bergeser, jahitan obras di sekeliling pilar renggang, atau karpet mengerut akibat pemuaian cuaca lantai, tim kami segera meluncur ke lokasi untuk memperbaiki, merenggangkan ulang, atau mengobras kembali secara cuma-cuma."
  },
  {
    id: "faq-5",
    question: "Apa bedanya Karpet Sajadah Turki Asli dengan Karpet Masjid Lokal?",
    answer: "Karpet import Turki menggunakan benang polypropylene heatset berkualitas tinggi dengan rajutan super rapat, membuat motif jauh lebih konsisten mewah, bulu sangat empuk serta sejuk di kulit wajah saat sujud. Sedangkan karpet lokal lebih unggul di segmen harga ekonomis dengan masa pakai yang relatif memadai untuk mushola dengan aktivitas menengah."
  },
  {
    id: "faq-6",
    question: "Apakah melayani pencucian (laundry) karpet masjid juga?",
    answer: "Fokus utama kami adalah penyediaan unit baru, survey, konversi ukuran ruangan, dan instalasi pemasangan baru. Namun kami mengantongi daftar vendor cuci karpet rekanan ramah lingkungan khusus masjid terdekat yang bisa kami rekomendasikan setelah Anda bermitra bersama kami."
  }
];

export const CLIENT_LOGOS = [
  { name: "YPI Al-Azhar Bekasi", role: "Sekolah Islam" },
  { name: "Kementerian Keuangan", role: "Gedung Pemerintah" },
  { name: "DKM Al-Barkah Bekasi", role: "Masjid Raya" },
  { name: "Yayasan Baitul Maal", role: "Lembaga Sosial" },
  { name: "PT Astra Internasional", role: "Kantor Swasta" },
  { name: "Masjid Jami Mustika", role: "Masjid Kewilayahan" },
  { name: "Yayasan Sahabat Yatim", role: "Pondok Yatim" },
  { name: "Hotel Horison Bekasi", role: "Sektor Perhotelan" }
];
