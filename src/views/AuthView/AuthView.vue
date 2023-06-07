<script setup lang="ts">
import { BaseLogo } from '@BaseUi';
import { TheCentralizedLayout } from '@Layouts';
</script>

<template>
  <TheCentralizedLayout class="auth-view">
    <BaseLogo logoClasses="max-w-[100px]" />
  </TheCentralizedLayout>
</template>

<style scoped>
.auth-view {
  @apply bg-background-success;
}
</style>
