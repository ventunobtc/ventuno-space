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
					<div class="tbl-title">Sponsored</div>
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
.explainer {
	margin-bottom: 30px;
	margin-top: -15px;
}
.footnotes {
	margin-top: 40px;
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
					peer: 'Bitko Yinowsky',
					peerLink: 'https://twitter.com/BitkoYinowsky',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Main Logo & Page Logos',
					weReceivedLink: 'http://bitcoin-only.com/'
				},
				{
					peer: 'Greg Walker',
					peerLink: 'https://twitter.com/in3rsha',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Introduction to Bitcoin',
					weReceivedLink: 'https://github.com/bitcoin-only/bitcoin-only/blob/master/pages/what-is-bitcoin.vue'
				},
				{
					peer: 'Marc Chouinard',
					peerLink: 'https://twitter.com/TheRealestMarc',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Complete website redesign',
					weReceivedLink: 'https://bitcoin-only.com'
				},
				{
					peer: 'Max Hillebrand',
					peerLink: 'https://twitter.com/hillebrandmax',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Video Series',
					weReceivedLink: 'https://www.youtube.com/playlist?list=PLPj3KCksGbSYX2cNoOaV-w-9QuZ62LDk_'
				},
				{
					peer: 'Phneep',
					peerLink: 'https://twitter.com/phneep',
					weGave: 'BTC',
					weGaveLink: '',
					weReceived: 'Commissioned Art',
					weReceivedLink: '/promote'
				},
				{
					peer: 'Ti Kawamoto',
					peerLink: 'https://twitter.com/TiKawamoto',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Old Logo',
					weReceivedLink: ''
				},
				{
					peer: 'Wiz',
					peerLink: 'https://twitter.com/wiz',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Technical Assistance',
					weReceivedLink: ''
				}
			],

			growth: [
				{
					name: 'Bitcoin Echo Chamber',
					link: 'https://bitcoinechochamber.com/',
					sponsor: 'Yes'
				},
				{
					name: 'Bottom-shelf Bitcoin',
					link: 'https://bottomshelfbitcoin.com/',
					sponsor: 'Yes'
				},
				{
					name: 'Lightning Hosted',
					link: 'https://twitter.com/LightningHosted',
					sponsor: 'Yes'
				},
				{
					name: 'Start Node',
					link: 'https://twitter.com/StartNodeOrg',
					sponsor: 'Yes'
				},
				{
					name: 'Block Digest',
					link: 'https://twitter.com/blockdigest',
					sponsor: 'No'
				},
				{
					name: 'CryptoWords',
					link: 'https://mailchi.mp/2731ce628dba/cryptowordsnewsletter',
					sponsor: 'No'
				},
				{
					name: 'Stephan Livera Podcast',
					link: 'https://stephanlivera.com/episode/74',
					sponsor: 'No'
				},
				{
					name: 'TFTC',
					link: 'https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-Week-of-2019-05-06-e3vvq5',
					sponsor: 'No'
				},
				{
					name: 'Why Hold Bitcoin',
					link: 'https://whyholdbitcoin.com/resources/',
					sponsor: 'No'
				}
			]

		}
	}

}
</script>
