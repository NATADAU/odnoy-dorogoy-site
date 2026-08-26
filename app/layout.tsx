import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { SiteFrame } from "./site-shell";
import { absoluteUrl, SITE_URL } from "./site-config";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Клуб для людей с инвалидностью в Коломне — «Одной дорогой»",
    template: "%s | «Одной дорогой»",
  },
  description: "Проекты для детей и взрослых с инвалидностью в Коломне: повседневные навыки, сопровождаемое проживание, спорт, туризм, творчество и общение.",
  applicationName: "Одной дорогой",
  category: "Некоммерческая организация",
  authors: [{ name: "АНО СК «Одной дорогой»", url: SITE_URL }],
  creator: "АНО СК «Одной дорогой»",
  publisher: "АНО СК «Одной дорогой»",
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Социальный клуб «Одной дорогой»",
    title: "Социальный клуб для людей с инвалидностью в Коломне",
    description: "Помогаем детям и взрослым осваивать повседневные навыки, общаться, заниматься спортом и творчеством.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: "Социальный клуб для людей с инвалидностью в Коломне",
    description: "Проекты, занятия, контакты и способы поддержать социальный клуб «Одной дорогой».",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": absoluteUrl("#organization"),
      name: "АНО СК «Одной дорогой»",
      legalName: "Автономная некоммерческая организация Социальный клуб «Одной дорогой»",
      alternateName: "Социальный клуб «Одной дорогой»",
      description: "Социальный клуб в Коломне для детей и взрослых с инвалидностью: повседневные навыки, сопровождаемое проживание, спорт, туризм, творчество и общение.",
      url: SITE_URL,
      logo: absoluteUrl("logo-oneway.png"),
      foundingDate: "2019",
      email: "onewaysc@yandex.ru",
      telephone: "+7-977-445-73-14",
      address: {
        "@type": "PostalAddress",
        postalCode: "140404",
        addressRegion: "Московская область",
        addressLocality: "Коломна",
        streetAddress: "ул. Астахова, д. 2, помещение 119",
        addressCountry: "RU",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Городской округ Коломна",
      },
      sameAs: [
        "https://vk.ru/onewaykolomna",
        "https://t.me/onewaykolomna",
        "https://onewaysc.ru/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+7-977-445-73-14",
        email: "onewaysc@yandex.ru",
        contactType: "общие вопросы и участие в проектах",
        areaServed: "RU-MOS",
        availableLanguage: "ru",
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("#website"),
      url: SITE_URL,
      name: "Социальный клуб «Одной дорогой»",
      description: "Официальный сайт социального клуба «Одной дорогой» в Коломне.",
      inLanguage: "ru-RU",
      publisher: { "@id": absoluteUrl("#organization") },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
