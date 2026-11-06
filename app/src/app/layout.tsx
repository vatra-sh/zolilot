import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { StatusBar } from "@/components/StatusBar";
import { CartDrawer } from "@/components/shop/CartDrawer";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--zolilt-0xa.vatra.sh"),
  title: "Zolilöt AG · Wir machens möglich.",
  description:
    "Löttechnik, Kabelkonfektion und Reparatur aus Aarau. Schweizer Qualität, von Hand gefertigt. Von Joël, um genau zu sein.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "Zolilöt AG · Wir machens möglich.",
    description: "Löttechnik auf Schweizer Niveau. Seit 2026.",
    locale: "de_CH",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#F6F5F2" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-CH" data-scroll-behavior="smooth" className={`${archivo.variable} ${inter.variable} antialiased`}>
      <body>
        <MotionConfig reducedMotion="user">
          <StatusBar />
          <Nav />
          {children}
          <Footer />
          <CartDrawer />
        </MotionConfig>
      </body>
    </html>
  );
}
