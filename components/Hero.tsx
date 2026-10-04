import React from "react";
import { MessageSquare, ArrowDown, Wifi, Zap, Wrench, Receipt, CheckCircle2, ArrowRight } from "lucide-react";
import { createWaLink } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 text-white pb-20 pt-36 lg:pt-48">
      {/* Ambient Tech Glow Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600 opacity-30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500 opacity-15 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 relative z-10">
        {/* Tagline & High Contrast Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            XL SATU & XL INTERNET
          </span>
          <span className="text-sm font-semibold text-blue-200">Solusi Digital Untuk Hidup Lebih Mudah</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-extrabold leading-[1.1]">
              Internet Cepat, Stabil, & Unlimited <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-emerald-400">Untuk Rumah & Usaha</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-xl">
              Dapatkan koneksi tanpa hambatan dengan teknologi Fiber Optic (FTTH) & Fixed Wireless Access (FWA) Support 5G terbaru. Mulai dari <span className="font-bold text-emerald-400">Rp 205.350/bulan</span>!
            </p>

            {/* Highlight Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
              <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-slate-700/50">
                <Wifi className="text-emerald-400 w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-300 uppercase font-bold">Hardware</span>
                  <span className="text-sm font-bold text-white">Support 5G</span>
                </div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-slate-700/50">
                <Zap className="text-blue-400 w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-300 uppercase font-bold">Kecepatan</span>
                  <span className="text-sm font-bold text-white">Up to 500 Mbps</span>
                </div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-slate-700/50">
                <Wrench className="text-emerald-500 w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-300 uppercase font-bold">Instalasi</span>
                  <span className="text-sm font-bold text-white">Gratis Pasang*</span>
                </div>
              </div>
              <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-slate-700/50">
                <Receipt className="text-blue-300 w-6 h-6" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-300 uppercase font-bold">Transparan</span>
                  <span className="text-sm font-bold text-white">Termasuk PPN</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={createWaLink("Halo Sales XL SATU, saya mau konsultasi dan pesan paket internet sekarang")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-900/50 hover:scale-[1.02] transition-all"
              >
                <MessageSquare className="w-6 h-6 text-emerald-200" />
                <span>Pesan via WhatsApp (0878-7410-3003)</span>
              </a>
              <a
                href="#paket-fwa"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 text-white font-bold text-base backdrop-blur-md transition-all border border-slate-700"
              >
                <span>Lihat Pilihan Paket</span>
                <ArrowDown className="w-5 h-5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Visual Hero Card Showcase (Inspired by Poster FWA) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-slate-100">
              {/* Decorative Badge Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="text-blue-600 w-7 h-7" />
                    <span className="text-xl font-extrabold text-slate-900">XL SATU <span className="text-blue-600">FWA</span></span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">Ready 5G</span>
                </div>

                {/* Product Visual Preview */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 flex items-center justify-center group border border-slate-200">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiUXEvg5wN-c4RmfCZBqfbY2o7L1UEn0QdHTlV78VMivomL8-_yyR2VT69qeM1iLukjXgEd62cNesF3VWilLJSWPnFGGetTsoBcQHQY2ynz5Im4t6BZuxkMnDtcj2jNF04Cta-tCwc76JNMYpptjU1y8YKPvwcAdxphJT5Mx9OHIGCW0i8lQlK0N90nZQLweTYjkOsv3xZu9Mc8jUnHHQxne_2bNNawDU1YzmWjAyQYSD2y4_17DbvQg" 
                    alt="XL SATU 5G FWA Modem" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <CheckCircle2 className="text-emerald-400 w-5 h-5" />
                      <span>Plug & Play Tanpa Tarik Kabel</span>
                    </div>
                  </div>
                </div>

                {/* Speed and Price Banner inside Card */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Speed Up To</span>
                    <span className="text-4xl font-extrabold text-blue-600 leading-none">100 <span className="text-lg font-bold text-slate-900">Mbps</span></span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Tarif Promo</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">Rp 243.090</span>
                    <span className="text-xs text-slate-500 block mt-1 font-medium">/bulan (Inc. PPN)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span>Internet Unlimited tanpa batas kuota harian</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span>Termasuk sewa Modem WiFi Router 4 Antena</span>
                  </div>
                </div>

                <a
                  href={createWaLink("Halo Sales XL SATU, saya tertarik dengan Paket FWA 100 Mbps Rp 243.090")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md transition-all group"
                >
                  <span>Pesan Paket FWA Ini Sekarang</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
