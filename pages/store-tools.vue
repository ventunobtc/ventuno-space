<template>
	<div id="store-tools-page">

		<h1 class="page-title">Servizi per le imprese</h1>

		<p class="explainer">Questi strumenti ti aiutano ad accettare Bitcoin per te o la tua attività.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in storeTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<div class="footnote">* Fully custodial, cioè non avete le vostre chiavi private. Non vi è garantito il pieno controllo dei vostri fondi. Potete (e dovreste) impostare prelievi ricorrenti per inviare qualsiasi Bitcoin che ricevete al vostro portafoglio non custodial. Ora vi è anche richiesto di presentare la documentazione KYC per essere un commerciante su Opennode.</div>
	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

.explainer {
	margin-bottom: 30px;
	//margin-top: -15px;
}
.footnote {
	max-width: 900px;
	text-align: center;
	font-style: italic;
	color: rgba(255, 255, 255, 0.45);
	margin-top: 20px;
}
</style>

<script>
export default {

	name: 'StoreToolsPage',

	head: {
		title: 'Store Tools - Ventuno',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of tools that help you accept Bitcoin.' }
		]
	},

	data() {
		return {

			storeTools: [
				{
					title: 'Chainside',
					link: 'https://www.chainside.net/en/home/',
					description: 'Gestore di pagamenti'
				},
				{
					title: 'tinkl.it',
					link: 'https://www.tinkl.it/',
					description: 'Gestore di pagamenti'
				},
				{
					title: 'inbitcoin',
					link: 'https://inbitcoin.it/',
					description: 'Gestore di pagamenti'
				},
				{
					title: 'Bitcoin People',
					link: 'https://www.bitcoinpeople.it/bpay',
					description: 'Gestore di pagamenti'
				},
				{
					title: 'Villaggio Bitcoin',
					link: 'https://www.villaggiobitcoin.it/',
					description: 'Gestore di pagamenti'
				},
				{
					title: 'LNPay',
					link: 'https://lnpay.co/',
					description: 'Gestore di pagamenti su Lighting Network'
				},
				{
					title: 'OpenNode',
					link: 'https://www.opennode.co/',
					description: 'Gestore di pagamenti *'
				},
				{
					title: 'paid.co',
					link: 'https://paid.co/',
					description: 'Vendi cose per Bitcoin (usa OpenNode) *'
				},
				{
					title: 'BTC Pay',
					link: 'https://www.btcpayserver.it/',
					description: 'Ricevi pagamenti Bitcoin / LN direttamente sul tuo nodo (oppure hosted)'
				},
				{
					title: 'SatSale',
					link: 'https://github.com/nickfarrow/SatSale',
					description: 'Ricevi pagamenti Bitcoin / LN direttamente sul tuo nodo'
				},
				{
					title: 'LNCal.com',
					link: 'https://lncal.com/',
					description: 'Scambia il tuo tempo per Bitcoin'
				},
				{
					title: 'LN Pos',
					link: 'https://shop.fulmo.org/product/bitcoin-point-of-sale-pos/',
					description: 'Soluzione DIY'
				}
				
			]

		}
	}

}
</script>
