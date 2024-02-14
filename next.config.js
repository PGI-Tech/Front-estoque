/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_ROUTE_API: process.env.NEXT_PUBLIC_ROUTE_API,
    },
};

module.exports = nextConfig;