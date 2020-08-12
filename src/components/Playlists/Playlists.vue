<template>
	<v-row justify="center">
		<v-col cols="12" sm="10" md="11">
			<h1>{{ title }}</h1>
		</v-col>
		<v-container class="pb-0">
			<v-row v-if="isLoading || !featuredPlaylists" justify="center">
				<v-skeleton-loader
					v-for="number in 5"
					:key="number"
					class="col-12 col-sm-2 flex-grow-1"
					max-width="300"
					type="card"
				/>
			</v-row>

			<v-row v-else-if="hasError" justify="center">
				<h3 class="mt-5">{{ $t('playlists.errors.list') }}</h3>
			</v-row>

			<v-row v-else-if="featuredPlaylists.length === 0">
				<h3 class="mt-5">{{ $t('playlists.errors.empty') }}</h3>
			</v-row>

			<List v-else :items="list" />
		</v-container>
	</v-row>
</template>

<script>
	import { mapState } from 'vuex';

	import List from './List.vue';

	export default {
		name: 'Playlists',
		components: {
			List,
		},
		computed: {
			...mapState('SpotifyBrowser', [
				'isLoading',
				'hasError',
				'featuredPlaylists',
			]),
			title() {
				const message = this.featuredPlaylists?.message;
				return this.$t('playlists.title', { value: message || '' });
			},
			list() {
				const playlists = this.featuredPlaylists?.playlists;

				if (playlists) {
					const playlistItems = playlists.items.map(item => ({
						id: item.id,
						title: item.name,
						description: item.description,
						owner: item.owner,
						external_urls: item.external_urls,
						image: item.images.length > 0 ? item.images[0] : null,
					}));

					return playlistItems;
				}

				return [];
			},
		},
	};
</script>
