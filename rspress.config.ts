import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

const siteUrl = 'https://kighub.cn';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'KigHub',
  description: '这是一份简单的娃生手册，欢迎收藏。开放编辑中，期待你加入！',
  icon: '/kighub-icon.png',
  lang: 'zh',
  logo: {
    light: '/kighub-light-logo.png',
    dark: '/kighub-dark-logo.png',
  },
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    lastUpdated: process.env.NODE_ENV === 'production',
    footer: {
      message: '© 2026-present KigHub.',
    },
    editLink: {
      docRepoBaseUrl:
        'https://github.com/kighub/kighub/tree/main/docs',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/kighub/kighub',
      },
    ],
  },
  plugins: [
    pluginSitemap({
      siteUrl,
      defaultChangeFreq: 'daily',
    }),
  ],
});
