<template>
	<v-row justify="center">
		<v-col cols="12" sm="10" md="11">
			<h1>{{ title }}</h1>
		</v-col>
		<v-container class="pb-0">
			<v-row v-if="isLoading" justify="center">
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

			<v-row v-else justify="center">
				<v-col cols="12" sm="3" md="2">
					{{ list }}
				</v-col>
			</v-row>
		</v-container>
	</v-row>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Playlists',
		computed: {
			...mapState('SpotifyBrowser', [
				'isLoading',
				'hasError',
				'featuredPlaylists',
			]),
			title() {
				const { message } = this.featuredPlaylists;
				return this.$t('playlists.title', { value: message });
			},
			list() {
				const { playlists } = this.featuredPlaylists;
				const playlistItems = playlists.items.map(item => ({
					id: item.id,
					name: item.name,
					description: item.description,
					owner: item.owner,
					external_urls: item.external_urls,
					images: item.images.length > 0 ? item.images[0] : null,
				}));

				return playlistItems;
			},
		},
	};
</script>
