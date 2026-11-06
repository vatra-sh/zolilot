"use client";

import { motion } from "motion/react";

type Pt = [number, number];
const d = (pts: Pt[]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

// Traces: [points, carries a current pulse?]
const traces: { pts: Pt[]; pulse?: number }[] = [
  { pts: [[508, 208], [470, 208], [420, 158], [250, 158]], pulse: 4.2 },
  { pts: [[508, 230], [380, 230]] },
  { pts: [[330, 230], [300, 230], [260, 270], [160, 270]] },
  { pts: [[508, 252], [460, 252], [430, 282], [430, 360], [400, 390], [260, 390]], pulse: 5.4 },
  { pts: [[508, 296], [480, 296], [480, 430], [450, 460]] },
  { pts: [[692, 208], [740, 208], [790, 158], [894, 158]], pulse: 3.2 },
  { pts: [[692, 230], [800, 230], [830, 260], [954, 260]] },
  { pts: [[692, 274], [740, 274], [780, 314], [1000, 314], [1040, 354], [1040, 414]], pulse: 6 },
  { pts: [[692, 318], [720, 318], [720, 400], [750, 430], [890, 430]] },
  { pts: [[565, 178], [565, 120], [610, 75], [766, 75]] },
  { pts: [[615, 178], [615, 140], [650, 105], [1000, 105], [1040, 145], [1040, 186]], pulse: 4.8 },
  { pts: [[540, 178], [540, 110], [500, 70], [300, 70]] },
  { pts: [[590, 342], [590, 420], [620, 450], [714, 450]], pulse: 3.8 },
  { pts: [[640, 342], [640, 380], [680, 380]] },
];

const pads: Pt[] = [
  [236, 158], [146, 270], [246, 390], [286, 70], [894, 158], [954, 260], [1040, 414], [1040, 200], [714, 450],
];
const vias: Pt[] = [[680, 380], [360, 120], [980, 350], [180, 330], [860, 470], [130, 120]];
const header: Pt[] = [300, 330, 360, 390, 420, 450].map((x) => [x, 460]);
const pinsY = [208, 230, 252, 274, 296, 318];
const pinsX = [540, 565, 590, 615, 640, 665];

const ease = [0.22, 1, 0.36, 1] as const;

export function Board() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite sm:aspect-[16/8] lg:aspect-[1200/520]">
      <svg
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Leiterplatte der Zolilöt AG mit Chip, Leiterbahnen und einem Lötkolben, der gerade eine Lötstelle setzt"
      >
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#3a3d42" />
          </pattern>
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="55%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.45" />
          </radialGradient>
          <radialGradient id="spark">
            <stop offset="0%" stopColor="#fff4dc" stopOpacity="1" />
            <stop offset="25%" stopColor="#ffb25e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f08a24" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shaft" x1="0" x2="1">
            <stop offset="0%" stopColor="#7d8187" />
            <stop offset="45%" stopColor="#e3e5e8" />
            <stop offset="100%" stopColor="#8d9197" />
          </linearGradient>
          <linearGradient id="handle" x1="0" x2="1">
            <stop offset="0%" stopColor="#111214" />
            <stop offset="40%" stopColor="#2c2e33" />
            <stop offset="100%" stopColor="#141517" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect width="1200" height="520" fill="url(#dots)" />

        {/* mounting holes */}
        {[[40, 40], [1160, 40], [40, 480], [1160, 480]].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="14" fill="none" stroke="#55585e" strokeWidth="5" />
            <circle cx={x} cy={y} r="8" fill="#1d1f22" />
          </g>
        ))}

        {/* traces draw in */}
        <g fill="none" stroke="#50545b" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
          {traces.map((t, i) => (
            <motion.path
              key={i}
              d={d(t.pts)}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.06, ease }}
            />
          ))}
        </g>

        {/* current pulses travelling along a few traces */}
        <g fill="none" stroke="#f08a24" strokeWidth="4" strokeLinecap="round">
          {traces.map((t, i) =>
            t.pulse ? (
              <path
                key={i}
                d={d(t.pts)}
                pathLength={1}
                className="trace-pulse"
                style={{ animationDuration: `${t.pulse}s`, animationDelay: `${1.8 + i * 0.35}s` }}
              />
            ) : null,
          )}
        </g>

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}>
          {/* pads and vias */}
          {pads.map(([x, y]) => (
            <g key={`p${x}-${y}`}>
              <circle cx={x} cy={y} r="11" fill="#c5c8cd" />
              <circle cx={x} cy={y} r="4" fill="#2b2d31" />
            </g>
          ))}
          {vias.map(([x, y]) => (
            <circle key={`v${x}-${y}`} cx={x} cy={y} r="5" fill="#2b2d31" stroke="#8a8e94" strokeWidth="3" />
          ))}
          {header.map(([x, y], i) => (
            <rect key={`h${x}`} x={x - 10} y={y - 10} width="20" height="20" rx={i === 0 ? 0 : 10} fill="#c5c8cd" />
          ))}

          {/* SMD resistors */}
          <g>
            <rect x="328" y="222" width="54" height="16" fill="#18191b" />
            <rect x="328" y="222" width="10" height="16" fill="#c5c8cd" />
            <rect x="372" y="222" width="10" height="16" fill="#c5c8cd" />
            <text x="355" y="234" fontSize="9" fill="#9a9da2" textAnchor="middle" fontFamily="Arial, sans-serif">103</text>
          </g>
          <g>
            <rect x="818" y="150" width="46" height="16" fill="#18191b" />
            <rect x="818" y="150" width="9" height="16" fill="#c5c8cd" />
            <rect x="855" y="150" width="9" height="16" fill="#c5c8cd" />
          </g>

          {/* capacitors */}
          {[[1010, 260, 28], [1110, 200, 24], [200, 200, 22]].map(([x, y, r]) => (
            <g key={`c${x}`}>
              <circle cx={x} cy={y} r={r + 4} fill="#1d1f22" />
              <circle cx={x} cy={y} r={r} fill="#3d4148" stroke="#5c6067" strokeWidth="2" />
              <path d={`M${x - r * 0.6} ${y - r * 0.5} A ${r} ${r} 0 0 1 ${x + r * 0.6} ${y - r * 0.5}`} fill="none" stroke="#9a9da2" strokeWidth="3" />
            </g>
          ))}

          {/* crystal */}
          <rect x="890" y="418" width="74" height="26" rx="13" fill="#9ea2a8" stroke="#c9ccd0" strokeWidth="2" />
          <text x="927" y="435" fontSize="10" fill="#2b2d31" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700">
            16.000
          </text>

          {/* status LED */}
          <rect x="766" y="66" width="28" height="18" fill="#3a2a1c" stroke="#5c4a36" strokeWidth="2" />
          <motion.circle
            cx="780"
            cy="75"
            r="22"
            fill="url(#spark)"
            animate={{ opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* main chip */}
          <g>
            {pinsY.map((y) => (
              <g key={`py${y}`}>
                <rect x="506" y={y - 4} width="16" height="8" fill="#a7abb1" />
                <rect x="678" y={y - 4} width="16" height="8" fill="#a7abb1" />
              </g>
            ))}
            {pinsX.map((x) => (
              <g key={`px${x}`}>
                <rect x={x - 4} y="176" width="8" height="16" fill="#a7abb1" />
                <rect x={x - 4} y="328" width="8" height="16" fill="#a7abb1" />
              </g>
            ))}
            <rect x="518" y="188" width="164" height="144" rx="4" fill="#161719" stroke="#3e4147" strokeWidth="2" />
            <circle cx="534" cy="204" r="4" fill="#3e4147" />
            <text x="600" y="258" textAnchor="middle" fill="#e9e7e2" fontSize="22" fontWeight="700" letterSpacing="2" fontFamily="var(--font-archivo), Arial, sans-serif">
              ZOLILÖT
            </text>
            <text x="600" y="282" textAnchor="middle" fill="#8a8e94" fontSize="11" letterSpacing="2" fontFamily="Arial, sans-serif">
              ZL-2026 · AARAU
            </text>
            <rect x="584" y="296" width="32" height="3" fill="#f08a24" />
          </g>

          {/* silkscreen */}
          <g fill="#7a7e84" fontSize="12" fontFamily="Arial, sans-serif" letterSpacing="1">
            <text x="520" y="168">U1</text>
            <text x="340" y="214">R1</text>
            <text x="1000" y="222">C1</text>
            <text x="1090" y="164">C2</text>
            <text x="760" y="56">PWR</text>
            <text x="900" y="408">X1</text>
            <text x="290" y="495">J1</text>
            <text x="1150" y="500" textAnchor="end">ZOLILÖT AG · REV 2.6 · WIR MACHENS MÖGLICH</text>
          </g>
        </motion.g>

        {/* soldering iron, tip on the pad at (894,158) */}
        <motion.g
          initial={{ opacity: 0, x: 40, y: -40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
        >
          <g transform="translate(906 172) rotate(35)" opacity="0.5" filter="url(#soft)">
            <rect x="-12" y="-240" width="24" height="160" rx="10" fill="#000" />
            <rect x="-5" y="-80" width="10" height="66" fill="#000" />
          </g>
          <g transform="translate(894 158) rotate(35)">
            <path d="M-3 -16 L3 -16 L0.6 0 L-0.6 0 Z" fill="#c9ccd0" />
            <rect x="-4.5" y="-74" width="9" height="58" fill="url(#shaft)" />
            <rect x="-8" y="-90" width="16" height="16" rx="2" fill="#b0884a" />
            <rect x="-12" y="-250" width="24" height="160" rx="10" fill="url(#handle)" />
            {[-110, -122, -134, -146].map((y) => (
              <rect key={y} x="-12" y={y} width="24" height="3" fill="#3a3d42" />
            ))}
            <path d="M0 -250 C 0 -300, 30 -330, 60 -380" fill="none" stroke="#141517" strokeWidth="8" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* spark at the tip */}
        <motion.circle
          cx="894"
          cy="158"
          r="46"
          fill="url(#spark)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.55, 1, 0.7, 0.95, 0.55], scale: [0.9, 1.05, 0.95, 1, 0.9] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          style={{ transformOrigin: "894px 158px" }}
        />
        <circle cx="894" cy="158" r="3" fill="#fff" />

        <rect width="1200" height="520" fill="url(#vignette)" pointerEvents="none" />
      </svg>
    </div>
  );
}
