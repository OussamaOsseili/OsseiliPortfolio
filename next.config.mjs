/** @type {import('next').NextConfig} */
const BASE_PATH = '/OussamaOsseili';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  basePath: BASE_PATH,
  trailingSlash: true,

  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
