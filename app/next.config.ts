import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // self-contained server bundle for the docker image
  output: "standalone",
  outputFileTracingRoot: path.resolve(import.meta.dirname),
  // only a few small static PNGs; no sharp needed in the image
  images: { unoptimized: true },
  // renamed posts keep their old links working
  async redirects() {
    return [
      { source: "/news/frau-deubelbeiss-externe-beratung", destination: "/news/frau-deubelbeiss-beratung", permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
