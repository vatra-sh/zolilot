"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Tab = { id: string; label: string; count: number; intro: string; panel: ReactNode };

/** Accessible tabs (arrow keys, roving tabindex) switching between team groups. */
export function TeamTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  function onKey(e: KeyboardEvent, i: number) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Team" className="flex gap-8 border-b border-line">
        {tabs.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative -mb-px flex items-baseline gap-2 pb-3.5 text-[15px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solder ${
                selected ? "text-graphite" : "text-steel hover:text-graphite"
              }`}
            >
              {t.label}
              <span className={`text-xs tabular-nums ${selected ? "text-solder-ink" : "text-steel/70"}`}>{t.count}</span>
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-solder transition-transform duration-500 ease-out-soft ${
                  selected ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-5 max-w-2xl text-sm text-steel">{current.intro}</p>
          <div className="mt-8">{current.panel}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
