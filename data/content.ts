export const waNumber = "6287874103003";

export const createWaLink = (text: string) => {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
};

export const fwaPackages = [
  {
    id: "fwa-1",
    title: "Pay 3 Get 4",
    duration: "Paket 4 Bulan",
    speed: 50,
    price: "Rp 721.500",
    monthlyEquivalent: "Setara Rp 180rb-an/bulan",
    features: [
      "Gratis Vidio Lite",
      "Gratis Catchplay+",
      "Termasuk PPN & Sewa Alat"
    ],
    waMessage: "Halo Sales XL, saya mau promo FWA Pay 3 Get 4 (50Mbps Rp721.500)",
    bestSeller: false,
  },
  {
    id: "fwa-2",
    title: "Pay 3 Get 4",
    duration: "Paket 4 Bulan",
    speed: 100,
    price: "Rp 877.000",
    monthlyEquivalent: "Hanya Rp 219rb-an/bulan",
    features: [
      "Gratis Vidio Lite",
      "Gratis Catchplay+",
      "Perangkat Modem 5G Ready",
      "Instalasi & PPN Gratis"
    ],
    waMessage: "Halo Sales XL, saya mau promo BEST SELLER FWA Pay 3 Get 4 (100Mbps Rp877.000)",
    bestSeller: true,
  },
  {
    id: "fwa-3",
    title: "Pay 3 Get 3",
    duration: "Paket 3 Bulan",
    speed: 100,
    price: "Rp 721.500",
    monthlyEquivalent: "Termasuk Pajak Resmi",
    features: [
      "Gratis Vidio Lite",
      "Gratis Catchplay+",
      "Internet Unlimited 24 Jam"
    ],
    waMessage: "Halo Sales XL, saya mau FWA Pay 3 Get 3 (100Mbps Rp721.500)",
    bestSeller: false,
  },
  {
    id: "fwa-4",
    title: "Langganan Bulanan",
    duration: "Bebas Kontrak",
    speed: 100,
    price: "Rp 243.000",
    monthlyEquivalent: "Biaya Instalasi GRATIS",
    features: [
      "Biaya Instalasi GRATIS",
      "Modem 5G Dipinjamkan",
      "Full Unlimited"
    ],
    waMessage: "Halo Sales XL, saya mau FWA Bulanan 100Mbps Rp 243.000",
    bestSeller: false,
  }
];

export const ftthPackages = [
  {
    id: "ftth-1",
    tier: "Tier Basic",
    speed: 20,
    price: "Rp 205.350",
    installFee: "Rp 100.000",
    devices: "Ideal 1 - 3 Gadget",
    feature: "Unlimited Fiber",
    waMessage: "Halo Sales XL, saya mau pasang FTTH Fiber 20 Mbps Rp 205.350",
    popular: false,
    valueDeal: false,
    ultraSpeed: false,
  },
  {
    id: "ftth-2",
    tier: "Best Value Family",
    speed: 250,
    price: "Rp 254.190",
    installFee: "GRATIS",
    devices: "Ideal 5 - 8 Perangkat",
    feature: "Modem Dual-Band High-End",
    waMessage: "Halo Sales XL, saya mau pasang FTTH Fiber 250 Mbps Rp 254.190",
    popular: true,
    valueDeal: false,
    ultraSpeed: false,
  },
  {
    id: "ftth-3",
    tier: "Super Speed",
    speed: 300,
    price: "Rp 265.290",
    installFee: "GRATIS",
    devices: "Ideal 8 - 12 Perangkat",
    feature: "Full Speed Simetris",
    waMessage: "Halo Sales XL, saya mau pasang FTTH Fiber 300 Mbps Rp 265.290",
    popular: false,
    valueDeal: true,
    ultraSpeed: false,
  },
  {
    id: "ftth-4",
    tier: "Pro Streamer",
    speed: 400,
    price: "Rp 331.890",
    installFee: "GRATIS",
    devices: "Ideal 12 - 18 Perangkat",
    feature: "Support Streaming 4K/8K",
    waMessage: "Halo Sales XL, saya mau pasang FTTH Fiber 400 Mbps Rp 331.890",
    popular: false,
    valueDeal: false,
    ultraSpeed: false,
  },
  {
    id: "ftth-5",
    tier: "Maximum Power",
    speed: 500,
    price: "Rp 442.890",
    installFee: "GRATIS",
    devices: "Pro Gaming & Usaha Kantor",
    feature: "Latency Terendah",
    waMessage: "Halo Sales XL, saya mau pasang FTTH Fiber 500 Mbps Rp 442.890",
    popular: false,
    valueDeal: false,
    ultraSpeed: true,
  }
];

export const faqs = [
  {
    question: "Apa perbedaan utama antara paket FTTH dan FWA?",
    answer: "FTTH (Fiber to the Home) menggunakan kabel serat optik fisik langsung masuk ke rumah Anda, memberikan kecepatan stabil simetris sangat tinggi hingga 500 Mbps. Sedangkan FWA (Fixed Wireless Access) memanfaatkan sinyal jaringan nirkabel 5G/4G broadband melalui perangkat antena penerima outdoor dan modem indoor tanpa perlu tarik kabel dari tiang, sangat praktis untuk kawasan yang belum memiliki jalur kabel optik."
  },
  {
    question: "Apa saja syarat pendaftaran pelanggan baru?",
    answer: "Syarat sangat mudah! Cukup siapkan Foto e-KTP asli, alamat email aktif, nomor WhatsApp aktif, dan alamat lengkap pemasangan beserta share live location untuk verifikasi titik jaringan teknisi."
  },
  {
    question: "Apakah ada batasan kuota (FUP) pada paket XL SATU?",
    answer: "Seluruh paket FTTH dan FWA yang tercantum merupakan paket unlimited untuk pemakaian internet rumah. Anda dapat menggunakannya sepuasnya tanpa khawatir kuota habis di tengah bulan."
  },
  {
    question: "Berapa lama proses pemasangan oleh teknisi setelah mendaftar?",
    answer: "Setelah formulir registrasi diverifikasi oleh tim sales, jadwal pemasangan dapat ditentukan segera. Rata-rata instalasi dilakukan dalam 1 sampai 2 hari kerja tergantung ketersediaan slot jadwal teknisi di area Anda."
  },
  {
    question: "Apakah harga yang tertera sudah termasuk PPN?",
    answer: "Ya, seluruh harga yang dicantumkan (seperti paket FWA Rp 243.090 atau FTTH Rp 205.350) sudah termasuk PPN 11% dan biaya sewa perangkat modem standar selama berlangganan."
  }
];
