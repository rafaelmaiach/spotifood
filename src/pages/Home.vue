<template>
	<v-container>
		<Filters />
	</v-container>
</template>

<script>
	import Filters from '@/components/Filters/Filters.vue';

	export default {
		name: 'Home',
		components: {
			Filters,
		},
	};
</script>
