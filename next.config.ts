import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  eslint: {
    // Enable or disable ESLint during builds in Next.js
    ignoreDuringBuilds: true,  // Ignores ESLint errors in production builds
  },
};

export default nextConfig;