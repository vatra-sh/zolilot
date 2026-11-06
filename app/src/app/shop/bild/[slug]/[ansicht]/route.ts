import { productBySlug, products, views, type View } from "@/catalogue";
import { renderArt } from "@/shop/art";

// 47 products × 4 views, all rendered at build time; unknown paths get a 404.
export function generateStaticParams() {
  return products.flatMap((p) => views.map((v) => ({ slug: p.slug, ansicht: `${v}.svg` })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string; ansicht: string }> }) {
  const { slug, ansicht } = await params;
  const product = productBySlug(slug);
  const view = ansicht.replace(/\.svg$/, "") as View;
  if (!product || !views.includes(view)) return new Response("Nicht gefunden", { status: 404 });
  return new Response(renderArt(product, view), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
