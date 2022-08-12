<template>
	<div id="get-bitcoin-page">

		<h1 class="page-title">Ottieni Bitcoin</h1>

		<p>Ci sono molti modi per ottenere bitcoin. È possibile acquistare una frazione di bitcoin, quindi non lasciatevi scoraggiare da un prezzo elevato per un singolo bitcoin. Molti stanno accumulando satoshi, o <a href="https://twitter.com/search?q=%23stackingsats" target="_blank">#stackingsats</a>,  (spendere regolarmente un importo fisso in euro per l'acquisto di bitcoin, noto anche come "dollar cost averaging") è possibile vedere che questo metodo è stato storicamente un buon modo di accumulare Bitcoin guardando <a href="https://hodl.camp/" target="_blank">hodl.camp</a>.</p>

		<h3>Comprare NoKYC (suggerito)</h3>

		<p class="explainer">Acquistate Bitcoin come fareste con qualsiasi altra cosa (senza dover dimostrare la vostra identità). Potreste essere in grado di acquistare Bitcoin <nuxt-link to="/meetups">di persona</nuxt-link> o in un Bitcoin ATM.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
					<div class="tbl-title">Luogo</div>
				</div>
				<div v-for="(service, index) in buySuggested" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
					<div>{{ service.location }}</div>
				</div>
			</div>
		</div>

		<h3>Comprare (altre opzioni)</h3>

		<p class="explainer">Se volete passare da una strada KYC (nonostante i  <a href="https://bitcoinqna.github.io/noKYConly1/" target="_blank">rischi</a>) ci sono le seguenti opzioni per i soli Bitcoin.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
					<div class="tbl-title">Luogo</div>
					<div class="tbl-title">Auto DCA</div>
				</div>
				<div v-for="(service, index) in buyOther" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
					<div>{{ service.location }}</div>
					<div>{{ service.autoDca }}</div>
				</div>
			</div>
		</div>

		<h3>Minare</h3>

		<p class="explainer">Sono ormai lontani i tempi in cui si poteva minare Bitcoin utilizzando hardware comune. Il mining di Bitcoin è ora un processo industriale dominato da hardware specializzato alimentato da elettricità a basso costo. Questo <a href="https://youtu.be/GmOzih6I1zs" target="_blank">video</a> fornisce una semplice panoramica. Leggete Diverterbtc: <a href="https://diverter.hostyourown.tools/mining-for-the-streets/" target="_blank">Mining for the Streets</a> e Econoalchemist: <a href="https://www.econoalchemist.com/post/home-mining-for-non-kyc-bitcoin" target="_blank">Home mining guide</a>.</p>

		<h3>Guadagna</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(service, index) in earnBitcoin" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
				</div>
			</div>
		</div>

		<div class="footnote">* Tallycoin & jfgi potrebbero in qualsiasi momento scambiare il vostro indirizzo di donazione con il proprio.</div>

		<h3>Vinci</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(service, index) in winBitcoin" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
				</div>
			</div>
		</div>

		<h3>Cashback</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(service, index) in cashbackRewards" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
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
.tbl-wrapper {
	max-width: 900px;
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

	name: 'GetBitcoinPage',

	head: {
		title: 'Ottieni Bitcoin - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'Lista di metodi per ottenere Bitcoin.' }
		]
	},

	data() {
		return {

			buySuggested: [
				{
					title: 'Azte.co',
					link: 'https://azte.co/',
					description: 'Voucher fisico per fare redeem di Bitcoin senza KYC',
					location: 'Global'
				},
				{
					title: 'Robosats',
					link: 'https://twitter.com/RoboSats',
					description: 'Compra e Vendi Bitcoin (on-chain o LN) in modo p2p e anonimo',
					location: 'TOR'
				},
				{
					title: 'Bitcoin Voucher Bot',
					link: 'https://t.me/BitcoinVoucherBot',
					description: 'Bot telegram per comprare Voucher Azte.co o Bitcoin (on-chain, Liquid, LN) senza KYC',
					location: 'Telegram'
				},
				{
					title: 'Bisq',
					link: 'https://bisq.network/',
					description: 'Compra e Vendi Bitcoin in modo p2p e anonimo',
					location: 'Desktop App'
				}
			],

			buyOther: [
				{
					title: 'Bitkipi',
					link: 'https://bitkipi.com/',
					description: 'Compra Bitcoin KYC "Lite", tramite Bonifico',
					location: 'CH',
					autoDca: 'Sì'
				},
				{
					title: 'Relai',
					link: 'https://relai.ch/',
					description: 'Compra Bitcoin KYC "Lite", tramite Bonifico',
					location: 'CH',
					autoDca: 'Sì'
				},
				{
					title: 'Conio',
					link: 'https://www.conio.com/it/',
					description: 'Exchange italiano',
					location: 'IT',
					autoDca: 'Sì'
				},
				{
					title: 'Young Platform',
					link: 'https://exchange.youngplatform.com/it/',
					description: 'Exchange italiano',
					location: 'IT',
					autoDca: 'Sì'
				},
				{
					title: 'The Rock Trading',
					link: 'https://www.therocktrading.com/it/',
					description: 'Exchange italiano',
					location: 'IT',
					autoDca: 'Sì'
				}
			],

			earnBitcoin: [
				{
					title: 'Bitcoiner Jobs',
					link: 'https://bitcoinerjobs.co/',
					description: 'Lavori in Bitcoin'
				},
				{
					title: 'Geyser',
					link: 'https://geyser.fund/',
					description: 'Piattaforma crowdfunding che aiuta a finanziare idee su Bitcoin'
				},
				
				{
					title: 'jfgi',
					link: 'https://www.jfgi.cc/',
					description: 'Piattaforma crowdfunding in Bitcoin  *'
				},
				{
					title: 'MicroLancer',
					link: 'https://microlancer.io/',
					description: 'Micro-freelancing'
				},
				{
					title: 'Paywall Link',
					link: 'https://paywall.link/',
					description: 'Contenuti paywall facili'
				},
				{
					title: 'Squeaknode',
					link: 'https://squeaknode.org/',
					description: 'P2P lightning status feed'
				},
				{
					title: 'TallyCoin',
					link: 'https://tallyco.in/',
					description: 'Piattaforma crowdfunding in Bitcoin *'
				}
			],

			winBitcoin: [
				{
					title: 'Hangar Six Gaming',
					link: 'https://www.hangarsixgaming.com/',
					description: 'Lightning gaming'
				},
				{
					title: 'THNDR Games',
					link: 'https://thndr.games',
					description: 'Lightning games'
				}
			],

			cashbackRewards: [
				{
					title: 'Fold App',
					link: 'https://foldapp.com/',
					description: 'Bitcoin cashback rewards'
				},
				{
					title: 'Lolli',
					link: 'https://www.lolli.com/',
					description: 'Bitcoin cashback rewards'
				},
				{
					title: 'Satsback.com',
					link: 'https://satsback.com/',
					description: 'Bitcoin (Lightning) cashback rewards'
				}
			]

		}
	}

}
</script>
