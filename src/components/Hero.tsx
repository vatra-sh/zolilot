"use client";

import Image from "next/image";
import { motion } from "motion/react";
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
          className="font-mono text-xs uppercase tracking-[0.18em] text-solder-ink"
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
            className="order-last font-mono text-[11px] leading-relaxed text-steel md:order-first md:col-span-5 md:pb-1"
          >
            {hero.certs.map((c, i) => (
              <span key={c} className="md:block">
                {c}
                {i < hero.certs.length - 1 && <span className="md:hidden">{"  ·  "}</span>}
              </span>
            ))}
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

      <div className="mx-auto mt-10 max-w-6xl px-3 sm:px-7 md:mt-14 md:px-8">
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-paper-2 ring-1 ring-line">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.07 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.6, ease }}
            >
              <Image
                src="/hero.jpg"
                alt="Zoltan, Gründer der Zolilöt AG, mit verschränkten Armen vor dem Firmenlogo und einer Lötstation"
                fill
                preload
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
              {/* glow on the soldering iron tip */}
              <span aria-hidden className="absolute left-[70.4%] top-[88.4%] size-0">
                <motion.span
                  className="absolute -left-6 -top-6 size-12 rounded-full bg-[radial-gradient(circle,rgba(255,214,150,0.95)_0%,rgba(240,138,36,0.5)_28%,rgba(240,138,36,0)_68%)] mix-blend-screen md:-left-10 md:-top-10 md:size-20"
                  animate={{ opacity: [0.55, 1, 0.7, 0.95, 0.55], scale: [0.92, 1.04, 0.96, 1.02, 0.92] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </motion.div>
          </div>
          <figcaption className="mt-3 flex justify-between px-4 font-mono text-[11px] text-steel sm:px-0">
            <span>{hero.caption}</span>
            <span className="hidden sm:inline">Aarau, CH</span>
          </figcaption>
        </motion.figure>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-7 md:mt-20 md:px-8">
        <div className="flex flex-col gap-4 border-y border-line py-6 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">{press.label}</p>
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
