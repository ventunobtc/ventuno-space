<template>
	<div id="videos-page">

		<h1 class="page-title">Video</h1>

		<div class="getting-started-section">

			<h3>Come Iniziare</h3>

			<p>Guarda i seguenti video:</p>

			<ul>
				<li><a href="https://www.youtube.com/watch?v=PScIpF9Wjpc" target="_blank">Il Bitcoin Standard</a> di Saifedean Ammous, spiegato in italiano  </li>
				<li><a href="https://www.youtube.com/watch?v=_bgFysF3a8E" target="_blank">Hayek e Friedman predicono Bitcoin</a> - Ventuno.BTC (sub ita) </li>
				<li><a href="https://www.youtube.com/playlist?list=PL40oTe99517XEIdKoAJk5o_Hr5cTIqPiB" target="_blank">Understanding Bitcoin</a> - Giacomo Zucco spiega Bitcoin in italiano </li>
			</ul>

		</div>

		<h3>Altri video in italiano</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in videoItalian" :key="index" class="tbl-row">
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
.footnote {
	max-width: 800px;
	text-align: center;
	font-style: italic;
	color: rgba(255, 255, 255, 0.45);
	margin-top: 20px;
}
</style>

<script>
export default {

	name: 'VideosPage',

	head: {
		title: 'Video',
		meta: [
			{ hid: 'description', name: 'description', content: 'Una collezione di video su Bitcoin.' }
		]
	},

	data() {
		return {

			videoItalian: [
				{
					title: 'Bitcoin: valuta o asset digitale? Potenzialità, limiti e sviluppi futuri.',
					link: 'https://www.youtube.com/watch?v=2rw8Xd9OiDA',
					description: 'Giacomo Zucco con BIT PoliTO'
				},
				{
					title: 'Bitcoin In Action',
					link: 'https://www.youtube.com/BitcoinInAction',
					description: 'Spiegazioni tecniche su Bitcoin'
				},
				{
					title: '5 luoghi comuni da sfatare su Blockchain',
					link: 'https://www.youtube.com/watch?v=a-2cz-yzQns',
					description: ''
				},
				{
					title: 'Come funzionano i Bitcoin',
					link: 'https://www.youtube.com/watch?v=kpxBSohNr5Y',
					description: ''
				},
				{
					title: 'Bitcoin & Mining',
					link: 'https://www.youtube.com/watch?v=kVCjfVN0344',
					description: 'Conviene minare cryptovalute? Si diventa ricchi? Come funziona?'
				},
				{
					title: 'Vivere con Bitcoin',
					link: 'https://www.youtube.com/watch?v=Qu_E7QmmoS4',
					description: 'Massimo Musumeci & Luca Venturini'
				},
				{
					title: 'Bitcoin Valley: Terraforming Bitcoin 2019',
					link: 'https://www.youtube.com/watch?v=90ihJJp6Cqs',
					description: ''
				},				
				{
					title: 'Atomic swap per principianti',
					link: 'https://www.youtube.com/watch?v=xqtulqFaiNw',
					description: ''
				},
				{
					title: 'Bitcoin e Privacy',
					link: 'https://www.youtube.com/playlist?list=PLJV6rfaH_FrxwQ_z8Yk7mi2_9iM9avInf',
					description: 'Video della privacy week'
				},
				{
					title: 'Bitcoin inconfiscabile riserva di valore',
					link: 'https://www.youtube.com/watch?v=4BL2pusoX0o',
					description: ''
				},	
            	{ 
					title: 'Into the Bitcoin Protocol: come funziona?',  
					link: 'https://www.youtube.com/watch?v=KF3uQzBpMnw', 
					description: 'Alberto De Luigi con BIT PoliTO'
				},
				{ 
					title: 'Introduzione a Bitcoin',  
					link: 'https://www.youtube.com/watch?v=rnhmBpznlHM', 
					description: 'Federico Tengo al Politecnico di Torino'
				},
				{ 
					title: 'Bitcoin is for the millions not for the millioners',  
					link: 'https://www.youtube.com/watch?v=OPXoVMsEwDc', 
					description: 'Rikki del BipShow al Politecnico di Torino'
				},
				{ 
					title: 'Tra Bitcoin Maximalism e centro America',  
					link: 'https://www.youtube.com/watch?v=-UUeNcTTCI8', 
					description: ''
				},
				{
					title: 'Bitcoin: l\'evoluzione della moneta',  
					link: 'https://www.youtube.com/embed/lZHrR3FCRgo', 
					description: 'Tavola rotonda a Internet Festival 2021'
				},
				{
					title: 'Mining (discussione e live da Mining Farm in Russia)',  
					link: 'https://www.youtube.com/watch?v=hoUAfkE9de0', 
					description: ''
				},
				{
					title: 'CTV, consenso, sviluppatori e miner',  
					link: 'https://bitcointrain.substack.com/p/fermata-30-ctv-e-il-consenso-in-bitcoin?r=mtvgo&s=w&utm_campaign=post&utm_medium=web', 
					description: ''
				},
				{
					title: 'Le culture nel mondo Bitcoin',  
					link: 'https://www.youtube.com/watch?v=TPjq4skAv9k', 
					description: ''
				},
				{
					title: '"Tutto quello che vi hanno detto sul denaro è sbagliato" con Giacomo Zucco',  
					link: 'https://www.youtube.com/watch?v=fg764zWQmh8', 
					description: ''
				},
				{
					title: 'Il Bitcoin spiegato a tua nonna Giacomo Zucco',  
					link: 'https://www.youtube.com/watch?v=iww3arc89BA', 
					description: ''
				},
				{
					title: 'Wasabi, Joinmarket, Coordinatori CoinJoin e Blockchain Analysis',  
					link: 'https://www.youtube.com/watch?v=MKRqt4yzlI0', 
					description: 'Giacomo Zucco e Riccardo Masutti'
				},
				{
					title: 'Utilizzo di bitcoin da dispositivi mobile',  
					link: 'https://www.youtube.com/watch?v=UlyPArGmQ4w', 
					description: ''
				},
				{
					title: 'Hardware Wallets: comparazione, analisi, approfondimento, dibattito',  
					link: 'https://www.youtube.com/watch?v=fR3linC_deg', 
					description: ''
				},
				{
					title: 'Transazioni Bitcoin onchain, avvertenze, privacy, discussione',  
					link: 'https://www.youtube.com/watch?v=oQuy7GkbMaA', 
					description: ''
				},
				{
					title: 'Bitcoin transazioni e privacy su Lightning / tips & tricks',  
					link: 'https://www.youtube.com/watch?v=CoS_m3Vg2S8', 
					description: ''
				}				
			],
			
		}
	}

}
</script>
