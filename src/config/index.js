/**
 * Creates application configuration variables
 * using environment variables
 */
const config = () => ({
	spotify: {
		id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
		secret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET,
	},
});

export default config();
