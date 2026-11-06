"use client";

import Link from "next/link";
import { useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { chf } from "@/catalogue";
import { SubmitButton } from "@/components/Button";
import { shop } from "@/content";
import { cart, totals, useCart } from "@/shop/cart";
import { focus, ProductImage } from "./ui";

const c = shop.checkout;
const noop = () => () => {};
const useMounted = () => useSyncExternalStore(noop, () => true, () => false);

type Order = { name: string; total: number; count: number };

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-8">
      <legend className="float-left flex w-full items-center gap-3">
        <span className="grid size-7 place-items-center rounded-[3px] bg-graphite text-xs font-semibold text-paper tabular-nums">{n}</span>
        <span className="font-display text-xl font-semibold text-graphite">{title}</span>
      </legend>
      <div className="clear-left pt-5">{children}</div>
    </fieldset>
  );
}

function Option({ name, value, checked, onChange, label, meta, price }: { name: string; value: string; checked: boolean; onChange: () => void; label: string; meta?: string; price?: number }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-[3px] border bg-white px-4 py-3.5 transition-colors duration-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-solder ${
        checked ? "border-graphite" : "border-line hover:border-steel"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="size-4 accent-[#2b2d31]" />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-graphite">{label}</span>
        {meta && <span className="block text-xs text-steel">{meta}</span>}
      </span>
      {price !== undefined && <span className="text-sm text-graphite tabular-nums">{chf(price)}</span>}
    </label>
  );
}

