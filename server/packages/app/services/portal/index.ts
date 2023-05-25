import { ServiceBundle } from '../../src/service-loader.js';
import { RoutesController } from './routes-controller.js';
import { UploadController } from './upload-controller.js';


export default {
	id:      'portal',
	connect: (app) => {
		app.use('api/routes', new RoutesController());

		app.use('api/upload', new UploadController());
		app.service('api/upload').hooks({
			//around: {
			//	all: [
			//		// A hook that wraps around all other hooks and the service method
			//		// logging the total runtime of a successful call
			//		async (context: HookContext, next: NextFunction) => {
			//			const startTime = Date.now();

			//			await next();

			//			console.log(
			//				`Method ${ context.method } on ${ context.path } took ${ Date.now() - startTime }ms`,
			//			);
			//		},
			//	],
			//},
			//before: {
			//	create: [
			//		async (context: HookContext) => {
			//			context.data = {
			//				...context.data,
			//				createdAt: Date.now(),
			//			};
			//		},
			//	],
			//},
		});
	},
} satisfies ServiceBundle;
