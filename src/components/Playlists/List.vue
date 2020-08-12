<template>
	<v-row>
		<v-col v-if="!itemsFiltered.length" class="text-center mt-10">
			<h3>{{ $t('playlists.errors.notFound') }}</h3>
		</v-col>
		<template v-else>
			<v-col
				v-for="item in itemsFiltered"
				:key="item.id"
				class="col-12 col-sm-6 col-md-4 col-lg-3"
			>
				<v-card>
					<v-img
						class="white--text align-end"
						height="250px"
						contain
						:src="item.image.url"
					/>

					<v-card-title>{{ item.title }}</v-card-title>

					<v-card-subtitle class="pb-0">{{ item.description }}</v-card-subtitle>

					<v-card-actions>
						<v-btn
							:href="item.external_urls.spotify"
							target="_blank"
							color="orange"
							text
						>
							{{ $t('general.listen') }}
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</template>
	</v-row>
</template>

<script>
	import VueTypes from 'vue-types';

	export default {
		name: 'List',
		props: {
			items: VueTypes.oneOfType([
				VueTypes.arrayOf(
					VueTypes.shape({
						id: VueTypes.string,
						title: VueTypes.string,
						description: VueTypes.string,
						owner: VueTypes.object,
						external_urls: VueTypes.object,
						image: VueTypes.string,
					}),
				),
				VueTypes.array,
			]),
		},
		data() {
			return {
				filter: '',
			};
		},
		computed: {
			itemsFiltered() {
				const trimmedFilter = this.filter.trim();

				// If no filter, returns all the items, otherwise, return filtered
				// Search done with lowercase titles
				return !trimmedFilter
					? this.items
					: this.items.filter(item => item.title.toLowerCase().includes(trimmedFilter.toLowerCase()));
			},
		},
		created() {
			// Creates a event receiver to watch for changes on filter
			this.$root.$on('filters:playlistTitle', (value) => { this.filter = value; });
		},
	};
</script>

<style>
</style>
