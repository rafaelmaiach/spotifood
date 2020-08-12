const $vuetify = require('vuetify/es5/locale/pt').default;

module.exports = {
	$vuetify,
	locale: 'Localidade',
	country: 'País',
	timestamp: 'Data e Hora',
	limit: 'Quantidade',
	offset: 'Página',
	general: {
		filters: 'Filtros',
		playlistName: 'Nome da playlist',
		listen: 'Ouça no Spotify',
	},
	filters: {
		errors: {
			list: 'Desculpe, nós não conseguimos buscar os filtros',
		},
		rules: {
			limitMinimum: 'Quantidade mínima é {value}',
			limitMaximum: 'Quantidade máxima é {value}',
			offsetMinimum: 'Menor página é {value}',
		},
	},
	playlists: {
		title: 'Playlist: {value}',
		errors: {
			list: 'Could not fetch playlists data',
			empty: 'Esta playlist está vazia',
			notFound: 'Desculpe, não encontramos essa playlist',
		},
	},
};
