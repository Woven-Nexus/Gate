import path, { resolve } from 'node:path';

import { config as dotEnv } from 'dotenv';
import { ConfigEnv, UserConfigExport } from 'vite';


export const config = async (base: string, env: ConfigEnv): Promise<UserConfigExport> => {
	let envPath: string | undefined = undefined;

	if (env.mode === 'production')
		envPath = path.resolve(process.cwd(), '.env.production');
	else if (env.mode === 'development')
		envPath = path.resolve(process.cwd(), '.env.development');

	dotEnv({ path: envPath });

	return {
		base: base ? ('/' + base) : undefined,

		build: {
			lib: {
				entry:   resolve('./src/index.ts'),
				formats: [ 'es' ],
			},

			rollupOptions: {
				output: {
					sourcemap: true,

					/** By preseving modules, we retain the folder structure of the original source,
					 *  thereby allowing generated d.ts files to be correctly picked up. */
					preserveModules: true,

					/** This moves output one level up, making the external deps a sibling of the project. */
					preserveModulesRoot: '../',

					/** We rename the file path to the file name and .js
					 *  If we don't do this, in combination with preserve modules,
					 *  we end up with double file paths. */
					entryFileNames: (entry) => {
						return entry.name
							.replaceAll('.pnpm/', '')
							.replaceAll('src/', '') + '.js';
					},
				},
			},
		},
	};
};
