<script setup lang="ts">
import { BaseIcon } from '@BaseUi';
import { APP_ICONS } from '@Helpers';
</script>

<template>
  <div class="logout">
    <BaseIcon
      isButton
      :icon="APP_ICONS.faDoorOpen"
    />

    <AppText>Log out</AppText>
  </div>
</template>

<style scoped>
.logout {
  @apply flex gap-2 items-center text-text-active;
}
</style>
