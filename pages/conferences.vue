<template>
	<div id="conferences-page">

		<h1 class="page-title">Conferenze</h1>

		<p>Queste sono conferenze o eventi dal vivo a tema solo Bitcoin.</p>

		<div v-if="ongoingConferences.length!=0" class="tbl-scroller">
			<h3>In corso</h3>
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Conferenza</div>
					<div class="tbl-title">Luogo</div>
					<div class="tbl-title">Data</div>
				</div>
				<div v-for="(lineItem, index) in ongoingConferences" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.location"></div>
					<div v-html="lineItem.displayDates"></div>
				</div>
			</div>
		</div>

		<div v-if="upcomingConferences.length!=0" class="tbl-scroller">
			<h3>Programmate</h3>
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Conferenza</div>
					<div class="tbl-title">Luogo</div>
					<div class="tbl-title">Data</div>
				</div>
				<div v-for="(lineItem, index) in upcomingConferences" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.location"></div>
					<div v-html="lineItem.displayDates"></div>
				</div>
			</div>
		</div>

		

		<div v-if="pastConferences.length!=0" class="tbl-scroller">
			<h3>Passate</h3>
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Conferenza</div>
					<div class="tbl-title">Luogo</div>
					<div class="tbl-title">Data</div>
				</div>
				<div v-for="(lineItem, index) in pastConferences" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.location"></div>
					<div v-html="lineItem.displayDates"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
#conferences-page .tbl-row > div a {
	color: #fff;

	&:hover {
		color: #f2ad4f;
	}
}
</style>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
</style>

<script>

/* Objects in conferencesList will always need a 'startDate' and 'endDate' field 
in order to work correctly with automized rendering. For example:
{
	title: 'The Bitcoin Mining Conference',
	link: 'https://braiins.com/bitcoin-mining-conference-2022',
	location: 'Prague / CZ',
	displayDates: '14-16 Giugno 2022',
	startDate: '14 June 2022',
	endDate: '16 June 2022'
}
*/
let conferencesList = [  
	{
		title: 'The Bitcoin Mining Conference',
		link: 'https://braiins.com/bitcoin-mining-conference-2022',
		location: 'Prague / CZ',
		displayDates: '14-16 Giugno 2022',
		startDate: '14 June 2022',
		endDate: '16 June 2022',
	},
	{
		title: 'btc++',
		link: 'https://www.btcplusplus.dev/',
		location: 'Austin, TX / USA',
		displayDates: '7-10 Giugno 2022',
		startDate: '7 June 2022',
		endDate: '10 June 2022',
	},
	{
		title: 'Bit Block Boom!',
		link: 'https://bitblockboom.com/',
		location: 'Austin, TX / USA',
		displayDates: '25-28 Agosto 2022',
		startDate: '25 August 2022',
		endDate: '28 August 2022',
	},
	{
		title: 'BTC22',
		link: 'https://bconf.de/',
		location: 'Innsbruck, Austria',
		displayDates: '15-17 Settembre 2022',
		startDate: '15 September 2022',
		endDate: '17 September 2022',
	},
	{
		title: 'Baltic Honey Badger',
		link: 'https://baltichoneybadger.com/',
		location: 'Riga, Lettonia',
		displayDates: '3-4 Settembre 2022',
		startDate: '3 September 2022',
		endDate: '4 September 2022',
	},
	{
		title: 'Bitcoin Amsterdam',
		link: 'https://b.tc/conference/amsterdam',
		location: 'Amsterdam, Paesi Bassi',
		displayDates: '12-14 Ottobre 2022',
		startDate: '12 October 2022',
		endDate: '13 October 2022',
	},
	{
		title: 'Plan B Forum',
		link: 'https://planb.lugano.ch/planb-forum/',
		location: 'Lugano, Svizzera',
		displayDates: '28-29 Ottobre 2022',
		startDate: '28 October 2022',
		endDate: '29 October 2022',
	}
];

let pastConferences = [];
let ongoingConferences = []; 
let upcomingConferences = [];
let now = new Date();

conferencesList.forEach((x) => {
	let startDate = new Date(x.startDate);
	let endDate = new Date(x.endDate);
	endDate.setHours(23,59,59); 		//in order to cover the full last day (NOTE: for the startDate isn't necessary,
										//because it's already set to 00:00:00)
	if(startDate<=now && endDate>=now) {
		ongoingConferences.push(x)
	} else if(startDate>Date.now()) {
		upcomingConferences.push(x)
	} else if(endDate<Date.now()) pastConferences.push(x)
});


export default {

	name: 'ConferencesPage',

	head: {
		title: 'Conferences - Ventuno',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only conferences.' }
		]
	},

	data() {
		return {
			pastConferences,
			ongoingConferences,
			upcomingConferences	
		}
	},
}
</script>
