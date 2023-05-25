import { serverAction } from './server-action.js';


export const getRoutesAction = async () => {
	const { response } = await serverAction<string[]>(
		'GET', 'api/routes', { appid: 'portal' },
	);

	if (response)
		return response.filter(r => r !== 'portal');

	return null;
};
