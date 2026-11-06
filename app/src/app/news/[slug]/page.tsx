import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { formatDate, posts } from "@/news";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: `${post.title} · Zolilöt AG`, description: post.excerpt } : {};
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="pb-24 pt-12 md:pb-32 md:pt-16">
      <article className="mx-auto max-w-2xl px-7 md:px-8">
        <Link href="/news" className="group inline-flex items-center gap-2 text-sm text-steel transition-colors duration-300 hover:text-graphite">
          <span aria-hidden className="transition-transform duration-500 ease-out-soft group-hover:-translate-x-1">
            ←
          </span>
          Alle News
        </Link>
        <Reveal className="mt-10">
          <p className="text-xs text-steel">
            {formatDate(post.date)} · {post.category}
          </p>
          <h1 className="font-display mt-3 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-graphite md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-steel">{post.excerpt}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 space-y-6 border-t border-line pt-10">
          {post.body.map((b, i) =>
            b.type === "p" ? (
              <p key={i} className="text-pretty text-[17px] leading-relaxed text-graphite/85">
                {b.text}
              </p>
            ) : (
              <dl key={i} className="border-y border-line">
                {b.items.map((f) => (
                  <div key={f.k} className="grid gap-1 border-b border-line py-4 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-steel sm:pt-1">{f.k}</dt>
                    <dd className="text-[16px] leading-relaxed text-graphite/85">{f.v}</dd>
                  </div>
                ))}
              </dl>
            ),
          )}
        </Reveal>
      </article>
    </main>
  );
}
