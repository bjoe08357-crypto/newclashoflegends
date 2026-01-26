import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
