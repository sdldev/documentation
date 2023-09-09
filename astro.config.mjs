import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Self Documentation',
			social: {
				github: 'https://github.com/sdldev/documentation',
			},
			sidebar: [
				{					
					label: 'Getting Start',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Index', link: '/start/getting-start/' },
						{ label: 'Remote', link: '/start/remote/' },
						{ label: 'First setup', link: '/start/first/' },

					],
				},
				{					
					label: 'Setting',
					autogenerate: { directory: 'setting' },

				},
				{					
					label: 'Hardening',
					autogenerate: { directory: 'hardening' },

				},
				{					
					label: 'Optimation',
					autogenerate: { directory: 'optimation' },

				},
				{					
					label: 'Monitor',
					autogenerate: { directory: 'monitor' },

				},
				{					
					label: 'Engine',
					autogenerate: { directory: 'engine' },

				},
				{					
					label: 'Apps',
					autogenerate: { directory: 'apps' },

				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
