import { services } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Services() {
  return (
    <section id="leistungen" className="relative bg-paper-2/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="01" eyebrow={services.eyebrow} title={services.title} lead={services.lead} />

        <ul className="mt-14 grid overflow-hidden rounded-lg border border-line bg-line [gap:1px] sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {services.items.map((s, i) => (
            <Reveal as="li" key={s.code} delay={(i % 3) * 0.06} className="bg-paper">
              <article className="group relative flex h-full flex-col p-7 md:p-8">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-solder transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between font-medium text-[11px] tracking-[0.14em] text-steel">
                  <span>{s.code}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display mt-10 text-xl font-semibold tracking-tight text-graphite">{s.title}</h3>
                <p className="mt-3 text-pretty text-[15px] leading-relaxed text-steel">{s.text}</p>
                <p className="mt-auto pt-8 font-medium text-[11px] text-graphite/70">
                  <span className="text-solder-ink">▸</span> {s.spec}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
