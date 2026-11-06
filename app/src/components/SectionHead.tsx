import { Pad } from "./Trace";
import { Reveal } from "./Reveal";

export function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <Reveal className="md:col-span-7">
        <div className="relative">
          <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-solder" : "text-solder-ink"}`}>
            {index} / {eyebrow}
          </p>
        </div>
        <h2
          className={`font-display mt-4 text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl ${
            dark ? "text-paper" : "text-graphite"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.08} className="md:col-span-5">
          <p className={`text-pretty text-base leading-relaxed md:text-lg ${dark ? "text-paper/70" : "text-steel"}`}>
            {lead}
          </p>
        </Reveal>
      )}
      <Pad dark={dark} className="top-[calc(var(--spacing)*24+1px)] md:top-[calc(var(--spacing)*32+1px)]" />
    </div>
  );
}
