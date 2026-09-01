export const SITE_URL = "https://natadau.github.io/odnoy-dorogoy-site/";

export function absoluteUrl(path = "") {
  return new URL(path, SITE_URL).toString();
}

export const SOCIAL_IMAGE = {
  url: absoluteUrl("og-image.png"),
  width: 1200,
  height: 630,
  alt: "Одной дорогой — социальный клуб в Коломне",
};
