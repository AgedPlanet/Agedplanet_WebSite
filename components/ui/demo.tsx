"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const agedPlanetSplineScene = "/agedplanet-spline.html";

const scrollSpring = { stiffness: 320, damping: 34, mass: 0.16 };

const wordmark3dStyle = {
  color: "#ffffff",
  WebkitTextFillColor: "#ffffff",
  textShadow:
    // Crisp bright-white face with glow
    "0 0 2px rgba(255,255,255,1)," +
    "0 0 6px rgba(255,255,255,0.92)," +
    // Tight front edge — pure white
    "0 1px 0 rgba(255,255,255,1)," +
    // Shallow bevel — barely visible, stays white
    "0 2px 0 rgba(245,245,245,0.94)," +
    "0 3px 0 rgba(220,220,220,0.82)," +
    // Controlled extrusion — darker but shorter stack
    "0 5px 0 rgba(130,130,130,0.68)," +
    "0 7px 0 rgba(80,80,80,0.72)," +
    // Tight contact shadow — grounds the text without muddying
    "0 11px 14px rgba(0,0,0,0.56)," +
    // Soft ambient depth
    "0 20px 36px rgba(0,0,0,0.46)," +
    // Wide airy glow — keeps the mark luminous
    "0 36px 80px rgba(255,255,255,0.18)",
  WebkitTextStroke: "0.5px rgba(255,255,255,0.7)",
};

const taglineStyle = {
  color: "#ffffff",
  textShadow:
    "0 1px 3px rgba(0,0,0,0.52)," +
    "0 4px 16px rgba(0,0,0,0.38)",
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
    <section className="mx-2 mt-0 overflow-hidden rounded-[2rem] bg-[#FFF8F0] md:mx-4 md:mt-2 md:rounded-[2.5rem]">
      <div
        className="relative isolate flex h-[88vh] min-h-[620px] items-center justify-center overflow-hidden bg-[#4B2E2B]"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 z-[25] flex items-end px-6 pb-[16vh] pt-6 text-white sm:px-10 sm:pb-[15vh] sm:pt-10 lg:px-20 lg:pb-[14vh] lg:pt-20">
          <div className="translate-x-[5vw] sm:translate-x-[4vw]">
            <h1
              className="max-w-5xl text-balance text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl md:text-8xl lg:text-[7.5vw]"
              style={wordmark3dStyle}
            >
              AgedPlanet
            </h1>
            <p
              className="mt-3 max-w-4xl text-balance text-lg font-light leading-[1.22] tracking-[-0.015em] text-white sm:mt-4 sm:text-2xl lg:text-[1.6vw]"
              style={taglineStyle}
            >
              Honest products. Cleaner operations. No hype tax.
            </p>
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
                className="absolute inset-0 h-full w-full scale-[1.03] border-0 opacity-100"
                style={{
                  filter:
                    "sepia(0.72) saturate(1.22) hue-rotate(334deg) brightness(0.82) contrast(1.08)",
                }}
                loading="eager"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-presentation"
                src={agedPlanetSplineScene}
                title="AgedPlanet interactive orbital commerce background"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(192,133,82,0.34),transparent_30%),linear-gradient(135deg,rgba(75,46,43,0.82),rgba(75,46,43,0.34)_45%,rgba(0,0,0,0.72))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#4B2E2B]/75 to-transparent" />
          </motion.div>
        </div>

        <div className="pointer-events-none relative z-30 flex h-full w-full flex-col justify-between p-6 text-[#FFF8F0] sm:p-10 lg:p-20">
          <div className="flex items-center text-xs uppercase tracking-[0.32em] text-[#FFF8F0]/80 sm:text-sm">
            <span>AgedPlanet Ecommerce Inc.</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:items-end">
            <div>
              <div
                aria-hidden="true"
                className="h-[5.05rem] sm:h-[8.75rem] lg:h-[9.75vw]"
              />
            </div>
            <p className="max-w-[42rem] justify-self-start rounded-[1.5rem] bg-[#4B2E2B]/68 p-5 text-balance text-lg leading-tight tracking-[-0.04em] text-[#FFF8F0] shadow-2xl ring-1 ring-[#C08552]/35 backdrop-blur-md sm:text-xl lg:text-[1.38vw]">
              Rebuilding ecommerce the practical way: validate demand, test
              suppliers, and launch only products worth standing behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
