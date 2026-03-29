import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // next.config.js
  //allowedDevOrigins: ['172.29.16.1'],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "strapi",
      },
    ],
  },
};

export default nextConfig;
