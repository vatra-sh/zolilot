"use client";

import { motion } from "motion/react";
import { flux } from "@/content";
import { Reveal } from "./Reveal";

const bubbles = [
  { x: 84, r: 3, d: 5.2, delay: 0 },
  { x: 112, r: 2, d: 4.1, delay: 1.3 },
  { x: 150, r: 3.5, d: 6, delay: 0.6 },
  { x: 132, r: 2.5, d: 4.8, delay: 2.4 },
  { x: 96, r: 2, d: 5.6, delay: 3.1 },
];

function Bottle() {
  return (
    <svg viewBox="0 0 240 320" className="h-full w-full" role="img" aria-label="Flasche Zolilöt Flux Nº 7">
      <defs>
        <linearGradient id="amber" x1="0" x2="1">
          <stop offset="0%" stopColor="#7a3f0e" />
          <stop offset="35%" stopColor="#c46a1c" />
          <stop offset="70%" stopColor="#a65512" />
          <stop offset="100%" stopColor="#6a360c" />
        </linearGradient>
        <clipPath id="glass">
          <path d="M100 74 h40 v34 c0 6 40 10 40 30 v134 c0 12 -8 20 -20 20 h-80 c-12 0 -20 -8 -20 -20 v-134 c0 -20 40 -24 40 -30 z" />
        </clipPath>
      </defs>
      <ellipse cx="120" cy="300" rx="78" ry="8" fill="#000" opacity="0.35" />
      <g clipPath="url(#glass)">
        <rect x="40" y="60" width="160" height="240" fill="url(#amber)" />
        <rect x="40" y="60" width="160" height="62" fill="#3a1d07" opacity="0.55" />
        <path d="M60 122 h120" stroke="#f6c999" strokeOpacity="0.5" strokeWidth="2" />
        {bubbles.map((b, i) => (
          <motion.circle
            key={i}
            cx={b.x}
            r={b.r}
            fill="none"
            stroke="#ffd9a8"
            strokeOpacity="0.8"
            strokeWidth="1.2"
            initial={{ cy: 285, opacity: 0 }}
            animate={{ cy: [285, 130], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: b.d, delay: b.delay, repeat: Infinity, ease: "easeIn" }}
          />
        ))}
        <rect x="70" y="80" width="10" height="210" fill="#fff" opacity="0.18" />
      </g>
      {/* cap */}
      <rect x="94" y="38" width="52" height="40" rx="4" fill="#1d1f22" />
      {[46, 54, 62, 70].map((y) => (
        <rect key={y} x="94" y={y} width="52" height="2" fill="#3a3d42" />
      ))}
      {/* label */}
      <rect x="66" y="158" width="108" height="100" rx="3" fill="#f6f5f2" />
      <rect x="66" y="158" width="108" height="6" fill="#f08a24" />
      <text x="120" y="182" textAnchor="middle" fontSize="9" letterSpacing="2" fill="#6b6e73" fontFamily="Arial, sans-serif" fontWeight="700">
        ZOLILÖT
      </text>
      <text x="120" y="212" textAnchor="middle" fontSize="28" fill="#2b2d31" fontFamily="var(--font-archivo), Arial, sans-serif" fontWeight="800">
        FLUX
      </text>
      <text x="120" y="234" textAnchor="middle" fontSize="15" fill="#d9731a" fontFamily="Arial, sans-serif" fontWeight="700">
        Nº 7
      </text>
      <text x="76" y="251" fontSize="6.5" fill="#6b6e73" fontFamily="Arial, sans-serif">
        500 ml · AARAU
      </text>
      <g transform="translate(158 244) rotate(45)">
        <rect x="-7" y="-7" width="14" height="14" fill="#fff" stroke="#d62828" strokeWidth="2" />
      </g>
      <text x="158" y="248" textAnchor="middle" fontSize="9" fill="#2b2d31" fontFamily="Arial, sans-serif" fontWeight="700">
        !
      </text>
    </svg>
  );
}

export function Flux() {
  return (
    <Reveal className="mt-6">
      <article className="grid overflow-hidden rounded-[4px] bg-graphite text-paper md:grid-cols-12">
        <div className="relative flex items-center justify-center bg-[radial-gradient(circle_at_50%_60%,rgba(240,138,36,0.18),transparent_60%)] px-10 pt-10 md:col-span-5 md:py-10">
          <div className="h-64 w-48 md:h-80 md:w-60">
            <Bottle />
          </div>
        </div>
        <div className="p-7 md:col-span-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solder">{flux.eyebrow}</p>
          <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{flux.name}</h3>
          <p className="mt-3 max-w-lg text-pretty text-[15px] leading-relaxed text-paper/70">{flux.lead}</p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">Sicherheitsdatenblatt (Auszug)</p>
          <dl className="mt-3 border-t border-paper/15">
            {flux.sheet.map((r) => (
              <div key={r.k} className="grid gap-1 border-b border-paper/15 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <dt className="text-sm text-paper/50">{r.k}</dt>
                <dd className="text-sm text-paper/90">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
    </Reveal>
  );
}
