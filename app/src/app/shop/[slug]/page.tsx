import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { categories, productBySlug, products } from "@/catalogue";
import { BuyBox } from "@/components/shop/BuyBox";
import { Gallery } from "@/components/shop/Gallery";
import { ProductCard } from "@/components/shop/ProductCard";
import { Reviews } from "@/components/shop/Reviews";
import { certs, shop } from "@/content";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  return p
    ? { title: `${p.name} · Zolilöt Shop`, description: p.description[0] }
    : {};
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10">
      <h2 className="font-display text-xl font-semibold text-graphite md:col-span-4">
        {title}
      </h2>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

function Rows({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows.map((r) => (
        <div
          key={r.k}
          className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:gap-6"
        >
          <dt className="text-sm text-steel">{r.k}</dt>
          <dd className="text-sm text-graphite">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Shell shown while the slug resolves during client navigation. */
function Skeleton() {
  return (
    <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12" aria-hidden>
      <div className="aspect-square rounded-[3px] border border-line bg-white md:col-span-7" />
      <div className="space-y-4 md:col-span-5">
        <div className="h-6 w-4/5 rounded-[2px] bg-paper-2" />
        <div className="h-6 w-3/5 rounded-[2px] bg-paper-2" />
        <div className="h-9 w-2/5 rounded-[2px] bg-paper-2" />
        <div className="h-28 rounded-[3px] border border-line bg-white" />
      </div>
    </div>
  );
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="pb-28 pt-8 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <Suspense fallback={<Skeleton />}>
          <Product params={params} />
        </Suspense>
      </div>
    </main>
  );
}

async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const category = categories.find((c) => c.id === p.category)!;
  const related = products
    .filter((x) => x.slug !== p.slug)
    .sort(
      (a, b) =>
        Number(b.category === p.category) - Number(a.category === p.category) ||
        b.popularity - a.popularity,
    )
    .slice(0, 4);

  return (
    <>
      <nav aria-label="Brotkrumen" className="text-xs text-steel">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/shop" className="hover:text-graphite">
              {shop.breadcrumb}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href={`/shop?kategorie=${category.id}`}
              className="hover:text-graphite"
            >
              {category.label}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-graphite">
            {p.name}
          </li>
        </ol>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <div className="md:sticky md:top-24">
            <Gallery product={p} />
          </div>
        </div>
        <div className="md:col-span-5">
          <h1 className="text-pretty text-xl font-medium leading-snug text-graphite md:text-2xl">
            {p.title}
          </h1>
          <p className="mt-3 text-sm text-steel">
            <a href="#bewertungen" className="hover:text-graphite">
              <span className="text-solder">★★★★★</span> {shop.rating} ·{" "}
              {shop.reviewsLabel(p.reviews.length)}
            </a>
          </p>
          <BuyBox product={p} />
          <div className="mt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-steel">
              {shop.buy.trust}
            </p>
            <ul className="mt-3 flex items-center gap-4">
              {certs.items.map((c) => (
                <li key={c.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG seals */}
                  <img
                    src={c.src}
                    alt={c.alt}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="size-12"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <Section title={shop.tabs.description}>
          <div className="max-w-2xl space-y-4 text-pretty text-base leading-relaxed text-graphite">
            {p.description.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>
        </Section>
        <Section title={shop.tabs.specs}>
          <Rows rows={p.specs} />
        </Section>
        <Section title={shop.tabs.delivery}>
          <Rows rows={shop.delivery} />
        </Section>
        <section id="bewertungen" className="scroll-mt-24">
          <Section title={shop.tabs.reviews}>
            <Reviews reviews={p.reviews} />
          </Section>
        </section>
      </div>

      <section className="mt-10 border-t border-line pt-10">
        <h2 className="font-display text-xl font-semibold text-graphite">
          {shop.related}
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {related.map((r) => (
            <li key={r.slug}>
              <ProductCard product={r} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
