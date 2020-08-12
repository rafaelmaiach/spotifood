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
				<h3 class="mt-5">Sorry, we could not fetch filter's list</h3>
			</v-row>

			<v-row v-else justify="center">
				<v-col cols="12" sm="3" md="2">
					<v-select
						v-if="filters.locale"
						v-model="form.data.locale"
						:items="filters.locale.values"
						:label="filters.locale.name"
						item-text="name"
						item-name="value"
					/>
				</v-col>

				<v-col cols="12" sm="3" md="2">
					<v-select
						v-if="filters.country"
						v-model="form.data.country"
						:items="filters.country.values"
						:label="filters.country.name"
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
						format="YYYY-MM-DDTHH:mm:ss"
						:label="filters.timestamp.name"
					/>
				</v-col>

				<v-col cols="12" sm="4" md="2">
					<v-text-field
						v-if="filters.limit"
						v-model="form.data.limit"
						type="number"
						:rules="rules.limit"
						:label="filters.limit.name"
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
						:label="filters.offset.name"
					/>
				</v-col>
			</v-row>
		</v-form>
	</v-container>
</template>

<script>
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
						datetime: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
						limit: '1',
						offset: '1',
					},
				},
				rules: {
					limit: [
						v => v >= 1 || 'Minimum quantity is 1',
						v => v <= 50 || 'Maximum quantity is 50',
					],
					offset: [
						v => v >= 1 || 'Minimum page is 1',
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
		async created() {
			try {
				this.isLoading = true;
				this.hasError = false;

				const response = await fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
				const { filters } = await response.json();

				const findFilter = id => filters.find(f => f.id === id);

				this.filters = {
					locale: findFilter('locale'),
					country: findFilter('country'),
					timestamp: findFilter('timestamp'),
					limit: findFilter('limit'),
					offset: findFilter('offset'),
				};
			} catch (error) {
				this.hasError = true;
			} finally {
				this.isLoading = false;
			}
		},
	};
</script>
