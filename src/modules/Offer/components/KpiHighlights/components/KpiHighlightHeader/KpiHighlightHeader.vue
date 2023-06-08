<script setup lang="ts">
import { APP_ICONS } from '@Helpers';
import { BaseIcon } from '@BaseUi';

const { faChartLine } = APP_ICONS;
</script>

<template>
  <header class="header">
    <BaseIcon
      class="icon"
      :icon="faChartLine"
    />

    <AppText
      class="text-text-inactive"
      tag="h1"
      font="title"
      size="text-large"
    >
      KPIs Status
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
