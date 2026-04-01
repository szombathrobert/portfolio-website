import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Szombath Róbert | Windows Sysadmin & Webfejlesztő",
  description: "Letisztult webes megoldások és betonbiztos Windows szerver-infrastruktúra. Tiszta kód, sötét témák, maximális teljesítmény.",
  openGraph: {
    title: "Szombath Róbert | Portfólió",
    description: "Windows Sysadmin & Webfejlesztő",
    url: "https://szombath-robert-portfolio.vercel.app/",
    siteName: "Szombath Róbert Portfólió",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Szombath Róbert Portfólió Preview",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="antialiased bg-midnight">
        {children}
        <Analytics />
      </body>
    </html>
  );
}