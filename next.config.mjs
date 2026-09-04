/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Every image on this site is a local file served from /public.
    formats: ["image/webp"],
  },
};

export default nextConfig;
