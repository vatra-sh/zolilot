// Filter and sort logic for the shop index. Pure, shared by the static fallback and the client listing.
import { categories, discountPct, products, type CategoryId, type Product, type TeamPick } from "@/catalogue";

export type Query = {
  kategorie?: CategoryId;
  sortierung: string;
  min?: number;
  max?: number;
  lieferzeit?: string;
  rabatt?: number;
  team: TeamPick[];
};

const num = (v: string | null) => {
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : undefined;
};

export function parseQuery(sp: URLSearchParams): Query {
  const k = sp.get("kategorie");
  return {
    kategorie: categories.some((c) => c.id === k) ? (k as CategoryId) : undefined,
    sortierung: sp.get("sortierung") ?? "empfohlen",
    min: num(sp.get("min")),
    max: num(sp.get("max")),
    lieferzeit: sp.get("lieferzeit") ?? undefined,
    rabatt: num(sp.get("rabatt")),
    team: (sp.get("team")?.split(",").filter(Boolean) ?? []) as TeamPick[],
  };
}

export function toSearch(q: Query) {
  const sp = new URLSearchParams();
  if (q.kategorie) sp.set("kategorie", q.kategorie);
  if (q.sortierung !== "empfohlen") sp.set("sortierung", q.sortierung);
  if (q.min !== undefined) sp.set("min", String(q.min));
  if (q.max !== undefined) sp.set("max", String(q.max));
  if (q.lieferzeit) sp.set("lieferzeit", q.lieferzeit);
  if (q.rabatt) sp.set("rabatt", String(q.rabatt));
  if (q.team.length) sp.set("team", q.team.join(","));
  const s = sp.toString();
  return s ? `?${s}` : "";
}

/** "Empfohlen": diversity-based relevance, round-robin across categories by popularity. */
function recommended(list: Product[]) {
  const buckets = categories.map((c) => list.filter((p) => p.category === c.id).sort((a, b) => b.popularity - a.popularity));
  const out: Product[] = [];
  while (buckets.some((b) => b.length)) for (const b of buckets) if (b.length) out.push(b.shift()!);
  return out;
}

const sorters: Record<string, (a: Product, b: Product) => number> = {
  bestseller: (a, b) => b.popularity - a.popularity,
  neu: (a, b) => b.added.localeCompare(a.added),
  "preis-auf": (a, b) => a.price - b.price,
  "preis-ab": (a, b) => b.price - a.price,
  // everything is 4.9, so the number of reviews and then popularity decide
  bewertung: (a, b) => b.reviews.length - a.reviews.length || b.popularity - a.popularity,
  rabatt: (a, b) => discountPct(b) - discountPct(a),
};

export function apply(q: Query) {
  const list = products.filter((p) => {
    if (q.kategorie && p.category !== q.kategorie) return false;
    if (q.min !== undefined && p.price < q.min) return false;
    if (q.max !== undefined && p.price > q.max) return false;
    if (q.lieferzeit === "3" && !(p.ship.max !== null && p.ship.max <= 3)) return false;
    if (q.lieferzeit === "6" && !(p.ship.max !== null && p.ship.max <= 6)) return false;
    if (q.lieferzeit === "irgendwann" && p.ship.max !== null) return false;
    if (q.rabatt && discountPct(p) < q.rabatt) return false;
    if (q.team.length && !(p.team && q.team.includes(p.team))) return false;
    return true;
  });
  const sort = sorters[q.sortierung];
  return sort ? [...list].sort(sort) : recommended(list);
}

export const defaultQuery: Query = { sortierung: "empfohlen", team: [] };
