import React from "react";
import { MessageSquare } from "lucide-react";
import { createWaLink } from "@/data/content";

export default function FloatingWa() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <a
        href={createWaLink("Halo Sales XL SATU, saya ingin berlangganan wifi")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Sales XL SATU"
        className="group flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare size={24} className="text-emerald-100" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 border-2 border-emerald-600"></span>
        </div>
        <div className="text-left">
          <div className="text-[10px] leading-none text-emerald-200 uppercase font-extrabold mb-1">Online Sekarang</div>
          <div className="text-sm font-bold leading-none tracking-wide">Chat Sales 0878-7410-3003</div>
        </div>
      </a>
    </div>
  );
}
