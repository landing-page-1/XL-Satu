import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "XL SATU & XL Internet | Promo Terbaik",
  description: "Internet Cepat, Stabil, & Unlimited Untuk Rumah & Usaha. Daftar paket XL SATU Fiber dan FWA sekarang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-200 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
