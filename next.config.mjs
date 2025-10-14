/** @type {import('next').NextConfig} */
const BASE_PATH = '/OsseiliPortfolio'; // ✅ repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // Correct basePath for GitHub Pages
  basePath: BASE_PATH,

  // ❌ DO NOT use assetPrefix on Pages; it breaks CSS/JS
  // assetPrefix: `${BASE_PATH}/`,

  trailingSlash: true,

  // for withBasePath() helper and any raw <a>/<img>
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },

  // keep your relaxed checks
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
