import { SalesToast } from "@/components/shop/SalesToast";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SalesToast />
    </>
  );
}
