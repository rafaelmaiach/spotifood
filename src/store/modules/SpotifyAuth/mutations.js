import {
	SET_ACCESS,
	SET_IS_LOADING,
	SET_HAS_ERROR,
} from './types';

export default {
	[SET_ACCESS](state, access) {
		state.access = access;
	},
	[SET_IS_LOADING](state, flag) {
		state.isLoading = flag;
	},
	[SET_HAS_ERROR](state, flag) {
		state.hasError = flag;
	},
};
