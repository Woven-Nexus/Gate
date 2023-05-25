import { maybe } from '@roenlie/mimic-core/async';


export const serverActionFactory = (
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
				.then(r => {
					try { return r.json(); }
					catch (ex: unknown) { return r.text(); }
				})
				.then(r => r),
		);

		return { response, error };
	};

	return createServerAction;
};
