import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
	outDir: './dist',
	base: '/uidaily/constructor',
	site: 'https://intenseui.dev',
	integrations: [tailwind()],
});
