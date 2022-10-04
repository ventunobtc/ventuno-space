<template>
	<div id="learning-resources-page">
		<h1 class="page-title">Risorse Didattiche</h1>

		<div class="getting-started-section">

			<h3>Come iniziare</h3>

			<p>Seguire questi step su <a href="https://bitcoin-intro.com/" target="_blank">bitcoin-intro.com</a></p>

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

		<h3>Websites</h3>

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
					title: 'Risorsebitcoin by Mir',
					link: 'https://github.com/mirserena/risorsebitcoin',
					description: 'Lista di risorse su Bitcoin per chi si avvicina per la prima volta'
				},
				{
					title: 'Bitcoin Train',
					link: 'https://github.com/mirserena/risorsebitcoin',
					description: 'Newsletter su Bitcoin'
				},
				{
					title: 'Bitcoin: Tutto quello che devi sapere',
					link: 'https://pindol.medium.com/premessa-1e5254a52475',
					description: 'Aggregatore di contenuti su Bitcoin per chi si avvicina per la prima volta'
				},
				{
					title: 'Citadel 21',
					link: 'https://www.citadel21.com/',
					description: 'Monthly Bitcoin cultural zine'
				},
				{
					title: 'Lightning Hood (Inactive)',
					link: 'https://medium.com/@lightninghood',
					description: 'Weekly summary of Bitcoin and Lightning Network news'
				},
				{
					title: 'Lightning Labs',
					link: 'https://lightninglabs.substack.com/archive',
					description: 'Lightning Network news'
				},
				{
					title: 'Bitcoin Monthly',
					link: 'https://bitcoiner.guide/monthly',
					description: 'Monthly index of Bitcoin and Lightning Network news and developments'
				},
			],

			classes: [
				{
					title: 'Bitcoin dalla teoria alla pratica - Corso Completo',
					link: 'https://www.udemy.com/course/bitcoin-blockchain-corso-completo-teoria-pratica-esempi-tutorial/?referralCode=AAC8EB895142D8301C13',
					description: '2-day course (in development)'
				},
				{
					title: '21 Lectures (Beginner)',
					link: 'https://www.21lectures.com/beginner-course/',
					description: '2-day course (in development)'
				},
				{
					title: '21 Lectures (Advanced)',
					link: 'https://www.21lectures.com/advanced-course/',
					description: '4-day Course'
				},
				{
					title: 'Bitcoin For Everybody',
					link: 'https://learn.saylor.org/course/view.php?id=468',
					description: 'Free 12 hour course by Stephan Livera'
				},
				{
					title: 'Bitcoin Lessons',
					link: 'https://www.bitcoinlessons.org/',
					description: 'App based lessons'
				},
				{
					title: 'Bitcoin Studio',
					link: 'https://www.bitcoin-studio.com/workshops',
					description: '1-day workshops'
				},
				{
					title: 'Learn Me A Bitcoin',
					link: 'http://learnmeabitcoin.com/workshops/',
					description: '1-day workshop'
				},
				{
					title: 'Smart Custody',
					link: 'https://www.smartcustody.com/',
					description: '1-day workshop'
				},
				{
					title: 'Teach Bitcoin',
					link: 'https://teachbitcoin.io/',
					description: '4-week course (10h/week) online'
				},
				{
					title: 'The Bitcoin Standard Academy',
					link: 'https://saifedean.com/academy/',
					description: '10-week course online'
				},
				{
					title: 'Towards Liberty',
					link: 'http://towardsliberty.com/',
					description: 'Bitcoin mentorship'
				}
			],

			websites: [
				{
					title: 'BIPs',
					link: 'https://bips.xyz/',
					description: 'Explorer for BIPs. View, search and share easily BIPs'
				},
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
					description: ''
				},
				{
					title: 'Checkpoint Bitcoin',
					link: 'https://checkpointbitcoin.it/',
					description: 'Blog italiano specializzato su Bitcoin'
				},
				{
					title: 'Checkpoint Bitcoin',
					link: 'https://bitcoin-translate.it/',
					description: ' Bitcoin in italiano dalla genesi ad oggi '
				},
				{
					title: 'Bitcoin Italia Podcast',
					link: 'https://bitcoinitaliapodcast.it/',
					description: ' Bitcoin in italiano dalla genesi ad oggi '
				},
				{
					title: 'Bitcoin Briefly',
					link: 'https://bitcoinbriefly.com/',
					description: 'Brief Bitcoin Explanations'
				},
				{
					title: 'Bitcoin Designed',
					link: 'https://www.bitcoindesigned.com/',
					description: 'Striking Bitcoin infographics'
				},
				{
					title: 'Bitcoin Design Guide',
					link: 'https://bitcoin.design/guide/',
					description: 'A bitcoin application design guide'
				},
				{
					title: 'Bitcoin Q & A',
					link: 'https://bitcoiner.guide/qna/',
					description: 'Extensive questions & answers'
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
					title: 'Bitcoin.org',
					link: 'https://bitcoin.org/',
					description: 'Bitcoin information'
				},
				{
					title: 'Bitcoin-Intro',
					link: 'https://bitcoin-intro.com/',
					description: 'Step by Step bitcoin onboarding guide'
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
				}
			],

			advancedReading: [
				{
					title: 'Bitcoin Questions',
					link: 'https://github.com/bokobza/bitcoin-interview-questions',
					description: 'Technical Bitcoin questions'
				},
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
