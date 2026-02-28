// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// 環境に応じて設定を変更
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// GitHub Pages では base なし（リポジトリ名はリポジトリのセッティングで使用）
// Netlify では base なし（ルートパスで動作）
const site = isGitHubPages 
	? 'https://obcl3.github.io/blog/' 
	: 'https://crow-blog.netlify.app';

// https://astro.build/config
export default defineConfig({
	site: site,
	// GitHub Pages ではリポジトリ設定で /blog/ を自動適用
	// base は設定しない（ダブルパスを防ぐ）
	integrations: [mdx(), sitemap()],
});
