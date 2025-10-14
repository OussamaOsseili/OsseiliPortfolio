/** @type {import('next').NextConfig} */
const BASE_PATH = '/OsseiliPortfolio'; // ✅ repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  basePath: BASE_PATH,          // ✅ correct subpath
  trailingSlash: true,          // ok for Pages

  // expose for helper usage (raw <a>/<img>)
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },

  // keep relaxed checks in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
