<template>
	<div class="contact-page">

		<h1 class="page-title">Contatti</h1>

		<p>Avete domande? Avete bisogno di aiuto? Scrivete un messaggio su Telegram e faremo del nostro meglio per aiutarvi.</p>

		<ul class="contact-methods">

			<li>Linktree - <a href="https://linktr.ee/ventunobtc" target="_blank">linktr.ee/ventunobtc</a></li>
			<li>Telegram - <a href="https://t.me/ventunobtc" target="_blank">t.me/ventunobtc</a></li>
			<li>Twitter - <a href="https://twitter.com/VentunoBtc" target="_blank">@VentunoBtc</a></li>
			<li>GitHub Issue - <a href="https://github.com/ventunobtc/bitcoin-only/issues/new/choose" target="_blank">Apri una issue su GitHub</a></li>
			<li></li>
		</ul>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	//margin-bottom: 20px;
}
.contact-methods {
	margin-top: 20px;

	li {
		margin-bottom: 10px;
	}
}
</style>

<script>
export default {

	name: 'ContactPage',

	head: {
		title: 'Contact - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'Have any questions? Need some help? Contact me and I\'ll do my best to help'  }
		]
	}

}
</script>
