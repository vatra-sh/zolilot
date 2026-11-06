import { about } from "@/content";
import { CapTable } from "./CapTable";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section id="ueber-uns" className="relative bg-graphite py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="03" eyebrow={about.eyebrow} title={about.title} dark />

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="space-y-4 text-pretty text-base leading-relaxed text-paper/70">
                {about.story.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="mt-10 border-l-2 border-solder pl-5">
                <blockquote className="font-display text-balance text-2xl font-medium leading-snug tracking-tight">
                  «{about.quote}»
                </blockquote>
                <figcaption className="mt-3 text-xs text-paper/50">{about.quoteBy}</figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pl-6">
            <Reveal>
              <CapTable />
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-10 border-t border-paper/15">
                {about.facts.map((f) => (
                  <div key={f.k} className="grid gap-1 border-b border-paper/15 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/50 sm:pt-0.5">{f.k}</dt>
                    <dd className="text-[15px] leading-relaxed text-paper/85">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
