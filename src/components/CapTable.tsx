"use client";

import { motion } from "motion/react";
import { about } from "@/content";

const colors = ["#f08a24", "#f6c999", "#8a8e94"];
const ease = [0.22, 1, 0.36, 1] as const;

export function CapTable() {
  const { label, holders } = about.capTable;
  return (
    <div className="rounded-[4px] border border-paper/15 bg-graphite-2/50 p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">{label}</p>
        <p className="text-xs text-paper/50">Stand: heute, morgen, für immer</p>
      </div>

      <div className="relative mt-12">
        {/* callout pointing at the CEO's sliver */}
        <div className="absolute -top-9 right-0 flex flex-col items-end">
          <span className="text-xs font-medium text-paper">Zoltán, CEO</span>
          <span className="mr-[0.6%] mt-1 h-3 w-px bg-paper/60" />
        </div>
        <div
          className="flex h-14 overflow-hidden rounded-[3px] bg-paper/5"
          role="img"
          aria-label={holders.map((h) => `${h.name} ${h.pct} Prozent`).join(", ")}
        >
          {holders.map((h, i) => (
            <motion.div
              key={h.name}
              className="h-full border-r-2 border-graphite last:border-r-0"
              style={{ backgroundColor: colors[i] }}
              initial={{ width: 0 }}
              whileInView={{ width: `${h.pct}%` }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.25, ease }}
            />
          ))}
        </div>
      </div>

      <ul className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
        {holders.map((h, i) => (
          <li key={h.name} className="flex flex-col items-start gap-2 sm:flex-row sm:gap-3">
            <span className="mt-1.5 size-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: colors[i] }} />
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight text-paper">
                {h.pct}
                <span className="ml-0.5 text-lg text-paper/60">%</span>
              </p>
              <p className="mt-1 text-sm font-medium text-paper">{h.name}</p>
              <p className="text-xs text-paper/50">{h.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
