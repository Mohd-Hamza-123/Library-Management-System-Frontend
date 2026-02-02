import type { NextConfig } from "next";

const env = process.env.NODE_ENV;
const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**'
      }
    ]
  },
  compiler: {
    //  removeConsole: process.env.NODE_ENV === "production",
    removeConsole: env === "production" ? { exclude: ["error", "warn"] } : false
  },
  
};

export default nextConfig;
