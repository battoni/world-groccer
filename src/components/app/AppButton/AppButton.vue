<script setup lang="ts">
import { computed } from 'vue';
import { ROLES_ENUM, TYPES_ENUM } from './types';
import BaseLoader from '../../base/BaseLoader/BaseLoader.vue';

interface Emit {
  (e: 'click'): void;
}

interface Props {
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  outset?: boolean;
  role?: ROLES_ENUM;
  type?: TYPES_ENUM;
  wide?: boolean;
}

const emit = defineEmits<Emit>();

const props = withDefaults(defineProps<Props>(), {
  role: ROLES_ENUM.BUTTON,
  type: TYPES_ENUM.SUCCESS,
});

const dynamicClasses = computed(() => {
  return [
    `btn-${props.type}`,
    props.outset || props.loading ? 'outset' : '',
    props.wide ? 'wide' : '',
  ];
});
</script>

<template>
  <button
    :class="['btn', ...dynamicClasses]"
    :disabled="disabled"
    :title="label"
    :type="role"
    @click="emit('click')"
  >
    <BaseLoader
      v-if="loading"
      :type="props.type"
    />

    <template v-else>
      {{ label }}
    </template>
  </button>
</template>

<style scoped>
.btn {
  @apply border
    border-2
    cursor-pointer
    duration-[100ms]
    flex
    font-medium 
    h-[55px]
    items-center
    justify-center
    min-w-[160px]
    max-w-[180px]
    rounded 
    text-[18px]
    transition-[box-shadow]
    transition-[transform];
}

.btn:active {
  @apply scale-95;
}

.btn:hover {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 1px 0px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.btn-success {
  @apply bg-background-success border-border-success;
}

.btn-error {
  @apply bg-background-error border-border-error text-white;
}

.btn-warning {
  @apply bg-background-warning border-border-warning;
}

.btn-information {
  @apply bg-background-information;
}

.btn.outset {
  @apply bg-background-default text-black;
}

.btn.wide {
  @apply w-full max-w-full;
}

.btn:disabled,
.btn:disabled:hover,
.btn:disabled:active {
  @apply cursor-not-allowed shadow-none transform-none;
}

.btn-success:disabled {
  @apply bg-background-success-inactive 
    border-border-success-inactive 
    text-text-inactive;
}

.btn-error:disabled {
  @apply bg-background-error-inactive 
    border-border-error-inactive 
    text-text-inactive;
}

.btn-warning:disabled {
  @apply bg-background-warning-inactive 
    border-border-warning-inactive 
    text-text-inactive;
}

.btn-information:disabled {
  @apply bg-background-information-inactive 
    border-border-warning-inactive 
    text-text-inactive;
}
</style>
