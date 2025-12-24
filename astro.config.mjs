// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.naturalhealthtrinity.com',
	vite: {
		build: {
			cssCodeSplit: true,
			assetsInlineLimit: 8192
		}
	}
});
