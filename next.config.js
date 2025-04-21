/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: '.next',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig; 