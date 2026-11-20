import React from "react";
import { Wifi, MessageSquare, Clock, ShieldCheck, Headset, Mail } from "lucide-react";
import { waNumber } from "@/data/content";

export default function Footer() {
  const formattedWa = "0878-7410-3003";

  return (
    <footer className="w-full bg-slate-100 text-slate-800 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm shrink-0">
                <img 
                  src="/icon.svg" 
                  alt="Internet Cepat ID" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-lg font-extrabold text-slate-900">Internet Cepat <span className="text-blue-600">ID</span></span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wide">Partner Penjualan Internet Rumah XL Satu</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Layanan konsultasi dan pendaftaran mandiri internet rumah cepat & stabil XL SATU Fiber (FTTH) dan XL SATU Lite (FWA) dengan kuota keluarga tanpa ribet.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300">
                <Headset size={16} className="text-blue-600" />
                <span>Respon Cepat via WhatsApp {formattedWa}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Pilihan Paket</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li><a href="#paket-ftth" className="hover:text-blue-600 transition-colors">XL SATU Fiber (FTTH)</a></li>
              <li><a href="#paket-fwa" className="hover:text-blue-600 transition-colors">XL SATU Lite (FWA)</a></li>
              <li><a href="#paket-ftth" className="hover:text-blue-600 transition-colors">Paket Gamer & Streamer</a></li>
              <li><a href="#keunggulan" className="hover:text-blue-600 transition-colors">Bonus Kuota HP Keluarga</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cek Area Coverage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Bantuan & Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li><a href="#cara-daftar" className="hover:text-blue-600 transition-colors">Prosedur Registrasi Mandiri</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ Seputar XL SATU</a></li>
              <li><a href="/kebijakan-privasi" className="hover:text-blue-600 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="/syarat-ketentuan" className="hover:text-blue-600 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="/tentang-kami" className="hover:text-blue-600 transition-colors">Tentang Kami / Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Kontak Sales</h4>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MessageSquare size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">WhatsApp Konsultasi</p>
                  <a href={`https://wa.me/${waNumber}`} className="hover:text-blue-600 font-medium transition-colors">
                    {formattedWa}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">Jam Operasional Sales</p>
                  <p className="font-medium">Setiap Hari: 08.00 - 21.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">Email Layanan</p>
                  <a href="mailto:info@internetcepat.id" className="hover:text-blue-600 font-medium transition-colors">
                    info@internetcepat.id
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">Verifikasi Layanan</p>
                  <p className="font-medium">Pendaftaran Terdaftar, Aman & Terpercaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            <strong className="text-slate-600">Disclaimer:</strong> Website Internet Cepat ID (internetcepat.id) dikelola oleh Partner Penjualan Mandiri / Agen Pemasaran Terdaftar untuk membantu proses informasi, cek jangkauan jaringan, dan pendaftaran paket internet rumah XL SATU. Website ini BUKAN website resmi dari PT XL Axiata Tbk. Seluruh logo, merek dagang, dan nama produk XL SATU dimiliki sepenuhnya oleh PT XL Axiata Tbk.
          </p>
          <p className="text-xs text-slate-400 font-medium shrink-0">
            © 2026 Internet Cepat ID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
