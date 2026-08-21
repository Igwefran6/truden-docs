// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://igwefran6.github.io',
	base: '/truden-docs',
	integrations: [
		react(),
		starlight({
			title: 'Truden',
			logo: {
				src: './src/assets/truden-logo-gradient.svg',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				SocialIcons: './src/components/HeaderSocialIcons.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Igwefran6/truden' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation & Quickstart', slug: 'getting-started' },
						{ label: 'Trigger Mechanisms', slug: 'triggers' },
					],
				},
				{
					label: 'Core Modes',
					items: [
						{ label: 'Mode A: Frontend Copilot', slug: 'mode-a' },
						{ label: 'Mode B: Server Vision Adapter', slug: 'mode-b' },
					],
				},
				{
					label: 'Playground',
					items: [
						{ label: 'Live Playground', slug: 'playground' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API & TypeScript Types', slug: 'api-reference' },
						{ label: 'Rendering Capabilities & Limits', slug: 'limitations' },
					],
				},
			],
		}),
	],
});
