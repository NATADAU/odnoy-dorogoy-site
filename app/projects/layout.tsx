import type { Metadata } from "next";
import { absoluteUrl, SOCIAL_IMAGE } from "../site-config";

export const metadata: Metadata = {
  title: "Проекты для детей и взрослых с инвалидностью",
  description: "Действующие проекты социального клуба «Одной дорогой» в Коломне: сопровождаемое проживание, спорт, туризм, творчество и общение.",
  alternates: { canonical: absoluteUrl("projects/") },
  openGraph: {
    title: "Проекты социального клуба «Одной дорогой»",
    description: "Занятия и проекты для детей и взрослых с инвалидностью в Коломне.",
    url: absoluteUrl("projects/"),
    images: [SOCIAL_IMAGE],
  },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
