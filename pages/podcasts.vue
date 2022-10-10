<template>
	<div id="podcasts-page">

		<h1 class="page-title">Podcasts</h1>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Podcast</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(pod, index) in podcasts" :key="index" class="tbl-row">
					<div>
						<a :href="pod.link" target="_blank">{{ pod.title }}</a>
					</div>
					<div v-html="pod.description"></div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<style lang="scss">
#podcasts-page .tbl-row > div a {
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
export default {

	name: 'PodcastsPage',

	head: {
		title: 'Podcasts - Solo Bitcoin',
		meta: [
			{ hid: 'description', name: 'description', content: 'Una collezzione di podcast solo Bitcoin.' }
		]
	},

	data() {
		return {

			podcasts: [
				{
					title: 'Il priorato del Bitcoin',
					link: 'http://anchor.fm/turtle-cute5',
					description: 'Il primo podcast tossicamente massimalista'
				},
				{
					title: 'Bitcoin Italia Podcast',
					link: 'https://bitcoinitaliapodcast.it/',
					description: 'Il primo podcast Bitcoin in lingua italiana. Ogni giovedì alle 17'
				},
				{
					title: 'Bitcoin Cabana',
					link: 'https://bitcoincabana.com/',
					description: 'Questo podcast esplora Bitcoin, macroeconomia e le tesi di investimento che ne emergono'
				},
			]
		}
	}

}
</script>
