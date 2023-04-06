/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      "mongodb+srv://kareem4shimas:DNVWq7GONpG5HcBx@cluster0.bk5xhvh.mongodb.net/products-app?retryWrites=true&w=majority",
    APP_DEV: "http://localhost:3000",
    APP_PROD: "",
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
