// Product drawings as SVG strings, each centred on (0, 0) inside roughly ±180.
// Colours come from the product's pinned palette: c0 main, c1 secondary, c2 accent.
import type { Art } from "@/catalogue";

export const FONT = "Arial, Helvetica, sans-serif";

export const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Mix a hex colour towards black (f < 0) or white (f > 0). */
export function shade(hex: string, f: number) {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) =>
    Math.round(f < 0 ? c * (1 + f) : c + (255 - c) * f),
  );
  return `#${ch.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

export function text(x: number, y: number, s: string, size: number, fill: string, extra = "") {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-weight="700" font-size="${size}" fill="${fill}" text-anchor="middle" ${extra}>${esc(s)}</text>`;
}

/** Split a label into at most two lines around the middle space. */
export function twoLines(s: string): [string, string?] {
  if (s.length <= 12 || !s.includes(" ")) return [s];
  const words = s.split(" ");
  let best = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const d = Math.abs(words.slice(0, i).join(" ").length - words.slice(i).join(" ").length);
    if (d < bestDiff) {
      bestDiff = d;
      best = i;
    }
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

function labelBlock(cx: number, cy: number, s: string, size: number, fill: string) {
  const [a, b] = twoLines(s);
  if (!b) return text(cx, cy + size * 0.35, a, size, fill);
  return text(cx, cy - size * 0.2, a, size, fill) + text(cx, cy + size * 0.95, b, size, fill);
}

const steel = `<linearGradient id="steel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9ecef"/><stop offset=".5" stop-color="#9aa0a6"/><stop offset="1" stop-color="#5d6268"/></linearGradient>`;
const gold = `<linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2b3"/><stop offset=".45" stop-color="#d4af37"/><stop offset="1" stop-color="#7a5c0e"/></linearGradient>`;
const rainbow = `<linearGradient id="rainbow" x1="0" x2="1"><stop offset="0" stop-color="#ff3d3d"/><stop offset=".2" stop-color="#ffb13d"/><stop offset=".4" stop-color="#f6ff3d"/><stop offset=".6" stop-color="#3dff8b"/><stop offset=".8" stop-color="#3db5ff"/><stop offset="1" stop-color="#c13dff"/></linearGradient><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>`;

export const defs = `<defs>${steel}${gold}${rainbow}<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter></defs>`;

type Draw = (a: Art) => string;

const iron: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  if (a.eyes) {
    // plush: fat soft body, felt tip, tail cable
    return `<g transform="rotate(-24)">
      <path d="M-170 10 C-230 60 -200 150 -120 140" fill="none" stroke="${c2}" stroke-width="16" stroke-linecap="round"/>
      <rect x="-175" y="-48" width="230" height="96" rx="48" fill="${c0}"/>
      <rect x="-160" y="-40" width="190" height="22" rx="11" fill="#fff" opacity=".22"/>
      <path d="M50 -30 L150 -8 Q172 0 150 8 L50 30 Z" fill="${c1}"/>
      <path d="M150 -8 Q172 0 150 8" fill="none" stroke="${shade(c1, -0.25)}" stroke-width="4"/>
      ${[-90, -40].map((x) => `<circle cx="${x}" cy="-6" r="14" fill="#fff"/><circle cx="${x + 3}" cy="-4" r="7" fill="#1d1f22"/><circle cx="${x + 5}" cy="-7" r="2.5" fill="#fff"/>`).join("")}
      <path d="M-82 18 Q-65 32 -48 18" fill="none" stroke="#1d1f22" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="-110" cy="16" rx="10" ry="6" fill="#ff8fa3" opacity=".7"/><ellipse cx="-20" cy="16" rx="10" ry="6" fill="#ff8fa3" opacity=".7"/>
    </g>`;
  }
  const handle = a.variant === "gold" ? "url(#gold)" : c0;
  const cordless = a.variant === "cordless";
  const glow = a.glow
    ? `<rect x="-160" y="-34" width="190" height="68" rx="30" fill="none" stroke="url(#rainbow)" stroke-width="14" filter="url(#glow)" opacity=".95"/><rect x="-150" y="-28" width="170" height="56" rx="26" fill="none" stroke="url(#rainbow)" stroke-width="4"/>`
    : "";
  const cable = cordless
    ? ""
    : `<path d="M-150 0 C-210 30 -200 130 -120 150 S20 175 140 150" fill="none" stroke="${c2}" stroke-width="10" stroke-linecap="round"/>`;
  const rings = [-30, -14, 2].map((x) => `<rect x="${x}" y="-27" width="8" height="54" rx="3" fill="${c1}"/>`).join("");
  const port = cordless
    ? `<rect x="-160" y="-10" width="10" height="20" rx="3" fill="#1d1f22"/>${[0, 1, 2, 3].map((i) => `<rect x="${-120 + i * 16}" y="10" width="10" height="5" rx="1.5" fill="${i < 1 ? c2 : "#9aa0a6"}"/>`).join("")}`
    : "";
  return `<g transform="rotate(-26)">
    ${cable}${glow}
    <rect x="-150" y="-26" width="170" height="52" rx="24" fill="${handle}"/>
    <rect x="-140" y="-22" width="140" height="12" rx="6" fill="#fff" opacity=".2"/>
    ${rings}${port}
    <rect x="20" y="-18" width="32" height="36" rx="4" fill="url(#steel)"/>
    <rect x="52" y="-8" width="92" height="16" fill="url(#steel)"/>
    <path d="M144 -8 L182 0 L144 8 Z" fill="#6b6e73"/>
    ${a.label ? text(-82, 7, a.label, 17, a.variant === "gold" ? "#3a2a05" : "#fff", 'letter-spacing="1"') : ""}
  </g>`;
};

