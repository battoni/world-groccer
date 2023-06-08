<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { BaseIcon } from '@BaseUi';

interface Props {
  icon: IconDefinition;
  label: string;
}

defineProps<Props>();
</script>

<template>
  <section class="kpi-highlight-header">
    <BaseIcon
      class="kpi-icon"
      :icon="icon"
    />

    <hr class="divider" />

    <AppText
      tag="h2"
      font="title"
      size="text-regular"
    >
      {{ label }}
    </AppText>
  </section>
</template>

<style scoped>
.kpi-highlight-header {
  @apply mb-2;
}

.kpi {
  @apply p-5;
}

.kpi-icon {
  @apply block text-text-success mb-1 text-xl;
}

.divider {
  @apply border-[var(--color-green)] border-t-4 mb-1 rounded-[4px] w-[30px];
}
</style>
