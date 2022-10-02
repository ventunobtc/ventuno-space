<template>
	<div id="wallets-page">

		<h1 class="page-title">Wallets</h1>

		<div class="getting-started-section">
			<h3>Come iniziare</h3>
			<ul>
				<li>Leggere questa pagina e i link condivisi</li>
				<li>Scaricare i seguenti wallet solo per fare pratica :</li>
				<ul>
					<li>Desktop: <a href="https://electrum.org/#home" target="_blank">Electrum</a> su testnet</li>
					<li>Mobile: <a href="https://bluewallet.io/" target="_blank">Blue Wallet</a></li>
					<li>Lightning: <a href="https://muun.com/" target="_blank">Muun Wallet</a></li>
				</ul>
			</ul>
		</div>

		<p>È molto importante che impariate a fare il backup del vostro seed mnemonico (12 o 24 parole) e che, se usate una passphrase, facciate il backup anche di quella.
		  Leggete <a href="https://bitcoin-intro.com/en/backup" target="_blank">questo documento</a> per saperne di più sul backup del vostro wallet e consultate la pagina sulla <nuxt-link to="/privacy">privacy</nuxt-link>.</p>
		<p>Qui <a href="https://veriphi.io/en/blog/software-wallet-analysis" target="_blank">un confronto</a> delle caratteristiche di molti dei wallet elencati di seguito.</p>

		<h3>On-Chain Wallets
			<div class="tbl-index">Indice
				<a v-on:click="tab1(1)">[generali]</a>
				<a v-on:click="tab2(1)">[tx]</a>
				<a v-on:click="tab3(1)">[seed]</a>
				<a v-on:click="tab4()">[avanzate]</a>
			</div>
		</h3>
		
		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<template v-if="condition_onchain === 'A'">
						<div class="tbl-title">Riproducibile</div>
						<div class="tbl-title">CoinControl</div>
						<div class="tbl-title">FeeControl</div>
						<div class="tbl-title">Bech32</div>
						<div class="tbl-title">API</div>
						<div class="tbl-title">Tor</div>
						<div class="tbl-title">Testnet</div>
						<div class="tbl-title">
							<div class="left">Piattaforma</div>
						</div>
					</template>
					<template v-else-if="condition_onchain === 'B'">
						<div class="tbl-title">Multisig</div>
						<div class="tbl-title">Taproot</div>
						<div class="tbl-title">CoinJoin</div>
						<div class="tbl-title">Payjoin</div>
						<div class="tbl-title">Batching</div>
						<div class="tbl-title">RBF</div>
						<div class="tbl-title">CPFP</div>
						<div class="tbl-title">PSBT</div>
					</template>
					<template v-else-if="condition_onchain === 'C'">
						<div class="tbl-title">Passphrase</div>
						<div class="tbl-title">BIP-32</div>
						<div class="tbl-title">BIP-39</div>
						<div class="tbl-title">BIP-44</div>
						<div class="tbl-title">BIP-47</div>
						<div class="tbl-title">BIP-49</div>
						<div class="tbl-title">BIP-85</div>
					</template>
					<template v-else-if="condition_onchain === 'D'">
						<div class="tbl-title">RAW tx</div>
						<div class="tbl-title">Signing Messages</div>
						<div class="tbl-title">SPV</div>
						<div class="tbl-title">Connessione nodo</div>
						<div class="tbl-title">Connessione hardware</div>
						<div class="tbl-title">Miniscript</div>
					</template>
				</div>
				<div v-for="(wallet, index) in onChainWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>

					<template v-if="condition_onchain === 'A'">
						<!-- Riproducibile -->
						<div v-if="wallet.riproducibile"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Coincontrol -->
						<div v-if="wallet.coincontrol"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Feecontrol -->
						<div v-if="wallet.feecontrol"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Bech32 -->
						<div v-if="wallet.bech32"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- API -->
						<div v-if="wallet.api"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Tor -->
						<div v-if="wallet.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Testnet -->
						<div v-if="wallet.testnet"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Platform -->
						<div class="left" v-html="wallet.platform"></div>
					</template>
					<template v-else-if="condition_onchain === 'B'">
						<!-- Multisig -->
						<div v-if="wallet.multisig"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Taproot -->
						<div v-if="wallet.taproot"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Coinjoin -->
						<div v-if="wallet.coinjoin"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- Payjoin -->
						<div v-if="wallet.payjoin"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- Baching -->
						<div v-if="wallet.batching"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- RBF -->
						<div v-if="wallet.rbf"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- CPFP -->
						<div v-if="wallet.cpfp"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- PSBT -->
						<div v-if="wallet.psbt"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					</template>
					<template v-else-if="condition_onchain === 'C'">
						<!-- Passphrase -->
						<div v-if="wallet.passphrase"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP32 -->
						<div v-if="wallet.bip32"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP39 -->
						<div v-if="wallet.bip39"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP44 -->
						<div v-if="wallet.bip44"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- BIP47 -->
						<div v-if="wallet.bip47"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP49 -->
						<div v-if="wallet.bip49"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BIP85 -->
						<div v-if="wallet.bip85"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					</template>
					<template v-else-if="condition_onchain === 'D'">
						<!-- RAW tx -->
						<div v-if="wallet.signing"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Signing Messages -->
						<div v-if="wallet.signing"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- SPV -->
						<div v-if="wallet.spv"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Connessione nodo -->
						<div v-if="wallet.nodo"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Connesione hardware -->
						<div v-if="wallet.hardware"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Miniscript -->
						<div v-if="wallet.miniscript"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					</template>
				</div>
			</div>
		</div>

		<h3>Lightning Wallets
			<div class="tbl-index">Indice
				<a v-on:click="tab1(2)">[generali]</a>
				<a v-on:click="tab2(2)">[canali]</a>
				<a v-on:click="tab3(2)">[avanzate]</a>
			</div>
		</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<template v-if="condition_lightning === 'A'">
						<div class="tbl-title">Riproducibile</div>
						<div class="tbl-title">Swap</div>
						<div class="tbl-title">Taproot</div>
						<div class="tbl-title">AMP</div>
						<div class="tbl-title">BTCPay</div>
						<div class="tbl-title">API</div>
						<div class="tbl-title">Tor</div>
						<div class="tbl-title">Testnet</div>
						<div class="tbl-title">
							<div class="left">Piattaforma</div>
						</div>
					</template>
					<template v-if="condition_lightning === 'B'">
						<div class="tbl-title">Gestione</div>
						<div class="tbl-title">Pubblici</div>
						<div class="tbl-title">Privati</div>
						<div class="tbl-title">Anchor</div>
						<div class="tbl-title">Wumbo</div>
						<div class="tbl-title">Turbo</div>
						<div class="tbl-title">Factories</div>
						<div class="tbl-title">Trampoline payments</div>
					</template>
					<template v-if="condition_lightning === 'C'">
						<div class="tbl-title">LNURL-p</div>
						<div class="tbl-title">LNURL-w</div>
						<div class="tbl-title">Bolt12</div>
						<div class="tbl-title">URI Scheme</div>
						<div class="tbl-title">Submarine swap</div>
						<div class="tbl-title">Connessione nodo</div>
					</template>
				</div>
				<div v-for="(wallet, index) in lightningWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					
					<template v-if="condition_lightning === 'A'">
						<!-- Riproducibile -->
						<div v-if="wallet.riproducibile"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Swap -->
						<div v-if="wallet.swap"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- Taproot -->
						<div v-if="wallet.taproot"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- AMP -->
						<div v-if="wallet.amp"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- BTCPay -->
						<div v-if="wallet.btcpay"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- API -->
						<div v-if="wallet.api"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Tor -->
						<div v-if="wallet.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Testnet -->
						<div v-if="wallet.testnet"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Platform -->
						<div class="left" v-html="wallet.platform"></div>
					</template>
					<template v-if="condition_lightning === 'B'">
						<!-- canali -->
						<div v-if="wallet.canali"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Canali pubblici -->
						<div v-if="wallet.public"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Canali privati -->
						<div v-if="wallet.private"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Anchor channel -->
						<div v-if="wallet.anchor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Wumbo channel -->
						<div v-if="wallet.wumbo"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Turbo channel -->
						<div v-if="wallet.turbo"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Channel factories -->
						<div v-if="wallet.factories"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Trampoline payments -->
						<div v-if="wallet.trampoline"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					</template>
					<template v-if="condition_lightning === 'C'">
						<!-- LNURL-p -->
						<div v-if="wallet.lnurl"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- LNURL-w -->
						<div v-if="wallet.lnurl"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
						<!-- Bolt12 -->
						<div v-if="wallet.bolt12"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- URI Scheme-->
						<div v-if="wallet.uri"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Submarine swap -->
						<div v-if="wallet.submarine"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
						<!-- Connessione nodo -->
						<div v-if="wallet.nodo"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
						<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					</template>
				</div>
			</div>
		</div>

		<h3>Custodial Accounts</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">
						<div class="left">Progetto</div>
					</div>
					<div class="tbl-title">
						<div class="left">Descrizione</div>
					</div>
					<div class="tbl-title">
						<div class="left">Piattaforma</div>
					</div>
				</div>
				<div v-for="(wallet, index) in custodialAccounts" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div class="left" v-html="wallet.description"></div>
					<div class="left">{{ wallet.platform }}</div>
				</div>
			</div>
		</div>

		<h3>Metodi di storage avanzati</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">
						<div class="left">Progetto</div>
					</div>
					<div class="tbl-title">
						<div class="left">Dev</div>
					</div>
					<div class="tbl-title">
						<div class="left">Descrizione</div>
					</div>
				</div>
				<div v-for="(wallet, index) in advancedStorageMethods" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div class="left">
						<template v-for="(dev, devIndex) in wallet.devs">
							<a :key="devIndex" :href="dev.link" target="_blank">{{ dev.name }}</a><span v-if="devIndex + 1 < wallet.devs.length" :key="devIndex">, </span>
						</template>
					</div>
					<div class="left" v-html="wallet.description"></div>
				</div>
			</div>
		</div>

		<div class="footnotes">
			<p><sup>[0]</sup>I backup di Google Drive consentono alle aziende di accedere al tuo indirizzo e-mail, nome e immagine profilo di Google. Si consiglia vivamente di utilizzare un account Google separato per utilizzare queste applicazioni.</p>
			<p><sup>[1]</sup>Il wallet Lightning è custodial di default, ma gli utenti possono scegliere di collegare la propria applicazione al proprio nodo Lightning utilizzando LNDhub. Il wallet on-chain non è custodial.</p>
			<p><sup>[2]</sup>Questo wallet integra uno scambio KYC per acquistare bitcoin. Si sconsiglia di utilizzare gli exchange KYC a causa dei <a href="https://bitcoinqna.github.io/noKYConly1/" target="_blank">rischi</a>.</p>
		</div>
	</div>
