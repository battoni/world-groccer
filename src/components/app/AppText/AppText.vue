<script setup lang="ts">
import { computed } from 'vue';
import { FONTS_ENUM, TAGS_ENUM } from './types';

interface Props {
  tag?: TAGS_ENUM;
  font?: FONTS_ENUM;
  size?: string;
}

const props = defineProps<Props>();

const classes = computed(() => {
  const defaultTextClass = props.size ?? 'text-default';
  const defaultTextFont = props.font ?? FONTS_ENUM.BODY;

  return ['text', defaultTextClass, defaultTextFont];
});
</script>

<template>
  <component
    :is="tag ?? 'p'"
    :class="classes"
  >
    <slot />
  </component>
</template>

<style scoped>
.text-extra-large {
  @apply text-5xl;
}
.text-large {
  @apply text-3xl;
}
.text-medium {
  @apply text-xl;
}
.text-regular {
  @apply text-lg;
}
.text-default {
  @apply text-base;
}
.text-small {
  @apply text-sm;
}

.font-title {
  @apply font-['Murecho'] font-bold;
}

.font-body {
  @apply font-['Murecho'];
}
</style>
