import type { NextConfig } from "next";

const usesRepositoryPath =
  process.env.GITHUB_ACTIONS === "true" && process.env.CUSTOM_DOMAIN !== "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: usesRepositoryPath ? "/odnoy-dorogoy-site" : "",
  assetPrefix: usesRepositoryPath ? "/odnoy-dorogoy-site" : "",
  images: { unoptimized: true },
};

export default nextConfig;
