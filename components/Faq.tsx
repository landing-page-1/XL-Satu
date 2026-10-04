"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-slate-100 py-24">
      <div className="max-w-[860px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Paling Sering Ditanyakan</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">FAQ Seputar XL SATU & XL Internet</h2>
          <p className="text-base text-slate-600 mt-3">Informasi lengkap agar Anda semakin yakin berlangganan.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-200"
              >
                <button
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-blue-600 transition-colors group"
                  onClick={() => toggleFaq(index)}
                  type="button"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 group-hover:text-blue-600 ${isOpen ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <div 
                  className={`px-5 font-medium text-slate-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
