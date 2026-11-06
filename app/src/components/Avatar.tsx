import { createAvatar } from "@dicebear/core";
import { notionists } from "@dicebear/collection";
import type { Person } from "@/content";

/** Renders a notionists avatar (CC0) at build time; ring = LinkedIn-style banner text. */
export function Avatar({ person, size = "md" }: { person: Person; size?: "md" | "lg" }) {
  const uri = createAvatar(notionists, {
    seed: `${person.name}-zl`,
    gestureProbability: 100,
    bodyIconProbability: 0,
    ...(person.avatar as object),
  }).toDataUri();
  const id = `ring-${person.name.normalize("NFD").replace(/[^a-z]/gi, "")}`;

  return (
    <div className={`relative shrink-0 ${size === "lg" ? "size-36 md:size-40" : "size-24 sm:size-28"}`}>
      <div className="absolute inset-0 overflow-hidden rounded-full" style={{ backgroundColor: person.bg }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- inline SVG data URI */}
        <img src={uri} alt={`Profilbild von ${person.name}`} className="size-full translate-y-[6%] scale-110" />
      </div>
      {person.ring && (
        <svg viewBox="0 0 100 100" className="pointer-events-none absolute -inset-[3%] size-[106%]" aria-hidden>
          <defs>
            <path id={id} d="M 8 53 A 42 42 0 0 0 92 53" />
          </defs>
          <path d="M 6 48 A 44 44 0 0 0 94 48" fill="none" stroke="#f08a24" strokeWidth="12" />
          <text fill="#fff" fontSize="8.4" fontWeight="700" letterSpacing="0.4" fontFamily="Arial, sans-serif">
            <textPath href={`#${id}`} startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              {person.ring}
            </textPath>
          </text>
        </svg>
      )}
    </div>
  );
}
