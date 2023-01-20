<template>
	<div id="hardware-page">

		<h1 class="page-title">Hardware</h1>

		<div class="getting-started-section">

			<h3>Come iniziare</h3>

			<ul>
				<li> Per il nodo scarica e utilizza <a href="https://umbrel.com/" target="_blank">Umbrel</a>
				<li> Per mettere al sicuro i tuoi bitcoin compra <a href="https://blockstream.com/jade/" target="_blank">Jade</a></li>
			</ul>

		</div>

		<h3>Nodi: Plug & Play</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
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

		<h3>Nodi: DIY</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
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
					<div class="tbl-title">Progetto</div>
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

		<h3>Altri Hardware</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">
						<div class="left">Descrizione</div>
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
		title: 'Hardware - Ventuno',
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
					// Aggiungere caratteristiche
				},
				{
					title: 'Nodl',
					link: 'https://www.nodl.it/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Nodl Samourai',
					link: 'https://shop.nodl.it/en/home/38-nodl-samourai-edition.html',
					// Aggiungere caratteristiche
				},
				{
					title: 'Raspiblitz',
					link: 'https://raspiblitz.com/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Start 9 Labs Embassy',
					link: 'https://start9labs.com/',
					// Aggiungere caratteristiche
				}
			],
			nodeDiy: [
				{
					title: 'Bitcoin Core',
					link: 'https://bitcoin.org/',
					// Aggiungere caratteristiche
				},
				{
					title: 'MyNode',
					link: 'http://mynodebtc.com/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Node Launcher',
					link: 'https://github.com/PierreRochard/node-launcher',
					// Aggiungere caratteristiche
				},
				{
					title: 'Samourai DOJO',
					link: 'https://bitcoin-on-raspberry-pi-4.gitbook.io/',
					// Aggiungere caratteristiche
				},
				{
					title: 'RaspiBolt',
					link: 'https://raspibolt.org/',
					// Aggiungere caratteristiche
				},
				{
					title: 'RoninDojo',
					link: 'https://wiki.ronindojo.io/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Start9 Embassy',
					link: 'https://docs.start9labs.com/getting-started/diy.html',
					// Aggiungere caratteristiche
				},
				{
					title: 'The Bitcoin Machines',
					link: 'https://thebitcoinmachines.com/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Thundroid',
					link: 'https://magazine.odroid.com/article/thundroid-perfect-bitcoin-lightning-node/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Umbrel',
					link: 'https://getumbrel.com/',
					// Aggiungere caratteristiche				
				},
				{
					title: 'Citadel',
					link: 'https://runcitadel.space/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Other DIY Bitcoin Hardware',
					link: 'https://diybitcoinhardware.com/',
					// Aggiungere caratteristiche
				}
			],
			hardwareWallet: [
				{
					title: 'Coldcard',
					link: 'https://coldcardwallet.com/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Jade',
					link: 'https://blockstream.com/jade/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Passport',
					link: 'https://foundationdevices.com/',
					// Aggiungere caratteristiche
				},
				{
					title: 'Specter DIY',
					link: 'https://github.com/cryptoadvance/specter-diy',
					// Aggiungere caratteristiche
				}
			],
			otherHardware: [
				{
					title: 'Smartino',
					link: 'https://github.com/smartm0use/smartino',
					description: 'Bitcoin Core on Android'
				},
				{
					title: 'NodeBox',
					link: 'https://bitcoin-translate.it/docs/NodeBox-HOW-TO.pdf',
					description: 'Guida in italiano alla realizzazione di un full node bitcoin'
				},
				{
					title: 'Bitpiggys',
					link: 'https://www.bitpiggys.com/',
					description: 'Piggybank + Opendime'
				},
				{
					title: 'Blockclock',
					link: 'https://getblockclock.com/',
					description: 'Interfaccia Bitcoin elettromeccanica'
				},
				{
					title: 'Blockclock Mini',
					link: 'https://blockclockmini.com/',
					description: 'Interfaccia Bitcoin digitale'
				},
				{
					title: 'Coldbit',
					link: 'https://coldbit.com/',
					description: 'Backup fisico in acciaio del seed'
				},
				{
					title: 'Hodlinox',
					link: 'https://hodlinox.com/',
					description: 'Backup fisico in acciaio del seed'
				},
				{
					title: 'Opendime',
					link: 'https://opendime.com/',
					description: 'Chiavetta USB che permette di spendere Bitcoin come una banconota da un dollaro'
				},
				{
					title: 'Seed Signer',
					link: 'https://github.com/SeedSigner/seedsigner',
					description: 'Dispositivo di firma airgapped'
				}
			]

		}
	}

}
</script>
