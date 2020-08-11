/* eslint-disable camelcase */
import apiList from './api';

/**
 * @function getFeaturedPlaylists
 * @param {object} params Result of API Token request
 * @param {string} params.access_token Access token
 * @param {string} params.token_type Token type
 * @returns Fetch promise
 */
const getFeaturedPlaylists = ({ access_token, token_type }) => {
	const uri = apiList.browse.featuredPlaylists;

	const fetchOptions = {
		headers: {
			Authorization: `${token_type} ${access_token}`,
		},
	};

	return fetch(uri, fetchOptions);
};

export {
	getFeaturedPlaylists,
};
