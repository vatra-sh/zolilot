import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { formatDate, newsPage, sortedPosts } from "@/news";

export const metadata: Metadata = { title: "News · Zolilöt AG" };

export default function NewsIndex() {
  const list = sortedPosts();
  return (
    <main className="pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solder-ink">{newsPage.eyebrow}</p>
          <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-graphite md:text-6xl">
            {newsPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">{newsPage.lead}</p>
        </Reveal>

        <ul className="mt-14 border-t border-line md:mt-20">
          {list.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={Math.min(i, 4) * 0.06} className="border-b border-line">
              <Link href={`/news/${p.slug}`} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <p className="text-xs text-steel md:col-span-3 md:pt-2">
                  {formatDate(p.date)} · {p.category}
                </p>
                <div className="md:col-span-9">
                  <h2 className="font-display text-balance text-2xl font-semibold tracking-tight text-graphite transition-colors duration-300 group-hover:text-solder-ink md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-steel">{p.excerpt}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-graphite">
                    Weiterlesen
                    <span aria-hidden className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </main>
  );
}
