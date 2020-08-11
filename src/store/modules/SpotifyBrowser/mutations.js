import {
	SET_FEATURED_PLAYLISTS,
	SET_IS_LOADING,
	SET_HAS_ERROR,
} from './types';

export default {
	[SET_FEATURED_PLAYLISTS](state, playlists) {
		state.featuredPlaylists = playlists;
	},
	[SET_IS_LOADING](state, flag) {
		state.isLoading = flag;
	},
	[SET_HAS_ERROR](state, flag) {
		state.hasError = flag;
	},
};
