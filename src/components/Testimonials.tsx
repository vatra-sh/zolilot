import { testimonials } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Testimonials() {
  return (
    <section id="referenzen" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="04" eyebrow={testimonials.eyebrow} title={testimonials.title} lead={testimonials.rating} />

        <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal as="li" key={t.who} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-lg border border-line bg-white/60 p-7">
                <p aria-label="5 von 5 Sternen" className="text-sm tracking-[0.2em] text-solder">
                  ★★★★★
                </p>
                <blockquote className="mt-5 text-pretty text-[17px] leading-relaxed text-graphite">{t.quote}</blockquote>
                <figcaption className="mt-auto pt-8 text-xs text-steel">{t.who}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
