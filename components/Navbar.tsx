"use client";

import React, { useState, useEffect } from "react";
import { Phone, Wifi, MessageSquare, User, Menu, X } from "lucide-react";
import { waNumber, createWaLink } from "@/data/content";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300">
      {/* Top Promo Bar */}
      <div className="bg-slate-900 text-white py-1.5 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-6 text-center md:text-left text-xs md:text-sm">
          <div className="flex items-center gap-2 mx-auto md:mx-0 text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold uppercase tracking-wider text-[10px] md:text-xs">
              Partner Penjualan Mandiri
            </span>
            <span className="font-medium text-slate-300 text-xs hidden sm:inline">
              Layanan Penjualan Paket XL SATU (Bukan Situs Resmi PT XL Axiata Tbk)
            </span>
            <span className="font-semibold text-emerald-400 text-xs sm:ml-2">
              • Promo Pasang Baru & Konsultasi Area
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="font-semibold text-slate-300">Hotline Sales WhatsApp:</span>
            <a
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-bold"
              href={createWaLink("Halo Sales Internet Cepat ID, saya ingin info promo XL SATU")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={14} />
              0878-7410-3003
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white/90 backdrop-blur-xl py-4"}`}>
        <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden p-1.5 shrink-0">
                <img 
                  src="/logo.svg" 
                  alt="Logo XL" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                  Internet Cepat <span className="text-blue-600">ID</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-wide font-medium">
                  Partner Penjualan Internet Rumah XL Satu
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-1 font-semibold text-sm">
            <Link href="/" className="px-3 py-2 rounded-lg transition-colors bg-slate-100 text-slate-900">
              Beranda
            </Link>
            <Link href="#paket-fwa" className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              Paket FWA
            </Link>
            <Link href="#paket-ftth" className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              Paket Fiber FTTH
            </Link>
            <Link href="#keunggulan" className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              Keunggulan
            </Link>
            <Link href="#cara-daftar" className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              Cara Daftar
            </Link>
            <Link href="#faq" className="px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={createWaLink("Halo Sales XL SATU, saya ingin tanya paket wifi")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-bold text-sm"
            >
              <MessageSquare size={18} className="text-emerald-300" />
              Chat Sales WA
            </a>
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 hidden md:flex">
              <User size={16} className="text-white" />
            </div>
            <button 
              className="xl:hidden p-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full flex flex-col p-4 gap-2 font-semibold text-slate-700">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-lg text-slate-900">Beranda</Link>
          <Link href="#paket-fwa" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-slate-50 rounded-lg">Paket FWA</Link>
          <Link href="#paket-ftth" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-slate-50 rounded-lg">Paket Fiber FTTH</Link>
          <Link href="#keunggulan" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-slate-50 rounded-lg">Keunggulan</Link>
          <Link href="#cara-daftar" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-slate-50 rounded-lg">Cara Daftar</Link>
          <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="p-3 hover:bg-slate-50 rounded-lg">FAQ</Link>
          <a
            href={createWaLink("Halo Sales XL SATU, saya ingin tanya paket wifi")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold"
          >
            <MessageSquare size={18} />
            Chat Sales WA (0878-7410-3003)
          </a>
        </div>
      )}
    </header>
  );
}
