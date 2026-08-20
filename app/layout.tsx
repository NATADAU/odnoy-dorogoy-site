import type { Metadata } from "next";
import { Inter, Marck_Script, Unbounded } from "next/font/google";
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

const marckScript = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Одной дорогой — социальный клуб в Коломне",
  description: "Сопровождение, развитие, реализация и равные возможности для людей с инвалидностью и их близких.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${marckScript.variable}`}><body>{children}</body></html>;
}
