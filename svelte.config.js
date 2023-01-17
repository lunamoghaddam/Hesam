import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// const prod = process.env.NODE_ENV === 'production';
const replace = [[/process\.env\.(\w+)/g, (_, prop) => JSON.stringify(process.env[prop])]];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'css-unused-selector') return;

		handler(warning);
	},

	preprocess: preprocess({
		scss: {
			// to avoid import variables or mixins everytime
			prependData: `@import 'src/lib/scss/index.scss';`
		},
		replace
	}),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),

		alias: {
			$styles: 'src/lib/scss/index.scss',
			$components: 'src/lib/components',
			$directives: 'src/directives',
			$consts: 'src/lib/consts.ts',
			$api: 'src/lib/api/index.ts'
		}
	},

	prerender: {
		default: true
	}
};

export default config;
