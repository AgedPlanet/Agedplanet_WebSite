"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#focus" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#status" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".mobile-panel") &&
        !target.closest(".mobile-toggle")
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open, close]);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50 border-b border-[#2D1F14]/10 bg-[#C8B89A]/95 text-[#2D1F14] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 text-base text-[#2D1F14]">
        <a
          className="flex items-center gap-3 font-semibold tracking-[-0.02em]"
          href="#top"
        >
          <Image
            alt="AgedPlanet"
            className="-my-3 size-28"
            height={112}
            src="/agedplanet-logo.png"
            width={112}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-[#2D1F14]/75 sm:flex">
          {navLinks.map((link) => (
            <a
              className="transition hover:text-[#2D1F14]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="mobile-toggle sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-6" />
        </button>
      </nav>

      {/* Mobile side panel — slides from right */}
      <div
        className={`mobile-panel fixed top-0 right-0 z-50 h-screen w-64 bg-[#4B2E2B]/90 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-in-out sm:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            aria-label="Close menu"
            className="text-[#FFF8F0]/70 transition hover:text-[#FFF8F0]"
            onClick={close}
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col items-center gap-1 px-4 pt-2 pb-8">
          {navLinks.map((link) => (
            <a
              className="w-full rounded-lg px-4 py-3 text-center text-lg font-medium text-[#FFF8F0]/80 transition hover:bg-[#FFF8F0]/10 hover:text-[#FFF8F0]"
              href={link.href}
              key={link.href}
              onClick={close}
            >
              {link.label}
            </a>
          ))}

          {/* Separator */}
          <div className="my-4 h-px w-12 bg-[#C08552]/30" />

          {/* Brand label */}
          <p className="text-xs uppercase tracking-[0.32em] text-[#FFF8F0]/40">
            AgedPlanet
          </p>
        </div>
      </div>
    </header>
  );
}
