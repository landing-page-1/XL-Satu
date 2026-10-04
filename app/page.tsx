import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FwaPackages from "@/components/FwaPackages";
import FtthPackages from "@/components/FtthPackages";
import Steps from "@/components/Steps";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full flex flex-col pt-[104px] md:pt-[116px]">
        <Hero />
        <Features />
        <FwaPackages />
        <FtthPackages />
        <Steps />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
