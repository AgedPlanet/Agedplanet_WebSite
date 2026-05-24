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
    "AgedPlanet is a marketing and trading agency supporting market strategy, supplier coordination, ecommerce launch, and commercial partnerships.",
  metadataBase: new URL("https://agedplanet.com"),
  openGraph: {
    title: "AgedPlanet | Marketing & Trading Agency",
    description:
      "Marketing, sourcing, and trading support for brands ready to move.",
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
