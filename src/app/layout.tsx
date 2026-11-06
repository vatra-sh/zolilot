import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
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
    <html lang="de-CH" className={`${archivo.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
