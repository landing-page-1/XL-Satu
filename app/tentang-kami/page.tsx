import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";
import Link from "next/link";
import { Info, MessageSquare, Phone } from "lucide-react";
import { createWaLink, waNumber } from "@/data/content";

export const metadata = {
  title: "Tentang Kami & Disclaimer | Internet Cepat ID",
  description: "Informasi profil Internet Cepat ID sebagai partner penjualan mandiri internet rumah.",
};

export default function TentangKami() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full pt-[110px] md:pt-[130px] pb-20 bg-slate-50">
        <div className="max-w-[860px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Info size={24} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Tentang Kami & Disclaimer</h1>
                <p className="text-sm text-slate-500">Mengenal Internet Cepat ID</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Profil Internet Cepat ID</h2>
                <p>
                  <strong>Internet Cepat ID</strong> adalah platform penyedia informasi, konsultasi paket, dan partner penjualan mandiri terdaftar untuk layanan internet rumah berbasis kabel fiber (FTTH) maupun nirkabel (FWA) dari XL SATU.
                </p>
                <p className="mt-2">
                  Tujuan kami adalah memudahkan masyarakat Indonesia menemukan solusi internet rumah yang stabil, cepat, dan hemat tanpa harus repot mengantre di gerai fisik. Kami siap membantu dari pengecekan kover area jangkauan, pemilihan paket promo yang pas, hingga pemesanan instalasi teknisi ke rumah.
                </p>
              </section>

              <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-950">
                <h2 className="text-lg font-bold mb-2">Disclaimer Penting (Keterbukaan Informasi):</h2>
                <p className="text-sm leading-relaxed">
                  Website ini dikelola secara independen oleh <strong>Partner Penjualan Mandiri / Agen Pemasaran Terdaftar</strong> dan <strong>BUKAN</strong> merupakan website resmi korporat dari PT XL Axiata Tbk.
                </p>
                <p className="text-sm mt-2 leading-relaxed">
                  Semua logo, nama merek dagang, dan merek layanan XL SATU, XL Fiber, dan XL Axiata adalah hak milik dan merek terdaftar dari PT XL Axiata Tbk. Penyebutan merek dan produk semata-mata bertujuan untuk mengidentifikasi produk layanan yang ditawarkan kepada calon pelanggan.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">Kontak Layanan Pelanggan</h2>
                <p>Untuk konsultasi dan bantuan pemesanan, Anda dapat menghubungi kami melalui:</p>
                <div className="mt-4 p-4 rounded-xl bg-slate-100 space-y-2">
                  <p className="flex items-center gap-2 text-slate-800 font-semibold">
                    <Phone size={18} className="text-emerald-600" /> WhatsApp Hotline: 0878-7410-3003
                  </p>
                  <p className="flex items-center gap-2 text-slate-600 text-sm">
                    <MessageSquare size={18} className="text-blue-600" /> Jam Operasional: 08.00 - 21.00 WIB (Setiap Hari)
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                ← Kembali ke Halaman Utama
              </Link>
              <a
                href={createWaLink("Halo Sales Internet Cepat ID, saya mau tanya paket internet")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
