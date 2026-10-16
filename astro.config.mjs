
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tturatth.com',
  output: 'static',
  redirects: {
    '/blog': '/',
  },
});
