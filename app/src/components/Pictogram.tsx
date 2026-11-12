import type { Pictogram as Kind } from "@/content";

/** GHS-style hazard pictograms, drawn in code: red diamond frame, black symbol on white. */
export function Pictogram({ kind, className = "" }: { kind: Kind; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <rect x="17" y="17" width="66" height="66" transform="rotate(45 50 50)" fill="#fff" stroke="#d62828" strokeWidth="7" strokeLinejoin="miter" />
      {symbols[kind]}
    </svg>
  );
}

const symbols: Record<Kind, React.ReactNode> = {
  // GHS02: flame over a bar
  flamme: (
    <g fill="#1d1f22">
      <path d="M50 26 C44 36 38 40 38 51 C38 59 43 64 50 64 C57 64 62 59 62 51 C62 45 59 41 56 37 C56 43 54 46 51 47 C53 40 52 32 50 26 Z" />
      <path d="M50 44 C47 49 45 51 45 55 C45 58 47 60 50 60 C53 60 55 58 55 55 C55 52 53 49 50 44 Z" fill="#fff" />
      <rect x="35" y="67" width="30" height="5" />
    </g>
  ),
  // GHS07: exclamation mark
  achtung: (
    <g fill="#1d1f22">
      <path d="M45.5 30 h9 l-2 26 h-5 z" />
      <circle cx="50" cy="65" r="4.6" />
    </g>
  ),
  // GHS08: bust with a burst on the chest
  gesundheit: (
    <g fill="#1d1f22">
      <circle cx="50" cy="33" r="7" />
      <path d="M35 72 C35 52 40 43 50 43 C60 43 65 52 65 72 Z" />
      <path
        d="M50 49 L52.2 54.6 L58 53 L54.6 57.8 L59 62 L53.2 61.6 L52.4 67.4 L50 62.6 L47.6 67.4 L46.8 61.6 L41 62 L45.4 57.8 L42 53 L47.8 54.6 Z"
        fill="#fff"
      />
    </g>
  ),
};
