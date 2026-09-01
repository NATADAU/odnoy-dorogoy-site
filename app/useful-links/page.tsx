import type { Metadata } from "next";
import { absoluteUrl, SOCIAL_IMAGE } from "../site-config";
import { UsefulLinksContent } from "./useful-links-content";

export const metadata: Metadata = {
  title: "Полезные ссылки",
  description: "Государственные сервисы, правозащитные ресурсы и профессиональные организации для людей с инвалидностью и их семей.",
  alternates: { canonical: absoluteUrl("useful-links/") },
  openGraph: {
    title: "Полезные ссылки для людей с инвалидностью и их семей",
    description: "Государственные сервисы, правозащитные ресурсы и профессиональные организации.",
    url: absoluteUrl("useful-links/"),
    images: [SOCIAL_IMAGE],
  },
};

export default function UsefulLinksPage() {
  return <UsefulLinksContent />;
}
