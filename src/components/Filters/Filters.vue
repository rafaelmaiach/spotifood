<template>
	<v-row justify="center">
		<v-col cols="12" sm="10" md="11">
			<h2>{{ $t('general.filters') }}</h2>
		</v-col>
		<SpotifyFilters />
		<PlaylistsFilter />
	</v-row>
</template>

<script>
	import SpotifyFilters from './SpotifyFilters.vue';
	import PlaylistsFilter from './PlaylistsFilter.vue';

	export default {
		name: 'Filters',
		components: {
			SpotifyFilters,
			PlaylistsFilter,
		},
	};
</script>
