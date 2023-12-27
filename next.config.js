/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "developers.elementor.com",
      "progress-in-motion.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
