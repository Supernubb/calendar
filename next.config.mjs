/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "@/styles/variables.module.scss";`,
  },
};

export default nextConfig;
