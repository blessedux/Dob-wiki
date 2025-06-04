/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: '.next',
  reactStrictMode: true,
  images: {
    domains: [],
  },
  eslint: {
    // Enable ESLint during production builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Enable TypeScript checks during production builds
    ignoreBuildErrors: false,
  },
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig; 