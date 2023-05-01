import { join, normalize, relative, resolve, sep } from 'node:path';

import { Application } from '@feathersjs/koa/lib/declarations.js';
import { getFiles } from '@roenlie/package-toolbox/filesystem';

import { genToArray } from './utils/gen-to-array.js';


export type ServiceBundle = {
	id: string;
	connect: (app: Application) => void;
}


const registerIdCache = new Set<string>();


export const serviceLoader = (
	dir: string, options?: {
		idSource?: 'search' | 'header' | 'either'
	},
) => {
	const { idSource = 'either' } = options ?? {};

	return (app: Application) => {
		app.use(async (ctx, next) => {
			let appId = '';

			if (!appId && (idSource === 'either' || idSource === 'search')) {
				const search = new URLSearchParams(ctx.search);
				const searchAppId = search.get('appid');
				searchAppId &&	(appId = searchAppId);
			}
			if (!appId && (idSource === 'either' || idSource === 'header')) {
				const headerAppId = ctx.headers['app-id'];
				headerAppId && typeof headerAppId === 'string' && (appId = headerAppId);
			}

			if (appId) {
				if (registerIdCache.has(appId))
					return next();

				registerIdCache.add(appId);

				const available = await genToArray(
					getFiles(join(resolve(), normalize(dir)), /.+index.ts/),
				);

				const importPromises = available.map(async (filename) => {
					const targetProjRel = filename;
					const currentProjRel = join(resolve(), 'src')
						.replaceAll('/', sep);
					const relativePath = relative(currentProjRel, targetProjRel)
						.replaceAll('\\', '/');

					const bundle = await import(relativePath)
						.then((m: {default: ServiceBundle}) => m.default);

					if (bundle.id === appId)
						bundle.connect(app);
				});

				await Promise.all(importPromises);
			}

			await next();
		});
	};
};
