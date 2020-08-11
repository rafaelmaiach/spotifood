import { addSeconds } from 'date-fns';

import {
	SET_ACCESS,
	SET_IS_LOADING,
	SET_HAS_ERROR,
} from './types';

export default {
	[SET_ACCESS](state, access) {
		state.access = access;

		// Creates an expiration time to know when fetch a new access token
		// So we don't overload the authorization api
		if (access) {
			state.tokenExpireDate = addSeconds(new Date(), access.expires_in);
		} else {
			state.tokenExpireDate = null;
		}
	},
	[SET_IS_LOADING](state, flag) {
		state.isLoading = flag;
	},
	[SET_HAS_ERROR](state, flag) {
		state.hasError = flag;
	},
};
