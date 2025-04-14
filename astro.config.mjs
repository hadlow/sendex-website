// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://sendex.dev',
	integrations: [starlight({
		title: 'Sendex Docs',
		logo: {
			src: './src/assets/logo.svg',
			replacesTitle: true,
		},
		social: {
			github: 'https://github.com/hadlow/sendex',
		},
		sidebar: [
			{
				label: 'Getting started',
				items: [
					{ label: 'Introduction', slug: 'getting-started/intro' },
					{ label: 'Installation', slug: 'getting-started/installation' },
					{ label: 'Basic usage', slug: 'getting-started/basic-usage' },
				],
			},
			{
				label: 'Learn more',
				items: [
					{ label: 'Outputs', slug: 'learn-more/outputs' },
					{ label: 'Environment variables', slug: 'learn-more/environment-variables' },
					{ label: 'Request configuration', slug: 'learn-more/request-configuration' },
					{ label: 'Optional flags', slug: 'learn-more/optional-flags' },
					{ label: 'End-to-end testing', slug: 'learn-more/testing' },
					{ label: 'Support', slug: 'learn-more/support' },
				],
			},
		],
	}), tailwind()],
});
