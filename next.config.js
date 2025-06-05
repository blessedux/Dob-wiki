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
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig; 