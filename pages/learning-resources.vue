<template>
	<div id="learning-resources-page">
		<h1 class="page-title">Risorse Didattiche</h1>

		<div class="getting-started-section">

			<h3>Come iniziare</h3>

			<p>Tutto in una sola pagina <a href="https://bitcoin-translate.it/one-pager.php" target="_blank">bitcoin-translate.it/one-pager</a></p>

		</div>

		<h3>Articoli Ventuno</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(article, index) in articlesVentuno" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="article.link" target="_blank">{{ article.title }}</a>
					</div>
					<div>{{ article.description }}</div>
				</div>
			</div>
		</div>

		<h3>Altri aggregatori</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(other, index) in others" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="other.link" target="_blank">{{ other.title }}</a>
					</div>
					<div>{{ other.description }}</div>
				</div>
			</div>
		</div>

		<h3>Periodici</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(periodical, index) in periodicals" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="periodical.link" target="_blank">{{ periodical.title }}</a>
					</div>
					<div>{{ periodical.description }}</div>
				</div>
			</div>
		</div>

		<h3>Corsi e Workshop</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(classInfo, index) in classes" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="classInfo.link" target="_blank">{{ classInfo.title }}</a>
					</div>
					<div>{{ classInfo.description }}</div>
				</div>
			</div>
		</div>

		<h3>Siti Web</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(website, index) in websites" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="website.link" target="_blank">{{ website.title }}</a>
					</div>
					<div>{{ website.description }}</div>
				</div>
			</div>
		</div>
		<h3>Risorse in inglese</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(object, index) in english" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="object.link" target="_blank">{{ object.title }}</a>
					</div>
					<div>{{ object.description }}</div>
				</div>
			</div>
		</div>

		<h3>Letture avanzate</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Titolo</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(advancedRead, index) in advancedReading" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="advancedRead.link" target="_blank">{{ advancedRead.title }}</a>
					</div>
					<div>{{ advancedRead.description }}</div>
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

	name: 'LearningResourcesPage',

	head: {
		title: 'Risorse Didattiche - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of educational resources to learn more about Bitcoin.' }
		]
	},

	data () {
		return {

			articlesVentuno: [
				{
					title: 'Il mining di Bitcoin ottimizza la produzione di energia rinnovabile',
					link: 'https://medium.com/@ventunobtc/il-mining-di-bitcoin-ottimizza-la-produzione-di-energia-rinnovabile-68af1c490d4a',
					description: 'Traduzione in italiano del thread Twitter di @Level39'
				},
			],
			periodicals: [
				{
					title: 'Bitcoin Train',
					link: 'https://github.com/mirserena/risorsebitcoin',
					description: 'Newsletter su Bitcoin'
				},
				{
					title: 'Bitcoin in Italiano',
					link: 'https://btcita.substack.com/',
					description: 'Una selezione di articoli dai protagonisti del mondo bitcoin, tradotti in italiano.'
				},
				
			],
			classes: [
				{
					title: 'Bitcoin dalla teoria alla pratica - Corso Completo',
					link: 'https://www.udemy.com/course/bitcoin-blockchain-corso-completo-teoria-pratica-esempi-tutorial/?referralCode=AAC8EB895142D8301C13',
					description: 'Corso completo che affronta le tematiche principali del protocollo, mettendo in pratica la teoria utilizzando veri nodi'
				},
				{
					title: 'Bitcoin, Sicurezza e Privacy - Riccardo Masutti',
					link: 'https://bitcoinsicurezzaprivacy.it/apps/2zy7omrFCL6vYXDRwpYNuwpGvwaw/pos',
					description: 'Contenuti video sui temi di sicurezza, privacy e bitcoin che vanno dai temi base a quelli avanzati'
				},
				{
					title: 'Corso online "A scuola di Bitcoin"',
					link: 'https://ascuoladibitcoin.com/',
					description: 'Corsi su Bitcoin'
				},
			],
			others: [
				{
					title: 'Risorsebitcoin by Mir',
					link: 'https://github.com/mirserena/risorsebitcoin',
					description: 'Lista di risorse su Bitcoin per chi si avvicina per la prima volta'
				},
				{
					title: 'Bitcoin Translate',
					link: 'https://bitcoin-translate.it/',
					description: 'Lista di risorse su Bitcoin per chi si avvicina per la prima volta'
				},
				{
					title: 'Bitcoin: Tutto quello che devi sapere',
					link: 'https://pindol.medium.com/premessa-1e5254a52475',
					description: 'Aggregatore di contenuti su Bitcoin per chi si avvicina per la prima volta'
				},
			],
			websites: [
				{
					title: 'Turtlecute',
					link: 'https://turtlecute.org/',
					description: 'Guide su Bitcoin e privacy'
				},
				{
					title: 'Alberto De Luigi',
					link: 'https://www.albertodeluigi.com/',
					description: 'Tutto su Bitcoin: guide, tecnologia e mercato'
				},
				{
					title: 'Forum BitcoinTalk Italia',
					link: 'https://bitcointalk.org/index.php?board=28.0',
					description: 'Forum in italiano di BitcoinTalk'
				},
				{
					title: 'Checkpoint Bitcoin',
					link: 'https://bitcoin-translate.it/',
					description: ' Bitcoin in italiano dalla genesi ad oggi '
				},
				{
					title: 'Parlare Bitcoin',
					link: 'https://parlarebitcoin.com/',
					description: 'Blog e risorse per comprendere al meglio Bitcoin '
				},
				{
					title: 'Bitcoin Q & A',
					link: 'https://bitcoiner.guide/qna/it',
					description: 'Domande e risposte esaustive'
				},
				{
					title: 'Bitcoin.org',
					link: 'https://bitcoin.org/it',
					description: 'Informazioni su Bitcoin '
				},
				{
					title: 'Bitcoin-Intro',
					link: 'https://bitcoin-intro.com/it',
					description: 'Guida passo dopo passo all\'onboarding di bitcoin'
				}
			],

			english: [
				{
					title: 'BIPs',
					link: 'https://bips.xyz/',
					description: 'Explorer for BIPs. View, search and share easily BIPs'
				},
				{
					title: 'Bitcoin Resources',
					link: 'https://bitcoin-resources.com/',
					description: 'Comprehensive Bitcoin book/article/podcast list'
				},
				{
					title: 'Bitcoin Slides',
					link: 'https://www.bitcoin-studio.com/resources',
					description: 'Comprehensive slides'
				},
				{
					title: 'Bitcoin Support',
					link: 'https://guides.bitcoinsupport.com/',
					description: 'Self-custody and privacy guides'
				},
				{
					title: 'Bitcoin Briefly',
					link: 'https://bitcoinbriefly.com/',
					description: 'Brevi spiegazioni sui Bitcoin (EN)'
				},
				{
					title: 'Bitcoin Designed',
					link: 'https://www.bitcoindesigned.com/',
					description: 'Infografiche Bitcoin sorprendenti (EN) - Da tradurre'
				},
				{
					title: 'Bitcoin Design Guide',
					link: 'https://bitcoin.design/guide/',
					description: '	Guida alla progettazione di applicazioni bitcoin (EN)'
				},
				{
					title: 'BitKnow',
					link: 'https://thebitgeneration.org/',
					description: 'Quality Bitcoin blog'
				},
				{
					title: 'Chaincode Study Groups',
					link: 'https://github.com/chaincodelabs/study-groups',
					description: 'Bitcoin & Lightning study guides'
				},
				{
					title: 'Get Coined',
					link: 'https://www.getcoined.io/',
					description: 'Concise introduction for precoiners'
				},
				{
					title: 'Learn Me A Bitcoin',
					link: 'http://learnmeabitcoin.com/',
					description: 'Bitcoin Explained'
				},
				{
					title: 'Look Into Bitcoin',
					link: 'https://www.lookintobitcoin.com/',
					description: 'Live valuation charts'
				},
				{
					title: 'Ministry Of Nodes',
					link: 'https://www.ministryofnodes.com.au/',
					description: 'Articles, videos and workshops/webinars'
				},
				{
					title: 'Nakamoto Institute',
					link: 'https://nakamotoinstitute.org/literature/',
					description: 'Everything Satoshi'
				},
				{
					title: 'River Learning Center',
					link: 'https://river.com/learn/',
					description: 'Basics guide & glossary'
				},
				{
					title: 'Storing Bitcoin',
					link: 'https://storingbitcoin.info/',
					description: 'Interactive guide to storing bitcoin'
				},
				{
					title: 'Why Hold Bitcoin',
					link: 'https://whyholdbitcoin.com/resources/',
					description: 'Reviews, guides & resources'
				},
				{
					title: 'WORDS',
					link: 'https://bitcoinwords.github.io/',
					description: 'A monthly Bitcoin journal'
				},
				{
					title: 'Bitcoin Questions',
					link: 'https://github.com/bokobza/bitcoin-interview-questions',
					description: 'Technical Bitcoin questions'
				}
			],
			advancedReading: [
				{
					title: 'Lightning Summary',
					link: 'https://medium.com/@unofficialbitcoinshow/how-lightning-network-maintains-bitcoins-value-proposition-d127da10077d',
					description: 'Lightning Network deep-dive'
				},
				{
					title: 'Schnorr / MuSig',
					link: 'https://github.com/MaxHillebrand/LightningMultiSig/blob/master/SharedOwnership.asciidoc#schnorr-signatures',
					description: 'Max\'s cliffnotes'
				},
				{
					title: 'Shamir Secret Sharing',
					link: 'https://github.com/MaxHillebrand/LightningMultiSig/blob/master/SharedOwnership.asciidoc#shamir%E2%80%99s-secret-sharing-scheme',
					description: 'Max\'s cliffnotes'
				}
			],
		}
	}
}
</script>
