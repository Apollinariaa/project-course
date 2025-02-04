module.exports = {
	images: { domains: ['courses-top.ru', 'old-images.hb.ru-msk.vkcs.cloud', 'old-images.hb.ru-msk', 'old-images.hb.ru-msk.vkcs', 'old-images.hb.ru']},
	reactStrictMode: true,
	webpack: (config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack']
		})
		return config;
	}
}
