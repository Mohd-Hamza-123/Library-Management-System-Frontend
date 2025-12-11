import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  compiler: {
    //  removeConsole: process.env.NODE_ENV === "production",
    removeConsole: { exclude: ["error", "warn"] }
  }
};

export default nextConfig;
