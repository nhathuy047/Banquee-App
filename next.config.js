/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    domains: ['plus.unsplash.com'], // Add any other domains as needed
  },
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://c2t-api.onrender.com/interior/:path*',
        },
       
      ]
    },
};
module.exports = nextConfig
