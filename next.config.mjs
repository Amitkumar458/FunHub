/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL:process.env.URL,
        CURRENT:process.env.CURRENT
    }
};

export default nextConfig;
