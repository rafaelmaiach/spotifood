<template>
	<v-container class="pt-0">
		<v-row justify="center">
			<v-col cols="12" sm="10" md="11">
				<v-text-field
					v-model="playlistName"
					:label="$t('general.playlistName')"
				/>
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
		watch: {
			playlistName(newValue, oldValue) {
				if (newValue.trim() !== oldValue.trim()) {
					this.$root.$emit('filters:playlistTitle', newValue);
				}
			},
		},
	};
</script>
