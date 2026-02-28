// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// 環境に応じて設定を変更
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// GitHub Pages（obcl3/blog リポジトリ）では site だけでいい（base は不要）
// Netlify ではルートパス
const site = isGitHubPages 
	? 'https://obcl3.github.io/blog/' 
	: 'https://crow-blog.netlify.app';

// NOTE: GitHub Pages ではリポジトリの /blog/ パスが自動適用される
// base を '/blog/' にするとダブルパス /blog/blog/ になるのでNG
const base = '/';

// https://astro.build/config
export default defineConfig({
	site: site,
	base: base,
	integrations: [mdx(), sitemap()],
});
