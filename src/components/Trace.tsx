"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Wraps the page body; draws an orange solder trace down the left rail as you scroll. */
export function TraceRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  // overdamped spring: smooths wheel steps without any overshoot
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 42, restDelta: 0.0005 });
  const top = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="rail-x pointer-events-none absolute inset-y-0 z-20 w-[2px] -translate-x-1/2">
        <div className="absolute inset-0 bg-steel/20" />
        <motion.div style={{ scaleY: progress }} className="absolute inset-0 origin-top bg-solder" />
        <motion.div style={{ top }} className="absolute left-1/2 size-0">
          <motion.span
            className="absolute -left-5 -top-5 size-10 rounded-full bg-[radial-gradient(circle,rgba(255,196,120,0.95)_0%,rgba(240,138,36,0.45)_30%,rgba(240,138,36,0)_70%)]"
            animate={{ opacity: [0.75, 1, 0.8, 1, 0.75] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute -left-[3px] -top-[3px] size-1.5 rounded-full bg-white" />
        </motion.div>
      </div>
      {children}
    </div>
  );
}

/** A PCB pad on the rail; lights up when the trace head (viewport centre) reaches it. */
export function Pad({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <motion.span
      aria-hidden
      className={`rail-x absolute z-30 grid size-3.5 -translate-x-1/2 place-items-center border-2 ${
        dark ? "bg-graphite" : "bg-paper"
      } ${className}`}
      initial={{ borderColor: "rgba(107,110,115,0.45)" }}
      whileInView={{ borderColor: "rgba(240,138,36,1)" }}
      viewport={{ once: false, margin: "0px 0px -50% 0px" }}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        className="size-1 bg-solder"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "0px 0px -50% 0px" }}
        transition={{ duration: 0.4 }}
      />
    </motion.span>
  );
}
