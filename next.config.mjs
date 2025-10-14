/** @type {import('next').NextConfig} */
const BASE_PATH = '/OussamaOsseili';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // Keep only basePath for GitHub Pages
  basePath: BASE_PATH,
  // ❌ assetPrefix removed — it was causing CSS/JS to 404
  trailingSlash: true,

  // For raw <a>/<img> usage
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
