import { join, normalize, resolve } from 'node:path';

import fs from 'fs';


declare global {
	interface ServiceTypes {
		'api/routes': RoutesController;
	}
}


export class RoutesController {

	public async find() {
		const path = join(resolve(), normalize('client'));
		const dirents = await fs.promises.readdir(path, { withFileTypes: true });

		const folders = dirents
			.filter(ent => ent.isDirectory() && ent.name !== 'node_modules')
			.map(ent => ent.name);

		// Just return all our messages
		return folders;
	}

}
