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
		listen: 'Listen on Spotify',
	},
	filters: {
		errors: {
			list: 'Sorry, we could not fetch filter\'s list',
		},
		rules: {
			limitMinimum: 'Minimum quantity is {value}',
			limitMaximum: 'Maximum quantity is {value}',
			offsetMinimum: 'Minimum page is {value}',
		},
	},
	playlists: {
		title: 'Playlist: {value}',
		errors: {
			list: 'Could not fetch playlists data',
			empty: 'This playlist is empty',
			notFound: 'Sorry, we couldn\'t find this playlist',
		},
	},
};
