/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  outputFileTracingRoot: import.meta.dirname,
  // Next's bundled lint flags the required `metadata` export in layout.jsx
  // (react-refresh/only-export-components), so don't let lint block builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
