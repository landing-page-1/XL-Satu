import React from "react";

export default function Steps() {
  const steps = [
    {
      num: 1,
      title: "Hubungi Sales WhatsApp",
      desc: "Kirimkan alamat lengkap atau share live location rumah Anda untuk pengecekan jaringan FTTH kabel atau sinyal FWA 5G.",
      bgColor: "bg-slate-900",
      textColor: "text-white"
    },
    {
      num: 2,
      title: "Pilih Paket Sesuai",
      desc: "Tentukan paket internet yang cocok untuk kebutuhan Anda: FTTH Fiber Optic super cepat atau FWA Wireless fleksibel.",
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      num: 3,
      title: "Verifikasi & Pembayaran",
      desc: "Isi data pelanggan resmi secara aman. Pembayaran dilakukan via channel resmi XL Axiata setelah konfirmasi paket.",
      bgColor: "bg-blue-800",
      textColor: "text-white"
    },
    {
      num: 4,
      title: "Instalasi Oleh Teknisi",
      desc: "Teknisi profesional kami datang sesuai jadwal yang Anda tentukan untuk setting modem dan aktivasi internet hingga siap pakai.",
      bgColor: "bg-emerald-600",
      textColor: "text-white"
    }
  ];

  return (
    <section id="cara-daftar" className="w-full bg-slate-50 py-24">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Proses Cepat & Praktis</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">4 Langkah Mudah Pasang WiFi XL SATU</h2>
          <p className="text-base text-slate-600 mt-4">
            Daftar sekarang dari rumah tanpa perlu repot datang ke gerai. Tim sales kami yang memproses semuanya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-full ${step.bgColor} ${step.textColor} text-xl font-bold flex items-center justify-center mb-6 shadow-sm`}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
