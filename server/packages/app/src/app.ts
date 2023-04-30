import { feathers } from '@feathersjs/feathers';
import { bodyParser, errorHandler, koa, rest, serveStatic } from '@feathersjs/koa';
import socketio from '@feathersjs/socketio';

import { serviceLoader } from './service-loader.js';
import { spaFallback } from './spa-fallback.js';


declare global {
	interface ServiceTypes { }
}


// Creates an KoaJS compatible Feathers application
const app = koa<ServiceTypes>(feathers());

// Use the current folder for static file hosting
app.use(serveStatic('client'));

// Register the error handle
app.use(errorHandler());

// Parse JSON request bodies
app.use(bodyParser());

// Register the dynamic service loader
app.configure(serviceLoader('services'));

// Register REST service handler
app.configure(rest());

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
