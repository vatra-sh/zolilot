import { NextResponse, type NextRequest } from "next/server";
import { products } from "@/catalogue";
import { posts } from "@/news";

// With cacheComponents the page shell streams before the slug is checked, so notFound()
// in the page can only render the 404 UI with HTTP 200. Reject unknown slugs here,
// before rendering, so they get a real 404 status.
const known = {
  news: new Set(posts.map((p) => p.slug)),
  shop: new Set([...products.map((p) => p.slug), "kasse"]),
};

export function proxy(req: NextRequest) {
  const [, section, slug] = req.nextUrl.pathname.split("/");
  const set = known[section as keyof typeof known];
  if (set && slug && !set.has(decodeURIComponent(slug))) {
    return NextResponse.rewrite(new URL("/__not-found", req.url), { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/news/:slug", "/shop/:slug"],
};
