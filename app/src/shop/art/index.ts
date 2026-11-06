// Composes a product image: studio backdrop, pinned drawing, sticker, watermark.
// Four views per product come from the same props, so 47 products give 188 images.
import type { Art, Product, View } from "@/catalogue";
import { FONT, defs, esc, kinds, shade, text } from "./kinds";

const W = 600;

function object(a: Art, x: number, y: number, s: number) {
  const draw = kinds[a.kind](a);
  const n = a.count ?? 1;
  const copies =
    n === 1
      ? [[0, 0, 1]]
      : n === 2
        ? [
            [-55, -25, 0.82],
            [55, 25, 0.82],
          ]
        : [
            [-80, -40, 0.7],
            [0, 10, 0.7],
            [80, 60, 0.7],
          ];
  return copies
    .map(
      ([dx, dy, k]) =>
        `<g transform="translate(${x + dx * s} ${y + dy * s}) scale(${s * k}) rotate(${a.tilt ?? 0})">${draw}</g>`,
    )
    .join("");
}

function floor(y: number, rx: number) {
  return `<ellipse cx="300" cy="${y}" rx="${rx}" ry="16" fill="#000" opacity=".14" filter="url(#soft)"/>`;
}

function sticker(a: Art) {
  const [l1, l2] = a.sticker.text.split("|");
  // shrink long lines so they stay inside the ~96 px sticker body
  const fit = (s: string, max: number) => Math.min(max, 96 / (s.length * 0.66));
  const lines = (fill: string, x: number, y: number, size: number) => {
    const s1 = fit(l1, size);
    const s2 = l2 ? fit(l2, size * 0.82) : 0;
    return text(x, l2 ? y - s1 * 0.15 : y + s1 * 0.35, l1, s1, fill) + (l2 ? text(x, y + s2 * 1.15, l2, s2, fill) : "");
  };
  switch (a.sticker.shape) {
    case "burst": {
      const pts = Array.from({ length: 32 }, (_, i) => {
        const r = i % 2 ? 60 : 74;
        const t = (i / 32) * Math.PI * 2;
        return `${(Math.cos(t) * r).toFixed(1)},${(Math.sin(t) * r).toFixed(1)}`;
      }).join(" ");
      return `<g transform="translate(486 118) rotate(12)"><polygon points="${pts}" fill="#e3262f"/><polygon points="${pts}" fill="none" stroke="#fff" stroke-width="3" transform="scale(.86)"/>${lines("#ffe14d", 0, -2, 17)}</g>`;
    }
    case "seal":
      return `<g transform="translate(488 116) rotate(-10)"><circle r="68" fill="#f2b705"/><circle r="58" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="5 4"/>${lines("#1d1f22", 0, -2, 16)}</g>`;
    case "ribbon":
      return `<g transform="translate(600 0) rotate(45)"><rect x="-120" y="70" width="240" height="40" fill="#e3262f"/>${text(0, 97, `${l1}${l2 ? ` ${l2}` : ""}`, 17, "#fff")}</g>`;
    case "tag":
      return `<g transform="translate(478 120) rotate(14)"><path d="M-64 -40 H40 L70 0 L40 40 H-64 Z" fill="#f08a24"/><circle cx="44" cy="0" r="7" fill="#fff"/>${lines("#fff", -12, -2, 16)}</g>`;
  }
}

function corner(a: Art) {
  if (!a.corner) return "";
  const w = a.corner.length * 10 + 26;
  return `<g transform="translate(24 24)"><rect width="${w}" height="34" fill="#ffe14d"/><rect width="6" height="34" fill="#e3262f"/>${text(w / 2 + 3, 23, a.corner, 15, "#1d1f22", 'letter-spacing=".5"')}</g>`;
}

function watermark() {
  const rows = [];
  for (let r = -2; r < 9; r++) {
    for (let c = -2; c < 4; c++) {
      rows.push(
        `<text x="${c * 340 + (r % 2) * 170}" y="${r * 90}" font-family="${FONT}" font-weight="700" font-size="22" fill="#000">ZOLILÖT OFFICIAL STORE</text>`,
      );
    }
  }
  return `<g opacity=".05" transform="rotate(-28 300 300)">${rows.join("")}</g>`;
}

function backdrop(fill = "#ffffff") {
  return `<rect width="${W}" height="${W}" fill="${fill}"/><radialGradient id="vig" cx=".5" cy=".45" r=".75"><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#dfe3e8" stop-opacity=".7"/></radialGradient><rect width="${W}" height="${W}" fill="url(#vig)"/>`;
}

function heading(de: string, en: string) {
  return `<rect width="${W}" height="78" fill="#1d1f22"/>${text(300, 40, de, 26, "#ffe14d", 'letter-spacing="2"')}${text(300, 64, en, 13, "#fff", 'letter-spacing="4"')}`;
}

function front(p: Product) {
  return backdrop() + floor(500, 190) + object(p.art, 300, 315, 1) + watermark() + sticker(p.art) + corner(p.art);
}

