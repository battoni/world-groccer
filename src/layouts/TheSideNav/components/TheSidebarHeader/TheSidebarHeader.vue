<script setup lang="ts">
import { BaseLogo } from '@BaseUi';
</script>

<template>
  <header class="header">
    <BaseLogo
      logoOnly
      logoClasses="w-[80px]"
    />
  </header>
</template>

<style scoped>
.header {
  @apply p-5;
}
</style>
