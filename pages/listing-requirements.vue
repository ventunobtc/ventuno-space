<template>
	<div class="listing-requirements-page">

		<h1 class="page-title">Requisiti Listing</h1>


		<h3>Requisiti per listing di nuovi progetti</h3>
		<p>Affinché un nuovo progetto possa essere inserito nell'elenco di ventuno.space, deve semplicemente soddisfare i due seguenti requisiti:</p>

		<ul class="requirements-list">
			<li><span>1)</span>Supportare Bitcoin</li>
			<li><span>2)</span>Non supportare altcoins</li>
		</ul>

		<h3>Come faccio a far aggiungere il mio progetto?</h3>

		<p>È sufficiente creare una issue sul repo GitHub seguendo questo <a href="https://github.com/ventunobtc/ventuno-space/issues/new/choose" target="_blank">link</a> e cliccando il bottone "Content Suggestion - Get Started"  (vedi immagine sotto):</p>

		<img src="/content-suggestion.png" alt="Suggest new content on Ventuno.space">

		<p>Modificare le PAROLE IN MAIUSCOLO e cliccare "Sumbit New Issue"</p>

		<img src="/content-suggestion-example.png" alt="Suggest new content example on Ventuno.space">

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	margin-bottom: 20px;
}
img {
	width: 100%;
	max-width: 800px;
	margin: 20px 0;
}
.requirements-list {
	margin-top: 25px;

	span {
		color: #f2ad4f;
		width: 22px;
		display: inline-block;
	}
}
.additional-requirement {
	margin-bottom: 25px;
}
</style>

<script>
export default {

	name: 'ListingRequirementsPage',

	head: {
		title: 'Listing Requirements - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'Listing requirement for Bitcoin Only.' }
		]
	}
}
</script>
