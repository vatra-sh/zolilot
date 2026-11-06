"use client";

import { motion } from "motion/react";
import { Board } from "./Board";
import { hero, press } from "@/content";
import { ButtonLink } from "./Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative pt-12 md:pt-20">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-solder-ink"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-display mt-6 text-[2.35rem] font-semibold leading-[0.98] tracking-tight text-graphite min-[400px]:text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {hero.title.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: "40%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease }}
                >
                  {line}
                  {i === hero.title.length - 1 && <span className="text-solder">{hero.titleAccent}</span>}
                </motion.span>
              </span>
            ))}
        </h1>

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end md:gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            className="order-last text-sm text-steel md:order-first md:col-span-5 md:pb-1"
          >
            {hero.meta}
          </motion.p>
          <motion.div
            className="md:col-span-7 md:pl-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
          >
            <p className="max-w-xl text-pretty text-base leading-relaxed text-steel md:text-lg">{hero.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
              <ButtonLink href={hero.secondary.href} variant="ghost">
                {hero.secondary.label}
              </ButtonLink>
            </div>
          </motion.div>
        </div>

      </div>

      <motion.div
        className="mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        <Board />
      </motion.div>

      <div className="mx-auto mt-16 max-w-6xl px-7 md:mt-20 md:px-8">
        <div className="flex flex-col gap-4 border-y border-line py-6 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 font-medium text-[11px] uppercase tracking-[0.18em] text-steel">{press.label}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {press.items.map((p, i) => (
              <li
                key={p}
                className={`font-display text-lg font-semibold tracking-tight text-graphite/35 ${
                  i % 2 ? "italic" : ""
                }`}
                style={{ fontStretch: i % 3 === 0 ? "125%" : i % 3 === 1 ? "90%" : "105%" }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
