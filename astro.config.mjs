// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// 環境に応じて base と site を変更
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubPages ? '/blog/' : '/';
const site = isGitHubPages 
	? 'https://obcl3.github.io/blog/' 
	: 'https://crow-blog.netlify.app';

// https://astro.build/config
export default defineConfig({
	site: site,
	base: base,
	integrations: [mdx(), sitemap()],
});
