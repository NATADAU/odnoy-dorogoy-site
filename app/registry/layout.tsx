import type { Metadata } from "next";
import { absoluteUrl, SOCIAL_IMAGE } from "../site-config";

export const metadata: Metadata = {
  title: "Соцреестр, документы и отчётность",
  description: "Документы, сведения о социальных услугах, публичные отчёты и полезные ссылки АНО СК «Одной дорогой».",
  alternates: { canonical: absoluteUrl("registry/") },
  openGraph: {
    title: "Документы и отчётность АНО СК «Одной дорогой»",
    description: "Соцреестр, обязательные сведения и публичная отчётность организации.",
    url: absoluteUrl("registry/"),
    images: [SOCIAL_IMAGE],
  },
};

export default function RegistryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
