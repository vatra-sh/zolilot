"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { shop } from "@/content";

/** Shop pages: the classic announcement bar, crossfading every 4 s. */
function Announcements() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % shop.announcements.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-graphite text-paper/85">
      <div className="mx-auto flex h-8 max-w-6xl items-center justify-center px-7 text-[11px] font-medium tracking-wide md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {shop.announcements[i]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function StatusBar() {
  return usePathname().startsWith("/shop") ? <Announcements /> : <SolderStatus />;
}

function SolderStatus() {
  const [temp, setTemp] = useState(360);
  useEffect(() => {
    const id = setInterval(() => setTemp(358 + Math.round(Math.random() * 4)), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-graphite text-paper/75">
      <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-7 font-medium text-[11px] tracking-wide md:px-8">
        <p className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-solder/60 [animation-duration:2.4s]" />
            <span className="relative size-1.5 rounded-full bg-solder" />
          </span>
          Lötkolben betriebsbereit · <span className="tabular-nums text-paper">{temp} °C</span>
        </p>
        <p className="hidden items-center gap-2 sm:flex">
          <a href="/sicherheit" className="transition-colors duration-300 hover:text-paper">
            Tage ohne Lötunfall · <span className="tabular-nums text-paper">0</span>
          </a>
          <span aria-hidden>·</span>
          Aarau · Mo bis Fr nach der Schule
        </p>
      </div>
    </div>
  );
}
