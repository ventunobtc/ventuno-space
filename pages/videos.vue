<template>
	<div id="videos-page">

		<h1 class="page-title">Video</h1>

		<div class="getting-started-section">

			<h3>Come Iniziare</h3>

			<p>Guarda i seguenti video:</p>

			<ul>
				<li><a href="https://www.youtube.com/watch?v=PScIpF9Wjpc" target="_blank">Il Bitcoin Standard</a> di Saifedean Ammous, spiegato in italiano  </li>
				<li><a href="https://www.youtube.com/playlist?list=PL40oTe99517XEIdKoAJk5o_Hr5cTIqPiB" target="_blank">Understanding Bitcoin</a> - Giacomo Zucco spiega Bitcoin in italiano </li>
			</ul>

		</div>

		<h3>Video Ventuno</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in videoVentuno" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Canali italiani</h3>

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

			videoVentuno: [
				{
					title: 'Hayek e Friedman predicono Bitcoin',
					link: 'https://www.youtube.com/watch?v=_bgFysF3a8E',
					description: 'Due interviste ai premi nobel per l\'economia Friedrich von Hayek e Milton Friedman'
				},
				{
					title: 'Il Bitcoin Standard',
					link: 'https://www.youtube.com/watch?v=PScIpF9Wjpc',
					description: 'Sunto del libro di Saifedean Ammous'
				}
			],

			videoItalian: [
				{
					title: 'Bitcoin In Action',
					link: 'https://www.youtube.com/BitcoinInAction',
					description: 'Canale YT di spiegazioni tecniche su Bitcoin'
				},
				{
					title: 'Massimo Musumeci',
					link: 'https://www.youtube.com/MassimoSMusumeci',
					description: 'Canale YT a tema Bitcoin e privacy'
				},
				{
					title: 'Mir',
					link: 'https://www.youtube.com/rnbmir',
					description: 'Canale YT di brevi interviste in inglese con i più importanti dev e personalità nel mondo Bitcoin.'
				},
				{
					title: 'Riccardo Masutti',
					link: 'https://www.youtube.com/RiccardoMasutti',
					description: 'Canale YT a tema sicurezza informatica, privacy e Bitcoin'
				},
				{
					title: 'BIT PoliTO',
					link: 'https://www.youtube.com/BITPoliTo',
					description: 'Canale YT del team studentesco del Politecnico di Torino.'
				},
				{
					title: 'Bitcoin Italia Podcast',
					link: 'https://www.youtube.com/BitcoinItaliaPodcast',
					description: 'Canale YT del primo podcast a raccontare Bitcoin in lingua italiana.'
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
					title: 'Bitcoin inconfiscabile riserva di valore',
					link: 'https://www.youtube.com/watch?v=4BL2pusoX0o',
					description: ''
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
