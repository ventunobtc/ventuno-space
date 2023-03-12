<template>
	<div id="spend-bitcoin-page">

		<h1 class="page-title">Spendi Bitcoin</h1>

		<div class="getting-started-section">

			<h3>Come Iniziare</h3>

			<p>Bitcoin consente a chiunque di accedere a un mercato veramente globale.<br>Considerate l'impatto sulla vostra privacy se acquistate beni collegati alla vostra identità o che richiedono una consegna fisica. Per questo motivo è meglio evitare di farsi consegnare i prodotti al proprio indirizzo di casa.</p>

		</div>

		<h3>Dona</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in donate" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Negozi fisici che accettano Bitcoin</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in physicalstores" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Servizi</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in services" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Tools</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in tools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Divertiti & Gioca</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in funAndPlay" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>
		
		<h3>Stores</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in stores" :key="index" class="tbl-row">
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
//.tbl-wrapper {
//	max-width: 800px;
//}
</style>

<script>
export default {

	Nome: 'SpendBitcoinPage',

	head: {
		title: 'Spendi Bitcoin - Ventuno',
		meta: [
			{ hid: 'description', Nome: 'description', content: 'Elenco dei luoghi in cui è possibile spendere i propri Bitcoin.' }
		]
	},

	data() {
		return {

			donate: [
				{
					title: 'Bitcoin Dev List',
					link: 'https://bitcoindevlist.com/',
					description: 'Dona a diversi Bitcoin developers'
				},
				{
					title: 'Progetto Ventuno su Geyser',
					link: 'https://geyser.fund/project/ventunobtc',
					description: 'Dona al progetto Ventuno o altri progetti Bitcoin'
				}
			],
			
			services: [
				{
					title: 'Bitrefill',
					link: 'https://www.bitrefill.com/',
					description: 'Acquista gift-card e ricariche telefoniche'
				},
				{
					title: 'Mercatino Libertario',
					link: 'https://t.me/subito_crypto',
					description: 'Canale telegram per comprare o vendere prodotti e servizi in bitcoin'
				},
				{
					title: 'Sms4Sats',
					link: 'https://sms4sats.com/',
					description: 'Inviare e ricevere SMS senza rivelare il proprio numero di telefono'
				},
				{
					title: 'Bitcoin Support',
					link: 'https://www.bitcoinsupport.com/',
					description: 'One-on-one Bitcoin phone support'
				},
				{
					title: 'Silent Link',
					link: 'https://silent.link/',
					description: 'Acquista eSIM'
				},
				{
					title: 'AI Generator Bot',
					link: 'https://www.t.me/aigenerator_bot',
					description: 'Bot Telegram per generare immagini tramite IA, rimuovere lo sfondo dalle foto o colorare immagini in bianco e nero'
				}
			],

			physicalstores: [
				{
					title: 'Qui Bitcoin',
					link: 'https://www.quibitcoin.it/',
					description: 'Lista di attivita che accettano Bitcoin in Italia'
				},
				{
					title: 'Chi accetta Bitcoin - VillaggioBitcoin',
					link: 'https://www.villaggiobitcoin.it/chi-accetta-bitcoin',
					description: 'Lista di attivita che accettano Bitcoin in Italia'
				},
				{
					title: 'Attività Bitcoin People',
					link: 'https://www.bitcoinpeople.it/attivita-accettano-pagamenti-in-bitcoin/',
					description: 'Lista di attivita che accettano Bitcoin in Italia'
				},
				{
					title: 'Coinmap',
					link: 'https://www.coinmap.it/',
					description: 'Mappa mondiale di negozi fisici che accettano bitcoin'
				},
				{
					title: 'BTCmap',
					link: 'https://btcmap.org/',
					description: 'Mappa mondiale di negozi fisici che accettano bitcoin'
				}
			],
	
			tools: [
				{
					title: 'Bitscribble',
					link: 'https://bitscribble.com/',
					description: 'Scrivi 40 byte di dati sulla blockchain'
				},
				{
					title: 'BTCmessage',
					link: 'https://btcmessage.com/',
					description: 'Scrivi i dati nella blockchain con i vanity address'
				},
				{
					title: 'BullBitcoin',
					link: 'https://bullbitcoin.com/',
					description: 'Servizio non-custodial Bitcoin'
				},
				{
					title: 'Fold App',
					link: 'https://foldapp.com/',
					description: 'Acquistare voucher con cashback Bitcoin'
				},
				{
					title: 'Host4Coins',
					link: 'https://host4coins.net/',
					description: 'VPS Hosting'
				},
				{
					title: 'LNsms',
					link: 'https://lnsms.world/',
					description: 'Inviate messaggi in tutto il mondo e pagate con Lightning'
				},
				{
					title: 'Spacebit',
					link: 'https://spacebit.live/',
					description: 'Inviare messaggi via satellite'
				},
				{
					title: 'Voltage',
					link: 'https://getvoltage.io/',
					description: 'Hosting cloud di nodi lightning'
				}
			],
			funAndPlay: [	
				{
					title: 'Hello Dime',
					link: 'https://www.hellodime.com/',
					description: 'Gioco di carte ispirato a Bitcoin'
				},
				{
					title: 'Lightning Puzzle',
					link: 'https://www.lightningpuzzle.com/info',
					description: 'Crea / risolvi puzzles'
				},
				{
					title: 'Pollo Feed',
					link: 'https://pollofeed.com/',
					description: 'Alimenta polli'
				},
				{
					title: 'Satoshis Game Of Life',
					link: 'https://satoshisgameof.life/',
					description: 'Il gioco della vita di Conway'
				},		
				{
					title: 'Satoshis Place',
					link: 'https://satoshis.place/',
					description: 'Lightning canvas'
				}
			],
			stores: [
				{
					title: '21 million',
					link: 'https://21million.co/',
					description: 'Abbigliamento Bitcoin'
				},
				{
					title: '21X',
					link: 'https://www.21x.io/',
					description: 'Bitcoin art, design e merchandising'
				},
				{
					title: 'Bitcoin Shirt',
					link: 'https://bitcoinshirt.co/',
					description: 'Bitcoin merchandising'
				},
				{
					title: 'Bitcoin Tunnels',
					link: 'https://www.bitcointunnels.com/',
					description: 'Abbigliamento, tazze e altro ancora'
				},
				{
					title: 'Bitcoin Gear',
					link: 'https://www.bitcoin-gear.com/',
					description: 'Bitcoin merchandising'
				},
				{
					title: 'Bitko Yinowsky',
					link: 'https://bitko.cc/',
					description: 'Arte Bitcoin'
				},
				{
					title: 'BTC Pins',
					link: 'https://www.btcpins.com/',
					description: 'Spille e adesivi Bitcoin'
				},
				{
					title: 'CryptoCloaks',
					link: 'https://www.cryptocloaks.com/',
					description: 'Custodie stampate in 3D e nodi personalizzati'
				},
				{
					title: 'DIYnodes',
					link: 'https://diynodes.com/',
					description: 'Nodi Bitcoin e altro'
				},
				{
					title: 'Orange Coin Goods',
					link: 'https://orangecoingoods.com/',
					description: 'Abbigliamento Bitcoin e altro'
				},
				{
					title: 'Liberty Mugs',
					link: 'https://www.libertymugs.com/',
					description: 'Abbigliamento, tazze e altro ancora'
				},
				{
					title: 'Lightning Hood',
					link: 'https://lightninghood.com/shop/',
					description: 'Abbigliamento, stickers e altro ancora'
				},
				{
					title: 'Mt. Socks',
					link: 'https://www.mtsocks.com/',
					description: 'Calzini'
				},
				{
					title: 'PirateHash',
					link: 'https://piratehash.com/',
					description: 'Curiosità e materiale didattico su Bitcoin'
				},
				{
					title: 'Quinsolo',
					link: 'https://quinsolo.com/',
					description: 'Sottobicchieri, magneti e altro ancora'
				},
				{
					title: 'Sats Ledger',
					link: 'https://www.satsledger.com/',
					description: 'Libri Bitcoin per bambini'
				},
				{
					title: 'SHAmory',
					link: 'https://shamory.com/',
					description: 'Gioco di carte che insegna ai bambini come funziona il mining di Bitcoin'
				},
				{
					title: 'Spendabit',
					link: 'https://spendabit.co',
					description: 'Spendi BTC in centinaia di negozi che accettano Bitcoin'
				},
				{
					title: 'Lightning Store',
					link: 'http://lightning.store',
					description: 'Cultura Bitcoin su magliette e adesivi'
				},
				{
					title: 'Von Bitcoin',
					link: 'https://www.vonbitcoin.com/',
					description: 'Magliette, stampe e altro ancora'
				},
				{
					title: 'Wears My Liberty',
					link: 'https://wearsmyliberty.com/',
					description: 'Magliette, cappelli, felpe e altro'
				}
			]
		}
	}
}
</script>
