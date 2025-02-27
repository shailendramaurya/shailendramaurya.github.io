import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), playformCompress()],
  site: 'https://shailen.dedyn.io/',
  base: '/',
  prefetch: {
    prefetchAll: true
  },
  image: {
    service: passthroughImageService()
  }
});