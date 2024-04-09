/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL:process.env.URL,
        CURRENT:process.env.CURRENT,
        CLOUD_NAME:process.env.CLOUD_NAME
    },
    images: {
        domains: ["res.cloudinary.com" , 'images.unsplash.com'],
    },
};

export default nextConfig;
