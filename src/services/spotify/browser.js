/* eslint-disable camelcase */
import qs from 'qs';
import apiList from './api';

/**
 * @function getFeaturedPlaylists
 * @param {object} params Result of API Token request
 * @param {string} params.access_token Access token
 * @param {string} params.token_type Token type
 * @returns Fetch promise
 */
const getFeaturedPlaylists = ({ access_token, token_type }, params) => {
	const query = qs.stringify(params);
	const uri = apiList.browse.featuredPlaylists;

	const endpoint = `${uri}?${query}`;

	const fetchOptions = {
		headers: {
			Authorization: `${token_type} ${access_token}`,
		},
	};

	return fetch(endpoint, fetchOptions);
};

export {
	getFeaturedPlaylists,
};
