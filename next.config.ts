import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isPortablePreview = process.env.PORTABLE_BUILD === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/odnoy-dorogoy-site" : "",
  assetPrefix: isGitHubPages ? "/odnoy-dorogoy-site/" : isPortablePreview ? "." : "",
  images: { unoptimized: true },
};

export default nextConfig;
