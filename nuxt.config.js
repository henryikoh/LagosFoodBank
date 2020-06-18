export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Lagos Food Bank\'s  COVID-19 Emergency Food Intervention Plan (CEFIP)',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'You can join us in supporting vulnerable women, children and families in Nigeria suffering from the economic impact and consequences of COVID-19.',
			},
			{
				hid: 'og:title',
				name: 'og:title',
				content: 'Lagos Food Bank\'s  COVID-19 Emergency Food Intervention Plan (CEFIP',
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content:
					'You can join us in supporting vulnerable women, children and families in Nigeria suffering from the economic impact and consequences of COVID-19.',
			},
			{
				hid: 'og:image',
				name: 'og:image',
				content: 'lagosfoodbankapp.web.app/meta.png',
			},

			{
				hid: 'og:url',
				name: 'og:url',
				content: 'https://lagosfoodbankapp.web.app',
			},
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'default',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favico.png' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap',
			},
		],
		// script: [{ hid: 'paystack', src: 'https://js.paystack.co/v1/inline.js' }],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		['vue-scrollto/nuxt', { offset: -100 }],
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
	// vue: {
	// 	config: {
	// 		productionTip: false,
	// 		devtools: true,
	// 	},
	// },
	// server: {
	// 	port: 8000, // default: 3000
	// 	host: '0.0.0.0', // default: localhost
	// },
}
