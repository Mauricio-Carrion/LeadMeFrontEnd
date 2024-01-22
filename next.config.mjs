/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/home/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
