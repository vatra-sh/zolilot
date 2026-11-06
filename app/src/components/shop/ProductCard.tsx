import Link from "next/link";
import { shipLabel, type Product } from "@/catalogue";
import { shop } from "@/content";
import { focus, PriceLine, ProductImage } from "./ui";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link href={`/shop/${product.slug}`} className={`group block ${focus}`}>
      <div className="relative overflow-hidden rounded-[3px] border border-line bg-white">
        <ProductImage product={product} priority={priority} />
        {/* second shot fades in on hover, like every shop does */}
        <ProductImage
          product={product}
          view="info"
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out-soft group-hover:opacity-100"
        />
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-snug text-graphite transition-colors duration-300 group-hover:text-solder-ink">
        {product.title}
      </p>
      <div className="mt-2">
        <PriceLine product={product} />
      </div>
      <p className="mt-1.5 text-xs text-steel">
        {shop.rating} ★ · {shop.reviewsLabel(product.reviews.length)} · {shipLabel(product).replace(/ ab .*/, "")}
      </p>
    </Link>
  );
}
