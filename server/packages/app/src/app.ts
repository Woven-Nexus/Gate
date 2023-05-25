import { feathers } from '@feathersjs/feathers';
import { bodyParser, cors, errorHandler, koa, rest, serveStatic } from '@feathersjs/koa';
import socketio from '@feathersjs/socketio';
import multer from '@koa/multer';
//@ts-expect-error
import dauria from 'dauria';
import blobService from 'feathers-blob';
//@ts-expect-error
import blobStorage from 'fs-blob-store';

import { RoutesController } from '../services/portal/routes-controller.js';
import { UploadController } from '../services/portal/upload-controller.js';
import { serviceLoader } from './service-loader.js';
import { spaFallback } from './spa-fallback.js';

const multipartMiddleware = multer();

declare global {
	interface ServiceTypes { }
}


// Creates an KoaJS compatible Feathers application
const app = koa<ServiceTypes>(feathers());

// Use the current folder for static file hosting
//app.use(serveStatic('client'));

// Register the error handle
app.use(errorHandler());

// Parse JSON request bodies
app.use(bodyParser());

app.configure((app) => {
	app.use(async (context, next) => {
		//context.set('Access-Control-Allow-Origin', context.headers.origin);

		if (context.method === 'OPTIONS') {
			context.body = {
				status: 0,
				msg:    '',
			};
		}

		await next();
	});
});

//app.use(cors({
//	allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS' ],
//	credentials:  true,
//}));
app.use(cors());

// Register the dynamic service loader
//app.configure(serviceLoader('services'));

// Register REST service handler
app.configure(rest());

app.use('api/routes', new RoutesController());
app.use('api/upload', new UploadController(), {
	koa: {
		before: [
			multipartMiddleware.single('file'),
			(ctx, next) => {
				//const uri = dauria.getBase64DataURI(ctx.file.buffer, ctx.file.mimetype);
				ctx.request.body = {
					file: ctx.file,
				};

				return next();
			},
		],
	},
});

// Configure Socket.io real-time APIs
app.configure(socketio());

// Falls back to the given route if no APIS match.
// Routes can be excluded from this forceful redirect.
app.configure(spaFallback('/client/index.html', [ '/api' ]));

// Add any new real-time connection to the `everybody` channel
app.on('connection', (connection) => app.channel('everybody').join(connection));

// Publish all events to the `everybody` channel
app.publish((_data) => app.channel('everybody'));

// Start the server
app.listen(3030).then(() => console.log('Feathers server listening on localhost:3030'));
