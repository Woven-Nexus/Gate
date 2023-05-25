import { Application, Id, NullableId, Params } from '@feathersjs/feathers';
import { log } from 'console';


declare global {
	interface ServiceTypes {
		'api/upload': UploadController;
		'api/shootme': any;
	}
}


export class UploadController {

	public async find(params: Params) {
		console.log('find');


		return [];
	}

	public async get(id: Id, params: Params) {
		console.log('get');
	}

	public async create(data: File, params: Params) {
		console.log({ data });

		//return 'hei';
	}

	public async update(id: NullableId, data: any, params: Params) {
		console.log('update');
	}

	public async patch(id: NullableId, data: any, params: Params) {
		console.log('patch');
	}

	public async remove(id: NullableId, params: Params) {
		console.log('remove');
	}

	public async setup(app: Application, path: string) {
		console.log('setup');
	}

	public async teardown(app: Application, path: string) {
		console.log('teardown');
	}

}
