"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { categories, products, teamPicks, type CategoryId, type TeamPick } from "@/catalogue";
import { shop } from "@/content";
import { apply, defaultQuery, parseQuery, toSearch, type Query } from "@/shop/listing";
import { ProductCard } from "./ProductCard";
import { focus } from "./ui";

const f = shop.filters;
const SCROLL_KEY = "zl-shop-scroll";

// Back navigation from a product returns to the same spot in the list (Baymard: 13 % of shops miss this).
let lastPop = 0;
if (typeof window !== "undefined") window.addEventListener("popstate", () => (lastPop = Date.now()));

function rememberScroll() {
  try {
    window.sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ url: location.pathname + location.search, y: window.scrollY }));
  } catch {
    // storage blocked: back navigation falls back to the router's own restore
  }
}

function useRestoreScroll() {
  useEffect(() => {
    if (Date.now() - lastPop > 2000) return;
    try {
      const saved = JSON.parse(window.sessionStorage.getItem(SCROLL_KEY) ?? "null") as { url: string; y: number } | null;
      if (!saved || saved.url !== location.pathname + location.search) return;
      const go = () => window.scrollTo({ top: saved.y, behavior: "instant" });
      requestAnimationFrame(go);
      const t = setTimeout(go, 150);
      return () => clearTimeout(t);
    } catch {
      // ignore
    }
  }, []);
}

/** Static shell: the default grid, rendered at build time and replaced once the URL is read. */
export function ListingFallback() {
  return <ListingView q={defaultQuery} update={() => {}} />;
}

export function Listing() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const q = parseQuery(new URLSearchParams(sp.toString()));
  const update = (patch: Partial<Query>) => router.replace(`${pathname}${toSearch({ ...q, ...patch })}`, { scroll: false });
  useRestoreScroll();
  return <ListingView q={q} update={update} />;
}

