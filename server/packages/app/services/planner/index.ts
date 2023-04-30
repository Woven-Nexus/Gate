import { ServiceBundle } from '../../src/service-loader.js';
import { PlannerController } from './planner-controller.js';


export default {
	id:      'planner',
	connect: (app) => {
		app.use('planner', new PlannerController());
	},
} satisfies ServiceBundle;
