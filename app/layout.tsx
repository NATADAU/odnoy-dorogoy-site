import type { Metadata } from "next";
import { Caveat, Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-body",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-display",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Одной дорогой — социальный клуб в Коломне",
  description: "Сопровождение, развитие, реализация и равные возможности для людей с инвалидностью и их близких.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${caveat.variable}`}><body>{children}</body></html>;
}
