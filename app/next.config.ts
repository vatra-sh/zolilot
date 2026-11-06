import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // self-contained server bundle for the docker image
  output: "standalone",
  outputFileTracingRoot: path.resolve(import.meta.dirname),
  // only a few small static PNGs; no sharp needed in the image
  images: { unoptimized: true },
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
