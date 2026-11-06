"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
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
        <p className="hidden sm:block">Aarau · Mo bis Fr nach der Schule</p>
      </div>
    </div>
  );
}
