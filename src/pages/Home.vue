<template>
	<v-container>
		<Filters />
		<Playlists />
	</v-container>
</template>

<script>
	import Filters from '@/components/Filters/Filters.vue';
	import Playlists from '@/components/Playlists/Playlists.vue';

	export default {
		name: 'Home',
		components: {
			Filters,
			Playlists,
		},
	};
</script>
