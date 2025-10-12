/** @type {import('next').NextConfig} */

// IMPORTANT for GitHub Pages repo: oussamaosseili.github.io/OussamaOsseili
const BASE_PATH = '/OussamaOsseili';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // GitHub Pages subpath:
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  trailingSlash: true,

  // Expose basePath in the browser for raw <img>/<a> or content-driven paths:
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },

  // Keep your previous relax settings
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
