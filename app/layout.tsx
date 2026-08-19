import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Одной дорогой — социальный клуб в Коломне",
  description: "Сопровождение, развитие, реализация и равные возможности для людей с инвалидностью и их близких.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
