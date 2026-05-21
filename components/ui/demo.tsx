"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="mx-2 mt-2 overflow-hidden rounded-[2rem] bg-white md:mx-4 md:mt-4 md:rounded-[2.5rem]">
      <div
        className="relative flex h-[88vh] min-h-[620px] items-center justify-center overflow-hidden bg-black"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-20 flex h-full w-full flex-col justify-between p-6 text-white sm:p-10 lg:p-20">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/80 sm:text-sm">
            <span>AgedPlanet Ecommerce Inc.</span>
            <span>Build mode</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[#9fd0ff]">
                Honest products. Cleaner operations. No hype tax.
              </p>
              <h1 className="max-w-5xl text-balance text-6xl font-semibold leading-[0.9] tracking-[-0.09em] sm:text-8xl lg:text-[8vw]">
                AgedPlanet
              </h1>
            </div>
            <p className="max-w-xl rounded-[1.5rem] bg-black/45 p-5 text-balance text-xl leading-tight tracking-[-0.04em] text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-md sm:text-2xl lg:text-[1.65vw]">
              Rebuilding ecommerce the practical way: validate demand, test
              suppliers, and launch only products worth standing behind.
            </p>
          </div>
        </div>

        <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              alt="Workspace with ecommerce planning tools and product research"
              className="grayscale-0"
              fill
              priority
              sizes="100vw"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=85&w=2400"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/35 to-black/70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
