<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1>Filters</h1>
			</v-col>
			<SpotifyFilters />
			<PlaylistsFilter />
		</v-row>
	</v-container>
</template>

<script>
	import SpotifyFilters from '@/components/Filters/SpotifyFilters.vue';
	import PlaylistsFilter from '@/components/Filters/PlaylistsFilter.vue';

	export default {
		name: 'Home',
		components: {
			SpotifyFilters,
			PlaylistsFilter,
		},
	};
</script>
