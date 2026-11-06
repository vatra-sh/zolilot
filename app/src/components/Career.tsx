"use client";

import { career } from "@/content";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export const TOPIC_EVENT = "zl:topic";

export function Career() {
  const { job } = career;
  return (
    <section id="karriere" className="relative bg-paper-2/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="06" eyebrow={career.eyebrow} title={career.title} lead={career.lead} />

        <Reveal className="mt-14 md:mt-20">
          <article className="overflow-hidden rounded-lg border border-line bg-paper">
            <div className="flex flex-col gap-6 border-b border-line p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div>
                <p className="font-medium text-[11px] uppercase tracking-[0.14em] text-solder-ink">1 offene Stelle</p>
                <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-graphite md:text-3xl">
                  {job.title}
                </h3>
                <p className="mt-2 text-xs text-steel">{job.meta.join(" · ")}</p>
              </div>
              <ButtonLink
                href="#kontakt"
                onClick={() => window.dispatchEvent(new CustomEvent(TOPIC_EVENT, { detail: "Bewerbung als Lötlehrling" }))}
              >
                Jetzt bewerben
              </ButtonLink>
            </div>
            <div className="grid md:grid-cols-2">
              {[
                { h: "Wir bieten", items: job.offer },
                { h: "Du bringst mit", items: job.need },
              ].map((col, ci) => (
                <div key={col.h} className={`p-7 md:p-9 ${ci ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
                  <p className="text-sm font-medium text-graphite">{col.h}</p>
                  <ul className="mt-4 space-y-3">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-steel">
                        <span aria-hidden className="mt-[9px] size-1.5 shrink-0 bg-solder" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
