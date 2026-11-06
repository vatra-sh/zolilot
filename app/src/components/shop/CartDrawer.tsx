"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { chf, products } from "@/catalogue";
import { shop } from "@/content";
import { cart, totals, useCart } from "@/shop/cart";
import { focus, PriceLine, ProductImage, Stepper } from "./ui";

const bestsellers = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

export function CartDrawer() {
  const { lines, open, announce } = useCart();
  const ref = useRef<HTMLDialogElement>(null);
  const { items, count, subtotal, giftShipping } = totals(lines);
  const inCart = new Set(items.map((i) => i.slug));
  const upsell = bestsellers.find((p) => !inCart.has(p.slug)) ?? bestsellers[0];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>
      <dialog
        ref={ref}
        aria-labelledby="cart-title"
        onClose={() => cart.close()}
        onClick={(e) => {
          if (e.target === e.currentTarget) cart.close();
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-[420px] translate-x-3 bg-paper p-0 text-ink opacity-0 shadow-[-24px_0_60px_-30px_rgba(0,0,0,0.35)] transition-[opacity,translate,display,overlay] transition-discrete duration-[350ms] ease-out-soft backdrop:bg-ink/40 backdrop:opacity-0 backdrop:transition-opacity backdrop:duration-[350ms] open:translate-x-0 open:opacity-100 open:backdrop:opacity-100 starting:open:translate-x-3 starting:open:opacity-0 starting:open:backdrop:opacity-0"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-6">
            <h2 id="cart-title" className="font-display text-lg font-semibold text-graphite">
              {shop.cart.title}
              {count > 0 && <span className="ml-2 text-sm font-normal text-steel tabular-nums">{count} Artikel</span>}
            </h2>
            <button
              type="button"
              onClick={() => cart.close()}
              aria-label={shop.cart.close}
              className={`grid size-10 place-items-center rounded-[3px] border border-line text-graphite transition-colors duration-300 hover:bg-paper-2 ${focus}`}
            >
              <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <p className="font-display text-xl font-semibold text-graphite">{shop.cart.empty}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{shop.cart.emptyLead}</p>
              <Link
                href="/shop"
                onClick={() => cart.close()}
                className={`mt-6 inline-flex h-11 items-center rounded-[3px] bg-graphite px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink ${focus}`}
              >
                {shop.cart.toShop}
              </Link>
              <ul className="mt-8 grid grid-cols-2 gap-4">
                {bestsellers.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/shop/${p.slug}`} onClick={() => cart.close()} className={`group block ${focus}`}>
                      <div className="overflow-hidden rounded-[3px] border border-line">
                        <ProductImage product={p} sizes="180px" />
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm font-medium text-graphite group-hover:text-solder-ink">{p.name}</p>
                      <p className="mt-0.5 text-xs text-steel tabular-nums">{chf(p.price)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <div className="shrink-0 border-b border-line px-6 py-3">
                <p className="text-xs text-steel">{shop.cart.freeShipping}</p>
                <div className="mt-2 h-1 overflow-hidden rounded-[1px] bg-paper-2">
                  <div className="h-full w-[99.9%] bg-solder" />
                </div>
              </div>
              <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
                {items.map((i) => (
                  <li key={i.key} className="flex gap-4 py-5">
                    <Link
                      href={`/shop/${i.slug}`}
                      onClick={() => cart.close()}
                      className="w-20 shrink-0 self-start overflow-hidden rounded-[3px] border border-line"
                    >
                      <ProductImage product={i.product} sizes="80px" />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-graphite">{i.product.name}</p>
                      <p className="mt-0.5 text-xs text-steel">
                        {[i.variant, shop.stock].filter(Boolean).join(" · ")}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <Stepper value={i.qty} onChange={(n) => cart.setQty(i.key, n)} label={`${shop.buy.qty}, ${i.product.name}`} min={1} />
                        <p className="text-sm font-medium text-graphite tabular-nums">{chf(i.unit * i.qty)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => cart.remove(i.key)}
                        className={`mt-2 text-xs text-steel underline-offset-2 hover:text-graphite hover:underline ${focus}`}
                      >
                        {shop.cart.remove}
                      </button>
                    </div>
                  </li>
                ))}
                <li className="flex gap-4 py-5">
                  <div className="grid size-20 shrink-0 place-items-center rounded-[3px] border border-dashed border-line bg-white text-2xl">
                    <svg aria-hidden viewBox="0 0 40 40" className="size-10" fill="none" stroke="#1d1f22" strokeWidth="3" strokeLinecap="round">
                      <path d="M6 30 C14 10 28 8 34 22" />
                      <rect x="3" y="27" width="7" height="6" rx="1" fill="#1d1f22" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-graphite">{shop.cart.gift.name}</p>
                    <p className="mt-0.5 text-xs text-steel">{shop.cart.gift.note}</p>
                    <p className="mt-3 text-sm text-graphite tabular-nums">CHF 0.00 + {chf(giftShipping)}</p>
                  </div>
                </li>
                {upsell && (
                  <li className="py-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-steel">{shop.cart.upsell}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <Link href={`/shop/${upsell.slug}`} onClick={() => cart.close()} className="w-14 shrink-0 overflow-hidden rounded-[3px] border border-line">
                        <ProductImage product={upsell} sizes="56px" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-graphite">{upsell.name}</p>
                        <PriceLine product={upsell} />
                      </div>
                      <button
                        type="button"
                        onClick={() => cart.add(upsell.slug, upsell.variants?.options[0].name)}
                        aria-label={`${upsell.name} hinzufügen`}
                        className={`grid size-9 shrink-0 place-items-center rounded-[3px] border border-line text-graphite transition-colors duration-300 hover:border-graphite ${focus}`}
                      >
                        +
                      </button>
                    </div>
                  </li>
                )}
              </ul>
              <div className="shrink-0 border-t border-line px-6 pb-6 pt-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm text-steel">{shop.cart.subtotal}</p>
                  <p className="font-display text-xl font-semibold text-graphite tabular-nums">{chf(subtotal)}</p>
                </div>
                <p className="mt-1 text-xs text-steel">{shop.cart.taxNote}</p>
                <Link
                  href="/shop/kasse"
                  onClick={() => cart.close()}
                  className={`group mt-4 flex h-12 items-stretch overflow-hidden rounded-[3px] bg-graphite text-[15px] font-medium text-paper shadow-[0_1px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] ${focus}`}
                >
                  <span className="flex flex-1 items-center px-5">{shop.cart.checkout}</span>
                  <span className="relative grid w-12 place-items-center overflow-hidden border-l border-white/10">
                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-solder transition-transform duration-500 ease-out-soft group-hover:scale-y-100" />
                    <span aria-hidden className="relative">→</span>
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
