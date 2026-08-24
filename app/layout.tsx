import type { Metadata } from "next";
import { Caveat, Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { SiteFrame } from "./site-shell";
import { absoluteUrl, SITE_URL } from "./site-config";

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

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Клуб для людей с инвалидностью в Коломне — «Одной дорогой»",
    template: "%s | «Одной дорогой»",
  },
  description: "Проекты для детей и взрослых с инвалидностью в Коломне: повседневные навыки, сопровождаемое проживание, спорт, туризм, творчество и общение.",
  applicationName: "Одной дорогой",
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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "АНО СК «Одной дорогой»",
  alternateName: "Социальный клуб «Одной дорогой»",
  url: SITE_URL,
  logo: absoluteUrl("logo-oneway.png"),
  foundingDate: "2019",
  email: "onewaysc@yandex.ru",
  telephone: "+7-977-445-73-14",
  address: {
    "@type": "PostalAddress",
    postalCode: "140404",
    addressRegion: "Московская область",
    addressLocality: "городской округ Коломна",
    streetAddress: "ул. Астахова, д. 2, помещение 19",
    addressCountry: "RU",
  },
  areaServed: "Городской округ Коломна",
  sameAs: ["https://vk.com/club_oneway"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-977-445-73-14",
    email: "onewaysc@yandex.ru",
    contactType: "общие вопросы",
    availableLanguage: "Russian",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${caveat.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
