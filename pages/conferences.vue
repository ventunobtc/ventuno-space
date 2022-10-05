<template>
	<div id="conferences-page">

		<h1 class="page-title">Conferenze</h1>

		<p>Queste sono conferenze o eventi dal vivo a tema solo Bitcoin.</p>

		<h3>Programmati</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Conferenza</div>
					<div class="tbl-title">Luogo</div>
					<div class="tbl-title">Data</div>
				</div>
				<div v-for="(lineItem, index) in upcomingConferences" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.location"></div>
					<div v-html="lineItem.dates"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
#conferences-page .tbl-row > div a {
	color: #fff;

	&:hover {
		color: #f2ad4f;
	}
}
</style>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
</style>

<script>
export default {

	name: 'ConferencesPage',

	head: {
		title: 'Conferences - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only conferences.' }
		]
	},

	// TODO: Add script to move past confernce based on .now() in a new section

	data() {
		return {

			upcomingConferences: [
				{
					title: 'The Bitcoin Mining Conference',
					link: 'https://braiins.com/bitcoin-mining-conference-2022',
					location: 'Prague / CZ',
					dates: '14-16 Giugno 2022'
				},
				{
					title: 'btc++',
					link: 'https://www.btcplusplus.dev/',
					location: 'Austin, TX / USA',
					dates: '7-10 Giugno 2022'
				},
				{
					title: 'Bit Block Boom!',
					link: 'https://bitblockboom.com/',
					location: 'Austin, TX / USA',
					dates: '25-28 Agosto 2022'
				},
				{
					title: 'BTC22',
					link: 'https://bconf.de/',
					location: 'Innsbruck, Austria',
					dates: '15-17 Settembre 2022'
				},
				{
					title: 'Baltic Honey Badger',
					link: 'https://baltichoneybadger.com/',
					location: 'Riga, Lettonia',
					dates: '3-4 Settembre 2022'
				},
				{
					title: 'Bitcoin Amsterdam',
					link: 'https://b.tc/conference/amsterdam',
					location: 'Amsterdam, Paesi Bassi',
					dates: '12-14 Ottobre 2022'
				},
				{
					title: 'Plan B Forum',
					link: 'https://planb.lugano.ch/planb-forum/',
					location: 'Lugano, Svizzera',
					dates: '28-29 Ottobre 2022'
				}
			],
			
		}
	}

}
</script>
