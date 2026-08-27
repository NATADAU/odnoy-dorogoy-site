import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl(), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("projects/"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("projects/archive/"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("help/"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("contacts/"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("registry/"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("useful-links/"), changeFrequency: "yearly", priority: 0.6 },
  ];
}
