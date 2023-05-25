import { serverActionFactory } from './server-action-factory.js';


export const serverAction = serverActionFactory(
	(input) => new URL(input, __SERVER_URL || location.origin),
	(input) => new URLSearchParams(input),
);
