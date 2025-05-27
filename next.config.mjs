/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // necesario si usas el componente <Image />
  },
};

export default nextConfig;
