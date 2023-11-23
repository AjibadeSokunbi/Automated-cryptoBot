/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
      },
      {
        protocol: 'https',
        hostname: 'static.alchemyapi.io',
      },
      {
        protocol: 'https',
        hostname: 'alchemyapi.io',
      },
      {
        protocol: 'https',
        hostname: 'static.alchemyapi.io',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'assets-cdn.trustwallet.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
    ],
  },
};

module.exports = nextConfig;
