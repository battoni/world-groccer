import type { App } from 'vue';
import Component from './AppText.vue';
import { AppTextProps } from './types';

export default {
  install: (app: App) => {
    app.component('AppText', Component);
    app.config.globalProperties.$AppTextProps = AppTextProps;
  },
};
