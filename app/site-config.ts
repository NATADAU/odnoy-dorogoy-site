export const SITE_URL = "https://natadau.github.io/odnoy-dorogoy-site/";

export function absoluteUrl(path = "") {
  return new URL(path, SITE_URL).toString();
}
