import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a fully static site to avoid server functions on Netlify
  output: "export",
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;
