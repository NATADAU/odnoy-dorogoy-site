import type { Metadata } from "next";
import { UsefulLinksContent } from "./useful-links-content";

export const metadata: Metadata = {
  title: "Полезные ссылки",
  description: "Государственные сервисы, правозащитные ресурсы и профессиональные организации для людей с инвалидностью и их семей.",
};

export default function UsefulLinksPage() {
  return <UsefulLinksContent />;
}
