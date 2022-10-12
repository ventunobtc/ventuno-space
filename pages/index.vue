<template>
	<div id="home-page">
		<h1 class="welcome">Benvenuti su Ventuno<br> Una collezione delle migliori risorse Bitcoin, <br> in lingua italiana. 🇮🇹</h1>
		<div class="subtitle">Impara di più approfondendo ogni categoria.</div>

		<div class="categories">

			<div v-for="(navLink, index) in navigationLinks" :key="index" class="category">
				<nuxt-link class="link-box" :to="navLink.to" exact>
					<img :src="`/icons/${navLink.icon}.svg`" :alt="navLink.title">
					<h3 class="title">{{ navLink.title }}</h3>
				</nuxt-link>
			</div>

		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/home.scss';
</style>

<script>
export default {

	name: 'HomePage',

	head: {
		title: 'Ventuno',
		meta: [
			{ hid: 'description', name: 'description', content: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.' }
		]
	},

	data () {
		return {
			navigationLinks: [
				{
					title: 'Cos\'è Bitcoin?',
					icon: 'what-is-bitcoin',
					to: '/what-is-bitcoin'
				},
				{
					title: 'Risorse Didattiche',
					icon: 'learning-resources',
					to: '/learning-resources'
				},
				{
					title: 'Conferenze',
					icon: 'conferences',
					to: '/conferences'
				},
				{
					title: 'Podcasts',
					icon: 'podcasts',
					to: '/podcasts'
				},
				{
					title: 'Meetups',
					icon: 'meetups',
					to: '/meetups'
				},
				{
					title: 'Video',
					icon: 'videos',
					to: '/videos'
				},
				{
					title: 'Libri',
					icon: 'books',
					to: '/books'
				},
				{
					title: 'Wallets',
					icon: 'wallets',
					to: '/wallets'
				},
				{
					title: 'Privacy',
					icon: 'privacy',
					to: '/privacy'
				},
				{
					title: 'Hardware',
					icon: 'hardware',
					to: '/hardware'
				},
				{
					title: 'Ottieni Bitcoin',
					icon: 'get-bitcoin',
					to: '/get-bitcoin'
				},
				{
					title: 'Spendi Bitcoin',
					icon: 'spend-bitcoin',
					to: '/spend-bitcoin'
				},
				{
					title: 'Fatti pagare in Bitcoin',
					icon: 'store-tools',
					to: '/store-tools'
				},
				{
					title: 'Explorers & Dashboards',
					icon: 'explorers-dashboards',
					to: '/explorers-dashboards'
				},
				{
					title: 'Sviluppo',
					icon: 'dev-tools',
					to: '/dev-tools'
				},
				{
					title: 'Listing Requirements',
					icon: 'listing-requirements',
					to: '/listing-requirements'
				},
				{
					title: 'Community',
					icon: 'peers',
					to: '/community'
				},
				{
					title: 'Contatti',
					icon: 'contact',
					to: '/contact'
				},
				{
					title: 'About',
					icon: 'about',
					to: '/about'
				}
			]
		}
	}
}
</script>
