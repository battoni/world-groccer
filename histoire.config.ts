import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
  setupFile: '/src/libraries/histoire/histoire-setup.ts',
  plugins: [HstVue()],
});
