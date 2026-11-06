import { team, type Person } from "@/content";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { TeamTabs } from "./TeamTabs";

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

        <div className="mt-16">
          <TeamTabs
            tabs={[
              {
                id: "staff",
                label: team.tabs.staff.label,
                count: team.staff.length,
                intro: team.tabs.staff.intro,
                panel: <PersonGrid people={team.staff} />,
              },
              {
                id: "advisors",
                label: team.tabs.advisors.label,
                count: team.advisors.length,
                intro: team.tabs.advisors.intro,
                panel: <PersonGrid people={team.advisors} />,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PersonGrid({ people }: { people: Person[] }) {
  // On sm+ each card is a 3-row subgrid (avatar, name+role, text), so names, roles and
  // texts start on the same line across a row whatever their length. No frames.
  return (
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {people.map((p, i) => (
        <Reveal
          as="li"
          key={p.name}
          delay={(i % 4) * 0.06}
          className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 sm:row-span-3 sm:grid-cols-1 sm:grid-rows-subgrid sm:gap-y-4"
        >
          <div className="transition-transform duration-500 ease-out-soft group-hover:-translate-y-1">
            <Avatar person={p} />
          </div>
          <div className="self-center sm:self-start">
            <h3 className="font-display text-lg font-semibold tracking-tight text-graphite">{p.name}</h3>
            <p className="mt-0.5 text-sm text-steel">{p.role}</p>
            {p.tag && <p className="text-sm text-solder-ink">{p.tag}</p>}
          </div>
          <p className="col-span-2 text-pretty text-sm leading-relaxed text-graphite/75 sm:col-span-1">{rich(p.line)}</p>
        </Reveal>
      ))}
    </ul>
  );
}

/** Card text supports *italic* spans (people send their bios with formatting). */
function rich(text: string) {
  return text.split(/\*([^*]+)\*/g).map((part, i) =>
    i % 2 ? (
      <em key={i} className="text-graphite">
        {part}
      </em>
    ) : (
      part
    ),
  );
}
