import { stats } from "@/content";
import { CountUp } from "./CountUp";
import { Pad } from "./Trace";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section aria-label="Kennzahlen" className="relative py-20 md:py-28">
      <Pad className="top-[calc(var(--spacing)*20+18px)] md:top-[calc(var(--spacing)*28+22px)]" />
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className={`pr-4 ${i % 2 ? "border-l border-line pl-5 lg:pl-8" : ""} ${
                i === 2 ? "lg:border-l lg:border-line lg:pl-8" : ""
              }`}
            >
              <dd className="font-display text-5xl font-semibold tracking-tight text-graphite md:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 text-sm font-medium text-graphite">{s.label}</dt>
              <p className="mt-1 text-xs leading-relaxed text-steel">{s.note}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