</template>

<style lang="scss">

#wallets-page sup {
	color: #f2ad4f;
	margin-left: 5px;
	font-size: 12px;
	top: 2px;
	position: relative;
}

</style>

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
#wallets-page .footnotes {
	margin-top: 40px;

	sup {
		margin-left: 0;
		margin-right: 6px;
		top: 4px;
		font-size: 14px;
	}
}
</style>

<script>
export default {
    name: "WalletsPage",
    head: {
        title: "Wallets - Bitcoin Only",
        meta: [
            { hid: "description", name: "description", content: "A collection Bitcoin only wallets." }
        ]
    },
	methods: {
		tab1(int) {
			if (int === 1)
				this.condition_onchain = "A"
			else
				this.condition_lightning = "A"
        },
        tab2(int) {
			if (int === 1)
				this.condition_onchain = "B"
			else
				this.condition_lightning = "B"
		},
		tab3(int) {
			if (int === 1)
				this.condition_onchain = "C"
			else
				this.condition_lightning = "C"
		},
		tab4() {
			this.condition_onchain = "D"
		},		
	},
    data() {
        return {
            condition_onchain: "A",
			condition_lightning: "A",

            onChainWallets: [
                {
                    title: "Bitcoin Core",
                    link: "https://bitcoincore.org/",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop"
                },
                {
                    title: "Blockstream Green",
                    link: "https://blockstream.com/green/",
                    bech32: false,
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android, Desktop"
                },
                {
                    title: "Blue Wallet",
                    link: "https://bluewallet.io/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android, MacOS<sup>[1]</sup>,<sup>[2]</sup>"
                },
                {
                    title: "Caravan",
                    link: "https://unchained-capital.github.io/caravan/#/",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop"
                },
                {
                    title: "Electrum",
                    link: "https://electrum.org/#home",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop, Android"
                },
                {
                    title: "Fully Noded",
                    link: "https://fonta1n3.github.io/FullyNoded/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS"
                },
                {
                    title: "Hexa Wallet",
                    link: "https://hexawallet.io/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android<sup>[2]</sup>"
                },
                {
                    title: "Lily Wallet",
                    link: "https://lily.kevinmulcrone.com/",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop"
                },
                {
                    title: "Muun Wallet",
                    link: "https://muun.com/",
                    coincontrol: false,
                    coinjoin: false,
                    bech32: true,
                    rbf: true,
                    multisig: false,
                    tor: false,
                    bip47: false,
                    platform: "iOS, Android"
                },
                {
                    title: "Samourai Wallet",
                    link: "https://samouraiwallet.com/",
                    coincontrol: true,
                    coinjoin: true,
                    bech32: true,
                    rbf: false,
                    multisig: false,
                    tor: true,
                    bip47: true,
                    platform: "Android"
                },
                {
                    title: "SBW",
                    link: "https://sbw.app/",
                    // Aggiungere caratteristiche wallet
                    platform: "Android"
                },
                {
                    title: "Sparrow Wallet",
                    link: "https://www.sparrowwallet.com/",
                    coincontrol: true,
                    coinjoin: true,
                    bech32: true,
                    rbf: false,
                    multisig: true,
                    tor: true,
                    bip47: true,
                    platform: "Desktop"
                },
                {
                    title: "Specter",
                    link: "https://github.com/cryptoadvance/specter-desktop",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop"
                },
            ],
            lightningWallets: [
                {
                    title: "Blixt Wallet",
                    link: "https://blixtwallet.github.io/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android (Beta)"
                },
                {
                    title: "Breez",
                    link: "https://breez.technology/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android (Beta)<sup>[0]</sup>"
                },
                {
                    title: "Eclair",
                    link: "https://github.com/ACINQ/eclair",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop"
                },
                {
                    title: "Eclair Mobile",
                    link: "https://github.com/ACINQ/eclair-mobile",
                    // Aggiungere caratteristiche wallet
                    platform: "Android"
                },
                {
                    title: "Electrum",
                    link: "https://electrum.org/#home",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop"
                },
                {
                    title: "Muun Wallet",
                    link: "https://muun.com/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android"
                },
                {
                    title: "Phoenix",
                    link: "https://phoenix.acinq.co/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android"
                },
                {
                    title: "Ride The Lightning",
                    link: "https://github.com/Ride-The-Lightning/RTL",
                    // Aggiungere caratteristiche wallet
                    platform: "Web"
                },
                {
                    title: "Sats App",
                    link: "https://satsapp.com/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android (Beta)"
                },
                {
                    title: "SBW",
                    link: "https://sbw.app/",
                    // Aggiungere caratteristiche wallet
                    platform: "Android"
                },
                {
                    title: "Thunderhub",
                    link: "https://thunderhub.io",
                    // Aggiungere caratteristiche wallet
                    platform: "Web"
                },
                {
                    title: "Zap",
                    link: "https://zap.jackmallers.com/",
                    // Aggiungere caratteristiche wallet
                    platform: "Desktop, iOS, Android"
                },
                {
                    title: "Zeus",
                    link: "https://zeusln.app/",
                    // Aggiungere caratteristiche wallet
                    platform: "iOS, Android"
                }
            ],
            custodialAccounts: [
                {
                    title: "Blue Wallet",
                    link: "https://bluewallet.io/",
                    description: "Bitcoin & Lightning wallet<sup>[1]</sup>",
                    platform: "Desktop, iOS, Android"
                },
                {
                    title: "Bottlepay",
                    link: "https://bottlepay.com/",
                    description: "Lightning Social Tipping",
                    platform: "Web"
                },
                {
                    title: "Opennode",
                    link: "https://opennode.co/",
                    description: "Accept Bitcoin & Lightning payments",
                    platform: "Web"
                },
                {
                    title: "Tippin.me",
                    link: "https://tippin.me/",
                    description: "Lightning Social Tipping",
                    platform: "Web"
                },
                {
                    title: "Wallet of Satoshi",
                    link: "https://www.walletofsatoshi.com/",
                    description: "Lightning only wallet",
                    platform: "iOS, Android"
                }
            ],
            advancedStorageMethods: [
                {
                    title: "10x Security Bitcoin Guide",
                    link: "https://btcguide.github.io/",
                    description: "Conservare bitcoin da maniaci",
                    devs: [
                        {
                            name: "Michael Flaxman",
                            link: "https://twitter.com/mflaxman/"
                        }
                    ]
                },
                {
                    title: "Gentle Introduction to Cold Storage",
                    link: "https://bitzuma.com/posts/a-gentle-introduction-to-bitcoin-cold-storage/",
                    description: "Short explanation of hot wallet risk",
                    devs: [
                        {
                            name: "Rich Apodaca",
                            link: "https://twitter.com/bitzuma"
                        }
                    ]
                },
                {
                    title: "Glacier Protocol",
                    link: "https://glacierprotocol.org/",
                    description: "[OLD] Protocollo cold storage",
                    devs: [
                        {
                            name: "Glacier Protocol",
                            link: "https://twitter.com/glacierprotocol"
                        }
                    ]
                },
                {
                    title: "Hodl Guides",
                    link: "https://github.com/DriftwoodPalace/guides",
                    description: "[OLD] Guide per cold storage",
                    devs: [
                        {
                            name: "Driftwood Palace",
                            link: "https://twitter.com/DriftwoodPalace"
                        }
                    ]
                },
                {
                    title: "Rusty's Bitcoin Storage Guide",
                    link: "https://github.com/rustyrussell/bitcoin-storage-guide",
                    description: "[OLD] Guida per cold storage",
                    devs: [
                        {
                            name: "Rusty Russell",
                            link: "https://mobile.twitter.com/rusty_twit/status/644559490646278144"
                        }
                    ]
                },
                {
                    title: "Smart Custody",
                    link: "https://github.com/BlockchainCommons/SmartCustodyWhitePapers/blob/master/#SmartCustody-_Simple_Self-Custody_Cold_Storage_Scenario.md",
                    description: "[OLD] Best practices per cold storage",
                    devs: [
                        {
                            name: "C. Allen",
                            link: "https://twitter.com/christophera"
                        },
                        {
                            name: "S. Appelcline",
                            link: "https://twitter.com/Appelcline"
                        },
                    ]
                }
            ],
        };
    },
}
</script>
