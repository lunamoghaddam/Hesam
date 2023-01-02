import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 8080
	},
	preview: {
		host: '0.0.0.0',
		port: 8080
	},
	build: {
		chunkSizeWarningLimit: 1024,
		sourcemap: true
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
