/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  eslint: {
    // Enable or disable ESLint during builds in Next.js
    ignoreDuringBuilds: true, // Ignores ESLint errors in production builds
  },
};

module.exports = nextConfig;