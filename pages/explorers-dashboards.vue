<template>
	<div id="explorers-dashboards-page">

		<h1 class="page-title">Explorers & Dashboards</h1>

		<div class="getting-started-section">

			<h3>Come Iniziare</h3>

			<p>Controllare le transazioni & la mempool con <a href="https://mempool.space/" target="_blank">mempool.space</a>.<br>Si consiglia l'utilizzo di <a href="https://www.torproject.org/" target="_blank">TOR browser</a> per non associare i propri indirizzi Bitcoin con il proprio indirizzo IP e metadata. Ancora meglio utilizzare un proprio full-node</p>

		</div>

		<h3>Bitcoin Explorers</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in explorers" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Lightning Explorers</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in ln_explorers" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>


		<h3>Fees / Mempool</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in feesMempool" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Metriche</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in metrics" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
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
</style>

<script>
export default {

	name: 'ExplorersDashboardsPage',

	head: {
		title: 'Explorers & Dashboards - Ventuno',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only explorers, dashboards, and other analysis tools.' }
		]
	},

	data() {
		return {
			explorers: [
				{
					title: 'BTC RPC',
					link: 'https://bitcoinexplorer.org/',
					description: 'Open source Bitcoin explorer'
				},
				{
					title: 'Mempool.space',
					link: 'https://mempool.space/',
					description: 'Open source Bitcoin explorer'
				},
				{
					title: 'Blockstream Explorer',
					link: 'https://blockstream.info/',
					description: 'Bitcoin & Liquid explorer'
				},
				{
					title: 'OXT',
					link: 'https://oxt.me/',
					description: 'Bitcoin explorer avanzato'
				},
				{
					title: 'Yogh Explorer',
					link: 'https://yogh.io/',
					description: 'Bitcoin blockchain reader'
				},
				{
					title: 'Fast Bitcoin Block Explorer',
					link: 'http://fbbe.info',
					description: 'Block explorer without address indexing: search for tx id, block height or hash'
				}
			],			
			ln_explorers: [
				{
					title: '1ML',
					link: 'https://1ml.com/',
					description: 'Lightning Network explorer'
				},
				{
					title: 'Amboss',
					link: 'https://amboss.space/',
					description: 'Lightning Network explorer'
				},
				{
					title: 'Acinq Explorer',
					link: 'https://explorer.acinq.co/',
					description: 'LN explorer by Acinq'
				},
			],			
			feesMempool: [
				{
					title: 'Bitcoiner Live',
					link: 'https://bitcoiner.live/',
					description: 'Semplice stimatore di fees'
				},
				{
					title: 'Bitcoinrain',
					link: 'http://bitcoinrain.io/',
					description: 'Visualizzazione della Mempool'
				},
				{
					title: 'Mempool.observer',
					link: 'https://mempool.observer/',
					description: 'Visualizzazione mempool, blockchain e grafico fees'
				},
				{
					title: 'Mempool.space',
					link: 'https://mempool.space/',
					description: 'Visualizzazione mempool, blockchain e grafico fees'
				},
				{
					title: 'What The Fee',
					link: 'https://whatthefee.io/',
					description: 'Semplice stimatore di fees'
				}
			],
			metrics: [
				{
					title: 'Bitbo',
					link: 'https://bitbo.io/',
					description: 'Metriche su Bitcoin e LN'
				},
				{
					title: 'BitcoinKPIs',
					link: 'https://bitcoinkpis.com/',
					description: 'Grafici su Bitcoin e LN'
				},
				{
					title: 'Bitcoin Treasuries',
					link: 'https://bitcointreasuries.net/',
					description: 'Società quotate in borsa che detengono Bitcoin'
				},
				{
					title: 'Braiins Insights',
					link: 'https://insights.braiins.com/en/',
					description: 'Statistiche e grafici su Bitcoin'
				},
				{
					title: 'Clark Moody Dashboard',
					link: 'https://bitcoin.clarkmoody.com/dashboard/',
					description: 'Metriche su Bitcoin e LN'
				},
				{
					title: 'Priced In Bitcoin',
					link: 'https://www.pricedinbitcoin21.com/about',
					description: 'Prezzo dei beni in BTC'
				},
				{
					title: 'TimechainStats',
					link: 'https://timechainstats.com',
					description: 'Metriche e grafici su Bitcoin'
				}
			],
		}
	}
}
</script>
