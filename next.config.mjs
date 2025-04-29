/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: false,
  },
  // output: 'export',
  poweredByHeader: false,
  trailingSlash: true,
}

export default nextConfig