function ListingView({ q, update }: { q: Query; update: (patch: Partial<Query>) => void }) {
  const list = apply(q);
  const sheet = useRef<HTMLDialogElement>(null);
  const applied = appliedFilters(q, update);
  const count = (id?: CategoryId) => (id ? products.filter((p) => p.category === id).length : products.length);

  return (
    <div>
      {/* category tabs: text with an underline, scrollable on phone */}
      <nav aria-label="Kategorien" className="-mx-7 overflow-x-auto border-b border-line px-7 md:mx-0 md:px-0">
        <ul className="flex min-w-max gap-6">
          {[{ id: undefined, label: f.all }, ...categories].map((c) => {
            const active = q.kategorie === c.id;
            return (
              <li key={c.id ?? "alle"}>
                <button
                  type="button"
                  aria-current={active ? "page" : undefined}
                  onClick={() => update({ kategorie: c.id as CategoryId | undefined })}
                  className={`relative block py-3 text-sm transition-colors duration-300 ${active ? "font-medium text-graphite" : "text-steel hover:text-graphite"} ${focus}`}
                >
                  {c.label}
                  <span className="ml-1.5 text-xs text-steel tabular-nums">{count(c.id as CategoryId | undefined)}</span>
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-px h-0.5 bg-solder transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[210px_1fr]">
        <aside className="hidden lg:block" aria-label={f.title}>
          <FilterFields q={q} update={update} />
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-steel" aria-live="polite">
              <span className="font-medium text-graphite tabular-nums">{list.length}</span> Artikel
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => sheet.current?.showModal()}
                className={`inline-flex h-10 items-center gap-2 rounded-[3px] border border-line bg-white px-3.5 text-sm text-graphite lg:hidden ${focus}`}
              >
                {f.title}
                {applied.length > 0 && <span className="text-xs text-steel tabular-nums">({applied.length})</span>}
              </button>
              <label className="sr-only" htmlFor="sort">
                Sortierung
              </label>
              <select
                id="sort"
                value={q.sortierung}
                onChange={(e) => update({ sortierung: e.target.value })}
                className={`h-10 rounded-[3px] border border-line bg-white px-3 text-sm text-graphite ${focus}`}
              >
                {shop.sorts.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {applied.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {applied.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={a.remove}
                  aria-label={`Filter entfernen: ${a.label}`}
                  className={`inline-flex h-5 items-center gap-1 rounded bg-paper-2 px-1.5 text-[11px] text-graphite transition-colors duration-300 hover:bg-line ${focus}`}
                >
                  {a.label}
                  <span aria-hidden className="text-steel">×</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => update({ ...defaultQuery, sortierung: q.sortierung })}
                className={`ml-1 text-xs text-steel underline underline-offset-2 hover:text-graphite ${focus}`}
              >
                {f.clear}
              </button>
            </div>
          )}

          {list.length === 0 ? (
            <div className="mt-16 max-w-md">
              <p className="text-base text-graphite">{f.empty}</p>
              <button
                type="button"
                onClick={() => update({ ...defaultQuery })}
                className={`mt-4 text-sm font-medium text-graphite underline underline-offset-4 ${focus}`}
              >
                {f.reset}
              </button>
            </div>
          ) : (
            <ul onClickCapture={rememberScroll} className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
              {list.map((p, i) => (
                <li key={p.slug}>
                  <ProductCard product={p} priority={i < 4} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* phone filter sheet */}
      <dialog
        ref={sheet}
        aria-label={f.title}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-[85dvh] w-full max-w-none translate-y-3 rounded-t-[6px] bg-paper p-0 text-ink opacity-0 transition-[opacity,translate,display,overlay] transition-discrete duration-[350ms] ease-out-soft backdrop:bg-ink/40 open:translate-y-0 open:opacity-100 starting:open:translate-y-3 starting:open:opacity-0 lg:hidden"
      >
        <div className="flex max-h-[85dvh] flex-col">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-6">
            <p className="font-display text-lg font-semibold text-graphite">{f.title}</p>
            <button type="button" onClick={() => sheet.current?.close()} className={`text-sm text-steel ${focus}`}>
              Schliessen
            </button>
          </div>
          <div className="overflow-y-auto px-6 py-5">
            <FilterFields q={q} update={update} />
          </div>
          <div className="shrink-0 border-t border-line p-4">
            <button
              type="button"
              onClick={() => sheet.current?.close()}
              className={`h-12 w-full rounded-[3px] bg-graphite text-[15px] font-medium text-paper ${focus}`}
            >
              {list.length} {f.apply}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="border-b border-line pb-5 pt-5 first:pt-0 last:border-0">
      <legend className="float-left mb-3 w-full text-[11px] font-medium uppercase tracking-[0.14em] text-steel">{title}</legend>
      <div className="clear-left space-y-2">{children}</div>
    </fieldset>
  );
}

function Check({ checked, onChange, children, type = "checkbox", name }: { checked: boolean; onChange: () => void; children: ReactNode; type?: "checkbox" | "radio"; name?: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-graphite">
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        onClick={type === "radio" && checked ? onChange : undefined}
        className="size-4 accent-[#2b2d31]"
      />
      {children}
    </label>
  );
}

function FilterFields({ q, update }: { q: Query; update: (patch: Partial<Query>) => void }) {
  const price = (key: "min" | "max", v: string) => {
    const n = v === "" ? undefined : Number(v);
    if (n === undefined || (Number.isFinite(n) && n >= 0)) update({ [key]: n });
  };
  const toggleTeam = (id: TeamPick) => update({ team: q.team.includes(id) ? q.team.filter((t) => t !== id) : [...q.team, id] });
  return (
    <div>
      <Group title={f.price}>
        <div className="flex items-center gap-2">
          {(["min", "max"] as const).map((k) => (
            <label key={`${k}-${q[k] ?? ""}`} className="flex-1">
              <span className="sr-only">{k === "min" ? f.min : f.max}</span>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                placeholder={k === "min" ? f.min : f.max}
                defaultValue={q[k] ?? ""}
                onBlur={(e) => price(k, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") price(k, e.currentTarget.value);
                }}
                className={`h-10 w-full rounded-[3px] border border-line bg-white px-3 text-sm text-graphite tabular-nums ${focus}`}
              />
            </label>
          ))}
        </div>
      </Group>
      <Group title={f.ship}>
        {f.shipOptions.map((o) => (
          <Check
            key={o.id}
            type="radio"
            name="lieferzeit"
            checked={q.lieferzeit === o.id}
            onChange={() => update({ lieferzeit: q.lieferzeit === o.id ? undefined : o.id })}
          >
            {o.label}
          </Check>
        ))}
      </Group>
      <Group title={f.discount}>
        {f.discountOptions.map((o) => (
          <Check
            key={o.id}
            type="radio"
            name="rabatt"
            checked={q.rabatt === Number(o.id)}
            onChange={() => update({ rabatt: q.rabatt === Number(o.id) ? undefined : Number(o.id) })}
          >
            {o.label}
          </Check>
        ))}
      </Group>
      <Group title={f.team}>
        {teamPicks.map((t) => (
          <Check key={t.id} checked={q.team.includes(t.id)} onChange={() => toggleTeam(t.id)}>
            {t.label}
          </Check>
        ))}
      </Group>
    </div>
  );
}

function appliedFilters(q: Query, update: (patch: Partial<Query>) => void) {
  const out: { label: string; remove: () => void }[] = [];
  if (q.kategorie) out.push({ label: categories.find((c) => c.id === q.kategorie)!.label, remove: () => update({ kategorie: undefined }) });
  if (q.min !== undefined) out.push({ label: `ab CHF ${q.min}`, remove: () => update({ min: undefined }) });
  if (q.max !== undefined) out.push({ label: `bis CHF ${q.max}`, remove: () => update({ max: undefined }) });
  if (q.lieferzeit) out.push({ label: f.shipOptions.find((o) => o.id === q.lieferzeit)?.label ?? q.lieferzeit, remove: () => update({ lieferzeit: undefined }) });
  if (q.rabatt) out.push({ label: `Rabatt ab ${q.rabatt} %`, remove: () => update({ rabatt: undefined }) });
  for (const t of q.team) out.push({ label: teamPicks.find((p) => p.id === t)!.label, remove: () => update({ team: q.team.filter((x) => x !== t) }) });
  return out;
}
