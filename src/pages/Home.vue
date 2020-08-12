<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" sm="10" md="11">
				<h2>{{ $t('general.filters') }}</h2>
			</v-col>
		</v-row>
		<SpotifyFilters />
		<PlaylistsFilter />
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
