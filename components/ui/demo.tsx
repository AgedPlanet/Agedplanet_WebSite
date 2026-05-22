"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const agedPlanetSplineScene =
  "https://my.spline.design/timqxyzhero2024edition-039464c17f0aade91ec16e3b8c25191e/";

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
        <div className="pointer-events-none relative z-20 flex h-full w-full flex-col justify-between p-6 text-white sm:p-10 lg:p-20">
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
            <iframe
              aria-label="AgedPlanet interactive orbital commerce background"
              className="absolute inset-0 h-full w-full scale-[1.03] border-0 opacity-95"
              loading="eager"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-presentation"
              src={agedPlanetSplineScene}
              title="AgedPlanet interactive orbital commerce background"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(0,113,227,0.26),transparent_30%),linear-gradient(135deg,rgba(0,0,0,0.82),rgba(0,0,0,0.32)_45%,rgba(0,0,0,0.76))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
