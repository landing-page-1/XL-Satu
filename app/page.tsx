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

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18499693351">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-18499693351');
        </script>
      </body>
    </html>
  );
}
