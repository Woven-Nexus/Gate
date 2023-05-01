import { resolve } from 'node:path';

import { libConfig } from '@roenlie/package-toolbox/vite';
import { defineConfig } from 'vite';


export default defineConfig(async () => {
	return {
		...await libConfig(),
	};
});
