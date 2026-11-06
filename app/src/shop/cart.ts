"use client";

// Client-only cart. Only slugs, variant names and quantities are kept, in localStorage (zl-cart-v1).
import { useSyncExternalStore } from "react";
import { productBySlug, type Product } from "@/catalogue";
import { shop } from "@/content";

export type Line = { slug: string; variant?: string; qty: number };
type State = { lines: Line[]; open: boolean; announce: string };

const KEY = "zl-cart-v1";
const EMPTY: State = { lines: [], open: false, announce: "" };

let state: State = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    const lines = raw ? (JSON.parse(raw) as Line[]) : [];
    state = { ...state, lines: lines.filter((l) => productBySlug(l.slug) && l.qty > 0) };
  } catch {
    // private mode or blocked storage: start empty
  }
}

function set(next: Partial<State>) {
  state = { ...state, ...next };
  if (next.lines) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state.lines));
    } catch {
      // storage unavailable: cart still works for this visit
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  load();
  listeners.add(cb);
  // the first subscriber may have just loaded storage
  queueMicrotask(cb);
  return () => listeners.delete(cb);
}

export const useCart = () =>
  useSyncExternalStore(
    subscribe,
    () => state,
    () => EMPTY,
  );

export const lineKey = (l: Pick<Line, "slug" | "variant">) => `${l.slug}::${l.variant ?? ""}`;

export const cart = {
  add(slug: string, variant: string | undefined, qty = 1) {
    load();
    const key = lineKey({ slug, variant });
    const exists = state.lines.find((l) => lineKey(l) === key);
    const lines = exists
      ? state.lines.map((l) => (lineKey(l) === key ? { ...l, qty: Math.min(99, l.qty + qty) } : l))
      : [...state.lines, { slug, variant, qty }];
    const p = productBySlug(slug);
    set({ lines, open: true, announce: p ? shop.cart.announce(p.name) : "" });
  },
  setQty(key: string, qty: number) {
    const lines = qty <= 0 ? state.lines.filter((l) => lineKey(l) !== key) : state.lines.map((l) => (lineKey(l) === key ? { ...l, qty: Math.min(99, qty) } : l));
    set({ lines });
  },
  remove(key: string) {
    set({ lines: state.lines.filter((l) => lineKey(l) !== key) });
  },
  clear() {
    set({ lines: [] });
  },
  open() {
    load();
    set({ open: true, announce: "" });
  },
  close() {
    set({ open: false });
  },
};

export function unitPrice(p: Product, variant?: string) {
  const delta = p.variants?.options.find((o) => o.name === variant)?.delta ?? 0;
  return p.price + delta;
}

export function totals(lines: Line[]) {
  const items = lines
    .map((l) => {
      const product = productBySlug(l.slug);
      return product ? { ...l, product, unit: unitPrice(product, l.variant), key: lineKey(l) } : null;
    })
    .filter((x) => x !== null);
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = Math.round(items.reduce((s, i) => s + i.unit * i.qty, 0) * 100) / 100;
  const giftShipping = items.length ? shop.cart.gift.shipping : 0;
  return { items, count, subtotal, giftShipping };
}
