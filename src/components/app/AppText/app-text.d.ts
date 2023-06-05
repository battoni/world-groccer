import AppText from './AppButton.vue';
import { AppTextProps } from './types';

// This export is necessary to not overwrite @vue/runtime-core
export {};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppText: typeof AppText;
  }

  export interface ComponentCustomProperties {
    $AppTextProps: typeof AppTextProps;
  }
}
