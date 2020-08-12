<template>
	<v-row>
		<v-col
			v-for="item in items"
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
	</v-row>
</template>

<script>
	import VueTypes from 'vue-types';

	export default {
		name: 'List',
		props: {
			items: VueTypes.arrayOf(
				VueTypes.shape({
					id: VueTypes.string,
					title: VueTypes.string,
					description: VueTypes.string,
					owner: VueTypes.object,
					external_urls: VueTypes.object,
					image: VueTypes.string,
				}).loose,
			),
		},
	};
</script>

<style>
</style>
