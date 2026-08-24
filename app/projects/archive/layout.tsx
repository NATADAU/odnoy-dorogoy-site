import type { Metadata } from "next";
import { absoluteUrl } from "../../site-config";

export const metadata: Metadata = {
  title: { absolute: "Архив проектов | «Одной дорогой»" },
  description: "Завершённые проекты и история социального клуба «Одной дорогой» в Коломне.",
  alternates: { canonical: absoluteUrl("projects/archive/") },
  openGraph: {
    title: "Архив проектов социального клуба «Одной дорогой»",
    description: "Завершённые программы остаются частью истории и опыта клуба.",
    url: absoluteUrl("projects/archive/"),
  },
};

export default function ArchiveLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
