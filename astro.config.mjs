import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://sahilk.io',
  integrations: [tailwind()], 
});