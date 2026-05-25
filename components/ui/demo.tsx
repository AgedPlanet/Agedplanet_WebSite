"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const agedPlanetSplineScene = "/agedplanet-spline.html";

const scrollSpring = { stiffness: 320, damping: 34, mass: 0.16 };

const wordmark3dStyle = {
  color: "#2D1F14",
  textShadow:
    // Front face — crisp dark
    "0 1px 0 rgba(45,31,20,1)," +
    // Shallow bevel — lifting into lighter tones
    "0 2px 0 rgba(90,65,48,0.94)," +
    "0 3px 0 rgba(130,100,72,0.82)," +
    // Extrusion — warm stone shades
    "0 5px 0 rgba(175,145,115,0.66)," +
    "0 7px 0 rgba(200,170,140,0.72)," +
    // Contact shadow — subtle on beige
    "0 11px 14px rgba(0,0,0,0.14)," +
    // Soft ambient depth
    "0 20px 36px rgba(0,0,0,0.08)",
};

const taglineStyle = {
  color: "#2D1F14",
  textShadow:
    "0 1px 3px rgba(0,0,0,0.14)," +
    "0 4px 12px rgba(0,0,0,0.08)",
};

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const splineFrame = useRef<HTMLIFrameElement | null>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const rawScrollY = useTransform(scrollYProgress, [0, 1], ["-2%", "10%"]);
  const scrollY = useSpring(rawScrollY, scrollSpring);

  const [splineReady, setSplineReady] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data === "spline-loaded") setSplineReady(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section className="mx-2 mt-2 overflow-hidden rounded-[2rem] bg-[#FFF8F0] md:mx-4 md:mt-2 md:rounded-[2.5rem]">
      <div
        className="relative isolate flex h-[88vh] min-h-[620px] items-center justify-center overflow-hidden bg-[#C8B89A]"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className={`absolute inset-0 flex items-end px-6 pb-[16vh] pt-6 text-[#2D1F14] sm:px-10 sm:pb-[15vh] sm:pt-10 lg:px-20 lg:pb-[14vh] lg:pt-20 pointer-events-none ${isTouch ? "z-[22]" : "z-[25]"}`}>
          <div className="translate-x-[5vw] sm:translate-x-[4vw]">
            <h1
              className="max-w-5xl text-balance text-5xl font-bold leading-[0.94] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[7.5vw]"
              style={wordmark3dStyle}
            >
              AgedPlanet
            </h1>
            <p
              className="mt-3 max-w-4xl text-balance text-lg font-light leading-[1.22] tracking-[-0.015em] sm:mt-4 sm:text-2xl lg:text-[1.6vw]"
              style={taglineStyle}
            >
              Marketing, sourcing, and trading support for brands ready to move.
            </p>
          </div>
        </div>

        <div className="fixed left-0 top-[-28vh] z-20 h-[125vh] w-full">
          <motion.div
            className="relative h-full w-full transform-gpu will-change-transform"
            style={{ y: scrollY }}
            suppressHydrationWarning
          >
            <div className="absolute -inset-x-[4%] top-0 h-full transform-gpu will-change-transform" style={isTouch ? { touchAction: "none" } : undefined}>
              <iframe
                aria-label="AgedPlanet interactive orbital commerce background"
                className={`absolute inset-0 h-full w-full scale-[1.04] border-0 transition-opacity duration-1000 ${splineReady ? "opacity-100" : "opacity-0"}`}
                ref={splineFrame}
                style={{
                  filter:
                    "sepia(0.15) saturate(0.7) hue-rotate(340deg) brightness(0.85) contrast(1.35)",
                  ...(isTouch ? { pointerEvents: "auto", touchAction: "none" } : {}),
                }}
                loading="eager"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-presentation"
                src={agedPlanetSplineScene}
                title="AgedPlanet interactive orbital commerce background"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(45,31,20,0.12),transparent_30%),linear-gradient(135deg,rgba(45,31,20,0.22),rgba(45,31,20,0.08)_45%,rgba(0,0,0,0.12))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#C8B89A]/90 to-transparent" />
          </motion.div>
        </div>

        <div className="pointer-events-none relative z-30 flex h-full w-full flex-col justify-between p-6 text-[#2D1F14] sm:p-10 lg:p-20">
          <div className="flex items-center text-xs uppercase tracking-[0.32em] text-[#2D1F14]/60 sm:text-sm">
            <span>AgedPlanet Ecommerce Inc</span>
          </div>

          <div className="flex justify-end">
            <p className="max-w-[34rem] rounded-[1.5rem] bg-white/75 p-4 text-balance text-base leading-tight tracking-[-0.04em] text-[#2D1F14] shadow-lg ring-1 ring-[#2D1F14]/10 backdrop-blur-md sm:text-lg lg:text-[1.15vw]">
              AgedPlanet connects market strategy, supplier coordination, and
              commerce execution so products can move from opportunity to shelf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
