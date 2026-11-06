"use client";

import { motion } from "motion/react";
import { process } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  return (
    <section id="prozess" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="02" eyebrow={process.eyebrow} title={process.title} lead={process.lead} />

        <div className="relative mt-16 md:mt-24">
          {/* horizontal branch trace, desktop only */}
          <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-[2px] lg:block">
            <div className="absolute inset-0 bg-steel/20" />
            <motion.div
              className="absolute inset-0 origin-left bg-solder"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              transition={{ duration: 1.6, ease }}
            />
          </div>

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.1} className="relative">
                <motion.span
                  aria-hidden
                  className="relative z-10 hidden size-4 border-2 bg-paper lg:grid lg:place-items-center"
                  initial={{ borderColor: "rgba(107,110,115,0.45)" }}
                  whileInView={{ borderColor: "rgba(240,138,36,1)" }}
                  viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.4 }}
                >
                  <motion.span
                    className="size-1.5 bg-solder"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.4 }}
                  />
                </motion.span>
                <p className="font-display text-5xl font-semibold tracking-tight text-graphite/15 lg:mt-8">{s.n}</p>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight text-graphite">{s.title}</h3>
                <p className="mt-2 text-pretty text-[15px] leading-relaxed text-steel">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
