import { team } from "@/content";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <SectionHead
          index="04"
          eyebrow={team.eyebrow}
          title={team.title}
          lead={team.lead}
        />

        <p className="mt-14 text-xs font-semibold uppercase tracking-[0.14em] text-steel md:mt-20">
          Geschäftsleitung & Verwaltungsrat
        </p>
        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {team.board.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col items-center rounded-[4px] border border-line bg-white/60 px-6 pb-7 pt-8 text-center">
                <div className="transition-transform duration-500 ease-out-soft group-hover:-translate-y-1">
                  <Avatar person={p} size="lg" />
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-graphite">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-steel">{p.role}</p>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-graphite/80">
                  {p.line}
                </p>
                <div className="mt-auto w-full pt-6">
                  <div className="flex items-center justify-between border-t border-line pt-4 text-xs">
                    <span className="text-steel">Aktienanteil · {p.how}</span>
                    <span
                      className={`font-semibold ${p.shares === 2 ? "text-steel" : "text-solder-ink"}`}
                    >
                      {p.shares}&nbsp;%
                    </span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full bg-solder"
                      style={{ width: `${p.shares}%` }}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-16 text-xs font-semibold uppercase tracking-[0.14em] text-steel">
          Mitarbeitende
        </p>
        <ul className="mt-5 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.staff.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={(i % 4) * 0.06}
              className="group flex gap-5 sm:block"
            >
              <div className="transition-transform duration-500 ease-out-soft group-hover:-translate-y-1">
                <Avatar person={p} />
              </div>
              <div>
                <h3 className="font-display mt-1 text-lg sm:mt-5 font-semibold tracking-tight text-graphite">
                  {p.name}
                </h3>
                <p className="text-sm text-steel">
                  {p.role}
                  {p.tag && (
                    <>
                      {" · "}
                      <span className="text-solder-ink">{p.tag}</span>
                    </>
                  )}
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-graphite/75">
                  {p.line}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
