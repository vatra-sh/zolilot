"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, shop } from "@/content";
import { cart, totals, useCart } from "@/shop/cart";
import { BagIcon, CountMark, focus } from "./shop/ui";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  const { count } = totals(useCart().lines);
  const inShop = usePathname().startsWith("/shop");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-7 md:px-8">
        <Link href="/" aria-label="Zolilöt AG, zur Startseite" className="shrink-0">
          <Image src="/logo.png" alt="Zolilöt AG" width={1321} height={399} preload loading="eager" className="h-9 w-auto md:h-10" />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm text-graphite/80 transition-colors duration-300 hover:text-graphite after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-solder after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* desktop: split control, label goes to the shop, bag cell opens the cart */}
          <div className="hidden h-10 items-stretch rounded-[3px] border border-line bg-paper lg:inline-flex">
            <Link
              href="/shop"
              aria-current={inShop ? "page" : undefined}
              className={`relative flex items-center px-4 text-sm font-medium text-graphite transition-colors duration-300 hover:bg-paper-2 ${focus}`}
            >
              {shop.label}
              <span
                aria-hidden
                className={`absolute inset-x-4 bottom-2 h-px origin-left bg-solder transition-transform duration-300 ${inShop ? "scale-x-100" : "scale-x-0"}`}
              />
            </Link>
            <button
              type="button"
              onClick={() => cart.open()}
              aria-label={shop.cart.open(count)}
              className={`relative grid w-11 place-items-center border-l border-line text-graphite transition-colors duration-300 hover:bg-paper-2 ${focus}`}
            >
              <BagIcon />
              <CountMark n={count} className="absolute right-1 top-1" />
            </button>
          </div>
          {/* phone + tablet: bag only, always opens the cart */}
          <button
            type="button"
            onClick={() => cart.open()}
            aria-label={shop.cart.open(count)}
            className={`relative grid size-10 place-items-center rounded-[3px] border border-line text-graphite lg:hidden ${focus}`}
          >
            <BagIcon />
            <CountMark n={count} className="absolute -right-1.5 -top-1.5" />
          </button>
          <Link
            href="/#kontakt"
            className="group h-10 items-center gap-2.5 rounded-[3px] bg-graphite pl-4 pr-3.5 text-sm font-medium text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 hover:bg-ink inline-flex"
          >
            <span className="sm:hidden lg:inline xl:hidden">Offerte</span>
            <span className="hidden sm:inline lg:hidden xl:inline">Offerte anfragen</span>
            <span aria-hidden className="size-1.5 bg-solder transition-transform duration-500 ease-out-soft group-hover:rotate-45" />
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-[3px] border border-line lg:hidden"
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
              <li>
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3.5"
                >
                  <span>
                    <span className="font-display block text-lg font-medium text-graphite">{shop.label}</span>
                    <span className="block text-xs text-steel">{shop.menuMeta}</span>
                  </span>
                  <span aria-hidden className="text-solder">→</span>
                </Link>
              </li>
              {[...nav, { label: "Kontakt", href: "/#kontakt" }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display flex items-center justify-between border-b border-line py-3.5 text-lg font-medium text-graphite last:border-0"
                  >
                    {l.label}
                    <span aria-hidden className="text-solder">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