const station: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const wifi =
    a.variant === "wifi"
      ? [30, 52, 74].map((r) => `<path d="M${-50 - r} -100 A${r} ${r} 0 0 1 ${-50 + r} -100" fill="none" stroke="${c1}" stroke-width="9" stroke-linecap="round" transform="translate(0 ${-r * 0.1})"/>`).join("") + `<circle cx="-50" cy="-94" r="8" fill="${c1}"/>`
      : "";
  const coil = [0, 1, 2, 3, 4, 5].map((i) => `<ellipse cx="${118 + i * 6}" cy="${50 - i * 16}" rx="26" ry="9" fill="none" stroke="#9aa0a6" stroke-width="4"/>`).join("");
  return `${wifi}
    <rect x="-170" y="-70" width="220" height="160" rx="12" fill="${c0}"/>
    <rect x="-170" y="60" width="220" height="30" rx="6" fill="${shade(c0, -0.35)}"/>
    <rect x="-150" y="-50" width="160" height="70" rx="6" fill="#0d1f16"/>
    ${text(-78, 2, `${a.label ?? "360"}°C`, 38, c2)}
    <rect x="-150" y="-50" width="160" height="16" fill="#fff" opacity=".06"/>
    <circle cx="-118" cy="50" r="17" fill="#1d1f22" stroke="${c1}" stroke-width="4"/><circle cx="-62" cy="50" r="17" fill="#1d1f22" stroke="${c1}" stroke-width="4"/>
    <rect x="-20" y="38" width="44" height="22" rx="4" fill="${c1}"/>
    <ellipse cx="130" cy="88" rx="56" ry="14" fill="#3a3d42"/>
    ${coil}
    <g transform="translate(150 -50) rotate(-60)"><rect x="-60" y="-12" width="90" height="24" rx="11" fill="#1d1f22"/><rect x="30" y="-5" width="60" height="10" fill="url(#steel)"/></g>
    <path d="M50 20 C90 40 70 80 105 85" fill="none" stroke="#1d1f22" stroke-width="6"/>`;
};

const bottle: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const murky = a.variant === "murky";
  const sediment = murky
    ? `<ellipse cx="120" cy="282" rx="70" ry="10" fill="${shade(c0, -0.5)}"/>${[[90, 200, 6], [140, 230, 4], [110, 170, 5], [150, 190, 3]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#e8ffd0" stroke-opacity=".6" stroke-width="1.5"/>`).join("")}`
    : [[84, 260, 3], [112, 220, 2], [150, 240, 3.5], [132, 280, 2.5]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#ffd9a8" stroke-opacity=".8" stroke-width="1.2"/>`).join("");
  const [l1, l2] = twoLines(a.label ?? "");
  return `<g transform="translate(-150 -205) scale(1.25)">
    <clipPath id="glass"><path d="M100 74 h40 v34 c0 6 40 10 40 30 v134 c0 12 -8 20 -20 20 h-80 c-12 0 -20 -8 -20 -20 v-134 c0 -20 40 -24 40 -30 z"/></clipPath>
    <g clip-path="url(#glass)">
      <rect x="40" y="60" width="160" height="240" fill="${c0}"/>
      <rect x="40" y="60" width="160" height="240" fill="url(#steel)" opacity=".18"/>
      <rect x="40" y="60" width="160" height="62" fill="${shade(c0, -0.6)}" opacity=".55"/>
      ${sediment}
      <rect x="70" y="80" width="10" height="210" fill="#fff" opacity=".2"/>
    </g>
    <rect x="94" y="38" width="52" height="40" rx="4" fill="${c1}"/>
    ${[46, 54, 62, 70].map((y) => `<rect x="94" y="${y}" width="52" height="2" fill="${shade(c1, 0.2)}"/>`).join("")}
    <rect x="66" y="158" width="108" height="100" rx="3" fill="#f6f5f2"/>
    <rect x="66" y="158" width="108" height="6" fill="${c2}"/>
    ${text(120, 182, "ZOLILÖT", 9, "#6b6e73", 'letter-spacing="2"')}
    ${text(120, 212, l1, l2 ? 15 : 17, "#1d1f22")}
    ${l2 ? text(120, 230, l2, 15, "#1d1f22") : ""}
    ${text(120, 248, "100 ml", 8, "#6b6e73")}
  </g>`;
};

const perfume: Draw = (a) => {
  const [c0, c1] = a.colors;
  return `<rect x="-26" y="-130" width="52" height="34" fill="#d9d9d9"/>
    <rect x="-56" y="-196" width="112" height="72" rx="8" fill="url(#gold)"/>
    <rect x="-46" y="-188" width="16" height="56" rx="4" fill="#fff" opacity=".35"/>
    <rect x="-110" y="-100" width="220" height="250" rx="22" fill="${c0}" opacity=".55" stroke="${shade(c0, -0.35)}" stroke-width="4"/>
    <rect x="-96" y="-40" width="192" height="176" rx="14" fill="${c0}" opacity=".85"/>
    <rect x="-96" y="-88" width="22" height="220" rx="10" fill="#fff" opacity=".35"/>
    <rect x="-80" y="-6" width="160" height="88" rx="4" fill="#fffdf6" stroke="${c1}" stroke-width="3"/>
    ${labelBlock(0, 30, a.label ?? "", 15, "#1d1f22")}
    ${text(0, 72, "100 ml · LABOR EDITION", 9, "#6b6e73", 'letter-spacing="1"')}`;
};

