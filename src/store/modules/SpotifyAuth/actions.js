import * as Auth from '@/services/spotify/auth';
import {
	SET_ACCESS,
	SET_IS_LOADING,
	SET_HAS_ERROR,
} from './types';

export default {
	/**
	 * @method getAccess
	 * @description Fetch access from spotify and save it on store
	 */
	async getAccess({ commit }) {
		try {
			commit(SET_IS_LOADING, true);
			commit(SET_HAS_ERROR, false);

			const response = await Auth.getAccessToken();
			const access = await response.json();

			commit(SET_ACCESS, access);
		} catch (error) {
			commit(SET_HAS_ERROR, true);
			commit(SET_ACCESS, null);
		} finally {
			commit(SET_IS_LOADING, false);
		}
	},
};
