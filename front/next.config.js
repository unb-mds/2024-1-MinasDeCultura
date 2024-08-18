/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.secult.mg.gov.br',
      },
    ],
  },
}
