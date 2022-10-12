<template>
	<div id="side-navigation">

		<div class="logo">
			<nuxt-link to="/">
				<img src="/ventuno-alpha.png" alt="Bitcoin Only">
			</nuxt-link>
		</div>

		<ul class="main-links">
			<li v-for="(navLink, index) in navigationLinks" :key="index">
				<nuxt-link :to="navLink.to" exact>{{ navLink.title }}</nuxt-link>
			</li>
			<br>
			<li v-for="(navLink, index) in contactLinks" :key="index">
				<nuxt-link :to="navLink.to" exact>{{ navLink.title }}</nuxt-link>
			</li>
		</ul>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/side-nav.scss';
</style>

<script>
export default {

	name: 'SideNavigation',

	data () {
		return {
			navigationLinks: [
				{
					title: 'Home',
					icon: '',
					to: '/'
				},
				{
					title: 'Cos\'è Bitcoin',
					icon: '',
					to: '/what-is-bitcoin'
				},
				{
					title: 'Risorse Didattiche',
					icon: '',
					to: '/learning-resources'
				},
				{
					title: 'Conferenze',
					icon: '',
					to: '/conferences'
				},
				{
					title: 'Podcasts',
					icon: '',
					to: '/podcasts'
				},
				{
					title: 'Meetups',
					icon: '',
					to: '/meetups'
				},
				{
					title: 'Video',
					icon: '',
					to: '/videos'
				},
				{
					title: 'Libri',
					icon: '',
					to: '/books'
				},
				{
					title: 'Wallets',
					icon: '',
					to: '/wallets'
				},
				{
					title: 'Privacy',
					icon: '',
					to: '/privacy'
				},
				{
					title: 'Hardware',
					icon: '',
					to: '/hardware'
				},
				{
					title: 'Ottieni Bitcoin',
					icon: '',
					to: '/get-bitcoin'
				},
				{
					title: 'Spendi Bitcoin',
					icon: '',
					to: '/spend-bitcoin'
				},
				{
					title: 'Fatti pagare in Bitcoin',
					icon: '',
					to: '/store-tools'
				},
				{
					title: 'Explorers & Dashboards',
					icon: '',
					to: '/explorers-dashboards'
				},
				{
					title: 'Sviluppo',
					icon: '',
					to: '/dev-tools'
				},
			],

			contactLinks: [
				{
					title: 'Requisiti Listing',
					icon: '',
					to: '/listing-requirements'
				},
				{
					title: 'Community',
					icon: '',
					to: '/community'
				},
				{
					title: 'Contatti',
					icon: '',
					to: '/contact'
				},
				{
					title: 'About',
					icon: '',
					to: '/about'
				}
			]
		}
	}
}
</script>
