/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? (process.env.HOMEPAGE?.includes('github.io') ? '/resume' : '')
    : '',
}

module.exports = nextConfig

