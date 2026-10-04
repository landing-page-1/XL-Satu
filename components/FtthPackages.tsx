import React from "react";
import { Cable, Smartphone, MonitorPlay, Wifi, Target, Gamepad2, Rocket } from "lucide-react";
import { ftthPackages, createWaLink } from "@/data/content";

export default function FtthPackages() {
  const getIconForFeature = (feature: string) => {
    if (feature.includes("Unlimited")) return <Wifi size={16} />;
    if (feature.includes("Dual-Band")) return <Target size={16} />;
    if (feature.includes("Full Speed")) return <Rocket size={16} />;
    if (feature.includes("Streaming")) return <MonitorPlay size={16} />;
    if (feature.includes("Latency")) return <Gamepad2 size={16} />;
    return <Wifi size={16} />;
  };

  return (
    <section id="paket-ftth" className="w-full bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Cable size={16} />
            Infrastruktur Kabel Optik
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            PRODUK FTTH (Fiber Optic Ke Rumah)
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
            Internet Fiber Optic murni 1:1 simetris langsung ke dalam rumah Anda. Stabil untuk seluruh anggota keluarga, streaming resolusi ultra tinggi, download file besar, dan smart home.
          </p>
        </div>

        {/* 5 Cards FTTH Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {ftthPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-all border ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-white to-blue-50/50 border-blue-300 shadow-xl lg:-translate-y-4 relative z-10' 
                  : pkg.valueDeal || pkg.ultraSpeed
                    ? 'bg-white border-blue-200 shadow-md relative'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase whitespace-nowrap shadow-sm">
                  Paling Populer
                </div>
              )}
              {pkg.valueDeal && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase whitespace-nowrap shadow-sm">
                  Value Deal
                </div>
              )}
              {pkg.ultraSpeed && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase whitespace-nowrap shadow-sm">
                  Ultra Speed
                </div>
              )}

              <div className="pt-2">
                <div className="text-center pb-4 border-b border-slate-100">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${
                    pkg.popular ? 'text-blue-600' : 'text-slate-500'
                  }`}>
                    {pkg.tier}
                  </span>
                  <div className={`mt-2 flex items-baseline justify-center gap-1 leading-none ${
                    pkg.popular || pkg.ultraSpeed ? 'text-blue-600' : 'text-slate-900'
                  }`}>
                    <span className="text-5xl font-extrabold tracking-tighter">{pkg.speed}</span>
                    <span className="text-sm font-bold text-slate-500">Mbps</span>
                  </div>
                </div>

                <div className={`rounded-xl p-3 text-center my-4 ${
                  pkg.popular ? 'bg-blue-100/50' : 'bg-slate-50'
                }`}>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none mb-1">{pkg.price}</span>
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">/bulan (Inc. PPN)</span>
                </div>

                <div className="space-y-3 mb-6 text-sm text-slate-600">
                  <div className={`px-2 py-1.5 rounded text-center text-xs font-bold ${
                    pkg.installFee === 'GRATIS' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {pkg.installFee === 'GRATIS' ? 'Biaya Instalasi GRATIS' : `Biaya Instalasi: ${pkg.installFee}`}
                  </div>
                  
                  <div className="flex items-start gap-2 pt-1">
                    <Smartphone size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span className={pkg.popular ? "font-semibold text-slate-800" : ""}>{pkg.devices}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 shrink-0 mt-0.5">{getIconForFeature(pkg.feature)}</span>
                    <span>{pkg.feature}</span>
                  </div>
                </div>
              </div>
              
              <a
                href={createWaLink(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-3 rounded-xl font-bold text-sm text-center transition-all ${
                  pkg.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Pilih {pkg.speed} Mbps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
