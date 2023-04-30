import { ServiceBundle } from '../../src/service-loader.js';
import { MessageService } from './message-controller.js';


export default {
	id:      'messages',
	connect: (app) => {
		app.use('api/messages', new MessageService());

		// For good measure let's create a message
		// So our API doesn't look so empty
		app.service('api/messages').create({
			text: 'Hello world from the server',
		});
	},
} satisfies ServiceBundle;
