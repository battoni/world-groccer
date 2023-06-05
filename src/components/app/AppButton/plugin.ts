import type { App } from 'vue';
import Component from './AppButton.vue';
import { AppButtonProps } from './types';

export default {
  install: (app: App) => {
    app.component('AppButton', Component);
    app.config.globalProperties.$AppButtonProps = AppButtonProps;
  },
};
