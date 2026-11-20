import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan | Internet Cepat ID",
  description: "Syarat dan ketentuan layanan pemesanan internet di Internet Cepat ID.",
};

export default function SyaratKetentuan() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full pt-[110px] md:pt-[130px] pb-20 bg-slate-50">
        <div className="max-w-[860px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <FileText size={24} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Syarat & Ketentuan</h1>
                <p className="text-sm text-slate-500">Terakhir diperbarui: 2026</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">1. Ketentuan Umum</h2>
                <p>
                  Website <strong>Internet Cepat ID</strong> bertindak sebagai media informasi, konsultasi, dan partner penjualan mandiri terdaftar untuk memfasilitasi calon pelanggan dalam memilih dan mendaftar paket internet rumah XL SATU (FTTH dan FWA).
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">2. Ketersediaan Jaringan & Pemasangan</h2>
                <p>
                  Pemasangan paket internet tergantung pada ketersediaan titik jangkauan fiber (FAT/ODP) atau kekuatan sinyal FWA di lokasi calon pelanggan. Pengecekan area bersifat indikatif dan kepastian akhir akan diverifikasi oleh teknisi saat survey/instalasi di lokasi.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">3. Tarif & Promo</h2>
                <p>
                  Semua harga yang ditampilkan dapat berubah sewaktu-waktu sesuai dengan kebijakan promo terbaru yang berlaku. Harga yang tercantum umumnya sudah termasuk PPN 11% sesuai peraturan perundang-undangan perpajakan yang berlaku.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">4. Pembayaran Tagihan</h2>
                <p>
                  Pembayaran biaya berlangganan atau biaya instalasi (jika ada) dilakukan secara aman melalui metode pembayaran perbankan resmi / Virtual Account terdaftar dari penyedia layanan. Sales kami tidak pernah memungut pembayaran tunai tanpa bukti/channel penagihan yang sah.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">5. Hak Cipta dan Batasan Tanggung Jawab</h2>
                <p>
                  Seluruh merek dagang, logo, serta nama produk XL SATU, FTTH, dan FWA adalah milik sah dari PT XL Axiata Tbk. Internet Cepat ID beroperasi sebagai mitra agen mandiri terpisah.
                </p>
              </section>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                ← Kembali ke Halaman Utama
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
