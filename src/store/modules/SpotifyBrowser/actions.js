import * as Browser from '@/services/spotify/browser';
import {
	SET_FEATURED_PLAYLISTS,
	SET_IS_LOADING,
	SET_HAS_ERROR,
} from './types';

export default {
	/**
	 * @method getFeaturedPlaylists
	 * @description Fetch featured playlists from spotify and save it on store
	 */
	async getFeaturedPlaylists({ commit, rootState }, params) {
		try {
			commit(SET_IS_LOADING, true);
			commit(SET_HAS_ERROR, false);

			const response = await Browser.getFeaturedPlaylists(rootState.SpotifyAuth.access, params);
			const playlists = await response.json();

			commit(SET_FEATURED_PLAYLISTS, playlists);
		} catch (error) {
			commit(SET_HAS_ERROR, true);
		} finally {
			commit(SET_IS_LOADING, false);
		}
	},
};
