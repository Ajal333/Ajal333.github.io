import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ajal333.github.io',
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/og') })],
  build: { inlineStylesheets: 'auto' },
});
