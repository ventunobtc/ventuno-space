export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Ventuno Space',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Risorse solo Bitcoin, tra cui meetup, libri, portafogli, podcast, conferenze e molto altro.' },
			{ hid: 'og:site_name', name: 'og:site_name', content: 'Ventuno Space' },
			{ hid: 'og:description', name: 'og:description', content: 'Risorse solo Bitcoin, tra cui meetup, libri, portafogli, podcast, conferenze e molto altro.' },
			{ hid: 'twitter:description', name: 'twitter:description', content: 'Risorse solo Bitcoin, tra cui meetup, libri, portafogli, podcast, conferenze e molto altro.' },
			{ hid: 'og:title', name: 'og:title', content: 'Ventuno Space' },
			{ hid: 'og:url', name: 'og:url', content: 'https://ventuno.space' },
			{ hid: 'og:image', name: 'og:image', content: '/og-image.png' },
			{ hid: 'og:image:width', name: 'og:image:width', content: '800' },
			{ hid: 'og:image:height', name: 'og:image:height', content: '418' },
			{ hid: 'twitter:card', name: 'twitter:card', content: '/og-image.png' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'~/assets/css/v-tooltip.css'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		'~/plugins/v-tooltip.js'
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Router middleware
	router: {
		middleware: 'sidenav'
	},

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/buefy
		'nuxt-buefy',
		['nuxt-matomo', { matomoUrl: '//stats.wiz.biz/', siteId: 1 }]
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	}
}
