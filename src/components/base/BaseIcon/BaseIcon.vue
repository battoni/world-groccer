<script setup lang="ts">
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fontAwesomeHelper } from '@Helpers';
import { PREFIX_ENUM, STYLE_ENUM } from './types';

interface Props {
  isButton?: boolean;
  icon: IconDefinition;
  style?: STYLE_ENUM;
  prefix?: PREFIX_ENUM;
}

const props = withDefaults(defineProps<Props>(), {
  isButton: false,
  prefix: PREFIX_ENUM.FA,
  style: STYLE_ENUM.SOLID,
});

fontAwesomeHelper().add(props.icon);

const style = computed(() => `${props.prefix}-${props.style}`);
const iconName = computed(() => `${props.prefix}-${props.icon.iconName}`);

const dynamicClasses = computed(() => {
  return [{ 'is-button': props.isButton }];
});
</script>

<template>
  <i :class="['icon', ...dynamicClasses]">
    <FontAwesomeIcon
      class="svg"
      :icon="`${style} ${iconName}`"
    />
  </i>
</template>

<style scoped>
.icon.is-button {
  @apply border-2
    bg-background-success
    border-border-success 
    cursor-pointer
    duration-[200ms]
    flex
    h-[40px]
    items-center
    justify-center
    rounded
    text-white
    transition-[background-color]
    transition-[color]
    transition-[transform]
    w-[40px];
}

.icon.is-button:hover {
  @apply bg-background-default text-text-success;
}

.icon.is-button:active {
  @apply scale-95;
}
</style>