const jar: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const flame = `<path d="M0 -150 C-20 -120 -14 -96 0 -86 C14 -96 20 -120 0 -150 Z" fill="#ffb13d"/><path d="M0 -130 C-8 -114 -6 -100 0 -94 C6 -100 8 -114 0 -130 Z" fill="#fff3b0"/><rect x="-2" y="-90" width="4" height="22" fill="#1d1f22"/>`;
  return `${a.variant === "candle" ? flame : ""}
    <path d="M-120 -70 h240 v190 a20 20 0 0 1 -20 20 h-200 a20 20 0 0 1 -20 -20 z" fill="#f2f4f6" opacity=".7" stroke="#c8ccd1" stroke-width="4"/>
    <path d="M-108 -40 h216 v150 a14 14 0 0 1 -14 14 h-188 a14 14 0 0 1 -14 -14 z" fill="${c0}"/>
    <ellipse cx="0" cy="-40" rx="108" ry="14" fill="${shade(c0, 0.3)}"/>
    <ellipse cx="0" cy="-70" rx="120" ry="16" fill="none" stroke="#c8ccd1" stroke-width="4"/>
    <rect x="-110" y="10" width="220" height="80" fill="${c1}"/>
    <rect x="-110" y="10" width="220" height="6" fill="${c2}"/>
    ${labelBlock(0, 48, a.label ?? "", 15, "#fff")}
    <rect x="-100" y="-60" width="18" height="170" rx="8" fill="#fff" opacity=".35"/>`;
};

const spool: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const braid = a.variant === "braid";
  const windings = braid
    ? `<pattern id="braid" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="14" height="14" fill="${c1}"/><path d="M0 7 H14 M7 0 V14" stroke="${shade(c1, -0.3)}" stroke-width="3"/></pattern><circle r="112" fill="url(#braid)"/>`
    : `<circle r="112" fill="${c1}"/>${[100, 88, 76, 64].map((r) => `<circle r="${r}" fill="none" stroke="${shade(c1, -0.18)}" stroke-width="2"/>`).join("")}`;
  return `<circle r="150" fill="${c0}"/>
    <circle r="150" fill="none" stroke="${shade(c0, -0.3)}" stroke-width="8"/>
    <circle r="138" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="6"/>
    ${windings}
    <path d="M108 -20 C150 -40 170 10 210 0" fill="none" stroke="${c1}" stroke-width="7" stroke-linecap="round"/>
    <circle r="56" fill="${shade(c0, -0.15)}"/>
    <circle r="20" fill="#fff"/>
    ${a.label ? text(0, -28, a.label, 18, c2 === "#ffffff" ? "#fff" : "#fff") : ""}
    ${[0, 72, 144, 216, 288].map((d) => `<circle cx="${Math.cos((d * Math.PI) / 180) * 38}" cy="${Math.sin((d * Math.PI) / 180) * 38 + 8}" r="5" fill="${shade(c0, -0.4)}"/>`).join("")}`;
};

function usbPlug(x: number, y: number, rot: number, color: string) {
  return `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-16" y="-34" width="32" height="50" rx="8" fill="${color}" stroke="#c8ccd1" stroke-width="2"/><rect x="-10" y="-56" width="20" height="24" rx="5" fill="url(#steel)"/></g>`;
}

