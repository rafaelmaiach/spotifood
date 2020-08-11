<template>
	<v-app>
		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import { isAfter, parseISO } from 'date-fns';

	export default {
		name: 'App',
		computed: {
			...mapState({
				access: ({ SpotifyAuth }) => SpotifyAuth.access,
				tokenExpireDate: ({ SpotifyAuth }) => SpotifyAuth.tokenExpireDate,
			}),
		},
		created() {
			const nowIsAfterTokenExpireDate = isAfter(new Date(), parseISO(this.tokenExpireDate));

			if (!this.access || nowIsAfterTokenExpireDate) {
				this.getAccess();
			}
		},
		methods: {
			...mapActions({
				getAccess: 'SpotifyAuth/getAccess',
			}),
		},
	};
</script>
