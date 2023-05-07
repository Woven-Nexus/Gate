import { maybe } from '@roenlie/mimic-core/async';


const serverActionFactory = (
	createUrl: (input: string | URL) => URL,
	createSearch: (input: Record<string, any>) => URLSearchParams,
) => {
	type SearchRec = Record<string, string | number>;
	type DataRec = Record<string, any>;
	type DataArr = any[];

	const createServerAction = async <
		TResult extends DataRec | DataArr
	>(
		method: 'GET' | 'POST' | 'PATCH',
		url: string | URL,
		search?: SearchRec,
		data?: DataRec,
	) => {
		const URL = createUrl(url);
		createSearch(search ?? {}).forEach((value, key) => URL.searchParams.set(key, value));

		const [ response, error ] = await maybe<TResult>(
			fetch(URL, { method, body: data ? JSON.stringify(data) : undefined })
				.then(r => r.json())
				.then(r => r),
		);

		return { response, error };
	};


	return createServerAction;
};


const serverAction = serverActionFactory(
	(input) => new URL(input, __SERVER_URL || location.origin),
	(input) => new URLSearchParams(input),
);


export const getRoutesAction = async () => {
	const { response } = await serverAction<string[]>(
		'GET', 'api/routes', { appid: 'portal' },
	);

	if (response)
		return response.filter(r => r !== 'portal');

	return null;
};