function info(p: Product) {
  const ys = [190, 330, 470];
  const anchors = [
    [250, 250],
    [210, 350],
    [260, 430],
  ];
  const boxes = p.callouts
    .map((c, i) => {
      const [de, en] = c.split(" · ");
      const size = de.length > 17 ? 13 : 15;
      const y = ys[i];
      const [ax, ay] = anchors[i];
      return `<path d="M${ax} ${ay} L370 ${y}" stroke="#e3262f" stroke-width="2.5"/><circle cx="${ax}" cy="${ay}" r="7" fill="#e3262f" stroke="#fff" stroke-width="3"/>
        <rect x="370" y="${y - 38}" width="210" height="76" rx="6" fill="#fff" stroke="#dfe3e8" stroke-width="2"/><rect x="370" y="${y - 38}" width="7" height="76" rx="3" fill="#e3262f"/>
        <text x="390" y="${y - 6}" font-family="${FONT}" font-weight="700" font-size="${size}" fill="#1d1f22">${esc(de)}</text>
        <text x="390" y="${y + 18}" font-family="${FONT}" font-size="12" fill="#6b6e73" letter-spacing="1">${esc(en ?? "")}</text>`;
    })
    .join("");
  return backdrop("#f3f6fa") + heading("PRODUKTMERKMALE", "PRODUCT FEATURE · HIGH QUALITY") + floor(530, 150) + object(p.art, 200, 360, 0.72) + boxes + watermark();
}

function manual(x: number, y: number) {
  const lines = Array.from({ length: 7 }, (_, i) => `<path d="M${x + 14} ${y + 44 + i * 13} h${70 - (i % 3) * 14}" stroke="#9aa0a6" stroke-width="3" stroke-linecap="round"/>`).join("");
  return `<g transform="rotate(-6 ${x + 50} ${y + 70})"><rect x="${x}" y="${y}" width="104" height="140" fill="#fff" stroke="#c8ccd1" stroke-width="2"/>${text(x + 52, y + 26, "ANLEITUNG", 12, "#1d1f22")}${lines}</g>`;
}

function zipTie(x: number, y: number) {
  return `<path d="M${x} ${y} C${x + 60} ${y - 60} ${x + 150} ${y - 20} ${x + 170} ${y + 30}" fill="none" stroke="#1d1f22" stroke-width="9" stroke-linecap="round"/><rect x="${x - 14}" y="${y - 8}" width="22" height="18" rx="3" fill="#1d1f22"/>`;
}

function num(x: number, y: number, n: number) {
  return `<circle cx="${x}" cy="${y}" r="15" fill="#e3262f"/>${text(x, y + 5, String(n), 15, "#fff")}`;
}

function lieferumfang(p: Product) {
  const items = [`1× ${p.name}`, "1× Anleitung (nur Chinesisch)", "1× Kabelbinder (Geschenk)"];
  const list = items
    .map((t, i) => `<text x="40" y="${508 + i * 26}" font-family="${FONT}" font-size="15" font-weight="${i ? 400 : 700}" fill="#1d1f22">${esc(t)}</text>`)
    .join("");
  return (
    backdrop() +
    heading("LIEFERUMFANG", "PACKAGE INCLUDE · 3 PCS") +
    object(p.art, 200, 270, 0.58) +
    num(70, 120, 1) +
    manual(420, 120) +
    num(420, 120, 2) +
    zipTie(400, 360) +
    num(390, 352, 3) +
    `<path d="M30 470 h540" stroke="#dfe3e8" stroke-width="2"/>` +
    list
  );
}

function groesse(p: Product) {
  const coin = `<g transform="translate(486 400)"><circle r="34" fill="#c8ccd1" stroke="#9aa0a6" stroke-width="3"/><circle r="27" fill="none" stroke="#9aa0a6" stroke-width="1.5"/>${text(0, 8, "5", 24, "#6b6e73")}</g>${text(486, 456, "Fünfliber", 13, "#1d1f22")}${text(486, 472, "(zum Vergleich)", 11, "#6b6e73")}`;
  const arrow = `<path d="M70 520 H380" stroke="#e3262f" stroke-width="2.5"/><path d="M70 512 v16 M380 512 v16" stroke="#e3262f" stroke-width="2.5"/>${text(225, 508, p.art.size, 16, "#e3262f")}`;
  const note = text(300, 566, "Bitte 1 bis 3 cm Abweichung durch manuelle Messung erlauben. Bild ähnlich.", 12, "#6b6e73");
  return backdrop() + heading("GRÖSSENVERGLEICH", "SIZE · PLEASE CHECK") + floor(470, 140) + object(p.art, 225, 320, 0.7) + coin + arrow + note;
}

const renderers: Record<View, (p: Product) => string> = { front, info, lieferumfang, groesse };

export function renderArt(p: Product, view: View) {
  const body = renderers[view](p);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${W}" width="${W}" height="${W}">${defs}${body}</svg>`;
}

export { shade };
