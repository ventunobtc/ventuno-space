<template>
	<div id="peers-page">

		<h1 class="page-title">Community</h1>

		<h3>Contenuti del sito</h3>
			<p>	Ventuno è una community libera e aperta, chiunque può contribuire. <br>
				Bitcoin fa coincidere l'interesse del singolo con quello del gruppo. <br>
				Considera di aiutare a diffondere Bitcoin in italiano, contribuendo a questo progetto oppure donando dei #sats per supportare e sostenere questo obiettivo. <br>
			</p>
		
		<h3>Collaboratori</h3>

			<p>Siamo orgogliosi di aver supportato e lavorato con i seguenti collaboratori sui contenuti del sito.</p>
			<p>Puoi donare dei satoshi via Lightning Network, premendo sul <a href="https://lightningaddress.com/" target="_blank">lightning address</a>. </p>
			<p>Alcuni wallet compatibili sono <a href="https://breez.technology/" target="_blank">Breez</a> per mobile ed <a href="https://getalby.com/" target="_blank">Alby</a> come estensione browser </p>

			<div class="tbl-scroller">
				<div class="tbl-wrapper">
					<div class="tbl-header">
						<div class="tbl-title">Nome</div>
						<div class="tbl-title">Contributo</div>
						<div class="tbl-title">LN Address ⚡</div>
					</div>
					<div v-for="(lineItem, index) in contributors" :key="index" class="tbl-row">
						<div>
							<a :href="lineItem.peerLink" target="_blank">{{ lineItem.peer }}</a>
						</div>
						<div>
							<a> {{ lineItem.contribute }} </a>
						</div>						
						<div>
							<a :href="'lightning:' + lineItem.donation.lnaddress" target="_blank">{{ lineItem.donation.lnaddress }}</a>
						</div>
					</div>
				</div>
			</div>

		<h3>Progetti Ventuno</h3>

			<p>É stato creato un wallet multisig 3-di-4 tra alcuni membri della community. Vorremmo aumentare i co-signers.</p>
			<p>I satoshi donati a questi indirizzi verranno utilizzati per supportare i seguenti progetti:</p>

			<div class="tbl-scroller">
				<div class="tbl-wrapper">
					<div class="tbl-header">
						<div class="tbl-title">Nome</div>
						<div class="tbl-title">Descrizione</div>
						<div class="tbl-title">Address</div>
					</div>
					<div v-for="(project, index) in projects" :key="index" class="tbl-row">
						<div>
							<a>{{project.name}}</a>
						</div>
						<div>
							<a>{{ project.description }}</a>
						</div>
						<div>
							<a>{{ project.address }}</a>
						</div>
						
					</div>
				</div>
			</div>

		<h3>Promuovi</h3>

		<p class="explainer">Facci sapere se desideri sponsorizzare Ventuno o menzionalo sul tuo sito o podcast!</p>
		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Nome</div>
					<div class="tbl-title">Sponsor</div>
				</div>
				<div v-for="(lineItem, index) in growth" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.name }}</a>
					</div>
					<div v-html="lineItem.sponsor"></div>
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
.explainer {
	margin-bottom: 30px;
	margin-top: -15px;
}
</style>


<script>

export default {
		
	name: 'PeersPage',

	head: {
		title: 'Peers - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of people we have worked with in the past.' }
		]
	},
	
	data() {
		return {
		
			contributors: [
				{
					peer: 'waltermaffy',
					peerLink: 'https://twitter.com/waltermaffy',
					contribute: 'Gestione e traduzione sito, traduzione articoli',
					donation: {
						lnaddress: 'wally@getalby.com',
					}
				}
			],
			
			projects: [
				{
					name: 'Ventuno.space',
					description: 'Sito web aggregatore delle migliori risorse in italiano',
					address: 'bc1qjes2kj3gw89ekdjlywa57l9qxpvutzz5y55zd9ztd7039uugj2zs9waudl'
				},
			],

			growth: [
				{
					name: '',
					link: '',
					sponsor: ''
				},
			]
		}
	}
}
</script>
