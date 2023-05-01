import { config } from '@roenlie/gate-utilities/build';
import { defineConfig } from 'vite';


export default defineConfig(async () => {
	return {
		...await config('planner'),
	};
});
