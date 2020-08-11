// List of Spotify APIs
const authorizationBaseUrl = 'https://accounts.spotify.com';
const apiBaseUrl = 'https://api.spotify.com/v1';

export default {
	authorize: `${authorizationBaseUrl}/api/token`,
	browse: {
		featuredPlaylists: `${apiBaseUrl}/browse/featured-playlists`,
	},
};