export function Checkout() {
  const mounted = useMounted();
  const { lines } = useCart();
  const { items, count, subtotal, giftShipping } = totals(lines);
  const [name, setName] = useState("");
  const [place, setPlace] = useState(c.places[0]);
  const [ship, setShip] = useState(c.shippingOptions[0].id);
  const [pay, setPay] = useState(c.paymentOptions[0].id);
  const [code, setCode] = useState("");
  const [coupon, setCoupon] = useState<{ pct: number; msg: string } | null>(null);
  const [couponError, setCouponError] = useState("");
  const [order, setOrder] = useState<Order | null>(null);

  const shipping = c.shippingOptions.find((o) => o.id === ship)!.price;
  const discount = coupon ? Math.round(subtotal * coupon.pct) / 100 : 0;
  const total = Math.round((subtotal - discount + shipping + giftShipping) * 100) / 100;

  const redeem = () => {
    const key = code.trim().toUpperCase();
    if (!key) return;
    if (c.coupons[key]) {
      setCoupon(c.coupons[key]);
      setCouponError("");
    } else {
      setCoupon(null);
      setCouponError(c.couponRefused[key] ?? c.couponInvalid);
    }
  };

  // nothing leaves the browser: no fetch, no form action, the name lives in state only
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setOrder({ name: name.trim(), total, count });
    cart.clear();
    setName("");
    window.scrollTo({ top: 0 });
  };

  if (order) return <Confirmation order={order} />;
  const head = (
    <div className="mb-10">
      <h1 className="font-display text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-graphite md:text-5xl">{c.title}</h1>
      <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-steel">{c.lead}</p>
    </div>
  );
  if (!mounted) return <div className="min-h-[50vh]">{head}</div>;
  if (items.length === 0)
    return (
      <div className="max-w-md">
        {head}
        <p className="text-base text-graphite">{c.emptyCart}</p>
        <Link href="/shop" className={`mt-6 inline-flex h-11 items-center rounded-[3px] bg-graphite px-5 text-sm font-medium text-paper ${focus}`}>
          {shop.cart.toShop}
        </Link>
      </div>
    );

  const summary = (
    <div>
      <ul className="divide-y divide-line">
        {items.map((i) => (
          <li key={i.key} className="flex items-center gap-3 py-3">
            <span className="relative w-14 shrink-0 overflow-hidden rounded-[3px] border border-line">
              <ProductImage product={i.product} sizes="56px" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm text-graphite">{i.product.name}</span>
              <span className="block text-xs text-steel">{[`${i.qty}×`, i.variant].filter(Boolean).join(" · ")}</span>
            </span>
            <span className="text-sm text-graphite tabular-nums">{chf(i.unit * i.qty)}</span>
          </li>
        ))}
      </ul>
      <dl className="mt-3 space-y-2 border-t border-line pt-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-steel">{shop.cart.subtotal}</dt>
          <dd className="tabular-nums text-graphite">{chf(subtotal)}</dd>
        </div>
        {coupon && (
          <div className="flex justify-between">
            <dt className="text-steel">
              {c.discount} {coupon.pct} %
            </dt>
            <dd className="tabular-nums text-graphite">−{chf(discount)}</dd>
          </div>
        )}
        <div className="flex justify-between">
          <dt className="text-steel">{c.shippingLine}</dt>
          <dd className="tabular-nums text-graphite">{chf(shipping)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-steel">{c.giftLine}</dt>
          <dd className="tabular-nums text-graphite">{chf(giftShipping)}</dd>
        </div>
        <div className="flex items-baseline justify-between border-t border-line pt-3">
          <dt className="font-medium text-graphite">{c.total}</dt>
          <dd className="font-display text-xl font-semibold tabular-nums text-graphite">{chf(total)}</dd>
        </div>
      </dl>
    </div>
  );

  return (
    <>
    {head}
    <form onSubmit={submit} className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <details className="rounded-[3px] border border-line bg-white px-4 lg:hidden">
        <summary className="flex h-12 cursor-pointer items-center justify-between text-sm text-graphite">
          <span>{c.showSummary}</span>
          <span className="font-medium tabular-nums">{chf(total)}</span>
        </summary>
        <div className="pb-4">{summary}</div>
      </details>

      <div className="space-y-10 lg:col-span-7">
        <Step n={1} title={c.sections.delivery}>
          <label className="block">
            <span className="text-sm text-graphite">{c.name}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              maxLength={40}
              className={`mt-2 h-11 w-full rounded-[3px] border border-line bg-white px-3 text-[15px] text-graphite ${focus}`}
            />
            <span className="mt-1.5 block text-xs text-steel">{c.nameHint}</span>
          </label>
          <p className="mt-6 text-sm text-graphite">{c.placeLabel}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {c.places.map((p) => (
              <Option key={p} name="ort" value={p} checked={place === p} onChange={() => setPlace(p)} label={p} />
            ))}
          </div>
        </Step>

        <Step n={2} title={c.sections.shipping}>
          <div className="space-y-2">
            {c.shippingOptions.map((o) => (
              <Option key={o.id} name="versand" value={o.id} checked={ship === o.id} onChange={() => setShip(o.id)} label={o.label} meta={o.meta} price={o.price} />
            ))}
          </div>
        </Step>

        <Step n={3} title={c.sections.payment}>
          <div className="grid gap-2 sm:grid-cols-2">
            {c.paymentOptions.map((o) => (
              <Option key={o.id} name="zahlung" value={o.id} checked={pay === o.id} onChange={() => setPay(o.id)} label={o.label} meta={o.meta} />
            ))}
          </div>
          <div className="mt-6">
            <label htmlFor="coupon" className="text-sm text-graphite">
              {c.coupon}
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="coupon"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    redeem();
                  }
                }}
                autoComplete="off"
                className={`h-11 min-w-0 flex-1 rounded-[3px] border border-line bg-white px-3 text-[15px] uppercase text-graphite ${focus}`}
              />
              <button type="button" onClick={redeem} className={`h-11 rounded-[3px] border border-graphite px-4 text-sm font-medium text-graphite transition-colors duration-300 hover:bg-graphite hover:text-paper ${focus}`}>
                {c.couponApply}
              </button>
            </div>
            <p aria-live="polite" className={`mt-2 text-xs ${couponError ? "text-[#d62828]" : "text-steel"}`}>
              {couponError || coupon?.msg}
            </p>
          </div>
        </Step>

        <div className="border-t border-line pt-8">
          <SubmitButton>{c.submit}</SubmitButton>
          <p className="mt-4 max-w-lg text-xs leading-relaxed text-steel">{c.legal}</p>
        </div>
      </div>

      <aside className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-24 rounded-[3px] border border-line bg-white p-6">
          <p className="font-display text-lg font-semibold text-graphite">{c.summary}</p>
          <div className="mt-3">{summary}</div>
        </div>
      </aside>
    </form>
    </>
  );
}

function Confirmation({ order }: { order: Order }) {
  const k = shop.confirmation;
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solder-ink">{k.eyebrow}</p>
      <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-graphite md:text-5xl">{k.title}</h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-steel">{k.lead(order.name)}</p>
      <p className="mt-2 text-sm text-steel">
        {order.count} Artikel · {chf(order.total)}
      </p>
      <h3 className="mt-10 text-[11px] font-medium uppercase tracking-[0.14em] text-steel">{k.trackingTitle}</h3>
      <ol className="mt-4 border-l border-line">
        {k.tracking.map((t) => (
          <li key={t.label} className="relative pb-6 pl-6 last:pb-0">
            <span className={`absolute -left-[5px] top-1.5 size-2.5 rounded-[2px] ${t.done ? "bg-solder" : "border border-line bg-paper"}`} />
            <p className={`text-sm ${t.done ? "font-medium text-graphite" : "text-graphite/80"}`}>{t.label}</p>
            <p className={`text-xs ${t.meta === "ausstehend" ? "text-[#b45309]" : "text-steel"}`}>{t.meta}</p>
          </li>
        ))}
      </ol>
      <Link href="/shop" className={`mt-10 inline-flex h-11 items-center rounded-[3px] bg-graphite px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink ${focus}`}>
        {k.back}
      </Link>
    </div>
  );
}
