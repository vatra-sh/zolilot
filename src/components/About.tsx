import Image from "next/image";
import { about } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section id="ueber-uns" className="relative bg-graphite py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead index="03" eyebrow={about.eyebrow} title={about.title} dark />

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-graphite-2">
                <Image
                  src="/hero.jpg"
                  alt="Porträt von Zoltan im schwarzen Firmenpolo"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[6%_50%]"
                />
              </div>
              <figcaption className="mt-4">
                <p className="text-sm font-medium text-paper">{about.name}</p>
                <p className="text-xs text-paper/60">{about.role}</p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="md:col-span-7 md:pl-6">
            <Reveal>
              <blockquote className="font-display text-balance text-2xl font-medium leading-snug tracking-tight md:text-[2rem]">
                <span className="text-solder">«</span>
                {about.quote}
                <span className="text-solder">»</span>
              </blockquote>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-4 text-pretty text-base leading-relaxed text-paper/70">
                {about.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <dl className="mt-10 grid grid-cols-2 border-t border-paper/15">
                {about.facts.map((f) => (
                  <div key={f.k} className="border-b border-paper/15 py-4 pr-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">{f.k}</dt>
                    <dd className="mt-1 text-sm text-paper">{f.v}</dd>
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
