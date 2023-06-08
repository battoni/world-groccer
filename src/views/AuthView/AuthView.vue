<script setup lang="ts">
import { BaseLogo } from '@BaseUi';
import { TheCentralizedLayout } from '@Layouts';
</script>

<template>
  <TheCentralizedLayout class="auth-view">
    <BaseLogo logoClasses="max-w-[100px]" />

    <AppButton
      class="button"
      :type="$AppButtonProps.TYPES_ENUM.INFORMATION"
      label="Sign In"
      @click="$router.push('/')"
    />
  </TheCentralizedLayout>
</template>

<style scoped>
.auth-view {
  @apply bg-background-success;
}

.button {
  @apply m-auto mt-5;
}
</style>
