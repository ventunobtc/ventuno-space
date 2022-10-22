<template>
	<div id="books-page">

		<h1 class="page-title">Libri</h1>

		<div class="getting-started-section">

			<h3>Come iniziare</h3>

			<ul>
				<li>Per un'introduzione non tecnica, leggete "Il Bitcoin Standard" di Saifedean Ammous (<a href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861" target="_blank">EN</a> | <a href="https://shop.usemlab.com/home/85-the-bitcoin-standard-edizione-italiana.html" target="_blank">IT</a>) </li>
				<li>Per un'introduzione tecnica, leggete "Mastering Bitcoin" di Andreas M. Antonopoulos (<a href="https://www.amazon.it/Mastering-Bitcoin-Traduzione-italiana-blockchain-ebook/dp/B07WHDK5K9/" target="_blank">Amazon</a> | <a href="https://github.com/bitcoinbook/bitcoinbook" target="_blank">GitHub</a>)</li>
				<li>Per altre informazioni tecniche "Programming Bitcoin" di Jimmy Song (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Amazon</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)</li>
			</ul>

		</div>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Sinossi</div>
					<div class="tbl-title">Autore</div>
					<div class="tbl-title">Link Acquisto</div>
				</div>
				<div v-for="(book, index) in books" :key="index" class="tbl-row">
					<div>{{ book.title }}</div>
					<div>{{ book.synopsis }}</div>
					<div>
						<template v-for="(author, authorIndex) in book.authors">
							<a :key="authorIndex" :href="author.link" target="_blank">{{ author.name }}</a><span v-if="authorIndex + 1 < book.authors.length" :key="authorIndex">, </span>
						</template>
					</div>
					<div>
						<template v-for="(purchaseLink, purchaseLinkIndex) in book.purchaseLinks">
							<a :key="purchaseLinkIndex" :href="purchaseLink.link" target="_blank">{{ purchaseLink.title }}</a><span v-if="purchaseLinkIndex + 1 < book.purchaseLinks.length" :key="purchaseLinkIndex"> , </span>
						</template>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';
</style>

