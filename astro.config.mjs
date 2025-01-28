// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'Sendex Docs',
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
					{ label: 'Request configuration', slug: 'learn-more/request-configuration' },
					{ label: 'Optional flags', slug: 'learn-more/optional-flags' },
					{ label: 'End-to-end testing', slug: 'learn-more/testing' },
					{ label: 'Support', slug: 'learn-more/support' },
				],
			},
		],
	}), tailwind()],
});
