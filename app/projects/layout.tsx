import type { Metadata } from "next";
import { absoluteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Проекты для детей и взрослых с инвалидностью",
  description: "Действующие проекты социального клуба «Одной дорогой» в Коломне: сопровождаемое проживание, спорт, туризм, творчество и общение.",
  alternates: { canonical: absoluteUrl("projects/") },
  openGraph: {
    title: "Проекты социального клуба «Одной дорогой»",
    description: "Занятия и проекты для детей и взрослых с инвалидностью в Коломне.",
    url: absoluteUrl("projects/"),
  },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
