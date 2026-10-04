import React from "react";
import { Zap, ShieldCheck, Globe2, Headset } from "lucide-react";

export default function Features() {
  return (
    <section id="keunggulan" className="w-full bg-slate-50 py-24">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Kenapa Memilih XL Internet?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Lebih Cepat • Lebih Stabil • Lebih Baik</h2>
          <p className="text-base text-slate-600 mt-4">
            Dukungan infrastruktur telekomunikasi terdepan untuk kenyamanan belajar, hiburan, bekerja, dan bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pilar 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Koneksi Super Cepat</h3>
            <p className="text-sm text-slate-600 flex-1 leading-relaxed">
              Download & upload simetris stabil untuk streaming 4K tanpa buffering, gaming minim lag, dan transfer file instan.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Stabil & Handal</h3>
            <p className="text-sm text-slate-600 flex-1 leading-relaxed">
              Kombinasi teknologi 100% Fiber Optic murni dan 5G Wireless canggih yang teruji andal di segala kondisi cuaca.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Globe2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cakupan Luas</h3>
            <p className="text-sm text-slate-600 flex-1 leading-relaxed">
              Jangkauan merata di perumahan, apartemen, ruko bisnis, hingga daerah yang belum terpasang tiang kabel konvensional.
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <Headset size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Sales Responsif</h3>
            <p className="text-sm text-slate-600 flex-1 leading-relaxed">
              Konsultasi gratis, pengecekan sinyal instan via WhatsApp, dan penjadwalan teknisi resmi tanpa birokrasi berbelit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
