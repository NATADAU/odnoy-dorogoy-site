import type { Metadata } from "next";
import { absoluteUrl, SOCIAL_IMAGE } from "../site-config";

export const metadata: Metadata = {
  title: "Контакты и адреса",
  description: "Телефон, электронная почта, время работы и адреса площадок социального клуба «Одной дорогой» в городском округе Коломна.",
  alternates: { canonical: absoluteUrl("contacts/") },
  openGraph: {
    title: "Контакты социального клуба «Одной дорогой»",
    description: "Как связаться с клубом и где проходят занятия в Коломне.",
    url: absoluteUrl("contacts/"),
    images: [SOCIAL_IMAGE],
  },
};

export default function ContactsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
