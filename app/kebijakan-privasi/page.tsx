import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi | Internet Cepat ID",
  description: "Kebijakan privasi dan perlindungan data pelanggan di Internet Cepat ID.",
};

export default function KebijakanPrivasi() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full pt-[110px] md:pt-[130px] pb-20 bg-slate-50">
        <div className="max-w-[860px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Shield size={24} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Kebijakan Privasi</h1>
                <p className="text-sm text-slate-500">Terakhir diperbarui: 2026</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">1. Pendahuluan</h2>
                <p>
                  Selamat datang di <strong>Internet Cepat ID</strong>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda bagikan kepada kami saat berkonsultasi atau melakukan permohonan registrasi pemasangan layanan internet rumah XL SATU (FTTH / FWA).
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">2. Informasi yang Kami Kumpulkan</h2>
                <p>Informasi yang dapat kami kumpulkan saat Anda menghubungi tim sales kami meliputi:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nama lengkap calon pelanggan</li>
                  <li>Nomor telepon / WhatsApp aktif</li>
                  <li>Alamat lengkap lokasi pemasangan & share point lokasi (untuk verifikasi jangkauan sinyal/kabel)</li>
                  <li>Alamat email untuk konfirmasi tagihan dan status registrasi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">3. Penggunaan Informasi</h2>
                <p>Informasi yang Anda berikan hanya digunakan untuk:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Pengecekan ketersediaan jaringan kabel fiber optik atau jangkauan nirkabel FWA di lokasi Anda.</li>
                  <li>Membantu proses pendaftaran dan verifikasi awal data pelanggan baru.</li>
                  <li>Menghubungi Anda terkait konfirmasi jadwal kedatangan teknisi dan penawaran promo yang Anda minati.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">4. Perlindungan dan Keamanan Data</h2>
                <p>
                  Kami tidak memperjualbelikan, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga manapun untuk kepentingan periklanan pihak luar. Data hanya diteruskan ke sistem pendaftaran resmi penyedia layanan internet untuk aktivasi paket langganan Anda.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-slate-900 mb-2">5. Hubungi Kami</h2>
                <p>
                  Apabila Anda memiliki pertanyaan terkait kebijakan privasi ini atau ingin memperbarui informasi data Anda, silakan hubungi tim sales kami melalui WhatsApp di <strong>0878-7410-3003</strong>.
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
