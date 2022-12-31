<template>
	<div class="contact-page">

		<h1 class="page-title">Contatti</h1>
			<p>Avete domande? Avete bisogno di aiuto? Scrivete un messaggio su Telegram e faremo del nostro meglio per aiutarvi.</p>

		<ul class="contact-methods">

			<li>Linktree - <a href="https://linktr.ee/ventunobtc" target="_blank">linktr.ee/ventunobtc</a></li>
			<li>Telegram - <a href="https://t.me/ventunobtc" target="_blank">t.me/ventunobtc</a></li>
			<li>Twitter - <a href="https://twitter.com/VentunoBtc" target="_blank">@VentunoBtc</a></li>
			<li>GitHub Issue - <a href="https://github.com/ventunobtc/ventuno-space/issues/new/choose" target="_blank">Apri una issue su GitHub</a></li>
			<li></li>
		</ul>
		
		<h3> Disclaimer </h3>	
			<p>I contributors del progetto Ventuno si esonerano da ogni responabilità derivata dai link presenti su questo sito. </p>
			<div class="quote-wrapper">
				<div class="inner">
					<div class="quote">Non ti fidare. Verifica</div>
					<div class="author"> "Don't Trust. Verify"</div>
				
				</div>
			</div>
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

.quote-wrapper {
	margin-top: 40px;
	max-width: 600px;
	text-align: center;
	background: #181c25;
	padding: 20px 30px;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 5px;

	.quote {
		font-size: 18px;
		font-style: italic;
		margin-bottom: 15px;
	}
	.author {
		color: rgba(255,255,255,0.55);
	}
}


</style>

<script>
export default {

	name: 'ContactPage',

	head: {
		title: 'Contact - Ventuno',
		meta: [
			{ hid: 'description', name: 'description', content: 'Have any questions? Need some help? Contact me and I\'ll do my best to help'  }
		]
	}
	
}
</script>
