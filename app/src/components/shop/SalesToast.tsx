"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/catalogue";
import { shop } from "@/content";
import { ProductImage } from "./ui";

const buyers = ["Linus", "Maurice", "Julius", "Deniz", "Marwin", "Cedric", "Levi", "Damon"];
const KEY = "zl-toast-n";
const MAX = 3;

type Toast = { who: string; n: number; slug: string; ago: number };

function seen() {
  try {
    return Number(window.sessionStorage.getItem(KEY) ?? 0);
  } catch {
    return 0;
  }
}
function bump(n: number) {
  try {
    window.sessionStorage.setItem(KEY, String(n));
  } catch {
    // storage blocked: the toast just repeats per page
  }
}

/** Fake "someone just bought" notice: at most 3 per visit, fade only, off with reduced motion. */
export function SalesToast() {
  const [toast, setToast] = useState<Toast | null>(null);
  const [stopped, setStopped] = useState(false);
  const inCheckout = usePathname().startsWith("/shop/kasse");

  useEffect(() => {
    if (stopped || inCheckout || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const show = () => {
      const n = seen();
      if (n >= MAX) return;
      bump(n + 1);
      const p = products[Math.floor(Math.random() * products.length)];
      setToast({ who: buyers[Math.floor(Math.random() * buyers.length)], n: 1 + Math.floor(Math.random() * 4), slug: p.slug, ago: 1 + Math.floor(Math.random() * 9) });
      timers.push(setTimeout(() => setToast(null), 6000));
      timers.push(setTimeout(show, 25000));
    };
    timers.push(setTimeout(show, 8000));
    return () => timers.forEach(clearTimeout);
  }, [stopped, inCheckout]);

  const product = toast ? products.find((p) => p.slug === toast.slug) : undefined;

  return (
    <div role="status" className="pointer-events-none fixed bottom-24 left-4 z-40 md:bottom-6">
      <AnimatePresence>
        {toast && product && (
          <motion.div
            key={toast.slug + toast.who}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex w-[300px] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-[3px] border border-line bg-white p-3 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]"
          >
            <span className="w-12 shrink-0 overflow-hidden rounded-[2px] border border-line">
              <ProductImage product={product} sizes="48px" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs leading-snug text-graphite">{shop.toast.bought(toast.who, toast.n, product.name)}</span>
              <span className="mt-0.5 block text-[11px] text-steel">{shop.toast.ago(toast.ago)}</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setToast(null);
                setStopped(true);
              }}
              aria-label={shop.toast.dismiss}
              className="self-start text-steel hover:text-graphite"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
