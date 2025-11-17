import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ui-components',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
