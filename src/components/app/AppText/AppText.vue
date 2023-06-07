<script setup lang="ts">
import { computed } from 'vue';
import { TAGS_ENUM } from './types';

interface Props {
  tag?: TAGS_ENUM;
}

const props = defineProps<Props>();

const classes = computed(() => {
  const isTagP = props.tag && TAGS_ENUM.P;
  const defaultTextClass = props.tag ? `text-${props.tag}` : 'text-p';
  const defaultTextFont = props.tag === isTagP ? 'font-body' : 'font-title';

  return [defaultTextClass, defaultTextFont];
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
.text-h1 {
  @apply text-5xl font-['Murecho'];
}
.text-h2 {
  @apply text-3xl;
}
.text-h3 {
  @apply text-xl;
}
.text-h4 {
  @apply text-lg;
}
.text-p {
  @apply text-base;
}
.text-span {
  @apply text-sm;
}

.font-title {
  @apply font-['Archivo_Black'];
}

.font-body {
  @apply font-['Murecho'];
}
</style>
