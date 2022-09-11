<template>
	<div id="wallets-page">

		<h1 class="page-title">Wallets</h1>

		<div class="getting-started-section">

			<h3>Come iniziare</h3>

			<ul>
				<li>Desktop: <a href="https://www.sparrowwallet.com/" target="_blank">Sparrow Wallet</a> connesso a <a href="https://bitcoincore.org/" target="_blank">Bitcoin Core</a></li>
				<li>Mobile: <a href="https://bluewallet.io/" target="_blank">Blue Wallet</a></li>
				<li>Lightning: <a href="https://muun.com/" target="_blank">Muun Wallet</a></li>
			</ul>

		</div>

		<p>È molto importante che impariate a fare il backup del vostro seed mnemonico (12 o 24 parole) e che, se usate una passphrase, facciate il backup anche di quella. <br>
		  Leggete <a href="https://bitcoin-intro.com/en/backup" target="_blank">questo documento</a> per saperne di più sul backup del vostro wallet e consultate la pagina sulla <nuxt-link to="/privacy">privacy</nuxt-link>.</p>
		<p>Qui <a href="https://veriphi.io/en/blog/software-wallet-analysis" target="_blank">un confronto</a> delle caratteristiche di molti dei wallet elencati di seguito.</p>

		<h3>On-Chain Wallet</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">CoinControl</div>
					<div class="tbl-title">CoinJoin</div>
					<div class="tbl-title">Bech32</div>
					<div class="tbl-title">RBF</div>
					<div class="tbl-title">Multisig</div>
					<div class="tbl-title">Tor</div>
					<div class="tbl-title">BIP47</div>
					<div class="tbl-title">Piattaforma</div>
				</div>
				<div v-for="(wallet, index) in onChainWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>

					<!-- coincontrol -->
					<div v-if="wallet.coincontrol"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- coinjoin -->
					<div v-if="wallet.coinjoin"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
					<!-- bech32 -->
					<div v-if="wallet.bech32"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- rbf -->
					<div v-if="wallet.rbf"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- multisig -->
					<div v-if="wallet.multisig"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- tor -->
					<div v-if="wallet.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- BIP47 -->
					<div v-if="wallet.bip47"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Platform -->
					<div v-html="wallet.platform"></div>
					
				</div>
			</div>
		</div>

		<h3>Lightning Wallets</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">Canali</div>
					<div class="tbl-title">Swap</div>
					<div class="tbl-title">Taproot</div>
					<div class="tbl-title">BTCPay</div>
					<div class="tbl-title">URI Scheme</div>
					<div class="tbl-title">Tor</div>
					<div class="tbl-title">Testnet</div>
					<div class="tbl-title">Piattaforma</div>
				</div>
				<div v-for="(wallet, index) in lightningWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>

					<!-- canali -->
					<div v-if="wallet.canali"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- swap -->
					<div v-if="wallet.swap"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium" > </b-icon></div>
					<!-- taproot -->
					<div v-if="wallet.taproot"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- BTCPay -->
					<div v-if="wallet.btcpay"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- URI -->
					<div v-if="wallet.uri"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- tor -->
					<div v-if="wallet.tor"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- testnet -->
					<div v-if="wallet.testnet"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- Platform -->
					<div v-html="wallet.platform"></div>
					
				</div>
			</div>
		</div>

		<h3>Custodial Accounts</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">Descrizione</div>
					<div class="tbl-title">Piattaforma</div>
				</div>
				<div v-for="(wallet, index) in custodialAccounts" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div v-html="wallet.description"></div>
					<div>{{ wallet.platform }}</div>
				</div>
			</div>
		</div>

		<h3>Metodi di storage avanzati</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Progetto</div>
					<div class="tbl-title">Dev</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(wallet, index) in advancedStorageMethods" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div>
						<template v-for="(dev, devIndex) in wallet.devs">
							<a :key="devIndex" :href="dev.link" target="_blank">{{ dev.name }}</a><span v-if="devIndex + 1 < wallet.devs.length" :key="devIndex">, </span>
						</template>
					</div>
					<div v-html="wallet.description"></div>
				</div>
			</div>
		</div>

		<div class="footnotes">
			<p><sup>[0]</sup>I backup di Google Drive consentono alle aziende di accedere al tuo indirizzo e-mail, nome e immagine profilo di Google. Si consiglia vivamente di utilizzare un account Google separato per utilizzare queste applicazioni.</p>
			<p><sup>[1]</sup>Il wallet Lightning è custodial di default, ma gli utenti possono scegliere di collegare la propria applicazione al proprio nodo Lightning utilizzando LNDhub. Il wallet on-chain non è custodial.</p>
			<p><sup>[2]</sup>Bottle.li is fully custodial, meaning you do not have your private keys, thus you are not guaranteed full control of your funds.</p>
			<p><sup>[3]</sup>Opennode is fully custodial, meaning you do not have your private keys, thus you are not guaranteed full control of your funds. You can (and should) set reoccurring withdrawals to send any bitcoin you receive to your own wallet.</p>
			<p><sup>[4]</sup>Tippin.me is fully custodial, meaning you do not have your private keys, thus you are not guaranteed full control of your funds.</p>
			<p><sup>[5]</sup>Wallet of Satoshi is fully custodial, meaning you do not have your private keys, thus you are not guaranteed full control of your funds.</p>
			<p><sup>[6]</sup>Since the wallet is closed source, we recommend using 3/5 and only with hardware devices that you source independently.</p>
			<p><sup>[7]</sup>These wallets integrate a KYC exchange to buy bitcoin. We recommend against using KYC exchanges due to the <a href="https://bitcoinqna.github.io/noKYConly1/" target="_blank">risks</a>.</p>
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
}
.tbl-wrapper {
	max-width: 1000px;
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

	name: 'WalletsPage',

	head: {
		title: 'Wallets - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection Bitcoin only wallets.' }
		]
	},

	data() {
		return {
			onChainWallets: [
				{
					title: 'Bitcoin Core',
					link: 'https://bitcoincore.org/',
					// Aggiungere caratteristiche wallet
					platform: 'Desktop'
				},
				{
					title: 'Blockstream Green',
					link: 'https://blockstream.com/green/',
					bech32: false,
					// Aggiungere caratteristiche wallet
					platform: 'iOS, Android, Desktop'
				},
				{
					title: 'Blue Wallet',
					link: 'https://bluewallet.io/',
					// Aggiungere caratteristiche wallet
					platform: 'iOS, Android, MacOS<sup>[1]</sup>,<sup>[7]</sup>'
				},
				{
					title: 'Caravan',
					link: 'https://unchained-capital.github.io/caravan/#/',
					// Aggiungere caratteristiche wallet
					platform: 'Desktop'
				},
				{
					title: 'Electrum',
					link: 'https://electrum.org/#home',
					// Aggiungere caratteristiche wallet
					platform: 'Desktop, Android'
				},
				{
					title: 'Fully Noded',
					link: 'https://fonta1n3.github.io/FullyNoded/',
					// Aggiungere caratteristiche wallet
					platform: 'iOS'
				},
				{
					title: 'Hexa Wallet',
					link: 'https://hexawallet.io/',
					// Aggiungere caratteristiche wallet
					platform: 'iOS, Android<sup>[7]</sup>'
				},
				{
					title: 'Lily Wallet',
					link: 'https://lily.kevinmulcrone.com/',
					// Aggiungere caratteristiche wallet
					platform: 'Desktop'
				},
				{
					title: 'Muun Wallet',
					link: 'https://muun.com/',
					coincontrol: false,
					coinjoin: false,
					bech32: true,
					rbf: true,
					multisig: false,
					tor: false,
					bip47: false,
					platform: 'iOS, Android'
				},
				{
					title: 'Samourai Wallet',
					link: 'https://samouraiwallet.com/',
					coincontrol: true,
					coinjoin: true,
					bech32: true,
					rbf: false,
					multisig: false,
					tor: true,
					bip47: true,
					platform: 'Android'
				},
				{
					title: 'Simple Bitcoin Wallet',
					link: 'https://sbw.app/',
					// Aggiungere caratteristiche wallet
					platform: 'Android'
				},
				{
					title: 'Sparrow Wallet',
					link: 'https://www.sparrowwallet.com/',
					coincontrol: true,
					coinjoin: true,
					bech32: true,
					rbf: false,
					multisig: true,
					tor: true,
					bip47: true,
					platform: 'Desktop'
				},
				{
					title: 'Specter',
					link: 'https://github.com/cryptoadvance/specter-desktop',
					// Aggiungere caratteristiche wallet
					platform: 'Desktop'
				},
			],

			lightningWallets: [
				{
					title: 'Blixt Wallet',
					link: 'https://blixtwallet.github.io/',
					//description: 'Non-custodial Bitcoin Lightning Wallet',
					platform: 'iOS & Android (Beta)'
				},
				{
					title: 'Breez',
					link: 'https://breez.technology/',
					//description: 'Mobile non-custodial wallet<sup>[0]</sup>',
					platform: 'iOS & Android (Beta)'
				},
				{
					title: 'Eclair',
					link: 'https://github.com/ACINQ/eclair',
					//description: 'Lightning node software',
					platform: 'Desktop'
				},
				{
					title: 'Eclair Mobile',
					link: 'https://github.com/ACINQ/eclair-mobile',
					//description: 'Lightning-ready Bitcoin wallet',
					platform: 'Android'
				},
				{
					title: 'Electrum',
					link: 'https://electrum.org/#home',
					//description: 'The most feature rich bitcoin desktop wallet available today',
					platform: 'Desktop'
				},
				{
					title: 'Muun Wallet',
					link: 'https://muun.com/',
					//description: 'Relatively new lightning wallet',
					platform: 'iOS & Android'
				},
				{
					title: 'Phoenix',
					link: 'https://phoenix.acinq.co/',
					//description: 'Lightning-only Bitcoin wallet',
					platform: 'iOS & Android'
				},
				{
					title: 'Ride The Lightning',
					link: 'https://github.com/Ride-The-Lightning/RTL',
					//description: 'Web user interface to manage lightning node operations',
					platform: 'Web'
				},
				{
					title: 'Sats App',
					link: 'https://satsapp.com/',
					//description: 'Mobile non-custodial wallet connected to Casa node (Paid Features)',
					platform: 'iOS & Android (Beta)'
				},
				{
					title: 'Simple Bitcoin Wallet',
					link: 'https://sbw.app/',
					//description: 'Bitcoin wallet with fully functional built-in Lightning node',
					platform: 'Android'
				},
				{
					title: 'Thunderhub',
					link: 'https://thunderhub.io',
					//description: 'Web user interface to manage lightning node operations',
					platform: 'Web'
				},
				{
					title: 'Zap',
					link: 'https://zap.jackmallers.com/',
					//description: 'Desktop Lightning wallet. Mobile LND interface',
					platform: 'Desktop, iOS, Android'
				},
				{
					title: 'Zeus',
					link: 'https://zeusln.app/',
					//description: 'Mobile app for LND users',
					platform: 'iOS, Android'
				}
			],

			custodialAccounts: [
				{
					title: 'Blue Wallet',
					link: 'https://bluewallet.io/',
					description: 'Bitcoin & Lightning wallet<sup>[1]</sup>',
					platform: 'Desktop, iOS, Android'
				},
				{
					title: 'Bottlepay',
					link: 'https://bottlepay.com/',
					description: 'Lightning Social Tipping<sup>[2]</sup>',
					platform: 'Web'
				},
				{
					title: 'Opennode',
					link: 'https://opennode.co/',
					description: 'Accept Bitcoin & Lightning payments<sup>[3]</sup>',
					platform: 'Web'
				},
				{
					title: 'Tippin.me',
					link: 'https://tippin.me/',
					description: 'Lightning Social Tipping<sup>[4]</sup>',
					platform: 'Web'
				},
				{
					title: 'Wallet of Satoshi',
					link: 'https://www.walletofsatoshi.com/',
					description: 'Lightning only wallet<sup>[5]</sup>',
					platform: 'iOS, Android'
				}
			],

			advancedStorageMethods: [
				{
					title: '10x Security Bitcoin Guide',
					link: 'https://btcguide.github.io/',
					description: 'Conservare bitcoin da maniaci.',
					devs: [
						{
							name: 'Michael Flaxman',
							link: 'https://twitter.com/mflaxman/'
						}
					]
				},
				{
					title: 'Gentle Introduction to Cold Storage',
					link: 'https://bitzuma.com/posts/a-gentle-introduction-to-bitcoin-cold-storage/',
					description: 'Short explanation of hot wallet risk',
					devs: [
						{
							name: 'Rich Apodaca',
							link: 'https://twitter.com/bitzuma'
						}
					]
				},
				{
					title: 'Glacier Protocol',
					link: 'https://glacierprotocol.org/',
					description: '[OLD] Protocollo cold storage',
					devs: [
						{
							name: 'Glacier Protocol',
							link: 'https://twitter.com/glacierprotocol'
						}
					]
				},
				{
					title: 'Hodl Guides',
					link: 'https://github.com/DriftwoodPalace/guides',
					description: '[OLD] Guide per cold storage.',
					devs: [
						{
							name: 'Driftwood Palace',
							link: 'https://twitter.com/DriftwoodPalace'
						}
					]
				},
				{
					title: 'Rusty\'s Bitcoin Storage Guide',
					link: 'https://github.com/rustyrussell/bitcoin-storage-guide',
					description: '[OLD] Guida per cold storage.',
					devs: [
						{
							name: 'Rusty Russell',
							link: 'https://mobile.twitter.com/rusty_twit/status/644559490646278144'
						}
					]
				},
				{
					title: 'Smart Custody',
					link: 'https://github.com/BlockchainCommons/SmartCustodyWhitePapers/blob/master/%23SmartCustody-_Simple_Self-Custody_Cold_Storage_Scenario.md',
					description: '[OLD] Best practices per cold storage',
					devs: [
						{
							name: 'C. Allen',
							link: 'https://twitter.com/christophera'
						},
						{
							name: 'S. Appelcline',
							link: 'https://twitter.com/Appelcline'
						},
					]
				}
			],
		}
	}

}
</script>
