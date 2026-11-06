"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { chf, shipLabel, type Product } from "@/catalogue";
import { shop } from "@/content";
import { cart, unitPrice } from "@/shop/cart";
import { focus, PriceLine, Stepper } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fake countdown that visibly resets at zero. Server renders 10:00, ticking starts after mount. */
function Countdown() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const left = 600 - (t % 600);
  // for 4 seconds after each reset the shop admits it extended the offer
  const extended = t > 0 && t % 600 < 4;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-sm font-medium text-graphite">
        {shop.flash.title} <span className="font-normal text-steel">{shop.flash.endsIn}</span>
      </p>
      <AnimatePresence mode="wait" initial={false}>
        {extended ? (
          <motion.p key="ext" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }} className="text-right text-xs text-steel">
            {shop.flash.extended}
          </motion.p>
        ) : (
          <motion.p key="time" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }} className="font-display text-lg font-semibold tabular-nums text-[#d62828]" aria-hidden>
            {mm}:{ss}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Viewers() {
  const [n, setN] = useState(13);
  useEffect(() => {
    const id = setInterval(() => setN(11 + Math.floor(Math.random() * 3)), 5000);
    return () => clearInterval(id);
  }, []);
  return <p className="text-xs text-steel">{shop.viewers(n)}</p>;
}

function AddButton({ onClick, done, compact = false }: { onClick: () => void; done: boolean; compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex h-12 w-full items-stretch overflow-hidden rounded-[3px] bg-graphite text-[15px] font-medium text-paper shadow-[0_1px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] ${focus}`}
    >
      <span className={`flex flex-1 items-center whitespace-nowrap ${compact ? "justify-center px-4" : "px-5"}`}>{done ? shop.buy.added : shop.buy.add}</span>
      <span className="relative grid w-12 place-items-center overflow-hidden border-l border-white/10">
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-solder transition-transform duration-500 ease-out-soft group-hover:scale-y-100" />
        <span aria-hidden className="relative">{done ? "✓" : "+"}</span>
      </span>
    </button>
  );
}

export function BuyBox({ product }: { product: Product }) {
  const [variant, setVariant] = useState(product.variants?.options[0].name);
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mainBtn = useRef<HTMLDivElement>(null);
  const unit = unitPrice(product, variant);

  useEffect(() => {
    const el = mainBtn.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSticky(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const add = () => {
    cart.add(product.slug, variant, qty);
    setDone(true);
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <div>
      <div className="mt-5">
        <PriceLine product={product} size="lg" unit={unit} />
        <p className="mt-1 text-xs text-steel">{shop.cart.taxNote}</p>
      </div>

      {/* the parody module: framed, so the shell around it stays calm */}
      <div className="mt-6 space-y-2 rounded-[3px] border border-line bg-white p-4">
        <Countdown />
        <div className="h-px bg-line" />
        <p className="text-sm font-medium text-[#b45309]">{shop.stock}</p>
        <Viewers />
      </div>

      {product.variants && (
        <fieldset className="mt-6">
          <legend className="text-sm text-graphite">
            {product.variants.label}: <span className="font-medium">{variant}</span>
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.variants.options.map((o) => (
              <label
                key={o.name}
                className={`relative inline-flex h-10 cursor-pointer items-center rounded-[3px] border px-3.5 text-sm transition-colors duration-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-solder ${
                  o.name === variant ? "border-graphite bg-white text-graphite" : "border-line text-graphite/80 hover:border-steel"
                }`}
              >
                <input type="radio" name="variant" value={o.name} checked={o.name === variant} onChange={() => setVariant(o.name)} className="sr-only" />
                {o.name}
                {o.delta ? <span className="ml-1.5 text-xs text-steel">{o.delta > 0 ? "+" : "−"} {chf(Math.abs(o.delta))}</span> : null}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div ref={mainBtn} className="mt-6 flex items-center gap-3">
        <Stepper value={qty} onChange={setQty} label={shop.buy.qty} />
        <div className="flex-1">
          <AddButton onClick={add} done={done} />
        </div>
      </div>

      <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-steel">Lieferung</dt>
          <dd className="text-right text-graphite">
            {shipLabel(product)}
            {product.ship.from !== "digital" && <span className="block text-xs text-steel">{product.ship.note ?? shop.buy.shipping}</span>}
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-steel">Rückgabe</dt>
          <dd className="text-right text-graphite">{shop.buy.returns}</dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-steel">Geschenk</dt>
          <dd className="text-right text-graphite">{shop.buy.gift}</dd>
        </div>
      </dl>

      {/* phone: slim sticky bar once the main button is out of view */}
      <AnimatePresence>
        {sticky && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs text-steel">{product.name}</p>
                <p className="font-display text-base font-semibold text-graphite tabular-nums">{chf(unit)}</p>
              </div>
              <div className="shrink-0">
                <AddButton onClick={add} done={done} compact />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
