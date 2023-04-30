import { Application } from '@feathersjs/koa/lib/declarations.js';
import send from 'koa-send';


export const spaFallback = (
	path: string,
	excludedRoutes: string[] = [],
) => {
	return (app: Application) => {
		app.use(async (ctx, next) => {
			if (excludedRoutes.some(route => ctx.url.startsWith(route)))
				return await next();

			await send(ctx, path);
		});
	};
};
