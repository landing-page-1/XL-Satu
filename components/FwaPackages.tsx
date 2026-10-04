import React from "react";
import { Radio, CheckCircle2, QrCode, Tag } from "lucide-react";
import { fwaPackages, createWaLink } from "@/data/content";

export default function FwaPackages() {
  return (
    <section id="paket-fwa" className="w-full bg-slate-100 py-24">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs uppercase font-bold mb-3">
              <Radio size={16} />
              Teknologi FWA Wireless
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Paket Spesial FWA (Fixed Wireless Access)
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mt-3">
              Internet nirkabel berkecepatan tinggi tanpa tarik kabel fisik. Sangat cocok untuk area residensial baru, villa, ruko, ataupun penyewa yang membutuhkan solusi fleksibel plug-and-play.
            </p>
          </div>
          <div className="shrink-0 bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200">
            <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Status Perangkat</span>
            <span className="text-sm font-bold text-emerald-600 flex items-center gap-2 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Modem WiFi 5G Ready
            </span>
          </div>
        </div>

        {/* Feature Highlight Banner FWA */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-12 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-500 text-slate-900 text-[10px] uppercase font-bold tracking-wider">
                  Paket Terlaris Utama
                </span>
                <span className="text-blue-200 text-sm font-semibold">Fixed Wireless Access 100 Mbps</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                FWA 100 Mbps Unlimited — Rp 243.090 <span className="text-xl font-normal text-slate-400">/bulan</span>
              </h3>
              <p className="text-base text-slate-300 max-w-2xl">
                Solusi internet tanpa batas kuota dengan hardware outdoor receiver & indoor router 4-antenna generasi terbaru. Pembayaran di awal langsung proses pasang!
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" /> Include PPN 11%
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" /> Sewa Modem Gratis
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" /> Gratis Pasang
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" /> Support 5G
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <a
                href={createWaLink("Halo Sales XL SATU, saya mau daftar FWA 100Mbps Rp 243.090/bulan")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-3 border border-emerald-500"
              >
                <QrCode size={20} className="text-emerald-200" />
                <span>Daftar Paket FWA 100 Mbps</span>
              </a>
              <p className="text-xs text-center lg:text-right text-slate-400 font-medium">Pemasangan cepat estimasi 1-2 hari kerja</p>
            </div>
          </div>
        </div>

        {/* Grid 4 Card Promo FWA */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <Tag className="text-blue-600 w-6 h-6" />
          Pilihan Paket Promo FWA Bundling & Bulanan
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fwaPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border ${pkg.bestSeller ? 'border-blue-300 ring-2 ring-blue-100 transform lg:-translate-y-2 relative' : 'border-slate-200'}`}
            >
              {pkg.bestSeller && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase shadow-sm whitespace-nowrap">
                  Best Seller Promo
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase ${pkg.bestSeller ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`}>
                    {pkg.title}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{pkg.duration}</span>
                </div>
                
                <div className="mb-5">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">Kecepatan</span>
                  <div className={`font-extrabold leading-none flex items-baseline gap-1 ${pkg.bestSeller ? 'text-blue-600' : 'text-slate-900'}`}>
                    <span className="text-5xl tracking-tighter">{pkg.speed}</span>
                    <span className="text-lg">Mbps</span>
                  </div>
                </div>
                
                <div className={`rounded-xl p-4 mb-6 ${pkg.bestSeller ? 'bg-blue-50' : 'bg-slate-50'}`}>
                  <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">Total Bayar Promo</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block leading-none mb-1">{pkg.price}</span>
                  <span className="text-xs text-slate-600 font-medium block">{pkg.monthlyEquivalent}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                      <span className={pkg.bestSeller ? "font-semibold" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={createWaLink(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-center transition-all ${
                  pkg.bestSeller 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Pilih Paket {pkg.speed} Mbps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
