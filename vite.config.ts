import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
      '@Composables': fileURLToPath(
        new URL('./src/composables', import.meta.url)
      ),
      '@Helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
      '@Layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@Libraries': fileURLToPath(new URL('./src/libraries', import.meta.url)),
      '@Plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@Styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
      '@Types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@Views': fileURLToPath(new URL('./src/views', import.meta.url)),

      '@AppUi': fileURLToPath(new URL('./src/components/app', import.meta.url)),
      '@BaseUi': fileURLToPath(
        new URL('./src/components/base', import.meta.url)
      ),
      '@ComposedUi': fileURLToPath(
        new URL('./src/components/composed', import.meta.url)
      ),

      '@AuthModule': fileURLToPath(
        new URL('./src/modules/Auth', import.meta.url)
      ),
      '@OfferModule': fileURLToPath(
        new URL('./src/modules/Offer', import.meta.url)
      ),
    },
  },
  test: {
    setupFiles: ['src/libraries/vitest/setup.ts'],
  },
});
