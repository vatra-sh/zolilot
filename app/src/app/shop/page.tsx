import type { Metadata } from "next";
import { Suspense } from "react";
import { Reveal } from "@/components/Reveal";
import { Listing, ListingFallback } from "@/components/shop/Listing";
import { shop } from "@/content";

export const metadata: Metadata = {
  title: "Shop · Zolilöt AG",
  description: "Der offizielle Zolilöt-Shop: Lötkolben, Flux Nº 7, Merch und Beteiligungen. Lieferung in 3 bis 6 Wochen ab Shenzhen.",
};

export default function ShopIndex() {
  return (
    <main className="pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solder-ink">{shop.index.eyebrow}</p>
          <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-graphite md:text-6xl">
            {shop.index.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-steel md:text-lg">{shop.index.lead}</p>
        </Reveal>
        <div className="mt-10 md:mt-14">
          {/* the URL (filters, sort) is only known in the browser */}
          <Suspense fallback={<ListingFallback />}>
            <Listing />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
