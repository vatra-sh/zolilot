"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { nav } from "@/content";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-7 md:px-8">
        <a href="#top" aria-label="Zolilöt AG, zur Startseite" className="shrink-0">
          <Image src="/logo.png" alt="Zolilöt AG" width={1321} height={399} preload className="h-9 w-auto md:h-10" />
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-graphite/80 transition-colors duration-300 hover:text-graphite after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-solder after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden h-10 items-center rounded-md bg-graphite px-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink sm:inline-flex"
          >
            Offerte anfragen
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-md border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-graphite transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-graphite transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-7 py-4 md:px-8">
              {[...nav, { label: "Kontakt", href: "#kontakt" }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display flex items-center justify-between border-b border-line py-3.5 text-lg font-medium text-graphite last:border-0"
                  >
                    {l.label}
                    <span aria-hidden className="text-solder">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
