import { ServiceBundle } from '../../src/service-loader.js';
import { RoutesController } from './routes-controller.js';


export default {
	id:      'portal',
	connect: (app) => {
		app.use('api/routes', new RoutesController());
	},
} satisfies ServiceBundle;
