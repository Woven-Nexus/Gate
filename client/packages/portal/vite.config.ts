import { config } from '@roenlie/gate-utilities/build';
import { defineConfig } from 'vite';

export default defineConfig(async (env) => {
	const cfg = await config('', env);

	return {
		...cfg,
		define: {
			__SERVER_URL: JSON.stringify(process.env['SERVER_ENDPOINT']),
		},
	};
});
