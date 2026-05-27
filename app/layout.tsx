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
  title: "AgedPlanet | Marketing & Trading Agency",
  description:
    "AgedPlanet is a marketing and trading agency with certified Google Ads expertise, social media marketing across platforms, and ecommerce operations support — market strategy, supplier coordination, and commercial partnerships.",
  metadataBase: new URL("https://agedplanet.com"),
  openGraph: {
    title: "AgedPlanet | Marketing & Trading Agency",
    description:
      "Marketing, sourcing, and trading support for brands ready to move — certified Google Ads, social media, and ecommerce operations.",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="preload" as="fetch" href="/agedplanet-spline.html" />
        <link rel="modulepreload" href="https://unpkg.com/@splinetool/runtime@1.0.66/build/runtime.js" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
