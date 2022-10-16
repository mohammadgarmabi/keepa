/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		outputStandalone: true,
	},
	trailingSlash: true,
	poweredByHeader: false,
	images: {
		domains: ['api.kipaa.ir', 'testapi.kipaa.ir'],
		imageSizes: [640, 750, 828, 1080, 1200, 1920],
		unoptimized: true,
		minimumCacheTTL: 60,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