<script>
export default {

	name: 'BooksPage',

	head: {
		title: 'Libri',
		meta: [
			{ hid: 'description', name: 'description', content: 'Una collezione di libri su Bitcoin.' }
		]
	},

	data() {
		return {

			books: [
				{
					title: '21 Lezioni',
					synopsis: 'Superbe lezioni di Bitcoin',
					authors: [
						{
							name: 'Gigi',
							link: 'https://twitter.com/dergigi'
						}
					],
					purchaseLinks: [
						{
							title: 'Diretto',
							link: 'https://21lessons.com/'
						},
						{	
							title: 'Amazon',
							link: 'https://www.amazon.it/21-Lezioni-imparato-cadere-Bianconiglio/dp/B09W43BXD3/'
						}
					]
				},
				{
					title: 'Il Bitcoin Standard',
					synopsis: 'Lettura essenziale',
					authors: [
						{
							name: 'Saifedean Ammous',
							link: 'https://twitter.com/saifedean'
						}
					],
					purchaseLinks: [
						{
							title: 'EN',
							link: 'https://www.amazon.it/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861'
						},
						{
							title: 'IT',
							link: 'https://shop.usemlab.com/home/85-the-bitcoin-standard-edizione-italiana.html'
						}
					]
				},
				{
					title: 'Bitcoin 199 domande',
					synopsis: 'Risposte molto concise a 199 domande su bitcoin',
					authors: [
						{
							name: 'Alessio Barnini',
							link: 'https://twitter.com/satoshiwantsyou'
						},
						{
							name: 'Alessandro Aglietti',
							link: 'https://twitter.com/satoshiwantsyou'
						}
					],
					purchaseLinks: [
						{
							title: 'Diretto',
							link: 'https://www.corsobitcoin.com/prodotto/book-bitcoin-199-questions/'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/Bitcoin-domande-Italian-Alessio-Barnini-ebook/dp/B07TXZP8GS/'
						}
					]
				},
				{
					title: 'Bitcoin: Dalla teoria alla pratica',
					synopsis: 'Spiegazione passo passo di bitcoin con tutorial di codice',
					authors: [
						{
							name: 'Alessio Barnini',
							link: 'https://twitter.com/satoshiwantsyou'
						},
						{
							name: 'Alessandro Aglietti',
							link: 'https://twitter.com/satoshiwantsyou'
						}
					],
					purchaseLinks: [
						{
							title: 'Diretto',
							link: 'https://www.corsobitcoin.com/prodotto/bitcoin-from-theory-to-practice/'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/Bitcoin-theory-practice-Alessio-Barnini-ebook/dp/B08BJCBDGF/'
						}
					]
				},
				{
					title: 'Mastering Bitcoin',
					synopsis: 'Guida tecnica su bitcoin.',
					authors: [
						{
							name: 'Andreas M. Antonopoulos',
							link: 'https://twitter.com/aantonop'
						}
					],
					purchaseLinks: [
						{
							title: 'Amazon',
							link: 'https://www.amazon.it/Mastering-Bitcoin-Traduzione-italiana-blockchain-ebook/dp/B07WHDK5K9/'
						},
						{
							title: 'Repository',
							link: 'https://github.com/bitcoinbook/bitcoinbook'
						}
					]
				},
				{
					title: 'Mastering the Lightning Network',
					synopsis: 'Guida tecnica su lightning.',
					authors: [
						{
							name: 'Andreas M. Antonopoulos',
							link: 'https://twitter.com/aantonop'
						},
						{
							name: 'Olaoluwa Osuntokun',
							link: 'https://twitter.com/roasbeef'
						},
						{
							name: 'Rene Pickhardt',
							link: 'https://twitter.com/renepickhardt'
						}
					],
					purchaseLinks: [
						{
							title: 'Amazon-EN',
							link: 'https://www.amazon.com/Mastering-Lightning-Network-Blockchain-Protocol/dp/1492054860'
						},
						{
							title: 'Repository',
							link: 'https://github.com/lnbook/lnbook'
						}
					]
				},
				{
					title: 'Domande & risposte su Bitcoin',
					synopsis: 'Dal concetto di blockchain alla definizione della suite LNP/BP',
					authors: [
						{
							name: 'David Coen',
							link: 'https://twitter.com/thedavidcoen'
						}
					],
					purchaseLinks: [
						{
							title: 'Diretto',
							link: 'https://qabitcoin.davidcoen.it/product/q-a-about-bitcoin-pay-in-btc/'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.it/Domande-risposte-Bitcoin-blockchain-definizione/dp/B089D4JYH8/'
						},
					]
				},
				{
					title: 'Protocollo Bitcoin',
					synopsis: 'Fondamenti per capire la tecnologia delle criptovalute e le sue applicazioni',
					authors: [
						{
							name: 'Umberto Tarantino',
							link: 'https://twitter.com/smartmouse_'
						}
					],
					purchaseLinks: [
						{
							title: 'Amazon',
							link: 'https://www.amazon.it/Protocollo-Bitcoin-Fondamenti-criptovalute-applicazioni/dp/B09MYVXR6Q'
						},
					]
				},
				{
					title: 'Villaggio Bitcoin',
					synopsis: 'L\'alba di una nuova società basata su una moneta sana e onesta',
					authors: [
						{
							name: 'Valerio Dalla Costa',
							link: 'https://twitter.com/villaggiobtc'
						}
					],
					purchaseLinks: [
						{
							title: 'Diretto',
							link: 'https://www.villaggiobitcoin.it/libro-villaggio-bitcoin/'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.it/Villaggio-Bitcoin-societ%C3%A0-basata-moneta/dp/B0B677K5F5'
						},
					]
				}
			]

		}
	}

}
</script>
