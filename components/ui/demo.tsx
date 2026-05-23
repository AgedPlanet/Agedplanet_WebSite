"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const agedPlanetSplineScene = "/agedplanet-spline.html";

const scrollSpring = { stiffness: 320, damping: 34, mass: 0.16 };

const wordmark3dStyle = {
  textShadow:
    "0 1px 0 rgba(225,246,255,0.78), 0 2px 0 rgba(157,210,238,0.62), 0 4px 0 rgba(74,139,178,0.45), 0 8px 0 rgba(10,46,68,0.38), 0 18px 34px rgba(0,0,0,0.82), 0 34px 76px rgba(0,113,227,0.34)",
  WebkitTextStroke: "1px rgba(255,255,255,0.32)",
};

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const rawScrollY = useTransform(scrollYProgress, [0, 1], ["-2%", "10%"]);
  const scrollY = useSpring(rawScrollY, scrollSpring);

  return (
    <section className="mx-2 mt-0 overflow-hidden rounded-[2rem] bg-white md:mx-4 md:mt-2 md:rounded-[2.5rem]">
      <div
        className="relative isolate flex h-[88vh] min-h-[620px] items-center justify-center overflow-hidden bg-black"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end px-6 pb-[16vh] pt-6 text-white sm:px-10 sm:pb-[15vh] sm:pt-10 lg:px-20 lg:pb-[14vh] lg:pt-20">
          <div className="translate-x-[5vw] sm:translate-x-[4vw]">
            <h1
              className="max-w-5xl text-balance text-6xl font-semibold leading-[0.9] tracking-[-0.09em] text-white/95 sm:text-8xl lg:text-[8vw]"
              style={wordmark3dStyle}
            >
              AgedPlanet
            </h1>
          </div>
        </div>

        <div className="fixed left-0 top-[-28vh] z-20 h-[125vh] w-full">
          <motion.div
            className="relative h-full w-full transform-gpu will-change-transform"
            style={{ y: scrollY }}
          >
            <div className="absolute -inset-x-[4%] top-0 h-full transform-gpu will-change-transform">
              <iframe
                aria-label="AgedPlanet interactive orbital commerce background"
                className="absolute inset-0 h-full w-full scale-[1.03] border-0 opacity-95"
                loading="eager"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-presentation"
                src={agedPlanetSplineScene}
                title="AgedPlanet interactive orbital commerce background"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(0,113,227,0.28),transparent_28%),linear-gradient(135deg,rgba(0,0,0,0.78),rgba(0,0,0,0.24)_45%,rgba(0,0,0,0.74))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>
        </div>

        <div className="pointer-events-none relative z-30 flex h-full w-full flex-col justify-between p-6 text-white sm:p-10 lg:p-20">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/80 sm:text-sm">
            <span>AgedPlanet Ecommerce Inc.</span>
            <span>Build mode</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.36em] text-[#9fd0ff]">
                Honest products. Cleaner operations. No hype tax.
              </p>
              <div
                aria-hidden="true"
                className="h-[3.4rem] sm:h-[5.4rem] lg:h-[7.2vw]"
              />
            </div>
            <p className="max-w-xl rounded-[1.5rem] bg-black/45 p-5 text-balance text-xl leading-tight tracking-[-0.04em] text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-md sm:text-2xl lg:text-[1.65vw]">
              Rebuilding ecommerce the practical way: validate demand, test
              suppliers, and launch only products worth standing behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
