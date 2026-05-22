"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { type PointerEvent, useRef } from "react";

const agedPlanetSplineScene =
  "https://my.spline.design/timqxyzhero2024edition-039464c17f0aade91ec16e3b8c25191e/";

const scrollSpring = { stiffness: 320, damping: 34, mass: 0.16 };

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useTransform(rawMouseX, [-1, 1], [-96, 96]);
  const mouseY = useTransform(rawMouseY, [-1, 1], [-58, 58]);
  const rotateX = useTransform(rawMouseY, [-1, 1], [1.6, -1.6]);
  const rotateY = useTransform(rawMouseX, [-1, 1], [-2.8, 2.8]);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const rawScrollY = useTransform(scrollYProgress, [0, 1], ["-4%", "12%"]);
  const scrollY = useSpring(rawScrollY, scrollSpring);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    rawMouseX.set(Math.max(-1, Math.min(1, x)));
    rawMouseY.set(Math.max(-1, Math.min(1, y)));
  }

  function resetPointer() {
    rawMouseX.set(0);
    rawMouseY.set(0);
  }

  return (
    <section className="mx-2 mt-0 overflow-hidden rounded-[2rem] bg-white md:mx-4 md:mt-2 md:rounded-[2.5rem]">
      <div
        className="relative flex h-[88vh] min-h-[620px] items-center justify-center overflow-hidden bg-black"
        onPointerLeave={resetPointer}
        onPointerMove={handlePointerMove}
        ref={container}
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
          perspective: "1200px",
        }}
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

        <div className="fixed left-0 top-[-15vh] h-[125vh] w-full">
          <motion.div
            className="relative h-full w-full transform-gpu will-change-transform"
            style={{ y: scrollY }}
          >
            <motion.div
              className="absolute -inset-x-[8%] -top-[5%] h-[114%] transform-gpu will-change-transform"
              style={{
                rotateX,
                rotateY,
                scale: 1.06,
                x: mouseX,
                y: mouseY,
              }}
            >
              <iframe
                aria-label="AgedPlanet interactive orbital commerce background"
                className="pointer-events-none absolute inset-0 h-full w-full border-0 opacity-95"
                loading="eager"
                referrerPolicy="no-referrer"
                sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-presentation"
                src={agedPlanetSplineScene}
                title="AgedPlanet interactive orbital commerce background"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(0,113,227,0.28),transparent_28%),linear-gradient(135deg,rgba(0,0,0,0.78),rgba(0,0,0,0.24)_45%,rgba(0,0,0,0.74))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
