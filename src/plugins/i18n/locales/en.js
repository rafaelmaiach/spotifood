const $vuetify = require('vuetify/es5/locale/en').default;

module.exports = {
	$vuetify,
	locale: 'Locale',
	country: 'Country',
	timestamp: 'Date and Time',
	limit: 'Limit',
	offset: 'Page',
	general: {
		filters: 'Filters',
		playlistName: 'Playlist name',
	},
	filters: {
		errors: {
			list: 'Sorry, we could not fetch filter\'s list',
		},
		rules: {
			limitMinimum: 'Minimum quantity is {value}',
			limitMaximum: 'Maximum quantity is {value}',
			offsetMinimum: 'Invalid page',
		},
	},
};
