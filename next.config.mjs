/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // IMPORTANT for GitHub Pages when repo is not username.github.io
  basePath: '/OussamaOsseili',
  assetPrefix: '/OussamaOsseili/',
  trailingSlash: true,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
