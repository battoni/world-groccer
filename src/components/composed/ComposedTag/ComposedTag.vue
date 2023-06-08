<script setup lang="ts">
import { computed } from 'vue';
import { APP_ICONS } from '@Helpers';
import { TYPES_ENUM } from './types';
import { BaseIcon } from '@BaseUi';

interface Emit {
  (e: 'click'): void;
}

interface Props {
  closable?: Boolean;
  label: string;
  type?: TYPES_ENUM;
}

const emit = defineEmits<Emit>();

const props = withDefaults(defineProps<Props>(), {
  type: TYPES_ENUM.SUCCESS,
});

const dynamicClasses = computed(() => {
  return [
    `bg-background-${props.type}`,
    props.closable ? 'cursor-pointer pr-[10px]' : 'pr-[5px]',
  ];
});
</script>

<template>
  <span
    :class="['tag', ...dynamicClasses]"
    @click="emit('click')"
  >
    <AppText size="text-small">
      {{ label }}
    </AppText>

    <BaseIcon
      v-if="closable"
      class="tag-close"
      :icon="APP_ICONS.faCircleXmark"
    />
  </span>
</template>

<style scoped>
.tag {
  @apply border relative rounded pl-[5px] py-[5px];
}

.tag-close {
  @apply absolute top-[-5px] right-[-6px];
}
</style>
