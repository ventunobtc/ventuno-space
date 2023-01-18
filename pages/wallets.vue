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
						<check-circle :attivo='wallet.riproducibile'></check-circle>
						<!-- Coincontrol -->
						<check-circle :attivo='wallet.coincontrol'></check-circle>
						<!-- Feecontrol -->
						<check-circle :attivo='wallet.feecontrol'></check-circle>
						<!-- Bech32 -->
						<check-circle :attivo='wallet.bech32'></check-circle>
						<!-- API -->
						<check-circle :attivo='wallet.api'></check-circle>
						<!-- Tor -->
						<check-circle :attivo='wallet.tor'></check-circle>
						<!-- Testnet -->
						<check-circle :attivo='wallet.testnet'></check-circle>
						<!-- Platform -->
						<div class="left" v-html="wallet.platform"></div>
					</template>
					<template v-else-if="condition_onchain === 'B'">
						<!-- Multisig -->
						<check-circle :attivo='wallet.multisig'></check-circle>
						<!-- Taproot -->
						<check-circle :attivo='wallet.taproot'></check-circle>
						<!-- Coinjoin -->
						<check-circle :attivo='wallet.coinjoin'></check-circle>
						<!-- Payjoin -->
						<check-circle :attivo='wallet.payjoin'></check-circle>
						<!-- Baching -->
						<check-circle :attivo='wallet.batching'></check-circle>
						<!-- RBF -->
						<check-circle :attivo='wallet.rbf'></check-circle>
						<!-- CPFP -->
						<check-circle :attivo='wallet.cpfp'></check-circle>
						<!-- PSBT -->
						<check-circle :attivo='wallet.psbt'></check-circle>
					</template>
					<template v-else-if="condition_onchain === 'C'">
						<!-- Passphrase -->
						<check-circle :attivo='wallet.passphrase'></check-circle>
						<!-- BIP32 -->
						<check-circle :attivo='wallet.bip32'></check-circle>
						<!-- BIP39 -->
						<check-circle :attivo='wallet.bip39'></check-circle>
						<!-- BIP44 -->
						<check-circle :attivo='wallet.bip44'></check-circle>
						<!-- BIP47 -->
						<check-circle :attivo='wallet.bip47'></check-circle>
						<!-- BIP49 -->
						<check-circle :attivo='wallet.bip49'></check-circle>
						<!-- BIP85 -->
						<check-circle :attivo='wallet.bip85'></check-circle>
					</template>
					<template v-else-if="condition_onchain === 'D'">
						<!-- RAW tx -->
						<check-circle :attivo='wallet.rawtx'></check-circle>
						<!-- Signing Messages -->
						<check-circle :attivo='wallet.signing'></check-circle>
						<!-- SPV -->
						<check-circle :attivo='wallet.spv'></check-circle>
						<!-- Connessione nodo -->
						<check-circle :attivo='wallet.nodo'></check-circle>
						<!-- Connesione hardware -->
						<check-circle :attivo='wallet.hardware'></check-circle>
						<!-- Miniscript -->
						<check-circle :attivo='wallet.miniscript'></check-circle>
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
						<check-circle :attivo='wallet.riproducibile'></check-circle>
						<!-- Swap -->
						<check-circle :attivo='wallet.swap'></check-circle>
						<!-- Taproot -->
						<check-circle :attivo='wallet.taproot'></check-circle>
						<!-- AMP -->
						<check-circle :attivo='wallet.amp'></check-circle>
						<!-- BTCPay -->
						<check-circle :attivo='wallet.btcpay'></check-circle>
						<!-- API -->
						<check-circle :attivo='wallet.api'></check-circle>
						<!-- Tor -->
						<check-circle :attivo='wallet.tor'></check-circle>
						<!-- Testnet -->
						<check-circle :attivo='wallet.testnet'></check-circle>
						<!-- Platform -->
						<div class="left" v-html="wallet.platform"></div>
					</template>
					<template v-if="condition_lightning === 'B'">
						<!-- canali -->
						<check-circle :attivo='wallet.canali'></check-circle>
						<!-- Canali pubblici -->
						<check-circle :attivo='wallet.public'></check-circle>
						<!-- Canali privati -->
						<check-circle :attivo='wallet.private'></check-circle>
						<!-- Anchor channel -->
						<check-circle :attivo='wallet.anchor'></check-circle>
						<!-- Wumbo channel -->
						<check-circle :attivo='wallet.wumbo'></check-circle>
						<!-- Turbo channel -->
						<check-circle :attivo='wallet.turbo'></check-circle>
						<!-- Channel factories -->
						<check-circle :attivo='wallet.factories'></check-circle>
						<!-- Trampoline payments -->
						<check-circle :attivo='wallet.trampoline'></check-circle>
					</template>
					<template v-if="condition_lightning === 'C'">
						<!-- LNURL-p -->
						<check-circle :attivo='wallet.lnurl'></check-circle>
						<!-- LNURL-w -->
						<check-circle :attivo='wallet.lnurl'></check-circle>
						<!-- Bolt12 -->
						<check-circle :attivo='wallet.bolt12'></check-circle>
						<!-- URI Scheme-->
						<check-circle :attivo='wallet.uri'></check-circle>
						<!-- Submarine swap -->
						<check-circle :attivo='wallet.submarine'></check-circle>
						<!-- Connessione nodo -->
						<check-circle :attivo='wallet.nodo'></check-circle>
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
import checkCircle from '../components/check-circle.vue'
export default {
  components: { checkCircle },
    name: "WalletsPage",
    head: {
        title: "Wallets - Ventuno",
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
                    platform: "Desktop",
					// riproducibile: true,
					riproducibile: true,
					coincontrol: 'https://bitcoincore.org/en/releases/0.18.0/',
					bech32: true,
					testnet: true,
					taproot: 'https://en.bitcoin.it/wiki/Bech32_adoption',
					rbf: 'https://bitcoincore.org/en/releases/0.12.0/#opt-in-replace-by-fee-transactions',
					bip32: 'https://bitcoincore.org/en/2016/08/23/release-0.13.0/',
					bip44: 'https://bitcoincore.org/en/releases/0.21.0/',
					bip49: 'https://bitcoincore.org/en/releases/0.21.0/',
					nodo: true,
					hardware: 'https://hwi.readthedocs.io/en/latest/examples/bitcoin-core-usage.html',
					miniscript: true,
                },
                {
                    title: "Blockstream Green",
                    link: "https://blockstream.com/green/",
					riproducibile: 'https://walletscrutiny.com/android/com.greenaddress.greenbits_android_wallet/',
					coincontrol: 'https://blog.blockstream.com/blockstream-green-coin-control/',
					feecontrol: 'https://blockstream.com/green/',
					bech32: true,
					passphrase: 'https://help.blockstream.com/hc/en-us/categories/900000056183-Blockstream-Green/',
					bip39: 'https://help.blockstream.com/hc/en-us/categories/900000056183-Blockstream-Green/',
                    platform: "iOS, Android, Desktop"
                },
                {
                    title: "Blue Wallet",
                    link: "https://bluewallet.io/",
					coincontrol: 'https://bluewallet.io/features/',
					feecontrol: 'https://bluewallet.io/features/',
					bech32: 'https://bluewallet.io/features/',
					rbf: true,
					psbt: 'https://bluewallet.io/features/',
					bip39: 'https://bluewallet.io/features/',
                    platform: "iOS, Android, MacOS<sup>[1]</sup>,<sup>[2]</sup>"
                },
                {
                    title: "Caravan",
                    link: "https://unchained-capital.github.io/caravan/#/",
					bech32: true,
                    platform: "Desktop"
                },
                {
                    title: "Electrum",
                    link: "https://electrum.org/#home",
					riproducibile: 'https://walletscrutiny.com/android/org.electrum.electrum/',
					coincontrol: 'https://bitcoinelectrum.com/how-to-spend-specific-utxos-in-electrum/',
					bech32: true,
					tor: 'https://electrum.readthedocs.io/en/latest/tor.html',
					coinjoin: false,
                    platform: "Desktop, Android"
                },
                {
                    title: "Fully Noded",
                    link: "https://fonta1n3.github.io/FullyNoded/",
					bech32: true,
					taproot: 'https://en.bitcoin.it/wiki/Bech32_adoption',
                    platform: "iOS"
                },
                {
                    title: "Hexa Wallet",
                    link: "https://hexawallet.io/",
					riproducibile: false,
					bech32: 'https://hexawallet.io/faq/',
					testnet: 'https://hexawallet.io/faq/',
                    platform: "iOS, Android<sup>[2]</sup>"
                },
                {
                    title: "Lily Wallet",
                    link: "https://lily-wallet.com/",
                    feecontrol: 'https://lily-wallet.com/features',
					multisig: 'https://docs.lily-wallet.com/get-started/part-3',
					psbt: 'https://lily-wallet.com/features',
					nodo: 'https://lily-wallet.com/features',
					hardware: 'https://docs.lily-wallet.com/overview#the-underlying-technology',
                    platform: "Desktop"
                },
                {
                    title: "Muun Wallet",
                    link: "https://muun.com/",
					riproducibile: false,
                    coincontrol: false,
                    coinjoin: false,
                    bech32: true,
                    multisig: false,
                    taproot: 'https://en.bitcoin.it/wiki/Bech32_adoption',
                    bip47: false,
                    platform: "iOS, Android"
                },
                {
                    title: "Samourai Wallet",
                    link: "https://samouraiwallet.com/",
					riproducibile: false,
					coincontrol: 'https://docs.samourai.io/wallet/advanced-usage',
					feecontrol: 'https://samouraiwallet.com/fees',
                    bech32: true,
                    rbf: false,
                    multisig: false,
                    tor: 'https://samouraiwallet.com/fees',
					testnet: 'https://docs.samourai.io/en/wallet/work-in-progress/new-wallet',
					taproot: 'https://samouraiwallet.com/bips',
                    coinjoin: 'https://samouraiwallet.com/whirlpool',
					batching: 'https://samouraiwallet.com/batch',
					cpfp: 'https://docs.samourai.io/en/wallet/features/miner-fees',
					bip32: 'https://docs.samourai.io/en/wallet/basic-concepts',
					bip39: 'https://samouraiwallet.com/bips',
					bip44: 'https://samouraiwallet.com/bips',
                    bip47: 'https://samouraiwallet.com/bips',
					bip49: 'https://samouraiwallet.com/bips	',
                    platform: "Android"
                },
                {
                    title: "SBW",
                    link: "https://sbw.app/",
                    // Aggiungere caratteristiche wallet
					riproducibile: 'https://walletscrutiny.com/android/com.btcontract.wallet/',
					coincontrol: 'https://sbw.app/posts/manual/',
                    platform: "Android"
                },
                {
                    title: "Sparrow Wallet",
                    link: "https://www.sparrowwallet.com/",
                    coincontrol: 'https://en.bitcoin.it/wiki/Bech32_adoption',
                    bech32: true,
					tor: true,
                    rbf: false,
                    tor: true,
					testnet: 'https://sparrowwallet.com/features/',
                    multisig: 'https://sparrowwallet.com/features/',
					taproot: 'https://en.bitcoin.it/wiki/Bech32_adoption',
                    coinjoin: 'https://sparrowwallet.com/docs/mixing-whirlpool.html#why-coinjoin',
					rbf: true,
					psbt: 'https://sparrowwallet.com/features/',
                    bip47: true,
                    platform: "Desktop"
                },
                {
                    title: "Specter",
                    link: "https://github.com/cryptoadvance/specter-desktop",
                    coincontrol: 'https://docs.specter.solutions/desktop/faq/#does-specter-have-coin-control',
					bech32: true,
					taproot: 'https://en.bitcoin.it/wiki/Bech32_adoption',
                    platform: "Desktop"
                },
            ],
            lightningWallets: [
                {
                    title: "Blixt Wallet",
                    link: "https://blixtwallet.github.io/",
                    // Aggiungere caratteristiche wallet
					riproducibile: false,
                    platform: "iOS, Android (Beta)"
                },
                {
                    title: "Breez",
                    link: "https://breez.technology/",
                    // Aggiungere caratteristiche wallet
					riproducibile: false,
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
					riproducibile: false,
                    platform: "Android"
                },
                {
                    title: "Electrum",
                    link: "https://electrum.org/#home",
                    // Aggiungere caratteristiche wallet
					riproducibile: true,
                    platform: "Desktop"
                },
                {
                    title: "Muun Wallet",
                    link: "https://muun.com/",
                    // Aggiungere caratteristiche wallet
					riproducibile: false,
                    platform: "iOS, Android"
                },
                {
                    title: "Phoenix",
                    link: "https://phoenix.acinq.co/",
                    // Aggiungere caratteristiche wallet
					riproducibile: false,
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
					riproducibile: false,
                    platform: "iOS, Android (Beta)"
                },
                {
                    title: "SBW",
                    link: "https://sbw.app/",
                    // Aggiungere caratteristiche wallet
					riproducibile: true,
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
					riproducibile: true,
                    platform: "Desktop, iOS, Android"
                },
                {
                    title: "Zeus",
                    link: "https://zeusln.app/",
                    // Aggiungere caratteristiche wallet
					riproducibile: false,
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
