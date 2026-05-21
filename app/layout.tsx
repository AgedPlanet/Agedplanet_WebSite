import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgedPlanet Ecommerce Inc.",
  description:
    "A simple, honest ecommerce landing page for AgedPlanet: product validation, supplier discipline, and Amazon FBA readiness.",
  metadataBase: new URL("https://agedplanet.com"),
  openGraph: {
    title: "AgedPlanet Ecommerce Inc.",
    description:
      "Ecommerce rebuilt around practical product validation and supplier quality.",
    siteName: "AgedPlanet",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
