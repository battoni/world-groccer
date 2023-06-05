<script setup lang="ts">
import { computed } from 'vue';
import { TYPES_ENUM } from './types';

interface Props {
  type?: TYPES_ENUM;
}

const props = withDefaults(defineProps<Props>(), {
  type: TYPES_ENUM.SUCCESS,
});

const borderColor = computed(() => {
  return `border-border-${props.type}`;
});
</script>

<template>
  <div class="loader">
    <div class="loader-wrapper">
      <div :class="['loader-content', borderColor]"></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  @apply bg-none inline-block h-[30px] overflow-hidden w-[30px];
}

.loader-wrapper {
  @apply max-h-full
    max-w-full
    origin-[0_0]
    relative
    scale-[0.3]
    translate-x-0
    translate-y-0;
  backface-visibility: hidden;
}

@keyframes loader-wrapper {
  0% {
    @apply rotate-0 translate-y-[-50%] translate-x-[-50%];
  }
  100% {
    @apply rotate-[360deg] translate-y-[-50%] translate-x-[-50%];
  }
}

.loader-content {
  @apply absolute
    animate-spin animate-[loader-wrapper_1s_linear_infinite]
    border-[10px]
    border-solid
    border-t-transparent
    box-content
    h-[60px]
    left-[50px]
    rounded-[50%]
    top-[50px]
    w-[60px];
}
</style>
