<script setup lang="ts">
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FA_ICONS } from '@Helpers/fontAwesomeHelper/types';
import { STYLE_ENUM } from './types';

const props = defineProps({
  isButton: Boolean,

  icon: {
    type: String,
    required: true,
    validator: (value) => Object.keys(FA_ICONS).includes(value),
  },

  style: {
    default: STYLE_ENUM.SOLID,
    type: String,
    validator: (value) => Object.values(STYLE_ENUM).includes(value),
  },
});

const dynamicClasses = computed(() => {
  return [{ 'is-button': props.isButton }];
});
</script>

<template>
  <i :class="['icon', ...dynamicClasses]">
    <FontAwesomeIcon
      class="svg"
      :icon="`fa-${style} fa-${icon}`"
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
