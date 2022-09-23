<template>
	<div id="hardware-page">

		<h1 class="page-title">Hardware</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<ul>
				<li> Samourai Wallet users: Buy a <a href="https://shop.nodl.it/en/home/38-nodl-samourai-edition.html" target="_blank">Nodl Samourai Edition</a>
				<li> Blue Wallet users: Buy a <a href="http://mynodebtc.com/products/one" target="_blank">MyNode</a>
				<li> Secure your bitcoin: Buy a <a href="https://coldcardwallet.com/" target="_blank">Coldcard</a> hardware wallet</li>
			</ul>

		</div>

		<h3>Node: Buy (Plug & Play)</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Onchain</div>
					<div class="tbl-title">Lightning</div>
					<div class="tbl-title">FOSH</div>
					<div class="tbl-title">Tor</div>
					<div class="tbl-title">API</div>
					<div class="tbl-title">Semplicità</div>
					<div class="tbl-title">Costo</div>
					<div class="tbl-title">Piattaforma</div>
				</div>
				<div v-for="(project, index) in nodeBuyPlugPlay" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<!-- Onchain -->
					<div v-if="project.onchain"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Lightining -->
					<div v-if="project.lightning"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- FOSH -->
					<div v-if="project.fosh"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Tor -->
					<div v-if="project.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- API -->
					<div v-if="project.api"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Semplicità -->
					<div v-html="project.semplicità"></div>
					<!-- Costo -->
					<div v-html="project.costo"></div>
					<!-- Piattaforma -->
					<div v-html="project.piattaforma"></div>
				</div>
			</div>
		</div>

		<h3>Node: DIY</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Onchain</div>
					<div class="tbl-title">Lightning</div>
					<div class="tbl-title">FOSH</div>
					<div class="tbl-title">Tor</div>
					<div class="tbl-title">API</div>
					<div class="tbl-title">Semplicità</div>
					<div class="tbl-title">Costo</div>
					<div class="tbl-title">Piattaforma</div>
				</div>
				<div v-for="(project, index) in nodeDiy" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<!-- Onchain -->
					<div v-if="project.onchain"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Lightining -->
					<div v-if="project.lightning"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- FOSH -->
					<div v-if="project.fosh"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Tor -->
					<div v-if="project.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- API -->
					<div v-if="project.api"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Semplicità -->
					<div v-html="project.semplicità"></div>
					<!-- Costo -->
					<div v-html="project.costo"></div>
					<!-- Piattaforma -->
					<div v-html="project.piattaforma"></div>
				</div>
			</div>
		</div>

		<h3>Hardware Wallet
			<div class="tbl-index">Indice
				<a v-on:click="tab1()">[generali]</a>
				<a v-on:click="tab2()">[seed]</a>
			</div>
		</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<template v-if="condition_hardwarewallet === 'A'">
						<div class="tbl-title">Lightning</div>
						<div class="tbl-title">FOSH</div>
						<div class="tbl-title">Riproducibile</div>
						<div class="tbl-title">Testnet</div>
						<div class="tbl-title">Comunicazione</div>
						<div class="tbl-title">Secure Element</div>
						<div class="tbl-title">Costo</div>
					</template>
					<template v-if="condition_hardwarewallet === 'B'">
						<div class="tbl-title">Multisig</div>
						<div class="tbl-title">Passphrase</div>
						<div class="tbl-title">BIP-32</div>
						<div class="tbl-title">BIP-39</div>
						<div class="tbl-title">BIP-44</div>
						<div class="tbl-title">BIP-47</div>
						<div class="tbl-title">BIP-49</div>
						<div class="tbl-title">BIP-85</div>
					</template>
				</div>
				<div v-for="(project, index) in hardwareWallet" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<template v-if="condition_hardwarewallet === 'A'">
						<!-- Lightining -->
						<div v-if="project.lightning"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- FOSH -->
						<div v-if="project.fosh"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Riproducibile -->
						<div v-if="project.riproducibile"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Testnet -->
						<div v-if="project.testnet"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Comunicazione -->
						<div v-html="project.comunicazione"></div>
						<!-- Secure Element -->
						<div v-html="project.secure"></div>
						<!-- Costo -->
						<div v-html="project.costo"></div>
					</template>
						<template v-if="condition_hardwarewallet === 'B'">
						<!-- Multisig -->
						<div v-if="project.multisig"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Passphrase -->
						<div v-if="project.passphrase"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP32 -->
						<div v-if="project.bip32"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP39 -->
						<div v-if="project.bip39"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP44 -->
						<div v-if="project.bip44"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- BIP47 -->
						<div v-if="project.bip47"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP49 -->
						<div v-if="project.bip49"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP85 -->
						<div v-if="project.bip85"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					</template>
				</div>
			</div>
		</div>

		<h3>Other Hardware</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">
						<div class="left">Description</div>
					</div>
				</div>
				<div v-for="(project, index) in otherHardware" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<div class="left">{{ project.description }}</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	.tbl-index {
		font-size: 14px;
		color: #fff;
	}
}
.tbl-wrapper {
	max-width: 1000px;
}
.tbl-header {
	text-align: center;
	.left {
		text-align: left;
	}	
}
.tbl-row {
	text-align: center;
	.left {
		text-align: left;
	}
}
</style>

