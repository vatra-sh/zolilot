"use client";

import { useRef, useState } from "react";
import { viewLabels, views, type Product } from "@/catalogue";
import { focus, ProductImage } from "./ui";

/** Desktop: main image + thumbnails. Phone: swipe with scroll-snap and position dots. */
export function Gallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  const go = (i: number) => {
    setActive(i);
    const el = track.current;
    if (el && el.scrollWidth > el.clientWidth) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        onScroll={(e) => {
          const el = e.currentTarget;
          const i = Math.round(el.scrollLeft / el.clientWidth);
          if (i !== active) setActive(i);
        }}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-[3px] border border-line bg-white [scrollbar-width:none] md:block md:overflow-hidden"
        aria-label="Produktbilder"
      >
        {views.map((v, i) => (
          <div
            key={v}
            className={`w-full shrink-0 snap-center md:transition-opacity md:duration-500 md:ease-out-soft ${
              i === active ? "md:block md:opacity-100" : "md:hidden md:opacity-0"
            }`}
          >
            <ProductImage product={product} view={v} priority={i === 0} sizes="(min-width: 768px) 55vw, 100vw" />
          </div>
        ))}
      </div>

      {/* phone dots */}
      <div className="mt-3 flex justify-center gap-1.5 md:hidden" aria-hidden>
        {views.map((v, i) => (
          <span key={v} className={`h-1 w-5 rounded-[1px] transition-colors duration-300 ${i === active ? "bg-graphite" : "bg-line"}`} />
        ))}
      </div>

      {/* desktop thumbnails */}
      <ul className="mt-3 hidden grid-cols-4 gap-3 md:grid">
        {views.map((v, i) => (
          <li key={v}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-label={viewLabels[v]}
              aria-pressed={i === active}
              className={`block w-full overflow-hidden rounded-[3px] border bg-white transition-colors duration-300 ${
                i === active ? "border-graphite" : "border-line hover:border-steel"
              } ${focus}`}
            >
              <ProductImage product={product} view={v} sizes="140px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
