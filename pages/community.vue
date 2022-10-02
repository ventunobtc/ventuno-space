<template>
	<div id="peers-page">

		<h1 class="page-title">Community</h1>

		<h3>Contenuto del sito</h3>

		<p class="explainer">Siamo orgogliosi di aver supportato e lavorato con i seguenti colleghi sui contenuti del sito:</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Dato</div>
					<div class="tbl-title">Ricevuto</div>
				</div>
				<div v-for="(lineItem, index) in siteContent" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.peerLink" target="_blank">{{ lineItem.peer }}</a>
					</div>
					<div>
						<a v-if="lineItem.weGaveLink" :href="lineItem.weGaveLink" target="_blank">{{ lineItem.weGave }}</a>
						<div v-else>{{ lineItem.weGave }}</div>
					</div>
					<div>
						<a v-if="lineItem.weReceivedLink" :href="lineItem.weReceivedLink" target="_blank">{{ lineItem.weReceived }}</a>
						<div v-else>{{ lineItem.weReceived }}</div>
					</div>
				</div>
			</div>
		</div>

		<h3>Promuovi</h3>

		<p class="explainer">Grazie a tutti i siti/podcast che hanno contribuito alla crescita del sito. Siamo orgogliosi di essere stati menzionati. Facci sapere se menzioni Ventuno sul tuo sito o podcast!</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Sponsor</div>
				</div>
				<div v-for="(lineItem, index) in growth" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.name }}</a>
					</div>
					<div v-html="lineItem.sponsor"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
.tbl-wrapper {
	max-width: 1000px;
}
.explainer {
	margin-bottom: 30px;
	margin-top: -15px;
}
</style>

<script>
export default {

	name: 'PeersPage',

	head: {
		title: 'Peers - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of people we have worked with in the past.' }
		]
	},

	data() {
		return {

			siteContent: [
				{
					peer: 'Bitcoin-Only',
					peerLink: 'https://twitter.com/bitcoinonly_',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Sito web',
					weReceivedLink: 'http://bitcoin-only.com/'
				},
			],

			growth: [
				{
					name: 'Esempio',
					link: 'http://bitcoin-only.com/',
					sponsor: 'Yes/No'
				},
			]
		}
	}
}
</script>
