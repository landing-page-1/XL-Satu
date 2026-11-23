import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Internet Cepat ID - Partner Penjualan Internet Rumah XL Satu | Promo FWA & FTTH",
  description: "Internet Cepat, Stabil, & Unlimited Untuk Rumah & Usaha. Dapatkan promo paket XL SATU Fiber dan FWA melalui Internet Cepat ID, partner penjualan mandiri terdaftar.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
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

        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NW6Z4NDF"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            document.addEventListener('click', function(e) {
              var anchor = e.target && e.target.closest ? e.target.closest('a') : null;
              if (!anchor) return;
              var href = anchor.getAttribute('href') || '';
              if (href.indexOf('wa.me/') !== -1) {
                window.dataLayer.push({
                  event: 'whatsapp_click',
                  whatsapp_url: href,
                  link_text: (anchor.innerText || '').trim()
                });
                gtag('event', 'conversion', {
                  event_category: 'WhatsApp',
                  event_label: href
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
