import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
      '@BaseUi': fileURLToPath(
        new URL('./src/components/base', import.meta.url)
      ),
      '@Composables': fileURLToPath(
        new URL('./src/composables', import.meta.url)
      ),
      '@Helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
      '@Libraries': fileURLToPath(new URL('./src/libraries', import.meta.url)),
      '@Plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@Styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
      '@Types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@Views': fileURLToPath(new URL('./src/views', import.meta.url)),
    },
  },
});
