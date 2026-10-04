import React from "react";
import { MessageSquare } from "lucide-react";
import { createWaLink, waNumber } from "@/data/content";

export default function CtaBanner() {
  const formattedWa = "0878-7410-3003";

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500 opacity-20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-emerald-500 text-slate-900 text-xs font-extrabold uppercase inline-block shadow-sm">
                Layanan Pengecekan Area Gratis
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Mau Cek Jangkauan Area atau Tanya Promo Terbaik?
              </h2>
              <p className="text-lg text-blue-100 max-w-xl">
                Sales representatif resmi kami siap mengecek titik kover Fiber/FWA di lokasi Anda dalam hitungan menit tanpa ribet.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col items-stretch gap-4">
              <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-lg text-center border border-slate-100">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Hotline Sales WhatsApp</span>
                <a
                  href={`https://wa.me/${waNumber}`}
                  className="text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors block my-2"
                >
                  {formattedWa}
                </a>
                <span className="text-xs text-emerald-600 flex items-center justify-center gap-1.5 font-bold mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Fast Response Setiap Hari (08:00 - 21:00)
                </span>
              </div>
              
              <a
                href={createWaLink("Halo Sales XL, saya mau tanya paket internet dan cek jangkauan lokasi saya")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <span>Hubungi Sales via WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
