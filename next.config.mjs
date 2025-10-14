/** @type {import('next').NextConfig} */
const BASE_PATH = '/OussamaOsseili';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // Required for GitHub Pages under a repo subpath
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  trailingSlash: true,

  // Expose basePath to the browser (for raw <a>/<img> or content-driven paths)
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },

  // Keep relaxed checks for CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