const cable: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  if (a.variant === "broken") {
    const fray = (x: number, y: number) =>
      [-8, -3, 2, 7].map((d) => `<path d="M${x} ${y} l${14 + d} ${d * 2.2}" stroke="${c2}" stroke-width="2.5" stroke-linecap="round"/>`).join("");
    const outline = (d: string) => `<path d="${d}" fill="none" stroke="#9aa0a6" stroke-width="18" stroke-linecap="round"/>`;
    return `${outline("M-160 -60 C-100 -150 0 -20 20 -60")}${outline("M40 40 C80 120 150 -10 170 70")}<path d="M-160 -60 C-100 -150 0 -20 20 -60" fill="none" stroke="${c0}" stroke-width="14" stroke-linecap="round"/><path d="M-160 -60 C-100 -150 0 -20 20 -60" fill="none" stroke="${c1}" stroke-width="14" stroke-dasharray="3 9" stroke-linecap="round"/>
      ${usbPlug(-170, -48, -30, c0)}${fray(22, -60)}
      <path d="M40 40 C80 120 150 -10 170 70" fill="none" stroke="${c0}" stroke-width="14" stroke-linecap="round"/><path d="M40 40 C80 120 150 -10 170 70" fill="none" stroke="${c1}" stroke-width="14" stroke-dasharray="3 9" stroke-linecap="round"/>
      ${usbPlug(178, 86, 160, c0)}${fray(40, 40).replace(/l(\d)/g, "l-$1")}
      ${a.label ? text(-150, 40, a.label, 16, "#6b6e73") : ""}`;
  }
  if (a.variant === "knot") {
    const knot = (col: string, dx: number, dy: number) =>
      `<path d="M${-150 + dx} ${40 + dy} C-120 -160 60 -120 80 -20 S-60 120 -40 20 S140 -140 150 60 S-20 160 -100 80 S40 -60 120 120" fill="none" stroke="${col}" stroke-width="11" stroke-linecap="round"/>`;
    return knot(c0, 0, 0) + knot(c1, 18, -10) + knot(c2, -12, 14) + `<rect x="-60" y="-12" width="40" height="18" rx="3" fill="#1d1f22" transform="rotate(30 -40 -3)"/>`;
  }
  if (a.variant === "short") {
    return `<g transform="scale(1.7)"><g transform="translate(-80 0)"><path d="M0 -60 l52 30 v60 l-52 30 l-52 -30 v-60 z" fill="${c0}" stroke="${c1}" stroke-width="4"/>${[[-16, -6], [16, -6], [0, 20]].map(([x, y]) => `<rect x="${x - 4}" y="${y - 9}" width="8" height="18" rx="2" fill="#1d1f22"/>`).join("")}</g>
      <rect x="-28" y="-6" width="16" height="12" fill="${c0}" stroke="${c1}" stroke-width="2"/>
      <g transform="translate(70 0)"><rect x="-58" y="-70" width="116" height="140" rx="14" fill="${c0}" stroke="${c1}" stroke-width="4"/><path d="M0 -40 l34 20 v40 l-34 20 l-34 -20 v-40 z" fill="#f2f4f6" stroke="${c1}" stroke-width="3"/>${[[-12, -4], [12, -4], [0, 14]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#1d1f22"/>`).join("")}</g>
      <path d="M-30 -30 h20 M-30 -36 v12 M-10 -36 v12" stroke="${c2}" stroke-width="2"/>
      ${text(-20, -44, "0.5 cm", 12, c2)}</g>`;
  }
  const loops = [0, 1, 2, 3, 4]
    .map((i) => `<ellipse cx="${-10 + i * 4}" cy="${i * 6}" rx="${140 - i * 10}" ry="${70 - i * 4}" fill="none" stroke="${c0}" stroke-width="11" transform="rotate(${-8 + i * 3})"/>`)
    .join("");
  const twin = a.count && a.count > 1 ? "" : "";
  const plugs =
    a.variant === "wlan"
      ? `<g transform="translate(150 -30)"><rect x="-34" y="-30" width="68" height="60" rx="8" fill="${c1}" stroke="${c0}" stroke-width="5"/>${[12, 22].map((r) => `<path d="M${-r} 6 A${r} ${r} 0 0 1 ${r} 6" fill="none" stroke="${c0}" stroke-width="5" stroke-linecap="round"/>`).join("")}<circle cx="0" cy="10" r="4" fill="${c0}"/></g>${a.label ? text(0, 120, a.label, 22, c0) : ""}`
      : `<path d="M120 20 l60 -30" stroke="${c0}" stroke-width="11" stroke-linecap="round"/><path d="M178 -10 l18 -9" stroke="${c2}" stroke-width="6" stroke-linecap="round"/><path d="M-130 30 l-50 40" stroke="${c1}" stroke-width="11" stroke-linecap="round"/><path d="M-178 68 l-14 11" stroke="${c2}" stroke-width="6" stroke-linecap="round"/>`;
  return twin + loops + plugs;
};

const box: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const v = a.variant;
  if (v === "kit" || v === "pro") {
    return `<rect x="-60" y="-150" width="120" height="40" rx="18" fill="none" stroke="#1d1f22" stroke-width="14"/>
      <rect x="-180" y="-120" width="360" height="240" rx="22" fill="${c0}"/>
      <rect x="-180" y="-120" width="360" height="40" rx="22" fill="${shade(c0, 0.15)}"/>
      <rect x="-180" y="-10" width="360" height="10" fill="${shade(c0, -0.3)}"/>
      ${[-120, 100].map((x) => `<rect x="${x}" y="-22" width="22" height="34" rx="4" fill="url(#steel)"/>`).join("")}
      <rect x="-110" y="30" width="220" height="62" rx="6" fill="${c1}"/>
      ${text(0, 71, a.label ?? "", 26, v === "pro" ? "#1d1f22" : "#fff", 'letter-spacing="2"')}
      ${v === "pro" ? text(0, -50, "EFZ · PROFESSIONAL", 13, c2, 'letter-spacing="3"') : text(0, -50, "42 PCS · DIY", 13, c2, 'letter-spacing="3"')}`;
  }
  if (v === "ballot") {
    return `<path d="M-140 -60 L60 -60 L130 -110 L-70 -110 Z" fill="${shade(c0, -0.05)}" stroke="#c8ccd1" stroke-width="3"/>
      <rect x="-50" y="-92" width="90" height="10" rx="3" fill="#1d1f22" transform="skewX(-30)"/>
      <rect x="-30" y="-180" width="80" height="100" fill="#fff" stroke="#c8ccd1" stroke-width="2" transform="rotate(8)"/>
      ${text(14, -125, a.label ?? "", 20, c2, 'transform="rotate(8)"')}
      <path d="M-140 -60 L60 -60 L60 140 L-140 140 Z" fill="${c0}" stroke="#c8ccd1" stroke-width="3"/>
      <path d="M60 -60 L130 -110 L130 90 L60 140 Z" fill="${shade(c0, -0.15)}" stroke="#c8ccd1" stroke-width="3"/>
      <rect x="-120" y="0" width="160" height="70" fill="${c1}"/>
      ${text(-40, 44, "WAHLURNE", 22, "#fff", 'letter-spacing="2"')}`;
  }
  const front = `M-140 -80 L60 -80 L60 150 L-140 150 Z`;
  const side = `M60 -80 L130 -125 L130 105 L60 150 Z`;
  const top = `M-140 -80 L-70 -125 L130 -125 L60 -80 Z`;
  let face = "";
  if (v === "mystery") {
    face = `<rect x="-55" y="-80" width="30" height="230" fill="${c1}"/><path d="M-55 -80 L15 -125 L45 -125 L-25 -80 Z" fill="${c1}"/>
      <path d="M-40 -125 C-110 -190 -150 -120 -40 -125 C30 -190 70 -120 -40 -125" fill="none" stroke="${c1}" stroke-width="14"/>
      ${text(-40, 90, "?", 120, c1)}`;
  } else if (v === "adapters") {
    face = `<rect x="-140" y="-40" width="200" height="50" fill="${c1}"/>${text(-40, -6, a.label ?? "", 30, "#fff", 'letter-spacing="2"')}
      ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${-120 + (i % 3) * 58}" y="${36 + Math.floor(i / 3) * 52}" width="44" height="38" rx="6" fill="${c2}"/><rect x="${-108 + (i % 3) * 58}" y="${48 + Math.floor(i / 3) * 52}" width="20" height="10" rx="2" fill="#1d1f22"/>`).join("")}`;
  } else {
    face = `<rect x="-140" y="-30" width="200" height="60" fill="${c1}"/>${text(-40, 10, a.label ?? "", 28, c0 === "#ffffff" ? "#1d1f22" : c0, 'letter-spacing="2"')}
      <rect x="-110" y="50" width="140" height="80" rx="6" fill="#fff" opacity=".55"/>${[0, 1, 2].map((i) => `<rect x="${-96 + i * 42}" y="66" width="30" height="48" rx="4" fill="${c2}"/>`).join("")}`;
  }
  return `<path d="${top}" fill="${shade(c0, 0.2)}"/><path d="${side}" fill="${shade(c0, -0.25)}"/><path d="${front}" fill="${c0}"/>${face}
    <path d="${front}" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="2"/>`;
};

