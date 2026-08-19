import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/odnoy-dorogoy-site" : "",
  assetPrefix: isProduction ? "/odnoy-dorogoy-site/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
