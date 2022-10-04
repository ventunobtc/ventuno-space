<template>
	<div id="what-is-bitcoin-page">

		<h1 class="page-title">Cos'è Bitcoin</h1>
		<h3>Bitcoin: un sistema di contanti elettronico peer-to-peer
			<div class="page-subtitle">Satoshi Nakamoto - 31 Ottobre, 2008</div>
		</h3>

		<p><b>Abstract.</b> Una versione puramente peer-to-peer di denaro elettronico permetterebbe di effettuare pagamenti online direttamente da un 
			soggetto ad un altro senza passare attraverso un istituto finanziario. Le firme digitali forniscono una parte della soluzione, ma i principali
			vantaggi si perdono se è ancora necessario un terzo garante per evitare la possibilità di utilizzare la stessa moneta per due spese diverse. Si
			propone una soluzione al problema della spesa doppia utilizzando un network peer-to-peer Il network esegue una marcatura temporale sulle
			transazioni sottoponendole ad hash in una continua catena di prove basate sugli hash stessi, che formano un risultato che non può essere
			cambiato senza rifare tutto il lavoro che lo prova. La catena più lunga non serve solo come prova della sequenza di eventi che ha testimoniato,
			ma anche come prova che è venuta dal gruppo più esteso di potenza di calcolo. Finchè la maggioranza del potere di calcolo è controllata da
			nodi che non si alleano per attaccare il network stesso, saranno essi a generare la catena più lunga, lasciando indietro eventuali attaccanti. Il
			network in sè richiede una struttura minima. I messaggi sono pubblicati secondo le possibilità di ciascuno, e i nodi possono unirsi o lasciare il
			network quando vogliono, e accettare la catena di risultati più lunga come prova di quanto è avvenuto mentre erano disconnessi.</p>

		<p>Whitepaper Bitcoin: <a href="/bitcoin-white-paper-it.pdf">PDF</a></p>

		<h3>Il Bitcoin  Standard 
			<div class="page-subtitle">Saifedean Ammous - Aprile, 2018</div>
		</h3>
		<iframe class="video" src="https://www.youtube.com/watch?v=PScIpF9Wjpc"></iframe>
	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 25px;
}
.page-subtitle {
	color: rgba(255, 255, 255, 0.45);;
}
.video {
	height: 490px;
	width: 100%;
	max-width: 1000px;
}
</style>

<script>
export default {

	name: 'WhatIsBitcoinPage',

	head: {
		title: 'Cos\'è Bitcoin - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'An explanation of what Bitcoin is.' }
		]
	}
}
</script>
