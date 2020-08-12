<template>
	<v-container class="pt-0">
		<v-row justify="center">
			<v-col cols="12" sm="10" md="11">
				<v-text-field v-model="playlistName" label="Nome da playlist" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'PlaylistsFilter',
		data() {
			return {
				playlistName: '',
			};
		},
	};
</script>
