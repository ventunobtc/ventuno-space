<template>
	<div id="privacy-page">

		<h1 class="page-title">Privacy</h1>

		<div class="getting-started-section">

			<h3>Come iniziare</h3>

			<p>Non riutilizzare gli indirizzi, impara a fare CoinJoin e usa il tuo nodo. </p>
			<p>Leggi come <a href="https://bitcoinprivacy.guide/" target="_blank">usare Bitcoin privatamente </a> e la <a href="https://en.bitcoin.it/Privacy" target="_blank">pagina sulla privacy </a>di Bitcoin Wiki</p>

		</div>

		<h3>CoinJoin Tools
			<div class="tbl-index">Indice
				<a v-on:click="tab1()">[generali]</a>
				<a v-on:click="tab2()">[altro]</a>
			</div>
		</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<template v-if="condition_coinjoin === 'A'">
						<div class="tbl-title">Riproducibile</div>
						<div class="tbl-title">Semplicità</div>
						<div class="tbl-title">Tor</div>
						<div class="tbl-title">Decentralizzazione</div>	
						<div class="tbl-title">Privacy</div>	
					</template>
					<template v-if="condition_coinjoin === 'B'">
						<div class="tbl-title">Coordinatore</div>
						<div class="tbl-title">Liquidità</div>
						<div class="tbl-title">Cifra minima</div>
						<div class="tbl-title">Fee</div>
						<div class="tbl-title">
							<div class="left">Risorse</div>
						</div>
					</template>
				</div>
				<div v-for="(lineItem, index) in coinjoinTools" :key="index" class="tbl-row">
					<div class="padding">
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					
					<template v-if="condition_coinjoin === 'A'">
						<!-- Riproducibile -->
						<div v-if="lineItem.riproducibile"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Semplicità -->
						<div v-if="lineItem.semplicita"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Tor -->
						<div v-if="lineItem.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Decentralizzazione -->
						<div v-html="lineItem.decentralizzazione"></div>
						<!-- Privacy -->
						<div v-html="lineItem.privacy"></div>
					</template>
					<template v-if="condition_coinjoin === 'B'">
						<!-- Coordinatore -->
						<div v-html="lineItem.coordinatore"></div>
						<!-- Liquidità -->
						<div v-html="lineItem.liquidità"></div>
						<!-- Cifra minima -->
						<div v-html="lineItem.cifra"></div>
						<!-- Fee -->
						<div v-html="lineItem.fee"></div>
						<!-- Risorse -->
						<div class="left">
							<template v-for="(infoLink, learnMoreIndex) in lineItem.learnMore">
								<a :key="learnMoreIndex" :href="infoLink.link" target="_blank">{{ infoLink.name }}</a><span :key="learnMoreIndex">&emsp;</span>
							</template>
						</div>
					</template>
				</div>
			</div>
		</div>

		<h3>Altri strumenti</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">
						<div class="left">Descrizione</div>
					</div>
					<div class="tbl-title">
						<div class="left">Risorse</div>
					</div>
				</div>
				<div v-for="(lineItem, index) in communicationTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description" class="left"></div>
					<div class="left">
						<template v-for="(infoLink, learnMoreIndex) in lineItem.learnMore">
							<a :key="learnMoreIndex" :href="infoLink.link" target="_blank">{{ infoLink.name }}</a><span v-if="learnMoreIndex + 1 < lineItem.learnMore.length" :key="learnMoreIndex"> | </span>
						</template>
					</div>
				</div>
			</div>
		</div>

		<h3>Risorse</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">
						<div class="left">Autore</div>
					</div>
				</div>
				<div v-for="(lineItem, index) in otherInfo" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div class="left">
						<a :href="lineItem.authorLink" target="_blank">{{ lineItem.author }}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	.tbl-index {
		font-size: 14px;
		color: #fff;
	}
}
.tbl-header {
	text-align: center;
	.left {
		text-align: left;
	}	
}
.tbl-row {
	text-align: center;
	.padding {
		padding: 24px 10px;
	}
	.left {
		text-align: left;
	}
}
</style>