const board: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const traces = [
    "M-110 -60 H-30 L0 -30 H60",
    "M-110 0 H-50 L-20 30 H110",
    "M-110 60 H40 L70 30 H110",
    "M20 -90 V-40",
    "M-60 -90 V-60",
  ];
  return `<rect x="-170" y="-160" width="340" height="320" rx="6" fill="url(#gold)"/>
    <rect x="-150" y="-140" width="300" height="280" fill="#1d1f22"/>
    <rect x="-130" y="-120" width="260" height="210" rx="10" fill="${c0}"/>
    ${traces.map((d) => `<path d="${d}" fill="none" stroke="${c1}" stroke-width="5" stroke-linecap="round" opacity=".8"/>`).join("")}
    <rect x="60" y="-100" width="50" height="50" rx="3" fill="#1d1f22"/>
    <circle cx="0" cy="-30" r="20" fill="url(#steel)"/>
    <circle cx="-6" cy="-36" r="6" fill="#fff" opacity=".6"/>
    <rect x="-50" y="102" width="100" height="30" rx="3" fill="${c2}"/>
    ${text(0, 123, a.label ?? "", 18, "#1d1f22")}`;
};

const garment: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  if (a.variant === "cap") {
    return `<path d="M-130 30 C-130 -110 130 -110 130 30 Z" fill="${c0}"/>
      <path d="M-130 30 C-60 10 60 10 130 30 C200 40 220 80 160 86 C80 70 -80 70 -130 30 Z" fill="${shade(c0, -0.2)}"/>
      ${[-80, -26, 26, 80].map((x) => `<path d="M0 -76 Q${x * 0.6} -40 ${x} 26" fill="none" stroke="${shade(c0, -0.3)}" stroke-width="2"/>`).join("")}
      <circle cx="0" cy="-78" r="9" fill="${shade(c0, -0.3)}"/>
      ${text(0, 0, a.label ?? "", 44, c1, 'letter-spacing="3"')}
      <path d="M-40 10 h80" stroke="${c2}" stroke-width="3"/>`;
  }
  const hood = a.variant === "hoodie";
  const body = `M-70 -150 C-40 -130 40 -130 70 -150 L160 -110 L190 ${hood ? 40 : -20} L140 ${hood ? 50 : -5} L120 -50 L120 160 L-120 160 L-120 -50 L-140 ${hood ? 50 : -5} L-190 ${hood ? 40 : -20} L-160 -110 Z`;
  const [l1, l2] = twoLines(a.label ?? "");
  const size = (l2 ? Math.max(l1.length, l2.length) : l1.length) > 12 ? 17 : 22;
  return `<path d="${body}" fill="${c0}"/>
    ${hood ? `<path d="M-70 -150 C-80 -210 80 -210 70 -150 C40 -120 -40 -120 -70 -150 Z" fill="${shade(c0, -0.18)}"/><path d="M-12 -128 v40 M12 -128 v40" stroke="${c1}" stroke-width="4" stroke-linecap="round"/><path d="M-70 70 h140 l-16 60 h-108 z" fill="${shade(c0, -0.12)}"/>` : `<path d="M-50 -142 C-30 -112 30 -112 50 -142" fill="none" stroke="${shade(c0, -0.25)}" stroke-width="8"/>`}
    <rect x="-120" y="150" width="240" height="10" fill="${shade(c0, -0.2)}"/>
    ${text(0, l2 ? -50 : -36, l1, size, c1)}
    ${l2 ? text(0, -50 + size * 1.25, l2, size, c1) : ""}
    <path d="M-60 ${l2 ? -12 : -22} h120" stroke="${c2}" stroke-width="3" opacity=".7"/>`;
};

const mug: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const [l1, l2] = twoLines(a.label ?? "");
  return `<path d="M90 -60 C170 -60 170 70 90 70" fill="none" stroke="${shade(c0, -0.08)}" stroke-width="26"/>
    <path d="M90 -60 C170 -60 170 70 90 70" fill="none" stroke="#c8ccd1" stroke-width="2"/>
    <rect x="-130" y="-120" width="230" height="250" rx="16" fill="${c0}" stroke="#c8ccd1" stroke-width="3"/>
    <ellipse cx="-15" cy="-120" rx="115" ry="16" fill="${shade(c0, -0.1)}" stroke="#c8ccd1" stroke-width="3"/>
    <ellipse cx="-15" cy="-120" rx="98" ry="10" fill="#6b4226"/>
    <rect x="-118" y="-100" width="16" height="210" rx="8" fill="#fff" opacity=".5"/>
    ${text(-15, -10, l1, 24, c1)}
    ${l2 ? text(-15, 22, l2, 24, c1) : ""}
    <path d="M-60 -4 q10 8 20 0 t20 0 t20 0 t20 0" fill="none" stroke="${c2}" stroke-width="3"/>
    <circle cx="70" cy="18" r="16" fill="none" stroke="${c2}" stroke-width="3"/>
    ${text(-15, 90, "ZOLILÖT AG", 11, "#6b6e73", 'letter-spacing="3"')}`;
};