<script>
export default {

	name: 'HardwarePage',

	head: {
		title: 'Hardware - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin hardware.' }
		]
	},
	methods: {
		tab1() {
			this.condition_hardwarewallet = "A"
        },
        tab2() {
			this.condition_hardwarewallet = "B"
		},
	},

	data() {
		return {
			condition_hardwarewallet: "A",

			nodeBuyPlugPlay: [
				{
					title: 'MyNode',
					link: 'http://mynodebtc.com/products/one',
					//description: 'Full stack - low cost'
				},
				{
					title: 'Nodl',
					link: 'https://www.nodl.it/',
					//description: 'Full stack - feature rich'
				},
				{
					title: 'Nodl Samourai',
					link: 'https://shop.nodl.it/en/home/38-nodl-samourai-edition.html',
					//description: 'Full stack - RAID backups'
				},
				{
					title: 'Raspiblitz',
					link: 'https://raspiblitz.com/',
					//description: 'Full stack'
				},
				{
					title: 'Start 9 Labs Embassy',
					link: 'https://start9labs.com/',
					//description: 'Full stack'
				}
			],
			nodeDiy: [
				{
					title: 'Bitcoin Core',
					link: 'https://bitcoin.org/',
					//description: 'Install Bitcoin Core on your computer'
				},
				{
					title: 'MyNode',
					link: 'http://mynodebtc.com/',
					//description: 'Full stack (Rock64 / Pi3 / Pi4)'
				},
				{
					title: 'Node Launcher',
					link: 'https://github.com/PierreRochard/node-launcher',
					//description: 'UI to install full stack on Windows, macOS, & Linux'
				},
				{
					title: 'Samourai DOJO',
					link: 'https://bitcoin-on-raspberry-pi-4.gitbook.io/',
					//description: 'Full node with API (PC / Pi4)'
				},
				{
					title: 'RaspiBolt',
					link: 'https://raspibolt.org/',
					//description: 'Bitcoin & Lightning node, manual installation guide for Debian-based OS'
				},
				{
					title: 'RoninDojo',
					link: 'https://wiki.ronindojo.io/',
					//description: 'Full Stack (Rockpro 64 / Pi4 / Odroid N2)'
				},
				{
					title: 'Start9 Embassy',
					link: 'https://docs.start9labs.com/getting-started/diy.html',
					//description: 'Full Stack (Pi4)'
				},
				{
					title: 'The Bitcoin Machines',
					link: 'https://thebitcoinmachines.com/',
					//description: 'Custom made enclosure, heatsink, & SATA expansion'
				},
				{
					title: 'Thundroid',
					link: 'https://magazine.odroid.com/article/thundroid-perfect-bitcoin-lightning-node/',
					//description: 'Lightning Node (Odroid HC2)\n'
				},
				{
					title: 'Umbrel',
					link: 'https://getumbrel.com/',
					//description: 'Full Stack (Pi4)'
				},
				{
					title: 'Citadel',
					link: 'https://runcitadel.space/',
					//description: 'Full Stack (Pi4)'
				},
				{
					title: 'Other DIY Bitcoin Hardware',
					link: 'https://diybitcoinhardware.com/',
					//description: 'Other DIY hardware projects'
				}
			],
			hardwareWallet: [
				{
					title: 'Coldcard',
					link: 'https://coldcardwallet.com/',
					description: 'Cold storage hardware wallet'
				},
				{
					title: 'Jade',
					link: 'https://blockstream.com/jade/',
					description: 'Hardware wallet di Blockstream'
				},
				{
					title: 'Passport',
					link: 'https://foundationdevices.com/',
					description: 'Cold storage hardware wallet'
				},
				{
					title: 'Specter DIY',
					link: 'https://github.com/cryptoadvance/specter-diy',
					description: 'DIY cold storage hardware wallet'
				}
			],
			otherHardware: [
				{
					title: 'Bitpiggys',
					link: 'https://www.bitpiggys.com/',
					description: 'Piggybank + Opendime'
				},
				{
					title: 'Blockclock',
					link: 'https://getblockclock.com/',
					description: 'Electromechanical Bitcoin interface'
				},
				{
					title: 'Blockclock Mini',
					link: 'https://blockclockmini.com/',
					description: 'Digital Bitcoin interface'
				},
				{
					title: 'Coldbit',
					link: 'https://coldbit.com/',
					description: 'Bitcoin mnemonic seed backup'
				},
				{
					title: 'Hodlinox',
					link: 'https://hodlinox.com/',
					description: 'Bitcoin mnemonic seed backup'
				},
				{
					title: 'Opendime',
					link: 'https://opendime.com/',
					description: 'Bitcoin bearer bond'
				},
				{
					title: 'Seed Signer',
					link: 'https://github.com/SeedSigner/seedsigner',
					description: 'Offline, airgapped Bitcoin signing device'
				}
			]

		}
	}

}
</script>