<script>
export default {

	name: 'PrivacyPage',

	head: {
		title: 'Privacy - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin privacy tools.' }
		]
	},
	methods: {
		tab1() {
			this.condition_coinjoin = "A"
        },
        tab2() {
			this.condition_coinjoin = "B"
		},
	},

	data() {
		return {
			condition_coinjoin: "A",

			coinjoinTools: [
				{
					title: 'Joinmarket',
					link: 'https://github.com/JoinMarket-Org/joinmarket-clientserver',
					decentralizzazione: 'Alta/media/bassa',
					privacy: 'alta',
					coordinatore: 'Nome',
					liquidità: 'alta',
					cifra: 'prova',
					fee: 'prova',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/JoinMarket-Org/joinmarket-clientserver'
						},
						{
							name: 'Video',
							link: 'https://www.youtube.com/watch?v=l2iv2MiGaYI&feature=youtu.be&t=18890'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/58'
						},
					]
				},
				{
					title: 'Samourai Whirlpool',
					link: 'https://docs.samourai.io/whirlpool',
					decentralizzazione: 'Alta/media/bassa',
					privacy: 'alta',
					coordinatore: 'Nome',
					liquidità: 'alta',
					cifra: 'prova',
					fee: 'prova',
					learnMore: [
						{
							name: 'Text',
							link: 'https://6102bitcoin.com/faq-whirlpool/'
						},
						{
							name: 'Video',
							link: 'https://www.youtube.com/watch?v=ehbsPZG5k-c'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/78/'
						},
						{
							name: 'Download',
							link: 'https://www.samouraiwallet.com/download'
						}
					]
				},
				{
					title: 'Sparrow Whirlpool',
					link: 'https://sparrowwallet.com/docs/mixing-whirlpool.html',
					decentralizzazione: 'Alta/media/bassa',
					privacy: 'alta',
					coordinatore: 'Nome',
					liquidità: 'alta',
					cifra: 'prova',
					fee: 'prova',
					learnMore: [
						{
							name: 'Text',
							link: 'https://6102bitcoin.com/faq-whirlpool/'
						},
						{
							name: 'Video',
							link: 'https://youtu.be/6TcUY2yU41w?t=238'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/309/'
						},
						{
							name: 'Download',
							link: 'https://www.sparrowwallet.com/download'
						}
					]
				},
				{
					title: 'Wasabi',
					link: 'https://wasabiwallet.io/',
					decentralizzazione: 'Alta/media/bassa',
					privacy: 'alta',
					coordinatore: 'Nome',
					liquidità: 'alta',
					cifra: 'prova',
					fee: 'prova',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/JoinMarket-Org/joinmarket-clientserver'
						},
						{
							name: 'Video',
							link: 'https://www.youtube.com/watch?v=l2iv2MiGaYI&feature=youtu.be&t=18890'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/58'
						},
					]
				},
			],
			communicationTools: [
				{
					title: 'Juggernaut',
					link: 'https://www.getjuggernaut.com/',
					description: 'Invia messaggi end-to-end su Lightning Network',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/LN-Juggernaut/juggernaut-desktop'
						}
					]
				},
				{
					title: 'Sphinx',
					link: 'https://sphinx.chat/',
					description: 'Chat di gruppo su Lightning Network',
					learnMore: [
						{
							name: 'Text',
							link: 'https://tftc.io/martys-bent/issue-863-2/'
						}
					]
				}
			],
			otherInfo: [
				{
					title: '10 Tips For Interacting With Bitcoin more Privately',
					link: 'https://bitcoiner.guide/privacytips/',
					author: 'Bitcoin Q+A',
					authorLink: 'https://twitter.com/BitcoinQ_A'
				},
				{
					title: 'A non-technical Guide to Privacy in Bitcoin',
					link: 'https://bitcoinsnippets.com/protect-your-bitcoin-through-privacy/',
					author: 'Sam Wouters',
					authorLink: 'https://twitter.com/SDWouters'
				},
				{
					title: 'An Incomplete Survey of Bitcoin\'s Privacy Technologies',
					link: 'http://hongchao.me/bitcoin-privacy/',
					author: 'Hong Chao',
					authorLink: 'https://www.twitter.com/hongchao'
				},
				{
					title: 'A Beginners Guide to Bitcoin Privacy',
					link: 'https://bitcoinprivacy.guide/',
					author: 'Bitcoin Q+A',
					authorLink: 'https://twitter.com/BitcoinQ_A'
				},
				{
					title: 'Bitcoin Privacy Wiki',
					link: 'https://en.bitcoin.it/wiki/Privacy',
					author: 'Chris Belcher',
					authorLink: 'https://twitter.com/chris_belcher_/'
				},
				{
					title: 'JoinMarket.me (Bitcoin Privacy Blog)',
					link: 'https://joinmarket.me/',
					author: 'Adam Gibson',
					authorLink: 'https://twitter.com/waxwing__'
				},
				{
					title: 'CoinJoin Overview',
					link: 'https://6102bitcoin.com/coinjoin-overview',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'The CoinJoin Bounty Thread',
					link: 'https://6102bitcoin.com/coinjoin-the-bounty-thread',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'CoinJoin Research Repo',
					link: 'https://github.com/6102bitcoin/CoinJoin-Research/tree/master/CoinJoin_Research',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'Hodl Privacy',
					link: 'https://6102bitcoin.com/faq-hodl-privacy/',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'Do exchanges flag CoinJoin UTXO’s?',
					link: 'https://6102bitcoin.com/coinjoin-flagging',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'Seed/Backup FAQ',
					link: 'https://bitcoin-intro.com/en/backup',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				}
			]
		}
	}
}
</script>