const mat: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const poly = "M-190 -40 L130 -120 L200 50 L-120 130 Z";
  if (a.variant === "sheet") {
    const rows = [
      ["Name", "Rolle", "Anteil"],
      ["Dijar", "CTO", "49 %"],
      ["Julius", "VR", "49 %"],
      ["Zoltán", "CEO", "2 %"],
    ];
    const cells = rows
      .map((r, i) =>
        r
          .map((c, j) => `<text x="${-110 + j * 90}" y="${-30 + i * 34}" font-family="${FONT}" font-size="15" font-weight="${i === 0 ? 700 : 400}" fill="${i === 0 ? "#fff" : "#1d1f22"}">${esc(c)}</text>`)
          .join(""),
      )
      .join("");
    return `<path d="${poly}" fill="${c0}"/>
      <g transform="matrix(1 -0.25 0.22 1 0 0)">
        <rect x="-130" y="-60" width="270" height="150" fill="#fff"/>
        <rect x="-130" y="-60" width="270" height="40" fill="${c1}"/>
        ${[1, 2, 3].map((i) => `<path d="M-130 ${-20 + (i - 1) * 34 + 14} h270" stroke="#dedbd4" stroke-width="1.5"/>`).join("")}
        <path d="M-40 -60 v150 M50 -60 v150" stroke="#dedbd4" stroke-width="1.5"/>
        ${cells}
        <rect x="104" y="66" width="14" height="12" rx="2" fill="${c2}"/><path d="M107 66 v-5 a4 4 0 0 1 8 0 v5" fill="none" stroke="${c2}" stroke-width="2.5"/>
        <text x="-130" y="-74" font-family="${FONT}" font-size="13" font-weight="700" fill="#fff">${esc(a.label ?? "")}</text>
      </g>`;
  }
  return `<path d="${poly}" fill="${c0}"/>
    <g transform="matrix(1 -0.25 0.22 1 0 0)" opacity=".9">
      ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${-140 + i * 50} -60 v170" stroke="${c1}" stroke-opacity=".35" stroke-width="2"/>`).join("")}
      ${[0, 1, 2, 3].map((i) => `<path d="M-140 ${-60 + i * 50} h260" stroke="${c1}" stroke-opacity=".35" stroke-width="2"/>`).join("")}
      ${[0, 1, 2].map((i) => `<rect x="${130 - 20}" y="${-70 + i * 50}" width="40" height="36" rx="8" fill="${shade(c0, -0.25)}"/>`).join("")}
      <rect x="-140" y="60" width="120" height="44" rx="6" fill="${shade(c0, -0.2)}"/>
      <text x="-80" y="90" font-family="${FONT}" font-size="20" font-weight="700" fill="${c2}" text-anchor="middle">${esc(a.label ?? "")}</text>
    </g>`;
};

const tool: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  switch (a.variant) {
    case "leash":
      return `<path d="M-90 -40 C-40 -150 120 -120 120 10" fill="none" stroke="${c0}" stroke-width="5" stroke-dasharray="1 0"/>
        <g transform="translate(-120 10)"><path d="M-60 -50 C-60 -110 60 -110 60 -50 L60 40 C60 80 -60 80 -60 40 Z" fill="${c0}"/><circle cx="0" cy="-20" r="26" fill="${shade(c0, -0.3)}"/><rect x="-12" y="40" width="24" height="44" rx="10" fill="${c1}"/><rect x="40" y="-30" width="22" height="30" rx="5" fill="${c1}"/></g>
        <g transform="translate(130 40) rotate(70)"><rect x="-70" y="-16" width="100" height="32" rx="15" fill="${c1}"/><rect x="30" y="-6" width="56" height="12" fill="url(#steel)"/><path d="M86 -6 L106 0 L86 6 Z" fill="#6b6e73"/><rect x="-22" y="-20" width="12" height="40" rx="3" fill="${c0}"/></g>`;
    case "tips":
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        .map((i) => {
          const x = -150 + (i % 4) * 100;
          const y = -110 + Math.floor(i / 4) * 110;
          return `<g transform="translate(${x + 20} ${y}) rotate(${-10 + (i % 3) * 8})"><rect x="-14" y="-40" width="28" height="56" rx="4" fill="url(#steel)"/><path d="M-14 16 L14 16 L4 56 L-4 56 Z" fill="${c0}"/><circle cy="-28" r="5" fill="${c2}" opacity=".5"/></g>`;
        })
        .join("");
    case "helping":
      return `<rect x="-150" y="110" width="300" height="40" rx="10" fill="${c0}"/>
        <rect x="-10" y="-60" width="20" height="175" fill="url(#steel)"/>
        <path d="M0 -40 C-80 -80 -150 -40 -150 -110" fill="none" stroke="${c1}" stroke-width="12" stroke-dasharray="10 4"/>
        <path d="M0 -40 C80 -80 150 -40 150 -110" fill="none" stroke="${c1}" stroke-width="12" stroke-dasharray="10 4"/>
        <path d="M0 0 C-90 20 -170 0 -170 -40" fill="none" stroke="${c1}" stroke-width="12" stroke-dasharray="10 4"/>
        <path d="M0 0 C90 20 170 0 170 -40" fill="none" stroke="${c1}" stroke-width="12" stroke-dasharray="10 4" opacity=".5"/>
        ${[[-150, -110], [150, -110], [-170, -40], [170, -40]].map(([x, y]) => `<path d="M${x - 10} ${y - 4} l20 -26 l6 8 l-16 22 z" fill="${c2}"/>`).join("")}
        <circle cx="0" cy="-110" r="62" fill="#cfe8ff" opacity=".7" stroke="#1d1f22" stroke-width="10"/>
        <path d="M-30 -140 a40 40 0 0 1 30 -12" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`;
    case "tweezers":
      return [-40, -20, 0, 20, 40]
        .map(
          (d) => `<g transform="translate(0 140) rotate(${d})"><path d="M-6 0 L-14 -260 L-4 -262 L0 -10 L4 -262 L14 -260 L6 0 Z" fill="url(#steel)" stroke="#6b6e73" stroke-width="1"/><rect x="-15" y="-180" width="30" height="60" rx="4" fill="${c2}" opacity=".85"/></g>`,
        )
        .join("") + `<circle cx="0" cy="140" r="10" fill="${c1}"/>`;
    case "glasses":
      return `<path d="M-160 -20 C-160 -170 160 -170 160 -20" fill="none" stroke="${c0}" stroke-width="22"/>
        <rect x="-150" y="-40" width="300" height="110" rx="24" fill="${c0}"/>
        <circle cx="-66" cy="20" r="48" fill="${c1}" stroke="#3a3d42" stroke-width="8"/>
        <circle cx="66" cy="20" r="48" fill="${c1}" stroke="#3a3d42" stroke-width="8"/>
        <path d="M-90 0 a30 30 0 0 1 22 -16 M42 0 a30 30 0 0 1 22 -16" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
        <circle cx="0" cy="-58" r="18" fill="${c2}"/>
        ${[-60, -30, 0, 30, 60].map((d) => `<path d="M0 -58 l${Math.sin((d * Math.PI) / 180) * 50} ${-Math.cos((d * Math.PI) / 180) * 50}" stroke="${c2}" stroke-width="5" stroke-linecap="round" opacity=".7"/>`).join("")}
        ${text(0, 100, "25X", 22, c0)}`;
    case "fan":
      return `<rect x="-140" y="-150" width="280" height="290" rx="18" fill="${c0}"/>
        <circle cx="0" cy="-10" r="110" fill="#1d1f22"/>
        ${[100, 80, 60, 40].map((r) => `<circle cx="0" cy="-10" r="${r}" fill="none" stroke="${c1}" stroke-width="4"/>`).join("")}
        ${[0, 72, 144, 216, 288].map((d) => `<path d="M0 -10 C30 -40 70 -40 80 -10" fill="${c1}" opacity=".35" transform="rotate(${d} 0 -10)"/>`).join("")}
        <circle cx="0" cy="-10" r="16" fill="${c1}"/>
        <rect x="-110" y="112" width="60" height="18" rx="4" fill="${c2}"/>
        <rect x="-150" y="140" width="40" height="16" rx="4" fill="#1d1f22"/><rect x="110" y="140" width="40" height="16" rx="4" fill="#1d1f22"/>`;
    case "pump":
      return `<rect x="-120" y="140" width="240" height="22" rx="8" fill="${c1}"/>
        <rect x="-26" y="-140" width="52" height="280" rx="10" fill="${c0}"/>
        <rect x="-18" y="-130" width="10" height="260" rx="5" fill="#fff" opacity=".25"/>
        <rect x="-6" y="-200" width="12" height="70" fill="url(#steel)"/>
        <rect x="-110" y="-218" width="220" height="28" rx="14" fill="${c1}"/>
        <circle cx="0" cy="90" r="44" fill="#fff" stroke="${c1}" stroke-width="8"/>
        <path d="M0 90 l26 -22" stroke="${c2}" stroke-width="5" stroke-linecap="round"/>
        ${text(0, 122, "6 BAR", 11, "#1d1f22")}
        <path d="M26 130 C120 140 160 40 120 -40" fill="none" stroke="${c1}" stroke-width="10" stroke-linecap="round"/>`;
    case "stand":
      return `<path d="M0 60 L-150 170 M0 60 L150 170 M0 60 L0 175" stroke="${c1}" stroke-width="16" stroke-linecap="round"/>
        <rect x="-14" y="-120" width="28" height="190" rx="6" fill="${c0}"/>
        <rect x="-70" y="-160" width="140" height="56" rx="12" fill="${c2}"/>
        <circle cx="0" cy="-132" r="14" fill="#1d1f22"/>
        <g transform="translate(0 -132)"><rect x="-150" y="-12" width="150" height="24" rx="11" fill="#1d1f22"/><rect x="0" y="-5" width="110" height="10" fill="url(#steel)"/><path d="M110 -5 L130 0 L110 5 Z" fill="#6b6e73"/></g>
        <path d="M-60 -60 l120 0" stroke="${c1}" stroke-width="8" stroke-linecap="round"/>`;
    case "gloves": {
      const glove = (x: number, flip: boolean) =>
        `<g transform="translate(${x} 0) ${flip ? "scale(-1 1)" : ""}"><path d="M-60 160 L-60 0 C-90 -20 -110 -60 -96 -70 C-84 -78 -64 -40 -56 -36 L-56 -120 C-56 -140 -30 -140 -30 -120 L-28 -60 L-26 -150 C-26 -170 0 -170 0 -150 L2 -60 L6 -140 C6 -160 32 -160 32 -140 L30 -56 L36 -110 C38 -130 62 -126 60 -106 L52 0 L60 160 Z" fill="${c0}" stroke="${shade(c0, -0.3)}" stroke-width="3"/>${[100, 120, 140].map((y) => `<rect x="-60" y="${y}" width="120" height="10" fill="${y === 120 ? c2 : c1}"/>`).join("")}</g>`;
      return glove(-70, false) + glove(80, true);
    }
    default:
      return "";
  }
};

const card: Draw = (a) => {
  const [c0, c1, c2] = a.colors;
  const label = a.label ?? "";
  switch (a.variant) {
    case "calendar":
      return `<rect x="-150" y="-160" width="300" height="330" rx="6" fill="#fff" stroke="#dedbd4" stroke-width="3"/>
        <rect x="-150" y="-160" width="300" height="120" fill="${c0}"/>
        ${[-110, -70, -30, 10, 50, 90].map((x) => `<rect x="${x}" y="-176" width="10" height="34" rx="5" fill="${c2}"/>`).join("")}
        ${text(0, -82, label, 54, c1)}
        ${text(0, -55, "VISION · MINDSET · HUSTLE", 11, c1, 'letter-spacing="2"')}
        ${Array.from({ length: 35 }, (_, i) => `<rect x="${-130 + (i % 7) * 38}" y="${-24 + Math.floor(i / 7) * 36}" width="30" height="28" rx="3" fill="${i === 17 ? c0 : "#f1efea"}"/>`).join("")}`;
    case "badge":
      return `<path d="M-90 -200 L-10 -60 M90 -200 L10 -60" stroke="${c0}" stroke-width="22" stroke-linecap="round"/>
        <rect x="-16" y="-72" width="32" height="30" rx="4" fill="url(#steel)"/>
        <rect x="-120" y="-50" width="240" height="220" rx="14" fill="${c1}" stroke="#dedbd4" stroke-width="3"/>
        <rect x="-120" y="-50" width="240" height="56" rx="14" fill="${c0}"/>
        ${text(0, -14, "ZOLILÖT AG", 18, "#fff", 'letter-spacing="3"')}
        <circle cx="-56" cy="66" r="34" fill="#dedbd4"/><circle cx="-56" cy="56" r="14" fill="#9aa0a6"/><path d="M-82 96 C-80 70 -32 70 -30 96" fill="#9aa0a6"/>
        ${labelBlock(44, 62, label, 17, c2)}
        ${Array.from({ length: 22 }, (_, i) => `<rect x="${-96 + i * 9}" y="126" width="${i % 3 ? 3 : 5}" height="26" fill="#1d1f22"/>`).join("")}`;
    case "course":
      return `<rect x="-170" y="-140" width="340" height="220" rx="14" fill="#1d1f22"/>
        <rect x="-154" y="-124" width="308" height="188" rx="4" fill="${c1}"/>
        ${text(0, -80, label, 28, "#fff", 'letter-spacing="2"')}
        ${text(0, -54, "14 MODULE · PASSIVES EINKOMMEN", 12, "#fff", 'letter-spacing="1"')}
        <circle cx="0" cy="6" r="34" fill="#fff" opacity=".95"/><path d="M-10 -12 L18 6 L-10 24 Z" fill="${c1}"/>
        <path d="M-200 80 L200 80 L170 120 L-170 120 Z" fill="#c8ccd1"/><rect x="-40" y="84" width="80" height="8" rx="4" fill="#9aa0a6"/>`;
    case "share":
    case "certificate": {
      const share = a.variant === "share";
      return `<rect x="-180" y="-140" width="360" height="270" fill="${c0}" stroke="${c2}" stroke-width="10"/>
        <rect x="-162" y="-122" width="324" height="234" fill="none" stroke="${c2}" stroke-width="2"/>
        ${share ? [40, 60, 80, 100].map((r) => `<ellipse cx="0" cy="-5" rx="${r * 1.6}" ry="${r * 0.7}" fill="none" stroke="${c2}" stroke-opacity=".25" stroke-width="1.5"/>`).join("") : ""}
        ${text(0, -72, share ? "ZOLILÖT AG · AARAU" : "ZOLILÖT AG · BERUFSBILDUNG", 13, c1, 'letter-spacing="3"')}
        ${text(0, -24, label, 38, c1, 'letter-spacing="2"')}
        ${text(0, 8, share ? "1 Aktie · Stimmrecht 0 %" : "verlängert, erfahrungsgemäss", 15, "#6b6e73")}
        <path d="M-120 64 h120" stroke="${c1}" stroke-width="1.5"/>${text(-60, 82, share ? "Dijar, CTO 49 %" : "Levi, Berufsbildner", 11, "#6b6e73")}
        <circle cx="110" cy="60" r="40" fill="${c2}"/><circle cx="110" cy="60" r="30" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 3"/>
        <path d="M90 92 l-12 46 l20 -10 l10 18 l6 -50 M130 92 l12 46 l-20 -10 l-10 18 l-6 -50" fill="${shade(c2, -0.2)}"/>`;
    }
    case "ebook":
      return `<rect x="-130" y="-180" width="260" height="360" rx="22" fill="#1d1f22"/>
        <rect x="-112" y="-158" width="224" height="300" rx="4" fill="${c0}"/>
        ${[[-40, -100], [40, -60], [-60, -20]].map(([x, y]) => `<g transform="translate(${x} ${y})" stroke="${c1}" stroke-width="4" stroke-linecap="round"><path d="M-14 0 h28 M0 -14 v28 M-10 -10 l20 20 M10 -10 l-20 20"/></g>`).join("")}
        ${labelBlock(0, 40, label, 24, c1)}
        ${text(0, 116, "E-BOOK · 0 SEITEN", 12, c2, 'letter-spacing="2"')}
        <circle cx="0" cy="162" r="8" fill="#3a3d42"/>`;
    case "ticket":
      return `<path d="M-180 -90 H180 V-24 A24 24 0 0 0 180 24 V90 H-180 V24 A24 24 0 0 0 -180 -24 Z" fill="${c0}"/>
        <path d="M90 -80 V80" stroke="${c2}" stroke-width="3" stroke-dasharray="8 6"/>
        ${text(-45, -36, "EINTRITT · 1 PERSON", 12, c2, 'letter-spacing="3"')}
        ${labelBlock(-45, 4, label, 26, c1)}
        ${text(-45, 64, "CEO-CONSULTING · ZOLILÖT AG", 11, "#9aa0a6", 'letter-spacing="1"')}
        ${text(135, 10, "Nº 1", 22, c1, 'transform="rotate(-90 135 4)"')}`;
    case "gift":
      return `<rect x="-180" y="-110" width="360" height="220" rx="18" fill="${c0}"/>
        <rect x="40" y="-110" width="34" height="220" fill="${c2}"/>
        <rect x="-180" y="20" width="360" height="30" fill="${c2}"/>
        <path d="M57 35 C10 -40 -30 20 57 35 C110 -40 150 20 57 35" fill="none" stroke="${c2}" stroke-width="12"/>
        ${text(-80, -50, "GESCHENKKARTE", 18, c1, 'letter-spacing="2"')}
        ${text(-80, 0, label, 44, c1)}
        ${text(-80, 92, "WERT CHF 50.00", 12, c1, 'letter-spacing="2"')}`;
    default:
      return "";
  }
};

export const kinds: Record<Art["kind"], Draw> = { iron, station, bottle, perfume, jar, spool, cable, box, board, garment, mug, mat, tool, card };
