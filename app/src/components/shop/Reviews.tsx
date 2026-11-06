import { createAvatar } from "@dicebear/core";
import { notionists } from "@dicebear/collection";
import type { Review } from "@/catalogue";
import { shop, team, type Person } from "@/content";

const people: Person[] = [...team.board, ...team.staff, ...team.advisors];

/** Small reviewer avatar with the person's pinned traits from the team section. */
function Face({ person }: { person: Person }) {
  const uri = createAvatar(notionists, {
    seed: `${person.name}-zl`,
    gestureProbability: 0,
    bodyIconProbability: 0,
    ...(person.avatar as object),
  }).toDataUri();
  return (
    <span className="block size-10 shrink-0 overflow-hidden rounded-full" style={{ backgroundColor: person.bg }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- inline SVG data URI */}
      <img src={uri} alt="" className="size-full translate-y-[6%] scale-110" />
    </span>
  );
}

const Stars = ({ n }: { n: number }) => (
  <span aria-label={`${n} von 5 Sternen`} className="text-sm tracking-[0.1em]">
    <span className="text-solder">{"★".repeat(n)}</span>
    <span className="text-line">{"★".repeat(5 - n)}</span>
  </span>
);

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <p className="text-sm text-steel">
        <span className="font-display text-3xl font-semibold text-graphite">{shop.rating}</span> von 5 · {shop.reviewsLabel(reviews.length)}
      </p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {reviews.map((r) => {
          const person = people.find((p) => p.name === r.by);
          return (
            <li key={r.by + r.text} className="flex gap-4 py-5">
              {person && <Face person={person} />}
              <div className="min-w-0">
                <p className="text-sm font-medium text-graphite">{r.by}</p>
                <p className="text-xs text-steel">
                  {[shop.verified, person?.role].filter(Boolean).join(" · ")}
                </p>
                <div className="mt-2">
                  <Stars n={r.stars} />
                </div>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-graphite">{r.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
