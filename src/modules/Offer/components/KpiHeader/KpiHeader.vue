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
  <header class="header">
    <BaseIcon
      class="icon"
      :icon="icon"
    />

    <AppText
      class="text-text-inactive"
      tag="h1"
      font="title"
      size="text-large"
    >
      {{ label }}
    </AppText>
  </header>
</template>

<style scoped>
.header {
  @apply flex gap-2 items-center mb-5;
}
.icon {
  @apply text-text-inactive text-2xl;
}
</style>
