import type { Metadata } from "next";
import { absoluteUrl, SOCIAL_IMAGE } from "../site-config";

export const metadata: Metadata = {
  title: "Как помочь клубу",
  description: "Стать волонтёром, предложить партнёрство или другой полезный формат поддержки социальному клубу «Одной дорогой».",
  alternates: { canonical: absoluteUrl("help/") },
  openGraph: {
    title: "Как помочь социальному клубу «Одной дорогой»",
    description: "Волонтёрство, партнёрство и другие способы поддержать работу клуба.",
    url: absoluteUrl("help/"),
    images: [SOCIAL_IMAGE],
  },
};

export default function HelpLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
