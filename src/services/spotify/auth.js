/* eslint-disable camelcase */
import config from '@/config';
import apiList from './api';

/**
 * @function getAccessToken
 * @description It will make a POST request to Spotify API Token to get an access token to use on Web API
 * @returns Fetch promise
 */
const getAccessToken = () => {
	const { id, secret } = config.spotify;

	const uri = apiList.authorize;

	const fetchOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `grant_type=client_credentials&client_id=${id}&client_secret=${secret}`,
	};

	return fetch(uri, fetchOptions);
};

export {
	getAccessToken,
};
