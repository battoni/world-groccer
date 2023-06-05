import type { App } from 'vue';
import AppButton from './AppButton.vue';
import { AppButtonProps } from './types';

export default {
  install: (app: App) => {
    app.component('AppButton', AppButton);
    app.config.globalProperties.$AppButtonProps = AppButtonProps;
  },
};
