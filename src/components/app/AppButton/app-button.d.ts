import AppButton from './AppButton.vue';
import { AppButtonProps } from './types';

// This export is necessary to not overwrite @vue/runtime-core
export {};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppButton: typeof AppButton;
  }

  export interface ComponentCustomProperties {
    $AppButtonProps: typeof AppButtonProps;
  }
}
