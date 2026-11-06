import type { Metadata } from "next";
import { Checkout } from "@/components/shop/Checkout";

export const metadata: Metadata = { title: "Kasse · Zolilöt Shop" };

export default function CheckoutPage() {
  return (
    <main className="pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-6xl px-7 md:px-8">
        <Checkout />
      </div>
    </main>
  );
}
