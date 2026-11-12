import type { Metadata } from "next";
import { Pictogram } from "@/components/Pictogram";
import { Reveal } from "@/components/Reveal";
import { sds } from "@/content";

export const metadata: Metadata = {
  title: "Sicherheitsdatenblatt · Zolilöt AG",
  description: sds.lead,
};

export default function Sicherheit() {
  return (
    <main className="pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solder-ink">{sds.eyebrow}</p>
          <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-graphite md:text-6xl">
            {sds.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">{sds.lead}</p>
          <p className="mt-5 text-xs text-steel">{sds.meta.join(" · ")}</p>
        </Reveal>

        <ol className="mt-14 border-t border-line md:mt-20">
          {sds.sections.map((s, i) => (
            <Reveal as="li" key={s.title} delay={Math.min(i, 3) * 0.05} className="border-b border-line">
              <section aria-labelledby={`abschnitt-${i + 1}`} className="grid gap-5 py-9 md:grid-cols-12 md:gap-10 md:py-12">
                <div className="md:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-steel">Abschnitt {i + 1}</p>
                  <h2
                    id={`abschnitt-${i + 1}`}
                    className="font-display mt-2 text-balance text-xl font-semibold tracking-tight text-graphite md:text-2xl"
                  >
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  {i === 1 && <Hazards />}
                  <dl>
                    {s.items.map((f) => (
                      <div
                        key={f.k}
                        className="grid gap-1 border-b border-line py-3.5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
                      >
                        <dt className="text-sm font-medium text-graphite">{f.k}</dt>
                        <dd className="text-pretty text-[15px] leading-relaxed text-graphite/80">{f.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 max-w-md">
          <p className="text-xs text-steel">Gezeichnet</p>
          <p className="font-display mt-2 text-lg font-semibold tracking-tight text-graphite">{sds.signoff}</p>
        </Reveal>
      </div>
    </main>
  );
}

function Hazards() {
  return (
    <div className="mb-8 border-b border-line pb-8">
      <ul className="grid grid-cols-3 gap-4 sm:gap-8">
        {sds.hazards.map((h) => (
          <li key={h.id}>
            <Pictogram kind={h.id} className="size-20 sm:size-24" />
            <p className="mt-3 text-sm font-medium text-graphite">{h.label}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-steel">
              {h.code} · {h.note}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-steel">
        Signalwort: <span className="font-semibold text-[#d62828]">{sds.signal}</span>
      </p>
    </div>
  );
}
