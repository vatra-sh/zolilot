import Image from "next/image";
import { chf, discountPct, imageUrl, type Product, type View } from "@/catalogue";

export const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solder";

export function BagIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6.5h12l-1 11H5l-1-11Z" strokeLinejoin="round" />
      <path d="M7.5 8.5V5.5a2.5 2.5 0 0 1 5 0v3" strokeLinecap="round" />
    </svg>
  );
}

/** Square count marker, never a pill. */
export function CountMark({ n, className = "" }: { n: number; className?: string }) {
  if (n <= 0) return null;
  return (
    <span
      aria-hidden
      className={`grid h-4 min-w-4 place-items-center rounded-[2px] bg-solder px-[3px] text-[10px] font-semibold leading-none text-white tabular-nums ${className}`}
    >
      {n > 99 ? "99" : n}
    </span>
  );
}

export function ProductImage({
  product,
  view = "front",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 25vw, 50vw",
}: {
  product: Product;
  view?: View;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={imageUrl(product.slug, view)}
      alt={view === "front" ? product.name : `${product.name}, ${view}`}
      width={600}
      height={600}
      sizes={sizes}
      preload={priority}
      loading={priority ? "eager" : "lazy"}
      className={`block aspect-square w-full bg-white object-contain ${className}`}
    />
  );
}

/** Price, struck "original" price and the percentage tag. */
export function PriceLine({ product, size = "md", unit }: { product: Product; size?: "md" | "lg"; unit?: number }) {
  const price = unit ?? product.price;
  const pct = discountPct(product);
  const up = pct < 0;
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className={`font-display font-semibold tabular-nums text-graphite ${size === "lg" ? "text-3xl" : "text-base"}`}>
        {chf(price)}
        {product.unit && <span className="ml-1 text-xs font-normal text-steel">{product.unit}</span>}
      </span>
      <span className={`tabular-nums text-steel line-through ${size === "lg" ? "text-base" : "text-xs"}`}>
        <span className="sr-only">{up ? "Wert" : "statt"} </span>
        {chf(product.compareAt)}
      </span>
      <span className="inline-flex h-5 items-center rounded px-1.5 text-[11px] font-semibold tabular-nums text-solder-ink bg-paper-2">
        {up ? `+${-pct}` : `-${pct}`} %
      </span>
    </div>
  );
}

export function Stepper({
  value,
  onChange,
  label,
  min = 1,
}: {
  value: number;
  onChange: (n: number) => void;
  label: string;
  min?: number;
}) {
  const btn = `grid w-9 place-items-center text-graphite transition-colors duration-300 hover:bg-paper-2 disabled:text-steel/50 ${focus}`;
  return (
    <div className="inline-flex h-10 items-stretch rounded-[3px] border border-line bg-white" role="group" aria-label={label}>
      <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= min} aria-label="Weniger">
        −
      </button>
      <span className="grid min-w-8 place-items-center text-sm font-medium tabular-nums text-graphite" aria-live="polite">
        {value}
      </span>
      <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= 99} aria-label="Mehr">
        +
      </button>
    </div>
  );
}
