import { resolve } from 'node:path';

import { config } from 'dotenv';
import { defineConfig } from 'vite';


export default defineConfig(async () => {
	config();

	return {
		base: '/planner',

		build: {
			lib: {
				entry:   resolve('./src/index.ts'),
				formats: [ 'es' ],
			},

			rollupOptions: {

				output: {
					sourcemap: true,

					/** By preseving modules, we retain the folder structure of the original source, thereby allowing
					 *  generated d.ts files to be correctly picked up. */
					preserveModules: true,

					/** We remove src from any module paths to preserve the folder structure incase any virtual or node_modules
					 *  files are included */
					preserveModulesRoot: '../',

					/** We rename the file path to the file name and .js
					 *  If we don't do this, in combination with preserve modules, we end up with double file paths. */
					entryFileNames: (entry) => {
						return `${
							entry.name
								.replaceAll('.pnpm/', '')
								.replaceAll('src/', '')
								.replaceAll('gate-planner', 'planner')
						}.js`;
					},
				},
			},
		},
	};
});
