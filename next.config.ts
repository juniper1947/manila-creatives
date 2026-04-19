import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/manila-creatives',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
