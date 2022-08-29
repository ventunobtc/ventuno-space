<template>
	<div id="explorers-dashboards-page">

		<h1 class="page-title">Sviluppo</h1>

		<div class="getting-started-section">

			<h3>Come Iniziare</h3>

			<p>'Bitcoin Dalla Teoria alla pratica' di Alessio Barnini e Alessandro Aglietti (<a href="https://www.amazon.it/Bitcoin-Dalla-teoria-alla-pratica/dp/B07SNNNL2P" target="_blank">Copia fisica</a> | <a href="https://github.com/bitcoin-dalla-teoria-alla-pratica" target="_blank">GitHub</a>).</p>

			<p>La maggior parte delle risorse sullo Sviluppo sono in lingua inglese</p>

		</div>

		<h3>Backend Tools</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in backendTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Risorse Didattiche</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(lineItem, index) in learningResources" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		
	</div>
</template>

<style lang="scss">
#explorers-dashboards-page .tbl-row > div a {
	color: #fff;

	&:hover {
		color: #f2ad4f;
	}
}
</style>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
</style>

<script>
export default {

	name: 'DevToolsPage',

	head: {
		title: 'Dev Tools - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection Bitcoin developer tools.' }
		]
	},

	data() {
		return {

			backendTools: [
				{
					title: 'Bitcoin Forge',
					link: 'https://improvein.github.io/bitcoin-forge/',
					description: 'Kit di strumenti per la manipolazione di TXs, & addresses',
				},
				{
					title: 'Bitcoin Playground',
					link: 'https://nioctib.tech/',
					description: 'Esplora i dati delle transazioni raw'
				},
				{
					title: 'bitcoin-s',
					link: 'https://github.com/bitcoin-s/bitcoin-s',
					description: 'Libreria Bitcoin in Scala '
				},
				{
					title: 'Bitcoin Dev Kit',
					link: 'https://bitcoindevkit.org/',
					description: 'Strumenti e librerie Bitcoin in Rust'
				},
				{
					title: 'Bitcoin Spring Boot Starter',
					link: 'https://github.com/theborakompanioni/bitcoin-spring-boot-starter',
					description: 'Spring Boot Starter for Bitcoin [Experimental]'
				},
				{
					title: 'Braiins OS',
					link: 'https://braiins-os.org/',
					description: 'Open source mining software'
				},
				{
					title: 'CoinBin',
					link: 'https://coinb.in/',
					description: 'Web wallet per imparare'
				},
				{
					title: 'CypherNode',
					link: 'https://cyphernode.io/',
					description: 'API server'
				},
				{
					title: 'Dojo',
					link: 'https://github.com/Samourai-Wallet/samourai-dojo',
					description: 'End-to-end Bitcoin Wallet backing server'
				},
				{
					title: 'Embit',
					link: 'https://embit.rocks/#/',
					description: 'Bitcoin lib per Python3 o MicroPython'
				},
				{
					title: 'LibreTX',
					link: 'https://github.com/coinsurenz/LibreTX',
					description: 'Crea transazioni Bitcoin per imparare'
				},
				{
					title: 'LNdash',
					link: 'https://github.com/djmelik/lndash',
					description: 'Semplice web dashboard per LND'
				},
				{
					title: 'LNtop',
					link: 'https://github.com/edouardparis/lntop',
					description: 'Gestione canali Lightning Network'
				},
				{
					title: 'Mule Tools',
					link: 'https://github.com/MuleTools/MuleTools',
					description: 'Bitcoin transaction broadcasting'
				},
				{
					title: 'Node Launcher',
					link: 'https://github.com/PierreRochard/node-launcher',
					description: 'Easy Launch Core & LND'
				},
				{
					title: 'Python Bitcoinlib',
					link: 'https://github.com/petertodd/python-bitcoinlib',
					description: 'Libreria Bitcoin in Python'
				},
				{
					title: 'WebLN',
					link: 'https://github.com/wbobeirne/webln',
					description: 'Comunicare con LN node via browser'
				}
			],
			learningResources: [
				{
					title: 'Bitcoin Dev Network',
					link: 'https://bitcoindev.network/',
					description: 'Tutorials per aspirare a Bitcoin devs'
				},
				{
					title: 'BitcoinJS & Core CLI',
					link: 'https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS',
					description: 'Guida su Bitcoin in Javascript'
				},
				{
					title: 'Bitcoin Reader',
					link: 'http://srv1.yogh.io/',
					description: 'Impara Bitcoin Script (<a href="https://github.com/yogh-io/bitcoin-transaction-explorer" target="_blank">GitHub</a>)'
				},
				{
					title: 'Command Line Bitcoin',
					link: 'https://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-Line',
					description: 'Impara Bitcoin dalla riga di comando'
				},
				{
					title: 'Lightning Hood',
					link: 'https://lightninghood.com/',
					description: 'Informazioni / Risorse'
				},
				{
					title: 'Mastering Bitcoin',
					link: 'https://github.com/bitcoinbook/bitcoinbook',
					description: 'Come funziona Bitcoin - alto livello (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Hardcopy</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)'
				},
				{
					title: 'Programming Bitcoin',
					link: 'https://github.com/jimmysong/programmingbitcoin',
					description: 'Come funziona Bitcoin - livello tecnico (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Hardcopy</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)'
				},
				{
					title: 'Programming the Blockchain in C#',
					link: 'https://programmingblockchain.gitbook.io/programmingblockchain/',
					description: 'Guida a Bitcoin in C#'
				},
				{
					title: 'Script Explorer',
					link: 'https://paulkernfeld.com/bse/',
					description: 'Impara Bitcoin script (<a href="https://github.com/paulkernfeld/bitcoin-script-explorer" target="_blank">GitHub</a>)'
				}
			],
			
		}
	}

}
</script>
