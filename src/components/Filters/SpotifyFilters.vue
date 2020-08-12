<template>
	<v-container class="pb-0">
		<v-form v-model="form.isValid">
			<v-row v-if="isLoading" justify="center">
				<v-skeleton-loader
					v-for="n in 5"
					:key="n"
					class="col-12 col-sm-2"
					type="text"
				/>
			</v-row>

			<v-row v-else-if="hasError" justify="center">
				<h3 class="mt-5">{{ $t('filters.errors.list') }}</h3>
			</v-row>

			<v-row v-else justify="center">
				<v-col cols="12" sm="3" md="2">
					<v-select
						v-if="filters.locale"
						v-model="form.data.locale"
						:items="filters.locale.values"
						:label="$t(filters.locale.id)"
						item-text="name"
						item-name="value"
					/>
				</v-col>

				<v-col cols="12" sm="3" md="2">
					<v-select
						v-if="filters.country"
						v-model="form.data.country"
						:items="filters.country.values"
						:label="$t(filters.country.id)"
						item-text="name"
						item-name="value"
					/>
				</v-col>

				<v-col cols="12" sm="4" md="3">
					<DateTimePicker
						v-if="filters.timestamp"
						v-model="form.data.datetime"
						dark
						no-header
						no-clear-button
						format="YYYY-MM-DDTHH:mm:ss"
						:label="$t(filters.timestamp.id)"
					/>
				</v-col>

				<v-col cols="12" sm="4" md="2">
					<v-text-field
						v-if="filters.limit"
						v-model="form.data.limit"
						type="number"
						:rules="rules.limit"
						:label="$t(filters.limit.id)"
						:min="filters.limit.validation.min"
						:max="filters.limit.validation.max"
					/>
				</v-col>

				<v-col cols="12" sm="4" md="2">
					<v-text-field
						v-if="filters.offset"
						v-model="form.data.offset"
						type="number"
						min="1"
						:rules="rules.offset"
						:label="$t(filters.offset.id)"
					/>
				</v-col>
			</v-row>
		</v-form>
	</v-container>
</template>

<script>
	import { mapActions } from 'vuex';
	import { format } from 'date-fns';

	export default {
		name: 'SpotifyFilters',
		data() {
			return {
				isLoading: false,
				hasError: false,
				form: {
					isValid: true,
					data: {
						locale: 'en_US',
						country: 'BR',
						datetime: format(new Date(), 'yyyy-MM-dd\'T\'hh:mm:ss'),
						limit: '1',
						offset: '1',
					},
				},
				rules: {
					limit: [
						v => v >= 1 || this.$t('filters.rules.limitMinimum', { value: 1 }),
						v => v <= 50 || this.$t('filters.rules.limitMaximum', { value: 50 }),
					],
					offset: [
						v => v >= 1 || this.$t('filters.rules.offsetMinimum', { value: 1 }),
					],
				},
				filters: {
					locale: null,
					country: null,
					timestamp: null,
					limit: null,
					offset: null,
				},
			};
		},
		watch: {
			'form.data': {
				deep: true,
				handler(data) {
					// Loop through every rule and all of them should be valid
					// Also we compare with strict "true" as the invalid value results in the fallback error string
					const limitIsValid = this.validateRule('limit', data.limit);
					const offsetIsValid = this.validateRule('offset', data.offset);

					if (limitIsValid && offsetIsValid) {
						this.getFeaturedPlaylists(data);
					}
				},
			},
		},
		async created() {
			await this.loadFilters();

			// Even if filters weren't loaded, we still have an initial data defined
			// So we can load the playlists using it
			this.getFeaturedPlaylists(this.form.data);
		},
		methods: {
			...mapActions({
				getFeaturedPlaylists: 'SpotifyBrowser/getFeaturedPlaylists',
			}),
			async loadFilters() {
				try {
					this.isLoading = true;
					this.hasError = false;

					const response = await fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
					const { filters } = await response.json();

					const findFilterById = id => filters.find(f => f.id === id);

					this.filters = {
						locale: findFilterById('locale'),
						country: findFilterById('country'),
						timestamp: findFilterById('timestamp'),
						limit: findFilterById('limit'),
						offset: findFilterById('offset'),
					};
				} catch (error) {
					this.hasError = true;
				} finally {
					this.isLoading = false;
				}
			},
			validateRule(rule, value) {
				return this.rules[rule].every(r => r(value) === true);
			},
		},
	};
</script>
