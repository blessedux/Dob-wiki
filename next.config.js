/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: '.next',
  reactStrictMode: true,
  images: {
    domains: [],
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checks during production builds
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 